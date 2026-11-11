---
layout: ai-intel
title: "AI Daily Intel — 2026-11-11"
date: 2026-11-11 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-11/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-11
- **기준 시각:** 2026-11-11T06:00:00+09:00
- **수집 구간:** [2026-11-10T06:00:00+09:00, 2026-11-11T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 27

## 1 오늘의 AI 한 문장

오늘의 확인 가능한 변화는 새 초거대 모델의 우위 확정보다 에이전트의 문맥 준수·실행 권한·운영비를 검증하려는 연구와 제품화에 집중됐으며, 한국에서는 KT의 운영 사례·AX 실적과 개인정보 감독이 구체적 접점으로 나타났다.

이 보고서는 제공된 연구자 번들만 편집했다. <br class="report-field-break" />Evidence A는 원문·공식 발표에 의한 해당 사실의 확인, B는 출처가 명시된 언론 보도, C는 약한 근거를 뜻한다. A도 성능의 독립 검증을 의미하지 않는다. 포함 이벤트는 A 또는 B이며 C급 핵심 신호는 없다.

정확한 시각이 있는 자료는 반개구간으로 판정했다. 날짜만 있는 자료는 번들이 명시한 달력일 중첩 예외를 적용했으며, 정확한 시각까지 구간 안에 있다고 확정한 것은 아니다.

## 2 핵심 신호 5

- **에이전트 성능의 병목은 정답 생성만이 아니라 기존 작업의 문맥 준수다.** ARE-bench는 일부 모델의 제한적 검사 통과율 약 69%가 이력·작업공간 조건을 넣으면 28.4–40.0%로 낮아진다고 보고했다. WikiTrace는 기억을 원래 증거에 연결하는 대안을 제시한다. 모두 저자 실험이며 독립 재현은 미확인이다.  
  근거: [ARE-bench](https://arxiv.org/abs/2611.14364), [WikiTrace](https://arxiv.org/abs/2611.14320)

- **실행 권한을 모델 판단과 분리하는 통제가 중요해졌다.** ActiveSecHarness의 권한·오염 추적 연구와 KT AIO-Net의 읽기 전용 명령 허용목록은 서로 다른 수준의 근거다. 전자는 제한된 시험, 후자는 공급사가 공개한 고객 운영 사례이며, 어느 쪽도 보편적 안전성을 입증하지 않는다.  
  근거: [ActiveSecHarness](https://arxiv.org/abs/2611.13960), [KT AIO-Net](https://news.microsoft.com/source/features/digital-transformation/kt-meisters-and-microsoft-engineers-build-ai-agents-to-spot-network-issues-before-customers-do/)

- **GPU 운영 효율은 추론 속도뿐 아니라 시작·복구 시간으로 확장된다.** NVIDIA는 체크포인트 복원과 Kubernetes 도구를 공개하고 파트너의 시작 지연 단축 결과를 제시했다. 공개 프리뷰·코드 공개와 검증된 상용 성능은 구분해야 한다.  
  근거: [NVIDIA 인프라 발표](https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/)

- **한국 AI 사업의 실적과 계획을 분리해 볼 필요가 있다.** KT는 누적 AX 매출 증가율 11.9%를 공개했지만 신규 데이터센터 6곳과 장래 용량은 계획이다. AX를 순수 모델 서비스 매출로 해석해서도 안 된다.  
  근거: [KT 실적·전망](https://www.yna.co.kr/view/AKR20261110045201017)

- **규제의 현재 단계가 갈린다.** 뉴욕은 프런티어 AI 등록 포털을 열었고 EU는 선거 관련 DSA 지침 개정 의견수렴을 시작했다. 한국의 Anthropic 사안은 정식 조사 개시이지 위법 확정이나 제재가 아니다.  
  근거: [뉴욕](https://www.governor.ny.gov/news/governor-hochul-declares-ny-will-lead-nation-ai-science-and-safety-launches-new-research), [EU](https://digital-strategy.ec.europa.eu/en/consultations/targeted-consultation-draft-revised-election-guidelines-under-digital-services-act-dsa), [개인정보위 조사](https://www.yna.co.kr/view/AKR20261110142600530)

## 3 영역별 AI 브리프

상태는 원자료의 yes/no/unknown을 사용한다. availability는 논문·API·제품 등 각 항목이 설명하는 대상에 한정된다. unknown은 부재가 아니라 미확인이다. 중복 이벤트의 정식 원장은 한 범주에만 두고 다른 범주에서는 교차 참조한다.

### Frontier Models

검증 3건, 고유 원장 포함 3건. 모두 연구 공개이며 새로운 프런티어 모델 출시나 성능 선두 확정은 아니다.

  - **내용:** B3는 연속 블록을 겹쳐 정제하는 학습 없는 확산 언어모델 디코딩을 제안했다. 저자 보고 속도 개선은 11.5–14.5%이며 데이터셋별 품질 변화는 다르다.
  - **근거 등급:** A — 논문 공개에 대한 1차 근거.
  - 공개 시각: 2026-11-10T17:40:24Z.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.14387)

  - **내용:** 진행 중인 연구의 이력과 작업공간을 보존한 75개 과제로 7개 모델을 평가했다. 최상위 모델의 전체 체크리스트 통과율은 저자 보고 66.2%다.
  - **근거 등급:** A — 벤치마크 논문 공개 확인, 성능 독립 검증 아님.
  - 공개 시각: 2026-11-10T17:21:31Z.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.14364)

  - **내용:** TNG는 고정된 Qwen3.5-35B-A3B-Base에 Rust·Haskell 전문가를 추가하고 결합하는 실험을 공개했다. 전문가 체크포인트·학습 코드의 공개는 확인되지 않았다.
  - **근거 등급:** A — 회사의 직접 연구 공개.
  - 공개일: 2026-11-10, 시각·시간대 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/tngtech/bring-your-own-expert-extending-moe-models-with-ne)

### AI Research

검증 3건, 포함 3건.

  - **내용:** WikiTrace는 압축된 기억을 결과 요약·원래 실행 궤적과 연결해 에이전트가 근거를 다시 검사하도록 한다. 발견 목록의 KAIST AI 연결은 있으나 전체 논문에서 소속 재확인이 필요하다.
  - **근거 등급:** A — 논문 공개·열람 가능 확인.
  - 공개 시각: 2026-11-10T16:46:59+00:00.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.14320)

  - **내용:** APEX는 별도 fake-score 네트워크 없이 소수 단계 스트리밍 비디오 학습을 수행하는 방법을 공개했다. 일부 지시 이행·미학·학습 효율 지표는 개선됐지만 움직임 품질까지 전면 우세한 결과는 아니다.
  - **근거 등급:** A — 저자 논문.
  - 공개 시각: 2026-11-10T13:01:20+00:00.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.14033)

  - **내용:** MMDM은 도구 선택·제약 계획 등 구조화된 결정을 5,448개 문항·16개 과제 범주로 평가했다. 지식 정확도가 복수 선택·제약 계획의 신뢰성을 보장하지 않는다는 저자 결과다.
  - **근거 등급:** A — 벤치마크 논문.
  - 공개 시각: 2026-11-10T16:40:50+00:00.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.14309)

