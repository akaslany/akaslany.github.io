---
layout: ai-intel
title: "AI Daily Intel — 2026-10-03"
date: 2026-10-03 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-10-03/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-10-03
- **기준 시각:** 2026-10-03T06:00:00+09:00
- **수집 구간:** [2026-10-02T06:00:00+09:00, 2026-10-03T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 17

## 1 오늘의 AI 한 문장

오늘의 검증된 신호는 새 범용 모델의 성능 도약보다 **에이전트의 실행·검증·권한 관리, 특화 모델과 추론 인프라, 전력·인력·정책 조정이라는 실제 배포 조건**에 집중됐다.

이 보고서는 제공된 번들만 편집한 결과다. <br class="report-field-break" />Evidence A는 원문·공식 아티팩트에 의한 해당 공개 사실의 확인, B는 귀속 가능한 보도·분석, C는 미확인 주장 또는 해당 포함 명제의 근거 부족을 뜻한다. A등급 공개라도 성능, 독립 재현, 매출까지 검증됐다는 뜻은 아니다.

정확한 시각이 있는 자료에는 반개방 구간을 적용했다. 시각 없이 10월 2일만 표시된 자료는 연구자들이 적용한 날짜 중첩 기준을 유지했지만, 정확한 24시간 구간 안의 공개 시각까지 확인된 것으로 해석하지 않는다.

## 2 핵심 신호 5

1. **에이전트 개선의 중심이 실행 가능한 평가와 업무 특화로 이동했다.** ServiceNow AutoSynthData는 실패 기반 합성 과제를, Ai2 AstaBrief는 인용형 과학 보고서 작성 특화를 공개했다. 전자는 공개 코드·운영 도입이 미확인이고, 후자는 공개 가중치와 운영 사용이 확인됐지만 성능 비교 대부분은 2025년 실험이다.  

**출처:** [AutoSynthData](https://huggingface.co/blog/ServiceNow-AI/autosynthdata), [AstaBrief](https://huggingface.co/blog/allenai/astabrief)


2. **개발 도구는 API 자동화와 모델 교체 관리가 동시에 중요해졌다.** GitHub는 Copilot 리뷰 요청 API의 일반 제공을 공개했고 일부 모델을 폐지했다. OpenAI의 GPT-6 가이드는 새 모델 출시가 아니라 장기 실행·캐싱·위임·검증을 위한 운영 문서다.  

**출처:** [리뷰 API](https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level), [모델 폐지](https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated), [OpenAI 가이드](https://openai.com/index/practical-guide-building-gpt-6/)


3. **로컬 추론의 선택지가 늘었지만 속도와 신뢰성은 별도 검증 대상이다.** llama.cpp는 확률 기반 의사결정 인터페이스를, SGLang은 새 추론 서버 릴리스를 공개했다. NVIDIA의 64GB DGX Spark는 발표 단계이며 제품 공급은 미래 일정이다.  

**출처:** [llama.cpp](https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp), [SGLang](https://github.com/sgl-project/sglang/releases/tag/v0.5.21), [DGX Spark](https://blogs.nvidia.com/blog/local-ai-dgx-spark-64gb-sync/)


4. **사용 가능한 AI 용량은 칩 구매만으로 결정되지 않는다.** Oracle 위스콘신 캠퍼스의 전력 승인 위험은 연구회사의 전망이지 확정 지연이 아니다. Amazon의 지역사회 투자와 Anthropic의 엔지니어 교육은 각각 지역 수용성과 구현 인력이라는 병목을 겨냥한 약정이다.  

**출처:** [Oracle 전력 위험](https://www.theregister.com/on-prem/2026/10/02/power-approval-set-to-delay-oracles-wisconsin-ai-datacenter/5300832), [Amazon](https://www.aboutamazon.com/news/company-news/amazon-data-centers-built-together), [Anthropic](https://www.anthropic.com/news/claude-frontier-academy)


5. **국내 직접 노출은 정부 조정과 메모리 소프트웨어 개발에서 확인됐다.** 중앙정부 AI 협의 참여기관 확대는 법률 시행이나 공공 서비스 출시가 아니다. SK hynix·MemVerge의 장기 기억 에이전트도 개발 공개이며 상용 제품·매출은 확인되지 않았다.  

**출처:** [정부 협의](https://www.yna.co.kr/view/AKR20261002124200017), [SK hynix](https://news.skhynix.com/en/skhynix-ventures-story/)


## 3 영역별 AI 브리프

각 이벤트는 아래 한 영역에만 정본으로 배치했다. 다른 영역과의 관련성은 교차 신호로 설명하며 중복 집계하지 않는다. 상태의 yes/no/unknown은 번들의 범위를 유지하며, 상충하거나 범위가 다른 상태는 보수적으로 정리했다.

### Frontier Models

  - 사건: OpenAI가 GPT-6 제품군의 모델 선택·에이전트 운영 가이드를 공개했다.
  - **근거 등급:** A — 공식 문서 공개 확인. 새 모델 출시나 문서에 등장하는 모든 기능의 신규 제공을 입증하지 않는다.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [openai.com](https://openai.com/index/practical-guide-building-gpt-6/)
  - 의미: 추론 노력, 캐싱, 압축, 조향, 비동기 도구와 위임의 운영 구분을 제공한다. Responses API 멀티에이전트 워크플로는 beta로 설명된다.
  - **한국 연결:** 국내 API·Codex 사용팀에 간접 관련. 한국별 제공·가격·성능은 미확인.

### AI Research

  - 사건: ServiceNow가 실패 기반 합성 과제 생성·검증·SFT 파이프라인 AutoSynthData를 공개했다.
  - **근거 등급:** A — 공식 연구 공개 확인. 실험 성능은 개발자 보고이며 독립 재현은 미확인.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/ServiceNow-AI/autosynthdata)
  - 의미: 목표 모델의 실패와 강한 교사의 성공을 실행 가능한 새 훈련 과제로 전환한다. 기존 EnterpriseOps Gym 데이터셋 링크는 AutoSynthData의 신규 공개 아티팩트 증거가 아니다.
  - **한국 연결:** 국내 ITSM·업무 에이전트 연구에 간접 관련. 한국어 평가·고객은 미확인.

  - 사건: Ai2가 인용 기반 과학 보고서 작성용 AstaBrief 8B 가중치와 훈련 데이터를 공개했다.
  - **근거 등급:** A — 공식 발표와 모델 카드에 의한 아티팩트·라이선스·운영 사용 확인. 성능 우위는 독립 검증되지 않았다.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/allenai/astabrief)
  - 보조 <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/allenai/AstaBrief_8B)
  - 의미: Apache-2.0 모델과 로컬 PDF 예시를 제공한다. 단일 패스 보고서 생성으로 파이프라인을 단순화하지만, 현재 frontier 모델 대비 우위를 입증하지 않는다.
  - **한국 연결:** 미공개 연구의 로컬 문헌 종합에 관련. 비영어 훈련 질의가 필터링됐으므로 한국어 성능은 별도 평가가 필요하다.

  - 사건: Google이 TEE 기반 연합학습과 외부 검증 가능한 개인정보 통제 구조를 공개했다.
  - **근거 등급:** A — 공식 구조 설명·코드·기존 운영 사용 공개 확인. 완전한 소프트웨어 정확성 증명은 달성 사실이 아니다.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [research.google](https://research.google/blog/toward-provably-private-learning-from-federated-data/)
  - 의미: 암호화된 기기 예제를 서버 TEE에서 처리하며 접근 정책·원격 증명·재현 가능한 빌드로 감사를 지원하려 한다. 하드웨어와 구현 가정이 중요하다.
  - **한국 연결:** 국내 모바일·프라이버시 보존 학습 연구에 간접 관련. 한국어 도입은 미확인.

### Agents/Developer Tools

  - 사건: GitHub가 REST·GraphQL을 통한 Copilot 리뷰 요청의 일반 제공을 공개했다.
  - **근거 등급:** A — 공식 변경 기록. 리뷰 품질이나 고객 운영 도입 증거는 아니다.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level)
  - 의미: 내부 도구와 자동화에서 리뷰를 요청하고 요청별 effort를 지정할 수 있다. Balanced 기본값의 9월 28일 적용은 이번 신규 사건에서 제외한다.
  - **한국 연결:** 국내 GitHub 사용팀의 PR 자동화에 관련. 권한·과금·실제 품질은 확인 필요.

  - 사건: GitHub가 Copilot 경험 전반에서 네 모델을 폐지했다.
  - **근거 등급:** A — 공식 변경 기록. 대체 모델 추천은 성능 비교 검증이 아니다.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated)
  - 의미: Gemini 3.5 Flash, Gemini 3.6 Flash, Kimi K2.7 Code, Claude Opus 4.7이 대상이다. 권장 대안은 Gemini 3.8 Flash, Kimi K3, Claude Opus 5.5다.
  - **한국 연결:** 국내 조직은 대체 모델 허용 정책과 코드·에이전트 회귀 테스트를 점검해야 한다.

  - 사건: Anthropic이 Claude Frontier Academy와 1억 달러 투자 약정을 발표했다.
  - **근거 등급:** A — 공식 발표와 뉴스룸 날짜 확인. 실제 지출·수료·배포 성과는 미확인.
  - 공개일: 2026-10-02, 공식 뉴스룸 기준; 본문 추출에는 날짜 없음.
  - **출처:** [www.anthropic.com](https://www.anthropic.com/news/claude-frontier-academy)
  - 의미: 샌프란시스코·뉴욕·런던에서 초기 코호트가 운영 중이며, 2027년 말까지 10,000명 교육을 목표로 한다. 모의 배포·보안 검토·12주 레지던시를 포함한다.
  - **한국 연결:** 국내 기업 통합·컨설팅 생태계에 간접 관련. 한국 코호트·배정액은 미공개.

### Open Source/Repos

  - 사건: llama.cpp가 의사결정 모델용 `/v1/systemone` 인터페이스를 공개했다.
  - **근거 등급:** A — 공식 유지관리자 발표와 병합 구현 확인. 확률의 보정·안전성은 미확인.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp)
  - 보조 <br class="report-field-break" />출처: [github.com](https://github.com/ggml-org/llama.cpp/pull/29818)
  - 의미: choice·score·yes/no 질의에 생성 문장 대신 선택지 확률을 반환한다. 모델 라이선스는 개별 확인해야 하며 OpenJev는 CC BY-NC 4.0이다.
  - **한국 연결:** 로컬 라우팅·검증 실험에 관련. 한국어 정확도·상업 사용 적합성은 미확인.

  - 사건: SGLang이 v0.5.21을 공개했다.
  - **근거 등급:** A — 저장소 릴리스와 API 공개 시각 확인. 설치 성공·운영 배포·성능 재현은 미확인.
  - 공개시각: 2026-10-02T01:09:04Z.
  - **출처:** [github.com](https://github.com/sgl-project/sglang/releases/tag/v0.5.21)
  - 의미: 현재 릴리스 노트는 재시작 없는 prefill/decode 역할 전환, 기본 활성화된 Rust prefix cache와 모델 지원 확장을 설명한다. 노트가 공개 이후 수정돼 최초 발표 내용과 구분이 필요하다.
  - **한국 연결:** 국내 자체 모델 서빙팀에 관련. 하드웨어별 업그레이드·성능 검증 필요.

### Chips/Compute/Infrastructure

  - 사건: NVIDIA가 64GB DGX Spark 파트너 시스템을 발표했다.
  - **근거 등급:** A — 공식 발표 확인. 제품 공급과 성능은 별도 검증 대상.
  - 공개일: 2026-10-02, NVIDIA 뉴스룸 기준.
  - **출처:** [blogs.nvidia.com](https://blogs.nvidia.com/blog/local-ai-dgx-spark-64gb-sync/)
  - 의미: GB10 기반 64GB 구성의 시작 가격은 4,999달러다. 두 시스템 연결과 월말 예정 Model Launcher는 실제 제공 여부를 별도 확인해야 한다.
  - **한국 연결:** 국내 온프레미스 워크스테이션 구매에 관련. 한국 가격·재고·메모리 공급사 관계는 미확인.

  - 사건: Oracle 입주 예정 위스콘신 AI 캠퍼스의 전력 승인·납기 위험이 보도됐다.
  - **근거 등급:** B — The Register가 귀속한 Aterio 전망. Oracle 확정 지연이나 신규 규제 거부가 아니다.
  - 공개시각: 2026-10-02T14:50:00+00:00.
  - **출처:** [www.theregister.com](https://www.theregister.com/on-prem/2026/10/02/power-approval-set-to-delay-oracles-wisconsin-ai-datacenter/5300832)
  - 의미: Vantage 개발·Oracle 입주 프로젝트에서 ATC 연결 승인이 병목으로 지목됐다. 부분 전력 2027년 12월·전체 전력 2028년 10월은 Aterio의 기본 시나리오다.
  - **한국 연결:** 국내 데이터센터 전력·시운전 위험의 비교 사례. 직접 계약·재무 노출은 미확인.

  - 사건: Amazon이 미국 데이터센터 지역사회를 위한 Built Together 투자 프레임워크를 발표했다.
  - **근거 등급:** A — 공식 발표와 날짜 표시 뉴스 인덱스, 별도 보도에 의한 확인. 지출 완료나 가동 용량 증거는 아니다.
  - 공개일: 2026-10-02; 보도 공개시각은 2026-10-02T20:30:00+00:00.
  - **출처:** [www.aboutamazon.com](https://www.aboutamazon.com/news/company-news/amazon-data-centers-built-together)
  - 의미: 5년간 교육·인력·에너지 비용·지역 우선순위에 추가 투자를 약정했다. 현재 원문은 10억 달러 초과를 설명하지만 보도의 10월 3일 금액 표현 정정은 창 안의 별도 사건이 아니다.
  - **한국 연결:** 국내 데이터센터 입지·지역 편익 설계에 간접 관련. 한국 적용은 미공개.

### Enterprise/Applications

  - 사건: Apple이 macOS Full Disk Access 부여에 더 명시적인 사용자 동의를 요구하는 추가 통제를 예고했다.
  - **근거 등급:** A — 날짜가 표시된 공식 개발자 공지. 실제 OS 업데이트 제공은 미확인.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [developer.apple.com](https://developer.apple.com/news/?id=p6zjojqw)
  - 의미: 자율 에이전트가 파일·메일·메시지·브라우징 기록에 접근하는 위험을 명시했다. 새로운 일괄 권한 금지로 해석하지 않는다.
  - **한국 연결:** 국내 Mac 기반 데스크톱 에이전트의 온보딩·기업 관리 정책에 관련.

### Funding/M&A/Business

  - 사건: CNBC가 Draup의 금융권 AI 채용공고 분석을 공개했다.
  - **근거 등급:** B — 이름이 확인된 분석회사·CEO에 귀속한 통계. 완전한 표본·중복 제거 방법은 미공개.
  - 공개일: 2026-10-02, CNBC 기술 인덱스 기준; 시각 미확인.
  - **출처:** [www.cnbc.com](https://www.cnbc.com/2026/10/02/ai-redefining-wall-street-jobs.html)
  - 의미: AI 관련 금융권 공고 139,819건, 2025년 대비 49% 증가, agent orchestration 언급 1,721% 증가를 보고했다. 공고는 실제 채용·운영 에이전트·생산성의 증거가 아니다.
  - **한국 연결:** 국내 금융사 인력 수요의 비교 자료일 뿐 한국 채용 통계가 아니다.

### Safety/Evaluation/Security

  - 사건: OpenAI가 안전 연구자 두 명과 프로그램 관리자 한 명의 해고를 보도 매체에 확인했다.
  - **근거 등급:** B — The Register에 대한 회사의 직접 확인과 입장. 위반 사실·보복 여부는 독립 입증되지 않음.
  - 공개시각: 2026-10-02T14:05:00+00:00.
  - **출처:** [www.theregister.com](https://www.theregister.com/ai-and-ml/2026/10/02/openai-shows-three-staff-the-door-over-alleged-information-misuse/5300820)
  - 의미: 회사는 민감 정보 취급 정책 위반을 이유로 들고 안전 우려 제기에 대한 보복을 부인했다. 실제 해고일·외부 평가기관·추가 위반 내용은 미공개.
  - **한국 연결:** 외부 평가 정보 공유와 내부 안전 문제 제기 절차의 간접 비교 사례.

### Policy/Geopolitics

  - 사건: 한국 제5차 CAIO 협의회가 참여 범위를 28개 장관급 기관에서 42개 중앙행정기관으로 확대하고 AI 입법 틀을 논의했다.
  - **근거 등급:** B — 연합뉴스의 귀속 가능한 보도와 ZDNet Korea·전자신문의 교차 확인. 원 정부 회의자료는 번들에서 확보되지 않아 A로 승격하지 않음.
  - 공개시각: 2026-10-02T16:00:00+09:00.
  - **출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261002124200017)
  - 보조 <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261002175324)
  - 의미: AI 기본법 중심의 틀, 국방·안보 공백, 사업 예측 가능성, 유해 효과 대응을 논의했다. ‘모두의 AI’의 12월 정식 출시 준비와 데이터·API·개인정보 기준도 같은 회의 사건에 포함한다.
  - **한국 연결:** 국내 공공 AI 조달·데이터 접근·개인정보 관리에 직접 관련.

### Korea Exposure

  - 사건: SK hynix가 MemVerge와 AI 장기 기억 에이전트·메모리 관리 소프트웨어를 개발 중이라고 공개했다.
  - **근거 등급:** A — 공식 뉴스룸의 개발 공개. 개발 시작일·실효성·상용화는 미확인.
  - 공개일: 2026-10-02, 시각 미확인.
  - **출처:** [news.skhynix.com](https://news.skhynix.com/en/skhynix-ventures-story/)
  - 의미: 과거 대화·과제 맥락을 유지·검색하는 소프트웨어로 노출을 확장한다. 같은 기사에 등장하는 9월 Ventures 출범은 이번 사건이 아니다.
  - **한국 연결:** 한국 기업의 직접 개발 참여. 제품 매출·운영 이익은 미확인.

## 4 기술→산업 전달경로

| 기술·공개 | 전달경로 | 산업상 확인할 결과 | 아직 넘지 못한 검증 단계 |
|---|---|---|---|
| AutoSynthData | 실패 분석 → 검증된 합성 과제 → 업무별 SFT | ITSM·업무 에이전트 성공률 | 공개 구현, 손대지 않은 평가셋, 실제 운영 전이 |
| AstaBrief | 공개 특화 모델 → 단일 패스 문헌 종합 → 로컬 연구 지원 | 인용 정확도·보고서 시간·기밀성 | 최신 비교군, 한국어, 원문 주장 범위 보존 |
| llama.cpp·SGLang | 선택지 확률·캐시·서빙 역할 전환 → 로컬 실행 최적화 | 라우팅 비용·지연·GPU 활용 | 확률 보정, 일치 조건 벤치마크, 업그레이드 안정성 |
| Google TEE 학습·Apple 권한 통제 | 데이터 처리와 접근 경계 변경 → 감사·동의 설계 | 개인정보 보호·기업 도입 신뢰 | 외부 보안 감사, 구현 일정, 기업 관리 영향 |
| DGX Spark·Oracle·Amazon | 장비 → 전력·시운전 → 지역 수용성 | 실제 이용 가능한 용량과 공급 일정 | 재고, 승인 원문, 투자 집행, 운영 개시 |
| Academy·Draup | 구현 인력 교육·수요 → 업무 통합 역량 | 실제 배포·수료·채용·생산성 | 약정과 집행, 공고와 채용의 구분 |
| 한국 CAIO·SK hynix | 정책 정렬·지속 기억 개발 → 공공·기업 서비스 | 데이터 접근 기준·내부 평가 | 법안·결의문, 서비스 출시, 개발 성능 |

이는 전달경로에 대한 편집 분석이며, 결과가 이미 실현됐다는 주장이나 투자 추천이 아니다.

## 5 AI Stack Signal Map

| Stack 계층 | 창 안에서 확인된 신호 | 판단 |
|---|---|---|
| Frontier model | OpenAI 배포 가이드 | 문서 공개이지 신규 모델·성능 도약 아님 |
| Post-training·특화 | AutoSynthData, AstaBrief | 과제별 개선 근거; 일반화·최신 우위는 미확인 |
| Agent orchestration | Copilot 리뷰 API, OpenAI 운영 지침 | 인터페이스·운영 규칙 확장 |
| Decision·local serving | llama.cpp, SGLang | 코드 제공 확인; 보정·성능은 별도 |
| Hardware | 64GB DGX Spark | 발표 확인, 공급 예정 |
| Data·privacy | Google TEE 학습, Apple 권한 공지 | 구조 공개·미래 통제; 무조건적 안전 보장 아님 |
| Capacity·economics | Oracle 전력 위험, Amazon 투자 약정 | 승인·지역 수용성이 운영 용량에 선행 |
| Talent·business | Academy, Draup 분석 | 구현 인력 중심 신호; 지출·실제 채용은 미확인 |
| Governance | OpenAI 해고 확인, 한국 CAIO 협의 | 귀속 가능한 공개; 위반 판단·법률 시행과 구분 |
| Korea memory software | SK hynix·MemVerge | 개발 공개, 상용 성과 미확인 |

## 6 반증·과장·재현성 감사

### 포함된 성능·시스템 주장

| 대상 | Task·Baseline | Metric | Conditions | 공개·오염·해석 한계 | Independent replication |
|---|---|---|---|---|---|
| AutoSynthData | EnterpriseOps Gym Hybrid·ITSM 과제; SFT 전 Gemma-4-26B-A4B-it. 교사는 Qwen3.8-27B·DeepSeek-V4.1-Flash | Hybrid mean Pass@1 +7.2%p, verifier 성공 63.01%→68.55%; ITSM Pass@1 18.77%→27.18% | Hybrid 2,000개·epoch 5 선택, ITSM 1,994개. 목표 모델 ≤1/3 성공·교사 ≥2/3 성공 과제 선별, 양·음성 verifier 검사·수리 | 평가 실패가 curriculum에 반영됨. 원 평가 입력 미전달 주장만으로 오염 통제가 입증되지 않음. 별도 untouched 선택 holdout 미확인. verifier 성공과 Pass@1은 다른 지표 | unknown |
| AstaBrief | 인용형 과학 보고서; Qwen3-8B, SFT checkpoint, Asta ScholarQA, DR-Tulu-8B | CS2 평균 87.0 대 77.3·86.2; citation precision 90.5·recall 78.2; Fast 51.1초 대 Thinking 178.5초 | 블로그 200문항, 모델 카드 test 100문항; DeepScholarBench 63질의; 인간 평가 3명·14문항. SFT·offline DPO와 서로 다른 전체 파이프라인 | 대부분 2025년 실험, 최신 frontier 비교 미실시. LLM judge 사용, 오염 감사·시간 측정 하드웨어 미확인. 문항 범위 차이를 설명 없이 같은 표본으로 취급하지 않음 | unknown |
| Google TEE 연합학습 | 영어 다음 단어 예측; 기존 Google 연합학습 시스템 | privacy–utility 곡선·DP 보장·noise multiplier. 속도 개선 수치 없음 | 두 시스템 모두 5,000 rounds, cohort 6,500 devices | TEE·side-channel 보호 가정, 일부 독점 로직 동적 적재. 완전한 정확성 증명은 미래 가능성. 지식 벤치마크 오염 문제와는 구분 | unknown |
| llama.cpp | typed 선택지 평가; 일치 조건의 생성 모델 baseline 없음 | 중앙 지연 Julia-1 3ms, Laya 5ms, Kev-4B 12ms, lev 36ms, OpenJev 43ms | NVIDIA RTX PRO 6000 한 대, 질문 하나 | 입력 길이·양자화·반복·warm-up·측정 경계 미공개. 모델 간 조건·라이선스 차이. 확률 출력은 보정·안전성 증거가 아님; 오염 감사 미공개 | unknown |
| SGLang | long-prompt TTFT·분리형 prefill throughput; 명시적 버전 baseline 없음 | DeepSeek-V4.1 첫 토큰 22% 개선, Kimi K3 prefill 20.6% 개선 주장 | 긴 입력·prefill/decode 분리 조건. 전체 하드웨어·동시성·절차 미공개 | 유지관리자 주장. 릴리스 노트 사후 수정으로 최초 공개 범위 불명확. 데이터 오염보다 워크로드·측정 일치가 쟁점 | unknown |
| DGX Spark | Qwen 3.8 27B 실행; 64GB 시스템 한 대 대 두 대 | 최대 1.7배 주장, 구체 성능 지표 없음 | GB10 두 대·ConnectX-7 연결 | 정밀도·양자화·맥락 길이·batch·소프트웨어·절차 미공개. 일반 속도 향상이나 모델 품질로 확장 불가 | unknown |

### 비벤치마크 주장과 반증 조건

- **OpenAI 가이드: 마케팅 비교·고객 사례는 검증된 벤치마크로 채택하지 않았다.** API 문서·릴리스 노트가 제공 범위를 제한하면 해당 기능의 적용 가능성도 좁아진다.
- **Copilot: API 제공과 모델 폐지는 확인됐지만 리뷰 품질 향상은 주장하지 않는다.** 대체 모델 권장도 성능 우위 증거가 아니다.
- **Academy: 1억 달러는 약정, 10,000명은 미래 목표다.** 수료·실제 배포 성과가 없으면 생산성 효과를 확정할 수 없다.
- **Draup: 채용공고 통계는 벤치마크가 아니다.** 표본 기간·분류·중복 제거·실제 채용 자료가 결과 해석을 바꿀 수 있다.
- **Oracle: 연구회사의 전망을 확정 납기 변경이나 규제 거부로 바꾸지 않았다.** PSC 승인·기업 일정 확인이 위험 판단을 수정할 수 있다.
- **Amazon: 투자 약정은 지출·허가 성과·추가 가동 용량이 아니다.** 사후 정정된 금액 표현의 창 이전 확정 여부도 구분한다.
- Apple: 추가 동의 통제 발표는 배포 완료나 모든 Full Disk Access 금지가 아니다.
- **OpenAI 해고: 회사 설명은 귀속 가능한 입장이다.** 정책 위반의 확정 사실이나 안전 문제 제기 보복의 증거로 단정하지 않는다.
- **한국 CAIO: regulatory=yes는 정책 논의 관련성이다.** 새 법률 시행·‘모두의 AI’ 서비스 제공이 아니다.
- **SK hynix: 개발 공개는 상용화·운영 성과가 아니다.** 기사 속 다른 장비 속도 주장은 해당 사건의 성능 근거로 채택하지 않았다.

### 미포함 연구·보안 주장

C등급 연구는 핵심 신호로 승격하지 않았다. HC-DLM·World Observer는 비교 조건과 오염 통제가 미감사이고, ScholarCatalyst·Causal Memory Policy도 독립 재현이 없다. Olmo-core 3의 random-routing 처리량·단기 용량 시험은 훈련 완료나 모델 품질의 증거가 아니다.

보안 후보의 주장 역시 독립 재현이 없다. Multimodal RAG 추출은 2,500-query 실험과 비적응 baseline, LLMLeak은 11개 모델의 공격 성공률, APEX는 SkillsBench의 공격자 선택 행동, False Floors는 평가 라벨 기반 comparator와 offline counterfactual, OverAct는 deterministic benchmark와 SelfAudit 효과를 보고한다. 그러나 전체 조건·오염 통제·실제 운영 피해까지 검증되지 않았고 모두 원 제출 시각이 창 이전이다.

Atlas의 자유도 증가는 하드웨어 사양이지 조작 성공률 벤치마크가 아니다. 국내 은행 공격의 AI 도구 관여는 가설이며, 침해 보도와 AI 원인 입증을 분리한다.

## 7 다음 확인 일정

| 시점 | 확인 대상 | 통과 기준 |
|---|---|---|
| 다음 조사 패스, 일정 미정 | 날짜만 있는 원문·Muse·Atlas·수정된 보도 | 원 공개시각·창 이전 버전 확보. URL 날짜·목록 노출로 대체하지 않음 |
| 다음 조사 패스, 일정 미정 | AutoSynthData·AstaBrief | 코드·데이터 범위, untouched 평가, 최신 baseline·한국어 인용 정확도 |
| 다음 조사 패스, 일정 미정 | Google TEE 학습·Apple 통제 | 외부 감사·증명 가정, macOS 구현 버전·기업 관리 영향 |
| 다음 조사 패스, 일정 미정 | Copilot·llama.cpp·SGLang | 테스트 저장소 API 실행, 모델 교체 회귀, 보정·일치 조건 성능 |
| 다음 조사 패스, 일정 미정 | Oracle·Amazon·Draup·OpenAI 해고 | 승인 원문·기업 답변, 투자 집행, 채용 방법론, 당사자·평가기관 증언 |
| 2026-10-23 예정 | DGX Spark 파트너 시스템 | 실제 재고·한국 가격·Sync 제공·독립 측정 |
| 2026-10 월말 예정 | NVIDIA Model Launcher | 실제 공개 여부와 지원 범위 |
| 2026-12 예정 | ‘모두의 AI’ 정식 서비스 | 실제 제공, 공공 API·데이터·개인정보 규칙. 회의 논의와 분리 |
| 2027년 초 예정 | Academy 첫 최종 자격 | 실제 발급·수료·레지던시 결과 |
| 2027년 말 목표 | Academy 10,000명 교육 | 목표와 누적 실적·지출의 구분 |
| 일정 미정 | SK hynix·MemVerge | 기술 공개·내부 평가·아티팩트·상용화 근거 |

예정일은 번들에 기재된 계획이며 완료 사실이 아니다.

## 8 Coverage Audit

### 연구자 완료와 집계 기준

10개 연구자 모두 결과 객체 제출 완료로 기록한다. 다만 번들에는 개별 프로세스의 terminal completion 상태나 종료 코드가 없으므로 **10/10 결과 수신**과 **10/10 정상 종료 검증**을 동일시하지 않는다. 추가 도구 호출·외부 확인은 하지 않았다.

아래 ‘검증’은 연구자가 제출한 수치이고 ‘포함’은 중앙 편집 후 해당 영역에 배치한 고유 사건 수다. 초기·보완 수치는 전체 발견 후보 수가 아니라 search_audit의 통과 집계다. 탈락 후보를 포함한 전체 후보 수는 번들에 없어 미제공으로 표시한다. 목표 미달은 생태계 전체의 사건 부재를 뜻하지 않는다.

| 영역 | 결과 제출 | 전체 후보 수 | 초기 / 보완 통과 | 연구자 검증 | 정본 포함 | 목표 3 대비 편집 미달 |
|---|---|---|---|---:|---:|---|
| Frontier Models | 완료 | 미제공 | 2 / 0 | 2 | 1 | 2 |
| AI Research | 완료 | 미제공 | 2 / 2 | 4 | 3 | 없음 |
| Agents/Developer Tools | 완료 | 미제공 | search_audit 없음 | events 4건 | 3 | 없음 |
| Open Source/Repos | 완료 | 미제공 | 2 / 1 | 3 | 2 | 1 |
| Chips/Compute/Infrastructure | 완료 | 미제공 | search_audit 없음 | events 3건 | 3 | 없음 |
| Enterprise/Applications | 완료 | 미제공 | 0 / 2 | 2 | 1 | 2 |
| Funding/M&A/Business | 완료 | 미제공 | 2 / 2 | 4 | 1 | 2 |
| Safety/Evaluation/Security | 완료 | 미제공 | 0 / 1 | 1 | 1 | 2 |
| Policy/Geopolitics | 완료 | 미제공 | 1 / 0 | 1 | 1 | 2 |
| Korea Exposure | 완료 | 미제공 | 2 / 1 | 3 | 1 | 2 |

### 두 패스·영역별 미달 설명

- **Frontier Models:** 초기 2건, 보완 0건, 연구자 shortfall 1. 공식 뉴스룸·연구 목록 직접 추출을 보완했으나 추가 frontier 사건은 없었다. Academy·Muse는 범위 밖, 과거 모델 발표·arXiv 원 제출은 창 밖이었다. AutoSynthData를 AI Research 정본으로 이동해 편집 포함은 1건이다. 검색 관련성 오류 때문에 전 세계 희소성 판단은 불가하다.
- **AI Research:** 초기 AstaBrief·AutoSynthData 2건에 보완 Google·llama.cpp 2건을 추가해 검증 4건, shortfall 0. llama.cpp는 Open Source/Repos에 배치해 3건 포함. arXiv 목록 날짜와 원 제출 날짜 차이, 오래된 연구·프로필의 비사건성이 제외 사유다.
- **Agents/Developer Tools:** search_audit와 두 패스별 수치는 미제공이며 coverage_notes에는 4건 확보가 기록돼 있다. GitHub·OpenAI·Anthropic 직접 추출이 주 근거였다. OpenAI 가이드 중복을 Frontier Models로 배치해 3건 포함. 10월 1일 제품·일반 인증 인프라와 과거 기본값 변경은 제외했다.
- **Open Source/Repos:** 초기 2건, 보완 SGLang 1건으로 검증 3건, shortfall 0. AstaBrief는 AI Research에 배치해 2건 포함. AutoSynthData의 신규 코드 공개는 미확인, Olmo-core·다른 릴리스는 창 밖, Muse 시각은 미해결이다. 무관한 검색 결과·429·Qwen 접근 차단이 완전성을 제한했다.
- **Chips/Compute/Infrastructure:** search_audit·별도 두 패스 수치는 없고 coverage_notes에는 3건 확보가 기록돼 있다. NVIDIA·AMD·The Register·Amazon 직접 추출과 중복 보도 정리를 거쳐 3건 포함. Suncatcher·GPU 밀수 혐의는 원 공개가 10월 1일이다. Oracle은 승인 원문 미열람으로 B 유지.
- **Enterprise/Applications:** 초기 0건, 보완 2건, 연구자 shortfall 1. 첫 패스는 검색 오류·429·이전 발표 재게시 때문에 성과가 없었고, 두 번째에 Apple·Muse를 확보했다. Muse는 다른 연구자의 정확 시각 경고와 원문 메타데이터 부족을 반영해 제외하여 1건 포함. 실제 제품·운영 사건 없이 프로필·전시 예고로 채우지 않았다.
- **Funding/M&A/Business:** 초기 2건, 보완 2건, 검증 4건, shortfall 0. Academy·Amazon·Oracle을 각각 다른 정본 영역에 배치하여 독점 포함은 Draup 1건이다. 검증 부족이 아니라 중복 배치 제거가 주요 미달 원인이다. 과거 투자·행사 홍보·시간 밖 Stability와 FT 날짜·본문 미확인을 제외했다.
- **Safety/Evaluation/Security:** 초기 0건, 보완 1건, shortfall 2. 다섯 논문의 원 제출은 창 이전이며, 과거 소환장·알림·수정일을 새 사건으로 삼지 않았다. OpenAI의 창 안 해고 확인만 포함했다. 검색 오류·공식 페이지 제한으로 추가 사건 부재를 확정할 수 없다.
- **Policy/Geopolitics:** 초기 1건, 보완 0건, shortfall 2. 정부·규제기관 직접 추출에서도 새 핵심 사건을 추가하지 못했다. EU 수상 후보는 중요도 부족, 대화·소환장·수출 혐의는 창 밖, 일반 아동 안전 공지는 AI 특정성 부족이다. 한국 회의는 의제별로 분할하지 않았다.
- **Korea Exposure:** 초기 2건, 보완 Atlas 1건, 연구자 shortfall 0. 정부 회의는 Policy/Geopolitics로 병합했고 Atlas는 원 공개일 미해결로 제외해 SK hynix 1건 포함. 두 번째 패스가 확인한 현대차 연결은 국내 관련성 공백을 해소하지만 원 사건 날짜 공백까지 해소하지 않는다. 은행 AI 관여 가설·미날짜 LG CNS·상한 시각 기사로 채우지 않았다.

### 중복 제거·제외·자료 충돌

- **OpenAI의 모델 가이드와 개발 가이드는 같은 URL·공개 사실이다.** Frontier Models 정본 한 건으로 병합했다.
- **AutoSynthData의 두 핵심 ID와 두 오픈소스 watchlist 표기는 같은 공개다.** AI Research 정본 한 건이며, 코드 출시 명제만 미확인으로 남겼다.
- AstaBrief의 연구·오픈 릴리스와 llama.cpp의 연구·저장소 공개는 각각 같은 사건으로 병합했다.
- **Academy의 교육·사업 약정은 하나의 프로그램 공개다.** 별도 투자 라운드로 세지 않았다.
- Amazon·Oracle의 동일 ID는 영역을 넘어 한 번만 포함했다.
- **한국 CAIO 확대와 입법 틀 논의는 같은 회의다.** Policy/Geopolitics 정본으로 병합하고 언론 교차 확인만으로 A 승격하지 않았다.
- **Muse는 Enterprise에서 A 핵심, Open Source에서 B watchlist로 상충한다.** 공식 코드 존재와 정확 창 안 신규 공개는 별도 명제이므로 시각 확인 전 제외했다.
- **Atlas는 핵심·watchlist가 함께 있고 최초 coverage_notes도 날짜 미확인을 명시한다.** 한국 연결의 후속 확인과 별개로 원 공개일이 해결되지 않아 제외했다.
- **첫 패스의 “watchlist 없음”, “검증 0/2건” 같은 문장은 누적 coverage_notes에 남아 있다.** 최종 배열·search_audit·Targeted 설명을 함께 읽었으며 오래된 서술을 최종 결과로 오인하지 않았다.
- notes에만 등장하고 watchlist 객체가 없는 추가 후보는 임의의 항목으로 만들지 않았다.
- **핵심에는 C등급 사건을 넣지 않았다.** 아래 watchlist는 같은 사실·URL별로 병합했고 핵심 포함 수에 더하지 않는다.

- **수록 사건 수:** 17

### Watchlist (미확인 후보)

- 후보: Hierarchical Continuous Diffusion Language Models (미포함 사유: C; 원 arXiv 제출이 창 이전이고 성능·오염 통제·독립 재현 미확인 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.02193))
- 후보: World Observer: Joint Actor-Observer Generation for Persistent World Modeling (미포함 사유: C; 원 제출이 창 이전이며 digest의 날짜·KAIST 연결은 새 공개나 성능 검증이 아님 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.02162))
- 후보: Sean Parker의 Stability AI 음악 중심 전략 (미포함 사유: B; 정확 기사 시각이 창 이후이고 8월 투자·이전 모델 출시를 새 사건으로 재분류할 수 없음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/10/02/sean-parker-is-rebuilding-stability-ai-around-music/))
- 후보: ScholarCatalyst의 연구 영감 문헌 검색 벤치마크 (미포함 사유: C; 원 제출이 창 이전이고 agentic search 비교는 저자 보고·독립 재현 미확인 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.02202))
- 후보: Causal Memory Policy의 기억 효용 추정 (미포함 사유: C; 원 제출이 창 이전이고 코드 공개 주장·독립 재현 미확인 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.02070))
- 후보: Ai2 Olmo-core 3 MoE 훈련 인프라 (미포함 사유: C; 원 기사·릴리스가 10월 1일이며 시스템 용량 시험은 완성 모델 품질 증거가 아님 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/allenai/olmocore3))
- 후보: AutoSynthData의 신규 오픈소스 아티팩트 공개 (미포함 사유: C; 연구 공개는 본문에 포함했지만 파이프라인 코드·생성 데이터·체크포인트의 신규 공개는 미확인 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/ServiceNow-AI/autosynthdata))
- 후보: Meta Muse Gadgets 펌웨어·ESP32·Linux SDK (미포함 사유: 영역별 A/B 판단 상충; 공식 코드 존재는 확인되나 정확 공개시각과 창 안 원 공개가 미해결, Home Link는 미국 한정 미래 배송 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/10/02/meta-wants-you-to-build-your-own-muse-gadget/))
- 후보: Google Project Suncatcher 프로토타입 발사·교신 (미포함 사유: B; 원 공식 공개는 10월 1일이며 실험 임무를 운영 AI 인프라로 볼 수 없음 / <br class="report-field-break" />출처: [blog.google](https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-prototype/))
- 후보: DOJ의 3억 달러 서버 밀수 혐의 체포 발표 (미포함 사유: B; 원 공개는 10월 1일이고 혐의는 유죄 판단이 아님 / <br class="report-field-break" />출처: [www.justice.gov](https://www.justice.gov/opa/pr/california-man-arrested-smuggling-more-300-million-export-controlled-computer-servers-china))
- 후보: Circuit Breaker Labs의 AI 안전 테스트 사업 소개 (미포함 사유: B; 귀속 가능한 기존 운영 설명이지만 창 안 출시·배포·거래라는 새 사건 미확인 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/10/02/circuit-breaker-labs-hopes-to-make-ai-safer-for-your-kids-and-you/))
- 후보: BAG Ventures의 1,130만 달러 펀드 결성 (미포함 사유: B; 기사 날짜가 9월 30일로 창 밖 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/09/30/bag-ventures-sets-its-eyes-deeper-into-the-ai-stack/))
- 후보: Tencent의 Oracle AI 칩 100,000개 임대 보도 (미포함 사유: C; FT 본문·원 공개일 접근 제한으로 계약 근거와 창 안 공개 미확인 / <br class="report-field-break" />출처: [www.ft.com](https://www.ft.com/content/8799b33d-f07c-4a03-82f0-bf5d3d1d29e9))
- 후보: Walking the Embedding Space: Datastore Extraction from Multimodal RAG (미포함 사유: C; 원 제출이 창 이전이며 추출 실험은 독립 재현·운영 침해 미확인 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.01871))
- 후보: The Innocent Courier: Covert Exfiltration Through Legitimate LLM Web Fetching (미포함 사유: C; 원 제출이 창 이전이며 공격 성공률과 실제 악용 미확인 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.01768))
- 후보: Chaining Skills to Hijack LLM Agents (미포함 사유: C; 원 제출이 창 이전이며 SkillsBench 공격·방어 효과는 저자 실험 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.01564))
- 후보: False Floors: LLM Safety Routing Evaluations Break Under Distribution Shift (미포함 사유: C; 원 제출이 창 이전이며 controller 결과는 offline counterfactual 추정 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.01535))
- 후보: OverAct: Measuring and Mitigating Proactive Over-Authorization in LLM Tool-Calling Agents (미포함 사유: C; 원 제출이 창 이전이며 SelfAudit 개선은 독립 재현 미확인 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2610.01508))
- 후보: EU Apply AI Startup Award 결선 후보 (미포함 사유: B; 날짜는 통과하지만 후보 발표는 핵심 정책·지정학 사건의 중요도 기준 미달 / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/meet-10-finalists-apply-ai-startup-award))
- 후보: EU–Canada Digital Dialogue (미포함 사유: B; 원 공개·수정일이 10월 1일로 창 밖 / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/eu-and-canada-held-digital-dialogue-advance-cooperation-digital-policy-and-innovation))
- 후보: 군포시 미취업 청년 AI 구독 지원 (미포함 사유: B; 10월 3일 10:00 KST 공개로 상한 이후이며 신청·지급도 미래 / <br class="report-field-break" />출처: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261002148500061))
- 후보: 미국 정부 AI 용어 변경 명령에 대한 연합뉴스 분석 (미포함 사유: B; 9월 29일 원 조치와 10월 3일 07:00 KST 기사 모두 창 밖, 원 명령 별도 추출 없음 / <br class="report-field-break" />출처: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261002143500017))
- 후보: California의 OpenAI 사이버보안 조사 소환장 (미포함 사유: B; 공식 공개는 10월 1일이며 10월 2일 보도는 새 집행 조치가 아님, 위법 확정도 아님 / <br class="report-field-break" />출처: [oag.ca.gov](https://oag.ca.gov/news/press-releases/part-ongoing-investigation-attorney-general-bonta-serves-investigative-subpoena))
- 후보: Atlas의 13자유도 촉각 센서 손 (미포함 사유: B; 보도 시각·현대차 관련성은 확인되지만 원 Boston Dynamics 공개일이 미해결, 생산 조작 성능 미확인 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261002000122))
- 후보: KOSW 포럼의 국내 AI 조달·사업 지속성 비판 (미포함 사유: B; 기사 공개가 10월 3일 06:00 KST로 제외되는 상한과 정확히 같으며 정책 시행이 아닌 의견 / <br class="report-field-break" />출처: [www.ddaily.co.kr](https://www.ddaily.co.kr/page/view/2026100215292065648))
- 후보: 국내 은행 공격의 AI 도구 관여 주장 (미포함 사유: 전자신문 C·ZDNet B의 동일 공격 관여 후보를 병합; AI 원인 미확인, 전자신문은 창 이후이며 ZDNet도 창 이후 수정본의 세부 내용 구분 필요 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261002205944))
- 후보: LG CNS·General Atlantic 기업 AI 공동투자 파트너십 (미포함 사유: B; 공식 원문의 공개일 누락, 서명일은 창 밖인 9월 24일이며 투자 규모·성과 미공개 / <br class="report-field-break" />출처: [www.lgcns.com](https://www.lgcns.com/en/newsroom/press/detail.ax-2610-1))
