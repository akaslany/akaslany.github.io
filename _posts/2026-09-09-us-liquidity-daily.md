---
layout: post
title: "미국 유동성·자금시장 인텔리전스 v2 — 2026-09-09"
date: 2026-09-09 07:30:00 +0900
categories: [us-liquidity]
tags: [미국유동성, FRED, TGA, RRP, SOFR, 지급준비금]
permalink: /liquidity/2026-09-09/
---

> **공개 자료 안내:** FRED·연준·미 재무부·뉴욕 연은 계열 공개 시계열을 규칙 기반으로 집계한 정보 자료입니다. 지표별 관측일과 발표 주기가 달라 최신성이 서로 다를 수 있으며, 투자 권유나 수익 보장이 아닙니다.

> 판단시각 2026-09-08T20:05:01.303816-04:00 이전 공개분만 사용한다. 미확인 자료를 0으로 대체하지 않는다.

## 1. Regime

**판정: 혼합·방향성 우위 없음(NO EDGE).** 유동성은 ① Fed 대차대조표·준비금, ② Treasury 현금흐름·조달, ③ 단기자금시장 완충·스트레스, ④ 시장 전달 결과의 네 층으로 분리한다. 단일 `Fed assets−TGA−RRP`는 회계 스냅숏이지 위험자산 매수 수요가 아니다.

## 2. 24h Changes

관측 상태: fed-assets=no-new-observation; reserves-wed=no-new-observation; sofr=new-observation; effr=new-observation; rrp=new-observation; tga=new-observation; iorb=new-observation; srf=missing. `no-change`는 새 공표값이 같다는 뜻이고 `no-new-observation`은 새 공표가 없어 변화를 계산하지 않았다는 뜻이다. 후자를 0 또는 횡보로 해석하지 않는다.

## 3. Fact Cards

- **Fed/H.4.1:** 주간평균 reserve-funds 공급요인 6786.376 USD bn; 주간평균 지급준비금 2894.531 USD bn. 수요일 시점 총자산과 혼합하지 않는다.
- **Treasury/DTS:** TGA 888923 USD mn.
- **Money markets:** ON RRP 0.626 USD bn; SOFR/volume 3.65; 2888; IORB 3.65 (derived from target upper bound)%.
- **MMF/repo/credit:** 확보된 공식 관측만 표시하며 missing 항목은 점수·행동 근거에서 제외한다.

## 4. Flow Ledger / Accounting

- Fed 자산과 준비금·TGA·RRP는 복식 관계이나 통화와 기타 자산·부채가 함께 변하므로 일대일 귀속하지 않는다.
- TGA 하락은 1차적으로 민간 현금·준비금 공급 방향, 상승은 흡수 방향이다. 상대방과 MMF/repo 재배치에 따라 시장 전달은 달라진다.
- ON RRP 감소는 Fed 부채 내 재배치 가능성이지 동일액 준비금 증가의 증거가 아니다.
- 국채는 총발행/순발행 및 경매일/결제일을 분리하고 실제 DTS로 사후 대조한다.

## 5. Next-14-Day Calendar

범위: 2026-09-10–2026-09-23.
- **2026-09-10 auction:** Treasury Bond auction — neutral; 22000000000; uncertainty low.
- **2026-09-10 auction:** Treasury Bill auction — neutral; 85000000000; uncertainty low.
- **2026-09-10 auction:** Treasury Bill auction — neutral; 90000000000; uncertainty low.

## 6. Asset Scenarios

숫자 확률을 붙일 보정 표본이 없으므로 likelihood class만 사용한다.
- **Base:** 주식·UST·USD·금·BTC 모두 방향성 우위 보류. 확인: SOFR/EFFR remain near IORB and credit does not deteriorate. Counterpath: Orderly Treasury settlement but no broad risk-asset confirmation. 철회: SOFR-IORB widens persistently or SRF usage appears.
- **Easing (medium):** 확인: Stable reserves, falling TGA and improving credit/risk breadth. Counterpath: Long yields rise through inflation or term premium. 철회: Credit spreads widen or reserves fall.
- **Drain/stress (medium):** 확인: TGA rises as reserves fall and repo stress appears. Counterpath: MMF/RRP buffers absorb settlement without rate pressure. 철회: Funding rates and credit remain stable.
유효기간은 2026-09-23까지 또는 다음 핵심 공표·결제 직후 중 먼저 도래하는 때까지다.