### Agents/Developer Tools

검증 3건, 포함 3건. 근거가 GitHub 공식 발표에 집중돼 있다.

  - **내용:** GitHub는 Gemini 4 Carbon을 적격 Copilot 요금제에서 점진 제공한다고 발표했다. CLI·코딩 에이전트·IDE 등으로 제공되며 사용량 과금과 관리자 접근 통제가 중요하다.
  - **근거 등급:** A — 공식 제품 발표. 실제 계정별 제공과 성능은 별도 확인 대상.
  - 공개일: 2026-11-10, 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/)

  - **내용:** 엔터프라이즈 GitHub App이 전용 권한으로 Copilot 좌석 배정·해제 API를 사용할 수 있게 됐다. 비용 절감이나 고객 운영 실적은 확인되지 않았다.
  - **근거 등급:** A — 공식 API 제공 발표.
  - 공개일: 2026-11-10, 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management/)

  - **내용:** Copilot CLI용 Microsoft C++ Language Server가 MSBuild 프로젝트의 컴파일 명령 추출을 자동 수행한다. 다른 빌드 시스템은 별도 컴파일 데이터베이스나 생성 절차가 필요하다.
  - **근거 등급:** A — 공식 기능 변경 발표. 토큰 절감은 정량 미검증.
  - 공개일: 2026-11-10, 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-10-c-language-server-now-auto-configures-msbuild-builds/)

### Open Source/Repos

연구자 검증 3건 중 고유 원장 포함 2건. TNG 연구는 Frontier Models 원장으로 통합했다. 실제 공개 아티팩트가 직접 확인된 것은 아래 MotionGraphicsBench이며, 보안 보도를 코드 출시로 취급하지 않는다.

  - **내용:** Figma는 SVG 모션 편집 100개 과제와 실행 가능한 검증 프로그램을 공개했다. 저장소의 데이터·코드 제공은 별도 확인됐지만 최초 저장소 공개일이 이날이라는 뜻은 아니다.
  - **근거 등급:** A — 공식 공개와 저장소 확인.
  - 공개일: 2026-11-10, 시각 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/figma-ai/motion-graphics-bench)

  - **내용:** Hugging Face 임원이 관리자 토큰 교체 빈도 확대와 강화된 네트워크 통제를 설명했다. 새 신원확인·업로드 제한 정책의 시행이나 과거 공격의 신규 발생을 뜻하지 않는다.
  - **근거 등급:** B — TechCrunch의 실명 관계자 인용 보도.
  - 공개일: 2026-11-10, 시각 미확인.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/10/cyberattacks-threaten-to-make-open-source-ai-a-little-less-open-hugging-face-exec-warns/)

