---
layout: ai-intel
title: "AI Daily Intel — 2026-11-20"
date: 2026-11-20 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-20/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-20  
- **기준 시각:** 2026-11-20T06:00:00+09:00 (Asia/Seoul, 미포함)  
- **수집 구간:** [2026-11-19T06:00:00+09:00, 2026-11-20T06:00:00+09:00) Asia/Seoul  
- **조사 범위:** 10  
- **수록 사건 수:** 28

## 1 오늘의 AI 한 문장
미국은 일부 AI 칩 거래의 수출 심사에 원격 컴퓨팅 이용자를 포함했고, 기업들은 클라우드 프리뷰와 로컬 NPU로 추론 선택지를 넓혔지만 실제 도입·성능·매출은 공개 범위와 별도로 확인해야 한다.

## 2 핵심 신호 5
1. **미국 원격 AI 컴퓨팅 수출통제 발효 — <br class="report-field-break" />Evidence A.** 일부 거래는 칩의 물리적 목적지뿐 아니라 원격 연산 이용자까지 확인해야 한다. 한국은 새로 지정된 5개 목적지에 포함되지 않지만 개별 거래의 적용 여부는 별개다. [연방관보](https://www.govinfo.gov/content/pkg/FR-2026-11-19/pdf/2026-23529.pdf)
2. **Azure Vera Rubin 프리뷰 — <br class="report-field-break" />Evidence A.** NVIDIA와 Microsoft의 협력 확대로 평가 경로가 열렸다. 일반 제공, 한국 리전, Rubin 자체 성능은 확인되지 않았다. [NVIDIA](https://blogs.nvidia.com/blog/microsoft-ignite-accelerated-computing-azure-windows-pcs/)
3. **Anthropic 나스닥 거래 개시 — <br class="report-field-break" />Evidence A.** 공모가는 83달러. 상장은 자본 조달 경로의 변화이며, 공모 자금은 영업매출이 아니다. [TechCrunch](https://techcrunch.com/2026/11/19/anthropic-hits-nasdaq-exchanges-at-110-27-above-ipo-price/)
4. **WeMM-Video 가중치·코드 공개 — <br class="report-field-break" />Evidence A.** 개발자가 영상 프레임과 원본 음성을 함께 쓰는 추론을 직접 시험할 수 있다. 저자 비교 결과를 한국어 성능이나 독립 재현으로 해석할 수는 없다. [논문](https://arxiv.org/abs/2611.26409)
5. **래블업 상장 후 첫 실적 — <br class="report-field-break" />Evidence B.** 3분기 누적 연결매출 69.9억 원, 전년 동기 대비 48.2% 증가. 제품 단위나 반복 소프트웨어 매출은 확인되지 않았다. [전자신문](https://www.etnews.com/20261119000452)

## 3 영역별 AI 브리프

`unknown`은 미확인이다. <br class="report-field-break" />Evidence A는 원자료 또는 원자료로 교차 확인된 사건, B는 귀속 가능한 보도에 근거한 사건이다. C 등급은 본문에 포함하지 않았다. 등급은 성능 주장의 독립 재현을 뜻하지 않는다.

### Frontier Models

  - **Evidence A** · [출처 URL](https://arxiv.org/abs/2611.26409) — 텐센트·칭화대가 중국어·영어 중심의 2B·4B·9B·35B-A3B 시청각 모델군을 공개했다. 체크포인트와 코드가 제공된다. 논문은 기존 WeChat 영상 서비스 적용을 보고했으나 이번 창에 시작됐다는 근거는 없다.
  - **Evidence A** · [출처 URL](https://arxiv.org/abs/2611.26107) — 바이두 ERNIE 팀은 기존 시각 인코더와 Transformer를 공유하면서 이미지 이해에 생성·편집을 추가하는 HiUni를 공개했다. 가중치·코드 배포는 미확인이다.
  - **Evidence A** · [출처 URL](https://openai.com/index/introducing-medchembench/) — OpenAI가 의약화학 추론 평가와 GPT-6.2 Astra 결과를 공개했다. 새 모델 출시가 아니라 평가 공개이며, 실행 가능한 평가 패키지 접근은 미확인이다.

### AI Research

  - **Evidence A** · [출처 URL](https://huggingface.co/papers/2611.26603) — Apple이 사진과 영상의 픽셀별 거리(미터)를 추정하는 Depth Pro 2를 공개했다. 추론 코드와 가중치 링크는 제공됐지만 학습·평가 코드는 확인되지 않았다.
  - **Evidence A** · [출처 URL](https://huggingface.co/papers/2611.26629) — 소수 샘플링 단계에서도 교사 확산 모델의 조건부 분포를 따르도록 학습하는 증류법이 제안됐다. 학습된 시간 단계 격자 안에서 재학습 없이 단계 수를 바꿀 수 있다는 저자 설명이다.

### Agents/Developer Tools

  - **Evidence A** · [출처 URL](https://code.claude.com/docs/en/changelog) — 예약 작업 가시성·중지 제어와 Code Mode의 OpenTelemetry 이벤트·지표 지원이 확대됐다. 트레이싱을 켜면 Code Mode가 비활성화되며 이전 버전 작업 다수는 새 로그인 세션에서 재예약해야 한다.
  - **Evidence A** · [출처 URL](https://github.blog/changelog/2026-11-19-enterprise-live-migrations-from-azure-devops-generally-available) — Azure DevOps Services에서 데이터 레지던시를 지원하는 GitHub Enterprise Cloud로의 라이브 이전이 일반 제공됐다. 전환 직전까지 저장소를 동기화하고 Git·PR 이력을 옮기지만 Boards 항목과 Pipelines 정의는 남는다. 한국 데이터 레지던시는 미확인이다.
  - **Evidence A** · [출처 URL](https://github.blog/changelog/2026-11-19-red-hat-enterprise-linux-runner-images-now-generally-available) — Team·Enterprise Cloud의 GitHub Actions 대형 Linux x64 러너에 RHEL 9·10 이미지가 일반 제공됐다. 기존 프리뷰 러너는 이전할 필요가 없으며, 고객 운영 사용은 미확인이다.

### Open Source/Repos

  - **Evidence A** · [출처 URL](https://huggingface.co/blog/Metric-AI/ayb-05-intro) — Metric AI가 아르메니아어 토크나이저를 확장한 Qwen3.5 기반 0.8B·4B·9B 체크포인트를 공개했다. 확인된 9B 라이선스는 CC BY-NC 4.0으로, 제한 없는 오픈소스나 학습 코드 공개를 뜻하지 않는다.
  - **Evidence A** · [출처 URL](https://huggingface.co/blog/Metric-AI/ohan-asr-v01) — 아르메니아어 오프라인·스트리밍 음성인식 가중치가 비상업 조건으로 공개됐다. 두 저장소 모두 접근 조건에 동의해야 하며, 코드 확인 범위는 스트리밍 인코더로 전체 학습 코드는 미확인이다.
  - **Evidence A** · [출처 URL](https://huggingface.co/blog/Metric-AI/ohan-tts) — 아르메니아어 중심 스트리밍 음성합성 모델과 서빙 코드가 공개됐다. 가중치는 접근 제한 및 비상업 조건이 있으며, 이번 날짜는 발표일이지 최초 업로드 확인일이 아니다.

### Chips/Compute/Infrastructure

  - **Evidence A** · [출처 URL](https://foreignaffairs.house.gov/news/press-releases/chairman-brian-mast-exercises-legislative-authority-to-publicly-release-ai-chip-license-information-for-china) — 미 하원 외교위원장이 중국행 AI 칩 340만 개분의 과거 신청과 87만9천 개분 초과의 BIS 승인을 공개했다. 이번 사건은 수치 공개이며, 승인은 출하·판매가 아니다.
  - **Evidence A** · [출처 URL](https://newsroom.amd.com/news/amd-unsloth-bring-npu-support-agentic-ai-applications/) — 지원 Ryzen AI PC에서 Unsloth Desktop을 거쳐 호환 모델을 XDNA 2 NPU로 실행할 수 있다. 100개 이상 앱·워크플로 호환 주장은 전체 작업의 NPU 실행이나 전력 절감을 뜻하지 않는다.
  - **Evidence A** · [출처 URL](https://blogs.nvidia.com/blog/microsoft-ignite-accelerated-computing-azure-windows-pcs/) — Azure Vera Rubin NVL72 VM 프리뷰와 베어메탈·랙 단위 기밀 컴퓨팅 협력, Foundry 모델 유통 및 엣지·Windows 협력 확대가 같은 발표에 담겼다. 기존 Microsoft 워크플로의 NVIDIA 기술 사용은 보고됐지만 Rubin 고객 운영 도입은 미확인이다.
  - **Evidence B** · [출처 URL](https://www.theregister.com/systems/2026/11/19/qualcomm-offers-test-drive-of-its-rack-scale-nvidia-ai-challenger/5310966) — 일부 고객이 Cirrascale 클라우드에서 Qualcomm Dragonfly AI200을 시험할 수 있다는 보도다. 랙당 가속기 56개, 카드당 LPDDR 768GB로 보도됐으나 일반 제공, 운영 배치, 메모리 공급사는 미확인이다.

### Enterprise/Applications

  - **Evidence B** · [출처 URL](https://techcrunch.com/2026/11/19/superhuman-pushes-its-go-assistant-everywhere/) — Go가 Docs·Mail로 확대되며 선제 초안 작성, 앱 간 문맥 활용, 파트너 에이전트 20개가 추가됐다. 기존 Go 활성 사용자 수는 새 기능 채택 지표가 아니다.
  - **Evidence B** · [출처 URL](https://techcrunch.com/2026/11/19/google-gives-gemini-the-ability-to-use-your-mac-for-you/) — Mac용 Gemini가 로컬 파일·앱·웹을 오가며 작업하는 기능을 미국 영어권 적격 구독자에게 제공한다. 사용자는 진행을 보고 중지하거나 행동을 승인할 수 있다. Workspace 기업 및 한국 제공은 미확인이다.
  - **Evidence A** · [출처 URL](https://aws.amazon.com/blogs/machine-learning/announcing-amazon-textract-insights-verifiable-generative-ai-for-documents/) — AWS가 자연어로 지정한 필드를 단일 문서나 혼합 문서 묶음에서 추출하는 관리형 API를 일반 제공했다. 신뢰도 점수와 페이지 근거는 기능이며, 정확도 검증이나 서울 리전·한국어 지원을 뜻하지 않는다.

### Funding/M&A/Business

  - **Evidence A** · [출처 URL](https://techcrunch.com/2026/11/19/anthropic-hits-nasdaq-exchanges-at-110-27-above-ipo-price/) — Anthropic이 공모가 83달러로 나스닥에서 ANT 거래를 시작했다. TechCrunch는 초기 거래가 111.50달러를 보도했고, 회사의 후속 마감 발표가 거래 개시를 확인했다. `availability`는 주식 거래를 뜻한다.
  - **Evidence B** · [출처 URL](https://techcrunch.com/2026/11/19/former-alibaba-execs-everful-raises-48-5m-to-connect-retailers-with-chinese-factories/) — 중국 공장과 소매업체를 연결하는 Everful이 시리즈 A 4,850만 달러를 조달했다고 보도됐다. 창업자는 공급업체 탐색과 주문 조율에 AI 에이전트를 운영 중이라고 밝혔다. 연말 연환산 매출 1억 달러는 전망치다.

### Safety/Evaluation/Security

  - **Evidence B** · [출처 URL](https://www.theregister.com/security/2026/11/18/ai-found-more-critical-bugs-in-another-widely-used-technology-running-225m-websites/5310887) — 보도에 따르면 F5는 AI 보조 발견 이후 치명적 취약점 2건을 포함해 NGINX 취약점 10건에 긴급 패치를 냈다. F5는 당시 실제 악용 증거를 발견하지 못했다고 전했다. 가용성과 코드는 패치 기준이다.
  - **Evidence B** · [출처 URL](https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103) — EU 집행위 대변인은 내부 시스템이 표적이 됐고 관계자에게 통보했다고 확인했다. 직원 서비스 장애는 창 이전에 시작됐으며 이번 사건은 대응 확인이다. AI 사용은 별도 취재에 따른 귀속이고, 데이터 탈취는 미확인이다.

### Policy/Geopolitics

  - **Evidence A** · [출처 URL](https://www.govinfo.gov/content/pkg/FR-2026-11-19/pdf/2026-23529.pdf) — 미국 잠정 최종규칙이 관보에 게재되고 발효됐다. 적용 대상에 상당한 원격 연산을 제공하는 데이터센터 관련 일부 첨단 칩 거래와 5개 목적지에 허가 요건을 추가하고 종전 AI Diffusion Rule을 폐지한다.
  - **Evidence A** · [출처 URL](https://digital-strategy.ec.europa.eu/en/news/ai-board-holds-its-tenth-meeting) — EU 집행위가 의장 임기 2년의 선출 규정 등 AI Board 내부 절차 변경을 공개했다. 11월 18일 회의의 승인 자체가 아니라 공개를 집계했으며, AI Act 개정이나 공급자 의무 신설은 아니다.
  - **Evidence A** · [출처 URL](https://digital-strategy.ec.europa.eu/en/news/european-digital-infrastructure-consortium-launches-today-strengthen-digital-sovereignty-education) — EU 8개국이 네덜란드에 기반을 둔 공동 교육 인프라 컨소시엄을 출범시켰다. 교육 AI·클라우드·안전한 데이터 교환이 사업 범위에 포함되지만 서비스 제공이나 조달 자격은 미확인이다.

### Korea Exposure

  - **Evidence B** · [출처 URL](https://zdnet.co.kr/view/?no=20261119095429) — 디노티시아가 SC26에서 벡터 검색 ASIC 기반 VDPU를 시연했다고 공개했다. 9월 FPGA 시연 이후의 개발 이정표이나 이번 창에 검증된 것은 공개 시점이며 상용 출하·운영은 미확인이다.
  - **Evidence B** · [출처 URL](https://www.etnews.com/20261119000452) — 래블업이 상장 후 첫 실적에서 3분기 누적 연결매출 69.9억 원과 영업이익 9억 원을 공개했다. 전년 동기 대비 각각 48.2%, 36.5% 증가했으며 회사 전체 기준이다.
  - **Evidence B** · [출처 URL](https://www.etnews.com/20261119000432) — LG CNS가 배민을 부사장으로 승진시켜 디지털사업부와 산업별 AI 전환 사업을 맡겼다. 책임자 인선은 신규 고객 계약·구축·매출의 증거가 아니다.

## 4 기술→산업 전달경로
- **시청각 이해 → 영상 검색·검수:** WeMM-Video의 가중치와 코드로 음성이 필요한 검색·판단을 시험할 수 있다. 국내 적용 판단에는 한국어 음성이 포함된 별도 영상, 동일 추론 예산, 체크포인트별 라이선스 확인이 필요하다.
- **추론 하드웨어 → 배치 선택:** Azure Rubin 프리뷰는 클라우드 평가 경로, AI200은 제한 고객의 LPDDR 기반 랙 평가 경로, XDNA 2는 호환 PC의 로컬 추론 경로다. 국내 구매·공급 판단은 리전, 실제 이용 자격, 동일 작업의 지연·전력 측정에 달려 있다.
- **앱 간 에이전트 → 기업 운영 통제:** Claude Code의 예약 작업 중지·관측, Gemini의 사용자 승인, Go의 연결 데이터 활용은 서로 다른 통제 지점을 보여준다. 기업 도입 전에는 권한 범위, 작업 중단, 감사 로그, 업그레이드 후 예약 유지 여부를 확인해야 한다.
- **원격 연산 접근 → 수출 컴플라이언스:** 칩 목적지에 더해 적용 대상의 원격 접근을 확인하는 절차가 필요해졌다. 과거 허가 수치 공개는 별개 사건이며 한국 공급사의 주문·출하를 입증하지 않는다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 칩·연산 | Rubin 프리뷰, AI200 제한 시험, XDNA 2 로컬 추론, 디노티시아 ASIC 시연 공개 | 동등 조건 성능, 광역 공급, 한국 고객·공급사 |
| 모델·가중치 | WeMM-Video 가중치·코드, HiUni 연구 공개, Ayb·Ohan 음성 모델 | 한국어 품질, 독립 재현, 상업 라이선스 범위 |
| 개발·운영 | Claude Code 작업 관측·중지, GitHub 라이브 이전 및 RHEL 러너 일반 제공 | 예약 작업 호환성, 전환 성능, 한국 데이터 레지던시 |
| 업무 애플리케이션 | Go 제품군 확대, Gemini 미국 Mac 초기 제공, Textract Insights 일반 제공 | 기업 플랜별 접근, 한국 지원, 실제 업무 성과 |
| 자본·거버넌스 | Anthropic 거래 개시, 래블업 실적, 미국 수출규칙 발효 | 조달·매출의 세부 구성, 적용 대상별 규칙 해석 |

## 6 반증·과장·재현성 감사

아래 적용 대상 모두 독립 재현은 `unknown`이다. 비교 점수는 공개 주체의 보고이며, 데이터 중복·시험 조건 검증 여부를 별도로 표시했다.

| 평가 | 과제·기준선 | 지표·시험 조건 | 공개·오염·해석 한계 |
|---|---|---|---|
| WeMM-Video | 시청각 이해·추론. 주력 모델은 Qwen3.5-Omni-Flash·Seed2.0-Mini-0428·Gemini-3.0-Flash, 9B는 Qwen3-Omni-30B-A3B-Instruct와 비교 | 120개 이상 평가의 과제별 점수. 저자 보고상 일부 공동 시청각 평가에서 앞의 두 주력 비교 모델을 넘고 Gemini와 격차를 좁힘. 원음·프레임 입력, instruct/thinking 구분 | 학습·시험 중복과 독점 기준선의 추론 예산 동등성 미확인. 전체 모달리티 순위가 아님 |
| HiUni | 이미지 이해·생성·편집. 이해는 초기 Qwen3-VL-INS-4B, WISE 생성은 SenseNova-U1-8B·GPT-Image-1.5와 비교 | 이해 7개 평균 75.56 대 75.61. WISE 추론형 0.75 대 0.79·0.83 | WISE 비교값은 각 모델의 공식 보고치. 동일 프로토콜·학습 데이터 중복 미확인, 평균은 개별 과제의 상하 변동을 가림 |
| MedChemBench | 의약화학 추론 99문제. 동일 xhigh에서 GPT-6 Astra·GPT-6.1 Sol·GPT-5.6 Sol과 비교 | 배점 대비 84.5% 대 83.3%·82.0%·58.2%. 공개 논문·특허 기반의 후향 평가로, 도구·피드백·새 실험 없이 한 번씩 응답 | 공개 자료 사전 노출 가능성, 전체 실행·채점 패키지 접근 미확인. 전향적 신약 발굴 성과 아님 |
| Depth Pro 2 | 단안 사진·영상의 거리 추정. 기존 단일·다중 프레임 모델과 비교 | 거리 정확도·경계 F1·시간 지터·실행시간. 선명도와 지터는 Sintel·Spring 평균, 별도 2K–4K 시각 비교는 H+ 원본 해상도 대 기준선 기본 설정 | 추론 코드·가중치 링크만 확인. 학습·평가 코드 및 학습·시험 중복 미확인, 해상도·하드웨어를 맞춘 비교 필요 |
| Posterior Matching Distillation | 소수 단계 텍스트→이미지 생성. 저자가 시험한 다른 4단계 증류법과 비교 | SDXL·FLUX.2 [klein] 4B 모두 4단계에서 비교군 내 최저 FID를 보고. 프롬프트 정합성과 지각 품질도 평가 | 학습·시험 중복 미확인. FID만으로 다양성 개선을 확정할 수 없으며 영상에 일반화할 근거 없음 |
| Ayb 0.5 | 아르메니아어 ArmBench 24개 과제 및 IFEval 지시 이행. 공개·비공개 리더보드 모델과 비교 | ArmBench 9B/4B/0.8B: 0.6164/0.5828/0.5300, 9B IFEval 0.729. Ayb는 제로샷·thinking 비활성 | IFEval 비교군의 추론 설정이 다름. 학습 말뭉치에서 평가 자료를 제외했는지 미확인 |
| OhanASR | 아르메니아어 전사. ArmBench-ASR 공개·비공개 모델과 비교하나 개별 기준선 명단은 미공개 | Common Voice 26·FLEURS·시·영화·뉴스를 합산한 원시 WER/CER: 오프라인 16.12%/3.49%, 스트리밍 19.07%/4.47% | 오염 배제 근거 없음. 영화 원시 WER는 두 모델 모두 40% 초과. 스트리밍 지연을 입증하지 않음 |
| OhanTTS | 합성 정확도·화자 유사도·스트리밍 서빙. 동등 조건 경쟁 기준선 없음 | 미사용 화자·텍스트에서 WER 14.70%, CER 6.15%, SIM-o 0.693. GB10 1대, 로컬 HTTP/PCM에서 첫 음성 1명 331ms, 16명 2,169ms; 실시간 계수 0.178/0.841 | WER/CER는 자동 전사에 의존. 분할 중복 독립 감사 없음. 전체 텍스트 선입력 및 해당 하드웨어·부하 조건에 한정 |
| NVIDIA·Microsoft | MLPerf v6.1 DeepSeek-V3 학습 및 DeepSeek-R1 대화형 추론. 같은 회차 제출 및 클라우드 제출과 비교 | Azure GB200 NVL72 학습 제출 10,240 GPU, GB300 NVL72 추론은 Signal65에 귀속된 처리량 10% 초과 우위 | 전체 설정과 오염 통제는 발표에서 미확인. GPU 수는 학습 속도가 아니며 두 제출 모두 Blackwell이지 Rubin이 아님 |
| 디노티시아 VDPU | 영상 약 260만 프레임에서 자연어 시맨틱 검색. 업체가 제시한 CPU 단독 기준선 | SC26 ASIC 시연에서 호스트 CPU 이용률 90% 이상 감소를 업체가 보고. 듀얼 소켓 CPU 대비 약 10배 검색 성능은 목표치 | CPU 구성, 질의 분포·튜닝 분리, 재현율, 지연·처리량 미공개. 오염 미평가 |

비벤치마크 주장도 구분했다. AMD 호환 목록과 Qualcomm 랙 사양에는 통제된 성능 비교가 없다. Textract의 신뢰도 점수는 정확도 실측이 아니다. NGINX 결함의 독립 발견은 AI 보조 발견 절차의 재현이 아니며, EU 집행위의 사고 대응 확인은 AI 사용 확인이 아니다. IPO 자금과 Everful의 전망치는 실현 영업매출로 집계하지 않았다.

## 7 다음 확인 일정
- **다음 브리핑에서 우선 확인 — 공개일 미정:** Azure의 Rubin 프리뷰 리전·VM SKU와 Rubin 자체 벤치마크, F5 권고문의 악용 상태 및 수정 빌드 적용 여부, EU 집행위 또는 CERT-EU의 사고 후속 공개.
- **후속 자료 공개 시:** Anthropic 최종 투자설명서에서 발행사·구주주·동시 사모 자금 분리, 래블업 거래소 공시와 반복 매출 구분, 디노티시아 파트너의 동일 재현율 기준 지연·처리량·전력 시험, MedChemBench 과제·채점 공개 및 외부 검증 여부 확인.
- **2027-01-19:** 미국 원격 AI 컴퓨팅 규칙 의견 마감. BIS-2026-0628 시행 지침과 적용 거래 범위 확인.
- **3월 초 예상:** EU AI Board의 새 절차하 첫 회의와 의장 선출 진행 확인. 확정 일정으로 간주하지 않는다.

## 8 Coverage Audit

**종료 상태: 10개 연구자 모두 결과 제출 완료(10/10).** 번들에는 별도 `search_audit` 객체, 실행 상태 필드, 전체 검색 후보 수가 없다. 아래 1차 탐색·2차 직접 확인은 `coverage_notes`에 기록된 경로를 구분한 것이며, 개별 패스의 실행 로그로 간주하지 않는다. `후보`는 번들에 구조화해 전달된 `events`와 `watchlist` 항목 수, `검증`은 연구자 단계에서 근거·시간 기준을 통과한 `events` 수, `포함`은 전역 중복 제거 후 원장 수다. 날짜만 표기된 출처는 번들의 날짜 중첩 규칙을 적용했으며 정확한 시각이나 시간대를 추정하지 않았다.

| 영역 | 종료 | 후보 | 검증 | 포함 | 1차 탐색 → 2차 확인 및 미달·제외 근거 |
|---|---|---:|---:|---:|---|
| Frontier Models | 완료 | 3 | 3 | 3 | 뉴스룸·언론·일일 논문 목록 → arXiv 원본 및 연계 산출물 확인. GPT-6.2 출시와 Claude Fable/Mythos 발표는 창 밖, Jeveration은 원본이 창 이전. MedChemBench는 평가 공개로만 포함. |
| AI Research | 완료 | 3 | 3 | 2 | 기업 연구·언론·arXiv·Hugging Face → 저자 초록과 Apple 프로젝트·저장소 확인. WeMM-Video를 Frontier Models에 통합해 목표 대비 1건 부족; 추가 적격 보도 없음. Jeveration은 창 밖, WorldRuler 수정은 저자·소속 정정. |
| Agents/Developer Tools | 완료 | 3 | 3 | 3 | 영·한 언론·기업·GitHub·arXiv → 변경 이력·릴리스 메타데이터 확인. Copilot·VS Code는 11월 18일, Codex 릴리스는 정확 시각이 컷오프 이후. 일부 접근 제한. |
| Open Source/Repos | 완료 | 3 | 3 | 3 | 영·한 검색·기업·전문지 → GitHub 릴리스·Hugging Face 공지와 파일 확인. vLLM·Transformers는 창 밖, llama.cpp는 컷오프 이후. Metric AI 세 건은 언어 모델·음성인식·음성합성으로 별개 산출물. |
| Chips/Compute/Infrastructure | 완료 | 4 | 4 | 4 | 영·한 반도체·클라우드 보도 및 기업 뉴스룸 → 벤더·클라우드·미 하원·전문지 확인. NVIDIA 실적·기판 및 AWS Lambda GPU는 창 밖. SK hynix SC26 요약은 창 내 새 이정표를 특정하지 못함. |
| Enterprise/Applications | 완료 | 3 | 3 | 3 | 영·한 날짜 검색 → 기술 매체 아카이브·기업 원문 확인. Superhuman 원문 추출 시간 초과로 귀속 보도 B 채택. Standard Bank는 기존 운영의 시작일 미확인, Apple은 출시가 아닌 개발 보도, ChatGPT Dots 보도는 컷오프 이후. |
| Funding/M&A/Business | 완료 | 3 | 3 | 2 | 통신·경제·전문지·한국 매체 → TechCrunch 아카이브와 기업 발표 확인. NVIDIA–Microsoft는 인프라 발표와 동일 사건이어서 통합, 목표 대비 1건 부족. Reuters·연합뉴스 추출 제약, Le Figaro 및 삼성전기 공급망 발표는 창 밖, Go는 제품 롤아웃. Anthropic 마감 발표는 거래 개시를 보강할 뿐 별도 건 아님. |
| Safety/Evaluation/Security | 완료 | 4 | 3 | 2 | 날짜 제한 영·한 언론·공식·저장소 탐색 → The Register 보안 기사·기업 뉴스룸·NIST·arXiv 직접 확인. MedChemBench를 Frontier Models에 통합해 목표 대비 1건 부족. 추가 보도는 창 밖이거나 유출 미검증. F5 권고문 추출 실패로 귀속 보도 B 채택. NGINX 보도는 11월 19일 06:11 KST로 창 안. |
| Policy/Geopolitics | 완료 | 3 | 3 | 3 | 영·한 정책·수출통제 검색 → EU 집행위·BIS·연방관보·매체 아카이브 확인. 11월 16일 BIS 예고를 발효와 중복 계산하지 않음. EU 자문 포럼 요약은 이전 결정을 재서술, 소송 보도는 게시 시각·날짜 미확인. |
| Korea Exposure | 완료 | 3 | 3 | 3 | 영·한 검색·공식 도메인 탐색 → 전자신문·ZDNet Korea·연합뉴스·기업 뉴스룸 직접 확인. One UI 베타는 창 밖, Anthropic 첫날 종가 보도는 06:24 KST로 늦음. SC26 요약에는 창 내 새 이정표가, 춘천 포럼에는 구축 확약이 없음. |

**전역 중복 제거:** WeMM-Video와 MedChemBench는 각각 동일 ID를 한 번만 기록했다. NVIDIA–Microsoft 협력은 ID가 달라도 같은 공식 발표이므로 인프라 원장을 정본으로 남겼다. 협력의 기존 NVIDIA 기술 사용과 Rubin 고객 운영 도입을 구분해 후자는 `unknown`으로 유지했다. 미 하원의 과거 허가 수치 공개와 미국 원격 컴퓨팅 규칙 발효는 별개 사건이다. 구조화 후보 32건 중 검증 31건, 중복 3건을 제거해 28건 포함했다.

### Watchlist (미확인 후보)
- 후보: Dutch privacy regulator warns about safety failures in AI glasses (미포함 사유: B급 보도 시각이 컷오프 이후이며, 적격 기간 내 규제기관 원문 권고의 공개일을 확인하지 못함 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/20/dutch-data-watchdog-highlights-safety-issues-with-ai-glasses/5311345))

- **수록 사건 수:** 28
