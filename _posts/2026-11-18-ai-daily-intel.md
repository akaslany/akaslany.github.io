---
layout: ai-intel
title: "AI Daily Intel — 2026-11-18"
date: 2026-11-18 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-18/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-18  
- **기준 시각:** 2026-11-18T06:00:00+09:00  
- **수집 구간:** [2026-11-17T06:00:00+09:00, 2026-11-18T06:00:00+09:00) Asia/Seoul  
- **조사 범위:** 10  
- **수록 사건 수:** 29

## 1 오늘의 AI 한 문장

GPT-6.2 출시로 모델 선택과 비용 실험의 폭이 넓어졌고 AI 반도체 공급망에서는 증설 약정이 나왔지만, 구매·배포 판단에는 동일 과제의 완료 비용, 실제 가동, 고객 운영을 각각 확인해야 한다.

## 2 핵심 신호 5

1. **GPT-6.2 Astra·Sol 출시 — <br class="report-field-break" />Evidence A.** API와 적격 ChatGPT Work·Codex 계정에 열렸고, GitHub도 적격 Copilot 플랜의 일반 제공을 확인했다. Astra 입·출력 토큰 단가는 전작보다 20% 낮다. 토큰 단가 인하가 과제당 총비용 절감으로 이어지는지는 별도 검증이 필요하다. [OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/)
2. **NVIDIA, 한국 기판 공급 계약 수정 — <br class="report-field-break" />Evidence A.** 삼성전기와의 계약 수정은 세종·부산 기판 제조 협력을 잇는다. Kinsus의 전용 생산능력 3.5배 초과 목표는 대만 증설 계획이며, 한국 증설 규모는 공개되지 않았다. [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-expands-commitments-with-supply-chain-partners-to-support-ai-infrastructure-buildout)
3. **NVIDIA 데이터센터 분기 매출 1,076억 달러 — <br class="report-field-break" />Evidence A.** 전년 대비 110% 증가했다. Vera Rubin NVL72 출하도 보고했지만, Rubin 매출이나 한국 공급사 수혜 규모는 분리하지 않았다. [NVIDIA 실적](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027)
4. **업스테이지·Cohere, 주권형 AI 제휴 — <br class="report-field-break" />Evidence A.** Solar 모델과 Document Parse의 Cohere North 통합을 계획한다. 국내 기업·공공기관을 겨냥하지만 통합판 출시일과 운영 고객은 확인되지 않았다. [Upstage](https://www.upstage.ai/news/upstage-cohere-partnership)
5. **Waymo 고속도로 제한 첫 공개 — <br class="report-field-break" />Evidence B.** 캘리포니아 DMV의 제한 조치가 공개됐고 Waymo는 다른 시장에서도 고속도로 운행을 멈췄다. 일반도로 운행은 계속됐다. [TechCrunch](https://techcrunch.com/2026/11/17/waymo-suspends-freeway-rides-nationwide-after-california-dmv-order/)

## 3 영역별 AI 브리프

상태값 `yes`·`no`·`unknown`은 각 항목의 확인 범위를 나타낸다. <br class="report-field-break" />Evidence A는 공식·정부·논문·저장소 등 1차 근거, B는 언론 보도에 근거한 확인, C는 핵심 원장에 넣지 않는 약한 근거다. A는 발표나 공개 사실에 대한 등급이지 성능의 독립 검증 등급이 아니다.

### Frontier Models

  - **GPT-6.2 Astra·Sol 출시** — API 및 적격 ChatGPT Work·Codex에 제공. Astra API 입·출력 토큰 단가는 GPT-6 Astra 대비 20% 낮고 Sol은 전작 단가를 유지한다. GitHub Copilot 일반 제공도 같은 출시로 병합했다.
  - Evidence A / <br class="report-field-break" />출처: [openai.com](https://openai.com/index/introducing-gpt-6-2-astra-sol/) ; [github.blog](https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available)

  - **OpenAI, RISC-V 평가와 AMD 설계 반영 공개** — AMD가 모델 제안 일부를 제조에 넘긴 GPU 설계와 생산 설계 파일에 반영했다고 OpenAI가 밝혔다. 새로 확인된 것은 공개 사실이다. 제안을 생성한 모델이 GPT-6.2 Astra였는지, 결과 GPU가 출하됐는지는 확인되지 않았다.
  - Evidence A / <br class="report-field-break" />출처: [openai.com](https://openai.com/index/advancing-chip-design-with-our-models/)
  - `production: yes`는 공개문에 명시된 생산 설계 반영에 한정한다.

### AI Research

  - **POSTECH 연계 프리프린트: LLM이 직접 쓰는 가중치** — 세 모델 모두 구조 선택을 맡겼을 때 희소 연관 테이블을 골랐다. 기울기 학습 없이 가중치를 작성하는 실험이며, 사전학습 Transformer의 일반적 대체를 입증하지 않는다.
  - Evidence A / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.22055)

### Agents/Developer Tools

  - **Copilot 앱 연결 범위 확대** — Azure DevOps와 Chromium 브라우저 연동은 공개 프리뷰, GitHub Enterprise Server 지원은 앱 1.2.0 이상에서 일반 제공. Azure DevOps·Enterprise Server 저장소에는 클라우드 세션이 없다.
  - Evidence A / <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-17-github-copilot-app-microsoft-ignite-releases)

  - **Copilot 코드 리뷰 프리뷰** — 설정 한도 안에서 리뷰 강도를 조절하고, 관련 공개 저장소 문맥을 참조하며, PR 댓글에서 노출 의심 자격증명을 알린다. 기존 검사 대체 근거는 없다.
  - Evidence A / <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more)

  - **Copilot에 MAI Code 2·Flash 추가** — VS Code·CLI·클라우드 에이전트 등의 모델 선택기에 두 모델을 추가했다. Flash는 Free·Student에도 명시됐다. 사용량 기반 과금 안내는 실현 매출이 아니다.
  - Evidence A / <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot)

  - **Copilot 감사 기록의 Agent 365 스트리밍** — Enterprise Managed Users를 쓰는 Enterprise Cloud 고객이 지원 클라이언트의 프롬프트·응답·도구 호출을 모니터링할 수 있다. 로그 열람 권한과 보존 설정을 별도로 확인해야 한다.
  - Evidence A / <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-17-monitor-github-copilot-activity-through-microsoft-agent-365)