### Chips/Compute/Infrastructure

검증 3건, 포함 3건.

  - **내용:** NVIDIA는 OpenShell의 CNCF 기여, Kubernetes Engine·Recipes 공개 프리뷰, Snapshot 등을 하나의 인프라 발표로 공개했다. SK Telecom은 통합 계획 참여사로 언급됐지만 구축 완료 근거는 없다.
  - **근거 등급:** A — 공식 발표와 코드 링크. CNCF 수용·거버넌스는 후속 확인 필요.
  - 공개일: 2026-11-10, 공식 뉴스룸·아카이브 날짜 근거.
  - **출처:** [blogs.nvidia.com](https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/)

  - **내용:** AMD 임원 인터뷰는 통합 CPU-GPU 랙용 Verano의 코어 구성, LPDDR5X·SOCAMM2, xGMI 설계를 설명했다. 출하는 2027년 예상이며 CPU-GPU 비율은 미공개다.
  - **근거 등급:** B — The Register의 실명 임원 인터뷰.
  - 공개 시각: 2026-11-10T17:00:00+00:00.
  - **출처:** [www.theregister.com](https://www.theregister.com/systems/2026/11/10/a-closer-look-at-verano-amds-first-step-toward-a-zen-based-superchip-to-rival-nvidias-vera-rubin/5308523)

  - **내용:** SK hynix는 LPDDR5X 제품·개발 절차의 IEC 61508 SIL 3와 ISO/SAE 21434 기반 사이버보안 관리 절차 인증을 공개했다. 평가기관은 SGS-TÜV Saar다. 인증서 발급 시각·고객 공급·정부 승인은 확인되지 않았다.
  - **근거 등급:** A — 공식 발표와 인증서 이미지.
  - 공개일: 2026-11-11, 시각 미확인.
  - **출처:** [news.skhynix.com](https://news.skhynix.com/en/iec-61508-certification-2026/)

### Enterprise/Applications

검증 3건, 포함 3건.

  - **내용:** OpenAI Business Hub 베타는 기업 프로필 검증·수정, 적격 기업의 전문 에이전트, 제한적 발견 분석을 제공한다. 한국 제공 여부·도입률·매출은 확인되지 않았다.
  - **근거 등급:** B — TechCrunch의 회사 설명·실명 임원 인용.
  - 공개 시각: 2026-11-10T10:49:00-08:00.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/10/openai-rolls-out-new-business-profiles-making-chatgpt-just-a-little-bit-more-like-google/)

  - **내용:** Salesforce는 Missionforce 채용 기능이 CDAO Tradewinds에서 Awardable 지위를 얻었다고 발표했다. 이는 조달 경로의 자격이지 계약 수주·배치·매출이 아니다.
  - **근거 등급:** A — 공식 발표.
  - 공개일: 2026-11-10, 시각 미확인.
  - **출처:** [www.salesforce.com](https://www.salesforce.com/news/press-releases/2026/11/10/missionforce-achieves-awardable-status/)

  - **내용:** Microsoft는 KT가 8월부터 운용한 AIO-Net을 공개했다. 현재 핵심 장비 70개를 대상으로 분석하며, 사람에게 판단·조치를 남기고 명령은 읽기 전용 허용목록으로 제한한다. 280개 확대는 계획이다.
  - **근거 등급:** A — 공급사의 실명 고객 운영 사례. 성능은 KT 주장.
  - 공개일: 2026-11-11, 시각 미확인. 신규 배치일이 아닌 공개일.
  - **출처:** [news.microsoft.com](https://news.microsoft.com/source/features/digital-transformation/kt-meisters-and-microsoft-engineers-build-ai-agents-to-spot-network-issues-before-customers-do/)

### Funding/M&A/Business

검증 3건, 포함 3건.

  - **내용:** TechCrunch는 창업자 발표를 근거로 OpenAI의 Odessia 인수를 보도했다. OpenAI는 창업자 채용을 별도 확인했지만 거래 조건·여행 상품 계획은 공개하지 않았다. 독립 서비스는 종료됐다고 보도됐다.
  - **근거 등급:** B — 인수 보도와 채용 확인의 범위는 다름.
  - 공개일: 2026-11-10, 아카이브 날짜 근거.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/10/openai-acquires-odessia-travel-startup-created-by-sonder-founder/)

  - **내용:** Proximal Ventures의 첫 펀드 2,750만 달러 조성이 보도됐다. AI 생명과학 도구·인프라·서비스의 초기 기업을 대상으로 하며 법적 종결일은 확인되지 않았다.
  - **근거 등급:** B — 실명 인터뷰·투자자 명시 보도.
  - 공개일: 2026-11-10, 아카이브 날짜 근거.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/10/proximal-ventures-raises-debut-fund-to-back-startups-bringing-ai-to-drug-development/)

  - **내용:** Oura의 Counsel Health 인수 합의 금액은 보도상 6억2,500만 달러다. 기존 서비스는 이미 앱에 통합됐지만 인수 종결은 별개다. Oura 전체 매출을 AI 매출로 분류하지 않는다.
  - **근거 등급:** B — Bloomberg 보도, TechCrunch 보강. 공식 거래 발표 추출은 실패.
  - 공개 시각: 2026-11-10T17:10:00+00:00.
  - **출처:** [www.bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-10/oura-to-buy-on-demand-doctor-ai-service-counsel-health-revenue-jumps-153-in-q4)

### Safety/Evaluation/Security

검증 3건, 포함 3건.

  - **내용:** BypassGym은 실제 Windows 가상머신과 EDR을 이용한 에이전트 방어 회피 평가를 공개했다. 선택된 환경의 저자 결과를 일반적인 제품 보안 등급으로 해석해서는 안 된다.
  - **근거 등급:** A — 논문 공개 확인.
  - 공개 시각: 2026-11-10T07:31:48+00:00.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.13684)

  - **내용:** ActiveSecHarness는 capability token, 권한·신뢰 계층, 오염·출처 추적, 결정론적 실행 통제를 결합한다. 제한된 자체 시험의 완벽한 차단 결과는 보편적 방어 보장이 아니다.
  - **근거 등급:** A — 논문 공개 확인.
  - 공개 시각: 2026-11-10T11:52:40+00:00.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.13960)

  - **내용:** 기하학적 임베딩 변환의 검색 정책 격리가 표현 기밀성·쿼리 위조 방지·정책 소속 은닉을 자동 보장하지 않는다는 분석이다. 평가된 방식과 공격자의 접근 조건에 한정된다.
  - **근거 등급:** A — 논문 공개 확인.
  - 공개 시각: 2026-11-10T13:25:54+00:00.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.14061)

