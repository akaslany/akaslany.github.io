#!/usr/bin/env python3
"""Build the CTA / hedge-fund futures positioning dataset for the Pages site.

Fetches 14 weekly reports per contract from the official CFTC Socrata API
(TFF for financials, legacy COT for commodities) and writes one JSON payload:

  assets/data/cta-positioning/history.json

Payload shape (consumed by /cta-positioning/index.html):
  asof          str   latest report date shared by most markets (Tuesday snapshot)
  weeks         [str] report dates, newest first
  markets       [{id,label,group,unit,series[{date,net,pct_oi,oi}],latest{},wow,z13,pct_oi_rank}]
  groups        [{group,series[{date,mean_pct_oi,sum_net}],latest{}]
  meta          {source,retrieved_at_utc,notes}

Usage: python3 ops/cta-positioning/build_data.py
"""
from __future__ import annotations

import json
import os
import statistics
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
OUT = REPO / "assets/data/cta-positioning/history.json"
CFTC = "https://publicreporting.cftc.gov/resource/{dataset}.json"
UA = {"User-Agent": "Mozilla/5.0 (cta-positioning page builder)"}
WEEKS = 14

# (dataset, exact CFTC contract name, page id, Korean label, group)
MARKETS = [
    ("gpe5-46if", "E-MINI S&P 500", "es", "E-mini S&P500", "주식"),
    ("gpe5-46if", "NASDAQ MINI", "nq", "NASDAQ-100", "주식"),
    ("gpe5-46if", "RUSSELL E-MINI", "rty", "Russell 2000", "주식"),
    ("gpe5-46if", "UST 2Y NOTE", "tu", "미 2년 국채", "금리"),
    ("gpe5-46if", "UST 10Y NOTE", "ty", "미 10년 국채", "금리"),
    ("gpe5-46if", "ULTRA UST BOND", "ub", "미 초장기채", "금리"),
    ("gpe5-46if", "EURO FX", "ec", "유로", "FX"),
    ("gpe5-46if", "JAPANESE YEN", "j6", "엔", "FX"),
    ("gpe5-46if", "USD INDEX", "dx", "달러인덱스", "FX"),
    ("6dca-aqww", "GOLD - COMMODITY EXCHANGE INC.", "gc", "금", "원자재"),
    ("6dca-aqww", "COPPER- #1 - COMMODITY EXCHANGE INC.", "hg", "구리", "원자재"),
    ("6dca-aqww", "WTI FINANCIAL CRUDE OIL - NEW YORK MERCANTILE EXCHANGE", "cl", "WTI 원유", "원자재"),
]

GROUP_ORDER = ["주식", "금리", "FX", "원자재"]


def http_json(url: str, timeout: int = 90):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))


def series(dataset: str, contract: str, weeks: int = WEEKS) -> list[dict]:
    if dataset == "gpe5-46if":
        cols = ("lev_money_positions_long", "lev_money_positions_short")
        where = f"contract_market_name='{contract}'"
    else:
        cols = ("noncomm_positions_long_all", "noncomm_positions_short_all")
        where = f"market_and_exchange_names='{contract}'"
    query = {
        "$where": where,
        "$order": "report_date_as_yyyy_mm_dd DESC",
        "$limit": weeks,
        "$select": "report_date_as_yyyy_mm_dd,%s,%s,open_interest_all" % cols,
    }
    rows = http_json(CFTC.format(dataset=dataset) + "?" + urllib.parse.urlencode(query))
    out = []
    for r in rows:
        long_ = float(r[cols[0]] or 0)
        short = float(r[cols[1]] or 0)
        oi = float(r.get("open_interest_all") or 0)
        out.append(
            {
                "date": r["report_date_as_yyyy_mm_dd"][:10],
                "long": long_,
                "short": short,
                "net": long_ - short,
                "oi": oi,
            }
        )
    return out


def zscore(values: list[float]) -> float:
    if len(values) < 3:
        return 0.0
    hist = values[1:]
    sd = statistics.pstdev(hist)
    return (values[0] - statistics.fmean(hist)) / sd if sd else 0.0


def main() -> int:
    markets, errors = [], []
    for dataset, contract, mid, label, group in MARKETS:
        try:
            s = series(dataset, contract)
        except Exception as exc:  # one bad contract must not sink the page
            errors.append({"market": mid, "error": str(exc)[:200]})
            continue
        if len(s) < 3:
            errors.append({"market": mid, "error": "insufficient history"})
            continue
        cur, prev = s[0], s[1]
        pct = [(x["net"] / x["oi"] * 100) if x["oi"] else 0.0 for x in s]
        markets.append(
            {
                "id": mid,
                "label": label,
                "group": group,
                "unit": "contracts",
                "series": [
                    {"date": x["date"], "net": x["net"], "oi": x["oi"], "pct_oi": p}
                    for x, p in zip(s, pct)
                ],
                "latest": {
                    "date": cur["date"],
                    "net": cur["net"],
                    "oi": cur["oi"],
                    "long": cur["long"],
                    "short": cur["short"],
                    "pct_oi": pct[0],
                },
                "wow": cur["net"] - prev["net"],
                "wow_pct_oi": pct[0] - pct[1],
                "z13": zscore([x["net"] for x in s]),
            }
        )

    if not markets:
        raise SystemExit("no CFTC data")

    weeks = sorted({d["date"] for m in markets for d in m["series"]}, reverse=True)[:WEEKS]

    # pct-of-open-interest rank, most crowded long first (1 = largest net long share)
    for rank, m in enumerate(sorted(markets, key=lambda m: m["latest"]["pct_oi"], reverse=True), 1):
        m["pct_oi_rank"] = rank

    groups = []
    for g in GROUP_ORDER:
        members = [m for m in markets if m["group"] == g]
        if not members:
            continue
        by_date = {}
        for m in members:
            for d in m["series"]:
                by_date.setdefault(d["date"], []).append(d)
        pts = [
            {
                "date": date,
                "mean_pct_oi": statistics.fmean(x["pct_oi"] for x in rows),
                "sum_net": sum(x["net"] for x in rows),
                "n": len(rows),
            }
            for date, rows in sorted(by_date.items(), reverse=True)
        ]
        groups.append({"group": g, "series": pts, "latest": pts[0]})

    payload = {
        "asof": weeks[0],
        "weeks": weeks,
        "markets": markets,
        "groups": groups,
        "errors": errors,
        "meta": {
            "source": "CFTC Commitments of Traders — TFF (financials) / legacy futures-only (commodities)",
            "definition": "net = long − short; financials use leveraged funds (TFF), commodities use non-commercial (COT)",
            "lag": "Tuesday snapshot, released Friday 15:30 ET",
            "retrieved_at_utc": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "notes": "pct_oi = net ÷ total open interest. z13 = latest net vs mean/stdev of the prior 13 weeks.",
        },
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    tmp = OUT.with_suffix(".tmp")
    tmp.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    os.replace(tmp, OUT)
    print(
        json.dumps(
            {
                "path": str(OUT),
                "asof": payload["asof"],
                "markets": len(markets),
                "weeks": len(weeks),
                "groups": [g["group"] for g in groups],
                "errors": errors,
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