## 7. Counterevidence / Withdrawal

완화 서사는 신용 약세·장기금리 상승·위험자산 breadth 악화·SOFR 상단 압력이 반증한다. 스트레스 서사는 IORB 부근 금리, 무질서하지 않은 결제, MMF/repo 완충이 반증한다. **Not identified:** 현재 자료만으로 시장 변동 원인을 Fed, TGA, 발행, 거시뉴스 또는 포지셔닝 중 하나로 식별할 수 없다. 확인 전 unsupported action은 금지한다.

## 8. Coverage & Freshness Audit

- **fed-assets**: fresh / no-new-observation / obs 2026-09-02T16:30:00-04:00 / release 2026-09-03T16:30:00-04:00 / vintage 2026-09-03 initial.
- **reserves-wed**: fresh / no-new-observation / obs 2026-09-02T16:30:00-04:00 / release 2026-09-03T16:30:00-04:00 / vintage 2026-09-03 initial.
- **sofr**: fresh / new-observation / obs 2026-09-04T08:00:00-04:00 / release 2026-09-08T08:00:00-04:00 / vintage 2026-09-08 initial.
- **effr**: fresh / new-observation / obs 2026-09-04T08:00:00-04:00 / release 2026-09-08T08:00:00-04:00 / vintage 2026-09-08 initial.
- **rrp**: fresh / new-observation / obs 2026-09-08T13:30:00-04:00 / release 2026-09-08T14:00:00-04:00 / vintage 2026-09-08 initial.
- **tga**: fresh / new-observation / obs 2026-09-04T23:59:00-04:00 / release 2026-09-05T16:00:00-04:00 / vintage 2026-09-04 initial.
- **iorb**: fresh / new-observation / obs 2026-09-04T16:30:00-04:00 / release 2026-09-04T16:30:00-04:00 / vintage 2026-09-04 initial.
- **srf**: missing / missing / obs 2026-09-08T20:05:01.303816-04:00 / release 2026-09-08T20:05:01.303816-04:00 / vintage 2026-09-08 unknown.
- PIT 빈티지는 append-only 저장하며 critical source/schema/freshness 실패 시 게시를 차단한다.
- Claim manifest에는 Fact/accounting/inference/not-identified를 명시한다.

