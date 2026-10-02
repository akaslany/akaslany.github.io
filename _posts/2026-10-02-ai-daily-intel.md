---
layout: post
title: "AI Daily Intel — 2026-10-02"
date: 2026-10-02 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-10-02/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-10-02
- **기준 시각:** 2026-10-02T06:00:00+09:00
- **수집 구간:** [2026-10-01T06:00:00+09:00, 2026-10-02T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 23

## 1 오늘의 AI 한 문장

AI의 경쟁축이 모델 자체의 성능에서 에이전트의 실행·검증·기업 업무 통합으로 넓어지고 있지만, 이번 번들이 확인한 것은 주로 발표와 공개 자료이며 독립 재현, 생산성 개선, 매출 효과까지 입증한 사례는 제한적이다.

편집 원칙: 제공된 번들만 사용했다. Evidence A는 공식·정부·원논문 등 일차 문서, B는 실명 발언이나 기업 발표에 귀속되는 보도, C는 본문·조건 검증이 부족한 후보를 뜻한다. A도 성능 주장의 독립 검증을 의미하지 않는다.

정확한 시각이 있는 자료는 지정된 반개구간으로 판정했다. 10월 1일 날짜만 있는 자료는 번들에 명시된 날짜 중첩 예외를 적용하되, 실제 공개 시각은 미확인으로 남겼다. 10월 2일 날짜만 있는 자료는 06:00 이전 공개를 입증하지 못하므로 보수적으로 제외했다. 논문 제출 시각과 일반 공개 시각도 구분한다.

## 2 핵심 신호 5

- 제한적 배포가 프런티어 모델 출시의 핵심 조건이 됐다. Google의 Gemini 4 Argon은 Fairwind를 통한 단계적 접근과 내부·Wiz 사용이 보고됐지만 일반 공개 API, 한국 참여 자격, 독립 성능 검증은 미확인이다. Evidence A, 공식 발표를 확인한 번들 기준.
  출처: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/

- 에이전트가 GUI와 코드 기반 오케스트레이션으로 확장됐다. Copilot의 desktop computer use와 dynamic workflows는 서로 다른 공개 프리뷰다. 앱 제어 승인·운영체제 권한과 단계별 검토 지점이 중요하며, 실제 안정성·비용 절감은 검증되지 않았다. Evidence A.
  출처: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps
  출처: https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app

- 금융권 AI 확장은 기존 운영 사례에 연결되고 있다. Barclays는 2025년부터 운영한 지식 도우미의 1만6천 명 이상 채택과 하루 약 12만 건 이메일 처리를 공개했다. 그러나 연말 개발자 50%의 Claude Code 채택은 목표이며, 생산성 개선·계약 매출·규제 승인은 별도다. Evidence A.
  출처: https://www.anthropic.com/news/barclays-scales-claude

- 공개 학습 인프라의 성능 개선은 모델 지능 개선과 다르다. Olmo-core 3는 코드가 공개된 MoE 학습 스택이며 B300 기반 처리량·메모리 측정치를 제시한다. 1.2T 구성의 random routing과 2.38T 단기 용량 시험을 학습 완료 모델로 읽어서는 안 된다. Evidence A.
  출처: https://huggingface.co/blog/allenai/olmocore3

- 합법적인 검색 도구와 이미지 반환 자체가 유출 경로가 될 수 있다. LLMLeak와 멀티모달 RAG 추출 논문은 각각 URL을 통한 비밀 전송과 누적 이미지 회수를 보고했다. 실제 운영 침해가 확인된 것은 아니지만, 도구 승인만으로 충분하다는 가정에 반례를 제시한다. Evidence A, 저자 보고·독립 재현 미확인.
  출처: https://arxiv.org/abs/2610.01768
  출처: https://arxiv.org/abs/2610.01871

## 3 영역별 AI 브리프

일곱 상태는 원자료의 announcement, availability, code, independent_reproduction, production, revenue, regulatory를 각각 보존한다. yes는 해당 등급의 출처에서 확인됐다는 뜻이며 직접 실행·회계 감사·독립 검증을 뜻하지 않는다. 논문의 availability는 조사 시 접근 가능했다는 의미로, 제출 순간 공개까지 보장하지 않는다.

중복 이벤트는 아래 한 영역에만 정본을 배치했다. 다른 영역의 관련성은 Coverage Audit에서 설명하며 포함 수에 중복 가산하지 않는다.

### Frontier Models

  내용: Google이 Gemini 4 Argon을 발표했다. 기사 시각은 9월 30일 16:43 PDT로 창 안에 해당한다. Fairwind를 통한 제한적 배포이며 일반 공개와 구분된다. Google 내부·Wiz 사용이 보고됐다.
  Evidence: A — 번들이 확인한 공식 발표가 핵심 근거이며 아래 보도 시각으로 창을 판정했다.
  출처 URL: https://techcrunch.com/2026/09/30/google-releases-gemini-4-argon-called-its-most-powerful-model-yet/
  일차 출처 URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
  한국 연결: 국내 기업의 개발·보안 업무에 잠재적으로 관련되지만 한국 제공 및 Fairwind 참여는 미확인이다.
  다음 확인: 공개 API, 시스템 카드, 벤치마크 설정과 한국 조직 자격.

편집 후 부족: 정본 1건. 원연구의 검증 5건 중 학습 인프라, 결정 모델, 문체 평가, 은행 배포는 각각 더 적합한 영역으로 이동했다. 새로운 범용 프런티어 모델 3건을 확보한 것으로 해석하지 않는다.

### AI Research

  내용: Matthew Schwartz가 검증 가능한 정량 과학을 위한 BootLoops를 소개했다. 공개 저장소·설치 안내·자체 시험이 확인됐지만 과학적 발견과 속도 사례는 저자 보고다. Anthropic이 공식 지원하는 제품은 아니다.
  Evidence: A — Anthropic에 실린 게스트 연구 글과 공개 저장소.
  출처 URL: https://www.anthropic.com/research/claude-shaped-science
  코드 URL: https://github.com/BootLoops-ai/bootloops/tree/66b680ce742e654cfe86da4f072a69061fe182b1
  한국 연결: 정량 과학 연구실의 검증 워크플로에 잠재적으로 관련되며 국내 도입은 미확인이다.
  다음 확인: 격리 환경 수용 시험과 개별 과학 결과의 외부 재현.

  내용: 연구 질문을 진전시킬 선행 논문 검색을 평가하는 ScholarCatalyst가 제출됐다. 제출 시각은 10월 1일 17:59:47 UTC다. 저자 보고에서 같은 검색기를 쓰는 에이전트 검색이 임베딩 검색보다 낮은 Recall@20을 기록했다.
  Evidence: A — 원논문 제출 기록 및 초록.
  출처 URL: https://arxiv.org/abs/2610.02202
  한국 연결: 이름만으로 국적·기관 참여를 추정하지 않는다. 소속과 국내 참여는 미확인이다.
  다음 확인: 전체 평가 프로토콜, 데이터·코드, 시간 필터와 학습 오염 통제.

  내용: 손실 없는 시각 관측 기억을 유지하는 VISTA 기술 보고서가 10월 1일 17:59:45 UTC에 제출됐다. 8월 선행 공개가 있어 새 발명 발표가 아니라 이번 기술 보고서 제출로 한정한다.
  Evidence: A — 원논문 제출 기록 및 초록.
  출처 URL: https://arxiv.org/abs/2610.02200
  한국 연결: 멀티모달 에이전트 연구에 잠재적으로 관련되지만 국내 기관·배포 연결은 미확인이다.
  다음 확인: 8월 대비 변경점, 코드, 비공개 환경과 동일 추론 예산의 비교.

### Agents/Developer Tools

  내용: GitHub가 macOS·Windows의 Copilot CLI와 앱에 데스크톱 제어 공개 프리뷰를 발표했다. 클릭·입력·스크롤 등 GUI 작업을 지원한다고 명시했으며 앱 제어 승인과 운영체제 권한이 필요하다.
  Evidence: A — 공식 변경 기록.
  출처 URL: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps
  한국 연결: 국내 개발팀의 레거시 GUI 작업에 잠재적으로 유용하나 한국 계정 접근은 미확인이다.
  다음 확인: 승인 경계, 조직 차단 설정, 지원 버전과 실패 복구.

  내용: Copilot CLI·앱·SDK에서 코드로 순차·병렬 에이전트 단계, 구조화된 결과 전달, 교차 검증과 검토 지점을 정의하는 공개 프리뷰가 발표됐다. CLI는 실험 기능 활성화가 필요하다.
  Evidence: A — 공식 변경 기록.
  출처 URL: https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app
  한국 연결: 코드 리뷰·릴리스·장애 조사 자동화에 잠재적으로 관련되며 국내 운영 사례는 없다.
  다음 확인: 병렬 단계 실패 처리, 관측성, SDK 호환성과 사용 비용.

  내용: AWS가 하이브리드 에이전트의 모델 라우팅·도구 선택 등에 쓰는 소형 결정 모델과 학습 자료를 공개했다. Qwen3.5-2B의 언어모델 헤드를 pointer head로 교체하며 문장을 생성하지 않는다.
  Evidence: A — 공식 발표, 번들이 확인한 저장소와 체크포인트.
  출처 URL: https://strandsagents.com/blog/introducing-strands-decider/
  한국 연결: 로컬·하이브리드 에이전트에 잠재적으로 관련되지만 한국어 평가와 실제 비용 절감은 미확인이다.
  다음 확인: 저장소·모델 카드 수치 불일치 해소와 한국어 실서비스 분포 평가.

### Open Source/Repos

  내용: Ai2가 MoE 학습 스택 Olmo-core 3를 발표했다. 공개 코드는 확인됐지만 정확한 버전 3 태그는 추출 자료에서 확인되지 않았다. 미래 Olmo 모델을 위한 인프라이지 학습 완료된 초대형 모델 공개가 아니다.
  Evidence: A — 공식 발표와 공개 저장소.
  출처 URL: https://huggingface.co/blog/allenai/olmocore3
  코드 URL: https://github.com/allenai/olmo-core
  한국 연결: 국내 MoE 연구팀에 관련되나 B300 측정치를 다른 클러스터로 일반화할 수 없다.
  다음 확인: 정확한 커밋·릴리스, 지속 학습, 동일 입력·하드웨어의 외부 측정.

편집 후 부족: 정본 1건. AstaBrief와 llama.cpp 결정 모델 공지는 10월 2일 날짜만 있어 마감 이전 공개를 확인하지 못했다. 날짜를 바꾸거나 일반 공개 여부를 시간 증거로 대체하지 않았다.

### Chips/Compute/Infrastructure

검증 통과 이벤트 없음.

초기 검색과 후속 공식 아카이브 추출 모두 창 안의 사건별 근거를 확보하지 못했다. NVIDIA 추출은 6월, AMD 추출은 8~9월 자료를 보여 줬고 The Register는 429로 실패했다. 이는 검색·수집 실패이며 실제 사건 부재의 증거가 아니다. LG 냉각 투자와 Olmo-core는 각각 Korea Exposure와 Open Source/Repos에 정본을 두어 중복 계산하지 않았다.

### Enterprise/Applications

  내용: Shopify가 Sidekick과 실제 테마 파일을 수정하며 렌더를 확인하는 Canvas를 발표했다. 향후 며칠 동안 배포 예정이므로 창 안의 계정 제공은 미확인이다. 초기 번역·markets·서드파티 테마 등의 제약이 보도됐다.
  Evidence: A — 공식 발표; 번들 내 귀속 가능한 추가 보도.
  출처 URL: https://www.shopify.com/news/introducing-canvas
  한국 연결: 해외 판매 Shopify 상점에 관련되지만 초기 번역·시장 지원 공백을 확인해야 한다.
  다음 확인: 계정 배포, 지원 테마, 롤백과 실제 판매자 운영.

  내용: Barclays의 Claude 협력 확대가 발표됐다. 기존 지식 도우미는 2025년부터 운영돼 1만6천 명 이상이 채택했고, Global Markets 이메일 처리는 하루 약 12만 건으로 공개됐다. 개발자 채택 50%는 2026년 말 목표다.
  Evidence: A — Anthropic 공식 발표와 Barclays 임원 실명 발언.
  출처 URL: https://www.anthropic.com/news/barclays-scales-claude
  한국 연결: 국내 금융권의 업무·모델 위험 관리 참고 사례이며 한국 배포·규제 승인은 없다.
  다음 확인: Barclays 자체 확인, 달성 채택률, 업무 성과와 상업 조건.

  내용: TechCrunch가 OpenAI의 의류·액세서리 가상 착용 및 Favorites 글로벌 출시를 보도했다. 사진 기반 시각화와 제품 저장 기능이며 실제 계정 시험, 착용 정확도와 판매 전환은 확인되지 않았다.
  Evidence: B — 회사 발표에 귀속되는 기술 매체 보도.
  출처 URL: https://techcrunch.com/2026/10/01/chatgpt-can-now-virtually-try-on-clothes-for-you/
  한국 연결: 패션 수출·쇼핑에 관련될 수 있지만 한국 계정·현지화·판매자 범위는 미확인이다.
  다음 확인: 한국 접근, 이미지 보관·동의, 시각 충실도와 거래 효과.

### Funding/M&A/Business

  내용: Satlyt의 800만 달러 시드 투자 유치가 창업자 실명 발언으로 보도됐다. 위성에서 AI를 실행하는 소프트웨어 기업이며 10월 1일 예정 발사를 완료한 것으로 간주하지 않는다.
  Evidence: B — TechCrunch의 창업자 인터뷰.
  출처 URL: https://techcrunch.com/2026/10/01/satlyt-founded-by-a-former-google-and-spacex-product-manager-raises-8m-to-run-ai-on-satellites/
  한국 연결: 국내 위성 운영·우주 컴퓨팅 공급망에 잠재적으로 관련되며 직접 참여는 없다.
  다음 확인: 투자자·거래 종결, 발사 결과와 고객 배포.

  내용: Photon의 450만 달러 시드 라운드가 보도됐다. 기존 오픈소스·유료 호스팅과 실명 고객을 바탕으로 운영·매출 상태를 유지하지만 개발자 4만 명 이상과 4개월 매출 10배는 회사 주장이다. 절대 매출은 없다.
  Evidence: B — CEO 실명 발언과 투자자·고객을 명시한 보도.
  출처 URL: https://techcrunch.com/2026/10/01/photon-held-a-funeral-for-mobile-apps-now-it-has-4-5m-to-help-replace-them-with-agents/
  한국 연결: 메시징 에이전트 개발에 잠재적으로 관련되지만 KakaoTalk·한국 고객·한국 투자는 미확인이다.
  다음 확인: 투자자 확인, 저장소·서비스, 절대 매출과 유지율.

편집 후 부족: 정본 2건. Barclays는 Enterprise/Applications로 통합했다. Albertsons는 연구자 간 신규성 판정이 충돌해 제외했다. 기존 운영을 설명하는 10월 1일 사례 글을 신규 투자·계약으로 재분류하지 않았다.

### Safety/Evaluation/Security

  내용: LLMLeak 논문은 인터넷 통신이 제한된 로컬 악성 구성요소가 비밀을 넣은 URL을 작업 자료로 제시해 LLM의 웹 검색 도구를 유출 경로로 삼는 공격을 보고했다. 제출 시각은 10월 1일 14:25:55 UTC다.
  Evidence: A — 원논문 기록과 저자 보고.
  출처 URL: https://arxiv.org/abs/2610.01768
  한국 연결: 기밀 로컬 자료와 인터넷 도구를 함께 쓰는 국내 기업의 위험 가설이며 국내 사건은 없다.
  다음 확인: 전체 방법론, 모델별 결과, 공개·신고 절차와 목적지 필터 시험.

  내용: 이미지 반환형 멀티모달 RAG에서 회수 이미지를 다음 질의에 재사용하는 적응형 데이터 추출 논문이 제출됐다. 제출 시각은 10월 1일 15:30:06 UTC다. 모든 멀티모달 도우미에 적용되는 결과는 아니다.
  Evidence: A — 원논문 기록과 저자 보고.
  출처 URL: https://arxiv.org/abs/2610.01871
  한국 연결: 의료 영상·문서 스캔 RAG의 잠재 위험이며 한국 피해나 배포는 확인되지 않았다.
  다음 확인: 저장소 크기, 권한 가정, 대조군, 매칭 임계값과 질의 제한 민감도.

  내용: 일반적인 oracle 보조 AI 계산의 영지식 검증 한계를 다룬 이론 논문이 제출됐다. 서명된 oracle 답변을 가정한 긍정적 구성도 제시한다. 제출 시각은 10월 1일 16:30:16 UTC다.
  Evidence: A — 원논문 기록과 이론 주장.
  출처 URL: https://arxiv.org/abs/2610.01995
  한국 연결: 기밀 AI 감사 설계에 개념적으로 관련되지만 국내 구현·법적 효과는 없다.
  다음 확인: 형식적 가정, 외부 증명 검토와 실용 구현 비용.

  내용: Graphite가 기존 문체 연구에 Claude Opus 5.5를 추가했다. Opus 5보다 인간 글과의 일부 문체 차이가 줄었다고 보고했지만 이는 9월 모델 출시가 아닌 10월 1일 평가 공개다.
  Evidence: A — 평가 수행기관의 원연구 공개.
  출처 URL: https://graphite.io/five-percent/research/ai-tells-opus-5-5-update
  한국 연결: 출판용 모델 선택에 관련되지만 영어권 결과를 한국어 문체에 전이할 근거는 없다.
  다음 확인: 데이터 재분석, 다른 프롬프트·장르, 동시대 인간 대조군과 한국어 평가.

### Policy/Geopolitics

  내용: 미국 법무부가 Greg Lui의 체포와 GPU 서버 우회 수출 혐의를 발표했다. 검찰은 3억 달러 이상 통제 서버의 중국 전환을 주장한다. 창 안의 사건은 체포·공개이며 9월 29일 기소나 2023~2024년 선적이 아니다.
  Evidence: A — 정부 집행 발표.
  출처 URL: https://www.justice.gov/opa/pr/california-man-arrested-smuggling-more-300-million-export-controlled-computer-servers-china
  한국 연결: 미국 통제 부품을 취급하는 국내 유통·물류의 준법 참고 사례이며 한국 관련자는 없다.
  다음 확인: 법원 기록·BIS 지침. 혐의는 유죄 판결이 아니고 기존 규정 집행은 신규 규제가 아니다.

  내용: EU와 캐나다가 AI 안전·규제·혁신을 포함한 Digital Dialogue를 열었다. 기존 Digital Partnership 이행을 검토했으며 새 구속력 있는 합의나 규정 제정은 발표되지 않았다.
  Evidence: A — 유럽위원회 공식 발표.
  출처 URL: https://digital-strategy.ec.europa.eu/en/news/eu-and-canada-held-digital-dialogue-advance-cooperation-digital-policy-and-innovation
  한국 연결: EU·캐나다 시장의 거버넌스 정합성 관찰에 관련되며 한국의 의무·약속은 없다.
  다음 확인: 공동 성명, 구체적 안전 협력과 후속 작업 계획.

  내용: 유럽위원회가 2026 SRIP 보고서를 공개하고 AI·반도체·클라우드의 자금·지식 이전·상용화 병목을 지적했다. 2030 R&D 목표를 위한 추가 5,600억 유로 필요 추정은 보고서 귀속 수치이며 예산 배정이 아니다.
  Evidence: A — 정부 보고서 공개 발표.
  출처 URL: https://digital-strategy.ec.europa.eu/en/news/europe-must-scale-research-and-innovation-remain-competitive-new-commission-report-says
  한국 연결: 유럽 협력·조달·산업정책 검토에 관련되지만 직접 수혜나 의무는 확인되지 않았다.
  다음 확인: 방법론과 AI 세부 분석, 실제 예산 승인·입법 진행.

### Korea Exposure

  내용: LG전자가 미국 Virginia의 신규 공장과 평택·창원 라인에 총 1,500억 원 냉각 생산 확대 투자를 발표했다. 미국 생산은 2027년 상반기, 국내 증설은 2026년 말까지 계획이다.
  Evidence: B — LG 발표와 사업 책임자 실명 발언에 귀속되는 ZDNet Korea 보도.
  출처 URL: https://zdnet.co.kr/view/?no=20261001081030
  한국 연결: 국내 기업 및 평택·창원 제조 투자라는 직접 노출이다. 상태의 no는 새 증설 용량 기준이다.
  다음 확인: 투자 집행, 라인 가동, 미국 생산 개시와 고객 주문·매출.

  내용: SEMIFIVE와 Mobilint의 산업용 로봇 AI 반도체 개발 계약이 발표됐다. K-on-device 사업과 연결되며 LPDDR6·PCIe Gen6·UCIe-S 등은 계획이다. 상용 출시·양산·계약 금액은 확인되지 않았다.
  Evidence: B — 회사 발표와 CEO 실명 발언에 귀속되는 ZDNet Korea 보도.
  출처 URL: https://zdnet.co.kr/view/?no=20261001100039
  한국 연결: 국내 ASIC 설계 서비스·AI 칩 IP·정부 기술개발 사업의 직접 연결이다.
  다음 확인: 일차 계약 자료, tape-out, 실리콘·전력 측정과 로봇 통합.

  내용: 삼성전자가 Galaxy Tab S12 Ultra·S12+ 및 Galaxy AI 업무 기능을 발표했다. 한국 출시 예정일은 10월 7일이다. Google AI Pro 6개월 제공과 하드웨어 성능 증가는 발표 사항이지 창 안의 판매 실적이 아니다.
  Evidence: A — Samsung Newsroom 공식 발표.
  출처 URL: https://news.samsung.com/kr/삼성전자-갤럭시-탭-s12-시리즈-공개
  한국 연결: 국내 제조사와 한국 출시 계획이 명시됐다.
  다음 확인: 10월 7일 판매, 한국어 기능, 온디바이스·클라우드 구분과 구독 조건.

## 4 기술→산업 전달경로

- 프런티어 모델 → 제한적 사이버 배포 → 기업 보안·개발 업무: Gemini 4 Argon은 발표에서 제한적 운영으로 이어지는 근거가 있다. 다음 관문은 외부 접근 범위, 안전 구성과 독립 성능 확인이다. 가격 발표만으로 매출을 추정하지 않는다.

- 소형 결정 모델 → 라우팅·도구 선택 → 하이브리드 에이전트 비용 구조: Strands Decider는 코드·체크포인트를 제공했다. 실제 절감은 결정 오류, 재시도, 프런티어 호출 대체율까지 측정해야 한다.

- GUI 제어·워크플로 코드 → 반복 가능한 업무 실행 → 개발 조직 운영: Copilot 프리뷰는 API 없는 앱과 다단계 작업을 연결한다. 승인 정책, 실패 복구, 관측성이 충족돼야 운영 도입으로 넘어간다.

- 시각 피드백·테마 파일 편집 → 상점 제작 → 상거래 운영: Shopify Canvas는 데모보다 실제 플랫폼 파일에 가깝지만 배포와 번역·markets 지원 공백이 상용 전달의 제약이다.

- 모델·검색 통합 → 금융 지식·이메일 처리 → 개발자 채택 확대: Barclays는 기존 운영 근거가 있으나 미래 채택 목표와 업무 개선·매출을 분리해야 한다.

- AI 인프라 지출 → 냉각 제조 투자 → 한국 공급망: LG의 경로는 직접적이지만 현재 단계는 투자 계획이다. 가동과 주문이 확인돼야 공급·매출 신호로 강화된다.

- 로컬 AI 칩 IP → 로봇 ASIC 설계 → 실물 제품: SEMIFIVE·Mobilint는 개발 계약 단계다. tape-out·검증 실리콘·실제 로봇 통합 전에 양산 신호로 취급하지 않는다.

## 5 AI Stack Signal Map

| Stack 층 | 관찰 신호 | 확인된 단계 | 남은 관문 |
|---|---|---|---|
| 전력·냉각·시설 | LG 냉각 제조 확대 | 투자 발표, Evidence B | 신규 용량 가동·주문 |
| 학습 시스템 | Olmo-core 3 | 코드 공개, Evidence A | 버전 고정·지속 학습·외부 측정 |
| 범용 모델 | Gemini 4 Argon | 제한적 접근·운영 보고, Evidence A | 공개 API·안전 구성·재현 |
| 결정·라우팅 | Strands Decider 2B | 코드·체크포인트 공개, Evidence A | 교정 수치 정합성·실서비스 평가 |
| 에이전트 실행 | Copilot GUI·dynamic workflows | 공개 프리뷰, Evidence A | 권한·실패 처리·운영 안정성 |
| 과학·기억 하네스 | BootLoops·VISTA | 코드 또는 보고서 공개, Evidence A | 개별 결과·미공개 환경 재현 |
| 업무·상거래 | Barclays·Canvas·ChatGPT try-on | 기존 운영, 발표 또는 출시 보도 | 달성 채택률·전환·개인정보 통제 |
| 평가·보안 | ScholarCatalyst·Graphite·유출 연구 | 평가 및 논문 공개, Evidence A | 오염·대조군·독립 검증 |
| 자금·사업 | Photon·Satlyt | 투자 보도, Evidence B | 거래 확인·절대 매출·고객 성과 |
| 정책 | 미국 집행·EU 대화·SRIP | 집행 및 문서 공개, Evidence A | 재판·구체적 협력·실제 예산 |
| 한국 단말·엣지 | Tab S12·로봇 ASIC | 제품·개발 발표 | 출시·실리콘·한국어 기능 |

층간 관련성을 표시한 지도이며 별도의 이벤트 원장이 아니다. 인프라 전문 연구자의 검증 0건을 타 영역 신호로 대체해 충족 처리하지 않았다.

## 6 반증·과장·재현성 감사

### 적용 가능한 벤치마크

| 대상 | Task / Baseline | Metric | Conditions | Disclosure·오염·독립 재현 |
|---|---|---|---|---|
| Gemini 4 Argon | 장기 개발·기업 작업·영상·취약점 대응 / 다른 프런티어 모델 및 일부 Gemini 3.8 Flash Cyber 비교 | DeepSWE 77.9%, AutomationBench 51.3%, LVBench 91.7%, CWE-bench 68% | Google 출시 자료. 개별 토큰 예산·하네스·샘플링·도구 권한 미공개 | 업체 보고. 학습 중첩·오염 통제 미확인. 제한적 cyber 구성과 미래 공개 구성의 동등성 미확인. 독립 재현 unknown |
| Olmo-core 3 | MoE 처리량·메모리·용량 / 이전 FSDP·BF16 | 52,000 대 19,400 tokens/s/GPU; MXFP8 처리량 약 21% 증가; 95 대 103 GiB; 최고 858 TFLOP/s/GPU | 47B 비교 B300 8개, MXFP8 비교 B300 4개·균등 expert 부하, 1.2T 구성 B300 512개·random routing | 예비·개발자 측정. 2.38T는 단기 용량 시험. 입력·하드웨어 일치 필요. 모델 지능·학습 완료 아님. 오염은 시스템 측정에 직접 해당하지 않음. 독립 재현 unknown |
| Strands Decider 2B | 닫힌 선택 결정·확률 교정 / 유사 2B 결정 모델 | accuracy 0.723, Brier 0.342, ECE 0.052; RTX 3090 중앙 지연 115 ms | 공개 JevBench 231과제, 저장소 3072-token 창, WSL2 지연 시험 | 모델 카드와 교정 수치 및 일부 4096-token 결과 불일치. 지연 도표 v18·출시 v19 차이. 반복 개발의 공개 과제 노출과 base revision 고정 미흡. 독립 재현 unknown |
| ScholarCatalyst | 연구를 돕는 논문 검색 / 임베딩 검색과 같은 검색기를 쓰는 에이전트 | Recall@20: 에이전트 0.42, 임베딩 0.48, Claude Fable 5.1 에이전트 0.51 | 주저자 184명, 논문 207편; 프로젝트 시작 시점 이전 문헌으로 제한 | Fable이 완성 논문을 학습했을 가능성 인정. 상세 설정·코퍼스·주석 강건성 추가 검토 필요. 독립 재현 unknown |
| VISTA | 시각 게임·퍼즐 / 같은 Claude Opus 5.0의 최소 하네스, 초회 인간 행동 수 비교 | ARC-AGI-3 효율 40.68→100.00; 공개 25게임 완료; 인간보다 행동 57.4% 감소 보고 | 원본 관측 기억과 능동 검색·재구성 | 공개 게임은 숨은 게임 일반화 근거가 아님. 튜닝 노출·추론 예산·변동성 미확인. 8월 선행 공개. 독립 재현 unknown |
| Graphite 문체 평가 | 생성 웹 기사 문체 / ChatGPT 이전 인간 글·이전 모델 | tells 2,548 대 2,666; unigram divergence 19% 감소; mannered prose 10.57 대 16.75; em dash 1천 단어당 0.015 대 2.92 | 9,974 정렬 주제, 고정 프롬프트; 1,000주제에 Opus 5 심사 | 시간대별 인간 문체 차이·잔여 boilerplate·모델 심사 편향. 학습 중첩 미배제. 지능·정확성·저자 식별 점수 아님. 독립 재현 unknown |
| LLMLeak | 비밀 포함 URL의 웹 도구 전송 / 초록에서 대조군 미확인 | 11개 공개 파라미터 모델에서 공격 성공률 79.7% 보고 | 로컬 악성 구성요소는 직접 인터넷 통신 불가, LLM은 fetch 가능 | 모델·시행 수·방어·샘플링·신고·오염 통제 미확인. 운영 침해 입증 아님. 독립 재현 unknown |
| 멀티모달 RAG 추출 | 이미지 저장소 추출 / 비적응형 방식 | 2,500질의에서 최대 의료 611·문서 566·일반 이미지 416개; 최대 5.6배 | 이미지 반환형 MRAG, 여러 CLIP 계열 검색기·생성기, shadow 및 회수 이미지 혼합 | 최대값은 평균 아님. 저장소 규모·권한·대조군 상세·오염·공개 절차 미확인. 독립 재현 unknown |
| Satlyt | 우주선 오류 정보 전송량 / 비교 방식 불명 | 전송량 60% 초과 감소 주장 | 올해 이전 Momentus 우주선에서 Gemma 사용 보고 | 버전·표본·프로토콜 없음. 예상 연간 절감은 미래 추정. 공개 평가 데이터·오염 통제 없음. 독립 재현 unknown |
| Galaxy Tab S12 Ultra | NPU·CPU·GPU 성능 / Tab S11 Ultra | 약 61%·19%·17% 증가 주장 | 시험명·작업·정밀도·전력·소프트웨어·표본 미공개 | 제조사 주장. 작업별 AI 품질 아님. 데이터셋 불명으로 오염 판단 불가. 양산·출시 중 사양 변경 가능. 독립 재현 unknown |

### 벤치마크가 아닌 주장과 반증 지점

- BootLoops: 표준 벤치마크가 아니다. 자체 시험 존재와 과학적 결과의 외부 재현은 다르다. 저자의 Anthropic 방문 연구 관계가 공개됐으며 개별 결과 검증이 필요하다.
- 영지식 AI oversight: random-oracle model의 일반 oracle 보조 계산에 관한 이론이다. 긍정 구성은 서명된 oracle 답변과 충돌 저항 해시에 의존한다. 구현·속도·외부 증명 검토는 미확인이다.
- Barclays: 사용자 수와 이메일 처리량은 운영 공개이지 통제된 생산성 시험이 아니다. 기존 2025년 배포와 이번 확대를 구분한다.
- Shopify: 임원의 “20분 상점 제작” 사례는 일화다. 완료된 배포나 비교 생산성으로 쓰지 않는다.
- Photon: 개발자 가입·매출 성장·유지율·가동률은 회사 귀속 주장이다. revenue yes를 매출액 공개 또는 감사 완료로 읽지 않는다.
- ChatGPT try-on: 이미지 품질·지연 개선은 공개 비교 조건이 없는 업체 주장이다. 시각화는 실제 맞음새·구매 전환의 증거가 아니다.
- Copilot 두 프리뷰: 기능 제공 발표는 작업 성공률·기업 운영 안정성 검증이 아니다.
- LG·SEMIFIVE: 투자와 개발 계약은 가동 용량·양산·인식 매출이 아니다.
- 정책: 체포는 유죄가 아니며 EU 대화·보고서 권고는 새 규정·예산 집행이 아니다.
- Albertsons: Business 연구자는 신규 확대라고 판단했지만 Applications 연구자는 일차 자료에서 Safeway 제공 발표가 8월 5일임을 확인했다. 10월 1일 글의 별도 신규 확대 범위가 명확하지 않아 원장에서 제외했다.
- C-grade 일본 데이터센터·Tencent 용량 임대 후보는 본문 접근이 막혀 투자 구조·계약·규제 함의를 검증하지 못했다. 핵심 신호로 올리지 않았다.

## 7 다음 확인 일정

- 다음 조사 실행: 날짜만 있는 10월 1일 발표의 실제 시각, AstaBrief·llama.cpp의 최초 공개·커밋 시각, Albertsons의 신규 확대 여부를 우선 확인한다. 현재 시간 증거 공백은 소급 확정하지 않는다.
- 다음 조사 실행: Chips/Compute/Infrastructure는 정상 검색 경로와 날짜별 공식 아카이브를 확보해 재조사한다. 오래된 NVIDIA·AMD 자료로 대체하지 않는다.
- 공개 자료 확보 후: Gemini 시스템 카드·API·한국 접근, Olmo-core 버전 고정·동일 조건 측정, Strands 교정 수치 불일치를 점검한다. 예정 공개 날짜는 번들에 없다.
- 재현 자료 확보 후: ScholarCatalyst·VISTA·Graphite와 두 유출 논문의 데이터·하네스·추론 예산·오염 통제·독립 결과를 확인한다.
- 제품 접근 확보 후: Copilot 승인·조직 통제·실패 처리, Canvas 롤백·번역·markets, ChatGPT 사진 동의·보관과 한국 계정 접근을 시험한다.
- 2026-10-07: Galaxy Tab S12의 한국 판매 개시, 한국어 기능, 온디바이스·클라우드 경계와 Google AI Pro 조건 확인. 예정일이며 달성 전이다.
- 2026년 말: Barclays의 개발자 50% 채택 목표와 LG 국내 라인 증설 달성 여부 확인.
- 2027년 상반기: LG Virginia 공장 생산 개시 확인. Barclays의 2027년 개발자 과반 채택은 별도 목표로 추적한다.
- 법원·정부 후속 문서가 나올 때: 미국 GPU 수출 사건의 절차·증거, EU–캐나다 구체적 협력과 SRIP 이후 실제 예산·입법을 분리 추적한다.

## 8 Coverage Audit

### 연구자 종료 및 수집 범위

10개 연구자 모두 번들에 최종 결과와 coverage_notes를 반환해 terminal completion은 10/10이다. 이는 조사 결과 반환을 뜻하며 모두 목표를 달성했다는 뜻은 아니다. Chips/Compute/Infrastructure도 검증 0건과 장애 사유를 명시하고 종료했다.

수치형 두-pass search_audit는 Frontier Models에만 제공됐다. 다른 9개는 coverage_notes에 초기 검색과 후속 표적 검색·직접 추출 경로가 기록돼 있지만 pass별 후보 수는 없다. 이를 임의로 생성하지 않았다. 아래 “원 events”는 제출된 사건 레코드 수이지 전체 발견 후보 수가 아니다.

| 연구자 | 초기·후속 탐색과 후보 수 | 원 events / 원 검증 | 편집 포함 | 3건 대비 부족 |
|---|---|---|---|---|
| Frontier Models | search_audit initial_count 2, targeted_count 3; 추가 전체 후보 수 미제공 | 5 / 5, verified_count 명시 | 1 | 2 |
| AI Research | 날짜·매체 검색 → 연구 색인·arXiv 개별 기록; pass별 후보 수 미제공 | 3 / 3, notes 확인 | 3 | 0 |
| Agents/Developer Tools | 일반·GitHub·한국어 검색 → 공식 변경 기록·뉴스 색인; pass별 후보 수 미제공 | 4 / 4, notes 확인 | 3 | 0 |
| Open Source/Repos | 날짜·GitHub·HF 검색 → HF 블로그·릴리스 직접 추출; pass별 후보 수 미제공 | 3 / 3, 연구자 판정 | 1 | 2 |
| Chips/Compute/Infrastructure | 칩·데이터센터·Reuters·한국어 검색 → NVIDIA·AMD 아카이브, Register 실패; 후보 수 미제공 | 0 / 0 | 0 | 3 |
| Enterprise/Applications | 매체·Microsoft·한국어 검색 → 공식 색인·Shopify·Albertsons 일차 자료; pass별 후보 수 미제공 | 3 / 3, notes 확인 | 3 | 0 |
| Funding/M&A/Business | 영어·한국어 투자 검색 → TC 날짜 아카이브·공식 뉴스룸; pass별 후보 수 미제공 | 4 / 4, 연구자 판정 | 2 | 1 |
| Safety/Evaluation/Security | 안전·보안·경계일 검색 → arXiv 개별 초록·WIRED; pass별 후보 수 미제공 | 3 / 3, notes 확인 | 4 | 0 |
| Policy/Geopolitics | 규제·수출통제·한국어 검색 → EC·DOJ·FT·정부 사이트; pass별 후보 수 미제공 | 3 / 3, notes 확인 | 3 | 0 |
| Korea Exposure | 날짜·국내 매체·영어 검색 → 국내 공식·매체 색인 직접 추출; pass별 후보 수 미제공 | 3 / 3, notes 확인 | 3 | 0 |

Safety/Evaluation/Security의 편집 포함 4건에는 Frontier Models에서 이동한 Graphite 평가가 포함된다. Agents/Developer Tools의 3건에는 Strands 결정 모델이 포함된다. 원 검증 수는 연구자 판정으로, 중앙 편집의 시간·신규성 통과 수와 같지 않을 수 있다.

### 부족 및 검색 한계

- Frontier Models: 원 search_audit의 shortfall은 0이다. 그러나 5건 중 4건이 범용 모델 출시가 아닌 인프라·지원 모델·평가·배포로 판별돼 이동했다. Meta 추출 실패, 부정확한 검색, 유용하지 않은 국내 색인도 범위 한계다. 정본 1건의 부족을 약한 모델 후보로 채우지 않았다.
- Open Source/Repos: 연구자는 날짜 중첩 규칙으로 3건을 인정했으나 10월 2일 AstaBrief·llama.cpp는 정확한 마감 이전 시각이 없다. 중앙 편집에서는 2건을 보류했다. vLLM 9월 22일 릴리스와 시간대·연도 메타데이터가 부족한 llama.cpp 목록은 추가 사건이 아니다.
- Chips/Compute/Infrastructure: 초기 검색이 자동차 부품·신발 등 무관 결과를 반환했고 후속 아카이브도 창 밖 자료만 제공했다. 429와 브라우저 대안 부재로 검증 0건이다. 이는 증거 회수 부족이지 “해당 날짜의 산업 뉴스 없음”이 아니다.
- Funding/M&A/Business: 원 연구자는 4건으로 수치 부족이 없었다. 중앙 편집에서 Barclays 중복을 통합하고 Albertsons 신규성을 보류해 2건이 남았다. Reuters 차단과 무관 검색으로 대체 후보를 확보한 근거가 없다.
- 다른 영역: 정본 3건 이상을 확보했지만 검색 결과가 반복적으로 무관하거나 날짜·도메인 조건을 무시했다. 직접 색인 추출로 보완한 제한적 조사이며, 완전한 사건 목록이나 추가 사건 부재를 주장하지 않는다.
- 논문 시각: Safety 연구자는 arXiv 제출 이력으로 창을 판정했고 10월 2일 목록 묶음을 창 안 공개 시각으로 바꾸지 않았다. 공개 접근 확인 시점과 제출 시점의 차이는 남는다.
- 한국 연결: Korea Exposure의 직접 사례 외에 국내 참여·고객·규제 효과가 확인되지 않은 연결은 잠재적 관련성으로만 표기했다.

### 전역 중복 제거·제외

- Olmo-core: Frontier Models와 Open Source/Repos의 동일 ID를 통합하고 후자에 정본 배치.
- Shopify Canvas: Agents/Developer Tools와 Enterprise/Applications의 동일 ID를 통합하고 후자에 정본 배치.
- Photon: Agents/Developer Tools와 Funding/M&A/Business의 동일 ID를 통합하고 후자에 정본 배치.
- Barclays: Frontier Models·Enterprise/Applications의 동일 ID와 Funding/M&A/Business의 다른 ANTHROPIC-EXPANSION ID가 같은 공식 발표를 가리킨다. CLAUDE-EXPANSION을 정본으로 유지하고 Enterprise/Applications에만 배치했다.
- Graphite·Strands: 중복을 새 사건으로 만들지 않고 평가와 개발 도구 영역으로 각각 이동했다.
- AstaBrief·llama.cpp: 일차 발표 Evidence A는 인정하되 10월 2일 날짜만으로 창 안 공개를 확정하지 않아 제외.
- Albertsons: 같은 번들 안에서 기존 8월 기능과 10월 사례 글의 신규성 판정이 충돌해 제외.
- OpenAI reasoning 추출 캠페인: 9월 30일 날짜만 있는 공개는 창 밖이다. 명시적 rejected_events를 복구하거나 7월 활동을 새 사건으로 포장하지 않았다.
- 이전 모델 출시·9월 논문·기존 생산 사례·단순 릴리스 목록·칼럼·행사 홍보는 새 창 안 사건으로 재분류하지 않았다.
- 원 watchlist의 Trillium 두 레코드는 같은 기사·출범이므로 후보 한 줄로 통합했다. Watchlist는 전부 원장·신호·포함 수에서 제외했다.

### Watchlist (미확인 후보)

- 후보: Trillium Labs의 공개 post-training·자기개선 연구 출범, Evidence B (미포함 사유: 10월 2일 기사·출범으로 기록됐으며 창 안 일차 발표가 없음; 공개 실험·코드도 미확인 / 출처: https://www.wired.com/story/trillium-labs-wants-to-do-high-risk-ai-research-in-the-open/)
- 후보: Mid-Harness의 terminal agent 행동 검증 연구, Evidence C (미포함 사유: 9월 30일 15:40:39 UTC 제출은 창 시작 전이며 10월 1일 목록 등재로 재날짜화할 수 없음 / 출처: https://arxiv.org/abs/2609.39982)
- 후보: OpenAI 안전 연구자 3명 이탈 확인 보도, Evidence B (미포함 사유: 시각은 창 안이지만 원 연구자의 bounded category에서 모델 출시·평가·배포 사건이 아니었으며 별도 중대한 안전 사건으로 검증된 내용도 제한적 / 출처: https://techcrunch.com/2026/10/01/openai-cuts-ties-with-three-safety-researchers-wsj-reports/)
- 후보: Armadin의 2억5,550만 달러 Series B 보도, Evidence B (미포함 사유: 명시 시각은 10월 2일 06:55 KST로 마감 후이며 앞선 일차 발표 미확인 / 출처: https://techcrunch.com/2026/10/01/kevin-mandias-new-agent-swarm-security-startup-armadin-raises-255-5m-at-2-5b-valuation/)
- 후보: ChatGPT macOS 앱 데이터 접근 취약점 보도, Evidence B (미포함 사유: 10월 2일 기사 시간대 미확인 및 수정 인정은 9월 25일로 새 창 안 사건 입증 불가 / 출처: https://www.wired.com/story/a-flaw-in-chatgpts-mac-app-could-have-let-hackers-grab-sensitive-data/)
- 후보: 한국 정부 AI 조정 42개 기관 확대·입법 틀 논의, Evidence B (미포함 사유: 10월 2일 16:00 KST 보도와 당일 회의는 마감 후이며 초안 논의는 제정이 아님 / 출처: https://www.yna.co.kr/view/AKR20261002124200017)
- 후보: 일본의 Dell·Jera 연계 AI 데이터센터 계획, Evidence C (미포함 사유: FT 본문 구독 장벽으로 자금 구조·정부 약속·기사 귀속 근거를 확인하지 못함 / 출처: https://www.ft.com/content/ec55a734-243b-43a2-93ea-8652d6b99309)
- 후보: Tencent의 Oracle 컴퓨팅 용량 임대 보도, Evidence C (미포함 사유: FT 본문 구독 장벽으로 계약·실제 배포·수출통제 함의 미검증 / 출처: https://www.ft.com/content/8799b33d-f07c-4a03-82f0-bf5d3d1d29e9)

정본은 Section 3에만 기록했으며 각 사건을 한 번씩 포함했다. C-grade 사건은 핵심 원장에 없다.

- **수록 사건 수:** 23