### Policy/Geopolitics

검증 2건, 포함 2건. 목표 대비 1건 부족하며 미확인·구간 밖 후보로 보충하지 않았다.

  - **내용:** EU 집행위는 생성 AI 딥페이크 표시·불법 후보자 딥페이크 대응·추천시스템 조작 시험 등을 담은 DSA 선거 지침 개정안 의견수렴을 11월 10–23일 진행한다. 확정 의무 신설이 아니다.
  - **근거 등급:** A — 정부 원문.
  - 공개일: 2026-11-10. 11월 11일 수정일로 재날짜 처리하지 않음.
  - **출처:** [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/consultations/targeted-consultation-draft-revised-election-guidelines-under-digital-services-act-dsa)

  - **내용:** 뉴욕은 대형 프런티어 AI 개발자 등록 포털과 안전 연구 구상을 발표했다. 등록 기한은 2027년 1월 1일이며 1월 시작 요건을 모두 현재 시행 중으로 취급하지 않는다.
  - **근거 등급:** A — 주정부 발표.
  - 공개 시각: 2026-11-10T10:40:00-05:00.
  - **출처:** [www.governor.ny.gov](https://www.governor.ny.gov/news/governor-hochul-declares-ny-will-lead-nation-ai-science-and-safety-launches-new-research)

### Korea Exposure

연구자 검증 3건 중 고유 원장 포함 2건. SK hynix 인증은 Chips/Compute/Infrastructure 원장으로 통합했다. KT AIO-Net 역시 한국 관련성이 있지만 Enterprise/Applications에서만 계수한다.

  - **내용:** 개인정보위가 Anthropic 계정정보 노출 사안의 사전 검토를 마치고 정식 조사에 착수했다고 연합뉴스가 보도했다. 약 100개 한국 기업 계정이 관련되며 프롬프트·출력 노출이나 위법·과징금 확정 근거는 없다.
  - **근거 등급:** B — 국내 규제기관 발표를 전하는 보도.
  - 공개 시각: 2026-11-10T16:22:00+09:00.
  - **출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261110142600530)

  - **내용:** KT는 누적 AX 매출 11.9% 증가와 B2B/AX 수주 20% 초과 증가를 밝혔다. KT Cloud 분기 매출은 2,680억 원이다. 2027년부터 순차 가동할 신규 센터 6곳과 2031년 1GW 초과 목표는 장래 계획이다.
  - **근거 등급:** B — 실적 발표·컨퍼런스콜 인용 보도.
  - 공개 시각: 2026-11-10T16:47:00+09:00.
  - **출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261110045201017)

## 4 기술→산업 전달경로

- 문맥·기억 평가 → 연구·개발 에이전트 신뢰성  
  ARE-bench·WikiTrace·MMDM은 각각 문맥 준수, 기억의 근거, 구조화된 선택을 다룬다. 산업 적용 전에는 실제 저장소·작업 이력, 동일 추론 예산, 실패 복구를 포함한 검증이 필요하다. 연구 지표가 생산성 개선으로 바로 이어졌다는 근거는 없다.

