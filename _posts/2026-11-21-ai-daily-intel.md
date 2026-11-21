---
layout: ai-intel
title: "AI Daily Intel — 2026-11-21"
date: 2026-11-21 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-21/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-21
- **기준 시각:** 2026-11-21T06:00:00+09:00 (Asia/Seoul, 미포함)
- **수집 구간:** [2026-11-20T06:00:00+09:00, 2026-11-21T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 26

## 1 오늘의 AI 한 문장

AI 평가와 통제 수단은 구체화됐지만, 의약화학 점수는 실험 성과가 아니고, 에이전트 파일럿은 무인 운영이 아니며, 데이터센터 규정 초안은 전력 접속을 보장하지 않는다.

## 2 핵심 신호 5

1. <br class="report-field-break" />Evidence A — OpenAI의 MedChemBench에서 GPT-6.2 Astra는 xhigh 조건에서 배점의 84.5%를 얻었다. 기존 모델의 후향적 평가 공개이며, 새 모델 출시나 신약 발견 성과가 아니다.
2. <br class="report-field-break" />Evidence A — Reflection의 Beam 파일럿은 뉴욕에서 사람 개입 23건을 기록했다. 일부 허위 주장을 받아들였고 물리적 주문 이행도 사람이 맡았다. 정책 위반 요청을 거절하는 능력만으로 운영 자율성을 판단할 수 없다.
3. <br class="report-field-break" />Evidence A — GitHub Enterprise Server 3.23 RC는 외부 연결이나 GPU 없이 장비 CPU에서 비정형 비밀정보를 탐지하는 공개 프리뷰를 제공한다. 망분리 환경에서 시험할 수 있지만 정식 출시나 탐지 정확도가 확인된 것은 아니다.
4. <br class="report-field-break" />Evidence B — 한국의 AI 데이터센터 시행규칙 초안은 요건을 충족하는 비수도권 시설에 계약전력 50 MW 이하 전력계통영향평가 면제를 제안했다. 의견수렴 단계이며 확정 규정이나 계통 접속 승인이 아니다.
5. <br class="report-field-break" />Evidence A — Anthropic이 IPO와 동시 사모배정 종결을 발표했다. 합산 총조달액은 매도주주 귀속분을 포함해 약 1,195억 달러이며, 영업매출이나 순유입액과는 다르다.

## 3 영역별 AI 브리프

Evidence A는 공식 발표·정부 문서·논문·저장소 등 1차 공개를, <br class="report-field-break" />Evidence B는 귀속 가능한 보도를 뜻한다. 등급은 공개 사실에 적용되며 성능이나 실사용을 보증하지 않는다. <br class="report-field-break" />Evidence C는 본문에 포함하지 않았다.

### Frontier Models

  Evidence A | <br class="report-field-break" />출처: [www.reflection.ai](https://www.reflection.ai/blog/mr-beam-partnering-with-andon-labs)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Reflection이 Andon Labs와 진행한 Beam의 초기 자판기 운영 결과를 공개했다. 기간 내 사건은 결과 공개로, 뉴욕·샌프란시스코 파일럿 개시가 아니다.
  Evidence B | <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  TechCrunch가 수학자 Levent Alpöge의 Claude 보조 증명 주장과 Andrew Sutherland 등의 Lean 컴파일 확인을 보도했다. 확인 범위는 보도와 귀속된 점검이며, 리만 가설 해결의 합의나 Claude 단독 풀이가 아니다.

### AI Research

  Evidence A | <br class="report-field-break" />출처: [openai.com](https://openai.com/index/introducing-medchembench/)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  의약화학 99문제에서 구조 복원·증거 해석과 화합물 선택·물성 예측을 구분했다. 보고서는 공개됐으나 전체 평가 패키지의 실행 가능 여부는 미확인이다.
  Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.26603)

**상태:** announcement=yes; availability=yes; code=yes; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Apple이 단안 사진·영상의 절대 깊이를 추정하는 논문, 추론 코드, 네 크기의 비상업 연구용 가중치를 공개했다. 학습·평가 코드는 공개 추론 저장소에 없다.
  Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.26629)

**상태:** announcement=yes; availability=no; code=no; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Virginia Tech·NVIDIA 연구진이 적은 샘플링 단계에서 이미지 다양성 손실을 줄이는 증류법을 발표했다. 논문·데모는 공개됐으나 실행 구현은 미공개였다.

### Agents/Developer Tools

  Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/openai/codex/releases/tags/rust-v0.171.0)