### Open Source/Repos

  - **vLLM 0.34.0** — 확장형 KV 캐시가 기본값이 됐고 GPU의 Model Runner V1이 제거됐다. 기존 플래그를 쓰는 배포는 시작 단계에서 실패할 수 있다. 공개 시각은 11월 17일 07:22 KST다.
  - Evidence A / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/vllm-project/vllm/releases/tags/v0.34.0?per_page=1)

  - **Rumble-2-Flash 음성인식 가중치 공개** — Apache 2.0의 0.5B 체크포인트로, 카드에는 45개 언어가 명시됐다. Transformers와 vLLM에서 실행 가능하며, 가중치 공개가 학습 코드 공개를 뜻하지 않는다.
  - Evidence A / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/rumble-2-flash)

  - **DaisyRose-27B 가중치 공개** — Qwen3.8-27B 기반 강화학습 파생 모델을 Apache 2.0 BF16·FP8·NVFP4로 제공한다. 전체 학습 스택과 데이터 공개는 확인되지 않았다.
  - Evidence A / <br class="report-field-break" />출처: [www.radixark.com](https://www.radixark.com/blog/daisyrose-27b)

### Chips/Compute/Infrastructure

  - **NVIDIA 기판·패키징 공급 확대 약정** — 삼성전기와 기존 계약을 수정했다. Kinsus는 NVIDIA 전용 ABF 생산능력 3.5배 초과를 목표로 하며, 2027년 하반기 생산 개시 및 2028년 3분기 추가 능력을 목표로 한다. NVIDIA 자금이 투입되는 SPIL 패키징 증설은 2029년 중반이 목표다. 한국 증설 수치와 실제 추가 생산은 미확인이다.
  - Evidence A / <br class="report-field-break" />출처: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-expands-commitments-with-supply-chain-partners-to-support-ai-infrastructure-buildout)

  - **AMD, Taalas 인수 완료 공개** — 특화 추론 칩 기술을 가속기 로드맵에 통합할 계획이다. 통합 제품, 납기, 규제 승인 세부사항은 공개되지 않았다.
  - Evidence A / <br class="report-field-break" />출처: [newsroom.amd.com](https://newsroom.amd.com/news/amd-completes-acquisition-taalas-advance-ai-inference-innovation/)

  - **인도 Neysa MI350X 클러스터 가동 공개** — AMD는 Tytan 베어메탈 클러스터가 가동 중이고 고객이 용량을 계약했다고 밝혔다. 고객의 실제 운영 워크로드와 인식 매출은 확인되지 않았다.
  - Evidence A / <br class="report-field-break" />출처: [newsroom.amd.com](https://newsroom.amd.com/news/neysa-scales-ai-infrastructure-india/)

  - **NVIDIA 분기 실적 공개** — 10월 25일 종료 분기 데이터센터 매출 1,076억 달러, 전년 대비 110% 증가. Vera Rubin NVL72 출하 언급은 별도의 신규 출하 이벤트나 일반 제공 확인으로 세지 않았다.
  - Evidence A / <br class="report-field-break" />출처: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027)

### Enterprise/Applications

  - **ChatGPT for Sales 출시** — 전용 플러그인과 30개 이상의 신규·개선 파트너 플러그인을 발표했다. 적격 관리자가 활성화할 수 있고 기능은 플랜·지역·워크스페이스에 따라 다르다. 출시문에 실명 고객의 운영 사례가 실렸다.
  - Evidence A / <br class="report-field-break" />출처: [openai.com](https://openai.com/index/introducing-chatgpt-for-sales/)

  - **Astra for Law 업데이트 및 신청 대상 확대** — 기존 승인 고객은 새 법률 구성을 선택할 수 있으며 모든 Enterprise 고객이 접근을 신청할 수 있다. API도 별도 신청 대상이다. 신청 자격 확대는 자동 승인이나 한국법 지원이 아니다.
  - Evidence A / <br class="report-field-break" />출처: [openai.com](https://openai.com/index/astra-law-6-2/)

  - **Le Groupe Figaro·OpenAI 제휴** — ChatGPT 내 기사 요약·발췌·원문 링크와 사내 Enterprise 도입을 계획한다. 서비스 개시, 운영 도입, 계약 금액은 확인되지 않았다.
  - Evidence A / <br class="report-field-break" />출처: [openai.com](https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership/)

### Funding/M&A/Business

  - **Isomorphic Labs, 시리즈 C 50억 달러 조달 발표** — Greenoaks와 Sequoia가 공동 주도했다. AI 신약 설계 플랫폼과 파이프라인 확대 계획이며, 투자금은 임상 개시나 규제 승인 근거가 아니다.
  - Evidence A / <br class="report-field-break" />출처: [www.isomorphiclabs.com](https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-series-c-investment-round)

  - **Model ML, 시리즈 B 2억5천만 달러** — 기업가치 15억 달러. 투자자 발표에는 고객 환경 배포와 2026년 3분기 기준 ARR 전년 대비 12배 성장도 실렸으나, 절대 ARR은 비공개다. 운영·ARR 보고는 투자금과 별개이며 이번 라운드에 앞선 실적이다.
  - Evidence A / <br class="report-field-break" />출처: [www.generalatlantic.com](https://www.generalatlantic.com/media-article/model-ml-raises-250-million-at-1-5-billion-valuation-18-months-after-launching-from-stealth/)

### Safety/Evaluation/Security

  - **Waymo 고속도로 제한 첫 공개** — 11월 11일 내린 제한을 DMV가 17일 공개 확인했다. 공사구간 침범 등 사건 이후의 조치이며 Waymo는 다른 시장의 고속도로 운행도 중단했다. 아래 상태는 무인 고속도로 운행에 한정한다. 일반도로 서비스는 계속됐다.
  - Evidence B / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/17/waymo-suspends-freeway-rides-nationwide-after-california-dmv-order/)

  - **Spotify, 아티스트 프로필 보호 전면 제공** — 이름이 사용된 발매를 알리고 아티스트가 연결을 거절하거나 사전 승인을 요구할 수 있다. 합성 음원 탐지기가 아니다.
  - Evidence B / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/17/spotifys-new-tool-aims-to-stop-deepfakes-from-being-attributed-to-real-artists/)

  - **Proton Lumo 데스크톱 출시** — Windows·macOS·Linux에서 커넥터 동작별 자동 실행·승인·차단을 설정할 수 있다고 Proton이 설명했다. 실제 권한 집행의 독립 검증은 없다.
  - Evidence B / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/17/protons-lumo-a-privacy-focused-alternative-to-chatgpt-and-claude-arrives-on-desktop/)

### Policy/Geopolitics

  - **EU Horizon Europe 디지털 공모 개시** — 전체 2억9,700만 유로 중 AI 4개 주제에 1억700만 유로, 분산 AI 처리·컴퓨팅·데이터센터 효율 관련 3개 주제에 1억1,200만 유로가 배정됐다. 전체 금액은 AI 전용 예산도, 선정·집행액도 아니다.
  - Evidence A / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-launches-over-eu290-million-boost-eu-tech-sovereignty-and-beyond)

  - **NVIDIA 이사회, 국가안보·수출통제 감독위원회 설치** — 국가안보·무역 준법 업무에 대한 이사회 감독을 강화했다. 수출법이나 고객 심사 절차가 바뀌었다는 발표는 아니다.
  - Evidence A / <br class="report-field-break" />출처: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-board-of-directors-establishes-national-security-and-export-control-oversight-committee)

  - **EU AI Office, 중소기업용 AI 공급사 모집** — 첫 회 최대 100개 공급사를 대상으로 한다. 한국 본사 기업은 직접 지원 자격이 없다. 모집 개시는 카탈로그 등록이나 고객 도입과 다르다.
  - Evidence A / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/call-expression-interest-european-ai-providers)

