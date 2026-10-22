#!/usr/bin/env python3
"""Collect four weeks of US Treasury demand/flow evidence from primary sources.

Sources (all free, verified reachable):
  * TreasuryDirect auction results JSON  — issuance/auction demand
  * Federal Reserve H.4.1 (weekly)       — custody holdings for foreign official accounts
  * FiscalData DTS                       — Treasury General Account balance
  * NY Fed markets API                   — ON RRP take-up
  * Treasury TIC MFH                     — major foreign holders
  * CFTC financial-futures CoT           — Treasury futures positioning
  * Treasury daily par yield curve       — level/curve context

Output: one JSON document with the raw series and the derived four-week deltas.
"""
from __future__ import annotations

import csv
import html as html_mod
import io
import json
import re
import subprocess
import sys
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

OUT = Path('/home/kjkim/dev/akaslany.github.io/assets/data/treasury-demand')
CACHE = Path('/home/kjkim/.hermes/cache/scratch/td-cache')
UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0 Safari/537.36'


def curl(url: str, *, timeout: int = 60) -> bytes:
    proc = subprocess.run(['curl', '-sS', '-L', '--max-time', str(timeout), '-A', UA, url],
                          capture_output=True, timeout=timeout + 15)
    if proc.returncode:
        raise RuntimeError(f'curl failed rc={proc.returncode} for {url}: {proc.stderr[-300:]!r}')
    return proc.stdout


def cached(name: str, url: str, *, max_age_hours: int = 6) -> bytes:
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / name
    if path.is_file():
        age = datetime.now(timezone.utc).timestamp() - path.stat().st_mtime
        if age < max_age_hours * 3600:
            return path.read_bytes()
    data = curl(url)
    path.write_bytes(data)
    return data


def num(value) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


# ---------------------------------------------------------------- auctions
def auctions(days: int = 56) -> list[dict]:
    raw = json.loads(cached(f'auctions-{days}.json',
                             f'https://www.treasurydirect.gov/TA_WS/securities/auctioned?format=json&days={days}'))
    rows = []
    for r in raw:
        offering = num(r.get('offeringAmount'))
        if not offering:
            continue
        def share(key: str) -> float | None:
            v = num(r.get(key))
            return round(v / offering * 100, 2) if v is not None and offering else None
        rows.append({
            'date': (r.get('auctionDate') or r.get('competitiveAuctionCloseDate') or r.get('issueDate') or '')[:10],
            'security': r.get('securityDescription') or r.get('securityTerm'),
            'type': r.get('securityType'),
            'term': r.get('securityTerm'),
            'offering_bn': round(offering / 1e9, 2),
            'btc': num(r.get('bidToCoverRatio')),
            'high_yield': num(r.get('highYield')) if r.get('highYield') else num(r.get('allottedAtHighYieldPercentage')),
            'median_yield': num(r.get('medianYield')),
            'indirect_pct': share('indirectBiddersCompetitiveParAwarded'),
            'direct_pct': share('directBiddersCompetitiveParAwarded'),
            'dealer_pct': share('primaryDealersCompetitiveParAwarded'),
            'soma_pct': share('somaParAwarded') if r.get('somaParAwarded') else None,
        })
    return sorted(rows, key=lambda r: r['date'])


# ---------------------------------------------------------------- H.4.1
H41_TZ = re.compile(r'releases/h41/(\d{8})/h41\.htm')


def h41_custody() -> list[dict]:
    """Weekly marketable Treasury securities held in custody for foreign official accounts.

    The release index does not link the weekly archives, so the Thursday dates are
    probed directly. Values are millions of dollars at face value; a change is a
    flow, not a valuation effect.
    """
    out = []
    today = date.today()
    thursday = today - timedelta(days=(today.weekday() - 3) % 7)
    for k in range(6):
        day = thursday - timedelta(days=7 * k)
        stamp = day.strftime('%Y%m%d')
        try:
            html = curl(f'https://www.federalreserve.gov/releases/h41/{stamp}/h41.htm').decode('utf-8', 'replace')
        except RuntimeError:
            continue
        text = re.sub(r'\s+', ' ', html_mod.unescape(re.sub(r'<[^>]+>', ' ', html)))
        m = re.search(r'Marketable U\.S\. Treasury securities\s*1?\s*([\d,]+)\s*([+-])\s*([\d,]+)', text)
        if not m:
            continue
        level = float(m.group(1).replace(',', '')) / 1000
        change = float(m.group(3).replace(',', '')) / 1000
        if m.group(2) == '-':
            change = -change
        out.append({'week_ended': day.isoformat(), 'level_bn': round(level, 1), 'wow_change_bn': round(change, 1)})
    return sorted(out, key=lambda r: r['week_ended'])