**상태:** announcement=yes; availability=yes; code=yes; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Codex CLI 0.171.0 안정판이 문서·이미지 미리보기와 서브에이전트 기록을 볼 수 있는 터미널 작업공간을 기본 활성화했다. 기존 앱 서버에서 비대화형 세션을 시작하거나 재개하는 기능도 추가됐다.
  Evidence A | <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-20-github-enterprise-server-3-23-release-candidate)

**상태:** announcement=yes; availability=yes; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  GitHub Secret Protection 사용자를 대상으로 장비 내 AI 비밀정보 탐지를 공개 프리뷰로 제공한다. 가용성은 RC와 프리뷰에 한정된다.
  Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.26311)

**상태:** announcement=yes; availability=yes; code=yes; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  작동 중인 웹·Android 앱의 화면을 탐색해 구현한 결과가 실제 사용 흐름을 얼마나 재현하는지 평가한다. 외형 모방과 기능 구현을 구분한다.

### Open Source/Repos

  Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/Metric-AI/ayb-05-intro)

**상태:** announcement=yes; availability=yes; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Metric AI가 아르메니아어 토크나이저를 확장하고 추가 학습한 0.8B·4B·9B 체크포인트를 발표했다. 9B 저장소는 CC BY-NC 4.0을 명시한다.
  Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/Metric-AI/ohan-asr-v01)

**상태:** announcement=yes; availability=yes; code=yes; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  아르메니아어 일반·스트리밍 음성인식 체크포인트를 공개했다. 두 저장소 모두 접근 제한과 비상업 조건이 있으며 스트리밍 인코더 코드도 같은 접근 조건을 따른다.
  Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/Metric-AI/ohan-tts)

**상태:** announcement=yes; availability=yes; code=yes; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  아르메니아어 중심 음성합성이 오디오 출력을 스트리밍한다. 전체 텍스트를 먼저 받아야 하며, 가중치는 접근 제한·비상업 조건이고 서빙 코드는 별도 공개됐다.

### Chips/Compute/Infrastructure

  Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000171)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=yes

  과기정통부 초안은 비수도권의 적격 신설·증설·전환 시설에 계약전력 50 MW 이하 면제를 제안했다. 총시설 전력 대비 IT 장비 전력의 비율이 아니라, 총시설 전력을 IT 장비 전력으로 나눈 설계 비율이 1.5 이하여야 한다는 요건도 담겼다.
  Evidence A | <br class="report-field-break" />출처: [news.samsung.com](https://news.samsung.com/global/samsung-electronics-announces-new-leadership-5)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  삼성전자는 DRAM·HBM 개발을 이끌던 황상준을 메모리사업 책임자로 선임하고 System LSI 책임자와 DS CTO도 교체했다. HBM 고객 인증·수주·출하 발표는 아니다.
  Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000300) | 보강: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261120162914)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  SK하이닉스는 기존 전환사채 1,290억 엔을 투자기구 지분으로 전환하고 1억 엔어치 지분을 추가 매입할 계획이다. 완료 시 키옥시아 간접 지분은 약 14.1%로, 낸드 증설이나 신규 공급계약은 확인되지 않았다.

### Enterprise/Applications

  Evidence A | <br class="report-field-break" />출처: [workspaceupdates.googleblog.com](https://workspaceupdates.googleblog.com/feeds/posts/default/2844336475809741094)

**상태:** announcement=yes; availability=yes; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Google이 Workspace Studio의 미국·EU 데이터 리전 제어 정식 제공을 공지했다. 저장·처리 범위는 요금제별로 다르며, 리전 외 처리를 차단하면 생성형 AI 단계·자연어 워크플로 생성·Skills를 사용할 수 없다. 점진 배포는 11월 10일 시작됐다.
  Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000264)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  셀렉트스타와 대한출판문화협회가 AI 학습용 출판 데이터 공급 절차 마련에 합의했다. 권리자 동의와 별도 계약이 필요하며 실제 데이터 인도·학습은 미확인이다.
  Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000163)