- 실행 통제 → 기업의 제한된 자율성 도입  
  ActiveSecHarness의 연구 방향과 KT의 읽기 전용 운영은 권한을 줄여 위험을 통제한다는 접점이 있다. 두 시스템의 동일 기술 사용이나 인과관계는 확인되지 않았다. KT 사례도 자율 조치가 아닌 분석 보조다.

- 추론·복구 효율 → GPU 활용과 서비스 비용  
  B3는 디코딩, NVIDIA Snapshot은 시작·복구를 다룬다. 서로 다른 병목이므로 개선율을 합치거나 최종 비용 절감률로 바꿀 수 없다. 체크포인트 준비 비용·실제 트래픽·품질 조건을 포함해야 한다.

- 모듈형 전문가·실행형 평가 → 전문 도구 개발  
  TNG는 모델 특화 방식, MotionGraphicsBench는 결과 검증 방식을 제시한다. 전자는 아티팩트 공개가 미확인이고 후자는 데이터·미디어와 코드의 라이선스가 다르므로 상용 재사용에 별도 검토가 필요하다.

- 메모리 설계·인증 → 물리 AI 공급 기회  
  AMD의 LPDDR5X·SOCAMM2 설계와 SK hynix 인증은 관련 산업 방향을 보여준다. 양사 간 공급 계약이나 설계 채택은 번들에서 확인되지 않았다.

- 발견·의료 서비스 통합 → 유통과 사업 확장  
  Business Hub는 기업 관리형 발견 접점, Oura–Counsel은 의료 서비스 통합의 사업 방향을 나타낸다. 베타 이용 가능과 인수 합의는 각각 채택·거래 종결·한국 인허가와 다르다.

## 5 AI Stack Signal Map

| 계층 | 확인된 신호 | 성숙도와 미확인 연결 |
|---|---|---|
| 모델·추론 | B3, TNG 전문가 결합 | 연구 공개; 성능 독립 재현·상용 서빙 미확인 |
| 기억·문맥·의사결정 | WikiTrace, ARE-bench, MMDM | 논문 근거; 실제 조직 생산성으로의 전이 미확인 |
| 멀티모달 생성·평가 | APEX, MotionGraphicsBench | 선택적 저자 성능 주장; 후자는 코드·데이터 제공 확인 |
| 개발 도구 | Copilot 모델 선택·좌석 API·MSBuild 자동 설정 | 제공 발표; 실제 계정·권한·비용 효과 검증 필요 |
| 권한·보안 | ActiveSecHarness, BypassGym, RAG 분석, Hugging Face 통제 | 연구·운영 통제 공개; 일반화·공격 적응성 미확인 |
| GPU·클러스터·메모리 | NVIDIA 도구, AMD Verano, SK hynix 인증 | 프리뷰·미래 출하·인증을 각각 구분 |
| 기업 운영 | KT AIO-Net, Missionforce, Business Hub | 운영 사례·조달 자격·베타가 혼재; 동등한 배치 실적 아님 |
| 자본·사업 | Odessia, Proximal, Oura–Counsel, KT 실적 | 인수 보도·펀드 조성·합의·기존 매출을 구분 |
| 정책·감독 | EU 의견수렴, 뉴욕 등록, 한국 개인정보 조사 | 초안·행정 절차·조사 단계; 최종 판정과 구분 |

## 6 반증·과장·재현성 감사

### 벤치마크별 감사

아래 성능은 모두 저자 또는 공급사·고객 보고다. 독립 재현이 확인된 항목은 없다.