# ---------------------------------------------------------------- FiscalData TGA
def tga(days: int = 40) -> list[dict]:
    start = (date.today() - timedelta(days=days)).isoformat()
    url = ('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/operating_cash_balance'
           f'?filter=record_date:gte:{start}&sort=record_date'
           '&fields=record_date,account_type,open_today_bal,close_today_bal&page%5Bsize%5D=500')
    payload = json.loads(cached('tga-v2.json', url))
    rows = []
    for r in payload['data']:
        if 'Closing Balance' not in r.get('account_type', ''):
            continue
        # The closing-balance rows carry the value in open_today_bal and leave
        # close_today_bal null; accept either so the series cannot silently empty.
        bal = num(r.get('close_today_bal')) or num(r.get('open_today_bal'))
        if bal is None:
            continue
        rows.append({'date': r['record_date'], 'balance_bn': round(bal / 1000, 1)})
    return rows


# ---------------------------------------------------------------- ON RRP
def rrp(days: int = 40) -> list[dict]:
    """ON RRP take-up per operation day (NY Fed markets API, last N results)."""
    cutoff = (date.today() - timedelta(days=days)).isoformat()
    payload = json.loads(cached('rrp.json',
                                'https://markets.newyorkfed.org/api/rp/reverserepo/all/results/last/45.json'))
    daily: dict[str, float] = {}
    for op in payload.get('repo', {}).get('operations', []):
        day = op.get('operationDate')
        if not day or day < cutoff:
            continue
        amt = num(op.get('totalAmtAccepted')) or 0
        daily[day] = round(daily.get(day, 0) + amt / 1e9, 1)
    return [{'date': k, 'accepted_bn': v} for k, v in sorted(daily.items())]


# ---------------------------------------------------------------- TIC MFH
def tic_mfh() -> dict:
    """Latest published Major Foreign Holders table (month-end holdings, 2-month lag)."""
    text = cached('mfh-hist.txt',
                  'https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/mfhhis01.txt',
                  max_age_hours=24).decode('utf-8', 'replace')
    lines = [l.rstrip('\n') for l in text.splitlines() if l.strip()]
    months: list[str] = []
    for k, line in enumerate(lines[:14]):
        cols = [c.strip() for c in line.split('\t') if c.strip()]
        if len(cols) >= 3 and all(re.fullmatch(r'[A-Z][a-z]{2}', c) for c in cols[:3]):
            years = [c.strip() for c in lines[k + 1].split('\t') if c.strip()] if k + 1 < len(lines) else []
            years = [y for y in years if re.fullmatch(r'\d{4}', y)]
            year = years[0] if years else ''
            months = [f'{c} {year}'.strip() for c in cols[:2]]
            break
    rows = []
    for line in lines:
        cols = [c.strip().strip('"') for c in line.split('\t')]
        if len(cols) < 4 or not cols[0] or cols[0] in ('Country',):
            continue
        latest, prior = num(cols[1]), num(cols[2])
        if latest is None or prior is None:
            continue
        rows.append({'country': cols[0], 'latest_bn': round(latest, 1), 'prior_bn': round(prior, 1),
                     'change_bn': round(latest - prior, 1)})
    return {'months': months, 'vintage_note': 'TIC MFH is published monthly with a ~2-month lag; the newest '
                                              'file reachable from this host was used and its month is named below.',
            'rows': rows[:20]}


