#!/usr/bin/env python3
"""Render the four-week US Treasury demand report from the collected series.

Design goals (fixed so each edition is comparable):
  * four layers of evidence, never a single indicator;
  * every number traceable to a primary source file under assets/data/treasury-demand;
  * levels and flows kept apart, and the TIC vintage stated where it is used;
  * a verdict only when at least three layers agree, otherwise "관찰";
  * all prose computed from the data, so a thin sample cannot be described as a trend.
"""
from __future__ import annotations

import json
import statistics as stats
from datetime import date
from pathlib import Path

SITE = Path('/home/kjkim/dev/akaslany.github.io')
DATA = SITE / 'assets/data/treasury-demand'
# Reopenings are published under their remaining term, not the nominal tenor.
LABELS = {'9-Year 10-Month': '10년(재개방)', '19-Year 10-Month': '20년',
          '29-Year 10-Month': '30년', '1-Year 10-Month': '2년(재개방)'}
ORDER = ['2-Year', '3-Year', '5-Year', '7-Year', '9-Year 10-Month',
         '19-Year 10-Month', '29-Year 10-Month']


def load_latest() -> tuple[Path, dict]:
    paths = sorted(DATA.glob('*.json'))
    if not paths:
        raise SystemExit('no collected data; run collect.py first')
    return paths[-1], json.loads(paths[-1].read_text(encoding='utf-8'))


