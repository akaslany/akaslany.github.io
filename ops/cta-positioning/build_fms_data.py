#!/usr/bin/env python3
"""Build the BofA Fund Manager Survey dataset for the Pages site.

Parses the latest republished FMS press release (hotmoney writes it to
~/dev/hotmoney/state/fms-last-release.txt) and appends/patchs one edition into

  assets/data/cta-positioning/fms-history.json

The wire copy prints this month's number together with the prior two months in
the same sentence ("down from a net 44% overweight in October and a net 49% in
September"), so one release yields a three-month series. Only values actually
printed in the text are emitted — unparsed fields stay absent rather than 0.

Usage: python3 ops/cta-positioning/build_fms_data.py [--release PATH] [--out PATH]
"""
from __future__ import annotations

import argparse
import json
import os
import re
from datetime import datetime, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
DEFAULT_RELEASE = Path("/home/kjkim/dev/hotmoney/state/fms-last-release.txt")
OUT = REPO / "assets/data/cta-positioning/fms-history.json"

MONTHS = {
    "january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6,
    "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12,
}

# (key, Korean label, group, line-substring that identifies the sentence)
ALLOCATIONS = [
    ("cash", "현금 비중", "cash", "Cash levels"),
    ("cash_alloc", "현금 비중(순)", "cash", "Cash allocation"),
    ("equities", "주식 비중(순)", "asset", "overweight global equities"),
    ("bonds", "채권 비중(순)", "asset", "underweight bonds"),
    ("realestate", "부동산 비중(순)", "asset", "real estate"),
    ("commodities", "원자재 비중(순)", "asset", "commodity allocation"),
    ("us_equities", "미국 주식(순)", "region", "U.S. equities rose"),
    ("eurozone", "유로존 주식(순)", "region", "eurozone stocks"),
    ("gem", "신흥국 주식(순)", "region", "global emerging markets"),
    ("japan", "일본 주식(순)", "region", "Japanese equities"),
    ("uk", "영국 주식(순)", "region", "UK allocation"),
]


def month_label(name: str, year: int) -> str:
    return f"{year:04d}-{MONTHS[name.lower()]:02d}"


def month_back(base: str, n: int) -> str:
    y, m = (int(x) for x in base.split("-"))
    m -= n
    while m <= 0:
        m += 12
        y -= 1
    return f"{y:04d}-{m:02d}"


def signed(number: str, direction: str) -> float:
    value = float(number)
    return -value if direction.lower().startswith("under") else value


def parse_triplet(line: str) -> list[float | None]:
    """Values in printed order: [this month, prior, prior-2].

    The wire copy counts a position with a periphrasis ("a net 41% of portfolio
    managers were overweight global equities") so direction can follow the number
    by several words: take every `net <n>%` in order and read the first
    over/underweight token after it. "net neutral" / "equal weight" are 0.
    """
    out: list[float | None] = []
    line = re.sub(r"(?i)net\s+neutral", "net 0% neutral", line)
    for chunk in re.split(r"(?i)\bnet\b", line)[1:]:
        m = re.match(r"\s*([\d.]+)%", chunk)
        if not m:
            continue
        direction = re.search(r"(?i)\b(overweight|underweight)\b", chunk)
        out.append(signed(m.group(1), direction.group(1)) if direction else float(m.group(1)))
        if len(out) == 3:
            break
    if not out and re.search(r"(?i)net neutral|equal weight", line):
        out = [0.0]
    if out and re.search(r"(?i)equal weight", line):
        out += [0.0] * (3 - len(out))
    return out + [None] * (3 - len(out))


def find_line(lines: list[str], needle: str) -> str | None:
    for raw in lines:
        if needle.lower() in raw.lower():
            return raw
    return None


def parse_pairs(block: str) -> list[dict]:
    return [{"label": name.strip(' “”"'), "pct": int(pct)}
            for name, pct in re.findall(r'[“"]([^”"]{3,80})[”"]\s*\((\d+)%', block)][:3]