### Korea Exposure

  - **업스테이지·Cohere 주권형 AI 제휴** — 서울에서 체결했다. Solar Pro·Mini와 Document Parse를 Cohere North에 통합하고 온프레미스·가상 사설 클라우드 배포를 계획한다. 국내 기업·공공기관이 우선 목표이며 출시일은 미정이다.
  - Evidence A / <br class="report-field-break" />출처: [www.upstage.ai](https://www.upstage.ai/news/upstage-cohere-partnership)

  - **스캐터랩, 대표 직속 제타 안전팀 신설** — 핵심 AI 개발 인력 절반을 콘텐츠·대화 검수 모델에 배치할 계획이다. 국내 미성년자 이용·결제 한도와 연령 확인 강화는 운영 확인이 아닌 계획이다.
  - Evidence B / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261117103025)

  - **ETRI, 2027년 전략 R&D 계획 공개** — AI 인프라·과학 AI·피지컬 AI 등을 포함한 18개 과제 중 8개가 신규 제안이다. 1,220억 원은 국회 심의 중인 전략 포트폴리오 전체 추정액이지 확정된 AI 예산이 아니다.
  - Evidence B / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261117000001)

  - **AI 데이터센터 수요와 MLCC 조달 압박** — ZDNet Korea가 인용한 TrendForce의 11월 중순 시장 집계에서 리드타임이 9월 말 32주에서 40주로 늘었다. 삼성전기 공급 노출은 있지만 신규 계약·가격 인상·매출 인식 근거는 없다.
  - Evidence B / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261117153544)
  - 확인 범위는 시장 집계 보도이며 공급사의 신규 발표가 아니다.