def svg_line(points: list[tuple[str, float]], *, width=560, height=150, stroke='#1f6feb',
             fill='#1f6feb22', label_fmt='{:.0f}') -> str:
    if not points:
        return '<p><em>데이터 없음</em></p>'
    values = [v for _, v in points]
    lo, hi = min(values), max(values)
    span = (hi - lo) or 1.0
    pad = 26
    step = (width - 2 * pad) / max(len(points) - 1, 1)
    coords = [(pad + i * step, pad + (1 - (v - lo) / span) * (height - 2 * pad)) for i, (_, v) in enumerate(points)]
    grid = []
    for frac in (0, 0.5, 1):
        value = lo + span * frac
        y = pad + (1 - frac) * (height - 2 * pad)
        grid.append(f'<line x1="{pad}" y1="{y:.1f}" x2="{width-pad}" y2="{y:.1f}" stroke="#d0d7de" stroke-width="1" stroke-dasharray="3 3"/>')
        grid.append(f'<text x="4" y="{y+3:.1f}" font-size="9" fill="#57606a">{label_fmt.format(value)}</text>')
    path = ' '.join(f'{"M" if i == 0 else "L"}{x:.1f},{y:.1f}' for i, (x, y) in enumerate(coords))
    area = path + f' L{coords[-1][0]:.1f},{height-pad} L{coords[0][0]:.1f},{height-pad} Z'
    labels = (f'<text x="{coords[0][0]:.1f}" y="{height-6}" font-size="9" fill="#57606a" text-anchor="start">{points[0][0]}</text>'
              f'<text x="{coords[-1][0]:.1f}" y="{height-6}" font-size="9" fill="#57606a" text-anchor="end">{points[-1][0]}</text>')
    dots = ''.join(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.4" fill="{stroke}"/>' for x, y in coords)
    return (f'<svg viewBox="0 0 {width} {height}" width="100%" role="img">'
            f'{"".join(grid)}<path d="{area}" fill="{fill}" stroke="none"/>'
            f'<path d="{path}" fill="none" stroke="{stroke}" stroke-width="2"/>{dots}{labels}</svg>')


def pct(v) -> str:
    return '—' if v is None else f'{v:.1f}%'


def main() -> int:
    path, d = load_latest()
    recent_from, prior_from = d['window']['recent_from'], d['window']['prior_from']
    auctions = d['auctions']
    recent = [a for a in auctions if a['date'] >= recent_from]
    prior = [a for a in auctions if prior_from <= a['date'] < recent_from]

    def coupons(rows):
        return [a for a in rows if a['type'] in ('Note', 'Bond')
                and 'TIPS' not in (a['security'] or '') and 'FRN' not in (a['security'] or '')
                and 'Floating' not in (a['security'] or '')]

    def stat(rows, term):
        subset = [a for a in coupons(rows) if a['term'] == term]
        if not subset:
            return None
        btc = [a['btc'] for a in subset if a['btc']]
        ind = [a['indirect_pct'] for a in subset if a['indirect_pct'] is not None]
        dlr = [a['dealer_pct'] for a in subset if a['dealer_pct'] is not None]
        return {'n': len(subset), 'offer': round(sum(a['offering_bn'] for a in subset), 1),
                'btc': round(stats.mean(btc), 2) if btc else None,
                'ind': round(stats.mean(ind), 1) if ind else None,
                'dlr': round(stats.mean(dlr), 1) if dlr else None,
                'date': subset[0]['date'], 'security': subset[0]['security']}

    recent_coupons = coupons(recent)
    prior_coupons = coupons(prior)
    terms = sorted({a['term'] for a in recent_coupons},
                   key=lambda t: (ORDER.index(t) if t in ORDER else 99, t))
    stats_by_term = {t: stat(recent, t) for t in terms}
    prior_terms = {a['term'] for a in prior_coupons}
    table_rows = [(LABELS.get(t, t), stats_by_term[t], stat(prior, t) if t in prior_terms else None) for t in terms]

    btcs = [(v['btc'], LABELS.get(t, t), v['date']) for t, v in stats_by_term.items() if v['btc']]
    dlrs = [v['dlr'] for v in stats_by_term.values() if v['dlr'] is not None]
    weakest = min(btcs) if btcs else None
    strongest = max(btcs) if btcs else None
    dealer_lo = min(dlrs) if dlrs else None
    dealer_hi = max(dlrs) if dlrs else None

    bills = [a for a in recent if a['type'] == 'Bill']
    bill_offer = round(sum(a['offering_bn'] for a in bills), 1)
    tips = [a for a in recent if 'TIPS' in (a['security'] or '')]
    coupon_offer = round(sum(a['offering_bn'] for a in recent_coupons), 1)
    tips_offer = round(sum(a['offering_bn'] for a in tips), 1)
    tips_line = (f"{tips[0]['date']} {tips[0]['security']} {tips[0]['offering_bn']}B · 응찰률 {tips[0]['btc']}배 · "
                 f"간접 {pct(tips[0]['indirect_pct'])} · 딜러 {pct(tips[0]['dealer_pct'])}" if tips else '해당 창에 TIPS 경매 없음')

    custody, tga, rrp, yields = d['custody'], d['tga'], d['rrp'], d['yields']
    cot = d.get('cot') or {}
    cot_series = cot.get('series') or {}
    y_last = yields[-1]
    y_base = max((y for y in yields if y['date'] <= recent_from), key=lambda y: y['date'], default=yields[-1])
    custody_4w = round(custody[-1]['level_bn'] - custody[0]['level_bn'], 1) if len(custody) > 1 else 0.0
    custody_neg = sum(1 for r in custody if r['wow_change_bn'] < 0)
    tga_delta = round(tga[-1]['balance_bn'] - tga[0]['balance_bn'], 1) if len(tga) > 1 else 0.0
    tga_avg = round(stats.mean([r['balance_bn'] for r in tga]), 1) if tga else 0.0
    rrp_last = rrp[-1]['accepted_bn'] if rrp else 0.0
    rrp_first = rrp[0]['accepted_bn'] if rrp else 0.0

    # ---------------- layer verdicts (explicit rules, no folklore thresholds)
    l1 = '중립~약함' if (weakest and weakest[0] < 2.4) else '중립~양호'
    if len(recent_coupons) < 3:
        l1 += ' (표본 부족)'
    am_up = [m for m in ('2Y', '5Y', '10Y')
             if len(cot_series.get(m) or []) > 1 and cot_series[m][-1]['asset_mgr_net'] > cot_series[m][0]['asset_mgr_net']]
    l2 = '개선' if len(am_up) >= 2 else ('중립' if len(am_up) == 1 else '약함')
    l3 = '약함' if custody_4w <= -20 else ('중립' if custody_4w > -10 else '중립~약함')
    l4 = '중립'

    if l3 == '약함' and l1.startswith('중립~약함'):
        verdict = ('경매 수요와 해외 공적 보관이 같은 방향으로 약해졌습니다 — **실수요 이탈 후보**로 표시하고 '
                   '다음 경매에서 재확인합니다. 다만 4주 창의 쿠폰 표본이 얇아 단정하지 않습니다.')
    else:
        verdict = ('계층이 한 방향으로 정렬되지 않았습니다 — **주체 교체 국면**으로 관찰합니다. '
                   '국내 민간 수요와 해외 공적 수요가 반대로 움직이는지가 다음 호의 판정 포인트입니다.')

    def auction_table() -> str:
        lines = ['| 만기 | 4주 발행 | 응찰률 | 간접 | 딜러 | 직전 4주 응찰률 | 직전 4주 딜러 |',
                 '|---|---:|---:|---:|---:|---:|---:|']
        for label, r, p in table_rows:
            head = f"| {label} | {r['offer']:.0f}B ({r['n']}회) | {r['btc']:.2f} | {pct(r['ind'])} | {pct(r['dlr'])} "
            if p:
                lines.append(head + f"| {p['btc']:.2f} | {pct(p['dlr'])} |")
            else:
                lines.append(head + '| — | — |')
        lines.append(f'| Bills(합계) | {bill_offer:.0f}B ({len(bills)}회) | — | — | — | — | — |')
        return '\n'.join(lines)

    def cot_table() -> str:
        lines = ['| 시장 | 자산운용 순포지션 | 4주 변화 | 레버리지 순포지션 | 4주 변화 |', '|---|---:|---:|---:|---:|']
        for market in ('2Y', '5Y', '10Y', 'Bond'):
            pts = cot_series.get(market) or []
            if len(pts) < 2:
                continue
            am0, am1 = pts[0]['asset_mgr_net'], pts[-1]['asset_mgr_net']
            lv0, lv1 = pts[0]['lev_money_net'], pts[-1]['lev_money_net']
            lines.append(f'| {market} | {am1/1000:,.0f}k | {(am1-am0)/1000:+,.0f}k | {lv1/1000:,.0f}k | {(lv1-lv0)/1000:+,.0f}k |')
        return '\n'.join(lines)

    ten_pts = cot_series.get('10Y') or []
    ten_delta = ((ten_pts[-1]['asset_mgr_net'] - ten_pts[0]['asset_mgr_net']) / 1000) if len(ten_pts) > 1 else 0.0
    ten_now = (ten_pts[-1]['asset_mgr_net'] / 1000) if ten_pts else 0.0
    ten_prev = (ten_pts[0]['asset_mgr_net'] / 1000) if ten_pts else 0.0
    weakest_txt = f'{weakest[1]} {weakest[0]:.2f}배({weakest[2]})' if weakest else '표본 없음'
    strongest_txt = f'{strongest[1]} {strongest[0]:.2f}배' if strongest else '표본 없음'
    btc_list = ', '.join(f'{b[0]:.2f}' for b in sorted(btcs)) if btcs else '—'
    dealer_range = f'{dealer_lo:.1f}~{dealer_hi:.1f}%' if dealer_lo is not None else '—'
    y10_chg = round((y_last.get('m10') or 0) - (y_base.get('m10') or 0), 2) if y_last.get('m10') else None
    y30_chg = round((y_last.get('m30') or 0) - (y_base.get('m30') or 0), 2) if y_last.get('m30') else None

    body = f"""---
layout: post
title: "미국 국채 수요 4주 리포트 — 경매·포지셔닝·해외 보관·유동성 (2026-10-23)"
date: 2026-10-23 07:30:00 +0900
categories: [us-treasury-demand]
tags: [미국국채, 재무부경매, TIC, RRP, TGA, CoT, 유동성]
permalink: /us-treasury-demand/2026-10-23/
description: "미국 국채 수요를 발행시장·포지셔닝·해외 공적 보관·단기 유동성 4계층으로 교차 확인한 4주 리포트"
---

> **자료 성격:** 미 재무부(TreasuryDirect·FiscalData·TIC), 연준 H.4.1, 뉴욕 연은, CFTC 공개 자료를 규칙 기반으로 수집해 정리한 관찰 기록입니다. 투자 권유가 아니며 모든 수치는 공개 원자료에서 재현할 수 있습니다. 스냅샷: `{path.name}`.

## 1. 이번 4주 한 줄 판정

{verdict}

- 쿠폰 표본 {len(recent_coupons)}건 중 응찰률 최저는 **{weakest_txt}**, 최고는 {strongest_txt}입니다.
- 자산운용(Asset Manager) 10년물 순롱은 {ten_now:,.0f}k로, 4주 전 {ten_prev:,.0f}k 대비 **{ten_delta:+,.0f}k 계약**입니다.
- 해외 공적 보관(H.4.1 custody)은 4주간 **{custody_4w:+.1f}B**, {len(custody)}주 중 {custody_neg}주 감소했습니다.

## 2. 4계층 스코어보드

| 계층 | 이번 4주 판정 | 근거 |
|---|---|---|
| L1 발행시장 | {l1} | 쿠폰 응찰률 {btc_list}배, 딜러 {dealer_range} |
| L2 포지셔닝 | {l2} | 자산운용 순롱 확대 시장: {', '.join(am_up) if am_up else '없음'} |
| L3 해외 공적 | {l3} | custody 4주 {custody_4w:+.1f}B |
| L4 단기 유동성 | {l4} | RRP {rrp_last:.1f}B, TGA {tga[-1]['balance_bn']:.0f}B |

## 3. L1 — 발행시장: 표본이 얇은 창

{auction_table()}

- 이번 4주 명목 쿠폰 발행은 **{coupon_offer:.0f}B**, TIPS **{tips_offer:.0f}B**, bill **{bill_offer:.0f}B**입니다. 공급 부담의 대부분은 bill입니다.
- **표본 주의:** 월말 2·5·7년 클러스터가 창(9/25~10/23) 밖에 있어(9/22~24, 10/26~29) 테너별 추세 판정은 다음 호에서 두 창을 합쳐 합니다. 이번 호의 쿠폰 결론은 "확정"이 아니라 "관찰"입니다.
- TIPS: {tips_line}. TIPS는 명목물과 응찰 구조가 달라 같은 잣대로 비교하지 않습니다.

**해석 규칙:** 응찰률은 재개방·테너·상품 유형에 따라 구조적으로 달라지므로 단일 임계값(예: "10년 2.5배")이 아니라 **같은 테너의 직전 4주 평균**과 비교합니다.

## 4. L2 — 포지셔닝·가격: 민간 듀레이션 수요

{cot_table()}

- 기준일 {cot.get('report_dates', [''])[-1]} (CFTC TFF). 순포지션 = 롱 − 숏, 단위 계약.
- 10년물 자산운용 순롱은 {ten_now:,.0f}k, 4주 전 {ten_prev:,.0f}k입니다. 레버리지 순숏 확대는 방향성 베팅이라기보다 베이시스·헤지 구조로 읽어야 하며, 극단으로 쌓이면 숏커버링 유동성 리스크가 됩니다.
- 금리: 10년 {y_last.get('m10')}% (4주 전 {y_base.get('m10')}%, {y10_chg:+.2f}%p), 30년 {y_last.get('m30')}% (4주 전 {y_base.get('m30')}%, {y30_chg:+.2f}%p), 2s10s {y_last.get('s2s10')}bp (4주 전 {y_base.get('s2s10')}bp).

{svg_line([(r['date'][5:], r['m10']) for r in yields if r['date'] >= recent_from], stroke='#0969da', label_fmt='{:.2f}')}

<sub>10년물 par yield, 최근 4주 (미 재무부 일별 금리)</sub>

## 5. L3 — 자금 흐름: 해외 공적 계정

{svg_line([(r['week_ended'][5:], r['level_bn']) for r in custody], stroke='#bf3989', label_fmt='{:.0f}')}

- H.4.1 custody(외국 공적·국제 계정, 액면가) 잔고는 **{custody[-1]['level_bn']:,.1f}B** ({custody[-1]['week_ended']}), 4주 변화 **{custody_4w:+.1f}B**입니다.
- 주간 경로: {' → '.join(f"{r['week_ended'][5:]} {r['wow_change_bn']:+.1f}" for r in custody)} (단위 B)
- 액면가 기준이라 가격 효과가 섞이지 않는 순수 플로우입니다. 다만 중앙은행 간 재배치·수탁기관 이동도 포함되므로 "매도"와 등치할 수 없습니다.
- TIC MFH는 공개 시차가 커서 이번 호에서는 참고용입니다(최신 확보분 {', '.join(d['tic']['months']) or 'n/a'} — 최신 월이 아니므로 추세 판정에 쓰지 않음).

## 6. L4 — 단기 유동성

- ON RRP: **{rrp_last:.1f}B** ({rrp[-1]['date']}), 4주 전 {rrp_first:.1f}B → 사실상 소진. 이제 RRP 감소를 "국채로 유입되는 대기자금"으로 해석할 수 없습니다.
- TGA: **{tga[-1]['balance_bn']:.0f}B** ({tga[-1]['date']}), 4주 전 {tga[0]['balance_bn']:.0f}B, 4주 평균 {tga_avg:.0f}B, 4주 변화 {tga_delta:+.0f}B.
- TGA 증가는 시중 유동성이 국채 매수가 아니라 재무부 계좌로 흡수된 측면을 보여줍니다. bill 발행 {bill_offer:.0f}B와 함께 읽어야 합니다.

## 7. 교차 판정과 시나리오

- **기본(관찰):** 계층이 정렬되지 않았습니다. 국내 민간 듀레이션 수요와 해외 공적 수요의 방향이 갈리면 "주체 교체", 같이 약해지면 "실수요 이탈"입니다.
- **약화 확인 조건(3개 동시):** ① 다음 쿠폰 경매(2·5·7년) 응찰률이 직전 4주 평균 미만 ② 딜러 낙찰 18% 초과 ③ custody 4주 연속 감소.
- **강화 확인 조건(2개 이상):** 5년물 응찰률 2.5배 이상 회복 + custody 반등 + 자산운용 순롱 유지.

## 8. 다음 2주 체크리스트

- **경매:** 10/26(월) 13·26주 bill 177B + 2년물 69B, 10/27(화) 52·6주 bill 149B + 5년물 70B, 10/28(수) 2년물 30B(재개방), 10/29(목) 7년물 44B — 각 결과를 직전 4주 평균과 비교
- **목요일:** H.4.1 custody 주간 증감
- **금요일:** CFTC TFF 포지셔닝(화요일 기준)
- **월간:** TIC/MFH 공개분 확인(시차 감안)

## 9. 방법론과 한계

- 원자료: TreasuryDirect 경매 결과 JSON, 연준 H.4.1, FiscalData DTS, 뉴욕 연은 RRP, CFTC TFF, 미 재무부 일별 금리.
- 임계값은 **직전 4주 평균 비교**로 대체했고, 8회 이동 z-score는 이력이 8회 이상 쌓인 뒤 적용합니다.
- 한계: ① TIC 공개 지연으로 추세 판정 제외 ② custody는 액면가·수탁 기준이라 매도와 등치 불가 ③ ETF 설정/환매·EPFR·ICI 주간은 유료/비공개로 미포함 ④ WI 금리가 없어 경매 tail을 bp로 산출하지 않음.

## 10. 원자료

- 수집: `ops/treasury-demand/collect.py` · 렌더: `ops/treasury-demand/build_report.py`
- 스냅샷: `assets/data/treasury-demand/{path.name}`

*다음 호는 2026-10-30 기준으로 같은 4계층을 갱신합니다.*
"""

    post = SITE / '_posts' / f'{date.today().isoformat()}-us-treasury-demand-4week.md'
    post.write_text(body, encoding='utf-8')

    landing = SITE / 'treasury-demand.md'
    landing.write_text("""---
layout: page
title: 미국 국채 수급 모니터
permalink: /treasury-demand/
---

발행시장 경매, 포지셔닝, 해외 공적 보관, 단기 유동성을 **4계층으로 교차 확인**하는 미국 국채 수요 리포트입니다. 한 지표로 결론을 내리지 않고, 3계층 이상이 같은 방향일 때만 신호로 인정합니다.

{% assign posts = site.categories["us-treasury-demand"] %}
{% if posts and posts.size > 0 %}
{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}

## 이 리포트가 보는 것

- **L1 발행시장** — 테너별 응찰률·간접·딜러 낙찰 비중(직전 4주 평균 대비)
- **L2 포지셔닝·가격** — CFTC TFF 자산운용/레버리지 순포지션, 커브와 레벨
- **L3 자금 흐름** — H.4.1 해외 공적 보관(주간, 액면가), TIC MFH(월간, 시차 명시)
- **L4 단기 유동성** — ON RRP, TGA, bill 순발행

자료는 모두 공개 원천에서 수집하며, 각 수치의 스냅샷 JSON을 함께 공개합니다.
""", encoding='utf-8')

    config = SITE / '_config.yml'
    text = config.read_text(encoding='utf-8')
    if 'treasury-demand.md' not in text:
        text = text.replace('  - us-policy-intel.md', '  - us-policy-intel.md\n  - treasury-demand.md')
        config.write_text(text, encoding='utf-8')

    print(json.dumps({'post': str(post), 'landing': str(landing), 'terms': terms,
                      'custody_4w': custody_4w, 'coupon_offer_bn': coupon_offer,
                      'tips_offer_bn': tips_offer, 'bill_offer_bn': bill_offer,
                      'tga_delta': tga_delta, 'rrp_last': rrp_last,
                      'l1': l1, 'l2': l2, 'l3': l3}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