def parse_release(text: str) -> dict:
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    flat = re.sub(r"\s+", " ", text)

    fieldwork = re.search(r"taken (\w+ \d+ to \w+ \d+, (\d{4}))", flat, re.I)
    panelists = re.search(r"(\d+) panelists with \$([\d.]+)bn in AUM", flat, re.I)
    published = re.search(r"latest BofA Global Fund Managers survey, released (\w+)", flat, re.I)

    # edition month: the fieldwork window's ending month is the survey month
    month = None
    if fieldwork:
        end_month = re.search(r"to (\w+) \d+,", fieldwork.group(1))
        if end_month:
            month = month_label(end_month.group(1), int(fieldwork.group(2)))

    allocations = []
    for key, label, group, needle in ALLOCATIONS:
        line = find_line(lines, needle)
        if not line:
            continue
        values = parse_triplet(line)
        if values[0] is None and key in ("cash", "cash_alloc"):
            # cash level prints without over/underweight
            m = re.search(r"(?:at|to) ([\d.]+)%", line)
            if m:
                values[0] = float(m.group(1))
                m2 = re.search(r"from ([\d.]+)% in (\w+)(?: and (\w+))?", line)
                if m2:
                    values[1] = float(m2.group(1))
                    if m2.group(3):
                        values[2] = float(m2.group(1))
        if values[2] is None and re.search(r"back at (\w+) levels", line, re.I):
            # "Holdings were back at September levels" -> prior-2 equals prior
            values[2] = values[1]
        allocations.append({"key": key, "label": label, "group": group,
                            "this": values[0], "prev": values[1], "prev2": values[2]})

    # growth: direction word decides the sign (weaker growth = negative)
    growth = {"key": "growth", "label": "성장 기대(순)", "group": "macro"}
    g = re.search(r"a net ([\d.]+)% of investors looked for (weaker|stronger) economic growth .*?"
                  r"a net ([\d.]+)% looking for (weaker|stronger) growth in (\w+).*?"
                  r"a net ([\d.]+)% looked for (weaker|stronger) growth", flat, re.I)
    if g:
        def gsign(n, d):
            return -float(n) if d.lower() == "weaker" else float(n)
        growth.update({"this": gsign(g.group(1), g.group(2)),
                       "prev": gsign(g.group(3), g.group(4)),
                       "prev2": gsign(g.group(6), g.group(7))})
        allocations.append(growth)

    infl = {"key": "inflation", "label": "인플레 전망(순, 낮아질 것)", "group": "macro"}
    i = re.search(r"a net ([\d.]+)% of portfolio managers polled this month looked for lower inflation .*?"
                  r"a net ([\d.]+)% and a net ([\d.]+)% looking for lower global CPI", flat, re.I)
    if i:
        infl.update({"this": float(i.group(1)), "prev": float(i.group(2)), "prev2": float(i.group(3))})
        allocations.append(infl)

    tails_now = tails_prev = crowded_now = crowded_prev = None
    for idx, raw in enumerate(lines):
        if "biggest tail risks seen by managers this month" in raw.lower():
            tails_now = parse_pairs(raw)
            if idx + 1 < len(lines):
                tails_prev = parse_pairs(lines[idx + 1])
        if "most crowded" in raw.lower() and "viewed the three" in raw.lower() and crowded_now is None:
            crowded_now = parse_pairs(raw)
            if idx + 1 < len(lines):
                crowded_prev = parse_pairs(lines[idx + 1])

    targets = {}
    t = re.search(r"10-year U\.S\. Treasury yields at ([\d.]+)%, the EURUSD at \$([\d.]+), "
                  r"the S&P 500 at ([\d,]+) and gold at \$([\d,]+)/oz", flat, re.I)
    if t:
        targets = {"ust10y": float(t.group(1)), "eurusd": float(t.group(2)),
                   "spx": float(t.group(3).replace(",", "")), "gold": float(t.group(4).replace(",", ""))}

    return {
        "month": month,
        "fieldwork": fieldwork.group(1) if fieldwork else None,
        "panelists": int(panelists.group(1)) if panelists else None,
        "aum_bn": float(panelists.group(2)) if panelists else None,
        "released": published.group(1) if published else None,
        "allocations": allocations,
        "tail_risks": {"current": tails_now, "previous": tails_prev},
        "crowded": {"current": crowded_now, "previous": crowded_prev},
        "targets_2027": targets,
    }


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--release", default=str(DEFAULT_RELEASE))
    ap.add_argument("--out", default=str(OUT))
    ap.add_argument("--meta", default="/home/kjkim/dev/hotmoney/state/fms.json")
    args = ap.parse_args()

    text = Path(args.release).read_text(encoding="utf-8")
    edition = parse_release(text)

    meta = {}
    if Path(args.meta).is_file():
        meta = json.loads(Path(args.meta).read_text(encoding="utf-8"))
    ed_meta = meta.get("edition") or {}
    edition["url"] = ed_meta.get("url")
    edition["title"] = ed_meta.get("title")
    edition["published"] = ed_meta.get("published") or edition.get("released")
    edition["retrieved_at_utc"] = datetime.now(timezone.utc).isoformat(timespec="seconds")

    out = Path(args.out)
    history = {"editions": []}
    if out.is_file():
        history = json.loads(out.read_text(encoding="utf-8"))
    editions = [e for e in history.get("editions", []) if e.get("month") != edition["month"]]
    editions.append(edition)
    editions.sort(key=lambda e: e.get("month") or "")
    history = {"editions": editions, "latest": editions[-1]["month"] if editions else None}

    out.parent.mkdir(parents=True, exist_ok=True)
    tmp = out.with_suffix(".tmp")
    tmp.write_text(json.dumps(history, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    os.replace(tmp, out)

    print(json.dumps({
        "path": str(out),
        "month": edition["month"],
        "fieldwork": edition["fieldwork"],
        "panelists": edition["panelists"],
        "aum_bn": edition["aum_bn"],
        "allocations": {a["key"]: [a["this"], a["prev"], a["prev2"]] for a in edition["allocations"]},
        "tail_risks": edition["tail_risks"],
        "crowded": edition["crowded"],
        "targets": edition["targets_2027"],
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