## 4 기술→산업 전달경로

| 출발점 | 산업에 전달되는 경로 | 확인할 지표 |
|---|---|---|
| Astra 토큰 단가 인하·Sol 선택지 | 모델별 과제 배정 → 재시도와 검수량 변화 → 완료 과제당 비용 변화 | 동일 과제의 정확도·지연·총비용, 한국어 업무 성능 |
| LLM의 RTL 최적화 | 제안 생성 → 시뮬레이션·물리 검증 → 상용 설계 반영 | 동일 기능·면적 조건에서 독립 재실행, 실측 실리콘, AMD 측 확인 |
| 기판·패키징 약정 | 설비투자 → 생산 검증 → 출하 → 매출 인식 | 삼성전기의 설비별 일정과 물량, Kinsus·SPIL 가동 이정표 |
| 업스테이지·Cohere 통합 계획 | 배포 옵션 제공 → 데이터 통제 검증 → 국내 기업·공공 도입 | 출시일, 지원 구성, 국내 실명 운영 고객 |
| Waymo 고속도로 중단 | 반복 안전사건 → 운행 조건 제한 → 시정조치 검증 후 재개 판단 | DMV의 서면 요구사항과 재개 기준. 국내 적용은 참고 사례이지 정책 변경이 아님 |

## 5 AI Stack Signal Map