# ---------------------------------------------------------------- CoT
def cot(weeks: int = 6) -> dict:
    """TFF positioning for Treasury futures: asset managers vs leveraged funds.

    The weekly 'FinFutWk.txt' carries the legacy categories, so the yearly TFF
    archive is used instead (Dealer / Asset_Mgr / Lev_Money columns). Net = long -
    short in contracts; the four-week change is the positioning signal.
    """
    import zipfile
    raw = cached('fut_fin_2026.zip', 'https://www.cftc.gov/files/dea/history/fut_fin_txt_2026.zip',
                 max_age_hours=24)
    with zipfile.ZipFile(io.BytesIO(raw)) as zf:
        name = next(n for n in zf.namelist() if n.lower().endswith('.txt'))
        text = zf.read(name).decode('utf-8', 'replace')
    wanted = {'UST 2Y NOTE': '2Y', 'UST 5Y NOTE': '5Y', 'UST 10Y NOTE': '10Y',
              'UST BOND': 'Bond', 'UST ULTRA BOND': 'Ultra Bond'}
    rows = []
    for r in csv.DictReader(io.StringIO(text)):
        market = (r.get('Market_and_Exchange_Names') or '').upper()
        for prefix, label in wanted.items():
            if market.startswith(prefix) and 'CHICAGO' in market:
                try:
                    am_l = int(r['Asset_Mgr_Positions_Long_All']); am_s = int(r['Asset_Mgr_Positions_Short_All'])
                    lv_l = int(r['Lev_Money_Positions_Long_All']); lv_s = int(r['Lev_Money_Positions_Short_All'])
                except (KeyError, ValueError):
                    break
                rows.append({'market': label, 'as_of': r['Report_Date_as_YYYY-MM-DD'],
                             'open_interest': int(r['Open_Interest_All']),
                             'asset_mgr_net': am_l - am_s, 'lev_money_net': lv_l - lv_s,
                             'dealer_net': int(r['Dealer_Positions_Long_All']) - int(r['Dealer_Positions_Short_All'])})
                break
    dates = sorted({r['as_of'] for r in rows})[-weeks:]
    series = {}
    for label in wanted.values():
        points = sorted((r for r in rows if r['market'] == label and r['as_of'] in dates),
                        key=lambda r: r['as_of'])
        if points:
            series[label] = points
    return {'report_dates': dates, 'series': series, 'unit': 'futures contracts, net = long - short'}


# ---------------------------------------------------------------- yield curve
def yields() -> list[dict]:
    year = date.today().year
    url = ('https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/'
           f'{year}/all?type=daily_treasury_yield_curve&field_tdr_date_value={year}&page&_format=csv')
    raw = cached('yields.csv', url, max_age_hours=12).decode('utf-8', 'replace')
    rows = []
    for r in csv.DictReader(io.StringIO(raw)):
        rows.append({'date': r['Date'], 'm2': num(r.get('2 Yr')), 'm5': num(r.get('5 Yr')),
                     'm10': num(r.get('10 Yr')), 'm30': num(r.get('30 Yr'))})
    rows.sort(key=lambda r: datetime.strptime(r['date'], '%m/%d/%Y'))
    for r in rows:
        r['date'] = datetime.strptime(r['date'], '%m/%d/%Y').date().isoformat()
        if r['m2'] and r['m10']:
            r['s2s10'] = round((r['m10'] - r['m2']) * 100, 1)
    return rows


def main() -> int:
    today = date.today()
    cutoff_recent = (today - timedelta(days=28)).isoformat()
    cutoff_prior = (today - timedelta(days=56)).isoformat()
    data = {
        'generated_at': datetime.now(timezone.utc).isoformat(),
        'window': {'recent_from': cutoff_recent, 'prior_from': cutoff_prior, 'through': today.isoformat()},
    }
    data['auctions'] = auctions()
    data['custody'] = h41_custody()
    data['tga'] = tga()
    data['rrp'] = rrp()
    data['tic'] = tic_mfh()
    try:
        data['cot'] = cot()
    except Exception as exc:  # noqa: BLE001 - positioning is optional evidence
        data['cot'] = {'error': str(exc)}
    data['yields'] = yields()
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f'{today.isoformat()}.json'
    path.write_text(json.dumps(data, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(json.dumps({'path': str(path), 'auctions': len(data['auctions']), 'custody': len(data['custody']),
                      'tga': len(data['tga']), 'rrp': len(data['rrp']), 'cot_markets': len((data['cot'] or {}).get('series', {})),
                      'yields': len(data['yields']), 'tic_months': data['tic']['months']}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