| 대상 | 과제·기준선 | 지표·조건 | 공개·오염·재현성 한계 |
|---|---|---|---|
| B3 | 확산 LM 추론; DiffusionGemma 26B, LLaDA 2.1 mini 16B·flash 100B의 기본 디코딩 | 10개 데이터셋, 학습·하이퍼파라미터 추가 없이 속도 11.5–14.5% 개선 주장 | 전체 방법·표 추출은 됐으나 정확한 하드웨어·전체 샘플링 조건 미확인. 오염 미평가. 평균 품질 유지가 개별 데이터셋 동등성을 뜻하지 않음 |
| ARE-bench | 진행 연구의 문맥 준수; 7개 모델, 제한 검사와 전체 검사 비교 | 75개 과제·1,173개 이진 항목. 최상위 전체 통과율 66.2%; 일부 모델 약 69%에서 28.4–40.0%로 하락 | 추출 초록에서 모델 버전·예산·전체 채점 구현 미확인. 오염 통제·외부 재현 미확인. 서로 다른 검사 지표를 혼용하면 안 됨 |
| TNG | Rust·Haskell 생성과 일반 능력; Qwen 기본 모델 및 LoRA 조합 | 단일 전문가 pass@1: Rust 0.62→0.73, Haskell 0.32→0.51. 결합 시 0.70·0.50. 8대 B200, 길이 4096, The Stack v1 중복 제거 부분집합 | 도메인 평가셋 이름·샘플링·불확실성·훈련/시험 오염 통제 미확인. 일반 점수 0.80·0.78·0.80만으로 무퇴행 확정 불가. 체크포인트·코드 미확인 |
| WikiTrace | 기억으로 인한 실패 완화; 기존 기억 방식 및 동일 요약만 제공한 기준선 | 5개 에이전트 벤치마크에서 개선 주장; 수치·정확한 지표는 추출 초록에 없음 | 벤치마크 이름·모델·예산·오차·오염 통제 미확인. 코드 공개 주장과 저장소 확인은 별개 |
| APEX | 스트리밍 영상; S2-Avatar 및 동일 훈련 설정의 DMD | 180초 영상, 블록당 backbone 3회·Refiner 1회. 70건 사람 평가·320건 비교. 지시 이행 3.856 대 3.831, 미학 0.641898 대 0.632606; 메모리 4.4%·반복 시간 9.2% 감소 주장 | 하드웨어·통계 불확실성·오염 통제 미확인. 움직임은 기준선 우세, 시청각 동기는 주로 동률, 사용성은 변화 없음 |
| MMDM | 단일·복수 선택과 확률 결정; 28개 결정 모델 | 5,448문항, 선택지 2–1,024개, 최대 64,817토큰. Decider-V1.2의 Hard Single-select: 지식 78.75%, 논리 53.95%, 계획 47.95%; 최상위 Hard Multi-select 36.81% | 재구성·재작성은 무오염 증명이 아님. 전체 버전·실행 조건·오차·데이터 공개 상태 미확인 |
| MotionGraphicsBench | SVG 모션 지시; 32개 모델, 검증기 대 VLM 판정 | 100개 과제·47개 설정. 4개 모델만 pass@1 50% 초과. 180개 균형 표본에서 사람 일치율 검증기 93.3%, VLM 83.3% | 공개 컬렉션 유래로 훈련 노출 배제 불가. 관계적 조건 누락·정상 결과 오거절 가능. 데이터·미디어 CC BY-NC-SA 4.0, 저장소 작성 코드 MIT |
| NVIDIA Snapshot | 추론 준비·제로 스케일 시작; 기존 로딩·워밍업 | HGX B300 파트너 평가. Crusoe GLM-5.3 약 8분→31초, Saturn Cloud vLLM 2–8.5분→6–34초 주장 | 전체 설정·반복 수·체크포인트 생성 비용·기준선 동등성 미공개. 훈련 데이터 오염은 해당 지연 측정의 핵심 쟁점이 아님 |
| KT AIO-Net | 장애 탐지·조사; 이전 탐지 절차·수동 조사 | 운영 장비 70개. 탐지 10분 초과→2–3분, 조사·보고 평균 5분으로 약 절반 주장 | 표본·평가 기간·사고 구성·정확도·불확실성 미공개. 공급사 고객 사례이지 통제 실험 아님. 공개 벤치마크 오염 문제로 단정할 근거 없음 |
| BypassGym | 에이전트의 EDR 회피; 모델 5개·EDR 6개·페이로드 3개, 보충 지식 유무 비교 | 실제 Windows VM. DeepSeek-V4.1 Flash 18회 중 17회 성공, Bitdefender 평가 15회 중 5회 통과 주장 | 제품 버전·전체 예산·반복 불확실성·오염 검사 미확인. 선택된 페이로드와 환경을 벗어난 보안 등급화 금지 |
| ActiveSecHarness | 악성 도구 사용·연쇄 공격 차단; qwen3:4b 판정기·무상태 정책·Boolean taint | 공격 120·정상 120·연쇄 12개. Ring-0 차단율 1.000, 오탐 0.000, 12.7마이크로초 주장 | 자체 소규모 fixture이며 현실 대표성·동등한 종단간 비용·오염 통제 미확인. 정상 작업 거절률 비교도 설정 의존적 |
| RAG 보안 분석 | 정책 격리·표현 기밀성·쿼리 위조·소속 은닉; 기존 구현·인코더 3개 | 수백 개 정렬 쌍으로 임베딩 복원 등 주장. 정확한 수치표는 추출 초록에서 미확인 | 인코더·전체 지표·오염 검사 미확인. 공격자의 관찰·정렬 쌍 보유 조건 필요. 모든 RAG 접근통제의 실패로 일반화 금지 |

Copilot MSBuild의 토큰 절감은 정성 주장으로 수치·기준선·시험 조건이 없다. Gemini 4 Carbon 제공 발표에도 측정된 코딩·보안 성능 결과는 없다. AMD 설계·전력 절감 설명은 재현된 응용 벤치마크가 아니며 SK hynix 인증도 AI 성능 재현이 아니다.

### 사실 단계·중복·시간 감사