| 스택 | 확인된 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 모델·연구 | GPT-6.2 제공, 가중치 직접 작성 프리프린트 | 공통 조건의 독립 재현과 한국어 성능 |
| 가중치·서빙 | vLLM 신규 릴리스, Rumble·DaisyRose 다운로드 가능 | 기존 운영 환경 호환성, 한국어 ASR 정확도, 동일 조건 성능 |
| 개발·감사 | Copilot 저장소 연결·리뷰 프리뷰·Agent 365 스트리밍 | 프리뷰와 일반 제공 간 기능 차이, 리뷰 오탐률, 로그 거버넌스 |
| 업무 앱·유통 | 영업 플러그인 제공, 법률 구성 신청 확대, Figaro·업스테이지 제휴 | 지역별 접근, 승인 조건, 신규 통합의 실제 운영 |
| 반도체·컴퓨팅 | 기판 약정, Taalas 인수 완료, 인도 클러스터 가동, NVIDIA 분기 매출 | 신규 생산능력 가동, 고객 운영 워크로드, 제품·공급사별 매출 |
| 안전·정책 | 운행 제한, 발매 승인 통제, EU 공모 개시 | 운행 재개 기준, 통제 효과, 공모 선정·집행 |

## 6 반증·과장·재현성 감사

아래 성능 수치는 연구자 번들이 인용한 발표자·개발자 보고다. 각 평가의 독립 재현은 확인되지 않았다.

