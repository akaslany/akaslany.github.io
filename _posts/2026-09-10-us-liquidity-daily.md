---
layout: post
title: "미국 유동성·자금시장 인텔리전스 v2 — 2026-09-10"
date: 2026-09-10 07:30:00 +0900
categories: [us-liquidity]
tags: [미국유동성, FRED, TGA, RRP, SOFR, 지급준비금]
permalink: /liquidity/2026-09-10/
---

> **공개 자료 안내:** FRED·연준·미 재무부·뉴욕 연은 계열 공개 시계열을 규칙 기반으로 집계한 정보 자료입니다. 지표별 관측일과 발표 주기가 달라 최신성이 서로 다를 수 있으며, 투자 권유나 수익 보장이 아닙니다.

> 판단시각 2026-09-09T18:30:00-04:00 이전 공개분만 사용한다. 미확인 자료를 0으로 대체하지 않는다.

## 1. Regime

**판정: 혼합·방향성 우위 없음(NO EDGE).** 유동성은 ① Fed 대차대조표·준비금, ② Treasury 현금흐름·조달, ③ 단기자금시장 완충·스트레스, ④ 시장 전달 결과의 네 층으로 분리한다. 단일 `Fed assets−TGA−RRP`는 회계 스냅숏이지 위험자산 매수 수요가 아니다.

## 2. 24h Changes

- **fed-assets:** `no-new-observation`
- **reserves-wed:** `no-new-observation`
- **sofr:** `new-observation`
- **effr:** `new-observation`
- **rrp:** `new-observation`
- **tga:** `new-observation`
- **iorb:** `new-observation`
- **srf:** `missing`

`no-change`는 새 공표값이 같다는 뜻이고 `no-new-observation`은 새 공표가 없어 변화를 계산하지 않았다는 뜻이다. 후자를 0 또는 횡보로 해석하지 않는다.

## 3. Fact Cards

- **Fed/H.4.1:** 주간평균 reserve-funds 공급요인 6737.204 USD bn; 주간평균 지급준비금 2929.285 USD bn. 수요일 시점 총자산과 혼합하지 않는다.
- **Treasury/DTS:** TGA 880019 USD mn.
- **Money markets:** ON RRP 0.432 USD bn; SOFR/volume 3.64; 2904; IORB 3.65 (derived from target upper bound)%.
- **MMF/repo/credit:** 확보된 공식 관측만 표시하며 missing 항목은 점수·행동 근거에서 제외한다.

## 4. Flow Ledger / Accounting

- Fed 자산과 준비금·TGA·RRP는 복식 관계이나 통화와 기타 자산·부채가 함께 변하므로 일대일 귀속하지 않는다.
- TGA 하락은 1차적으로 민간 현금·준비금 공급 방향, 상승은 흡수 방향이다. 상대방과 MMF/repo 재배치에 따라 시장 전달은 달라진다.
- ON RRP 감소는 Fed 부채 내 재배치 가능성이지 동일액 준비금 증가의 증거가 아니다.
- 국채는 총발행/순발행 및 경매일/결제일을 분리하고 실제 DTS로 사후 대조한다.

## 5. Next-14-Day Calendar

범위: 2026-09-11–2026-09-24.
- **2026-09-15 tax:** Estimated-tax deadline — reserve-drain; unknown; no official daily forecast; uncertainty high.

## 6. Asset Scenarios

숫자 확률을 붙일 보정 표본이 없으므로 가능성 등급만 사용한다.
- **기본 시나리오:** 주식·미국 국채·달러·금·비트코인 모두 방향성 우위를 보류한다. 확인 조건: SOFR·EFFR가 IORB 부근을 유지하고 신용 여건이 악화되지 않는 경우. 반대 경로: 국채 결제는 질서 있게 소화되지만 위험자산 전반의 확인 신호는 없는 경우. 철회 조건: SOFR와 IORB의 금리 차가 지속해서 확대되거나 상설 레포제도(SRF) 이용이 나타나는 경우.
- **완화 전달(가능성 중간):** 확인 조건: 지급준비금이 안정되고 TGA가 감소하며 신용 여건과 위험자산 시장 폭이 개선되는 경우. 반대 경로: 인플레이션 또는 기간 프리미엄 때문에 장기금리가 상승하는 경우. 철회 조건: 신용스프레드가 확대되거나 지급준비금이 감소하는 경우.
- **유동성 흡수·조달 스트레스(가능성 중간):** 확인 조건: TGA가 증가하고 지급준비금이 감소하는 가운데 레포시장 스트레스가 나타나는 경우. 반대 경로: MMF·RRP 완충재가 금리 압력 없이 국채 결제를 흡수하는 경우. 철회 조건: 조달금리와 신용 여건이 안정적으로 유지되는 경우.
유효기간은 2026-09-24까지 또는 다음 핵심 공표·결제 직후 중 먼저 도래하는 때까지다.

## 7. Counterevidence / Withdrawal

완화 서사는 신용 약세·장기금리 상승·위험자산 breadth 악화·SOFR 상단 압력이 반증한다. 스트레스 서사는 IORB 부근 금리, 무질서하지 않은 결제, MMF/repo 완충이 반증한다. **Not identified:** 현재 자료만으로 시장 변동 원인을 Fed, TGA, 발행, 거시뉴스 또는 포지셔닝 중 하나로 식별할 수 없다. 확인 전 unsupported action은 금지한다.

## 8. Coverage & Freshness Audit

- **fed-assets**: fresh / no-new-observation / obs 2026-09-02T16:30:00-04:00 / release 2026-09-03T16:30:00-04:00 / vintage 2026-09-03 initial.
- **reserves-wed**: fresh / no-new-observation / obs 2026-09-02T16:30:00-04:00 / release 2026-09-03T16:30:00-04:00 / vintage 2026-09-03 initial.
- **sofr**: fresh / new-observation / obs 2026-09-08T08:00:00-04:00 / release 2026-09-09T08:00:00-04:00 / vintage 2026-09-09 initial.
- **effr**: fresh / new-observation / obs 2026-09-08T08:00:00-04:00 / release 2026-09-09T08:00:00-04:00 / vintage 2026-09-09 initial.
- **rrp**: fresh / new-observation / obs 2026-09-09T13:30:00-04:00 / release 2026-09-09T14:00:00-04:00 / vintage 2026-09-09 initial.
- **tga**: fresh / new-observation / obs 2026-09-08T23:59:00-04:00 / release 2026-09-09T16:00:00-04:00 / vintage 2026-09-08 initial.
- **iorb**: fresh / new-observation / obs 2026-09-08T16:30:00-04:00 / release 2026-09-08T16:30:00-04:00 / vintage 2026-09-08 initial.
- **srf**: missing / missing / obs 2026-09-09T18:30:00-04:00 / release 2026-09-09T18:30:00-04:00 / vintage 2026-09-09 unknown.
- PIT 빈티지는 append-only 저장하며 critical source/schema/freshness 실패 시 게시를 차단한다.
- Claim manifest에는 Fact/accounting/inference/not-identified를 명시한다.