**상태:** announcement=yes; availability=yes; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  EDUCE가 onTEST에 시험 전 스마트안경 검사와 시험 중 교체 감시를 추가했다고 밝혔다. 고객 운영, 오탐·미탐률, 접근성 영향은 미확인이다.

### Funding/M&A/Business

  Evidence A | <br class="report-field-break" />출처: [www.anthropic.com](https://www.anthropic.com/news/ipo-close)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=yes

  주당 83달러에 IPO를 종결했다. 공모 총액 약 935억 달러 중 약 916억 달러가 Anthropic에 귀속됐고, 동시 사모배정 총액은 약 260억 달러였다. 11월 18일 등록 효력 발생과 19일 거래 개시는 별도 시점이며, 사모배정은 등록되지 않았다.
  Evidence B | <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261120162844)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  바커케미칼코리아가 공동패키징 광학(CPO) 소재의 30개월 정부 R&D 과제 주관기관으로 선정됐다고 밝혔다. 지원액과 상용 공급은 확인되지 않았다.

### Safety/Evaluation/Security

  Evidence A | <br class="report-field-break" />출처: [signal.org](https://signal.org/blog/protecting-your-privacy/)

**상태:** announcement=yes; availability=yes; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Signal은 iOS 27 및 AI 도우미 화면 캡처를 감지할 수 있는 Android 환경에서 기본 보호를 발표했다. 번들에는 모바일 앱 업데이트 반영 보도가 있으나 보호가 완전하지 않고 macOS는 범위 밖이다.
  Evidence A | <br class="report-field-break" />출처: [aws.amazon.com](https://aws.amazon.com/blogs/security/chinese-nexus-actors-cairn-ai-agents-found-a-zero-day-on-their-own/)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  Amazon은 9월 동아시아 대학 대상 침해 조사에서 AI 에이전트가 취약점 발견과 서버 침해에 쓰였다고 평가했다. 기간 내 사건은 조사 결과 공개이며, 한국 피해자나 독립 확인은 확인되지 않았다.

### Policy/Geopolitics

  Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/european-digital-infrastructure-consortium-launches-today-strengthen-digital-sovereignty-education)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=yes

  EU 8개국 교육 디지털 인프라 컨소시엄이 출범했다. 교육 데이터 교환과 유럽 교육용 AI 개발·도입을 추진하지만 제품이나 조달은 확인되지 않았다. 설립 결정은 11월 4일이었다.
  Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/ai-board-holds-its-tenth-meeting)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=yes

  유럽위원회가 11월 18일 AI Board 회의에서 승인된 임기 2년의 선출 의장 절차를 공개했다. AI Act 개정은 아니다.
  Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/ai-act-advisory-forum-holds-its-second-meeting)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=yes

  유럽위원회가 11월 16일 자문포럼의 절차 채택과 임기 2년 공동의장 선출을 공개했다. AI 동반자·에이전트는 자문 주제 후보이지 새 규제 요건이 아니다.

### Korea Exposure

  Evidence A | <br class="report-field-break" />출처: [news.skhynix.com](https://news.skhynix.com/en/sc26-ai-hpc-exhibition/)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=unknown

  SK하이닉스가 SC26의 CXL 메모리 풀링 시연과 SK텔레콤과의 KV 캐시 오프로딩 시험을 공개했다. 개별 시연·시험 일자와 상용 공급은 확인되지 않았다. 편입한 사건은 11월 20일 공식 설명 공개다.
  Evidence A | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156790134)

**상태:** announcement=yes; availability=unknown; code=unknown; independent_reproduction=unknown; production=unknown; revenue=unknown; regulatory=yes

  총리 주재 범정부 TF가 첫 회의를 열어 수능의 AI·스마트기기 부정행위 의심 사례와 기록된 무선신호를 검토하도록 했다. 최대 10년 응시 제한은 법적 근거가 필요한 검토안이다.

비수도권 데이터센터 초안과 국내 반도체 기업 인사·지분 변경은 인프라 영역에 단일 계상했다.