- **Frontier Models의 첫 패스 “검증 없음”은 최종 상태가 아니다.** 두 번째 패스가 연구 공개 3건을 확보했다. 다만 이를 신모델 출시 3건으로 바꾸면 과장이다.
- TNG 두 기록과 SK hynix 두 기록은 각각 같은 사실·같은 URL이므로 한 사건으로 합쳤다.
- **SK hynix 중복 상태의 code·regulatory는 한 연구자에서 unknown, 다른 연구자에서 no였다.** 정식 원장은 인프라 연구자의 명시적 no를 채택했다. 이는 코드 공개나 정부 승인을 인증 발표에서 추론하지 않는다는 범위다.
- **KT AIO-Net의 8월 운영 시작과 11월 공개를 구분했다.** 개인정보 조사에서도 10월 사고·신고를 11월 신규 사고로 재분류하지 않았다.
- **Oura–Counsel은 인수 합의이며 종결·승인 완료가 아니다.** 기존 서비스의 production·availability와 거래 상태를 섞지 않았다.
- **Missionforce 조달 자격은 수주가 아니다.** EU 지침 초안은 확정 의무가 아니며 뉴욕 연구센터의 임무는 완료된 독립 평가가 아니다.
- **날짜만 있는 11월 11일 자료는 번들의 예외 규칙으로 수용했다.** 06:00 이전 공개라는 정밀 시간 증거는 없다.
- **Reuters 접근 차단과 반복된 검색 무관 응답은 전 범위 누락 가능성을 높인다.** 검증 사건 수는 전 세계 실제 발생 사건 수가 아니다.

## 7 다음 확인 일정

- 다음 검증 회차 — B3·TNG·WikiTrace·APEX의 코드·가중치, ARE-bench·MMDM의 데이터·채점 구현과 정확한 모델 버전 확인. 공개 일정 자체는 미정이다.
- **다음 보안 검증 회차 — BypassGym 제품 버전·시험 예산, ActiveSecHarness 외부 적응형 공격, RAG 분석의 공격 전제와 평가 구현을 확인한다.** 재현 전 제품별 안전성 순위를 만들지 않는다.
- **다음 제품 점검 — 적격 Copilot 계정의 모델 노출·과금·좌석 API 권한, MSBuild 자동 설정을 확인한다.** Business Hub의 한국 지원·검증·요금 조건도 미확인 상태다.
- **다음 인프라 점검 — CNCF 관련 기록, NVIDIA 프리뷰 성숙도·Snapshot 전체 비용, SK Telecom 통합 결과를 확인한다.** SK hynix 인증서 식별자·유효기간·범위도 평가기관 자료로 대조한다.
- **다음 한국 후속 공시 — 개인정보위 조사 결과·노출 정보 범위, KT AX의 정의·절대 매출과 센터별 자금·고객·가동 일정을 확인한다.** KT AIO-Net 장비 확대도 운영 결과로 확인해야 한다.
- 2026-11-23 — EU 선거 지침 의견수렴 종료. 이후 최종 지침과 기존 DSA 의무를 구분한다.
- 2027-01-01 이전 — 뉴욕 등록 적용 대상·실무 지침·기한을 확인한다.
- **2027년 — AMD Verano 실제 출하, KT 신규 센터 순차 가동, 보도상 2027년 말 이전 예상인 Oura–Counsel 종결 여부를 각각 확인한다.** 모두 달성 결과가 아닌 후속 일정이다.

## 8 Coverage Audit

### 연구자 종료·검증·포함 현황

10개 연구자 모두 최종 결과를 제출해 terminal completion을 충족했다. 다만 번들에는 별도 프로세스 종료 코드가 없으므로 제출 완료 이상의 실행 상태를 주장하지 않는다.

initial_count·targeted_count는 해당 필드가 실제 제공된 범주에서만 표시했다. 나머지는 coverage_notes로 확인되는 발견 경로를 기록했으며, 전체 후보 수나 두 패스별 수를 역산하지 않았다.

