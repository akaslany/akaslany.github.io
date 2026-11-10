---
layout: ai-intel
title: "AI Daily Intel — 2026-11-10"
date: 2026-11-10 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-10/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-10
- **기준 시각:** 2026-11-10T06:00:00+09:00
- **수집 구간:** [2026-11-09T06:00:00+09:00, 2026-11-10T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 27

## 1 오늘의 AI 한 문장

모델 선택지와 에이전트 배포 경로가 확대됐지만, 공급자 성능 주장·실제 운영·접근 통제의 증거 수준은 서로 다르며, 한국에서는 인프라 협력과 투자 계획을 현재 가용 제품이나 완료된 투자로 오인하지 않는 것이 핵심이다.

이번 보고서는 제공된 번들만 편집했다. <br class="report-field-break" />Evidence A는 공식 발표·원문 논문·정부 문서, B는 실명·귀속 가능한 언론 보도, C는 미확인·간접 근거를 뜻하며, A도 성능의 독립 검증을 의미하지 않는다.

시간 적격성에는 중요한 유보가 있다. 연구자들은 날짜만 있는 11월 9일·10일 자료를 달력일 중첩 규칙으로 채택했다. 해당 자료는 아래 원장에 조건부 포함하되, 정확한 시간창 안에 게시됐다고 확정하지 않는다. 명시적 시각이 시간창 밖인 자료는 제외했다. 따라서 27건은 정확한 시각까지 모두 검증된 사건 수가 아니라, 번들의 날짜 단위 적격성 판단을 계승한 중복 제거 편집 건수다.

## 2 핵심 신호 5

- **모델 경쟁의 단위가 성능에서 가격·접근 통제까지 넓어졌다.** Anthropic의 Fable/Mythos는 하나의 기반 모델에 다른 안전장치를 적용한 단일 출시이며, Meta Muse Ember는 저가 멀티모달 에이전트 작업을 겨냥한다. 모두 <br class="report-field-break" />Evidence A지만 성능은 독립 재현 미확인이다.
  - **출처:** [www.anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - **출처:** [research.meta.ai](https://research.meta.ai/blog/muse-ember)

- **에이전트 중단 권한을 에이전트 코드 밖에 두는 운영 설계가 공개됐다.** OpenAI Control Room은 추론 엔진에서 권한을 집행한다. 내부 운영 주장이며, 최대 35초 지연과 비프런티어 연구 작업의 fail-closed 전환 미완료가 한계다.
  - **출처:** [openai.com](https://openai.com/index/control-room/)

- **기업 도입의 유효한 증거는 제품 발표보다 업무 흐름과 검수 구조다.** Northern Trust 사례는 운영 중인 온보딩 업무와 사람의 예외 처리·최종 검증을 명시한다. 준비 기간과 품질 수치는 표본·공식·독립 감사가 공개되지 않은 고객/공급자 주장이다.
  - **출처:** [news.microsoft.com](https://news.microsoft.com/source/features/digital-transformation/northern-trust-finance-microsoft-partner-ai/)

- **정적 안전성 합격만으로 후속 튜닝의 안전성을 보장할 수 없다.** LoRA 연구는 평가한 방어들의 공격 성공률이 소량 재학습 후 재상승했다고 보고한다. 모든 방어의 보편적 실패나 실제 사고를 입증한 것은 아니다.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.12807)

- **한국 AI 인프라의 연결 전략은 구체화됐지만 상용화는 미래형이다.** 리벨리온·NVIDIA·SK텔레콤 협력은 GPU/NPU 분리 추론과 NVLink 연계를 제시했으나, R200 시스템 도입 목표는 2028년이다.
  - **출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261109100900017)

## 3 영역별 AI 브리프

상태는 원문의 일곱 필드를 각각 표시한다. yes는 해당 근거가 있다는 뜻이고, unknown은 부재가 아니라 미확인이다. availability는 논문·데이터·의견수렴의 접근 가능성을 뜻할 수도 있으며, production은 과거부터 이어진 내부 사용을 포함할 수 있다.

### Frontier Models

**내용:** Anthropic이 Fable 5.2와 접근 제한형 Mythos 5.2를 발표했다. 같은 기반 모델의 안전장치·접근 방식 차이로, 두 출시로 나누지 않는다. Fable의 광범위한 제공과 Mythos의 검증 조직 대상 접근을 구분한다.

**Evidence:** A — 공식 발표. 안전성 연구자의 동일 발표를 이 항목에 병합했다.

**출처:** [www.anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 입력/출력 100만 토큰당 $8/$40, fast mode는 두 배라는 공급자 고지다. Python→Rust 운영 서비스 전환은 이전 활동의 신규 공개이지 당일 배포가 아니다. 안전성·성능의 독립 재현은 미확인이다.

**내용:** Meta가 Muse Code와 Meta Model API에서 muse-ember-1.0 제공을 발표했다. 텍스트·이미지·음성·영상 이해, 1M 입력 문맥과 최대 512K 출력 토큰을 고지했다.

**Evidence:** A — 공식 발표.

**출처:** [research.meta.ai](https://research.meta.ai/blog/muse-ember)

  시점: 공식 문서는 2026-11-09 날짜만 확인. 번들의 보조 보도에는 시간창 안의 명시적 게시 시각이 있다.
  핵심 제한: 200K 이하 프롬프트의 입력/출력 가격은 100만 토큰당 $0.10/$0.50, 초과 시 $0.30/$1.50이다. 파트너 초기 테스트를 운영 배포로 보지 않는다. 코드·가중치 공개도 확인되지 않았다.

**내용:** Google이 유료 API 개발자·기업 대상 Gemini 4 Carbon 접근 확대와 일부 소비자 서비스 순차 제공을 발표했다. 사이버 특화 접근은 Fairwind Program을 통한다.

**Evidence:** A — 공식 발표.

**출처:** [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/)

  시점: 2026-11-10, 날짜만 확인. 06:00 KST 이전 게시 여부는 미확정.
  핵심 제한: 도입 가격은 입력/출력 100만 토큰당 $2/$10이다. 에이전트 스웜은 preview이며, Project Fortify 내부 사용과 고객의 이전 계획을 구분한다.

### AI Research

**내용:** 보상 최적화가 권한 위반 지름길을 학습시킬 수 있으며 실행 이력 기반 준수 페널티로 이를 줄일 수 있다는 사전논문이다.

**Evidence:** A — 원문 사전논문.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.12865)

  시점: 2026-11-09T18:52:20Z, 정확한 시간창 안.
  핵심 제한: 구성된 실험 환경의 결과다. 상용 에이전트의 위반 빈도나 일반적 안전성 개선으로 확장하지 않는다.

**내용:** MaxIM은 제한된 메모리에서 장기 상호작용을 요약하도록 정보이론적 보상 형성을 제안한다.

**Evidence:** A — 원문 사전논문.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.12825)

  시점: 2026-11-09T18:25:42Z, 정확한 시간창 안.
  핵심 제한: 추출 초록에 수치·모델 크기·정확한 토큰 예산이 없다. 이번 사건은 arXiv 제출이며 학회 채택의 신규 발표로 계산하지 않는다.

**내용:** KiCad 라우팅 엔진을 사용하는 PCBRouteAgent의 버전 2가 게시됐다. 멀티모달 계획과 상세 실행을 결합한다.

**Evidence:** A — 원문 사전논문 개정.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.08175)

  시점: 개정 2026-11-09T16:23:03Z, 정확한 시간창 안. ID의 11월 5일은 원래 공개일을 보존한다.
  핵심 제한: 최초 발표·코드 출시·생산 도입이 아니다. 어떤 성능 결과가 버전 2에서 새로 바뀌었는지는 미확인이다.

### Agents/Developer Tools

**내용:** GitHub가 Copilot의 Fable 5.2 순차 일반 제공을 발표했다. Business·Enterprise는 기본 비활성 정책을 관리자가 켜야 한다.

**Evidence:** A — 공식 변경 기록.

**출처:** [github.blog](https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 모델 자체 출시와 달리 Copilot 통합·정책 변경이라는 별도 사건이다. 안전 모니터링용 프롬프트·출력 보관과 자격 있는 기업의 임시 무보관 예외를 확인해야 한다.

**내용:** OpenAI가 연구 추론 작업의 중앙 권한 관리·중단 시스템을 공개했다. 작업 코드가 아니라 추론 엔진이 권한을 집행한다.

**Evidence:** A — 공식 내부 운영 공개. Safety/Evaluation/Security의 동일 사건을 병합했다.

**출처:** [openai.com](https://openai.com/index/control-room/)

  시점: 공식 뉴스 인덱스상 2026-11-09, 날짜만 확인.
  핵심 제한: 공개 개발자 제품이 아니다. 중단 요청 후 추가 모델 진행 차단까지 최대 35초라는 주장이고, 주변 프로세스 종료를 뜻하지 않는다. 비프런티어 연구 작업의 fail-closed 적용은 진행 중이다.

**내용:** GitHub가 여러 Copilot 클라이언트에서 Carbon 순차 일반 제공을 발표했다. 기본 모델 활성화 설정에서는 관리자 재정의가 없으면 새 모델이 활성화된다.

**Evidence:** A — 공식 변경 기록.

**출처:** [github.blog](https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot)

  시점: 본문·인덱스는 2026-11-10. 다른 글의 관련 게시물 라벨은 11월 9일로 불일치한다.
  핵심 제한: 본문의 날짜를 임의 보정하지 않는다. 모델 접근 확대와 별개인 Copilot 배포·관리 정책 사건이며, 실제 테넌트 활성화와 비교 성능은 미확인이다.

### Open Source/Repos

**내용:** NVIDIA와 Elith가 일본 금융 페르소나 데이터셋을 공개했다. 100만 레코드에 각 9개 필드를 제공한다.

**Evidence:** A — 공식 발표 및 데이터 저장소 확인.

**출처:** [huggingface.co](https://huggingface.co/blog/nvidia/nemotron-personas-finance-japan-ja)

  저장소: [huggingface.co](https://huggingface.co/datasets/nvidia/Nemotron-Personas-Finance-Japan)
  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: CC BY 4.0 데이터 공개이지 전체 생성 코드 공개가 아니다. 실제 고객 분포 대표성·생산 도입·한국어 적용은 미확인이다.

**내용:** NVIDIA가 8개 도메인·43개 문서 유형의 일본어 합성 문서 10만 건과 개인정보 구간 주석을 공개했다.

**Evidence:** A — 공식 발표 및 데이터 저장소 확인.

**출처:** [huggingface.co](https://huggingface.co/blog/nvidia/nemotron-pii-japan)

  저장소: [huggingface.co](https://huggingface.co/datasets/nvidia/Nemotron-PII-Japan)
  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: CC BY 4.0 데이터 접근을 확인했을 뿐 실제 개인정보 보호 효과나 규제 준수를 입증하지 않는다. 금융 페르소나 데이터와 목적·산출물이 다른 사건이다.

목표 대비 1건 부족이다. 1차 검증 2건, 표적 2차 추가 0건이다. 날짜가 오래된 릴리스, 시각대가 불명확한 릴리스, 본문으로 확인되지 않은 Qwen 후보를 채우기용으로 넣지 않았다.

### Chips/Compute/Infrastructure

**내용:** AMD가 Google Cloud TPU 8tx의 호스트 인프라에 5세대 EPYC가 쓰인다고 공개했다. SEV와 TPU 보안의 결합으로 민감 데이터를 보호하는 구성을 설명한다.

**Evidence:** A — 공식 발표.

**출처:** [newsroom.amd.com](https://newsroom.amd.com/news/amd-epyc-expands-leadership-foundation-ai/)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 일반 제공일·실사용 고객·구체적 보안 경계는 확인되지 않았다.

**내용:** AMD가 Zen 6 기반 6세대 EPYC SP7 제공과 OEM·ODM 시스템 출하를 발표했다.

**Evidence:** A — 공식 출시 자료.

**출처:** [newsroom.amd.com](https://newsroom.amd.com/press-kits/6th-gen-epyc-venice/)

  시점: 2026-11-10, 날짜만 확인. 정확한 컷오프 이전 여부 미확정.
  핵심 제한: Azure·Oracle Cloud 인스턴스는 향후 제공이다. 정성적 성능 우위 표현을 독립 벤치마크 결과로 취급하지 않는다.

**내용:** NVIDIA가 Kubernetes Engine·Recipes 공개 preview와 체크포인트 기반 추론 복원을 위한 오픈소스 Snapshot을 발표했다.

**Evidence:** A — 공식 발표 및 공개 저장소 링크에 대한 연구자 확인.

**출처:** [blogs.nvidia.com](https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/)

  시점: 뉴스룸 아카이브상 2026-11-10, 날짜만 확인.
  핵심 제한: preview·코드 공개를 운영 도입으로 보지 않는다. SK텔레콤은 통합 계획 관련 조직으로 명시됐으나 완료된 적용은 아니다.

### Enterprise/Applications

**내용:** Microsoft가 Northern Trust의 고객 온보딩 거래 데이터 매핑 에이전트 운영 사례를 공개했다. 분석가 검토·예외 처리·최종 대사가 포함된다.

**Evidence:** A — 실명 고객을 포함한 공식 사례.

**출처:** [news.microsoft.com](https://news.microsoft.com/source/features/digital-transformation/northern-trust-finance-microsoft-partner-ai/)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 준비 기간 약 2.5주→평균 3일, 첫 통과 품질 96.5%는 표본·정확한 지표 공식·독립 감사가 없는 주장이다. 과거 시작된 운영의 공개다.

**내용:** Automattic이 에이전트 제작 앱용 Spacefast를 일반 공개했다. 호스팅·도메인·SQL·버전 발행·접근 통제와 API·CLI·MCP를 제공한다고 밝혔다.

**Evidence:** A — 공식 발표.

**출처:** [automattic.com](https://automattic.com/2026/11/09/meet-spacefast/)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 내장 앱 인증은 coming soon이다. 내부 대시보드·사진 검토 도구 사용은 자사 운영 주장으로, 외부 고객 도입의 독립 검증은 아니다.

**내용:** Medium이 인라인 AI 보조·이전 글 검색·협업을 결합한 TK 노트북을 출시했다고 TechCrunch가 보도했다.

**Evidence:** B — 귀속 가능한 기술언론 보도. 연구자는 연결된 공식 공개문도 확인했다.

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/09/mediums-new-tk-app-brings-ai-assistance-directly-into-the-writing-process/)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 내부 사용은 공급자 주장이다. 네이티브 데스크톱 앱은 로드맵이며, 모바일 관련 공식 설명과 웹 중심 보도의 차이를 추가 확인해야 한다.

### Funding/M&A/Business

**내용:** OpenAI가 AWS Marketplace를 통한 ChatGPT Enterprise 구매·관리 경로를 추가했다. 적격 지출은 AWS 약정에 반영할 수 있다고 밝혔다.

**Evidence:** A — 공식 발표.

**출처:** [openai.com](https://openai.com/index/chatgpt-enterprise-aws-marketplace/)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 조달 경로 확대이지 신규 매출·구매 완료·고객 배포를 입증하지 않는다. 한국 고객 자격은 미확인이다.

**내용:** Oura가 Counsel Health를 $625 million에 인수하는 계약을 발표했다고 TechCrunch가 보도했다.

**Evidence:** B — 양사 CEO 발언을 포함한 보도. Counsel 공식 뉴스룸의 날짜도 연구자가 확인했다.

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/10/oura-to-acquire-ai-native-primary-care-startup-counsel-health-for-625m/)

  시점: 2026-11-10, 날짜만 확인.
  핵심 제한: 종결 예상은 2027년 말 이전으로 인수 완료가 아니다. production은 6월의 기존 앱 통합, revenue는 Oura가 공개한 매출을 뜻하며 이번 거래나 Counsel AI 매출이 아니다.

**내용:** Proximal Ventures가 AI 기반 제약 서비스·인프라 투자용 첫 펀드 $27.5 million을 조성했다고 TechCrunch가 보도했다.

**Evidence:** B — 창업자·투자자 인터뷰 기반 보도.

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/10/proximal-ventures-raises-debut-fund-to-back-startups-bringing-ai-to-drug-development/)

  시점: 벤처 기사 인덱스상 2026-11-10, 날짜만 확인.
  핵심 제한: 공식 웹사이트는 투자 초점·단계·수표 규모만 뒷받침하고 펀드 금액은 확인하지 않는다. 기존 6개 투자의 개별 날짜와 한국 투자 여부는 미확인이다.

### Safety/Evaluation/Security

**내용:** LoRA 백도어 방어 후 정적 공격 성공률이 낮아져도, 5개 샘플의 재학습으로 백도어가 다시 활성화될 수 있다는 연구다.

**Evidence:** A — 원문 사전논문.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.12807)

  시점: 2026-11-09T18:12:40+00:00, 정확한 시간창 안.
  핵심 제한: 평가한 가중치 편집 방어와 실험 조건에 한정된다. 독립 재현·실제 공급망 사고·모든 방어의 실패는 입증되지 않았다.

**내용:** DeepChronos가 공격 단계의 시간·인과 규칙을 신경망 탐지와 결합하는 침입 탐지 방식을 제안했다.

**Evidence:** A — 원문 사전논문.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.12760)

  시점: 2026-11-09T17:37:36+00:00, 정확한 시간창 안.
  핵심 제한: DARPA 2000·AIT-LDS V2 실험이지 실시간 운영 효과가 아니다. macro-F1 최대 11.3% 개선의 상대율/퍼센트포인트 구분은 미확인이다.

자체 원장 포함은 2건이다. 연구자가 검증한 4건 중 Control Room과 Fable/Mythos 안전장치 공개는 각각 앞선 정본에 병합했다. 따라서 검색 검증 부족이 아니라 전역 중복 제거 후 목표 대비 1건 부족이다.

### Policy/Geopolitics

**내용:** EU 집행위원회가 생성형 AI 관련 선거 위험 등을 다루는 DSA 선거 지침 개정안 의견수렴을 열었다.

**Evidence:** A — 정부 원문.

**출처:** [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-invites-views-draft-revised-election-guidelines-under-digital-services-act)

  시점: 2026-11-10, 날짜만 확인.
  핵심 제한: 제출 기한은 2026-11-23이다. 확정 지침·신규 법률 채택이 아니며, availability는 의견수렴 접근을 뜻한다.

**내용:** 영국 총리가 프랑스 대통령 주재 AI 통화에서 2027년 G20 의장국 의제로 국제 AI 표준·위험 협력을 강조했다는 공식 회의 기록이다.

**Evidence:** A — 정부 원문.

**출처:** [www.gov.uk](https://www.gov.uk/government/news/pm-call-with-president-macron-of-france-9-november-2026)

  시점: 2026-11-09, 날짜만 확인.
  핵심 제한: 외교 의제 설정이지 채택된 표준·구속력 있는 규제가 아니다. 한국의 참여 약속도 확인되지 않았다.

목표 대비 1건 부족이다. 1차 1건과 표적 2차 추가 1건만 검증됐다. 구체적 신규 AI 조치가 없는 연설, 과거 회의, AI 연관성이 불충분하거나 추출에 실패한 후보를 승격하지 않았다.

### Korea Exposure

**내용:** 리벨리온·NVIDIA·SK텔레콤이 R200 NPU의 NVLink Fusion 연결과 MGX 기반 협력을 발표했다. GPU prefill·NPU decode 분리 구성을 제시했다.

**Evidence:** B — 연합뉴스의 MOU·귀속 발언 보도.

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261109100900017)

  시점: 2026-11-09T14:41:00+09:00, 정확한 시간창 안.
  핵심 제한: R200 시스템 목표는 2028년이다. 효율·총비용 개선은 목표이며 현재 성능·상용 운영의 증거가 아니다.

**내용:** NVIDIA가 포인트투테크놀로지 투자와 업스테이지·모티프테크놀로지스·RLWRLD 투자 계획을 발표했다고 연합뉴스가 보도했다.

**Evidence:** B — 실명 기업·행사·계획을 담은 국내 보도.

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261109146400017)

  시점: 2026-11-09T17:57:00+09:00, 정확한 시간창 안.
  핵심 제한: 네 기업 투자 모두의 종결을 확인한 것이 아니다. 투자액·개별 조건·라운드 완료는 미공개 또는 미확인이다.

**내용:** 개인정보보호위원회가 스마트안경 지침 마련 계획과 촬영 고지·거부 시 중단·AI 학습용 처리의 적법성 관련 주의를 밝혔다.

**Evidence:** B — 위원장 발언을 포함한 연합뉴스 보도.

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261109102700530)

  시점: 2026-11-09T14:48:00+09:00, 정확한 시간창 안.
  핵심 제한: 최종 지침이나 새로 제정된 규칙은 확인되지 않았다. 보도된 주의사항과 확정 법적 의무의 구체적 범위를 구분해야 한다.

## 4 기술→산업 전달경로

- 저가 멀티모달 모델 → 분류·추출·하위 에이전트 라우팅 → 대량 업무 비용 재설계.
  Muse Ember의 가격은 후보 근거지만, 한국어 품질·장문 구간 요금·재시도 비용이 검증돼야 실제 비용 절감으로 이어진다.

- 코딩 모델 → Copilot 통합 → 기업 소스코드 업무.
  Fable과 Carbon의 통합은 접근 경로를 넓힌다. 다만 관리자 기본값·보관 정책·테넌트 제공 여부가 도입의 선행 조건이며, 가용성은 생산성 향상 증거가 아니다.

- 중앙 추론 권한 → 에이전트 개입 가능성 → 연구·평가 운영 통제.
  Control Room은 중단 집행을 작업 코드에서 분리한다. 캐시 지연, fail-closed 범위, 추론 중단 이후 프로세스·외부 작업의 잔여 효과가 별도 검증 대상이다.

- 합성 데이터·장기 메모리·도메인 에이전트 → 업무별 평가 체계 → 금융·전자설계 적용.
  일본어 데이터의 한국어 전이, MaxIM의 실제 메모리 예산, PCB 라우팅의 어려운 분할 성능을 검증해야 한다. Northern Trust의 사람 검수 포함 운영 사례가 현실적인 전달 형태다.

- 체크포인트 복원·CPU/가속기 보안·GPU/NPU 연결 → 인프라 탄력성과 보호 → 운영비·조달 의사결정.
  Snapshot 파트너 측정, TPU 보안 범위, R200 개발 계획은 각각 증거 단계가 다르다. 이를 하나의 완성된 AI 팩토리나 즉시 매출 증가로 묶지 않는다.

- AI 웨어러블·생성형 콘텐츠 → 개인정보·선거 위험 → 제품 설계 및 규제 대응.
  한국 스마트안경 지침 계획과 EU 의견수렴은 방향성을 제공하지만 확정된 새 규정으로 해석하지 않는다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 증거 단계 | 아직 확인할 것 |
|---|---|---|---|
| 모델 | Fable/Mythos, Muse Ember, Carbon | 공식 발표·제공 주장 | 독립 성능, 지역 접근, 실제 비용 |
| 에이전트·개발 | Copilot 통합, Control Room | 순차 제공·내부 운영 공개 | 테넌트 정책, 보관, 중단 우회 |
| 메모리·연구 | MaxIM, 준수 페널티, PCBRouteAgent 개정 | 사전논문 | 코드, 예산, 분할, 재현 |
| 데이터 | 일본 금융 페르소나·PII | 공개 데이터·라이선스 확인 | 대표성, 주석 검증, 한국어 전이 |
| 보안·평가 | LoRA 재활성화, DeepChronos | 저자 실험 | 독립 재현, 운영 분포, 기준선 공정성 |
| 컴퓨트 | TPU 호스트 보안, EPYC, Snapshot | 발표·출하 주장·preview | 지역 가용성, 보안 경계, 일치 조건 측정 |
| 애플리케이션 | Northern Trust, Spacefast, TK | 고객/자사 운영 주장·출시 | 표본, 인증, 데이터 처리, 외부 도입 |
| 유통·자본 | AWS Marketplace, Oura 계약, Proximal 펀드 | 판매 경로·계약·모집 보도 | 구매, 종결, AI 귀속 매출 |
| 정책 | EU 의견수렴, 영국 G20 의제, 한국 지침 계획 | 절차·방향 공개 | 최종 문서, 적용 범위, 시행일 |
| 한국 연결 | R200 협력, 스타트업 투자 계획, SKT 통합 계획 | MOU·투자 의도·계획 | 실리콘, 투자 종결, 실제 배포 |

## 6 반증·과장·재현성 감사

### 벤치마크 및 정량 주장

- Fable 5.2:
  과제는 FrontierCode 2.0의 유지관리자 병합 가능 코드 변경이다. 기준선은 Fable 5.1 32.4%, Opus 5.5 45.5%, GPT-6 Astra 42.8%이며 모두 Anthropic 보고다. Fable 5.2는 Xhigh 49.1%, High 45.3%다. 최고 추론 노력·안전장치 조건을 구분해야 하며, High의 비용 주장을 Xhigh 점수와 합쳐 단일 우위로 만들지 않는다. 하네스·샘플링·오염 통제·독립 재현은 미확인이다.
  안전성 평가의 샌드박스 탈출·사이버·생물학·증류 방어 주장은 정성적이다. 외부 조직이 발표·시스템 카드를 검토하거나 지지했다는 증거가 없다.

- Muse Ember:
  AutomationBench-AA strict pass@1은 37.8%, 비교값은 Luna 20.2%·Haiku 13.9%다. Terminal-Bench 4.0은 Ember 40.9%·Haiku 39.2%·Luna 16.4%다. 모두 최대 reasoning effort 조건이지만 코딩 하네스는 mini-swe-agent·Claude Code·Codex로 다르다. 모델 단독 우열로 해석할 수 없다. Artificial Analysis 결과도 Meta 인용을 확인한 수준이며 직접 검증·오염 통제·독립 재현은 미확인이다. 제안 가격 추정 비용과 정가 각주의 차이도 남는다.

- Gemini 4 Carbon:
  Google 내부 375개 agentic honesty 과제에서 Argon 70% 대비 Carbon 92%, 누락 실험 데이터 채우기 거부 98%, 방법론 오류 지적 68%라는 주장이다. 과제 구성·표본·하네스·오염 통제·독립 재현이 미확인이다. 정직성 점수를 일반 능력이나 실서비스 안전성으로 확대하지 않는다.

- Copilot의 Fable 비교:
  기준선은 Fable 5.1이며 복잡한 다단계 코딩에서 더 적은 단계·도구 호출로 더 많은 과제를 해결했다는 정성 주장이다. 수치·표본·추론 설정·하네스·오염 통제·독립 재현이 없다. Carbon Copilot 공지는 비교 벤치마크 자체가 없다.

- 보상·맥락 안전성 논문:
  과제 전용 RL과 이진 준수 페널티 학습을 비교한다. 저자는 25% 충돌 혼합·128회 업데이트 후 API 과제의 유리한 위반 97.9%, 미관측 changing-evidence 과제 32개에서 안전 완료 53.1%→89.1%를 보고했다. 두 정책 모두 실제 업무를 완료한 구성 환경이다. 상용 시스템 전이·불확실성·오염 통제·독립 재현은 미확인이다.

- MaxIM:
  과제는 제한 메모리의 과학 읽기·다중 턴 대화 요약이며 RL·지도 미세조정·프롬프트 기준선과 비교한다. 사실 근거성·자동평가·후속 효용 개선을 주장하지만 추출 초록에 수치가 없다. 모델 규모·토큰 예산·평가자 보정·데이터 분할·오염 통제·독립 재현을 확인하기 전 우월성을 확정하지 않는다.

- PCBRouteAgent:
  247개 보드의 PCBWorld-Bench 네 분할에서 clean-pass 100%·94.9%·100%·40%를 보고한다. 실제 보드 기준선 대비 개선은 13.9·36·10퍼센트포인트라는 저자 주장이다. 초록에 기준선 이름·모델 구성·계산 예산·오염 통제는 없다. D3-C 40%는 잔여 한계를 보여준다. 버전 2의 신규 변경과 독립 재현도 미확인이다.

- Control Room:
  비교 벤치마크가 아니라 내부 운영 보장 주장으로 감사한다. 중단 지시 수신부터 추가 진행 방지까지 최대 35초이며 권한 캐시가 지연 요인이다. 비교 기준선·측정 분포·시험 프로토콜·독립 검증은 없다. 오염 개념은 해당하지 않는다. 추론 차단을 프로세스 종료로 바꾸어 쓰지 않는다.

- NVIDIA Snapshot:
  과제는 추론 준비·scale-from-zero 기동이다. HGX B300 설계 파트너 환경에서 Crusoe GLM-5.3 준비가 약 8분→31초, Saturn Cloud vLLM 기동이 2~8.5분→6~34초라는 보고다. 반복 횟수·일치한 기준선·체크포인트 준비 비용·전체 모델 설정은 없다. 파트너는 독립 재현 주체로 간주하지 않는다. 데이터 오염은 해당하지 않지만 운영 조건 편향은 중요하다.

- Northern Trust:
  기존 약 2.5주 준비 업무와 에이전트 보조 운영 사례의 평균 3일을 비교한다. 96.5% 품질 지표는 원문에서 FI로 부르며 정밀도·재현율을 결합한다고 설명하지만 공식이 불명확하다. 표본·난이도 분포·모델 버전·독립 감사가 없고 사람 검수가 포함된다. 이를 무인 처리율이나 표준 F1로 바꾸지 않는다. 평가 데이터 누수 여부도 미확인이다.

- LoRA 백도어:
  기준선은 부분공간 투영·Fine-Pruning·ANP·SVD 절단·양단 투영 등이다. 정적 ASR은 표준 벤치마크 60.4%→0.0%, 별도 1,000샘플 70.3%→0.0%로 보고됐다. Qwen2.5 0.5B~7B 네 규모 및 Qwen2.5·InternLM2.5·Spark 계열, 5개 재학습 샘플 조건에서 평가한 가중치 편집 방어 모두 두 번째 epoch에 ASR 100%를 보고한다. 별도 평가셋의 비오염성은 저자 주장이고 독립 재현은 미확인이다.

- DeepChronos:
  DARPA 2000·AIT-LDS V2에서 순수 신경망 탐지기와 비교해 macro-F1 최대 11.3% 개선·엄격한 시간 제약하 인과 위반 제거·밀리초 추론을 주장한다. 11.3%의 단위, 기준선 구현, 하드웨어, 분할·오염 통제, 정확한 지연 및 독립 재현이 미확인이다.

### 비벤치마크 과장 방지

데이터 공개는 개인정보 보호 효과를, EPYC 출하는 AI 업무 성능 우위를, Spacefast·TK 출시는 생산성 향상을 자동 입증하지 않는다. R200의 비용 절감 목표와 투자 기사 속 과거 모델 순위는 새 성능 결과로 채택하지 않았다.

Oura는 인수 계약이지 종결이 아니며, 펀드 모집은 포트폴리오 성과가 아니다. 국내 투자 계획은 네 건 모두 완료된 투자라는 뜻이 아니다. EU 의견수렴·영국 외교 의제·한국 지침 계획은 각각 최종 지침·채택 표준·새 법률과 다르다.

## 7 다음 확인 일정

- **정확한 게시 시각 확보 시: 날짜만 있는 모든 자료의 시간창 적격성을 재판정한다.** 특히 11월 10일 Carbon·Copilot·EPYC·NVIDIA 도구·Oura·Proximal·EU 자료는 컷오프 이전 여부가 미확정이다. Carbon Copilot의 날짜 불일치도 해소한다.
- 다음 공개 자료 확인 시: Fable/Mythos 시스템 카드, 외부 코딩 평가, 한국어 성능, 지역별 API 접근·가격 조건을 확인한다.
- **다음 테넌트 점검 시: Copilot 모델 기본값·관리자 승인·보관 및 예외 자격을 확인한다.** 한국 도입을 추정하지 않는다.
- **Control Room 후속 공개 시: 전체 연구 작업의 fail-closed 전환 완료, 35초 한도 변경, 우회 시험 및 독립 보증 여부를 확인한다.** 번들은 후속 며칠의 전환 계획만 제공한다.
- **논문·저장소 후속 공개 시: 코드·시드·표본·오염 통제·계산 예산·독립 재현을 확인한다.** PCBRouteAgent는 버전 간 차이를 먼저 비교한다.
- 기업 후속 공시 시: Northern Trust 표본·오류 정의·비용, Spacefast 인증 출시, TK 플랫폼 설명과 보관 조건을 확인한다.
- 2026-11-23: EU DSA 선거 지침 의견수렴 마감. 이후 최종 지침을 별도 확인한다.
- 2027년 관련 문서 공개 시: 영국 G20 AI 표준 의제의 제안·참여국·일정을 확인한다.
- **2027년 말 이전 예정: Oura–Counsel의 승인·종결을 별도 확인한다.** 확정 종결일은 없다.
- 2028년 목표: R200 시스템 도입 전 실리콘·NVLink 통합·GPU/NPU 경제성·SK텔레콤 배포 이정표를 확인한다.
- 국내 공식 문서·투자 공시 공개 시: 스마트안경 지침의 적용 범위·시행일과 기업별 투자 종결·금액을 확인한다.

## 8 Coverage Audit

### 연구자 완료 및 수량 원장

10개 연구자 모두 최종 결과 객체 제출로 terminal completion을 확인했다. 완료는 검색의 완전성이나 성능 재현 완료를 의미하지 않는다.

아래 ‘검증’은 연구자가 채택한 문서·보도 사건 수이며 날짜 단위 조건부 적격 자료를 포함한다. 후보 탐색 총수는 번들에 없으므로 검증 건수와 같다고 가정하지 않는다. search_audit가 없는 범주는 두 패스 수치를 만들어 넣지 않았다.

| Category | Terminal completion | 후보 총수 | 1차 검증 | 표적 2차 추가 | 번들 검증 | 정본 포함 | 목표 3 대비 포함 부족 |
|---|---|---|---|---|---|---|---|
| Frontier Models | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |
| AI Research | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |
| Agents/Developer Tools | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |
| Open Source/Repos | 완료 | 미집계 | 2 | 0 | 2 | 2 | 1 |
| Chips/Compute/Infrastructure | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |
| Enterprise/Applications | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |
| Funding/M&A/Business | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |
| Safety/Evaluation/Security | 완료 | 미집계 | 1 | 3 | 4 | 2 | 1 |
| Policy/Geopolitics | 완료 | 미집계 | 1 | 1 | 2 | 2 | 1 |
| Korea Exposure | 완료 | 미집계 | 패스별 미제공 | 미제공 | 3 | 3 | 0 |

### 부족분과 검색 한계

- **Open Source/Repos: search_audit는 initial_count 2, targeted_count 0, verified_count 2, shortfall 1이다.** 1차에서 GitHub·Hugging Face·TechCrunch를 확인했으나 Transformers·vLLM은 이전 날짜였고, llama.cpp는 시간대가 불명확했다. 2차에서도 LeRobot·Cosmos는 11월 5일, Qwen 본문은 공개일·내용 검증에 부족했다. 커뮤니티 목록 추출 시간초과와 무관한 검색 결과가 탐색을 제한했다. 2차 노트의 ‘제외된 1차 이벤트’ 표현은 재검색 시 반복 제외를 뜻하는 문맥으로 읽되, 최종 events와 search_audit의 검증 2건을 보존했다.

- **Safety/Evaluation/Security: initial_count 1, targeted_count 3, verified_count 4, shortfall 0이다.** 1차 공식 인덱스에서는 Control Room만 채택했고, 2차 원문 추출로 두 논문과 Anthropic 안전장치 공개를 추가했다. 최종적으로 두 사건이 타 범주 정본과 중복돼 자체 포함은 2건이다. 이는 검증 검색의 부족이 아니라 전역 중복 제거 결과다. 악성 스킬 스캐너 논문은 원래 제출일이 시간창 밖이어서 미포함했다.

- **Policy/Geopolitics: initial_count 1, targeted_count 1, verified_count 2, shortfall 1이다.** 1차 EU 의견수렴에 2차 영국 공식 통화 기록을 추가했다. BIS·FTC에서 적격 AI 사건이 확인되지 않았고, 다른 EU 자료는 이전 날짜거나 AI 연관성이 부족했다. 영국 연설은 구체적 새 조치가 불명확했으며, EU–NATO 기사는 과거 회의를 재날짜화할 수 없었다. EU–인도 후보의 504 추출 실패도 남았다.

- **나머지 일곱 범주: 각각 검증 3건·포함 3건으로 수량 부족은 없다.** 다만 search_audit의 패스별 수치가 없으며, 재검색·직접 인덱스 확인을 정식 2차 완료 수치로 바꾸지 않았다. 모든 범주에서 검색의 무관한 응답이 반복됐고, 일부 Reuters 자료는 DataDome으로 차단됐다.

- **Korea Exposure의 세 사건은 정확한 KST 게시 시각이 창 안이지만 모두 연합뉴스 B등급이다.** 다른 뉴스룸을 탐색했다는 사실은 세 보도의 독립 교차 검증을 뜻하지 않는다. 다른 범주의 일반적인 ‘한국 관련 가능성’도 한국 도입 사건으로 추가 집계하지 않았다.

### 전역 중복 제거·제외 기록

- 번들 코어 항목 중 Control Room의 동일 ID 중복을 하나로 합쳤다.
- **Anthropic 안전장치 항목은 ID가 달라도 Fable/Mythos 동일 출시·같은 원문이므로 Frontier Models 정본에 병합했다.** 안전성 주장은 6절에 보존했다.
- Fable과 Mythos는 하나의 기반 모델·동시 출시로 한 사건이다.
- Copilot의 Fable·Carbon 통합은 모델 출시 자체가 아니라 별도 배포·관리 정책 변경이므로 각각 유지했다.
- **두 일본어 데이터셋은 산출물·용도가 달라 별개다.** AMD의 세대 출시 안에서 임베디드 파생 발표를 추가하지 않았다.
- NVIDIA Kubernetes 도구의 한국 통합 계획은 Korea Exposure에서 별도 사건으로 복제하지 않았다.
- PCBRouteAgent는 개정 제출 사건으로 유지했으며 기존 ID 날짜를 고치지 않았다.
- **명시적 시각이 컷오프와 같거나 이후인 국내 보도는 제외했다.** 날짜만 있는 URL·목록 등장일은 명시적 게시·제출 시각을 대체하지 못한다.
- **코어 Evidence는 A/B만 포함한다.** C등급과 시간창 밖 watchlist는 정본·포함 건수에 들어가지 않는다.

### Watchlist (미확인 후보)

- 후보: Otter expands language support and previews automatic language switching (미포함 사유: 게시 시각이 2026-11-10 16:00 KST로 컷오프 이후이며, 한국어를 포함한 언어 확대와 향후 자동 전환을 구분해야 함 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/09/otter-ai-can-now-follow-conversations-across-30-languages/))
- 후보: Anthropic reportedly intends to proceed with its IPO (미포함 사유: <br class="report-field-break" />Evidence C인 간접 보도이며 게시 시각이 2026-11-10 10:27 KST로 컷오프 이후, 원보도 독립 확인도 미완료 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/09/anthropic-reportedly-plans-to-move-forward-with-ipo-plans/))
- 후보: The Devil Wears Markdown evaluates scanners for malicious agent skills (미포함 사유: 번들상 <br class="report-field-break" />Evidence C이며 원래 제출이 2026-11-07T16:16:53+00:00로 시간창 이전, 최근 제출 목록 등장을 신규 공개로 재날짜화할 수 없음 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.10830))

- **수록 사건 수:** 27