## 4 기술→산업 전달경로

- **평가 → 실험 의사결정: MedChemBench의 구조 복원 점수를 화합물 선택 능력으로 대체하면 안 된다.** 미공개 문제에서의 전향 평가와 독립 채점이 실험 도입 판단에 필요하다.
- **에이전트 도구 → 운영: Codex는 작업 기록을 보기 쉽게 했지만 Beam과 SWE-Recreation은 이력 가시성만으로 검증·승인·업무 완결이 해결되지 않음을 보여준다.** 기업 도입에서는 예외 처리와 사람 개입을 별도로 측정할 필요가 있다.
- **메모리·입지 → 추론 인프라: CXL 풀링은 추론 메모리 제약을 완화할 가능성이 있고, 비수도권 면제안은 적격 시설의 심사 부담을 줄일 수 있다.** 전자는 지연·처리량 검증, 후자는 최종 규정과 별도 계통 접속이 관문이다.
- **데이터 통제 → 업무 기능: GitHub 프리뷰는 외부 전송 없이 탐지를 시험할 길을 열었다.** 반면 Workspace에서는 처리 지역을 엄격히 제한하면 일부 생성형 기능이 중단된다. 보안 요건과 기능 가용성을 함께 검증해야 한다.

## 5 AI Stack Signal Map

| 계층 | 확인된 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 자본·거버넌스 | Anthropic 자금조달 종결, EU 교육 컨소시엄 출범·별도 기구 절차 공개 | 자금 집행, 조달, 새로운 법적 의무 |
| 전력·컴퓨트 | 한국 전력 심사 면제 초안, SC26 메모리 풀링 설명 | 계통 접속, 정량 성능, 상용 공급 |
| 모델·데이터 | Depth Pro 2 연구 가중치, 아르메니아어 모델·음성 체크포인트, 출판 데이터 협약 | 상업 사용권 일반화, 학습 데이터 인도 |
| 에이전트·개발 | Codex 안정판, Beam 초기 파일럿, SWE-Recreation 공개 | 무인 운영, 실제 업무 완결성의 재현 |
| 앱·보안 | Workspace 리전 제어 정식 제공, GitHub 프리뷰, Signal 모바일 보호 | 테넌트별 통제 효과, 탐지 성능, 기기별 보호 범위 |

## 6 반증·과장·재현성 감사

아래 평가·시연의 독립 재현은 모두 미확인이다. 수치는 공개자 보고값이며, <br class="report-field-break" />Evidence A는 수치의 독립 검증을 뜻하지 않는다.