| 범주 | 연구자 terminal completion | 후보·두 패스 기록 | 검증 | 고유 원장 포함 | 목표 대비 설명 |
|---|---|---|---|---|---|
| Frontier Models | 완료 | search_audit: 초기 0, 표적 3. 전체 후보 수 미제공 | 3 | 3 | 수량 부족 없음. 신모델 출시 아닌 연구 공개 |
| AI Research | 완료 | 패스별 search_audit 미제공. 정확일 검색·공식 목록에서 HF 발견 후 arXiv 원시각 확인 | 3 | 3 | 수량 부족 없음 |
| Agents/Developer Tools | 완료 | 패스별 수 미제공. 검색·GitHub 목록 후 개별 공식문 추출, 타사 뉴스룸 교차 탐색 | 3 | 3 | 수량 부족 없음. 단일 공급사 집중 |
| Open Source/Repos | 완료 | 패스별 수 미제공. 검색 후 HF·vLLM·TechCrunch 직접 추출 | 3 | 2 | 발견 부족 아님. TNG 중복 1건 통합 |
| Chips/Compute/Infrastructure | 완료 | 패스별 수 미제공. 영·한 검색 후 공급사·언론 직접 추출 | 3 | 3 | 수량 부족 없음. NVIDIA 묶음 발표 분할 안 함 |
| Enterprise/Applications | 완료 | 패스별 수 미제공. 기업·언론·한국어 검색 후 원문 추출 | 3 | 3 | 수량 부족 없음 |
| Funding/M&A/Business | 완료 | 패스별 수 미제공. 검색 후 날짜별 아카이브·개별 기사 추출 | 3 | 3 | 수량 부족 없음. 모두 B급 |
| Safety/Evaluation/Security | 완료 | 패스별 수 미제공. 일반·정확일 검색 후 공식 목록·arXiv 원시각 확인 | 3 | 3 | 수량 부족 없음. 연구 공개 중심 |
| Policy/Geopolitics | 완료 | search_audit: 초기 0, 표적 2. 별도 구간 밖 watchlist 1건 | 2 | 2 | 검증 목표 1건 부족. 검색·접근 한계이며 실제 사건 희소성 입증 아님 |
| Korea Exposure | 완료 | 패스별 수 미제공. 영·한 검색 후 국내 목록·공식 뉴스룸 추출 | 3 | 2 | 발견 부족 아님. SK hynix 중복 1건 통합 |

### 부족분과 제외 근거

- **Policy/Geopolitics: 첫 패스는 무관 검색 응답, Reuters 차단, 오래된 EU·BIS 페이지로 검증 0건이었다.** 두 번째 표적 패스에서 EU·뉴욕 2건을 확보했다. BIS에는 적격 새 발표가 없었고 FTC Hims and Hers 사안·EU 드론 협력은 충분한 AI 관련성이 확인되지 않았다. Nvidia 관련 재보도는 신규 구간 내 조치가 입증되지 않았으며 한국 오후 보도와 미 의회 후보는 마감 뒤였다. 목표 부족 1건은 그대로 남겼다.
- **Frontier Models: 첫 패스의 실패는 표적 패스에서 해소됐다.** Anthropic 11월 9일 공개와 OpenAI 11월 5일 공개는 제외했고, 비즈니스 프로필을 모델 출시로 채우지 않았다.
- **Open Source/Repos: 연구자 검증 수는 3건이나 TNG를 Frontier Models에 배정해 고유 포함은 2건이다.** 공개 모델을 기반으로 한 연구 공개와 신규 코드 공개를 혼동하지 않았다. vLLM 11월 2일·NVIDIA 일본 PII 11월 9일 자료는 구간 밖이었다.
- **Korea Exposure: 연구자 검증 수는 3건이나 SK hynix를 인프라에 배정해 고유 포함은 2건이다.** 11월 11일 오후의 GS–POSCO·병원 AI·자율항해 보도는 마감 뒤여서 제외했다.
- **AI Research와 Safety/Evaluation/Security: 발견 목록 날짜 대신 arXiv 원시각을 사용했다.** LingBot-Touch·Reframe·StealthyPoison 등 구간 이전 제출은 제외했다.
- **Chips/Compute/Infrastructure: Cisco·VMware 기사의 정확한 시각이 마감 이후여서 제외했다.** 관련 AMD 브리핑을 충분히 구별되지 않는 복수 사건으로 늘리지 않았다.
- **Enterprise/Applications와 Funding/M&A/Business: 같은 Oura 거래의 재보도를 별도 사건으로 세지 않았다.** 기업 응용 연구자가 확보하지 못한 날짜를 URL만으로 보완하지 않았고, 금융 연구자의 명시적 Bloomberg 시각 근거를 사용했다.
- **전역 중복 제거: 입력의 이벤트 기록 29건에서 TNG와 SK hynix의 동일 사건 중복을 각각 통합해 고유 사건 27건을 남겼다.** 정식 Event ID 원장은 섹션 3에만 한 번씩 기재했다. 섹션 2·4·5·6의 재언급은 추가 사건이 아니다.
- **검색 한계: 반복된 무관 검색 응답, Reuters DataDome 차단, 일부 429·시간초과·불완전한 아카이브가 보고됐다.** 패스별 수가 없는 8개 범주에 두 번째 패스의 수량을 만들어 넣지 않았다.

### Watchlist (미확인 후보)

- 후보: 미 하원 위원장들이 Nvidia CEO의 비공개 브리핑과 잠재적 소환장을 준비한다는 보도 (미포함 사유: 명시적 공개 시각이 2026-11-12 04:22 KST로 정확한 구간 밖이며, 소환장 발부와 관련 의혹의 사실도 확정되지 않음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/11/congress-to-call-jensen-huang-in-to-answer-for-alleged-chinese-spy-affair/))

- **수록 사건 수:** 27
