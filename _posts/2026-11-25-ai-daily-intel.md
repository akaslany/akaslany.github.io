---
layout: ai-intel
title: "AI Daily Intel — 2026-11-25"
date: 2026-11-25 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-25/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-25  
- **기준 시각:** 2026-11-25T06:00:00+09:00 (Asia/Seoul, 미포함)  
- **수집 구간:** [2026-11-24T06:00:00+09:00, 2026-11-25T06:00:00+09:00) Asia/Seoul  
- **조사 범위:** 10/10 최종 결과 수신  
- **수록 사건 수:** 27

## 1 오늘의 AI 한 문장

AI 에이전트가 결제와 기업 도구에 접근하기 시작했지만, 평가 결과는 그 권한을 맡기기 전에 최종 답변뿐 아니라 반복 성공률, 실행 과정, 승인 절차를 확인해야 한다는 점을 보여준다.

## 2 핵심 신호 5

1. **에이전트의 한 번 성공은 반복 신뢰성이 아니다 — <br class="report-field-break" />Evidence A.** ShellBench에서 선두 GPT-6 Astra의 단일 시도 성공률은 62.5%였지만, 세 번 모두 성공한 과제는 48.8%였다. 전체 실행의 15.7%는 안전 기준을 하나 이상 놓쳤다. 모두 저자 평가이며 독립 재현은 미확인이다. [OpenClaw](https://openclaw.ai/blog/shellbench)
2. **쇼핑 에이전트가 추천을 넘어 결제 채널로 들어갔다 — <br class="report-field-break" />Evidence A.** Walmart는 Muse 안에서 상품 탐색·장바구니·결제를 열었다고 밝혔다. 지출 한도와 구매 승인 옵션은 공개됐지만, 완료 주문과 매출은 공개되지 않았다. [Walmart](https://corporate.walmart.com/news/2026/11/black-friday-deals-with-meta-muse)
3. **기업용 에이전트의 배포와 권한 관리가 함께 움직인다 — <br class="report-field-break" />Evidence A.** Google은 Workspace MCP 서버·CLI와 Cloud Agent Gateway를 정식 제공한다고 밝혔다. Codex CLI는 연결 앱 도구별 승인 검토자 설정을 추가했다. 기능 출시가 고객의 운영 도입이나 통제 효과를 입증하지는 않는다. [Google Cloud](https://cloud.google.com/blog/products/identity-security/deploying-agents-safely-in-your-enterprise) · [Codex](https://developers.openai.com/codex/changelog)
4. **미국 수출통제의 거래 상대방 점검 범위가 넓어졌다 — <br class="report-field-break" />Evidence A.** 미 연방관보는 Megaspeed 등 동남아 3개국 7개 단체를 Entity List에 추가한 최종 규칙을 게재했다. 대상 단체와 미국 수출관리규정 적용 품목을 거래하는 경우가 관건이며, 한국 법인이 명단에 오른 것은 아니다. [미 연방관보](https://www.federalregister.gov/d/2026-23999)
5. **챗봇 대화기록의 보호가 파산 자산매각 쟁점으로 떠올랐다 — <br class="report-field-break" />Evidence A.** 캘리포니아·코네티컷은 Character.AI의 대화기록이 포함된 예정 경매에 반대하거나 보호조치를 요구했다고 밝혔다. 이의 제기는 법원 결정도, 데이터 이전 완료도 아니다. [캘리포니아 법무장관실](https://oag.ca.gov/news/press-releases/attorney-general-bonta-opposes-asset-sale-characterai-amid-child-safety-concerns)

## 3 영역별 AI 브리프

Evidence A는 공식·논문·저장소 등 1차 공개 근거, B는 출처를 귀속할 수 있는 보도 근거다. C는 본문 원장에 포함하지 않았다. 등급은 공개 사실의 근거 수준이며, 발표 내용의 독립 재현이나 실사용을 보증하지 않는다. 상태는 `yes / no / unknown`으로 구분한다.

### Frontier Models

  - Evidence A | <br class="report-field-break" />출처: [openai.com](https://openai.com/index/searching-for-distant-planets-with-astra/)
  - OpenAI가 공개 망원경 자료를 활용한 두 탐색 사례를 공개했다. SETI 연구자는 Codex 지원 탐색의 신호 두 개를 독립적으로 다시 찾았지만, 모델 워크플로를 재현하거나 행성을 확인한 것은 아니다. 별도 Astra 탐색의 후보는 추가 분석 대기 중이다.
  - Evidence A | <br class="report-field-break" />출처: [openai.com](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)
  - OpenAI가 GPT-6 계열의 단백질 설계 관련 개발사 평가와 제한적 공동 실험 근거를 공개했다. 신모델 출시나 운영 배치가 아니며, 결합 관찰이 기능이나 효능을 입증하지 않는다.

### AI Research

  - Evidence A | <br class="report-field-break" />출처: [openclaw.ai](https://openclaw.ai/blog/shellbench)
  - 현실적인 파일 작업공간에서 다단계 일상 업무의 과제 성공, 반복 성공, 안전 기준 충족을 따로 측정했다. 모델 순위는 실행 환경에 따라 달라질 수 있다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.32554)
  - 기존 3D 영역 제안과 여러 시점의 2D 의미 정보를 결합해 메시를 부품 단위로 분할했다. 프리프린트와 저자 시연은 공개됐으나 코드는 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.32884)
  - 답변을 확정하기 전에 충분한 증거를 모으도록 학습하는 방식을 공개했다. 저자 구현과 평가 코드는 확인됐지만, 증거의 충분성을 정확히 계산할 수 없는 실제 업무로의 전이는 미확인이다.

### Agents/Developer Tools

  - Evidence A | <br class="report-field-break" />출처: [developers.openai.com](https://developers.openai.com/codex/changelog)
  - Codex CLI 0.172.0은 설정·로그인에서 Amazon Bedrock Runtime을 선택하는 기능과 연결 앱 도구별 승인 검토자 설정을 추가했다. 태그 소스가 공개됐다.
  - Evidence A | <br class="report-field-break" />출처: [code.claude.com](https://code.claude.com/docs/en/changelog)
  - Claude Code 2.1.332는 MCP 스킬 베타 지원과 스킬·명령 로딩 시 인라인 셸 명령을 거부할 수 있는 승인 훅을 추가했다.
  - Evidence A | <br class="report-field-break" />출처: [code.visualstudio.com](https://code.visualstudio.com/updates)
  - VS Code 1.148 Stable에 원격 에이전트용 재사용 샌드박스 프로필과 세션별 Dev Container 기능이 들어갔다. 배포판은 Stable이지만 해당 기능은 실험적이다.

### Open Source/Repos

  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/FineEnvs/fineproofenvs-rl-2b-prover)
  - 올림피아드 증명용 강화학습 환경, 실행 도구, 2B 체크포인트와 평가 로그를 공개했다. 일부 만점 답안에서도 오류가 발견돼 공개 로그의 검토 가치가 크다.
  - Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/huggingface/transformers/releases/tags/v5.24.1)
  - Transformers 5.24.1은 vLLM과 함께 쓰이는 원격 모델 코드의 어텐션 마스크 유틸리티를 복구하고, Llama 4 실행 충돌과 PyTorch 2.9 체크포인트 읽기 문제를 수정했다.
  - Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/ollama/ollama/releases?per_page=1)
  - Ollama 0.40.18은 JetPack 5 지원을 제거하고 Inkling 모델의 Metal 실행 경로를 변경했다. Jetson 업그레이드 호환성은 점검 대상이며, 속도 개선 폭은 검증되지 않았다.

### Chips/Compute/Infrastructure

  - Evidence A | <br class="report-field-break" />출처: [www.federalregister.gov](https://www.federalregister.gov/d/2026-23999)
  - BIS가 말레이시아·싱가포르·태국의 7개 단체를 Entity List에 추가했다. 미국 수출관리규정 적용 품목에 허가가 필요하고 불허 추정이 적용된다. 원장 사건은 11월 25일 공식 게재이며, 규칙상 발효일은 별도인 11월 23일이다.
  - Evidence A | <br class="report-field-break" />출처: [aws.amazon.com](https://aws.amazon.com/about-aws/whats-new/recent/feed/)
  - AWS가 뉴질랜드 리전에 Intel Xeon 6 기반 EC2 X8i를 제공한다. 최대 6 TB 메모리를 지원하는 CPU 인스턴스로, GPU 증설이나 서울 리전 확대가 아니다.
  - Evidence A | <br class="report-field-break" />출처: [aws.amazon.com](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-serverless-available-cape-town-region/)
  - AWS가 케이프타운에서 차세대 OpenSearch Serverless를 제공한다. 관리형 검색·벡터 검색의 지역 가용성이 확대됐으며, 고객 실측 비용 절감이나 가속기 증설을 뜻하지 않는다.

### Enterprise/Applications

  - Evidence A | <br class="report-field-break" />출처: [corporate.walmart.com](https://corporate.walmart.com/news/2026/11/black-friday-deals-with-meta-muse)
  - Walmart가 Agent Gateway를 통해 Muse 내 상품 탐색·장바구니·결제를 열었다고 밝혔다. 계정 연결, 지출 한도, 구매 승인 옵션을 제공한다. 운영 채널 공개와 완료 주문·매출 확인은 별개다.
  - Evidence A | <br class="report-field-break" />출처: [claude.com](https://claude.com/resources/articles/install-as-app)
  - 지원되는 Claude 아티팩트를 Mac·Windows 앱으로 설치하는 베타가 시작됐다. 온라인 Claude 세션이 필요하며, Enterprise는 관리자가 활성화해야 하고 일부 배포 유형은 제외된다.
  - Evidence A | <br class="report-field-break" />출처: [cloud.google.com](https://cloud.google.com/blog/products/identity-security/deploying-agents-safely-in-your-enterprise)
  - Google이 Workspace MCP 서버, Workspace CLI, Cloud Agent Gateway를 정식 제공한다고 발표했다. 한국 테넌트 자격, 데이터 처리 지역, 고객 실운영은 미확인이다.

### Funding/M&A/Business

  - Evidence A | <br class="report-field-break" />출처: [maple.ai](https://maple.ai/blog/maple-ai-seed-round)
  - Maple AI가 EPIC Ventures 주도의 530만 달러 시드 투자를 공개했다. 확인된 날짜는 공개일이지 거래 종결일이 아니다. 아래 가용성·코드·운영·구독 매출은 기존 제품에 관한 것으로 예정된 클라우드 에이전트에는 해당하지 않는다.
  - Evidence B | <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/24/anthropic-shares-fall-below-ipo-price-a-worrying-sign-for-ai-startups/)
  - TechCrunch는 Anthropic 주가가 공모가 83달러 아래인 장중 76달러까지 하락했다고 보도했다. 종가나 신규 자금조달이 아니며, 거래소 원자료 대조는 미확인이다.

### Safety/Evaluation/Security

  - Evidence A | <br class="report-field-break" />출처: [oag.ca.gov](https://oag.ca.gov/news/press-releases/attorney-general-bonta-opposes-asset-sale-characterai-amid-child-safety-concerns)
  - 미 주 법무장관들은 12월 1일 예정 경매에 미국 계정 2,100만 개 이상(미성년자 등록 계정 210만 개 이상)의 대화와 관련 메타데이터가 포함된다고 밝히며 매각 거부 또는 보호조치를 요청했다. 한국 계정 노출은 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.33065)
  - 연세대·Microsoft Research Asia 연구진이 사람의 선호와 자동 채점기 판단의 불일치를 찾아 보정하는 HuB-J를 공개했다. 저자 4명 중 3명이 연세대 소속을 표기했다. 프리프린트는 공개됐지만 코드 접근은 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.33012)
  - 임상 에이전트 평가에서 최종 답만 본 채점기는 답을 바꾸지 않는 위험 행동을 놓쳤다. 전자의무기록 응답과 실행 경로를 보는 평가의 필요성을 제기하지만, 임상 배치나 효과를 입증하지 않는다.

### Policy/Geopolitics

  - Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/eu-and-kenya-hold-successful-digital-dialogue)
  - EU와 케냐가 디지털 협력 로드맵을 내고 언어 다양성·농업을 위한 AI Factories 협력을 심화하기로 했다. 케냐 내 개방형 컴퓨팅 시설은 탐색 단계이며, 데이터 적정성 결정은 채택되지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/ai-act-scientific-panel-holds-second-regular-meeting)
  - EU 집행위가 OpenAI·Anthropic 대상 정보요청의 질문 범위를 공개했다. 통제 상실로 보고된 사건과 EU 영향, 위험평가·안전조치 변경이 대상이다. 요청 발송일, 위반 판단, 제재는 확인되지 않았다.

### Korea Exposure

  - Evidence A | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/common/docViewer.do?fileId=198595568&tblKey=GMN)
  - 행정안전부가 대화형 공공 서비스에 우선 적용할 UI/UX 설계 기준 29개를 발표했다. AI의 역할과 한계를 알리고 중요한 선택은 이용자가 확인·결정하도록 하는 지침이다. 배포 예정 발표이지 배포 완료, 기관 적용 또는 새 구속 규정은 아니다.
  - Evidence A | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/common/docViewer.do?fileId=198595334&tblKey=GMN)
  - 고용노동부와 한국산업인력공단이 국가자격시험의 AI 부정행위 방지 강화책을 공개했다. 6건 적발은 11월 21일 시험의 결과를 이번 창에 공개한 것이며, 추가 예산·법령 조치는 계획 단계다.
  - Evidence A | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/common/docViewer.do?fileId=198595264&tblKey=GMN)
  - 국립환경과학원이 제주개발공사와 지하수 수질·수위 AI 공동연구, 데이터 공유, 실시간 모니터링 기반 구축을 추진한다고 공개했다. 11월 24일 정오 공개가 해당 사건이며, 25일 예정 서명 완료는 미확인이다.

## 4 기술→산업 전달경로

- **평가 → 운영 승인:** ShellBench의 반복 실패와 임상 평가의 누락은 서로 다른 환경에서 같은 운영 질문을 던진다. 한 번의 정답으로 자동 실행 권한을 넓히기보다, 반복 성공과 중간 행동을 따로 검사해야 한다. Codex의 도구별 승인과 VS Code의 실험적 격리는 적용 가능한 통제 수단이지 효과가 입증됐다는 뜻은 아니다.
- **에이전트 접점 → 거래 → 매출:** Muse 안에서 결제까지 가능해지면 추천과 거래 사이의 단계를 줄일 수 있다. 산업 효과를 판단하려면 완료 주문, 전환율, 행사 이후 채널 유지 여부가 필요하다. 출시 사실만으로 매출 기여를 계산할 수 없다.
- **지역 인프라·수출통제 → 조달:** 뉴질랜드는 고메모리 CPU 추론, 케이프타운은 관리형 검색의 선택지가 늘었다. BIS 규칙은 별도로 대상 거래의 상대방 심사에 영향을 준다. 셋 모두에서 한국 내 증설을 추론할 근거는 없다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 확인되지 않은 것 |
|---|---|---|
| 모델·과학 | Astra/Codex 탐색 사례와 GPT-6 역량 공개 | 새 모델 출시, 발견 확정, 독립 워크플로 재현 |
| 평가·학습 | ShellBench 반복성, RLVB 증거 수집, HuB-J 채점 편향, 임상 행동 감사 | 운영 환경 일반화, 독립 재현 |
| 개발·런타임 | Codex 승인 검토, Claude Code 승인 훅, VS Code 격리, Transformers 호환성 복구, Ollama 지원 변경 | 통제 효과, 하위 스택 호환성, 운영 성능 |
| 컴퓨팅·데이터 | 뉴질랜드 X8i와 케이프타운 OpenSearch 제공 | 서울 확대, 실측 성능·비용 개선 |
| 앱·거래 | Walmart 결제, Claude 앱 베타, Google 관리 도구 정식 제공 | 거래량·매출, 베타의 정식 전환, 기업 실운영 |
| 감독·한국 | BIS 규칙 게재, EU 정보요청 내용 공개, Character.AI 매각 이의, 공공 AI 설계 지침 | 집행 결과, 법원 결정, 기관 도입 |

## 6 반증·과장·재현성 감사

아래 벤치마크의 독립 재현은 모두 미확인이다. 수치는 각 저자 또는 공급사의 보고이며, 사례 공개나 공식 릴리스 자체의 검증과 구분한다.

| 평가 | 과제·기준선·지표 | 조건·공개 한계 |
|---|---|---|
| ShellBench | 다단계 일상 업무; 12개 모델·5개 하네스 비교. 단일 성공률 Astra 62.5%, Fable 5.2 61.9%, Sol 61.4%; Astra 세 번 모두 성공 48.8%; 전체 실행의 안전 기준 실패 15.7%. | 100개 과제, 59개 조합, 53,100회. 루브릭 90개·코드 테스트 10개. 실행당 채점 1회, Muse·Dots·Claude Duet 네이티브 하네스 미시험, 훈련 중복 미확인. |
| GPT-6 단백질 평가 | 설계·예측 과제에서 전문 모델과 계산 성능을 비교. 계산 지표와 실험적 결합은 별개다. | 개발사 평가와 공동 실험으로 구성됐고 일부 비교는 내부 연구 모델을 사용했다. 실험은 GPT-6 단독 시험이 아니며 오염 미감사, 기능·효능 미입증. |
| PartAgent | 3D 부품 분할, mIoU. 4개 데이터셋 평균 69.36 대 PartField 62.08; PartObjaverse-Tiny-WT에서 68.41 대 최강 비교군 59.88. | 저자 프리프린트. 추가 과제 학습이 없다는 뜻이지 구성 모델 자체가 미학습이라는 뜻은 아니다. 사전학습 자료와 평가 자산 중복 미확인. |
| RLVB | 부분 관측 환경에서 답변 전 증거 수집. 기본 모델·GRPO·PPO·LLM 채점 보상 등과 비교. 저자 보고 평균 정확도 향상 17.1%; 충분한 증거로 답한 비율 51%·12%·74% 대 기본 모델 8%·0.4%·36%. | 모델 3개·평가 3종, 그중 2종은 RLVB 학습에서 제외. 시뮬레이터가 정확한 사후확률을 제공하며, 기본 모델 사전학습 중복과 실제 업무 전이는 미확인. |
| VS Code Agent Host | 채팅 응답 시작 시간. 직전 Stable보다 평균 30% 빠르다는 공급사 주장; 이전 하네스와 약 5% 이내라는 별도 비교도 있다. | 워크로드·모델·하드웨어·네트워크·표본·캐시 조건 미공개. 작업 완료 속도나 코드 품질 지표가 아니다. |
| FineProofEnvs | 자연어 증명, 기본 Qwen3.5-2B 대비 RL 500회 업데이트. 정규화 점수 0.217→0.407, 같은 답안의 대형 채점기 재채점 0.259→0.464, 만점 pass@4 26.6%→40.6%. | 선별한 홀드아웃 64문제, 문제당 4회, 비사고 모드, 학습 1회. 표본 점검에서 만점 답안 4개 중 2개에 오류. 텍스트 중복 26개 제거가 사전학습 오염을 배제하지 않으며 재채점은 독립 재실행이 아니다. |
| AWS X8i | CPU 추론에서 X2i 대비 46% 빠르다는 AWS 주장. | 지연시간인지 처리량인지 불명확하다. 모델·정밀도·배치·인스턴스 크기·소프트웨어·데이터 출처 미공개. |
| AWS OpenSearch Serverless | 피크 기준으로 사전 할당한 클러스터 대비 검색·벡터 검색 비용을 최대 60% 절감한다는 AWS 추정. | 사용량 과금과 유휴 시 컴퓨팅 0을 가정한다. 트래픽·가동률·전체 요금 가정 미공개로 고객 실측치가 아니다. |
| HuB-J | 사람 선호를 기준으로 미보정 LLM 채점기와 비교. 통제 편집에 따른 편향성 판정 뒤집힘이 보정 후 감소했다고 보고. | 불일치 사례로 편향 후보를 찾고 일치 사례를 편집해 측정했다. 새로운 평가자 집단에 대한 일반화·오염 미확인, 코드 접근 미확인. |
| 임상 에이전트 감사 | 위험 경로와 정상 경로 구분. 기존 채점기는 검사 누락 경로 38개를 모두 통과시켰고, LLM+규칙 검사기는 주입 오류의 97%를 탐지했다. | 오류 경로 416개·8종, 공개 가중치 채점기 6개, 기록 접근 조건 비교. 벤치마크에 주입한 오류이며 오염 미감사, 임상 효과·실환경 오탐 미확인. |
| Spade (미포함) | 엣지 LLM 배치 계획, 유전 탐색·동적 계획법 대비 441 ms 대 약 2시간, 비교군 혼잡 목적값 19.7% 열위. 전수열거 대비 별도 가지치기 비교에서 같은 잔존 집합을 유지하며 후보 99.6% 제거. | 주 비교는 합성 장치 30대·5종, 가지치기는 장치 유형 10종. 실제 장비의 종단 지연시간이나 모델 품질이 아니다. |
| RecordRoute (미포함) | 실패 주체·최초 결정 단계·오류 유형 식별. StepFinder·ASCon을 비교군으로 두고, 위치 예측을 고정한 진단 비교에서 선택 기록 77.47% 대 전체 기록 69.28%. | 주입 오류와 자연 발생 실패 데이터셋을 사용. 고정 위치 진단의 결과이지 운영 사고의 종단 정확도가 아니며, 훈련 중복 미확인. |

Ollama의 Metal 개선 설명에는 비교군·정량 지표·측정 조건이 없어 속도 신호로 채택하지 않았다. 외계행성 탐색은 통제 모델 비교가 아니며 신호 재확인과 행성 확정은 다르다. Character.AI 이의 제기와 EU 정보요청 공개도 판결·제재·사건 자체의 독립 확인으로 읽지 않는다.

## 7 다음 확인 일정

- **11월 25일 예정 건:** 행안부 공공 AI 지침의 실제 배포 여부와 제주 지하수 공동연구 협약 서명 여부를 각각 확인한다. 두 건 모두 원장에는 앞선 공개만 반영했다.
- **블랙프라이데이 이후:** Walmart의 Muse 결제 유지 여부, 완료 주문·전환율 공개 여부를 확인한다. Anthropic 주가는 장중 저가와 종가를 거래소 자료로 대조할 대상이다.
- **12월 1일 예정 경매 전후:** Character.AI 파산 사건의 법원 명령, 일정 변경, 대화기록 제외·이전 제한 여부를 확인한다.
- **후속 공개 시:** ShellBench의 과제·채점 코드·로그와 독립 실행, 임상 감사의 외부 기록 시스템 검증, BIS 후속 지침 및 EU 정보요청 원문·답변을 확인한다.
- **2027년 2월까지 예고된 항목:** 공공 AI 지침의 접근성 보완과 실제 기관 조달·서비스 심사 반영 여부를 확인한다.

## 8 Coverage Audit

연구자 최종 완료: **10/10**. 아래 10개 영역 모두 최종 결과가 있다. 완료는 검색의 완전성이나 모든 주장의 독립 검증을 뜻하지 않는다.

`후보`는 번들에 기록된 `events`·`rejected_events`·`watchlist` 행 기준이며 전체 검색 적중 수가 아니다. `검증`은 영역별 연구자가 통과시킨 `events` 행으로, 전역 중복 정리·편집 전 수치다. `포함`은 정규 원장 건수다. 구조화된 1차/2차 `search_audit` 수치는 Chips/Compute/Infrastructure에만 있어 나머지는 `coverage_notes`의 검색 경로와 탈락 사유를 보고하고 단계별 건수는 추정하지 않았다.

| 연구자(모두 최종 완료) | 기록 후보 | 검증 | 포함 | 1차 검색 → 후속 확인 및 목표 대비 |
|---|---:|---:|---:|---|
| Frontier Models | 3 | 3 | 2 | 공식 연구소·언론 검색 → arXiv·GitHub·날짜별 자료 확인. Hugging Face 블로그 추출 제한. Claude Fable/Mythos 11월 9일, Shirudo 11월 23일은 창 밖이며 IPO·Muse 배포는 모델 역량 자료가 아니다. ShellBench를 연구 영역에 통합해 1건 부족. |
| AI Research | 3 | 3 | 3 | 날짜 제한 언론·한국어 검색 → 연구 페이지·arXiv·Hugging Face·저자 저장소에서 1차 공개 확인. Motion Mamba 2.0의 후속 큐레이션은 신규 공개가 아니었다. 부족 없음. |
| Agents/Developer Tools | 3 | 3 | 3 | 언론·벤더·저장소 검색 → 버전별 공식 변경 기록 확인. GitHub 알림 변경은 에이전트 특화가 아니고, Cursor 음성 에이전트는 창 밖. 일부 페이지 추출 제한에도 부족 없음. |
| Open Source/Repos | 3 | 3 | 3 | 언론 검색에서 적격 보도 없음 → GitHub 게시 시각·Hugging Face·arXiv 직접 확인. IVE는 창 이전, Qwen Code 및 확인한 llama.cpp 프리릴리스는 컷오프 이후. 부족 없음. |
| Chips/Compute/Infrastructure | 7 | 5 | 3 | 구조화 감사: 1차 2, 표적 2차 3, 최종 검증 5, 연구자 shortfall 0. AWS 피드·연방관보·벤더·arXiv 등을 직접 확인. Dell은 창 밖, Huawei는 감시목록. 검증된 Sunway의 HPE 플랫폼 선정과 Spade 프리프린트는 실가용성 또는 공식 규칙 게재를 우선해 원장에서 미선정. 부족 없음. |
| Enterprise/Applications | 6 | 6 | 3 | 언론·제품 블로그·한국어 검색 → 날짜별 기사·RSS·공식 원문 확인. Pinterest 후속 보도는 새 사건이 아니며 Maple 보도는 컷오프 이후. Claude의 MCP/Tasks/Elicitation 발표, Instagram DM의 Muse 제한 출시, Claude Ship은 적격이나 미선정. MCP 스킬 베타는 Claude Code 릴리스와 겹치는 부분이 있지만 Tasks/Elicitation까지 동일 사건으로 보지는 않았다. 부족 없음. |
| Funding/M&A/Business | 3 | 3 | 2 | 광역·한국어 검색에서 오래됐거나 무관한 결과가 많고 Reuters 직접 추출이 차단됨 → 기술언론 아카이브·회사 공개 재확인. Amazon–Decart 후속 분석에 신규 이정표가 없고 Anthropic IPO 종결은 창 이전. Walmart 통합 후 대체 적격 건이 없어 1건 부족. |
| Safety/Evaluation/Security | 4 | 4 | 3 | 언론·한국어 검색 → 주 법무장관·arXiv·공식 연구 페이지·저장소 확인. Character.AI 관련 기사와 주 발표는 한 사건. RecordRoute는 적격이나 비교 수치가 위치 예측을 고정한 진단 결과여서 원장 미선정. 부족 없음. |
| Policy/Geopolitics | 3 | 3 | 2 | 정책·수출통제·한국어 검색 → EU·미국·영국 정부 페이지와 전자신문 확인. Reuters·연방관보·한국 과기 부처 일부 접근 제한. EU 개요 업데이트는 새 정책 행위가 아니고 국내 AI 칩 결제 시범 서명은 창 이전. 국내 공공 AI 지침을 한국 영역에 통합해 1건 부족. |
| Korea Exposure | 3 | 3 | 3 | 영문·한국어 검색에서 일반적이거나 날짜가 맞지 않는 결과가 많아 전자신문·ZDNet Korea·기업 뉴스룸·정부 자료를 직접 확인. SK hynix 자료는 11월 20일, 기판 장비·카카오 데이터센터·올리브영 보도는 컷오프 이후. 시험 대책 관련 범정부 보도는 따로 세지 않음. 부족 없음. |

중복·시간 판정:
- **ShellBench는 식별자가 달라도 하나의 평가다.** OpenClaw의 창 내 발표를 정규 근거로 삼았고, TechCrunch의 <br class="report-field-break" />Evidence B 보도는 11월 24일 21:33:29 UTC로 컷오프 이후라 창 내 근거에서 제외했다.
- **Walmart–Muse 결제는 같은 Walmart 원문을 사용한 두 항목을 Enterprise/Applications로 통합했다.** TechCrunch의 13:32 PST 보도는 창 밖이지만 공식 날짜 단독 공개는 번들의 날짜 겹침 기준으로 적격이다. Instagram DM 출시는 이 결제와 별개다.
- **공공 AI UI/UX 지침은 동일 ID의 정부 <br class="report-field-break" />Evidence A를 채택해 Korea Exposure에 한 번만 기록했다.** 전자신문 <br class="report-field-break" />Evidence B의 규제 상태와 다르게, 정부 원문을 기준으로 새 구속 규정이 아니므로 `regulatory: no`를 유지했다.
- **Dell은 원문의 `2026-11-24T16:05:00-05:00`과 표적 재확인 기록을 우선했다.** 이는 11월 25일 06:05 KST로 오른쪽 경계 5분 뒤다. 제외 행의 요약에 적힌 05:05 KST는 일치하지 않아 사용하지 않았다. AWS 서울 Graviton5도 컷오프 이후였다.
- **정확한 시각이 있는 자료는 반개구간으로 판정했다.** 날짜만 있는 공식 공개는 번들의 날짜 겹침 규칙을 적용하되 시각·시간대를 추정하지 않았다. 논문의 공개 목록일과 제출 시각, 규칙의 게재일과 발효일, 후속 기사일과 원사건일을 분리했다.
- Evidence C 원장 포함 0건. 아래 Watchlist는 <br class="report-field-break" />Evidence B 보도이지만 창 내 사건이 확인되지 않아 원장과 집계에서 제외했다.

### Watchlist (미확인 후보)

- 후보: The Register reports Huawei and partners touting domestic chip-design tools (미포함 사유: 기사 시각이 정확한 창 밖이고 창 내 1차 공개를 확인하지 못함 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/11/25/huawei-and-crew-tout-homegrown-eda-tools-to-overcome-chinas-fab-deficit/5312205))

- **수록 사건 수:** 27