| 평가 | 과제·비교 기준·지표 | 조건·공개 범위·오염 한계 |
|---|---|---|
| MedChemBench | 구조 복원·증거 해석·화합물 순위와 선택·물성 예측. 배점 획득률은 GPT-6.2 Astra 84.5%, GPT-6 Astra 83.3%, GPT-6.1 Sol 82.0%, GPT-5.6 Sol 58.2%. | 117개 공개 논문·특허 기반 99문제, 모두 xhigh, 도구·피드백·새 실험 없이 단일 시도. 공급자 평가이며 원문 사전 노출을 배제할 수 없고 실행 패키지는 미확인. 전향적 실험 성과로 일반화할 수 없다. |
| Beam | 예산·안전 규칙을 지키며 사무실 자판기 운영. 동등한 인간·타 모델 기준선 없음. 10월 8~30일 개입 23건, 작성 시점 추정 순자산 931달러. | 뉴욕 파일럿에서 직원이 주문·안전장치를 시험했고 현장 관리자가 물리적 이행을 맡았다. 개입에는 소프트웨어 수리와 규칙 변경도 포함된다. 공동 운영사 Andon Labs는 독립 재현 주체가 아니며 순자산은 매출이 아니다. |
| Depth Pro 2 | 단안 영상 깊이·경계·시간 일관성. 기존 단일·다중 프레임 방식과 경계 F1, 지터, 절대 깊이 정확도 및 실행시간 비교. | Sintel·Spring 평균과 별도 2K–4K 시연을 구분해야 한다. 시연은 H+ 기본 해상도와 비교군 기본 설정을 사용했다. 추론 코드만 공개됐고 학습 데이터 중복은 독립 확인되지 않았다. |
| Posterior Matching Distillation | 소수 단계 생성의 다양성 유지. DMD2 등 4단계 증류와 FID·프롬프트 정합성·지각 품질 비교. 저자 보고상 두 백본에서 비교군 중 FID 최저. | SDXL과 FLUX.2 [klein] 4B에서 4단계 비교. 가변 단계는 학습된 타임스텝 격자 내에서만 가능하다. 코드 미공개, 데이터 중복 미확인. |
| SWE-Recreation | 화면 조작만으로 앱 기능 재구현. 에이전트 5종 비교, 인간 기준선 미확인. 앱 균등 가중 기능 충실도와 완전 재현 요구사항 비율의 최고 관측값은 각각 0.530, 22.9%. | 54개 앱·숨은 요구 1,446개, DOM·소스·로그·백엔드 접근 없이 픽셀 근거로 고정 채점. 시스템·대상별 1회여서 변동성을 모르며 공개 앱에는 사전 노출 가능성이 있다. |
| Ayb 0.5 | ArmBench 24개 과제와 아르메니아어 IFEval. Gemma 4 31B 등과 비교. ArmBench 9B/4B/0.8B 각각 0.6164/0.5828/0.5300, 9B IFEval 0.729. | 제로샷, Ayb 추론 모드 비활성화. IFEval 비교군 대다수는 일정한 추론 설정을 사용했다. 학습 오염 배제 근거가 없고 동부 아르메니아어 중심이다. |
| OhanASR | ArmBench-ASR 전사, 공개·비공개 모델 및 일반/스트리밍 변형 비교. 원시 단어·문자 오류율은 일반 16.12%·3.49%, 스트리밍 19.07%·4.47%. | Common Voice 26·FLEURS·시·영화·뉴스 합산값으로 영화 성능 저하를 가린다. 학습·시험 중복 배제와 실시간 지연은 확인되지 않았다. |
| OhanTTS | 합성 품질과 스트리밍 서빙. 외부 모델 기준선 없음. 단어·문자 오류율 14.70%·6.15%, 화자 유사도 0.693. 첫 오디오는 동시 1명 331 ms, 16명 2,169 ms. | 보류한 텍스트·화자로 평가. 단일 공유 GB10·로컬 HTTP·PCM·전체 텍스트 선입력 조건이며 사용자 종단 지연이 아니다. 기반 모델 학습과의 중복은 미확인. |
| SK하이닉스 SC26 | 멀티턴 추론 캐시 공유와 멀티모달 전처리. 기존 네트워크 방식 대비 서빙·활용률 개선을 주장했지만 기준 구성과 정량 지표는 미공개. | 서버·GPU 간 CXL 랙 시연과 SK텔레콤의 별도 오프로딩 시험. 모델·하드웨어·부하·실행 절차가 부족해 재현이나 일반화가 어렵다. |

Lean 컴파일 확인은 형식 산출물 점검이다. formal statement와 가정이 원래 정리와 일치하는지, Claude가 무엇을 기여했는지, 수학계가 증명을 받아들였는지는 별개다. GitHub·onTEST의 기능 공개는 탐지율 입증이 아니며, Amazon 조사에서 단일 사례를 넘어 침해 빈도나 자율성을 추정할 수 없다. 규제 상태 `yes`도 의견수렴, 절차 공개, 등록 효력 등 각 항목에 명시된 범위만 뜻한다.

## 7 다음 확인 일정