| 평가 | 과제·비교군·지표 | 조건·공개 범위·오염 감사 |
|---|---|---|
| GPT-6.2 Agents’ Last Exam | 장기 다단계 전문 업무. Astra는 GPT-6 Astra 대비 +5.2점·비용 3분의 1 미만, Claude Fable 5.2 대비 +5.5점·비용 5%라는 주장 | Fable 비교에서 대체 모델을 쓴 9개 과제가 제외됐다. 동일 과제 집합과 학습 오염 통제가 확인되지 않아 비용 우위를 일반화할 수 없다. |
| GPT-6.2 GDPval v2 | 내부 장기 지식업무 평가. 각 전작 대비 Astra +6.2%p, Sol +5.3%p. Astra 출력 토큰은 전작 대비 22% 감소 | 내부 평가이며 학습 중복은 독립 확인되지 않았다. 토큰 절감률은 배포 환경의 총비용 절감률이 아니다. |
| GPT-6.2 코드 리뷰·FrontierCode 2.0 | GitHub 초기 리뷰에서 Sol은 전작 대비 실제 이슈를 약 두 배 포착했고 Astra 개선 폭은 미공개. 별도 병합 적합성 과제에서 Sol은 Astra와 0.5점 이내, 비용 약 5분의 1이라는 발표 | GitHub는 표본·저장소 선정·채점법을 공개하지 않았다. FrontierCode는 두 모델 모두 `max` 설정이지만 코드 리뷰 재현은 아니다. 두 비교 모두 학습 중복 미확인. |
| Astra for Law | LAB-AA 법률 실무 만점률 20.8%, Astra 15.0%, Muse Wonder Full 13.1%. 별도 Harvey LAB 16.2%, GPT-6 Astra 4.6%, GPT-6.2 Astra 14.6%. Vals 미국 법률 조사 만점률 53.8%(112/208), 9월 법률 구성 약 46%; 부분점수 포함 90.9% | LAB-AA는 24개 분야 120과제에서 모든 기준 충족 및 중대한 무근거 주장 배제를 요구했다. Vals는 만점에 출처 확인이 필요했다. 확장 검색 인덱스와 특화 지침을 포함한 시스템 비교이며 오염 통제 및 한국법 적용성 미확인. |
| OpenAI RISC-V | PicoRV32·Ibex 최적화 및 사양 기반 설계. 유사 토큰 예산에서 이전 GPT와 비교한 평균 정규화 처리량. 약 11만2천 토큰에서 Astra가 두 코어 모두 선두였고 PicoRV32는 GPT-6 Astra의 약 두 배 | 9,881개 채점 실행. 숨은 워크로드의 IPC 기하평균과 Yosys 추정 클록을 사용했고 시뮬레이션 실패나 원본 면적 16배 초과는 0점. 면적 한도가 넓고 사양 기반 설계는 기능을 생략할 수 있다. 공개 코어의 학습 노출, 실측 클록 미확인. AMD 설계 반영은 이 평가의 재현이 아니다. |
| 가중치 직접 작성 | 주로 객관식 QA. 같은 LLM이 가중치를 쓴 고정 Transformer 대비 한 설계가 약 1,800분의 1 파라미터로 우세했고 최고 정확도는 54.4%. 사전학습 LLM은 더 정확했다. | 세 LLM에 예제 10개·샌드박스·최소 지침을 제공한 프리프린트. 작성 모델의 학습 데이터에 평가 문항이 없었는지 확인되지 않았다. |
| vLLM 0.34.0 | Step5 디코딩 최대 1.95배, GLM-5.3-Flash 처리량 1.6배, GLM-5.3 장문 프리필의 첫 토큰 도달 개선 1.24–1.40배라는 유지보수자 보고 | Step5는 GB200, 릴리스는 Blackwell·MI355X 결과도 언급한다. 항목별 비교 빌드·동일 설정·데이터 출처가 충분히 공개되지 않았다. |
| Rumble-2-Flash | 다국어 평균 오류율 6.96%, 영어 WER 6.60%. 다국어 비교군은 Whisper large-v3·Meta omniASR-LLM 7B. AppTek 영어 전화 음성 WER 7.86%, Nemotron 7.78%; Qwen3-ASR도 비교. 최대 배치 처리량은 실시간의 7,000배 초과라는 발표 | 리더보드 v1.16.1, H200·vLLM 조건. AppTek은 14개 영어 억양의 302시간과 자체 채점 스크립트 사용. 중국어는 CER이며, 다국어 평균은 한국어 성능을 증명하지 않는다. 학습·평가 중복 미확인, 배치 처리량은 단일 요청 지연이 아니다. |
| DaisyRose-27B | Terminal Bench pass@1 12.0% 대 Qwen3.8-27B 5.6%. 소프트웨어 공학·추론·지시 준수 과제도 평가했다. 학습 효율은 Megatron 기반 비교군 대비 FLOPs 활용률 37% 대 16%, 초당 약 16,800 대 8,300토큰 | 헤드라인은 Terminal Bench 4.1 대 4.0이라 동일 버전 비교가 아니다. DaisyRose는 내부 하니스로 과제당 8회 평균, BF16·FP8 중 더 좋은 결과를 보고했다. 학습 비교는 H200 144장과 내부 백엔드를 사용했다. 학습·평가 중복 미감사. |
| Model ML | 선택된 금융 업무에서 미상 프런티어 모델 대비 비용 2%, 대부분 5배 속도, 동등 이상 정확도라는 주장 | 자체 미세조정 모델에 배정한 업무만 비교했다. 투자자 발표에 과제·표본·모델 버전·정확도 정의·비용 산식·실행 조건·오염 통제가 없다. 투자 확인과 성능 검증은 별개다. |

