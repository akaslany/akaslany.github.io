---
layout: ai-intel
title: "AI Daily Intel — 2026-11-06"
date: 2026-11-06 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-06/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-06
- **기준 시각:** 2026-11-06T06:00:00+09:00
- **수집 구간:** [2026-11-05T06:00:00+09:00, 2026-11-06T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 27

## 1 오늘의 AI 한 문장

AI 경쟁의 초점이 모델 성능에서 보안 접근통제·기업 데이터 검색·에이전트 관측성·전력과 메모리 효율로 확장되고 있지만, 공개된 성능 수치의 상당수는 독립 재현되지 않았으며 출시 계획과 실제 가동을 구분해야 한다.

이 보고서는 제공된 연구 번들만 편집한 결과다. <br class="report-field-break" />Evidence A는 공식·논문·정부 원문에 의한 발표 확인, B는 귀속 가능한 보도, C는 핵심 사건으로 채택하기에 부족한 근거를 뜻한다. A도 성능 주장의 독립 검증을 의미하지 않는다.

시간 판정에는 제약이 있다. 정확한 시각이 있는 항목은 위 반개구간을 적용했다. 날짜만 있는 항목은 연구 번들의 달력일 중첩 계약에 따라 유지했다. 특히 11월 6일 날짜만 있는 항목이 실제 06:00 이전에 공개됐는지는 확인되지 않았다. 이를 정확한 시간창 충족으로 단정하지 않는다.

## 2 핵심 신호 5

1. 제한적 사이버 모델 배포가 능력 향상과 함께 진행된다.
   OpenAI는 GPT-6 Cyber를 승인된 Daybreak Red 고객에 제공한다고 발표했다. ExploitGym 성공률 48.5%는 공급사 평가이며, 외부 평가에서는 Astra보다 낮은 해결 건수도 보고됐다. 접근 가능은 일반 공개와 다르다. <br class="report-field-break" />Evidence A.

**출처:** [openai.com](https://openai.com/index/introducing-gpt-6-cyber/)


2. 생성형 영상은 품질뿐 아니라 제작 단가와 편집 흐름으로 경쟁한다.
   Gemini Omni 1.2 Flash는 15초 영상, 대화형 편집, 720p 초당 0.07달러를 제시했다. Google이 말하는 가격 인하와 일반 API 제공은 확인 대상이지만, 한국어 품질과 모든 소비자 제품의 동시 배포는 입증되지 않았다. <br class="report-field-break" />Evidence A.

**출처:** [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)


3. 기업 에이전트의 병목은 문서 전체 읽기보다 권한을 보존하는 검색에 있다.
   Box는 Nemotron 기반 Content Retrieval을 발표했으나 제공은 2027년 초 계획이다. 속도·오류·토큰 개선 수치는 기준선과 시험 조건이 공개되지 않은 공급사 주장이다. <br class="report-field-break" />Evidence B.

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/05/box-taps-nvidias-nemotron-for-new-agent-first-content-retrieval-system/)


4. 에이전트 인프라의 경제성은 CPU·메모리 계층·전력까지 포함한다.
   NVIDIA의 Vera 및 메모리 공동설계 공개는 GPU 외 병목을 부각한다. 다만 에이전트/와트, 사용자당 처리속도, 처리량/달러는 서로 다른 지표이며 성능 우위를 독립 검증한 결과로 읽어서는 안 된다. <br class="report-field-break" />Evidence A.

**출처:** [developer.nvidia.com](https://developer.nvidia.com/blog/five-ways-nvidia-co-design-maximizes-the-value-of-every-byte-in-the-ai-factory/)


5. 한국의 AI 노출은 전력 공급망 기회와 반도체 기대 변동에 동시에 걸려 있다.
   Infineon–SoluM 협력은 MOU 단계다. 같은 날 국내 반도체주 하락은 관측된 시장 사건이지만, 미국 규제 우려라는 설명이 실제 규제 시행이나 주문 감소를 입증하지는 않는다. <br class="report-field-break" />Evidence B.

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261105126800017)

**출처:** [www.etnews.com](https://www.etnews.com/20261105000437)


## 3 영역별 AI 브리프

상태는 번들의 원문 값인 yes/no/unknown을 유지한다. availability는 논문 접근, 제한 고객 접근, 미리보기 등을 포함할 수 있으므로 일반 상용 제공으로 일괄 해석하지 않는다.

### Frontier Models

  제목: OpenAI GPT-6 Cyber 제한 배포

**Evidence:** A

  source URL: [openai.com](https://openai.com/index/introducing-gpt-6-cyber/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 사이버 특화 GPT-6 Astra 변형을 승인된 Daybreak Red 고객에게 API·Codex로 제공한다. 보안팀 사용과 고객 사례는 공급사 자료에 근거하며 일반 공개·매출은 확인되지 않았다. Safety/Evaluation/Security 연구자의 동일 사건을 이 항목에 병합했다.

**한국 연결:** 보안팀·핵심 인프라의 허가된 취약점 연구에 잠재적 관련성이 있으나 한국 고객이나 접근 보장은 없다.


  제목: Gemini Omni 1.2 Flash 영상 생성·편집 업데이트

**Evidence:** A

  source URL: [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** Gemini API·기업용 서비스의 일반 제공, 15초 영상, 다중 턴 편집, 720p 초당 0.07달러를 발표했다. Google은 Omni 1.1 대비 30% 낮은 가격과 기존 업무 활용을 설명한다. 소비자 제품별 배포는 다르며 출력에는 SynthID가 적용된다.

**한국 연결:** 광고·커머스·미디어 제작에 관련되지만 한국 제공 조건과 한국어 대사 품질은 미확인이다.


### AI Research

  제목: 잠재공간 에이전트 군집 기반 과학 프로그램 탐색

**Evidence:** A

  source URL: [arxiv.org](https://arxiv.org/abs/2611.08483)
  공개시각: 2026-11-05T18:59:29+00:00.

**내용:** KV 캐시 교환과 잠재공간 교차를 사용하는 SwarmEvolve 논문 공개다. 저자들은 21개 문제에서 성능·탐색속도 개선을 보고했으나 계산량을 맞춘 외부 재현은 확인되지 않았다. availability는 논문 접근을 뜻한다.

**한국 연결:** 과학계산·AI-for-science 연구의 검토 대상이며 국내 도입은 미확인이다.


  제목: AI 과학자용 실행 가능한 연구 환경 제안

**Evidence:** A

  source URL: [arxiv.org](https://arxiv.org/abs/2611.08478)
  공개시각: 2026-11-05T18:58:17+00:00.

**내용:** 논문에서 연구 질문과 재현 기준선을 추출하는 Scientist World를 제안했다. 저자는 환경 1,000개와 연구 추적 6,400시간을 발표했으나 실행 자산 다운로드·코드는 별도 검증되지 않았다.

**한국 연결:** 자율연구 평가·훈련 자원 후보이나 국내 활용 증거는 없다.


  제목: 구조화된 연구 산출물을 통한 코딩 에이전트 재현 개선

**Evidence:** A

  source URL: [arxiv.org](https://arxiv.org/abs/2611.08452)
  공개시각: 2026-11-05T18:45:36+00:00.

**내용:** 코드·환경 설정·실험 실행기·재현 가이드를 묶는 ReproBridge를 제안했다. 저자는 재현 성공률 76.4%→92.6%와 후속 API 지출 감소를 보고했다. 논문 공개와 코드·벤치마크 배포 확인은 별개다.

**한국 연결:** 국내 ML 연구실의 실험 인수인계·재현 절차에 잠재적으로 유용하다.


### Agents/Developer Tools

  제목: Copilot 코드리뷰 대응 지표 추가

**Evidence:** A

  source URL: [github.blog](https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 저장소별 일일 사용 보고서에 리뷰 평가·대응 지표를 추가했다. addressed에는 수정 연기 답변도 포함돼 실제 수정 완료율이나 정확도를 뜻하지 않는다. 평가는 병합일 기준이며 봇 PR에는 일반적으로 적용되지 않는다.

**한국 연결:** 국내 Copilot 관리 조직의 리뷰 활용도 점검에 관련된다.


  제목: Copilot 텔레메트리·지원 버전 공백 표시

**Evidence:** A

  source URL: [github.blog](https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 사용자별 텔레메트리 존재 여부와 요구 버전 관련 필드를 추가했다. 상세 사용 데이터가 없어도 활성 사용자에 포함될 수 있다. 결측 사유별 인원은 중복되므로 합산하면 안 된다.

**한국 연결:** 기업의 IDE 버전·프록시·방화벽 정책과 관측 공백을 구분하는 데 관련된다.


  제목: GitHub PR 개요 화면 선택형 공개 미리보기

**Evidence:** A

  source URL: [github.blog](https://github.blog/changelog/2026-11-05-new-pull-request-overview-page-in-public-preview/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 병합 준비 상태·다음 조치·댓글 필터·활동 요약을 개선한 미리보기다. 주말까지 순차 배포 예정이며 전체 일반 제공 완료가 아니다. 개발도구 사건으로 포함하되 새 AI 에이전트 능력으로 분류하지 않는다.

**한국 연결:** GitHub 기반 국내 개발팀에 관련되며 생산성 개선은 독립 입증되지 않았다.


### Open Source/Repos

  제목: LeRobot v0.7.0 출시

**Evidence:** A

  source URL: [huggingface.co](https://huggingface.co/blog/lerobot/lerobot-release-v070)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 상호작용형 로봇 지시, 데이터셋 스트리밍, FSDP2/HSDP, 원격 정책 서버를 추가했다. 대응 GitHub 릴리스도 확인된 사건이다. 기존 비동기 추론 인터페이스 교체와 이전 FSDP 체크포인트 재개 비호환에 주의해야 한다.

**한국 연결:** 국내 로봇 연구·통합팀의 개방형 VLA 인프라 검토 대상이다.


  제목: Ai2 ToyBlocks 로봇 학습·평가 프레임워크 공개

**Evidence:** A

  source URL: [huggingface.co](https://huggingface.co/blog/allenai/toyblocks)
  공개일: 2026-11-06, 컷오프 이전 공개 시각 미확인.

**내용:** 시뮬레이션 자산, 절차적 과제·시연 생성기, 학습·평가 코드, 검증 세트와 학습 모델 2개를 공개했다. 주 저장소는 Apache-2.0이며 하위 모듈·자산은 별도 라이선스를 확인해야 한다. 통합 RL 학습은 현재 패키지에 없다.

**한국 연결:** 조작·공간 일반화·sim-to-real 연구에 잠재적으로 관련된다.


  제목: Open ASR Leaderboard 비공개 영어 억양 평가 확장

**Evidence:** A

  source URL: [huggingface.co](https://huggingface.co/blog/open-asr-leaderboard-liva)
  공개일: 2026-11-06, 컷오프 이전 공개 시각 미확인.

**내용:** 이집트·나이지리아 억양 영어 평가 분할과 억양군 보고를 추가했다. 공개 다운로드 데이터나 새 코드 릴리스가 아니라 평가 통합 발표다. 동적 리더보드 표는 추출 자료에서 확인되지 않았다.

**한국 연결:** 한국 음성팀의 평가 설계 참고 사례이며 한국어 데이터 추가는 아니다.


### Chips/Compute/Infrastructure

  제목: NVIDIA Vera CPU 에이전트 성능·전력효율 비교 공개

**Evidence:** A

  source URL: [blogs.nvidia.com](https://blogs.nvidia.com/blog/vera-cpu-highest-throughput-fastest-agents/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** NVIDIA는 특정 x86 비교군 대비 에이전트/와트 1.6배와 에이전트 속도 2배를 주장했다. 비교 CPU 모델과 상세 시험 설정은 추출 자료에서 확인되지 않았다. 파트너 시험은 운영 배포 증거가 아니며 Perplexity 배포는 계획이다.

**한국 연결:** 클라우드·데이터센터의 CPU 병목 및 전력 예산 검토에 관련된다.


  제목: NVIDIA 메모리 계층 공동설계 기술 공개

**Evidence:** A

  source URL: [developer.nvidia.com](https://developer.nvidia.com/blog/five-ways-nvidia-co-design-maximizes-the-value-of-every-byte-in-the-ai-factory/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** NVFP4, expert parallelism, Dynamo 캐시, Vera CPU 메모리, CMX 저장을 설명했다. AgentX 재생 시험에서 사용자당 160 tokens/s 조건의 MW당 처리량 최대 30배를 주장한다. 관련 기업 개요 글은 같은 사건으로 병합했다.

**한국 연결:** HBM·CPU 메모리·저장 계층의 역할 변화와 관련되지만 한국 공급계약·매출 증거는 아니다.


  제목: IBM–Oak Ridge–AMD 양자 오류정정 공동설계 플랫폼

**Evidence:** A

  source URL: [newsroom.amd.com](https://newsroom.amd.com/news/amd-builds-classical-foundation-quantum-future/)
  공개일: AMD 뉴스룸 색인 기준 2026-11-05; 기사 본문 추출에는 날짜 미표시.

**내용:** IBM 양자컴퓨터와 EPYC·Instinct 기반 Umbra HPC를 결합하는 연구 플랫폼 참여를 발표했다. 120큐비트 Nighthawk를 포함한 구성을 설명하지만 가동·접근 가능·측정 성과는 미확인이다. AI 직접 성능 사건이 아닌 인접 하이브리드 계산 인프라로 포함한다.

**한국 연결:** 국내 HPC·양자 연구기관의 아키텍처 검토에 잠재적 관련성이 있다.


### Enterprise/Applications

  제목: Box의 Nemotron 기반 기업 콘텐츠 검색 발표

**Evidence:** B

  source URL: [techcrunch.com](https://techcrunch.com/2026/11/05/box-taps-nvidias-nemotron-for-new-agent-first-content-retrieval-system/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 메타데이터·권한과 임베딩을 결합해 관련 문서 조각을 반환한다. Enterprise Advance 고객 제공은 2027년 초 계획이다. 보도에 인용된 효율 개선치는 검증된 실사용 결과가 아니다.

**한국 연결:** Box 사용 기업에 잠재적으로 관련되지만 국내 제공·데이터 처리 조건은 미확인이다.


  제목: Claude 개인 금융 읽기 전용 연결 발표

**Evidence:** B

  source URL: [techcrunch.com](https://techcrunch.com/2026/11/05/claude-can-now-analyze-your-spending-with-its-new-personal-finance-tool/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** Plaid를 통해 은행·카드 계좌를 연결해 지출을 분석한다. 자금 이동·운용·투자는 할 수 없는 읽기 전용이다. 미국 유료 가입자 대상 베타가 이번 주 시작된다는 설명이며 컷오프 당시 접근 여부는 미확인이다.

**한국 연결:** 한국 사용자·금융기관 지원은 확인되지 않았다.


  제목: Airbnb AI 여행 에이전트 출시 일정 구체화

**Evidence:** B

  source URL: [techcrunch.com](https://techcrunch.com/2026/11/05/airbnb-says-its-launching-an-ai-travel-agent-in-the-first-half-of-2027/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 주주서한·CEO 발언을 인용한 보도로, 출시 목표는 2027년 상반기다. 지도·사진·비교·일정 중심 인터페이스와 예약 변경·지원 기능은 계획이며 현재 제공 기능으로 보지 않는다.

**한국 연결:** 국내 게스트·호스트에 잠재적 관련성이 있으나 한국어·한국 출시 일정은 미공개다.


### Funding/M&A/Business

  제목: Dropbox의 Tigris Data 3억5,000만 달러 인수 계획

**Evidence:** B

  source URL: [techcrunch.com](https://techcrunch.com/2026/11/05/dropbox-acquires-tigris-data-for-350m-to-bolster-its-ai-iinfrastructure/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** DBX Agent Cloud와 S3 호환 객체 저장 사업을 지원할 인수 계획이다. 회사는 2026년 4분기 종결을 예상한다고 밝혔으며 소유권 이전 완료나 플랫폼 일반 제공은 확인되지 않았다.

**한국 연결:** 직접적인 국내 거래·고객 노출은 미확인이다.


  제목: Agility의 공개시장 거래 및 예상 자금 조달

**Evidence:** B

  source URL: [techcrunch.com](https://techcrunch.com/2026/11/05/agility-is-the-first-pure-humanoid-robot-company-on-the-stock-market-are-you-buying/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** CEO 인터뷰를 포함한 보도는 역합병/SPAC 경로와 예상 4억6,500만 달러 자금 유입을 설명한다. 기존 고객 9곳, 상반기 매출 17만4,000달러와 손실 3억6,200만 달러는 배경 정보다. 약 3억 달러의 Digit 5 계획 계약에는 성능 조건이 붙는다.

**한국 연결:** 한국 투자자·고객·배포 관계는 확인되지 않았다.


  제목: Brightmind 2호 펀드 조성 목표 공개

**Evidence:** B

  source URL: [techcrunch.com](https://techcrunch.com/2026/11/05/the-ex-secret-service-agent-who-flipped-a-hacker-is-now-raising-a-second-250m-cybersecurity-fund/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 공동창업자 인터뷰를 통해 약 2억5,000만 달러 규모의 2호 펀드 목표와 약 20%의 AI 인프라 배분 방침을 보도했다. 펀드 결성 완료가 아니며 모금 시작일도 미확인이다. 사건은 당일 보도된 방침 공개다.

**한국 연결:** 국내 LP·투자대상·지역 배분은 미확인이다.


### Safety/Evaluation/Security

GPT-6 Cyber는 Frontier Models의 정본에 병합했다. 아래는 이 영역에만 정본을 배정한 2건이다.

  제목: METR의 Anthropic R&D 가속 위험보고서 검토

**Evidence:** A

  source URL: [metr.org](https://metr.org/blog/2026-11-05-rd-section-anthropic-risk-report-august-2026-review/)
  공개일: 2026-11-05, 시각 미확인.

**내용:** METR는 직접 재앙위험이 낮다는 판단에는 동의하면서도 R&D 2배 가속 경고선 미도달에 관한 공개 보고서의 확신이 과도했다고 지적했다. 방법별 추정 범위와 비공개 자료·편집권 제약이 있으며 경고선 초과를 입증한 것은 아니다.

**한국 연결:** 국내 모델 평가·위험보고 공시 기준 설계에 관련된다.


  제목: OpenAI–Hacktron 제3자 서비스 경계 보안시험 협력

**Evidence:** A

  source URL: [openai.com](https://openai.com/index/partnering-with-hacktron/)
  공개일: 2026-11-06, 컷오프 이전 공개 시각 미확인.

**내용:** 공동 시험 영역 선정과 Daybreak Red를 통한 모델 접근 확대를 발표했다. 제3자 서비스 상호작용을 중점으로 하지만 새 프로그램의 취약점 발견·수정 성과는 확인되지 않았다.

**한국 연결:** 외부 서비스·인증체계에 에이전트를 연결하는 기업의 보안 설계에 관련된다.


### Policy/Geopolitics

  제목: EU 교육·기술 패키지의 학교 AI 활용 방향

**Evidence:** A

  source URL: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-launches-education-and-skills-package-tackle-declining-basic-skills-rapid-digital-change)
  공개일: 2026-11-05, 시각 미확인.

**내용:** 교육용 디지털·AI 도구, 기본역량, 교사·직업교육 등을 우선순위로 제시했다. 학교 배포 완료나 구속력 있는 AI 규정 발효가 아니다. 11월 3일 EDU-EDIC 설립은 별도 당일 사건으로 세지 않았다.

**한국 연결:** 유럽 학교 시장을 검토하는 한국 에듀테크 기업에 잠재적으로 관련된다.


  제목: EU의 TikTok 추천시스템 DSA 위반 예비 판단

**Evidence:** A

  source URL: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-preliminarily-finds-tiktoks-you-feed-breach-digital-services-act-harmful-rabbit-holes)
  공개일: 2026-11-06, 컷오프 이전 공개 시각 미확인.

**내용:** 운영 중인 For You 추천시스템의 유해 콘텐츠 반복 노출과 위험평가·완화에 관한 예비 판단이다. 최종 위반 결정이나 과징금 확정이 아니다.

**한국 연결:** EU 이용자를 대상으로 개인화 피드를 운영하는 국내 플랫폼에 잠재적 준수 시사점이 있다.


### Korea Exposure

  제목: 카카오 분할 일정·KakaoAI 자산 배분 변경

**Evidence:** B

  source URL: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261105122900017)
  공개시각: 2026-11-05T15:03:00+09:00.

**내용:** 이사회가 분할 계획을 변경해 분할일을 2027년 2월 1일로 연기했다는 보도다. KakaoAI 배정 자산을 2,636억 원 늘려 계획 순자산을 약 2.9조 원에서 3.2조 원으로 조정했다. 공시 원문 직접 검토는 없으며 주주 승인·상장 절차는 남아 있다.

**한국 연결:** 국내 플랫폼 AI 사업의 자본 배분·증시 절차에 직접 관련된다. 자산 배분은 집행된 AI 투자나 매출이 아니다.


  제목: Infineon–SoluM AI 데이터센터 HVDC 협력

**Evidence:** B

  source URL: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261105126800017)
  공개시각: 2026-11-05T15:14:00+09:00.

**내용:** 서울 간담회에서 서버 전원공급장치·배터리 백업·중간 버스 변환기를 포함하는 고전압 직류 협력 MOU를 설명했다. 제품 출하·고객 배포·효율 개선 실증은 아니다.

**한국 연결:** 한국 전력장치 공급사 SoluM이 직접 참여한다.


  제목: AI 인프라 규제 우려 속 국내 반도체주 급락

**Evidence:** B

  source URL: [www.etnews.com](https://www.etnews.com/20261105000437)
  공개시각: 2026-11-05T16:19:00+09:00.

**내용:** 거래소 수치를 인용한 보도에 따르면 코스피는 5.28% 하락한 5,383.80, 삼성전자는 7.57%, SK하이닉스는 9.46% 하락했다. 미국 AI 데이터센터 규제 우려와의 연결은 시장 해석이며 새 규제 시행은 입증되지 않았다.

**한국 연결:** 국내 메모리 반도체 기업의 AI 설비투자 기대 민감도를 보여주는 시장 사건이다.


## 4 기술→산업 전달경로

| 출발점 | 산업 전달경로 | 번들에서 확인된 단계 | 넘어가면 안 되는 추론 |
|---|---|---|---|
| 사이버 특화 모델 | 취약점 탐색 → 보안팀 업무 | 제한 고객 접근·공급사 보고 사용 사례 | 일반 공개·안전 보장·매출 확정 |
| 영상 생성·편집 | 제작 단가·반복 편집 → 광고·커머스 | API 일반 제공과 공개 가격 | 한국어 품질·국내 제공·제작비 절감 실현 |
| 권한 보존 검색 | 문서 조각 검색 → 기업 에이전트 | Box 발표·향후 제공 계획 | 현재 가동·검증된 오류 감소 |
| 연구 산출물 구조화 | 환경·실행 절차 보존 → 실험 재현 | 논문과 저자 평가 | 공개 코드 확보·독립 재현 성공 |
| 로봇 개방형 스택 | 데이터·원격 추론·평가 → 로봇 개발 | LeRobot 코드·ToyBlocks 자산 공개 | 현장 신뢰성·sim-to-real 성능 확보 |
| CPU·메모리 계층 | 도구 실행·컨텍스트 관리 → 추론 경제성 | NVIDIA 기술·벤치마크 공개 | 독립 검증된 TCO 우위·한국 HBM 수요 방향 확정 |
| HVDC 전력장치 | 고밀도 랙 전력 → 국내 공급망 | Infineon–SoluM MOU | 양산 수주·출하·매출 인식 |
| 추천 알고리즘 감독 | 위험평가 → 플랫폼 설계·준수 | EU 예비 판단 | 최종 제재·한국 적용 확정 |

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 현재 강도와 공백 |
|---|---|---|
| 모델 | Cyber 제한 배포, Omni 영상 업데이트 | 제품 발표 근거 A; 성능 독립 재현 미확인 |
| 데이터·평가 | Scientist World, ToyBlocks, ASR 억양 확장 | 환경·평가 범위 확장; 실행 자산 확인 수준과 공개성은 서로 다름 |
| 연구·실험 운영 | SwarmEvolve, ReproBridge | 저자 보고 개선; 계산량·오염·구축비 감사 필요 |
| 개발 워크플로 | Copilot 리뷰·텔레메트리, PR 미리보기 | 관측성과 UI 개선; 생산성·정확도 입증은 아님 |
| 기업 응용 | Box, Claude 금융, Airbnb | 발표·베타 계획·미래 출시 혼재 |
| 계산·전력 | Vera, 메모리 공동설계, 양자/HPC, HVDC | 기술 공개·계획·MOU; 상용 가동을 일괄 주장할 수 없음 |
| 자본·사업 | Dropbox 인수 계획, Agility 자금, Brightmind 목표, 카카오 재편 | 종결·수령·결성·주주승인 여부가 핵심 |
| 보안·정책 | METR 검토, Hacktron 협력, EU 교육·DSA | 위험 판단의 불확실성, 협력 성과, 예비·최종 절차 구분 필요 |

## 6 반증·과장·재현성 감사

### 벤치마크 감사

- GPT-6 Cyber
  - 과제: 지정 취약점 악용, 소스코드 없는 웹 취약점 발견, 허가 범위 준수.
  - 기준선: ExploitGym·범위 준수는 GPT-5.6 Cyber, 웹 탐색은 GPT-6 Astra.
  - 지표: ExploitGym 48.5% 대 32.1%, 웹 취약점 recall 40.3% 대 32.0%. 범위 밖 악용은 배포 지침 없이 0.07%, 지침 적용 시 관측 0%.
  - 조건: 공급사 원격 표적·블랙박스·의도적 보조 honeypot 평가.
  - 공개·오염: 표본수·불확실성·전체 실행 예산·훈련 오염 통제는 확인되지 않았다. 평가셋·채점기·정책·모델 변경은 역사적 비교를 제한한다.
  - 독립 재현·반증: 헤드라인 결과의 독립 재현은 미확인. 별도 Irregular 평가 요약에서는 Cyber 90/288, Astra 96/288이며 최고난도 15개와 완전 강화 표적에서는 성공하지 못했다. 외부 시험 존재와 헤드라인 재현은 다르다. 관측 위반 0%는 안전 보장이 아니다.
  - 보충 <br class="report-field-break" />출처: [deploymentsafety.openai.com](https://deploymentsafety.openai.com/gpt-6-cyber)

- SwarmEvolve
  - 과제·기준선: 21개 수학·과학계산 프로그램 탐색, 다른 진화 탐색 프레임워크 및 일부 AlphaEvolve 해법.
  - 지표·조건: 최고 평균 점수와 타 프레임워크 60분 수준에 도달하는 중앙시간 3–8분을 저자가 보고했다. 라운드별 수백 잠재 에이전트·KV 캐시 교환, 일부 Qwen3 8B 사용이다.
  - 공개·오염: 하드웨어·전체 기준선 구성·계산량 정합·점수 정의·오염 통제 미확인.
  - 독립 재현: 미확인. 속도 우위는 계산 예산이 맞아야 산업적 의미를 판단할 수 있다.

- Scientist World
  - 과제·기준선: 논문 기반 실행 연구, 원 논문의 재현 방법과 일부 프런티어 모델 비교.
  - 지표·조건: 환경 1,000개, 추적 6,400시간, 구성된 평가에서 인간 연구 기준선 초과 74%, 소형 모델 아이디어 생성 158% 개선을 저자가 주장한다.
  - 공개·오염: 모델·예산·채점·158%의 분모 미확인. 원 논문 노출, 기준선 재현 충실도와 자원 정합을 확인해야 한다.
  - 독립 재현: 미확인. 74%를 과학 전반의 인간 초월률로 읽을 수 없다. 실행 자산도 별도 검증되지 않았다.

- ReproBridge
  - 과제·기준선: ML 실험 재현, 원시 코드와 정리된 연구 산출물 비교.
  - 지표·조건: 성공률 76.4%→92.6%, 후속 API 지출 평균 19.7% 감소, 모델 간 성공률 격차 21.6→3.9%p. 36개 논문·387개 실험·1,029개 과제, 과제당 인간 검증 참조 점수 5개, 모델 4개와 새 세션·별도 Auditor를 사용했다.
  - 공개·오염: 모델명·허용 오차·산출물 구축 비용·오염 통제 미확인.
  - 독립 재현: 미확인. 내부 Auditor와 새 세션은 외부 독립 재현이 아니다. 후속 비용 절감이 전체 비용 절감을 뜻하지 않는다.

- ToyBlocks
  - 과제·기준선: 블록 조작·공간 일반화·장기 계획·search-and-spell. 공간 비교에는 ManiFlow·pi0.5·MolmoAct 2, 스킬 설명 비교에는 기본·인간 작성 설명을 썼다.
  - 지표·조건: search-and-spell 성공률 기본 24%, 인간 작성 36%, 에이전트 학습 설명 63%. 최대 8개 블록의 3글자 목표이며 장면 절반은 실행 불가능하다.
  - 공개·오염: 전체 설정·오염 통제 미확인. 글 본문과 시연 캡션의 프런티어 모델 표기가 불일치한다.
  - 독립 재현: 미확인. 통제 시뮬레이션 결과를 실제 로봇 신뢰성으로 확대할 수 없다.

- Open ASR Leaderboard
  - 과제·기준선: 자발적 영어 대화의 억양별 음성인식 평가 확장. 새 모델 비교 결과는 없다.
  - 지표·조건: 이집트 억양 1.34시간, 나이지리아 억양 1.55시간. 비공개·대소문자·구두점·비유창성 보존 전사다.
  - 공개·오염: 비공개 자료는 게임화 억제 목적이지만 오염 감사 결과가 아니며 공개 재현을 제한한다. 동적 순위표도 추출 확인되지 않았다.
  - 독립 재현: 미확인. 데이터 분량은 모델 정확도 지표가 아니다.

- NVIDIA Vera
  - 과제·기준선: 에이전트 지원 CPU 실행, 공급사가 지칭한 최고속·최고효율 x86 CPU 각각과 비교.
  - 지표·조건: 에이전트/와트 1.6배와 속도 2배, 100MW 데이터센터 비교 설명.
  - 공개·오염: CPU 모델·작업 정의·전력 산정·전체 구성 미공개 또는 추출 미확인. 오염 통제도 미확인.
  - 독립 재현: 미확인. 서로 다른 비교군의 수치를 하나의 일관된 우위로 묶을 수 없다.

- NVIDIA 메모리 공동설계
  - 과제·기준선: 도구 호출 공백·증가하는 컨텍스트를 포함하는 AgentX 코딩 세션 재생, GB300 NVL72 대 Vera Rubin NVL72.
  - 지표·조건: 사용자당 160 tokens/s에서 MW당 처리량 최대 30배, GPU당 HBM 약 288GB.
  - 공개·오염: 실행 가능한 전체 구성·오염 통제 미확인. 별도 개요의 사용자당 125 tokens/s·달러당 처리량·약 3% HBM 증가는 다른 조건이다.
  - 독립 재현: 미확인. 전력·가격 분모와 사용자 속도를 섞으면 안 된다.

- Box Content Retrieval
  - 과제·기준선: 기업 콘텐츠 검색. 기준선 미공개.
  - 지표·조건: NVIDIA 임원 인용으로 답변 4배 빠름, 오류 20% 감소, 토큰 90% 감소. 데이터·장비·표본·평가 절차 미공개.
  - 공개·오염: 오류 정의와 오염 통제 미확인. 과거 Nemotron 성적은 이 통합의 성능 증거가 아니다.
  - 독립 재현: 미확인. 향후 제품의 공급사 귀속 주장으로만 취급한다.

- METR R&D 가속 검토
  - 과제·기준선: 완전 대체·2배 가속 경고선 판단, 과거 발전 추세와 AI 미사용 반사실 비교.
  - 지표·조건: 한 선행지표 약 1.97배, 방법에 따라 1.3–2.8배. 확장 AECI는 같은 모델군에서 약 1.9배, 이전 자료에서는 약 1.5배다.
  - 공개·오염: 비공개 자료 접근을 포함하는 외부 검토이나 Anthropic에 편집권이 있었고 방법 논의 일부가 삭제됐다. 포화 벤치마크·추세 적합·모델 선택·오염 통제 불확실성이 남는다.
  - 독립 재현: 공개 재현 미확인. 외부 검토를 경고선 초과 확정이나 완전 공개 재현으로 바꾸어 읽지 않는다.

### 비벤치마크 주장과 경계

- **Omni의 길이·가격은 제품 사양이다.** 일관성·음성·카메라 제어는 선택 시연에 근거한 공급사 주장으로, 정량 품질 비교가 아니다.
- **Copilot addressed rate는 수정 완료·정확성·생산성 점수가 아니다.** 텔레메트리 결측 인원도 중복 합산하면 안 된다.
- LeRobot·PR 미리보기·양자 플랫폼·Hacktron 협력·EU 정책·기업 거래·카카오 재편·HVDC MOU에는 비교 성능 입증을 부여하지 않았다.
- **Agility의 기존 운영·매출은 자금조달 완료 증거가 아니다.** 조건부 계약과 계획 자금은 수령액·확정 매출이 아니다.
- **국내 주가 하락은 관측이고 규제 우려는 해석이다.** 실제 미국 규제·수주 취소·메모리 매출 감소는 확인되지 않았다.
- **날짜만 있는 11월 6일 공개 4건은 정확한 컷오프 이전 여부가 미확인이다.** 나머지 날짜 전용 기록도 정확한 시간창 내 공개를 확정할 수 없다.
- **C급 후보는 핵심 신호와 정본 원장에서 제외했다.** 범위 밖 논문·회고·익명 인수설로 수량을 채우지 않았다.

## 7 다음 확인 일정

아래 시점은 확인 우선순위이며, 명시된 계획 외에 확정 발표 일정을 뜻하지 않는다.

| 확인 시점 | 대상 | 필요한 증거 |
|---|---|---|
| 다음 편집 주기 | 날짜 전용 공개, 특히 11월 6일 4건 | 원문 시각·시간대·수정 이력으로 컷오프 관계 확인 |
| 다음 편집 주기 | Cyber·Vera·메모리·Box | 평가 예산·장비·분모·오염 통제·독립 결과 |
| 다음 편집 주기 | 연구 논문 3건·ToyBlocks·ASR | 코드·데이터·라이선스·고정 리비전·실행 결과 |
| 주말 배포 이후 | GitHub PR 미리보기 | 계정별 접근·배포 완료 여부; GA와 구분 |
| 후속 공개 시 | METR·Hacktron·EU DSA | 방법 추가 공개·수정 확인·당사자 답변·최종 절차 |
| 후속 공개 시 | Infineon–SoluM·국내 반도체 | 제품 규격·출하·고객·실측 효율, 거래소 종가·실제 규제 |
| 2026년 4분기 종결 계획 확인 | Dropbox–Tigris | 투자자 공시의 거래 종결·대가·승인 |
| 거래·결성 공시 시 | Agility·Brightmind | 순유입 자금·조건부 계약 이행·펀드 확정 약정 |
| 2027년 초 계획 확인 | Box | 실제 제공·지역 조건·API 문서 |
| 2027-01-15 예정 | 카카오 | 주주총회 의결 및 변경 공시 |
| 2027-02-01 예정 | 카카오 | 실제 분할과 거래소 심사 후속 절차 |
| 2027년 상반기 목표 확인 | Airbnb | 출시·지원 시장·조치 권한·실패 시 사람 연결 |

## 8 Coverage Audit

### 완료·집계 기준

10명 전원의 최종 연구 결과가 번들에 존재한다. 완료는 연구 결과 제출을 뜻하며, 검색의 완전성이나 모든 주장의 독립 검증 완료를 뜻하지 않는다.

후보 발견 총수는 번들에 일관되게 제공되지 않았다. 아래 ‘1차/2차’ 숫자는 search_audit가 있는 경우 그 필드의 수용 사건 수를 사용하며, 검색에서 발견한 원시 후보 전체 수로 해석하지 않는다. 해당 필드가 없는 연구자는 2차 수를 추정하지 않았다. 검증 수는 연구자가 채택한 사건 수, 포함 수는 전역 중복 제거 후 해당 영역에 배정한 정본 수다.

| Category | Terminal completion | 1차 / 표적 2차 | 검증 | 정본 포함 | 3건 대비 부족 |
|---|---|---|---:|---:|---:|
| Frontier Models | 완료 | 2 / 0 | 2 | 2 | 1 |
| AI Research | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 3 | 0 |
| Agents/Developer Tools | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 3 | 0 |
| Open Source/Repos | 완료 | 1 / 2 | 3 | 3 | 0 |
| Chips/Compute/Infrastructure | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 3 | 0 |
| Enterprise/Applications | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 3 | 0 |
| Funding/M&A/Business | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 3 | 0 |
| Safety/Evaluation/Security | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 2 | 1：跨영역 중복 병합 |
| Policy/Geopolitics | 완료 | 2 / 0 | 2 | 2 | 1 |
| Korea Exposure | 완료 | 3건 확인 / 별도 감사값 없음 | 3 | 3 | 0 |

### 영역별 탐색·부족 설명

- **Frontier Models: search_audit는 initial_count 2, targeted_count 0, verified_count 2, shortfall 1이다.** 1차는 공식 모델 색인·기술매체를 확인했고, 2차는 Anthropic·Meta·Qwen·DeepSeek·Hugging Face·arXiv 등으로 확대했으나 추가 적격 사건을 확보하지 못했다. Studio는 배포 플랫폼, DeepJIT는 업데이트 날짜만으로 중대 모델 출시를 입증하지 못했고, FrontierPhysics는 시간창 밖이다. 무관한 검색 응답과 초기 Meta 추출 실패가 완전성을 제한한다. 후보 전체 수는 미제공이며 부족을 ‘다른 사건 부재’로 단정하지 않는다.

- **AI Research: 서로 다른 논문 공개 3건을 정확한 제출 시각으로 검증·포함했다.** 별도 두 차례 search_audit는 없다. arXiv 직접 확인은 성공했으나 OpenAI·DeepMind 색인 추출은 429로 제한됐다. 수량 부족은 없지만 논문군 편중·전체 본문·실행 자산 확인 공백은 남는다.

- **Agents/Developer Tools: 서로 다른 GitHub 변경 3건을 검증·포함했다.** 별도 2차 감사값은 없다. Anthropic 추출 429, 기술매체 색인의 상대 시각만 있는 후보는 채택하지 않았다. 11월 3·4일 항목과 AI 관련성이 불명확한 비밀 탐지 업데이트를 제외했다. 단일 공식 출처군 편중이며 PR 화면은 일반 개발도구다.

- **Open Source/Repos: search_audit는 initial_count 1, targeted_count 2, verified_count 3, shortfall 0이다.** 1차 LeRobot에 이어 2차 직접 추출로 ToyBlocks·ASR 평가 통합을 확보했다. vLLM·SGLang의 확인된 최신 릴리스는 11월 2일, 일부 llama.cpp 메타데이터는 시각·연도·시간대 해석이 불충분해 제외했다. Cosmos·Phonon은 이전 공개의 설명·회고다. ASR는 공개 데이터셋이 아닌 인접 평가 인프라다. 후보 총수는 미제공이다.

- **Chips/Compute/Infrastructure: 별도 두 차례 감사값 없이 공개 3건을 검증·포함했다.** NVIDIA 메모리 기사 2개는 한 사건이다. NVIDIA·AMD·SK hynix 직접 탐색을 사용했으나 이전 날짜 기사와 비중대 업데이트를 제외했다. 두 건은 NVIDIA 공급사 성능 주장, 한 건은 인접 양자/HPC 연구 플랫폼이므로 독립 성능·AI 직접성의 한계를 남긴다.

- **Enterprise/Applications: 귀속 가능한 보도 3건을 검증·포함했으며 별도 표적 2차 수는 없다.** 공식 뉴스룸도 탐색했으나 채택 사건은 TechCrunch에 집중됐다. Salesforce 11월 4일·Microsoft 10월 22일 기사는 제외했다. 검증된 것은 발표·일정이고 실제 제공·성능 검증과 다르다.

- **Funding/M&A/Business: 귀속 가능한 공개 3건을 검증·포함했으며 별도 표적 2차 수는 없다.** Reuters·OpenAI·연합뉴스·일부 CNBC 추출 429로 교차확인이 제한됐다. Clutch는 익명 협상 보도로 보류, OpenAI IPO 준비 보도는 원 발언 시각이 불명확해 제외했다. Brightmind는 모금 개시가 아닌 보도된 방침 공개, Agility의 과거 매출은 배경이다.

- **Safety/Evaluation/Security: 연구자는 3건을 검증했으나 Cyber를 Frontier Models에 병합해 이 영역 정본은 2건이다.** 이는 탐색 실패에 따른 부족이 아니라 중복 제거다. 별도 두 차례 search_audit는 없다. Linux 취약점 공개는 11월 4일이라 제외했고, METR 동반 평가는 같은 공개 묶음으로 합쳤다. 이메일 유출·학교 소송 단서는 허용된 날짜·출처 확인 부족으로 승격하지 않았다.

- **Policy/Geopolitics: search_audit는 initial_count 2, targeted_count 0, verified_count 2, shortfall 1이다.** 1차 EU 공식 문서 2건 이후 2차에 Reuters·미 정부·BIS·FTC·EU·한국 규제 등을 재탐색했다. Reuters DataDome·Commerce Cloudflare·무관한 검색 응답·BIS 경로 실패가 제약이었다. FTC 광고 사건은 AI 특정성 부족, EIC는 AI 배분 근거 부족, 반도체 연합은 구체적 출범이 11월 4일이라 제외했다. 후보 전체 수는 미제공이며 전 세계 적격 사건의 부재를 뜻하지 않는다.

- **Korea Exposure: 정확한 창내 보도 시각을 가진 서로 다른 3건을 검증·포함했다.** 별도 2차 감사값은 없다. 연합뉴스·전자신문의 두 보도군을 사용했고 공시 원문·거래소 원자료를 직접 확인한 A급은 아니다. 11월 6일 오후 후보, 정확히 06:00인 교육부 기사, 10월 30일 가동한 주차시스템을 제외했다. 수량 부족은 없다.

### 중복 제거·근거 등급·시간 감사

- **연구자 채택 항목 28건에서 GPT-6 Cyber의 서로 다른 ID 2개를 동일 사건으로 병합했다.** 정본은 Frontier Models에 배정하고 안전 영역에서는 교차참조만 남겼다.
- LeRobot 발표·GitHub 릴리스, NVIDIA 메모리 기술 글·기업 개요, METR 동반 평가는 각각 별개 사건으로 늘리지 않았다.
- **정본 27건 중 <br class="report-field-break" />Evidence A 15건, B 12건이다.** C급은 핵심 원장에 포함하지 않았다.
- **시각까지 확인된 정본은 연구 논문 3건과 Korea Exposure 3건이다.** 나머지 21건은 날짜 전용 근거이며 정확한 시간창 포함 여부는 미확인이다.
- **날짜가 11월 6일인 ToyBlocks·ASR·Hacktron·TikTok 항목은 연구 번들의 중첩 계약에 따른 조건부 시간 적격성이다.** 정밀 시간 검증 통과로 표시하지 않는다.
- 최종 정본 포함 수는 Frontier 2, Research 3, Developer Tools 3, Open Source 3, Infrastructure 3, Enterprise 3, Business 3, Safety 2, Policy 2, Korea 3이다.

### Watchlist (미확인 후보)

- 후보: FrontierPhysics의 프런티어 에이전트 물리 연구 평가 제안 (미포함 사유: <br class="report-field-break" />Evidence C; 제출 시각이 2026-11-05 03:56:22 KST로 시작 시각 이전이며 일일 목록 등재가 새 공개를 입증하지 않음 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.06910))
- 후보: NVIDIA Cosmos 3 시뮬레이션 체크포인트 해설 (미포함 사유: <br class="report-field-break" />Evidence C; 11월 2일에 이미 공개된 체크포인트·레시피의 창내 해설이며 별도 신규 릴리스 미확인 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation))
- 후보: Gradium·Hugging Face Phonon 공개 가중치 TTS 회고 (미포함 사유: <br class="report-field-break" />Evidence C; 본문이 2주 전 모델 공개의 회고임을 명시하며 창내 별도 저장소 출시 미확인 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/phonon-tts))
- 후보: Palo Alto Networks의 Clutch Security 인수 협상 보도 (미포함 사유: <br class="report-field-break" />Evidence C; 익명 소식통 기반이며 회사 확인·서명·종결 미확인 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/05/palo-alto-networks-in-talks-to-buy-ai-agent-security-startup-clutch-for-500m/))
- 후보: EU 공공부문 AI 도구상자 (미포함 사유: <br class="report-field-break" />Evidence B; 색인은 11월 5일이나 원문은 11월 4일로 창 밖이며 새 공개를 입증하지 못함 / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/ai-toolbox-supports-public-administrations-put-apply-ai-strategy-practice))

Watchlist는 정본·핵심 신호·포함 집계에서 제외했다.

- **수록 사건 수:** 27