- **12월 9일 공청회, 12월 30일 의견 마감: 한국 AI 데이터센터 초안의 50 MW 기준과 적격 요건 유지 여부를 확인한다.** 예정 시행일은 2027년 3월 10일이며 최종 문안은 미확인이다.
- **3월 초 예정 EU AI Board 회의: 의사규칙 전문과 의장 선출을 확인한다.** 자문포럼에 AI 동반자·에이전트 관련 공식 요청이 나오는지는 별도로 본다.
- 공개 시점 미정: MedChemBench 실행 패키지·미공개 사례 평가, Depth Pro 2 동일 해상도·연산 비교, 증류법 코드·체크포인트, SWE-Recreation 반복 시험을 확인한다.
- 후속 공시·제품 업데이트 시: Anthropic 순조달액과 자금 용도, SK하이닉스 지분 전환 완료, 삼성 HBM 인증·출하, CPO 과제 예산, Signal 지원 버전, GitHub 오탐·CPU 비용을 확인한다.
- 조사 결과 공개 시: 수능 TF의 조사 결과와 무선기록 보호 장치, Amazon 사건의 독립 확인과 패치 여부를 확인한다.

## 8 Coverage Audit

연구자 10/10 모두 최종 결과를 제출했다. 구조화된 1차·표적 2차 `search_audit` 수치는 Agents/Developer Tools와 Funding/M&A/Business에만 제공됐다. 나머지는 `coverage_notes`에 기록된 광역 검색과 직접 출처 확인을 구분하되, 단계별 후보 수나 전체 후보 수를 추정하지 않았다. 아래 검증 수는 영역별 제출 기준이므로 전역 중복 제거 전이다.

| 영역 | 검색·검증·편입 감사 |
|---|---|
| Frontier Models | 1·2차 후보 수 미기록, 검증 3, 편입 2. 공식 뉴스룸·문서·논문 인덱스와 날짜별 기사 원문을 확인했다. MedChemBench는 AI Research에 통합했다. Gemini 4 Neon·Genie 4와 GPT-6.2 출시, GPT-Live-1.1은 날짜 조건을 통과하지 못했다. |
| AI Research | 1·2차 후보 수 미기록, 검증 3, 편입 3. 기업 연구 페이지와 arXiv 공개 목록·저자 저장소를 확인했다. 기존 프리프린트의 Hugging Face 재노출을 제외했고, Lean 컴파일 보도를 연구 돌파구로 계상하지 않았다. |
| Agents/Developer Tools | 1차 3, 표적 2차 4, 검증 7, 편입 3. 저장소 발행시각·arXiv 공개 배치·공식 피드를 재확인했다. Signal은 보안 영역으로 통합했고, SkillBridge·Gemini CLI nightly·Goose는 검증됐으나 편집 우선순위로 미편입했다. Claude Code 2.1.330, AWS Quick 플러그인, AWS Marketplace 보도는 컷오프 이후였다. |
| Open Source/Repos | 1·2차 후보 수 미기록, 검증 3, 편입 3. 저장소·모델 페이지와 발표 원문을 확인했다. 일부 후보는 HTTP 429로 확인하지 못했고 vLLM·Transformers는 기간 밖이었다. 편입 3건은 같은 발행자의 별개 산출물이다. |
| Chips/Compute/Infrastructure | 1·2차 후보 수 미기록, 검증 3, 편입 3. 기업·한국 산업지·정부 연계 문서를 직접 확인했다. Reuters·FT 접근 제한이 있었고, 미국 칩 수출허가 공개·캘리포니아 소환장·NVIDIA–Microsoft 발표의 후속 보도로 원 공개일을 갱신하지 않았다. |
| Enterprise/Applications | 1·2차 후보 수 미기록, 검증 3, 편입 3. 영·한 보도 및 제품 공식 피드를 확인했다. AWS Quick은 RSS 시각 기준 컷오프 이후였고, Workspace 주간 요약과 앞선 배포·발표의 재보도는 제외했다. |
| Funding/M&A/Business | 1차 1, 표적 2차 3, 검증 4, 편입 2. 1차는 IPO 종결만 검증했고, 2차는 ZDNet Korea 반도체 아카이브 등에서 3건을 추가했다. 그중 삼성 인사와 키옥시아 전환을 인프라 영역으로 통합했다. 날짜 밖 원발표의 후속 보도, 확정되지 않은 금융 조건, 접근이 막힌 보도는 추가 편입하지 않았다. |
| Safety/Evaluation/Security | 1·2차 후보 수 미기록, 검증 3, 편입 2. 일반 검색이 부정확해 공식·규제·언론 인덱스를 직접 확인했고 Reuters 접근 제한이 있었다. MedChemBench는 연구 영역에 통합했다. 네덜란드 규제기관의 안경 경고는 원 공개일이 기간 밖이었다. |
| Policy/Geopolitics | 1·2차 후보 수 미기록, 검증 3, 편입 3. 유럽위원회 원문에서 별개 공개 3건을 확인했다. EDU-EDIC 동반 기사는 통합했고, 두 위원회 공개는 회의일이 아닌 공개일 기준이다. 미국 반도체 원격접근 규칙은 기간 밖이었다. |
| Korea Exposure | 1·2차 후보 수 미기록, 검증 3, 편입 2. 한국 산업지·기업 뉴스룸·정부 브리핑을 확인했다. 데이터센터 초안은 인프라 영역으로 통합했다. Tesla 후속은 컷오프 이후였고, Wrtn 보도와 침해 포털 재게시물은 새 조치를 입증하지 못했다. |