ChatGPT for Sales의 고객 증언과 절감 추정은 통제 벤치마크가 아니다. Spotify 발매 통제, Lumo 권한 설정, 제타 안전팀은 조치의 존재나 계획을 보여줄 뿐 효과 측정은 아니다. 공급 계약과 공모 개시는 각각 생산 실적과 과제 선정을 뜻하지 않는다.

## 7 다음 확인 일정

- **다음 브리핑:** GPT-6.2 동일 과제 비용·지연과 한국 계정 접근, Astra for Law 승인·한국법 범위, vLLM 업그레이드 호환성을 확인할 항목으로 둔다. OpenAI 칩 평가는 AMD 측 공개 및 독립 평가 하니스 유무가 우선이다.
- **후속 공개 시:** Waymo 시정조치와 고속도로 재개 기준, Model ML의 절대 ARR, Isomorphic Labs의 첫 임상 개시, 업스테이지·Cohere의 통합판 출시일과 실명 고객, ETRI 확정 예산을 확인한다.
- **2026-12-17 / 2027년 1월 하반:** EU EDIH 모집이 정원에 먼저 도달하는지, 이후 예정대로 카탈로그 등록이 시작되는지 구분한다.
- **2026년 말:** 제타 국내 미성년자 이용·결제 한도 실제 시행 여부를 확인한다. 규제 검토는 최종 결정과 분리한다.
- **2027-03-18:** Horizon Europe 공모 마감 전 주제별 컨소시엄 자격과 한국 기관 참여 조건을 확인한다. 선정은 별도 추적한다.
- **2027년 하반기 → 2028년 3분기 → 2029년 중반:** 각각 Kinsus 생산 개시, Kinsus 추가 능력, SPIL 증설의 목표 시점이다. 삼성전기의 국내 물량·설비 일정은 별도 공개를 기다린다.

## 8 Coverage Audit

**10개 연구자 결과 모두 종결본 수신.** 별도 터미널 상태 필드나 구조화된 `search_audit`는 번들에 없다. 아래 1차는 후보 탐색, 2차는 원문·날짜 확인으로 `coverage_notes`에 기록된 작업을 정리한 것이다. 패스별 실행 로그나 검색 후보 총수는 추정하지 않았다. ‘제출 후보’는 `events`와 `watchlist`에 명시된 건만 세고, ‘검증’은 연구자가 `events`로 반환한 중복 병합 전 건, ‘포함’은 카테고리 하나에만 귀속한 정규 원장 건이다.