```report-manifest
{
  "contract_version": "us-liquidity-v2/2.0",
  "report_date": "2026-09-09",
  "decision_time": "2026-09-08T20:05:01.303816-04:00",
  "timezone": "America/New_York",
  "report_id": "US-LIQ-V2-20260909",
  "sources": [
    {
      "source_id": "fed-h41",
      "publisher": "Federal Reserve Board",
      "title": "H.4.1 Factors Affecting Reserve Balances",
      "url": "https://www.federalreserve.gov/releases/h41/current/h41.htm",
      "official": true
    },
    {
      "source_id": "fed-iorb",
      "publisher": "Federal Reserve Board",
      "title": "Interest on Reserve Balances",
      "url": "https://www.federalreserve.gov/monetarypolicy/reserve-balances.htm",
      "official": true
    },
    {
      "source_id": "nyfed-rates",
      "publisher": "Federal Reserve Bank of New York",
      "title": "Reference Rates",
      "url": "https://markets.newyorkfed.org/api/rates/all/latest.json",
      "official": true
    },
    {
      "source_id": "nyfed-rrp",
      "publisher": "Federal Reserve Bank of New York",
      "title": "Reverse Repo Operations",
      "url": "https://markets.newyorkfed.org/api/rp/reverserepo/propositions/search.json?startDate=2026-08-29&endDate=2026-09-08",
      "official": true
    },
    {
      "source_id": "nyfed-repo",
      "publisher": "Federal Reserve Bank of New York",
      "title": "Repo and SRF Operations",
      "url": "https://www.newyorkfed.org/markets/desk-operations/repo",
      "official": true
    },
    {
      "source_id": "treasury-dts",
      "publisher": "U.S. Department of the Treasury",
      "title": "Daily Treasury Statement",
      "url": "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/dts/operating_cash_balance?sort=-record_date&page%5Bsize%5D=5",
      "official": true
    },
    {
      "source_id": "treasury-auctions",
      "publisher": "U.S. Department of the Treasury",
      "title": "Treasury Auction Query",
      "url": "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/auctions_query?filter=auction_date:gte:2026-09-08&sort=auction_date&page%5Bsize%5D=100",
      "official": true
    }
  ],
  "claims": [
    {
      "claim_id": "c1",
      "section": 1,
      "label": "inference",
      "text": "Broad funding stress is not identified; a new easing impulse is also not identified.",
      "source_ids": [
        "fed-h41",
        "nyfed-rates",
        "treasury-dts"
      ],
      "observation_ids": [
        "reserves-wed",
        "sofr",
        "tga"
      ],
      "supports_action": true
    },
    {
      "claim_id": "c2",
      "section": 2,
      "label": "fact",
      "text": "Release status is separated from numerical change.",
      "source_ids": [
        "nyfed-rates"
      ],
      "observation_ids": [
        "sofr"
      ],
      "supports_action": false
    },
    {
      "claim_id": "c3",
      "section": 3,
      "label": "fact",
      "text": "Official fact cards use PIT observations.",
      "source_ids": [
        "fed-h41"
      ],
      "observation_ids": [
        "fed-assets",
        "reserves-wed"
      ],
      "supports_action": false
    },
    {
      "claim_id": "c4",
      "section": 4,
      "label": "accounting",
      "text": "TGA and RRP changes affect Fed liabilities but do not identify one-for-one reserve or asset-price effects.",
      "source_ids": [
        "fed-h41",
        "treasury-dts",
        "nyfed-rrp"
      ],
      "observation_ids": [
        "tga",
        "rrp",
        "reserves-wed"
      ],
      "supports_action": false
    },
    {
      "claim_id": "c5",
      "section": 5,
      "label": "fact",
      "text": "The rolling calendar covers the next fourteen days.",
      "source_ids": [
        "treasury-auctions"
      ],
      "observation_ids": [
        "tga"
      ],
      "supports_action": false
    },
    {
      "claim_id": "c6",
      "section": 6,
      "label": "inference",
      "text": "Scenario likelihoods are uncalibrated classes, not probabilities.",
      "source_ids": [
        "fed-h41",
        "nyfed-rates"
      ],
      "observation_ids": [
        "sofr",
        "reserves-wed"
      ],
      "supports_action": true
    },
    {
      "claim_id": "c7",
      "section": 7,
      "label": "not-identified",
      "text": "Current observations do not identify the cause of asset-price changes.",
      "source_ids": [
        "fed-h41",
        "treasury-dts"
      ],
      "observation_ids": [],
      "supports_action": false
    },
    {
      "claim_id": "c8",
      "section": 8,
      "label": "fact",
      "text": "Critical observations pass frequency-aware freshness gates.",
      "source_ids": [
        "fed-h41",
        "nyfed-rates",
        "treasury-dts"
      ],
      "observation_ids": [
        "fed-assets",
        "sofr",
        "tga"
      ],
      "supports_action": false
    }
  ],
  "observations": [
    {
      "name": "H.4.1 weekly-average factors supplying reserve funds",
      "value": "6786.376",
      "unit": "USD bn",
      "observation_time": "2026-09-02T16:30:00-04:00",
      "release_time": "2026-09-03T16:30:00-04:00",
      "frequency": "weekly",
      "source_id": "fed-h41",
      "critical": true,
      "max_age_hours": 168,
      "observation_status": "no-new-observation",
      "vintage": "2026-09-03 initial",
      "revision_status": "initial",
      "observation_id": "fed-assets",
      "available_at": "2026-09-03T16:30:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "Reserve balances weekly average",
      "value": "2894.531",
      "unit": "USD bn",
      "observation_time": "2026-09-02T16:30:00-04:00",
      "release_time": "2026-09-03T16:30:00-04:00",
      "frequency": "weekly",
      "source_id": "fed-h41",
      "critical": true,
      "max_age_hours": 168,
      "observation_status": "no-new-observation",
      "vintage": "2026-09-03 initial",
      "revision_status": "initial",
      "observation_id": "reserves-wed",
      "available_at": "2026-09-03T16:30:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "SOFR and volume",
      "value": "3.65; 2888",
      "unit": "percent; USD bn",
      "frequency": "business-daily",
      "observation_time": "2026-09-04T08:00:00-04:00",
      "release_time": "2026-09-08T08:00:00-04:00",
      "source_id": "nyfed-rates",
      "critical": true,
      "max_age_hours": 144,
      "observation_status": "new-observation",
      "vintage": "2026-09-08 initial",
      "revision_status": "initial",
      "observation_id": "sofr",
      "available_at": "2026-09-08T08:00:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "EFFR and volume",
      "value": "3.63; 103",
      "unit": "percent; USD bn",
      "frequency": "business-daily",
      "observation_time": "2026-09-04T08:00:00-04:00",
      "release_time": "2026-09-08T08:00:00-04:00",
      "source_id": "nyfed-rates",
      "critical": false,
      "max_age_hours": 144,
      "observation_status": "new-observation",
      "vintage": "2026-09-08 initial",
      "revision_status": "initial",
      "observation_id": "effr",
      "available_at": "2026-09-08T08:00:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "ON RRP accepted amount",
      "value": "0.626",
      "unit": "USD bn",
      "frequency": "business-daily",
      "observation_time": "2026-09-08T13:30:00-04:00",
      "release_time": "2026-09-08T14:00:00-04:00",
      "source_id": "nyfed-rrp",
      "critical": true,
      "max_age_hours": 72,
      "observation_status": "new-observation",
      "vintage": "2026-09-08 initial",
      "revision_status": "initial",
      "observation_id": "rrp",
      "available_at": "2026-09-08T14:00:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "TGA closing balance",
      "value": "888923",
      "unit": "USD mn",
      "frequency": "business-daily",
      "observation_time": "2026-09-04T23:59:00-04:00",
      "release_time": "2026-09-05T16:00:00-04:00",
      "source_id": "treasury-dts",
      "critical": true,
      "max_age_hours": 144,
      "observation_status": "new-observation",
      "vintage": "2026-09-04 initial",
      "revision_status": "initial",
      "observation_id": "tga",
      "available_at": "2026-09-05T16:00:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "IORB policy setting",
      "value": "3.65 (derived from target upper bound)",
      "unit": "percent",
      "frequency": "policy-setting",
      "observation_time": "2026-09-04T16:30:00-04:00",
      "release_time": "2026-09-04T16:30:00-04:00",
      "source_id": "fed-iorb",
      "critical": true,
      "max_age_hours": 720,
      "observation_status": "new-observation",
      "vintage": "2026-09-04 initial",
      "revision_status": "initial",
      "observation_id": "iorb",
      "available_at": "2026-09-04T16:30:00-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "fresh"
    },
    {
      "name": "Standing Repo Facility usage",
      "value": "unavailable; not imputed as zero",
      "unit": "USD bn",
      "frequency": "business-daily",
      "observation_time": "2026-09-08T20:05:01.303816-04:00",
      "release_time": "2026-09-08T20:05:01.303816-04:00",
      "source_id": "nyfed-repo",
      "critical": false,
      "max_age_hours": 72,
      "observation_status": "missing",
      "vintage": "2026-09-08 unknown",
      "revision_status": "unknown",
      "observation_id": "srf",
      "available_at": "2026-09-08T20:05:01.303816-04:00",
      "retrieved_at": "2026-09-08T20:05:01.303825-04:00",
      "freshness_status": "missing"
    }
  ],
  "calendar": [
    {
      "event_id": "auction-2026-09-10-6",
      "date": "2026-09-10",
      "event_class": "auction",
      "title": "Treasury Bond auction",
      "expected_direction": "neutral",
      "size_range": "22000000000",
      "uncertainty": "low",
      "source_id": "treasury-auctions"
    },
    {
      "event_id": "auction-2026-09-10-7",
      "date": "2026-09-10",
      "event_class": "auction",
      "title": "Treasury Bill auction",
      "expected_direction": "neutral",
      "size_range": "85000000000",
      "uncertainty": "low",
      "source_id": "treasury-auctions"
    },
    {
      "event_id": "auction-2026-09-10-8",
      "date": "2026-09-10",
      "event_class": "auction",
      "title": "Treasury Bill auction",
      "expected_direction": "neutral",
      "size_range": "90000000000",
      "uncertainty": "low",
      "source_id": "treasury-auctions"
    }
  ],
  "calendar_coverage": [
    {
      "event_class": "tax",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "federal-payment",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "auction",
      "status": "covered",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "settlement",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "maturity",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "coupon-payment",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "fed-release",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "treasury-announcement",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    },
    {
      "event_class": "period-end",
      "status": "none-identified",
      "note": "Official sources checked for 2026-09-10..2026-09-23."
    }
  ],
  "scenarios": [
    {
      "scenario_id": "base",
      "name": "Mixed/no-direction base",
      "likelihood_mode": "class",
      "likelihood": "base",
      "calibrated": false,
      "calibration_method": null,
      "calibration_sample_size": null,
      "horizon_days": 14,
      "assets": [
        "US equities",
        "UST",
        "USD",
        "gold",
        "BTC"
      ],
      "claim_ids": [
        "c1",
        "c6"
      ],
      "confirmation": "SOFR/EFFR remain near IORB and credit does not deteriorate",
      "counterpath": "Orderly Treasury settlement but no broad risk-asset confirmation",
      "withdrawal": "SOFR-IORB widens persistently or SRF usage appears",
      "valid_until": "2026-09-23"
    },
    {
      "scenario_id": "ease",
      "name": "Easing transmission",
      "likelihood_mode": "class",
      "likelihood": "medium",
      "calibrated": false,
      "calibration_method": null,
      "calibration_sample_size": null,
      "horizon_days": 14,
      "assets": [
        "US equities",
        "UST",
        "USD",
        "gold",
        "BTC"
      ],
      "claim_ids": [
        "c1",
        "c6"
      ],
      "confirmation": "Stable reserves, falling TGA and improving credit/risk breadth",
      "counterpath": "Long yields rise through inflation or term premium",
      "withdrawal": "Credit spreads widen or reserves fall",
      "valid_until": "2026-09-23"
    },
    {
      "scenario_id": "drain",
      "name": "Tax/issuance drain stress",
      "likelihood_mode": "class",
      "likelihood": "medium",
      "calibrated": false,
      "calibration_method": null,
      "calibration_sample_size": null,
      "horizon_days": 14,
      "assets": [
        "US equities",
        "UST",
        "USD",
        "gold",
        "BTC"
      ],
      "claim_ids": [
        "c1",
        "c6"
      ],
      "confirmation": "TGA rises as reserves fall and repo stress appears",
      "counterpath": "MMF/RRP buffers absorb settlement without rate pressure",
      "withdrawal": "Funding rates and credit remain stable",
      "valid_until": "2026-09-23"
    }
  ],
  "action": {
    "status": "no-edge",
    "text": "No directional edge; await confirmation from funding, Treasury settlement, and market transmission.",
    "supporting_claim_ids": []
  }
}
```
