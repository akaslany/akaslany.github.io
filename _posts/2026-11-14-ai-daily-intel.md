---
layout: ai-intel
title: "AI Daily Intel — 2026-11-14"
date: 2026-11-14 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-14/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-14
- **기준 시각:** 2026-11-14T06:00:00+09:00
- **수집 구간:** [2026-11-13T06:00:00+09:00, 2026-11-14T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 20

## 1 오늘의 AI 한 문장

이번 번들에서 확인되는 중심 변화는 새 프런티어 모델의 성능 경쟁보다 에이전트의 결제·개발·운영 통합, 평가의 신뢰성, 그리고 이를 뒷받침하는 인프라와 자본의 확장이다.

공식 발표를 뒷받침하는 <br class="report-field-break" />Evidence A도 독립 성능 검증이나 상용 성과를 뜻하지 않는다. 아래 보고서는 제공된 번들만 편집했으며, 날짜만 공개된 자료는 번들의 달력일 중첩 기준을 유지했다. 정확한 시각이 있는 자료는 반개방 구간을 우선 적용했다.

## 2 핵심 신호 5

1. **에이전트 결제에 명시적 승인 경계가 도입됐다.**  
   OpenAI의 ChatGPT Wallet은 미국 내 제한된 대상에게 제공되며, 구매별 사용자 승인과 결제 토큰을 사용한다. 무제한 자율 구매, 한국 이용 가능, 거래 매출 또는 보안 우회 저항성이 검증된 것은 아니다.  
   Evidence A · [공식 발표](https://openai.com/index/introducing-chatgpt-wallet/)

2. **에이전트 운영 계층에 자본이 유입됐다.**  
   LangChain은 3억 달러 Series C와 30억 달러 기업가치를 발표했다. LangSmith 사용 조직 및 운영 사례는 회사 주장이고, 투자금은 매출이 아니다. 11월 20일 예정 기능은 아직 출시로 계산하지 않는다.  
   Evidence A · [회사 발표](https://www.langchain.com/blog/series-c)

3. **모델 점수보다 평가 설계와 응답 행동을 점검해야 한다.**  
   XYBench는 잘못된 사용자 전제를 교정하는 능력과 실제 답변의 강조점을 구분한다. Anthropic은 다중 턴·제품 설정·통계적 불확실성을 반영한 안전 평가를 권고했다. 두 자료 모두 독립 재현은 미확인이다.  
   Evidence A · [XYBench](https://huggingface.co/blog/allenai/xybench) · [안전 평가 방법론](https://www.anthropic.com/research/building-strong-safety-evaluations)

4. **오픈 추론 스택의 업데이트는 곧 마이그레이션 과제다.**  
   Transformers v5.23.0은 모델 통합과 내보내기 인터페이스를, llama.cpp v1.0.0은 API 변경·메모리 기능·서버 보강을 제시했다. 배포 사실은 확인됐지만 호환성·성능·보안 효과는 실제 환경에서 재검증해야 한다.  
   Evidence A · [Transformers](https://api.github.com/repos/huggingface/transformers/releases/tags/v5.23.0) · [llama.cpp](https://api.github.com/repos/ggml-org/llama.cpp/releases/tags/v1.0.0)

5. **AI 인프라에서는 매출·전망·공급 계획을 분리해야 한다.**  
   Cisco의 분기 매출과 연간 AI 인프라 매출 전망은 서로 다른 지표다. 한국 GPU 공급 재확인은 인도 완료가 아니며, 전력·용수 투자 추정액도 집행 확정액이 아니다.  
   Evidence A/B · [Cisco](https://www.cnbc.com/2026/11/12/cisco-csco-q1-2027-earnings.html) · [한국 GPU 공급](https://zdnet.co.kr/view/?no=20261113172804) · [전력·용수 계획](https://www.etnews.com/20261113000202)

## 3 영역별 AI 브리프

각 이벤트는 주관 카테고리에 한 번만 원장 등록했다. 다른 카테고리의 관련성은 Coverage Audit에서 설명한다. 상태의 yes는 해당 사실의 발표·공개 또는 명시된 기존 활동을 뜻하며, 이번 창 안의 신규 성과를 자동으로 의미하지 않는다.

### Frontier Models

검증 통과 이벤트 없음.

1차와 표적 2차 모두 적격 이벤트를 확보하지 못했다. Hydrogen의 기존 발표에 붙은 업데이트 날짜, arXiv 목록 날짜, 커뮤니티 제출 날짜를 새 모델 공개일로 대체하지 않았다. 이는 검색·접근 제약 아래의 증거 부족이지, 실제 이벤트 부재의 증명이 아니다.

### AI Research

  - **내용:** Ai2가 사용자 요청의 잘못된 전제를 식별하고 실제 목적에 맞게 답하는 능력을 평가하는 XYBench를 설명했다. 영어 질문 8,115개를 사용하며, 유용한 해법의 포함 여부와 그 해법을 강조하는지를 구분한다.
  - **근거 등급:** A — 공식 연구 설명. 저자 보고 결과이며 독립 재현은 미확인.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [huggingface.co](https://huggingface.co/blog/allenai/xybench)
  - 한계·한국 연결: 데이터·코드 링크는 개별 검사되지 않았다. 영어 평가이므로 한국어 성능을 보장하지 않는다.

  - **내용:** Google DeepMind가 SatWeave 위성 모자이크와 PARDIG 강수 추정의 과거 자료·실시간 피드를 공개한다고 발표했다. 새로운 WeatherNext 3 모델 출시가 아니라 데이터셋 공개다.
  - **근거 등급:** A — 공식 발표. 접근 조건·완전성·성능은 독립 검증되지 않음.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [deepmind.google](https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/)
  - 한계·한국 연결: KMA의 공개 자료 기여를 언급하지만 한국 강수·홍수 예측 성능이나 국내 배포는 확인되지 않았다. 위성 수에 관한 본문·캡션 불일치는 채택하지 않았다.

Anthropic 안전 평가 공개는 중복 등록하지 않고 Safety/Evaluation/Security에 배치했다.

### Agents/Developer Tools

  - **내용:** Copilot 앱 1.2.0 이상에서 GitHub Enterprise Server 지원이 일반 제공으로 전환됐다. GitHub.com 또는 GHE.com 로그인 후 GHES 계정을 추가할 수 있지만 GHES용 클라우드 세션은 지원하지 않는다.
  - **근거 등급:** A — GitHub 공식 변경 기록.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [github.blog](https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app)
  - 한계·한국 연결: 국내 GHES 사용 기업에 관련되지만 국내 고객 도입은 확인되지 않았다.

  - **내용:** GitHub가 Gemini 4 Hydrogen Flash의 Copilot 일반 제공 및 순차 배포를 발표했다. 여러 개발 인터페이스를 지원하며 기업 관리자는 모델 정책으로 접근을 통제할 수 있다.
  - **근거 등급:** A — GitHub 공식 변경 기록. 성능 향상은 별도 검증되지 않은 공급자 주장.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [github.blog](https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot)
  - 한계·한국 연결: 모든 계정의 즉시 접근을 의미하지 않는다. 모델의 최초 발표와 구별되는 Copilot 통합 이벤트이며, 한국별 가용성은 미확인이다.

  - **내용:** GitHub가 저장소 AI Scan 설정을 REST API로 관리하는 공개 프리뷰를 발표했다. 설정 활성화만으로 스캔이 실행되지 않으며, 실제 스캔에는 쓰기 권한과 AI 크레딧이 필요하다. GHES는 미지원이다.
  - **근거 등급:** A — GitHub 공식 변경 기록.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [github.blog](https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api)
  - 한계·한국 연결: 대규모 저장소 정책 자동화에 관련된다. 취약점 탐지 정확도나 국내 운영 성과는 제시되지 않았다.

LangChain 투자 유치는 Funding/M&A/Business에 배치했다.

### Open Source/Repos

  - **내용:** Transformers v5.23.0이 Inkling2·JEV·LFM3·LFM3-VL 통합과 Dynamo·ONNX Runtime·OpenVINO·ExecuTorch를 포괄하는 ExportedModel 인터페이스를 추가했다. 오디오 의존성과 expert-parallel API 변경에 주의가 필요하다.
  - **근거 등급:** A — 공식 저장소 릴리스 메타데이터·노트.
  - 공개시각: 2026-11-13T14:10:57Z.
  - **출처 URL:** [api.github.com](https://api.github.com/repos/huggingface/transformers/releases/tags/v5.23.0)
  - 한계·한국 연결: 라이브러리 통합일이지 해당 모델들의 최초 출시일은 아니다. 국내 개발·배포 환경의 호환성 시험이 필요하다.

  - **내용:** llama.cpp v1.0.0이 폐기 예정 API 제거, NextN/speculative API 편입, FP8 KV 캐시, 호스트 메모리 MoE 캐싱, 오디오·음성 엔드포인트 및 서버 보강을 제시했다.
  - **근거 등급:** A — 공식 저장소 릴리스 메타데이터·노트.
  - 공개시각: 2026-11-13T10:20:19Z.
  - **출처 URL:** [api.github.com](https://api.github.com/repos/ggml-org/llama.cpp/releases/tags/v1.0.0)
  - 한계·한국 연결: 로컬 실행이나 독립 보안 검증은 없었다. 국내 온프레미스 추론과 네이티브 바인딩에 마이그레이션 영향이 있다.

### Chips/Compute/Infrastructure

  - **내용:** HPE가 E2000 하이브리드 스토리지 구성과 냉각용 Rack Management Controller를 소개했다. 스토리지는 2027년 초, 컨트롤러는 HPE 시스템에 2027년 3월, AMD·Nvidia 지원은 6월로 예정됐다.
  - **근거 등급:** B — The Register의 공급자 귀속 보도.
  - 공개시각: 2026-11-13T16:15:00+00:00.
  - **출처 URL:** [www.theregister.com](https://www.theregister.com/storage/2026/11/13/hpe-debuts-hybrid-storage-configs-rising-ssd-costs-hit-supercomputing/5309679)
  - 한계·한국 연결: 현재 출하·배포가 아닌 미래 계획이다. 국내 AI/HPC 운영자의 저장 비용·밀도·액체냉각 검토에 관련된다.

  - **내용:** CNBC가 Nvidia 이사회의 11월 13일 발언을 인용했다. 이사회는 CEO 선임을 위한 서치펌 선정 중이며 잠재 후보와 공식 접촉하지 않았다고 밝혔다.
  - **근거 등급:** B — 이사회 발언을 명시적으로 인용한 보도.
  - 공개일 근거: 2026-11-13 이사회 발언 날짜. 기사 공개시각 미확인.
  - **출처 URL:** [www.cnbc.com](https://www.cnbc.com/2026/11/13/nvidia-huang-ceo-replacement-search.html)
  - 한계·한국 연결: 새 이벤트는 후임 탐색 절차 설명이며, 이전 사임이나 특정 후임 선임이 아니다. 한국 메모리·인프라 공급망 변경을 발표한 것도 아니다.

Cisco 실적·전망은 Funding/M&A/Business에 배치했다.

### Enterprise/Applications

  - **내용:** OpenAI가 American Express·Mastercard·Visa와 ChatGPT Wallet을 발표했다. dots에서 미국 거주 성인 ChatGPT Pro 가입자와 적격 미국 발급 카드에 제한적으로 제공한다. 구매별 확인·승인 후 실제 카드정보 대신 결제 토큰을 사용한다.
  - **근거 등급:** A — 공식 발표. TechCrunch 보도는 <br class="report-field-break" />Evidence B 보조 근거.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [openai.com](https://openai.com/index/introducing-chatgpt-wallet/)
  - 보조 <br class="report-field-break" />출처 URL: [techcrunch.com](https://techcrunch.com/2026/11/13/chatgpts-new-wallet-lets-ai-agents-shop-and-check-out-for-you/)
  - 한계·한국 연결: 사전 한도 내 완전 위임 구매는 미래 방향이다. 완료 거래·제휴 수익·독립 보안 시험·한국 사용자 및 한국 발급 카드 지원은 미확인이다.

  - **내용:** langchain-openai 1.8.0이 OpenAIClassifier 지원을 추가하고 Python 3.10 지원을 종료했다. Python 3.11 이상과 langchain-core 1.8.0 이상이 필요하며, Python 3.10 사용자는 1.7.x 계열에 남는다.
  - **근거 등급:** A — 공식 저장소 릴리스와 API 시각 확인.
  - 공개시각: 2026-11-13T16:48:27Z.
  - **출처 URL:** [github.com](https://github.com/langchain-ai/langchain/releases/tag/langchain-openai%3D%3D1.8.0)
  - 한계·한국 연결: 릴리스 노트의 Decisions API 일반 제공 언급은 해당 API의 별도 출시일을 검증하지 않는다. 국내 애플리케이션의 런타임·의존성 변경 관리가 필요하다.

LangChain 투자 유치는 Funding/M&A/Business에 배치했다.

### Funding/M&A/Business

  - **내용:** LangChain이 CapitalG 주도의 3억 달러 Series C와 30억 달러 기업가치를 발표했다. GIC·DFJ Growth·IVP·Sapphire Ventures 등이 참여했다.
  - **근거 등급:** A — 회사 공식 발표. TechCrunch의 시각 있는 보도가 보조 근거.
  - 공개일: 공식 발표 2026-11-13. 보조 보도는 2026-11-13T11:37:00-08:00.
  - **출처 URL:** [www.langchain.com](https://www.langchain.com/blog/series-c)
  - 보조 <br class="report-field-break" />출처 URL: [techcrunch.com](https://techcrunch.com/2026/11/13/ai-agent-startup-langchain-hits-3b-valuation/)
  - 한계·한국 연결: availability와 production은 기존 LangSmith 플랫폼 및 회사가 밝힌 운영 사례에 한정한다. 7,000개 이상 사용 조직 주장은 독립 감사되지 않았으며, 투자금은 매출이 아니다. 한국 투자자·고객은 확인되지 않았다.

  - **내용:** Cisco가 회계연도 2027년 1분기 매출 185억 달러, 전년 대비 24% 증가와 조정 EPS 1.40달러를 보고했다. 하이퍼스케일러 AI 인프라 연간 매출 전망은 90억 달러로 상향했다.
  - **근거 등급:** A — CNBC 보도 수치를 추출된 Cisco 실적 발표가 교차 확인. 창 내 시각은 CNBC 보도에 근거한다.
  - 공개시각: 2026-11-12T16:11:00-05:00, 번들상 11월 13일 06:11 KST.
  - **출처 URL:** [www.cnbc.com](https://www.cnbc.com/2026/11/12/cisco-csco-q1-2027-earnings.html)
  - 한계·한국 연결: revenue는 실현된 회사 매출에 해당한다. 90억 달러는 AI 부문의 미래 전망이지 이미 인식한 매출이 아니다. 한국 매출·계약은 미공개다.

### Safety/Evaluation/Security

  - **내용:** Anthropic이 안전 평가의 구성 타당성, 다중 턴 시나리오, 판정기 보정, 사전등록, 불확실성 및 재현 가능한 설정 공개를 권고했다. 위험한 평가에는 샌드박스와 필요시 실시간 감시를 강조했다.
  - **근거 등급:** A — 공식 방법론 공개. 독립 재현된 순위표나 신규 모델 출시가 아님.
  - 공개일: 2026-11-13, 시각·시간대 미공개.
  - **출처 URL:** [www.anthropic.com](https://www.anthropic.com/research/building-strong-safety-evaluations)
  - 한계·한국 연결: 과거 실험·운영 사례를 새 이벤트로 재계산하지 않는다. 규제 제정이 아닌 연구 권고이며, 한국어 평가 범위는 확인되지 않았다.

Wallet의 구매 승인·자격정보 격리는 Enterprise/Applications의 동일 이벤트로 통합했다.

### Policy/Geopolitics

  - **내용:** The Register가 HMICFRS의 영국 경찰 사후 얼굴인식 감독 결과를 보도했다. 잠재 일치를 증거로 오인하는 문제, 보강 조사·이미지 보관 관행의 불일치와 법정 안전장치 필요성을 지적했다.
  - **근거 등급:** B — 감독 결과 발췌와 실명 발언에 근거한 보도. 원보고서 추출은 시간 초과.
  - 공개시각: 2026-11-13T10:15:00+00:00.
  - **출처 URL:** [www.theregister.com](https://www.theregister.com/security/2026/11/13/brit-police-watchdog-says-cops-use-of-facial-recog-risks-wrongful-arrests/5309379)
  - 한계·한국 연결: production은 기존 경찰 활용, regulatory는 감독·권고에 해당한다. 새로운 법률 통과가 아니다. 한국 공공 생체인식 거버넌스에는 비교 참고다.

  - **내용:** TechCrunch가 Will DePue의 공개 모델 가중치 분석을 인용해 중국 AI 기업 모델에서 Blackwell 사용과 일치하는 하드웨어 지문이 발견됐다는 주장을 보도했다.
  - **근거 등급:** B — 실명 분석을 귀속한 보도. 원방법론과 독립 재현은 미확인.
  - 공개일 근거: TechCrunch의 2026-11-13 날짜별 아카이브. 기사 추출에는 공개시각 없음.
  - **출처 URL:** [techcrunch.com](https://techcrunch.com/2026/11/13/export-banned-nvidia-chips-are-behind-chinas-most-powerful-ai-models-uh-oh-jensen/)
  - 한계·한국 연결: GPU 소재지, 전체 학습 장비 구성, 불법 수출을 입증하지 않는다. 한국 호스팅·국경 간 연산 제공자의 준법 검토에는 간접 관련된다.

### Korea Exposure

  - **내용:** ZDNet Korea가 배경훈 부총리의 11월 13일 발언을 인용해 Nvidia의 기존 한국 GPU 26만 개 공급 계획 재확인을 보도했다.
  - **근거 등급:** B — 실명 정부 관계자 발언을 인용한 국내 보도.
  - 최초 공개시각: 2026-11-13T17:31:00+09:00. 11월 14일 09:00 수정은 창 밖.
  - **출처 URL:** [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261113172804)
  - 한계·한국 연결: 공급 계획 재확인을 인도 완료로 읽어서는 안 된다. 기사에 등장하는 B200 환산 연산량은 실물 GPU 개수와 다르다. 원본과 수정본 비교가 없어 세부 내용의 컷오프 이전 존재 여부는 미확인이다.

  - **내용:** 삼성메디슨이 홍천에 500억 원, 14,548㎡ 규모 제조동을 준공했다고 공식 발표했다. AI 보조 진단 기능을 포함한 초음파 제품군의 생산 기반이며, 첫 제품 출하 사진 설명이 제시됐다.
  - **근거 등급:** A — 삼성 공식 발표.
  - 공개일: 2026-11-13, 시각 미공개.
  - **출처 URL:** [news.samsung.com](https://news.samsung.com/kr/삼성메디슨-홍천-신규-제조동-준공-글로벌-의료기)
  - 한계·한국 연결: 2030년 생산능력 두 배는 목표다. 새로운 진단 모델 출시·규제 허가·AI 귀속 매출의 증거는 아니다.

  - **내용:** 전자신문이 국회 설명회에서 제시된 2036년까지 전력 79조 원·용수 5조 원 인프라 투자 추정치를 보도했다. 약 58조 원의 국비 예상이 포함되며 검토 사업에 AI 데이터센터·피지컬 AI가 들어간다.
  - **근거 등급:** B — 정부 설명회 내용을 귀속한 국내 보도.
  - 공개시각: 2026-11-13T14:25:00+09:00.
  - **출처 URL:** [www.etnews.com](https://www.etnews.com/20261113000202)
  - 한계·한국 연결: 총액 전체가 AI 전용 예산은 아니다. 추정·제안이지 전액 예산 확정이나 집행을 뜻하지 않는다.

  - **내용:** 전자신문이 아이비스의 스캐너 간 Ki-67 검출 정규화 및 IHC 주석의 H&E 전이 연구 결과를 보도했다. 기존 Qanti IHC 제품의 국내 의료기관 공급·유상 공급·식약처 인허가도 설명했다.
  - **근거 등급:** B — 실명 기업·대표 발언에 귀속된 연구 및 사업 현황 보도.
  - 공개시각: 2026-11-13T15:02:00+09:00.
  - **출처 URL:** [www.etnews.com](https://www.etnews.com/20261113000228)
  - 한계·한국 연결: 연구 발표 학회는 창 이전이다. 이번 이벤트는 11월 13일 공개 설명이며, production·revenue·regulatory는 기존 제품에 한정한다. 연구 방법의 임상 배포·신규 허가·신규 매출을 의미하지 않는다. 약 20개 기관 범위에는 유상 공급과 도입·파일럿 접촉이 혼재한다.

## 4 기술→산업 전달경로

| 출발점 | 산업 전달경로 | 현재 확인된 단계 | 아직 필요한 증거 |
|---|---|---|---|
| Wallet의 구매별 승인·토큰화 | 대화형 추천 → 구매 승인 → 결제망·가맹점 연동 | 제한적 제공 발표 | 거래 완료, 승인 우회 방지, 상업 조건, 한국 지원 |
| Copilot 모델·GHES 통합 | 개발 인터페이스 선택 확대 → 기업 정책·인증 연동 | 일반 제공 또는 순차 배포 발표 | 계정별 가용성, GHES 지원 범위, 비용·생산성 실측 |
| LangSmith와 투자금 | 에이전트 개발 → 관측·평가·거버넌스 → 운영 확장 | 투자 발표·회사 귀속 기존 고객 사례 | 유료 고객 정의, 매출, 독립 운영 성과 |
| 오픈 라이브러리 업데이트 | 모델 로딩·내보내기 → 로컬/서버 배포 → 애플리케이션 | 코드 릴리스 | 하드웨어별 호환성, API 변경 대응, 보안 회귀 시험 |
| 기상 데이터 공개 | 위성·강수 자료 → 외부 연구 → 지역별 응용 | 공개 가용성 발표 | 라이선스·누락 확인, 독립 지역 평가, 한국 검증 |
| 네트워크·스토리지·냉각 | 연산 확장 → 데이터 이동·저장·열관리 | 실적·전망 또는 미래 제품 계획 | 실제 출하, 워크로드별 처리량, 운영 비용 |
| 한국 GPU·전력·용수 계획 | 조달·기반시설 → 데이터센터 수용 능력 | 공급 재확인·투자 추정 | 실물 인도, 예산 확정, 전력·용수 연결 일정 |
| 국내 의료 AI | 연구 일반화 → 허가 범위 확인 → 병원 적용·제조·판매 | 기존 제품 공급 및 제조동 준공 | 실험 방법의 임상 검증, AI 귀속 매출, 유상·파일럿 구분 |

이 전달경로는 가능성과 의존성을 설명하는 것이며, 각 단계의 전환이 이미 실현됐다는 주장은 아니다.

## 5 AI Stack Signal Map

| 스택 계층 | 이번 신호 | 강도와 제약 |
|---|---|---|
| Frontier model | 검증 통과 이벤트 없음 | Hydrogen 최초 발표를 Copilot 통합과 혼동하지 않음 |
| 데이터·평가 | XYBench, PARDIG/SatWeave, Anthropic 방법론 | 공식 공개 근거는 강함. 결과의 독립 재현은 미확인 |
| 모델 실행·배포 | Transformers, llama.cpp | 코드 공개 확인. 호환성·성능·보안 효과 미검증 |
| 개발·에이전트 제어 | Copilot GHES, Hydrogen 통합, AI Scan REST | 가용성·설정 관리 변화. 전면 배포·생산성 향상과 구별 |
| 운영 플랫폼 | LangChain 투자, OpenAI 통합 패키지 | 자본 확충과 런타임 변경. 신규 운영 성과와 구별 |
| 애플리케이션·결제 | ChatGPT Wallet | 제한적 출시와 승인 설계. 거래 실적·한국 접근 미확인 |
| 물리 인프라 | Cisco, HPE, 한국 GPU·전력·용수 | 실적·전망·출하 예정·투자 제안이 혼재 |
| 의료·제조 | 삼성메디슨, 아이비스 | 제조·기존 제품 현황과 실험적 AI 성능을 분리 |
| 거버넌스·지정학 | 영국 얼굴인식 감독, Blackwell 지문 주장 | 감독 권고는 법률 제정이 아니며, 지문은 불법 수출의 증거가 아님 |

## 6 반증·과장·재현성 감사

### 벤치마크 및 성능 주장

| 대상 | 과제·기준선 | 지표·조건 | 공개·오염·독립 재현 감사 |
|---|---|---|---|
| XYBench | 잘못된 요청 전제 식별과 실제 목표 해결. 사람 답변 및 Claude Sonnet 4.6·GPT-5·Gemini 3.1 Pro·Qwen3.5-9B·DeepSeek-V4 Pro | 영어 질문 8,115개, 단일 턴·질문당 1회 응답. Stack Overflow에서 실제 목표 강조 35–41%, 실제 목표 해법 59–71%, 문자 그대로의 요청 해법 75–86%. Sonnet 4.5 판정기, 500개 응답을 검토자 2명이 평가 | 저자 보고. WikiHow 기반 합성 자료 비중과 공개 웹 학습 중첩 위험이 있다. 오염 통제가 입증되지 않았으며 강조점 판정의 사람 일치도가 상대적으로 낮다. 독립 재현 미확인 |
| Anthropic 안전 평가 | 유해 요청·정상 요청 및 다중 턴 적절성. 과거 Opus 5/5.5, Fable 5.1 API/제품 설정 비교 | 한 턴이라도 부적절하면 대화 실패. 사기 예시 98% 대 94%는 통계적으로 유의하지 않음. API/제품 예시 60% 대 94%는 시스템 프롬프트 차이 포함 | 새 방법론 공개이며 새 모델 성능 발표가 아니다. 프롬프트·모델/판정기 버전·표본·신뢰구간 공개가 중요하다. 학습 오염 경고와 신규 평가 자료 권고는 있으나 예시별 완전한 오염 감사·독립 재현은 미확인 |
| PARDIG | 시간별 강수 탐지. NASA IMERG-Final·IMERG-Early 기준 | CSI, 약한~중간 강수에서 IMERG-Final 대비 30% 초과 개선 주장. 2016–2023년 미국·유럽·일본 레이더, 0.2–25mm/h 문턱값, 36,000개 이상 관측소 평가 설명 | 개발자 보고. 학습·평가 분리와 중첩 통제 미확인. 지상 관측 부족 지역의 신뢰도는 기대와 검증을 구별해야 한다. 독립 재현 및 한국 성능 미확인 |
| HPE E2000 | HPC·AI/시뮬레이션 저장 처리량·랙 용량. 이전 E2000 구성 기준이나 완전한 기준 구성 미공개 | 최대 처리량 41% 증가, 읽기 116GB/s·쓰기 92GB/s, 사용 가능 용량 최대 32% 증가 주장. SSD·32TB SAS-4 HDD와 Lustre | 워크로드·큐 깊이·드라이브 수·캐시·버전 조건 부족. 데이터 오염 개념은 비해당. 공급자 주장이고 독립 실측 미확인 |
| 아이비스 | 스캐너 간 Ki-67 검출 및 IHC→H&E 전이. 비정규화 대상 스캐너와 기존 IHC 학습 모델 기준 | mAP50 0.079/0.350에서 0.795/0.799, 참조 스캐너 0.814. H&E 재현율 약 10%p 향상 주장. 외부 유방암 H&E 24슬라이드·100영역 | 기업 귀속 보도. 원논문·분할·신뢰구간·정규화 학습·누출 통제 미검사. 외부 자료 사용이나 대학 협업은 독립 재현과 같지 않다 |
| Copilot Hydrogen | Gemini 3.8 Flash 대비 지시 이행 향상 주장 | 과제·기준선 세부 설정·정량 지표 미공개 | 성능 우위 판단 불가. 오염·조건·독립 재현 미확인. 통합 가용성만 채택 |

### Watchlist 성능 주장 감사

- **Hydrogen: Terminal-Bench 4.1의 57% 대 18.2%, Intelligence Index의 high 51·xhigh 54 대 Argon 50은 공급자 보고다.** 사고 설정이 다르고 전체 하네스·샘플링·연산 통제·오염·독립 재현은 미확인이다. 원발표가 창 밖이므로 핵심 성능 신호에서 제외했다.
- **Darwin 날씨 평가: 24개 도시, 11월 7일까지 ERA5 검증에서 7일 최고기온 RMSE 2.09℃ 대 ECMWF AIFS 2.41℃라는 저자 주장이다.** 데이터 분할·오염 통제·독립 재현·아티팩트 최초 공개일이 미확인이고, 비상업용 의사결정 코어를 제한 없는 예보 엔진으로 표현할 수 없다.
- **CapLite: AgentDojo 공격 에피소드 13,935개에서 공격 성공 0건, 공격 중 효용 29.0% 대 CaMeL 27.2%, 에피소드당 17.1k 토큰은 저자 실험이다.** 15개 오픈웨이트 모델 조건 밖으로 일반화할 수 없고 오염 통제·독립 재현은 미확인이다.
- **CodeQL 재작성 연구: 취약 흐름 172개에서 흐름당 3회 경고 인지 재작성으로 26.2%의 경고를 숨겼다는 주장이다.** 경고 비인지 기준선은 0건이며, 다른 분석기 검사도 같은 연구의 일부다. 독립 재현이나 오염 통제는 미확인이다.
- **AgentSSL·CoReMem·DiVR·Goal Encoding·ArchSpace·SOV-Transcribe-1의 성능·방법 주장은 원연구·아티팩트 검증이 부족하거나 창 밖이다.** 번들에 없는 세부 지표를 보충하지 않았다.

### 비벤치마크 오독 방지

- **A/B/C는 명시적으로 유지했다.** A는 공식 발표·저장소 또는 번들 내 원문 교차 확인, B는 귀속 가능한 보도, C는 핵심 채택에 부족한 후보 근거다. C 후보는 원장에 넣지 않았다.
- Wallet의 승인·토큰화는 설계 설명이지 프롬프트 주입·사기·승인 우회 방어의 실증 결과가 아니다.
- llama.cpp의 SSRF·CORS·DNS rebinding 보강은 모든 배포가 안전하다는 보장이 아니다.
- **Blackwell 지문 분석은 하드웨어 소재지·수출 위반·전체 학습 구성을 확정하지 못한다.** 창 밖 후속 보도도 독립 확인으로 소급하지 않았다.
- **한국 GPU 기사는 컷오프 이후 수정됐다.** 원본 비교가 없어 세부 조달 수치의 창 내 공개 여부는 확정할 수 없다.
- 투자금·평가액·가이던스·투자 추정·생산능력 목표를 실현 매출·집행·인도로 바꾸지 않았다.
- 의료기기 기존 허가와 판매는 새 연구 방법의 허가·임상 배포를 의미하지 않는다.

## 7 다음 확인 일정

| 시점 | 확인 대상 | 통과 조건 |
|---|---|---|
| 다음 편집 주기 | 날짜·버전 취약점 | Hydrogen 변경 이력, 한국 GPU 기사 원본, Blackwell 원분석의 최초 공개 근거 확보 |
| 다음 편집 주기 | 코드 릴리스 | Transformers 내보내기·모델 로딩, llama.cpp 바인딩·서버 회귀, langchain-openai Python 전환 시험 |
| 다음 편집 주기 | 평가 자료 | XYBench 데이터·코드 이력, Anthropic 평가 명세, PARDIG 라이선스·분할, 아이비스 원초록·연구 자료 확보 |
| 배포 확대 공지 시 | Copilot·Wallet | 실제 계정 접근, 관리자 정책, 요금, 지원 카드·가맹점·한국 자격 확인 |
| 2026-11-20 예정 | LangChain 기능 행사 | 예정 기능의 실제 공개·접근 가능 여부와 운영 증거 확인 |
| 차기 실적·공시 시 | Cisco·LangChain | 실현 AI 매출과 전망 비교, 투자 조건·유료 고객·매출 정의 확인 |
| 2027년 초·3월·6월 예정 | HPE 스토리지·냉각 | 출하 및 플랫폼 지원 일정 준수, 조건을 공개한 독립 처리량 시험 |
| 정부 예산·조달 문서 공개 시 | 한국 인프라 | AI 전용 금액, 국회 확정액, 물리 GPU 인도와 환산 연산량 구분 |
| 감독기관 후속 공개 시 | 영국 얼굴인식·수출통제 | 원감사 보고서·대응 기한·법안 상태, 지문 주장과 실제 법집행 결과 구분 |

일정은 번들에 명시된 예정일과 조건부 확인 시점만 사용했다. 예정일은 완료 사실이 아니다.

## 8 Coverage Audit

### 연구자 완료 및 두 차례 탐색

번들은 10개 카테고리 모두 최종 결과를 반환했으므로 연구자 10명 전원의 terminal completion을 확인한다. 별도의 실행 로그나 종료코드는 제공되지 않았다.

아래 1차·표적 2차 수치는 search_audit의 적격 확보 수이며, 탐색한 전체 후보 수가 아니다. 전체 후보 모수는 어느 카테고리도 완전하게 제공하지 않았다. events 배열과 watchlist 배열의 제출 건수를 별도로 표시한다.

| 카테고리 | 완료 | 1차 / 표적 2차 | events 제출 / watchlist 제출 | 검증 통과 | 주관 원장 포함 | 목표 대비 검증 부족 |
|---|---|---|---|---:|---:|---:|
| Frontier Models | 완료 | 0 / 0 | 0 / 5 | 0 | 0 | 3 |
| AI Research | 완료 | 1 / 2 | 3 / 2 | 3 | 2 | 0 |
| Agents/Developer Tools | 완료 | 세부 수치 미제공 | 4 / 0 | 4 | 3 | 0 |
| Open Source/Repos | 완료 | 2 / 0 | 2 / 3 | 2 | 2 | 1 |
| Chips/Compute/Infrastructure | 완료 | 세부 수치 미제공 | 3 / 1 | 3 | 2 | 0 |
| Enterprise/Applications | 완료 | 2 / 1 | 3 / 4 | 3 | 2 | 0 |
| Funding/M&A/Business | 완료 | 2 / 1 | 3 / 3 | 3 | 2 | 0 |
| Safety/Evaluation/Security | 완료 | 1 / 1 | 2 / 2 | 2 | 1 | 1 |
| Policy/Geopolitics | 완료 | 0 / 2 | 2 / 2 | 2 | 2 | 1 |
| Korea Exposure | 완료 | 2 / 2 | 4 / 2 | 4 | 4 | 0 |

주관 원장 포함 수가 검증 통과 수보다 적은 경우는 글로벌 중복 제거·분류 때문이며 검증 취소가 아니다. watchlist 제출 건수에는 카테고리 간 중복과 ElevenAI의 동일 사건 중복이 포함된다.

### 카테고리별 부족·제외 설명

- **Frontier Models:** 1차 공식 모델·언론 탐색에서 검색 무관 결과, Reuters 429, OpenAI 차단 등이 발생했다. 2차 논문·저장소·한국 기사 탐색과 직접 추출도 적격 신규 이벤트를 확보하지 못했다. Hydrogen 업데이트 날짜, 창 시작 전 논문 제출, 11월 12일 음성 모델 발표를 재날짜화하지 않아 검증 0·포함 0, 목표 대비 3건 부족이다.
- **AI Research:** 1차 XYBench 1건에 2차 Anthropic 방법론·DeepMind 데이터 공개 2건이 추가돼 검증 목표를 충족했다. Anthropic은 안전 카테고리로 이동해 주관 포함은 2건이다. 오래된 논문·튜토리얼·라이브러리 배포는 연구 성과로 채우지 않았다. 초기 coverage_notes의 “1건”은 1차 상황이며 최종 합계와 충돌하지 않게 읽었다.
- **Agents/Developer Tools:** 검증 4건 중 투자 유치를 Funding/M&A/Business로 이동해 3건을 포함했다. search_audit 및 별도 2차 탐색 수치는 없다. GitHub 직접 추출과 TechCrunch 보도가 근거이며, 다른 카테고리의 2차 기록을 이 연구자의 탐색으로 대체하지 않았다.
- **Open Source/Repos:** 1차 저장소 시각 확인 2건, 2차 추가 0건이다. vLLM·SGLang·Ollama의 창 밖 릴리스, 오래된 모델·논문, 신규성·라이선스가 불명확한 날씨 후보를 제외했다. 검증·포함 2건으로 1건 부족이다.
- **Chips/Compute/Infrastructure:** 검증 3건 중 Cisco를 사업 카테고리로 이동해 주관 포함 2건이다. 별도 2차 수치는 없다. 제조사·언론 직접 추출을 수행했으나 Reuters 차단, AMD 링크 오류, Cerebras 날짜·원문 확보 실패가 있었다. Blackwell 후속 기사는 컷오프 이후라 제외했다.
- **Enterprise/Applications:** 1차 Wallet·LangChain 투자 2건, 2차 통합 패키지 1건으로 검증 3건이다. 투자 유치를 사업 카테고리로 옮겨 포함 2건이다. ElevenAI·KT·Nectar는 실제 공개 시점이 창 밖이며, 후기 보도로 재날짜화하지 않았다.
- **Funding/M&A/Business:** 1차 LangChain·Cisco, 2차 Wallet 제휴로 검증 3건이다. Wallet을 애플리케이션으로 통합해 포함 2건이다. Norwest는 창 시작 전, Cerebras는 원공개 시각 미확인, Nvidia 사임은 창 밖이다. 1차의 “2건”과 2차의 “추가 1건”을 합친 최종 결과를 적용했다.
- **Safety/Evaluation/Security:** 1차 Anthropic 1건, 2차 Wallet 1건으로 검증 2건이며 목표 대비 1건 부족이다. Wallet 중복을 제거해 주관 포함은 1건이다. 인접 arXiv 논문의 명시적 제출시각은 모두 창 시작 전이며 목록 날짜를 대신 쓰지 않았다. 검색 무관 결과와 기관 사이트 접근 제약이 완전성을 제한했다.
- **Policy/Geopolitics:** 1차 검증 0건, 2차 영국 감독·Blackwell 분석 보도 2건으로 포함 2건, 1건 부족이다. EU·BIS의 오래된 목록, AI 구성 불명확 계약, 창 밖 한국 감시단·미국 의원 질의를 제외했다. 정부·원보고서 접근 제약 때문에 전 세계 사건 부재를 주장할 수 없다.
- **Korea Exposure:** 1차 2건에 2차 인프라 계획·병리 연구 공개 2건을 더해 검증·포함 4건이다. 인수 협상과 안경 품절은 확인 부족으로 제외했다. AI 요소가 기존 제품·계획과 섞인 일반 실적도 채우기용으로 쓰지 않았다. GPU 기사의 컷오프 이후 수정 한계는 유지했다.

### 글로벌 중복 제거 및 증거 정리

- **LangChain 투자 유치는 세 카테고리의 동일 ID를 하나로 통합했다.** 공식 발표가 있으므로 <br class="report-field-break" />Evidence A를 채택했고, 기존 플랫폼 운영 주장은 회사 귀속임을 유지했다.
- **Cisco 실적·AI 매출 전망은 서로 다른 두 ID가 같은 실적 발표를 설명했다.** 11월 13일 KST 공개에 대응하는 인프라 카테고리 ID를 정본으로 유지했다. CNBC의 정확한 시각은 날짜 적격성, 추출된 회사 발표는 재무 수치 확인에 사용했다.
- **Wallet의 애플리케이션·제휴·보안 항목은 같은 출시 사건이다.** 애플리케이션 카테고리 ID 하나를 유지하고 공식 원문으로 <br class="report-field-break" />Evidence A를 채택했다.
- **Anthropic 안전 평가의 연구·안전 항목은 같은 공개다.** 안전 카테고리에 한 번 등록했다. regulatory는 규제 조치가 아니라는 명시적 판단인 no를 적용했다.
- **Hydrogen의 창 밖 최초 발표와 창 안 Copilot 통합은 다른 사건이다.** 전자는 watchlist, 후자는 원장에 남겼다.
- **Blackwell 분석의 TechCrunch 보도와 창 밖 Register 후속 보도는 같은 분석을 다룬다.** 후속 보도를 추가 이벤트·독립 재현으로 계산하지 않았다.
- **SOV-Transcribe-1의 카테고리 간 중복, ElevenAI의 서로 다른 후보 ID는 아래 watchlist에서 각각 한 줄로 통합했다.** ElevenAI 가용성 서술 차이는 핵심 채택 판단에 사용하지 않았다.
- **C-grade 항목은 핵심 원장에 포함하지 않았다.** 후보가 부족한 카테고리에 약한 사건을 배분하지 않았다.

### Watchlist (미확인 후보)

- 후보: Google Gemini 4 Hydrogen 최초 발표 (미포함 사유: 원발표가 11월 12일이며 11월 13일 수정의 실질 변경 내용 미확인 / <br class="report-field-break" />출처: [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/))
- 후보: DiVR 확산 언어모델 재생성 결정 연구 (미포함 사유: 명시적 제출시각이 창 시작 전이며 성능 독립 검증 없음 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17320))
- 후보: Goal Encoding in LLMs (미포함 사유: 명시적 제출시각이 창 시작 전이며 코드·데이터 및 인과 주장 독립 확인 없음 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17297))
- 후보: ArchSpace 아키텍처 연구 평가 플랫폼 (미포함 사유: 명시적 제출시각이 창 시작 전이며 플랫폼·실험 검증 부족 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17332))
- 후보: Salesforce SOV-Transcribe-1 (미포함 사유: 11월 12일 발표로 창 밖이며 아티팩트·순위 독립 확인 없음 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/salesforce-sovereign-intelligence/sov-transcribe-1))
- 후보: AgentSSL 반지도 학습 에이전트 연구 (미포함 사유: 제출시각이 창 시작 전이며 실험 결과는 저자 주장 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17323))
- 후보: CoReMem 저장소 코딩 메모리 연구 (미포함 사유: 제출시각이 창 시작 전이며 ChainSWE 향상 독립 재현 없음 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17316))
- 후보: VIDRAFT Darwin 날씨 리더보드·의사결정 코어 (미포함 사유: 신규 공개 시점·우월성 미확인, 비상업용 가중치를 제한 없는 오픈소스 예보 엔진으로 볼 수 없음 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/FINAL-Bench/which-weather-model-is-most-accurate-we-score-them))
- 후보: Zyphra ZONOS3-Mini (미포함 사유: 11월 12일 공개로 창 밖이며 연결된 코드·가중치 미검사 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/Zyphra/zonos3-mini))
- 후보: Register의 Blackwell 체크포인트 포렌식 후속 보도 (미포함 사유: 종료시각 16분 후 공개이며 동일 분석의 추가 사건으로 계산하지 않음 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/ai-and-ml/2026/11/13/chinese-ai-labs-are-training-models-on-nvidias-blackwell-despite-export-controls-says-ex-openai-engineer/5309891))
- 후보: ElevenAI 팀 회의·받아쓰기·후속 작업 프리뷰 (미포함 사유: 11월 13일 보도지만 실제 출시는 11월 11일이며 창 내 별도 변화 미확인 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/13/elevenlabs-new-app-combines-meeting-note-taking-and-dictation-for-teams/))
- 후보: KT AIO-Net 네트워크 분석 에이전트 운영 사례 (미포함 사유: 원공개가 11월 11일이며 기존 운영을 새 사건으로 재계산하지 않음 / <br class="report-field-break" />출처: [news.microsoft.com](https://news.microsoft.com/source/features/digital-transformation/kt-meisters-and-microsoft-engineers-build-ai-agents-to-spot-network-issues-before-customers-do/))
- 후보: Nectar Creator Agent (미포함 사유: 11월 12일 날짜만 확인됐으며 창 내 공개시각을 확정할 수 없음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/12/nectar-launches-an-ai-agent-to-automate-creator-discovery-and-outreach-for-brands/))
- 후보: Norwest 40억 달러 펀드 (미포함 사유: 명시적 공개시각이 창 시작 전 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/12/norwest-pushes-deeper-into-ai-with-new-4b-fund/))
- 후보: Cerebras 분기 실적·Microsoft 계약 (미포함 사유: 원공개시각 미확인, 표시된 날짜는 11월 12일이며 1차 실적 자료 추출 실패 / <br class="report-field-break" />출처: [www.cnbc.com](https://www.cnbc.com/2026/11/12/cerebras-systems-cbrs-q3-earnings-report-2026.html))
- 후보: Nvidia Jensen Huang 사임·Colette Kress 임시 CEO 선임 (미포함 사유: 원발표가 시각 없는 11월 12일로 창 밖이며 후속 탐색 절차 설명과 구별 / <br class="report-field-break" />출처: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition))
- 후보: CapLite 프롬프트 주입 방어 연구 (미포함 사유: 제출시각이 창 시작 전이며 저자 성능 주장 독립 재현 없음 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17115))
- 후보: CodeQL 유지보수 재작성 견고성 연구 (미포함 사유: 제출시각이 창 시작 전이며 교차 분석기 실험도 독립 재현은 아님 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.17123))
- 후보: 한국 시민 AI 안전 모니터링단 출범 (미포함 사유: 보도 가능 시각과 행사가 11월 12일이며 11월 13일 조간 표기가 이를 대체하지 않음 / <br class="report-field-break" />출처: [www.msit.go.kr](https://www.msit.go.kr/ssm/file/fileDown.do?atchFileNo=55592&fileOrd=6))
- 후보: Neal·Wyden의 Nvidia 중국 수출 관련 질의 (미포함 사유: 11월 12일 날짜만 확인됐으며 창 내 시각 미확인, 의혹은 확정 사실이 아님 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/12/democrats-launch-nvidia-investigation-write-scathing-letter-on-huangs-scheme-with-trump/))
- 후보: 삼성의 Modine 인수 협의 보도 (미포함 사유: 실명 확인·1차 거래 문서가 없는 재인용 협상설이며 확정 거래 아님 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261113114145))
- 후보: 삼성·Google·젠틀몬스터 AI 안경 예약 품절 (미포함 사유: 익명 업계 인용으로 수량·재고·매출 및 회사 확인 미확보 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261113000294))

검색 결과의 반복적 무관 응답, 차단·속도 제한, 일부 오래되거나 잘린 색인은 전반적 완전성을 제한한다. “검증 0건”과 “실제로 사건 0건”을 구별하며, 원장에는 확인 기준을 통과한 고유 사건만 남겼다.

- **수록 사건 수:** 20