| 연구자 / 상태 | 제출 후보 | 검증 | 포함 | 1차 탐색 → 2차 확인 및 3건 목표 대비 |
|---|---:|---:|---:|---|
| Frontier Models / 완료 | 3 | 3 | 2 | 영·한 언론, 모델사 및 논문 목록 → 공식 원문 확인. Fable·Mythos는 11월 9일, Sage·K2는 이전 원문, ScaleVLA는 시작 전으로 제외. 법률 구성을 Enterprise로 귀속해 **1건 미달**. 적격 한국·독립 언론 추가 근거 없음. |
| AI Research / 완료 | 3 | 3 | 1 | 영·한 검색, 연구실 페이지·논문 목록 → 공식 공개문과 arXiv 제출일 확인. K2·Sage 집계 노출 및 Sage 개정은 신규 연구 공개로 세지 않았고 InclusionMed는 시작 전. GPT-6.2와 칩 평가를 Frontier에 병합해 **2건 미달**. |
| Agents/Developer Tools / 완료 | 5 | 5 | 4 | 영·한 기술 매체·공식 채널 → GitHub 변경로그 직접 확인. GPT-6.2 Copilot 제공은 출시로 병합. Cursor는 기간 밖, Snap CLI는 적격 원문 날짜 검증 실패. 미달 없음. |
| Open Source/Repos / 완료 | 3 | 3 | 3 | 저장소·모델·논문 목록 및 영·한 보도 → 릴리스 타임스탬프와 모델 카드 확인. K2·Sage는 신규 배포 근거 부족, Codex 샌드박스는 기존 기능 문서. TechCrunch 아카이브 추출 실패. 미달 없음. |
| Chips/Compute/Infrastructure / 완료 | 4 | 4 | 4 | 영·한 반도체·인프라 보도 → AMD·NVIDIA 공식 공개 확인. TOP500·Lux·DGX Spark HPC는 11월 16일 날짜, SC26 요약은 재소개. RTX Spark 소매 업데이트는 데이터센터·공급망 우선순위에서 제외. 미달 없음. |
| Enterprise/Applications / 완료 | 4 | 4 | 3 | 일반·기술·한국 보도 → 공식 뉴스룸과 매체 인덱스 확인. Model ML은 Funding으로 귀속, LVMH는 11월 16일. Salesforce·Microsoft 페이지 접근 제한; 검증된 국내 링크 없음. 미달 없음. |
| Funding/M&A/Business / 완료 | 4 | 4 | 2 | 통신·경제·기술·한국 매체 및 회사 검색 → 발표문·아카이브 확인. NVIDIA 공급은 Chips, Figaro는 Enterprise에 병합. Reuters 추출 차단, 한국어 추가 적격 출처 없음. 이전 Amkor 약정과 기간 밖 NVIDIA 실적 후속 보도는 제외해 **1건 미달**. |
| Safety/Evaluation/Security / 완료 | 4 | 3 | 3 | 기술·보안·규제·논문·한국 검색 → TechCrunch 일별 아카이브와 보안 피드 확인. Gemini는 원 발표 날짜로 제외, Waymo의 The Register 후속은 기간 밖. 미달 없음. |
| Policy/Geopolitics / 완료 | 4 | 4 | 3 | 규제·수출통제·한국 영향 검색 → EU·미국·한국 당국 자료와 언론 아카이브 확인. Waymo는 Safety에 귀속. BIS·EU 관련 11월 16일 공지, AI 연계가 확인되지 않은 Temu 판단, 누적 반도체 집계 제외. Reuters 추출 차단. 미달 없음. |
| Korea Exposure / 완료 | 4 | 4 | 4 | 한·영 검색 → 국내 전문매체·기업 뉴스룸 직접 확인. SK hynix 기고는 논평, MondrianAI는 적격 원문 미확인, 수능 회고는 기간 불명. 제타 규제 검토는 최종 처분이 아님. 미달 없음. |

**전역 병합 및 상태 충돌 처리.** GPT-6.2 출시·평가·Copilot 제공, OpenAI 칩 설계 공개, Astra for Law, NVIDIA 공급 약정, Figaro, Model ML, Waymo의 교차 제출은 각각 한 건이다. 법률 구성은 기본 모델의 추가 출시가 아니라 별도 접근 결정이 있는 업무 앱 업데이트로 집계했다. 시스템 카드와 Horizon 세부 공모는 각각 본 발표에 포함했다. GPT-6.2는 제품 접근은 확인되나 별도의 운영 도입 근거가 없어 `production: unknown`을 적용했다. Waymo의 `production: no`는 중단된 고속도로 운행 기준이며, 정책 연구자가 언급한 일반도로 운영과 모순되지 않는다.

**시간 정밀도와 제외 기준.** 정확한 시각이 있는 항목에는 반개구간을 적용했다. 날짜만 있는 출처는 번들에 명시된 달력일 중첩 규칙으로 포함하되, 원문에 없는 시각·시간대를 추정하지 않았다. 특히 11월 18일 날짜만 있는 공개는 06:00 KST 전 게시를 독립 확인한 것이 아니다. 최초 공개와 과거 조치·설계·출하는 구분했다. C등급 원장 포함은 없으며, 아래 B등급 후보는 등급이 아니라 원 발표 날짜 때문에 제외했다.

### Watchlist (미확인 후보)

- 후보: Google announces changes to Gemini chat retention and controls (미포함 사유: Google 원 발표 날짜가 11월 16일로 날짜 기준 밖이며 17일 후속 보도는 발표일을 갱신하지 않음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/))

- **수록 사건 수:** 29