중복 제거: MedChemBench는 동일 ID로 제출된 두 건과 다른 ID로 제출된 한 건을 연구 영역의 단일 기록으로 통합했다. Signal 모바일 보호, 삼성 반도체 인사, SK하이닉스–키옥시아 지분 전환, 한국 AI 데이터센터 초안도 각 한 건으로 통합했다. MedChemBench의 가용성은 보고서 공개와 실행 패키지 접근을 구분해 `unknown`으로, Signal의 가용성은 업데이트 반영 보도가 있는 지원 모바일 범위에서 `yes`로 기록했다.

집계: 검증 제출 35건에서 전역 중복 6건과 편집상 미편입 3건을 제외했다. 편집상 미편입한 SkillBridge는 OS 호환성 수리 전후 성공률 30.6%→38.4%를 보고했으나, 검증 예산 비교는 Linux·macOS의 후향 분석이며 무작위 기준은 실측이 아닌 기대치다. 원시 실행 기록 일부와 독립 재현은 확인되지 않았다.

시각 판정: 정확한 발행시각이 있는 경우 KST 창을 적용했다. 날짜만 있는 11월 20일 공개는 번들의 날짜 중첩 규칙에 따랐으며 시각·시간대를 추정하지 않았다. 논문은 확인된 공개 목록을, 후속 보도는 실제 신규 공개 여부를 기준으로 삼았다. 아래 후보 5건은 검증 제출·편입 집계에 포함하지 않았다.

- **수록 사건 수:** 26

### Watchlist (미확인 후보)

- 후보: Apple job listing describes work on a computer-use agent (미포함 사유: <br class="report-field-break" />Evidence B; Bloomberg 원보도가 창 시작 23분 전이며 기간 내 후속 보도에 새 공개가 없음 / <br class="report-field-break" />출처: [www.bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-19/apple-is-working-on-ai-agent-for-device-control-apps-browsing-and-coding))
- 후보: Intuit agrees to sell Mailchimp to Bending Spoons for $3.68 billion (미포함 사유: <br class="report-field-break" />Evidence B; 매수자 원발표는 시각 없는 11월 19일자이며 기간 내 보도에 새 거래 이정표가 없음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/20/bending-spoons-buys-mailchimp-for-3-68-billion/))
- 후보: Etsy says it will revise its AI-related seller terms (미포함 사유: <br class="report-field-break" />Evidence B; 확인된 보도는 11월 21일 07:50 KST로 컷오프 이후이며 더 이른 원보도와 개정 약관을 확인하지 못함 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1039304/etsy-says-it-will-revise-its-new-ai-policy-after-backlash-from-sellers))
- 후보: SEC staff reportedly examining Nvidia accounting issues (미포함 사유: <br class="report-field-break" />Evidence C; 확인된 후속 보도는 컷오프 이후이며 익명 출처를 인용한 원보도와 1차 확인을 확보하지 못함 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/tech/1039305/nvda-down-sec-investigation-accounting))
- 후보: ETNews reports a December 10 launch for Samsung's first AI glasses (미포함 사유: <br class="report-field-break" />Evidence C; 출시일을 뒷받침할 귀속 가능한 문서나 실명 확인이 없고 보도된 출시 예정일 자체도 기간 밖 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000037))
