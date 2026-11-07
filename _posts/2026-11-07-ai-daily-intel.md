---
layout: ai-intel
title: "AI Daily Intel — 2026-11-07"
date: 2026-11-07 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-07/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-07
- **기준 시각:** 2026-11-07T06:00:00+09:00 (exclusive)
- **수집 구간:** [2026-11-06T06:00:00+09:00, 2026-11-07T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 21

## 1 오늘의 AI 한 문장

이번 번들에서 확인된 변화는 새로운 프런티어 모델보다 에이전트의 메모리·개발 워크플로·운영 통제·거래 인터페이스에 집중됐으며, 공개·사용 가능·실제 도입·매출·독립 재현은 각각 분리해서 읽어야 한다.

이 보고서는 제공된 번들만 편집한 결과다. <br class="report-field-break" />Evidence A는 공식·원문 근거, B는 출처가 명시된 보도, C는 핵심 주장이나 적격성의 확인이 부족한 후보를 뜻한다. A도 성능의 독립 검증을 의미하지 않는다. 날짜만 있는 자료는 번들에 명시된 달력일 중첩 규칙을 적용했으며, 정확한 공개 시각이 확인됐다는 뜻은 아니다.

## 2 핵심 신호 5

- **장기 에이전트의 경쟁축이 메모리 검증으로 이동한다.** Anthropic은 세션 간 메모리와 오프라인 정리 연구를 공개했다. 특정 데이터베이스 과제에서 개선을 보고했지만, 정답 피드백이 제공된 공급사 평가다. 범용 성능이나 독립 재현으로 확장할 수 없다. <br class="report-field-break" />Evidence A. [원문](https://www.anthropic.com/research/components-of-agent-memory)

- **개발 에이전트의 기업 도입 관문은 통제와 출처 추적이다.** GitHub는 코드 리뷰 설정 API·기여 표시, Slack·Teams 연동 GA, 사용량 관측을 각각 공개했다. 기능 제공과 사용량 측정은 확인되지만 생산성 개선은 입증되지 않았다. <br class="report-field-break" />Evidence A. [리뷰 관리](https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates) · [메신저 연동](https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available)

- **오픈 도구는 즉시 검토 가능한 구현을 늘렸지만 재현성과 안전성은 별도 과제다.** ToyBlocks는 로봇 시뮬레이션 코드, Transformers는 샌드박스 강화 패치, Harness Hub는 하네스별 어댑터·훈련 레시피를 공개했다. 코드 존재를 실제 설치 성공이나 안전 보장으로 읽어서는 안 된다. <br class="report-field-break" />Evidence A. [ToyBlocks](https://allenai.org/blog/toyblocks) · [Transformers](https://github.com/huggingface/transformers/releases/tag/v5.22.2) · [어댑터](https://huggingface.co/blog/harness-hub/harness-adapters)

- **AI 사용 증가와 지출 증가는 분리될 수 있다.** Ramp 관련 보도는 토큰 사용 증가 속에서 지출 증가가 둔화됐다고 전한다. 다만 이후 재가속 수치도 있어 ‘기업 AI 지출 정체’라는 일방적 결론은 부적절하다. <br class="report-field-break" />Evidence B. [보도](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/)

- **한국의 신호는 상용화 준비와 현지 기술 공개다.** 기아의 자율 모빌리티 협약, 젠틀몬스터의 AI 안경 예고, NVIDIA 서울 설명회가 확인됐다. 각각 실증 협력·예약 일정·기술 설명이며, 상용 자율주행·안경 출시·성능 독립 검증을 뜻하지 않는다. <br class="report-field-break" />Evidence B. [기아](https://www.etnews.com/20261106000152) · [안경](https://www.etnews.com/20261106000321) · [서울 설명회](https://www.etnews.com/20261106000278)

## 3 영역별 AI 브리프

상태는 원자료의 일곱 필드를 별도로 유지한다. `unknown`은 미확인이며 `no`와 다르다. 과거부터 제공된 기능이나 제품의 `availability: yes`는 이번 창에서 새로 출시됐다는 뜻이 아니다.

### Frontier Models

검증 통과 이벤트 없음.

1차·2차 모두 추가 적격 이벤트를 확인하지 못했다. 가까운 공식 발표는 날짜가 창 밖이었고, 날짜가 맞는 ToyBlocks·ASR 자료는 프런티어 모델 발표가 아니었다. 목표 대비 3건 부족하다.

### AI Research

  - **내용:** Anthropic이 지속 메모리의 구성 요소와 오프라인 메모리 교정 연구를 공개했다. 특정 CL-Bench 데이터베이스 과제에서 개선을 보고했으나 검증 대상은 연구 공개 사실이다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 연구 공개. 성능은 공급사 자체 평가.
  - **출처:** [www.anthropic.com](https://www.anthropic.com/research/components-of-agent-memory)
  - **한국 연결:** 지속형 기업 비서 설계에 참고 가능하나 한국 도입 근거는 없다.

  - **내용:** 튀빙겐 연구진이 과학 모델의 구축·제약·해석을 구분하고, 단일 최적 모델보다 가능한 모델의 분포와 불확실성을 드러내야 한다는 연구 관점을 발표했다. 새로운 자율 과학 발견의 실증은 아니다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 사이트의 기고문.
  - **출처:** [www.anthropic.com](https://www.anthropic.com/research/teaching-ai-to-build-scientific-models)
  - **한국 연결:** AI-for-science 평가 설계에 참고 가능하며 직접적인 국내 기관 연결은 확인되지 않았다.

### Agents/Developer Tools

  - **내용:** GitHub가 Copilot 코드 리뷰 설정의 REST·GraphQL 관리, 리뷰·댓글 기여 표시, 사용된 스킬·MCP 서버·사용자 지침 메타데이터를 공개했다. 기업·조직 설정 엔드포인트는 GitHub Apps와 세분화 PAT를 지원하지 않지만 저장소 설정 엔드포인트는 지원한다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 변경 공지.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates)
  - 의미: 관리 자동화와 리뷰 출처 추적이 강화됐다. 리뷰 정확도 향상은 별도 검증 대상이다.

  - **내용:** Slack·Teams의 @GitHub 연동이 GA로 발표됐다. 대화에서 버그 조사, 이슈 생성, 변경 구현, PR 개설을 지원하며 Teams에는 계획·변경·미리보기를 검토하는 Canvas가 추가됐다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 GA 공지.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available)
  - 의미: 에이전트 작업 요청이 IDE 밖 협업 채널로 확장된다. 접근 권한과 승인 경계는 확인이 필요하다.

  - **내용:** Copilot 영향 대시보드와 28일 사용 보고서에 Chat·VS Code Agents 참여 지표가 추가됐다. 참여는 기간 내 최소 이틀 사용으로 정의되며 사용자별 기능 집계는 중복될 수 있다. 기존 도입 단계·코호트 크기는 바뀌지 않는다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 지표 변경 공지.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage)
  - 의미: 관측 범위 확대이지 생산성이나 신규 도입 증가의 증명은 아니다.

### Open Source/Repos

  - **내용:** Ai2가 조작 과제·시연 자동 생성과 정책 평가를 위한 ToyBlocks를 공개했다. 저장소에 설치·생성·평가 코드와 Apache-2.0 라이선스가 확인됐지만, 하위 모듈·자산은 별도 조건이며 통합 RL 훈련은 현재 패키지에 포함되지 않는다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 발표 및 연구자가 열람한 저장소.
  - **출처:** [allenai.org](https://allenai.org/blog/toyblocks)
  - 보조 URL: [github.com](https://github.com/allenai/ToyBlocks)
  - 의미: 통제 가능한 로봇 학습 실험 도구다. 시뮬레이션 결과의 현실 전이는 확인되지 않았다.

  - **내용:** Transformers v5.22.2가 Jinja 샌드박스 강화와 분산 실행에서 NCCL에만 device_id를 설정하는 수정을 배포했다. 별도 CVE·실제 악용·완전한 취약점 해소는 확인되지 않았다.
  - 공개 시각: 2026-11-06T15:43:27Z.
  - **근거 등급:** A — 공식 릴리스 및 GitHub API 공개 시각.
  - **출처:** [github.com](https://github.com/huggingface/transformers/releases/tag/v5.22.2)
  - 의미: 사용 중인 템플릿·분산 초기화 경로의 의존성 검토 대상이다.

  - **내용:** Harness Hub가 하네스별 RL 어댑터와 확장된 공개 훈련 레시피를 발표했다. 연결된 구현 저장소는 확인됐지만 최종 훈련은 진행 중으로 설명됐다. 기존 저장소를 별도의 신규 출시로 세지 않는다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 기술 공개 및 연결 구현.
  - **출처:** [huggingface.co](https://huggingface.co/blog/harness-hub/harness-adapters)
  - 의미: 전체 모델을 각각 운영하지 않고 하네스별 정책을 조정하는 접근이다. 성능·안전성은 독립 확인이 없다.

  - **내용:** Open ASR Leaderboard가 이집트·나이지리아 억양의 영어 대화 비공개 평가 분할과 억양군별 보고를 추가했다. 평가 인프라 갱신이며 음성 데이터의 오픈소스 공개는 아니다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 공식 평가 인프라 발표.
  - **출처:** [huggingface.co](https://huggingface.co/blog/open-asr-leaderboard-liva)
  - 의미: 영어 평균 점수의 억양 편향을 더 세분해 볼 수 있다. 한국어·한국 억양 추가는 발표되지 않았다.

### Chips/Compute/Infrastructure

  - **내용:** Cloudflare 경영진은 콘텐츠 보호 제품 채택과 에이전트 인프라 수요를 설명했다. ‘웹의 약 5% 채택’은 회사 주장이고, 분기 매출 7억8,250만 달러·전년 대비 39% 증가는 전사 실적이지 AI 전용 매출이 아니다.
  - 공개 시각: 2026-11-06T04:25:00+00:00.
  - **근거 등급:** B — 실적 발표의 실명 발언을 인용한 보도.
  - **출처:** [www.theregister.com](https://www.theregister.com/networks/2026/11/06/ai-agents-are-a-bane-for-some-website-operators-says-cloudflare/5308022)
  - 의미: 트래픽 제어·엣지 실행의 상업적 수요 신호다. 서버리스의 기술적 우월성은 입증되지 않았다.

  - **내용:** The Register가 PyTorch 2.15의 NCCL 백엔드 재작성, 진단 기록, 외부 오케스트레이션을 통한 실패·지연 워커 재구성을 보도했다. 공식 블로그가 기능과 기본 적용을 뒷받침한다. 이번 포함 대상은 창 안의 기술 보도·설명이지 신규 릴리스 날짜가 아니다.
  - 공개 시각: 2026-11-06T18:36:00+00:00.
  - **근거 등급:** B — 핵심 개발자에게 귀속된 보도와 공식 기능 설명.
  - **출처:** [www.theregister.com](https://www.theregister.com/devops/2026/11/06/pytorch-215-tackles-the-one-bad-gpu-problem/5308227)
  - 보조 URL: [pytorch.org](https://pytorch.org/blog/pytorch-2-15-release-blog/)
  - 의미: GPU 장애 진단·복구 경로의 운영 신호다. 오케스트레이터 없는 자동 복구나 비용 절감은 입증되지 않았다.

  - **내용:** NVIDIA가 AI Aerial·Sionna의 연간 개발자 채택 10배, 도구 다운로드 100만 회 초과, 연구·교육기관 8,000곳 초과 사용을 공개했다. 회사 자체 집계이며 신규 상용 6G 가동이나 신규 오픈소스 출시는 아니다.
  - 공개일: 2026-11-06, 공식 뉴스룸 아카이브 기준.
  - **근거 등급:** A — 공식 생태계 지표 공개. 독립 감사 없음.
  - **출처:** [blogs.nvidia.com](https://blogs.nvidia.com/blog/telco-open-source-tools-research-6g-networks/)
  - 의미: GPU 기반 무선 연구 생태계의 채택 신호다. 한국 계약·배치는 확인되지 않았다.

### Enterprise/Applications

  - **내용:** Meta가 Muse와 함께 쓰는 주제별 지속 작업공간 Spaces를 출시했다고 보도됐다. 추적기·계획표·프로젝트 보드와 외부 앱 연결·백그라운드 갱신을 설명하지만 계정·지역별 자격과 실제 동작은 확인되지 않았다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** B — Meta와 Mark Zuckerberg의 발언을 인용한 보도.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/06/meta-introduces-spaces-a-new-way-to-collaborate-with-your-muse-agent/)
  - 의미: 채팅에서 지속형 애플리케이션 워크플로로 확장한다. 한국 제공 여부는 미확인이다.

  - **내용:** Ramp 경제학자에게 귀속된 보도는 8~9월 토큰 지출 증가 1.5%, 7월 전월 대비 증가 42%, 9월 23일~10월 23일 증가 8.9%를 제시한다. 비교 기간이 다르며, 이번 이벤트는 보도·인터뷰 공개이지 과거 소비의 발생이나 원데이터 최초 공개가 아니다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** B — 실명 경제학자 인터뷰 및 데이터 해석 보도.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/)
  - 의미: 사용량과 지출의 분리를 보여주는 제한적 표본이다. 공급사 감사 매출이나 한국 시장 동향으로 일반화할 수 없다.

  - **내용:** Amazon이 일부 미국 고객에게 Alexa 문자 쇼핑을 제공하기 시작했다고 밝혔다. 검색·장바구니·구매, 목록·가격 추적·이미지 검색 등이 보도됐다. 초대·대기명단 방식이며 실제 거래 완료와 매출은 확인되지 않았다.
  - 공개 시각: 2026-11-06T06:10:00-08:00.
  - **근거 등급:** B — Amazon의 직접 설명을 포함한 보도.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/06/after-blocking-muse-amazon-now-lets-users-text-alexa-to-help-them-shop/)
  - 의미: 거래 권한과 유통 접점이 쇼핑 에이전트 경쟁의 핵심이 된다. 한국 소비자 출시는 아니다.

### Funding/M&A/Business

  - **내용:** Crusoe가 Google의 와이오밍 데이터센터 부지 인수를 발표했다. 부지 선정·정부 승인·전력 전략 등 사전 개발 완료를 설명하지만 거래금액·종결일은 공개하지 않았다. 건설·운영은 향후 단계다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 거래 당사자 공식 공개.
  - **출처:** [www.crusoe.ai](https://www.crusoe.ai/resources/newsroom/crusoe-wyoming-data-center-campus-update)
  - 의미: 부지 확보는 가동 컴퓨팅 용량이 아니다. regulatory는 공개문에 적힌 정부 승인으로 한정하며 별도 기업결합 심사 확인은 아니다.

  - **내용:** Physicl이 Inovia Capital 주도의 1,000만 달러 시드 투자를 유치했다고 보도됐다. Studio는 3D 환경 1만 개·자산 10만 개를 설명하며 SpAItial이 초기 고객으로 명시됐다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** B — 창업자와 초기 고객의 실명 인터뷰.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/06/physicl-raises-10m-to-make-the-digital-world-real-enough-for-robots/)
  - 의미: production은 보도된 합성 데이터 고객 사용으로 한정한다. 로봇 배치나 현실 전이 성능을 뜻하지 않는다.

Ramp 지출 보도는 Enterprise/Applications의 정본으로 통합했다. 이 영역의 연구자 검증은 3건이지만 중복 제거 후 포함은 2건이다.

### Safety/Evaluation/Security

검증 통과 이벤트 없음.

1차·2차 모두 이 범주의 적격 이벤트를 추가 확인하지 못했다. 관련 논문은 창 이전이고, 저장소는 별도 공개 시점이 미확인이며, 인터뷰·METR 관련 보도는 창 이후였다. 목표 대비 3건 부족하다.

다른 영역에 배치된 Transformers 보안 강화와 ASR 평가 갱신은 관련 교차 신호로만 참조하며 여기서 다시 세지 않는다.

### Policy/Geopolitics

  - **내용:** 유럽연합 집행위원회가 TikTok For You 추천의 반복 노출 위험과 위험 평가·완화에 대해 DSA 위반 예비 판단을 발표했다. 최종 위반 결정이나 벌금 발표는 아니다.
  - 공개일: 2026-11-06, 날짜만 확인.
  - **근거 등급:** A — 규제기관 공식 발표.
  - **출처:** [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-you-feed-breach-digital-services-act-harmful-rabbit-holes)
  - 의미: 개별 게시물뿐 아니라 추천 시스템 설계와 반복 노출이 규제 대상이다. 한국 기업을 직접 지목한 조치는 아니다.

### Korea Exposure

  - **내용:** 기아가 지방정부·전남대·GIST와 PBV 기반 모빌리티 생태계 협약을 체결했다고 보도됐다. 자율 셔틀 실증·교통약자 원격운전·용도 전환 등이 계획됐다. 2029년까지 3조 원 투자 계획은 미래차 전반이지 AI 전용 예산이 아니다.
  - 공개 시각: 2026-11-06T11:06:00+09:00.
  - **근거 등급:** B — 실명 경영진 발언을 포함한 국내 보도.
  - **출처:** [www.etnews.com](https://www.etnews.com/20261106000152)
  - 의미: 국내 실증 협력의 제도적 틀이다. 상용 서비스 가동은 확인되지 않았다.

  - **내용:** 젠틀몬스터가 삼성전자·Google과 개발 중인 AI 안경의 캠페인 티저를 공개했다고 보도됐다. 예약은 11월 12일, 뉴욕 공개 프리뷰는 11월 13~23일 예정이며 사양·가격·정식 출시일은 미공개다.
  - 공개 시각: 2026-11-06T23:00:00+09:00.
  - **근거 등급:** B — 국내 보도. 캠페인은 성능 실증이 아님.
  - **출처:** [www.etnews.com](https://www.etnews.com/20261106000321)
  - 의미: 한국 기업이 참여한 상용화 일정 신호이며 현재 구매·배송 가능성을 뜻하지 않는다.

  - **내용:** NVIDIA가 서울 설명회에서 RTX Spark 구조와 로컬 에이전트 활용을 소개했다. 국내 판매 시작은 10월 16일로, 이번 이벤트는 신규 판매 개시가 아닌 현지 기술 공개다.
  - 공개 시각: 2026-11-06T16:03:00+09:00.
  - **근거 등급:** B — 실명 기술 담당자 발언을 포함한 국내 보도. 성능은 공급사 주장.
  - **출처:** [www.etnews.com](https://www.etnews.com/20261106000278)
  - 의미: 국내 로컬 AI 개발의 제품 접점이다. 실제 도입이나 비교 성능 검증은 아니다.

## 4 기술→산업 전달경로

아래는 확인된 사건을 연결한 편집적 해석이며, 인과관계나 계약 성사를 입증한 것은 아니다.

| 기술·공개 | 전달경로 | 산업적 확인 지점 | 아직 확인되지 않은 것 |
|---|---|---|---|
| 지속 메모리·오프라인 교정 | 세션 간 지식 유지 → 장기 업무 에이전트 | 오류 누적·접근 권한·교정 비용 | 독립 반복 평가, 기업 운영 성과 |
| 리뷰 API·메신저 연동·사용량 관측 | 작업 요청 → 코드 변경 → 검토·관리 | 권한 경계, 승인 절차, 지표 해석 | 결함 감소와 생산성 개선 |
| ToyBlocks·Physicl | 합성 환경·시연 → 로봇 정책 학습 | 라이선스, 환경 다양성, 현실 전이 | 실제 로봇 성능 향상 |
| Transformers 강화·NCCL 운영 설명 | 도구 보안·장애 진단 → 배포·훈련 안정성 | 회귀 테스트, 실패 주입, 롤백 | 완전한 보안 해소·비용 절감 |
| Muse 작업공간·Alexa 문자 쇼핑 | 지속 상태·메시징 → 앱 실행·거래 | 계정 권한, 백그라운드 동작, 구매 확인 | 광범위한 도입·실제 거래 매출 |
| 부지 인수·무선 연구 생태계 | 전력·입지·연구 도구 → 인프라 확장 | 공정·전력 공급·운영사 사용 | 신규 가동 용량·상용 6G 배치 |
| 한국 모빌리티·안경 | 협약·예약 → 실증·출하 | 허가, 사양, 배송, 지원 시장 | 상용 서비스·제품 성능 |

## 5 AI Stack Signal Map

| 스택 | 이번 번들의 신호 | 근거 강도와 해석 한계 |
|---|---|---|
| Frontier model | 적격 신규 이벤트 미확인 | 출시 부재가 아니라 근거 부족 |
| Research | 메모리 평가·불확실성 중심 과학 모델링 | A, 자체 평가와 연구 의제 |
| Agent/runtime | 하네스 어댑터·지속 작업공간 | A/B, 독립 재현·운영 성과 미확인 |
| Developer workflow | 리뷰 통제·Slack/Teams·참여 지표 | A, 기능 제공과 성과는 별개 |
| Data/evaluation | 로봇 합성 환경·억양별 ASR 평가 | A/B, 현실 전이·비공개 데이터 감사 제약 |
| Framework/security | Transformers 패치·PyTorch NCCL 설명 | A/B, 신규 릴리스 시점과 기술 설명을 구분 |
| Compute/network | 부지 인수·엣지 수요·무선 도구 채택 | A/B, 가동 용량·AI 전용 매출 미확인 |
| Application/commerce | Muse Spaces·Alexa 문자 쇼핑 | B, 제한적 제공과 거래 검증 부족 |
| Business | Physicl 투자·Ramp 지출 관측 | B, 공급사 매출이나 시장 전체로 일반화 불가 |
| Governance/Korea | TikTok 예비 판단·국내 실증/제품 일정 | A/B, 최종 처분·상용화 완료 아님 |

## 6 반증·과장·재현성 감사

### 벤치마크 및 평가 감사

| 대상 | 과제·기준선 | 지표·조건 | 공개·오염·독립 재현 감사 |
|---|---|---|---|
| Anthropic 메모리 | CL-Bench 1.0의 특정 데이터베이스 질의 과제. 동일 모델의 메모리 없음과 비교하며 지침·원시/교정 메모리 비교도 포함 | 평균 보상: Opus 5.5 0.655→0.838, Sonnet 5.5 0.644→0.833, Opus 5 0.564→0.828. 질문마다 새 세션, 메모리 디렉터리 유지, 답변 뒤 정답 제공, 표시 곡선 30문항 | 공급사 평가. 전체 CL-Bench 성능 아님. 학습 데이터 중복·오염 통제와 반복 불확실성 미확인. Pokémon 사례는 단일 실행·모델 세대 차이로 메모리 효과만 분리하지 못함. 독립 재현 unknown |
| Harness adapters | pi·opencode·hermes의 검증 가능한 코딩·데이터 분석. 해당 베이스 모델과 비교 | held-out pass@1·해결당 도구 호출. rank-32 all-linear LoRA, AsyncGRPOTrainer, 과제당 8 rollout, 학습률 1e-5, 온도 0.8, H200. Repo2RLEnvs 40개·SmolDataEnvs 150개 보류 | 저자 smoke test이며 최종 훈련 진행 중. 공개 궤적 기반 과제, 270개 중 259개는 교사 작성 테스트. 필터·oracle 점검이 무오염·정확한 채점을 보장하지 않음. 독립 재현 unknown |
| Open ASR/Liva | 이집트·나이지리아 억양의 자발적 영어 대화 인식. 모델별 기준선 비교 없음 | 인식 정확도 수치 없음. 데이터 길이 1.34시간·1.55시간. 구두점·대소문자·비유창성을 포함한 전사, 두 비공개 분할 | 비공개 데이터는 게임 방지 목적이나 무오염 증명은 아님. 완전한 채점 조건·외부 감사 접근 미확인. 독립 재현 unknown |
| NVIDIA 서울 설명회 | 로컬 에이전트·미세조정·렌더링·이미지/영상·게임. 기준은 구체성이 없는 범용 SoC | 2.7~4.6배라는 공급사 주장. 모델·데이터·비교 하드웨어·소프트웨어·정밀도·전력 조건 미공개 | 재현 가능한 방법·오염 통제 없음. 이론상 1 PFLOPS는 앱 벤치마크가 아님. B는 설명회 보도에 적용. 독립 재현 unknown |

### 성능으로 승격하지 않은 주장

- **ToyBlocks는 코드·프레임워크 공개만 포함했다.** 처리량·정책 성능 비교는 검증된 결과로 채택하지 않았다.
- **NVIDIA Aerial·Sionna는 채택 지표 공개만 포함했다.** 기사 속 연구 성능 수치를 이번 창의 새 실험 결과로 채택하지 않았다.
- **Cloudflare의 에이전트 대 인간 트래픽 1000:1은 전망이지 측정 벤치마크가 아니다.** ‘웹의 5%’는 분모·측정법 확인이 필요하다.
- **Copilot 참여 지표는 생산성 평가가 아니다.** 기능별 사용자 중복을 합산하거나 변경 없는 도입 코호트를 성장으로 읽으면 안 된다.
- 과학 모델링 기고문은 방법론적 의제이며 새로운 발견·벤치마크가 아니다.
- Physicl의 자산 수와 초기 고객 사용은 현실 전이 성능의 증거가 아니다.
- 젠틀몬스터 티저의 번역·소통 장면은 캠페인 연출이지 측정된 기능 시연이 아니다.

### 공개 시점·상업·규제 감사

- **PyTorch는 최초 릴리스 날짜가 미해결이다.** 정본은 날짜가 확인된 기술 보도로 한정했다. 원래 릴리스의 창 내 적격성은 Watchlist에 남겼다.
- **NVIDIA 무선 도구는 1차에서 신규 출시로 인정되지 않았지만 2차에서 채택 지표 공개로 포함됐다.** 사건 유형을 바꿔 설명했으며 새 오픈소스 출시로 소급하지 않았다.
- **Ramp는 두 연구자의 같은 사건을 한 번만 포함했다.** 과거 지출과 새 보도 시점을 구분하고 서로 다른 집계 기간의 증가율을 단순 비교하지 않는다.
- **Cloudflare 전사 매출, Ramp 고객 지출, Physicl 고객 사용은 서로 다른 상업 지표다.** 모두 AI 공급사 매출로 합칠 수 없다.
- Crusoe의 부지 인수 공개는 가동 용량이나 거래 종결일 확인이 아니다.
- TikTok 조치는 예비 판단이며 최종 위반 결정·벌금이 아니다.
- **날짜만 있는 자료는 정확한 반개방 시간창 적합성을 시각 단위로 증명하지 못한다.** 포함은 번들이 적용한 달력일 규칙에 의존한다.
- **C급 후보는 핵심 이벤트에 포함하지 않았다.** B급이어도 창 밖이면 제외했다.

## 7 다음 확인 일정

기준시점 이후의 확인 과제이며, 이미 실행됐다는 뜻이 아니다.

| 시점 | 확인 대상 | 통과 기준 |
|---|---|---|
| 다음 편집 주기 | 메모리·하네스 어댑터 평가 | 전체 프로토콜, 반복 실행, 보류 세트·오염 통제, 독립 결과 |
| 다음 편집 주기 | OpenAI wet-lab 연구 | 본문 접근 후 과제·기준선·지표·실험 조건 확인 |
| 다음 편집 주기 | Copilot API·메신저 | 인증 제한, 저장소 접근·승인 경계, 실제 생성 PR의 기여 표시 |
| 다음 편집 주기 | ToyBlocks·Transformers·PyTorch | 소규모 실행·회귀·실패 주입, 라이선스, 보안 공지, PyTorch 최초 공개 시점 |
| 다음 편집 주기 | ASR 평가 | 채점 문서·억양별 결과·외부 감사 접근 |
| 다음 편집 주기 | Muse·Alexa | 계정·지역 자격, 권한·구매 확인·취소, 완결 워크플로 |
| 다음 편집 주기 | Ramp·Cloudflare·NVIDIA 채택 지표 | 표본·분모·집계 방법, AI 관련 매출의 별도 공개 |
| 후속 공식 공개 시 | Crusoe·Physicl·기아 | 거래·전력·공정 일정, 투자 확인, 실증 일정·허가·예산 범위 |
| 후속 규제 공개 시 | TikTok DSA | 답변·완화 요구·최종 결정 유무 |
| 2026-11-12 예정 | 젠틀몬스터 예약 | 사양·가격·지원 시장·개인정보 처리·배송 조건 |
| 2026-11-13~23 예정 | 뉴욕 안경 프리뷰 | 실제 동작과 캠페인 연출 구분, 외부 체험 근거 |
| 다음 편집 주기 | 창 밖 후보 | Neowine 특허 원문·등록일, METR 자료, 보안 인터뷰의 사건 원근거. 이번 창으로 소급 포함하지 않음 |

## 8 Coverage Audit

### 연구자 완료 및 계수 기준

10개 연구자 모두 최종 결과 객체를 제출해 terminal completion을 완료했다. 이는 조사 결과 제출 완료이며, 검색·원문 접근의 성공이나 전 세계 뉴스의 완전한 포착을 뜻하지 않는다.

`search_audit.initial_count`와 `targeted_count`는 번들 문맥상 각 패스에서 확보한 적격 사건 수로 읽었다. 원시 검색 후보 총수는 제공되지 않았으므로 후보 수로 바꾸지 않았다. 후보에는 창 밖·분야 불일치·본문 미확인 항목이 섞여 있으며, 정량화 가능한 별도 후보 목록은 Watchlist다.

| Category | Terminal completion | 원시 후보 총수 | 1차 적격 | 2차 추가 | 연구자 검증 | 최종 포함 | 목표 3건 대비 |
|---|---|---|---|---|---|---|---|
| Frontier Models | 완료 | 미제공 | 0 | 0 | 0 | 0 | 3건 부족 |
| AI Research | 완료 | 미제공 | 2 | 0 | 2 | 2 | 1건 부족 |
| Agents/Developer Tools | 완료 | 미제공 | 분리 미제공 | 분리 미제공 | 3 | 3 | 충족 |
| Open Source/Repos | 완료 | 미제공 | 2 | 2 | 4 | 4 | 충족, 유효한 4건 유지 |
| Chips/Compute/Infrastructure | 완료 | 미제공 | 1 | 2 | 3 | 3 | 충족, 공개 유형 한정 |
| Enterprise/Applications | 완료 | 미제공 | 분리 미제공 | 분리 미제공 | 3 | 3 | 충족 |
| Funding/M&A/Business | 완료 | 미제공 | 분리 미제공 | 분리 미제공 | 3 | 2 | 중복 제거 후 1건 부족 |
| Safety/Evaluation/Security | 완료 | 미제공 | 0 | 0 | 0 | 0 | 3건 부족 |
| Policy/Geopolitics | 완료 | 미제공 | 1 | 0 | 1 | 1 | 2건 부족 |
| Korea Exposure | 완료 | 미제공 | 분리 미제공 | 분리 미제공 | 3 | 3 | 충족 |

Agents/Developer Tools, Enterprise/Applications, Funding/M&A/Business, Korea Exposure에는 `search_audit`나 별도 2차 결과가 없다. 따라서 2차가 0이었다거나 두 패스 모두 수행됐다고 주장하지 않는다.

### 영역별 부족·편향 설명

- **Frontier Models:** 1차는 공식 모델 발표의 창 밖 날짜와 분야 불일치로 0건, 2차도 공식 인덱스·원 arXiv 시각을 대조했지만 0건이었다. 검색은 무관한 결과를 반복했고 OpenAI 인덱스는 차단됐다. 새 모델 부재가 아니라 검증 근거 부족이다.
- **AI Research:** 1차 공식 연구 공개 2건, 2차 추가 0건. arXiv의 11월 6일 목록에 보인 후보들은 실제 제출 시각이 창 이전이었다. wet-lab 후보는 본문 차단으로 검증에 실패했다.
- **Agents/Developer Tools:** 공식 GitHub 개별 공지 3건으로 충족했다. 주간 묶음 글과 과거 발표는 중복·창 밖으로 제외했다. 한 발행자 집중과 별도 2차 계수 부재가 한계다.
- **Open Source/Repos:** 1차 2건에 2차 2건을 추가해 4건이다. coverage_notes 앞부분의 ‘2건만 확인’은 1차 서술이며 최종 합계가 아니다. Open ASR의 인덱스 날짜 혼선은 개별 원문에 제시된 11월 6일 근거를 우선했다. 설치·벤치마크 실행은 없었다.
- **Chips/Compute/Infrastructure:** 1차 1건, 2차 2건으로 최종 3건이다. PyTorch는 새 릴리스가 아닌 날짜가 확인된 기술 보도, NVIDIA는 새 도구가 아닌 채택 지표 공개로 한정한다. 이 구분 없이 신규 출시 3건으로 표현하면 과장이다.
- **Enterprise/Applications:** 검증 3건으로 충족하지만 모두 TechCrunch에 의존한다. 다른 공식·한국 매체 경로도 조사했으나 추가 적격 근거가 없었고, 일부 자료는 발행일이나 사건 시점이 창 밖이었다.
- **Funding/M&A/Business:** 연구자 검증은 3건이나 Ramp가 기업 응용 영역과 동일해 정본을 한 곳에 배치했다. 최종 2건으로 부족분을 인정한다. OpenAI 자금조달은 익명 취재와 창 밖 업데이트 혼재로 승격하지 않았다.
- **Safety/Evaluation/Security:** 1차·2차 모두 0건이다. 원문 제출 시각이 이른 논문, 공개 시점 미확인 저장소, 마감 이후 보도를 제외했다. 1차 대용량 추출 중 미열람 내용도 근거로 쓰지 않았다.
- **Policy/Geopolitics:** 1차 TikTok 예비 판단 1건, 2차 추가 0건이다. EC·BIS·FTC·영국 정부 경로에서 창 밖 또는 AI 관련성이 확인되지 않은 항목을 제외했다. Reuters 차단과 한국 정부 페이지 제한도 있었다.
- **Korea Exposure:** 국내 보도 3건으로 충족하지만 전자신문 한 매체에 집중한다. Neowine은 URL 날짜가 아니라 표시된 발행 시각을 적용해 제외했다. 광범위한 한국 산업 전체의 대표 표본은 아니다.

공통적으로 검색 결과가 질의·도메인·날짜와 무관하게 반환되는 문제가 반복됐고, 연구자들은 직접 원문 추출로 보완했다. 따라서 0건 영역을 ‘뉴스 없음’으로 단정하거나 포함 사건을 전 세계 유일한 사건으로 표현할 수 없다.

### 중복·제외 처리

- Ramp는 같은 ID·같은 기사·같은 사실이므로 Enterprise/Applications 한 곳에 정본을 유지했다.
- ToyBlocks의 Ai2·Hugging Face 보도는 하나의 사건이다.
- Transformers 보안 강화, ASR 평가 갱신, 한국 NVIDIA 설명회는 다른 영역과 관련되더라도 정본을 재등록하지 않았다.
- **PyTorch Watchlist는 정본과 동일한 보도를 사용하지만 미확인 대상이 ‘최초 릴리스 시점’이다.** 추가 사건으로 세지 않는다.
- 기존 저장소의 존재, 후속 기사, 새 목록 날짜, 자산 파일 갱신 시각만으로 원 사건을 다시 날짜 매기지 않았다.
- 서로 다른 ID를 가진 포함 사건 중 추가로 병합할 동일 사건은 확인되지 않았다.
- 아래 후보는 모두 미포함이며 정본 ID를 부여하지 않는다.

### Watchlist (미확인 후보)

- 후보: OpenAI announces GPT-6 Cyber (미포함 사유: 공식 원문 날짜가 11월 5일로 창 밖이며 능력·운영 주장은 독립 확인되지 않음, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [openai.com](https://openai.com/index/introducing-gpt-6-cyber/))
- 후보: Google announces Gemini Omni 1.2 Flash with longer video generation and lower pricing (미포함 사유: 원문 날짜가 11월 5일로 달력일 규칙에 부적격, 능력 주장은 독립 미확인, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/))
- 후보: NVIDIA announces additional Cosmos 3 open-weight world-simulation checkpoints (미포함 사유: 원문이 11월 5일 발행이며 연결 모델을 직접 실행하지 않음, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation))
- 후보: Muir paper proposes sensitivity-allocated gating for linear attention (미포함 사유: 원 제출 시각이 11월 5일 17:53:49 UTC로 창 시작 이전이며 비교 성능은 저자 주장, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.08376))
- 후보: OpenAI lists a publication on evaluating agents in everyday wet-lab science (미포함 사유: 11월 6일 공식 목록은 확인됐지만 본문 차단으로 평가 설계·결과·중요도 확인 불가, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [openai.com](https://openai.com/news/research/))
- 후보: Underdog Woof receives fresh demo coverage, but its official model page predates the window (미포함 사유: 공식 페이지는 10월 26일, 데모는 무날짜, 후속 보도가 인용한 발표는 11월 5일로 새 창 내 출시를 입증하지 못함, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [underdog.ai](https://underdog.ai/woof))
- 후보: PyTorch 2.15 NCCL rewrite receives dated coverage, but original release timing remains unresolved (미포함 사유: 기술 보도는 정본에 포함했으나 원 릴리스의 최초 공개 시점은 미확인으로 신규 출시 사건은 미포함, <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/devops/2026/11/06/pytorch-215-tackles-the-one-bad-gpu-problem/5308227))
- 후보: ORNL, IBM and AMD quantum-error-correction platform predates the eligible calendar dates (미포함 사유: 공식 최초 공개가 11월 5일이며 후속 기사가 원 사건 날짜를 바꾸지 않음, <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [newsroom.amd.com](https://newsroom.amd.com/news/amd-builds-classical-foundation-quantum-future/))
- 후보: Precision-Preserving Subtensor Inference paper studies memory-bounded audiovisual generation (미포함 사유: 원 제출이 11월 5일 13:44:36 UTC로 창 이전이고 메모리·속도·수치 충실도는 저자 실험, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.08023))
- 후보: Bloomberg reports an $11 billion initial funding close for OpenAI (미포함 사유: 익명 취재이며 창 내 최초 기사와 창 밖 업데이트의 주장을 분리할 수 없음, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [www.bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-06/openai-completes-11-billion-portion-of-funding-at-1-25-trillion-value))
- 후보: Amazon Science publishes task-tampering prompt-injection benchmark code and data (미포함 사유: 저장소는 확인됐으나 별도 공개 시점이 미확인이고 연결 논문은 창 이전, <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [github.com](https://github.com/amazon-science/task-tampering-prompt-injection))
- 후보: The Verge examines METR's Anthropic acceleration assessment and disclosure restrictions (미포함 사유: 보도 시각이 11월 7일 21:30 KST로 창 이후이며 다루는 평가는 11월 5일 공개로 설명됨, <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1029126/anthropic-metr-report-accelerating-ai-development))
- 후보: Alex Stamos discusses AI-enabled intrusion automation and cascading breaches (미포함 사유: 인터뷰가 11월 8일 00:00 KST로 창 이후이며 한국 은행 관련 언급도 독립 사건 확인이 아님, <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/podcast/1029038/ai-cybersecurity-hackers-data-breach-dark-age-alex-stamos))
- 후보: Neowine HBM TSV-bypass patent reported after the cutoff (미포함 사유: 표시 발행 시각이 11월 7일 08:29 KST로 마감 이후이며 특허 등록일·수율 개선은 별도 확인 필요, <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261106000364))

- **수록 사건 수:** 21

집계 대상은 Section 3의 고유 정본 항목뿐이다. 다른 절의 해설·교차 참조와 Watchlist는 추가 집계하지 않았다.
