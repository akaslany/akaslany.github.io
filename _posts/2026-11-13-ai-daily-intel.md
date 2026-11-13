---
layout: ai-intel
title: "AI Daily Intel — 2026-11-13"
date: 2026-11-13 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-13/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-13
- **기준 시각:** 2026-11-13T06:00:00+09:00
- **수집 구간:** [2026-11-12T06:00:00+09:00, 2026-11-13T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 28

## 1 오늘의 AI 한 문장

AI의 경쟁축이 모델 성능에서 저비용 실행·외부 행동·기업 시스템 연결로 확장되는 가운데, 접근 권한·공급망·보안 검증이 실제 산업 전달을 제한하는 조건으로 부상했다.

이 보고서는 제공된 연구 번들만 편집한 결과다. <br class="report-field-break" />Evidence A는 공식 발표·논문·정부 공개자료라는 뜻이며 성능의 독립 검증을 의미하지 않는다. <br class="report-field-break" />Evidence B는 출처가 명시된 보도, <br class="report-field-break" />Evidence C는 본문 채택에 부족한 후보 증거다.

시간 적격성에는 한계가 있다. 정확한 시각이 있는 자료는 반개구간을 적용했지만, 날짜만 있는 자료는 연구 번들의 11월 12~13일 달력일 중첩 기준을 승계했다. 따라서 모든 포함 항목의 정확한 발행 순간이 요청 구간 안에 있음을 보장하지 않는다.

## 2 핵심 신호 5

1. Gemini 4 Hydrogen: 저비용 모델과 다중 모델 라우팅의 결합.
   Google은 입력·출력 100만 토큰당 각각 $1.50·$7.50, 100만 토큰 문맥과 여러 제품으로의 배포를 발표했다. GitHub Copilot의 점진적 제공도 같은 모델의 유통 확장으로 병합했다. 효율 개선 수치는 공급자 주장이고, Google 페이지의 11월 13일 수정 내용이 컷오프 이전에 존재했는지는 미확인이다.
   Evidence A · [Google 발표](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)

2. 에이전트의 실행 능력과 거래 허가는 별개다.
   Nectar는 마케팅 연락·협업 흐름을, Muse는 미국 유료 이용자의 기업 전화 기능을 확장했다. 반대로 United는 무단 개인 AI 에이전트의 접근 제한을 발표했다. 기술적 수행 가능성을 계약상 허용이나 성공적 거래로 해석하면 안 된다.
   Evidence B · [United 보도](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/)

3. AI 인프라의 위험은 성능뿐 아니라 경영·자금·국경 간 유통에 있다.
   NVIDIA의 즉시 경영진 교체 발표, Nebius의 대규모 설비투자 전망, 싱가포르 서버 거래 조사 공개가 각각 실행 연속성·조달 재원·최종사용자 확인 문제를 드러냈다. 로드맵 지속 기대나 미래 투자 전망은 실현된 결과가 아니다.
   Evidence A/B · [NVIDIA 발표](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) · [Nebius 보도](https://www.cnbc.com/2026/11/12/nebius-q3-earnings-report-2026.html)

4. 보안 경고가 사라져도 취약점이 고쳐진 것은 아니다.
   CodeQL 연구는 취약점을 유지하는 유지보수형 코드 변경이 기존 경고를 지울 수 있다고 보고했다. Fireworks·Notion 보도는 애플리케이션 바깥의 추론 공급자까지 고객 대화의 보안 경계에 포함해야 함을 보여준다.
   Evidence A/B · [CodeQL 연구](https://arxiv.org/abs/2611.17123) · [Fireworks 보도](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/)

5. 한국 노출은 제품 출시 경로와 안전 운영체계에서 구체화됐다.
   삼성은 국내 가격과 12월 10일 출시 계획을 제시했고, 국내에서는 사이버 회복력 TF와 80명 규모 AI 안전 모니터링단이 출범했다. 현재 제품 일반 이용, 검증된 안전 개선, 구속력 있는 새 규제는 별도 확인 대상이다.
   Evidence A/B · [삼성 발표](https://news.samsung.com/kr/삼성전자-구글·젠틀몬스터·워비파커와-협업한-인) · [사이버 회복력 TF](https://www.yna.co.kr/view/AKR20261112054000017)

## 3 영역별 AI 브리프

상태는 번들의 announcement, availability, code, independent_reproduction, production, revenue, regulatory 값을 각각 보존했다. unknown은 부재가 아니라 확인되지 않았다는 뜻이다. 동일 사건은 한 영역에만 원장을 두고 다른 영역에서는 교차참조한다.

### Frontier Models

  제목: Google Gemini 4 Hydrogen 발표 및 Copilot 유통 확장

**Evidence:** A

**출처:** [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)

  보조 <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot)
  공개일: 2026-11-12; Copilot 발표는 2026-11-13, 모두 날짜만 확인.

**내용:** Google은 글로벌 배포와 에이전트 실행 모델을 발표했다. Copilot의 IDE·CLI·앱·SDK 등 점진적 제공은 별도 사건으로 세지 않았다. Google의 production=yes는 Search 통합에 관한 공식 진술이지 관측된 고객 도입이 아니다. 한국 접근·과금·언어 성능은 미확인.


  제목: DeepSeek 애플리케이션 도구 기능의 API 공개

**Evidence:** A

**출처:** [api-docs.deepseek.com](https://api-docs.deepseek.com/news/news261113)

  공개일: 2026-11-13, 시각 미상.

**내용:** V4.1-Flash에 서버 관리 검색·파일 입력·URL 읽기·안전 검사 등을 제공하고 검색·OCR·ASR·TTS 등의 독립 API도 발표했다. 신규 모델 가중치 발표가 아니다. 데모 코드 링크는 있으나 저장소 실행과 라이선스는 미검증. 도구 요금은 매출 실현 증거가 아니다.


  제목: Ai2 XYBench 공식 평가 공개

**Evidence:** A

**출처:** [huggingface.co](https://huggingface.co/blog/allenai/xybench)

  공개일: 2026-11-13, 시각 미상.

**내용:** 잘못 설정된 사용자 요청을 그대로 수행하기보다 실제 목표로 유도하는지를 평가했다. Stack Overflow 사례에서 목표 중심 답변이 주된 초점이 된 비율은 35~41%라는 저자 보고다. 기존 논문의 최초 공개가 아니라 날짜가 확인된 공식 설명 공개로 채택했다. 영어 평가이므로 한국어 성능으로 일반화하지 않는다.


### AI Research

  제목: AgentSSL, 제한된 라벨 환경의 자동 학습 파이프라인 연구

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.17323)

  공개시각: 2026-11-12T18:59:06+00:00.

**내용:** 저자는 12개 설정 중 8개에서 가장 강한 기준선을 넘었으며 최대 +21.8%라고 보고했다. 프로그램 선택 실패도 주요 병목이다. 검증된 것은 논문 제출이며, 산업 현장 성능이나 한국 적용은 아니다.


  제목: CoReMem, 연속 저장소 작업의 비용 인식 메모리

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.17316)

  공개시각: 2026-11-12T18:58:22+00:00.

**내용:** 저자는 ChainSWE 해결률 21.0%→25.7%, 단계 17% 감소, 캐시 반영 총 토큰 11% 감소를 보고했다. 메모리와 행위 모델 적응이 결합된 결과여서 메모리 단독 효과로 읽으면 안 된다.


  제목: CRAM, 퍼즐 추론 벤치마크의 해석에 문제 제기

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.17309)

  공개시각: 2026-11-12T18:56:56+00:00.

**내용:** 에너지 모델로 Sudoku·미로 과제에서 높은 정확도와 효율을 보고했다. 좁은 구조화 과제의 결과이며 일반 추론 우위나 범용 모델 대체를 입증하지 않는다.


### Agents/Developer Tools

  제목: Nectar Creator Agent 글로벌 출시

**Evidence:** B

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/12/nectar-launches-an-ai-agent-to-automate-creator-discovery-and-outreach-for-brands/)

  공개일: 2026-11-12, 시각 미상.

**내용:** Instagram·TikTok 크리에이터 탐색, 맞춤 연락, 협업 조정과 캠페인 모니터링을 제공한다고 보도됐다. MCP 연동은 계획 단계다. 한국 브랜드 활용 가능성은 있으나 한국어 지원·실고객 성과는 미확인.


  제목: Copilot 앱의 GitHub Enterprise Server 지원 일반 제공

**Evidence:** A

**출처:** [github.blog](https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app)

  공개일: 2026-11-13, 시각 미상.

**내용:** 앱 1.2.0 이상에서 GHES 계정으로 원격 저장소·이슈·PR 작업을 지원한다. 먼저 GitHub.com 또는 GHE.com 계정 로그인이 필요하며 GHES의 클라우드 세션은 지원하지 않는다. 자체 호스팅 저장소 연결이 데이터 국내 잔류 보장을 뜻하지 않는다.


  제목: United의 무단 개인 AI 에이전트 접근 제한 발표

**Evidence:** B

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/)

  공개시각: 2026-11-12T09:17:00-08:00.

**내용:** 직접 예약 채널뿐 아니라 여행사·집계업체 경유 접근에도 제한 조치를 추진한다고 밝혔다. 자격증명 노출과 의도하지 않은 거래 등을 이유로 들었다. 기술적 차단 완료나 정부 규제로 해석하지 않는다.


  제목: Muse의 미국 기업 전화 기능 유료 이용자 확대

**Evidence:** B

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/12/muse-can-now-place-calls-to-u-s-businesses-if-you-pay/)

  공개일: 2026-11-12, 시각 미상.

**내용:** 제한 시험에서 미국 유료 가입자로 기업 전화 기능을 확대했다고 보도됐다. 예약·서비스 문의의 실제 완료율, AI 고지·동의와 한국 제공 여부는 확인되지 않았다.


Copilot의 Hydrogen 제공은 Frontier Models의 원장에 병합했다.

### Open Source/Repos

  제목: Salesforce SOV-Transcribe-1 가중치·추론 코드 공개

**Evidence:** A

**출처:** [huggingface.co](https://huggingface.co/blog/salesforce-sovereign-intelligence/sov-transcribe-1)

  보조 <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/salesforce-sovereign-intelligence/SOV-Transcribe-1)
  공개일: 2026-11-12, 시각 미상.

**내용:** Apache 2.0 가중치, Transformers 모델링 코드와 vLLM 플러그인이 확인됐다. 비스트리밍 음성인식 모델이며 네이티브 업스트림 지원은 통합 중이다. 모델 카드의 7개 지원 언어에 한국어는 없다.


  제목: ZONOS3-Mini 기술보고서의 구간 내 공개

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.16525)

  보조 <br class="report-field-break" />출처: [github.com](https://github.com/Zyphra/ZONOS3-Mini)
  공개시각: 2026-11-12T09:24:22+00:00.

**내용:** 공개 가중치와 CUDA·Apple Silicon·C++/ggml·WebGPU 추론 구현을 설명한다. 런타임 MIT, 가중치 Apache 2.0으로 제시됐다. 한국어 지원은 개발자 설명에 있지만 품질은 미검증이다. 최초 제품 공개일이 아니라 정확한 시각이 있는 논문 제출을 사건으로 채택했다.


목표 3건 대비 검증·포함 모두 2건으로 1건 부족하다. 1차 1건, 표적 2차 1건을 확보했으며 날짜 밖 재게시·릴리스와 검색 품질 저하를 고려해 추가 항목을 채우지 않았다.

### Chips/Compute/Infrastructure

  제목: NVIDIA의 즉시 CEO 교체 발표

**Evidence:** A

**출처:** [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition)

  공개일: 2026-11-12, 시각 미상.

**내용:** 회사는 Jensen Huang의 사장·CEO·이사 사임, CFO Colette Kress의 임시 CEO 겸임, Harvey C. Jones의 이사회 의장 선임을 발표했다. 사임 이유는 확정하지 않는다. 고객 약속과 제품 로드맵의 연속성은 경영진 기대이며 검증된 납품 결과가 아니다.


  제목: 싱가포르 서버 거래 조사 경과 공개

**Evidence:** A

**출처:** [www.mha.gov.sg](https://www.mha.gov.sg/media-room/newsroom/singapore-investigations-into-alice-huang-huang-le-and-megaspeed-international-pte-ltd/)

  공개일: 2026-11-12, 시각 미상.

**내용:** 내무부는 서버 구매·말레이시아 경유 거래 관련 조사와 제한적인 외부 협조를 설명했다. Megaspeed 및 6명에 대한 조사는 진행 중이다. 2월의 경고·출국 등은 이번 구간의 신규 집행으로 세지 않았으며, 불법 전용 확정이나 신규 수출금지도 아니다.


  제목: LMSYS SGLang Consortium 출범

**Evidence:** A

**출처:** [www.lmsys.org](https://www.lmsys.org/blog/2026-11-12-sglang-consortium)

  공개일: 2026-11-12, 시각 미상.

**내용:** NVIDIA·AMD·Intel·Google·Meta·Cloudflare·Modal·RadixArk가 창립 회원으로 참여한다. 엔지니어링·시험·배포 피드백과 로드맵 협의를 추진하되 기술 결정과 코드 수용 권한은 유지관리자에게 남는다. 신규 코드 릴리스나 신규 운영 배포는 아니다.


  제목: AMD·PsiQuantum의 하이브리드 인프라 협력 확대

**Evidence:** A

**출처:** [www.psiquantum.com](https://www.psiquantum.com/news-import/psiquantum-amd-partnership-future-of-computing)

  공개일: 2026-11-12, 시각 미상.

**내용:** 기존 FPGA 협력에서 Instinct GPU·EPYC CPU·ROCm 통합으로 범위를 넓힌다. AMD의 지분투자는 계획이며 종결이 확인되지 않았다. 실용 규모 내결함성 양자컴퓨터의 가용성을 입증하지 않는다.


  제목: PACER GPU 전력 급증 관리 연구

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.17206)

  공개시각: 2026-11-12T18:06:53Z.

**내용:** 하드웨어·펌웨어 방식으로 전력 급증에 따른 스로틀링을 줄여 기준선 대비 3~12% 성능 개선을 보고했다. 공개된 것은 논문이며 다운로드 가능한 펌웨어나 상용 GPU 기능이 아니다.


### Enterprise/Applications

  제목: Fireworks 침해와 Notion AI 대화 노출 보도

**Evidence:** B

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/)

  공개시각: 2026-11-12T07:02:00-08:00.

**내용:** 회사 확인을 인용한 보도로, Notion 고객 약 1% 및 Insights 대화 기록 노출을 전했다. Notion의 Fireworks 연결 해제는 11월 3일로 설명된다. 이번 사건은 구간 내 귀속 가능한 보도이며 공격일·최초 공개일이 구간 안이었다고 단정하지 않는다. 한국 피해자는 미확인.


연구자 검증 3건 중 Nectar와 United는 Agents/Developer Tools 원장으로 병합했다. 이 영역에 새로 계상한 사건은 1건이다. 목표 대비 2건 부족은 검증 실패가 아니라 전역 중복 제거에 따른 원장 배분이다.

### Funding/M&A/Business

  제목: Norwest의 40억 달러 18호 펀드 조성

**Evidence:** B

**출처:** [techcrunch.com](https://techcrunch.com/2026/11/12/norwest-pushes-deeper-into-ai-with-new-4b-fund/)

  공개시각: 2026-11-12T07:18:00-08:00.

**내용:** Wells Fargo 단독 출자로 조성한 펀드와 AI 투자 확대 전략이 보도됐다. 펀드는 다른 분야도 포함하므로 전액을 AI 배정액이나 집행액으로 계산하지 않는다. 한국 투자 배정은 미공개.


  제목: Nebius 3분기 실적 및 2027년 설비투자 전망

**Evidence:** B

**출처:** [www.cnbc.com](https://www.cnbc.com/2026/11/12/nebius-q3-earnings-report-2026.html)

  보조 <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/12/nebius-tests-the-neocloud-playbook-with-40-billion-in-planned-spending/)
  공개일: 2026-11-12, 시각 미상.

**내용:** 보도된 3분기 매출은 9억8,080만 달러, 순손실은 3,750만 달러다. 2027년 설비투자 400억~450억 달러와 매출 120억~130억 달러는 전망이다. 건설 지연, 고객 선급금·계약 기반 금융 의존도와 실제 인도 능력을 함께 확인해야 한다.


NVIDIA 경영진 교체는 인프라 원장으로 병합했다. 연구자 검증 3건, 이 영역의 고유 계상 2건으로 목표 대비 1건 부족하다.

### Safety/Evaluation/Security

  제목: Bait, 에이전트 강화학습의 보상함수 안전 위험 공개

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.16369)

  공개시각: 2026-11-12T06:34:34Z.

**내용:** 사용자 통제 보상이 안전성을 약화할 수 있다는 실험과 악성 응답을 이용한 보상 선호 탐지 방어를 제안했다. Tinker 대상 실험과 공개 저장소가 확인됐으나 코드 최초 공개 시각은 미확인이다. 최소 20달러라는 보고를 보편적 공격비용으로 해석하지 않는다.


  제목: 취약점을 유지한 코드 변경의 CodeQL 경고 회피 연구

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.17123)

  공개시각: 2026-11-12T17:16:08Z.

**내용:** 기존에 탐지된 npm 취약점 흐름 172개에서 흐름당 3회 재작성으로 26.2%의 경고를 없앴다고 보고했다. 경고를 보지 못한 대조 생성기는 회피하지 못했다. 같은 저자의 다중 분석기 시험은 외부 독립 재현이 아니다.


  제목: ReliaGuard의 생성 이미지 편집 귀속·영역 식별 연구

**Evidence:** A

**출처:** [arxiv.org](https://arxiv.org/abs/2611.16368)

  공개시각: 2026-11-12T06:33:37Z.

**내용:** 워터마크와 재구성 반응을 결합해 출처 식별자 복구와 편집 영역 탐지를 함께 다룬다. 보호되지 않은 임의 이미지의 진위를 판별하는 보편적 시스템이나 운영 도입으로 해석하면 안 된다.


### Policy/Geopolitics

  제목: 비영리 연합의 고도 AI 개발·배포 중단 청구 소송 보도

**Evidence:** B

**출처:** [www.theregister.com](https://www.theregister.com/security/2026/11/12/openai-launches-security-products-tells-orgs-theyre-doomed-if-they-dont-use-them/5309500)

  공개시각: 2026-11-12T20:48:00+00:00.

**내용:** 비영리 단체들이 5개 AI 사업자를 상대로 더 강력한 시스템 개발·배포 중단을 요구하는 소송을 제기했다고 보도됐다. 파국적 위험은 원고의 주장이고, 청구는 판결·금지명령·시행 규제가 아니다. 소장과 법원 사건기록은 별도 확인이 필요하다.


  제목: 영국 내무부의 경찰 사후 얼굴인식 사용자 조사 공개

**Evidence:** A

**출처:** [www.gov.uk](https://www.gov.uk/government/publications/police-user-insights-on-retrospective-facial-recognition-2026/police-user-insights-on-retrospective-facial-recognition-2026)

  공개일: 2026-11-12, 시각 미상.

**내용:** 45개 참여 조직의 사용자 779명을 조사했다. 약 34%는 검색 일치 결과의 증거 요건 충족 여부를 잘못 알거나 확신하지 못했고, 65%는 지난 1년 교육을 기억하지 못했다. 자발적 유효 응답은 대상의 13%이며 알고리즘 정확도 시험이 아니다. 현장조사는 4~6월, 이번 사건은 보고서 공개다.


싱가포르 조사 공개는 인프라 원장으로 병합했다. 1차 검증 0건에서 표적 2차 3건으로 보완됐지만 이 영역에 고유 계상한 사건은 2건이다.

### Korea Exposure

  제목: 삼성의 Gemini 기반 안경 제품군·국내 가격 발표

**Evidence:** A

**출처:** [news.samsung.com](https://news.samsung.com/kr/삼성전자-구글·젠틀몬스터·워비파커와-협업한-인)

  공개일: 2026-11-12, 시각 미상.

**내용:** Google·Gentle Monster·Warby Parker 협업 30종을 발표했다. 한국에는 Gentle Monster 16종, 65만~70만 원 가격과 12월 10일 일반 출시를 제시했다. 11월 12일 온라인 사전판매와 일반 이용 가능 여부는 구분한다. 한국어 기능·카메라 표시·시각정보 보호는 후속 검증 대상이다.


  제목: 국가 사이버 회복력 TF 출범

**Evidence:** B

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261112054000017)

  공개시각: 2026-11-12T14:00:00+09:00.

**내용:** 국가AI전략위원회가 AI 위협·필수 서비스 연속성·중소기업 및 지역시설 복구를 다루는 TF를 출범시켰다고 보도됐다. 국가전략은 2027년 1분기, 이행 로드맵은 2027~2028년을 대상으로 한다. 예산 확정·실제 복구 성능·구속력 있는 규정 제정은 별개다.


  제목: 80명 규모 AI 안전 모니터링단 출범

**Evidence:** B

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261112051400017)

  공개시각: 2026-11-12T13:40:00+09:00.

**내용:** 과학기술정보통신부와 AI안전연구소가 2027년 8월까지 활동할 참여단을 출범시켰다고 보도됐다. 허위정보·편향·보안 취약점 제보를 정확성·위험성·재현성·유용성 기준으로 확인할 계획이다. 출범은 검증된 발견이나 공급자 수정 완료를 의미하지 않는다.


## 4 기술→산업 전달경로

| 기술·제도 변화 | 산업 전달경로 | 한국 접점 | 아직 넘지 못한 확인 단계 |
|---|---|---|---|
| Hydrogen·도구 API | 추론 단가·도구 통합 → 에이전트 설계·라우팅 선택 | API 개발사·Copilot 이용 기업 | 국내 접근, 실제 비용, 동일 조건 성공률 |
| CoReMem·AgentSSL | 메모리·적은 라벨 활용 → 개발·산업 데이터 작업 자동화 | 소프트웨어·과학·제조 연구팀 | 코드, 분리 실험, 외부 재현 |
| 공개 음성 모델 | 로컬 배포 → 전사·합성 서비스의 자체 운영 선택지 | 한국어 TTS 및 기업 음성 서비스 | SOV의 한국어 미지원, ZONOS의 한국어 품질 검증 |
| Nectar·Muse | 외부 연락·전화 → 마케팅·예약 업무 실행 | 해외 캠페인·미국 서비스 접점 | 승인·동의·권한·오류 복구 |
| United 제한 | 플랫폼 정책 → 에이전트 거래 경로 제약 | 여행 플랫폼·예약 개발사 | 허용 연동 경로와 실제 집행 범위 |
| SGLang·PACER | 다중 하드웨어 협력·전력 관리 → 실효 추론 처리량 | GPU 클라우드·클러스터 운영 | 실제 기여·릴리스와 하드웨어별 재현 |
| Fireworks·보상 공격·정적분석 회피 | 공급자·튜닝·코드 변경 위험 → 보안 통제 재설계 | 기업 AI 조달·개발 보안 | 사고 범위, 공급자 대응, 회귀 시험 |
| 삼성 안경·국내 안전 조직 | 소비자 접점 확대·제보 및 복구 체계 → 운영 책임 구체화 | 국내 유통·정부·일반 참여자 | 일반 출시, 안전 검증, 예산·성과 |

이는 가능한 전달경로의 분석이며, 확인된 계약·매출·한국 도입 실적으로 읽지 않는다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 증거 및 해석 한계 |
|---|---|---|
| 컴퓨트·자본 | NVIDIA 교체, Nebius 실적·투자 전망, AMD·PsiQuantum | A/B. 미래 납품·투자 종결·설비투자 실현 미확인 |
| 추론 런타임 | SGLang 협력체, PACER | A. 협력 발표와 논문이며 새 운영 배포 증거는 아님 |
| 모델·모달리티 | Hydrogen, SOV-Transcribe-1, ZONOS3-Mini | A. 공개·배포와 독립 성능 검증 분리 |
| 에이전트 구성요소 | DeepSeek 도구 API, CoReMem, AgentSSL | A. API·논문 공개는 확인, 산업 성과 미확인 |
| 개발·업무 인터페이스 | Copilot GHES, Nectar, Muse | A/B. 지원 범위·지역·승인 통제가 중요 |
| 사용자 접점 | 삼성 안경 | A. 사전판매와 12월 일반 출시 구분 |
| 안전·평가 | XYBench, CRAM, Bait, CodeQL, ReliaGuard | A. 과제 한정 저자 평가, 독립 재현 미확인 |
| 보안·접근·거버넌스 | Fireworks, United, 싱가포르, 소송, 영국 조사, 국내 안전 조직 | A/B. 사고·정책·소송·연구·프로그램은 법적 효력이 서로 다름 |

## 6 반증·과장·재현성 감사

### 벤치마크별 점검

| 대상 | 과제·기준선·지표 | 조건 | 공개·오염·독립 재현 감사 |
|---|---|---|---|
| Hydrogen | Terminal-Bench 4.1에서 57% 대 Gemini 3.8 Flash 18.2%; Intelligence Index는 high 51·xhigh 54 대 Argon 50. Orchestrator는 Carbon 단독 대비 할당량 24% 감소·시간 19% 단축 주장 | 기본 high, xhigh 별도. 오케스트레이션은 Terminal-Bench 4.0으로 독립 실행의 4.1과 다름 | Google 주장. 하네스·표본·불확실성·오염 통제 미확인. 11월 13일 수정으로 수치의 컷오프 이전 존재 미확인. 외부 지표 이름이 독립 재현을 뜻하지 않음 |
| XYBench | 사용자 실제 목표 유도; 인간 참조 및 5개 모델. 목표 해법 포함 59~71%, 주된 초점 35~41% | 영어 8,115문항, 단일 응답. Claude Sonnet 4.5 판정, 인간 2명이 500개 응답 검토 | 합성 WikiHow 계열 비중이 높음. 오염 통제 미명시. 인간 검토는 외부 독립 재현이 아님 |
| AgentSSL | 반지도 파이프라인·프로그램 선택. 인간 설계 기준선 대비 12개 중 8개 우위, 최대 +21.8%; 선택 관련 하락 최대 47% | 제한된 감독·약한 피드백·계산량 일치 주장. ProgramSelectBench 16,977개 프로그램 | 비율과 퍼센트포인트 구분 미확인. 구체 기준선·분할·하드웨어·오염 통제 미확인. 독립 재현 없음 |
| CoReMem | 연속 코딩; 메모리 없는 미학습 27B 행위 모델 대비 해결률 21.0%→25.7%, 단계·토큰 감소 | 메모리 모듈 호출까지 토큰에 포함. 메모리와 행위 모델 적응 결합 | 메모리 단독 인과효과 미분리. 분할·오염·통계 불확실성 미확인. 독립 재현 없음 |
| CRAM | Sudoku-Extreme 99.996%, Maze-Unique 100%; 루프형 모델 대비 훈련·추론 효율 주장 | 단일 GPU. 훈련 42ms·132ms 보고, 정확한 GPU·시간 경계·정규화 미확인 | 좁은 퍼즐 벤치마크. 일반 추론 우위 아님. 데이터 분할·오염·외부 재현 미확인 |
| SOV-Transcribe-1 | 비스트리밍 ASR. WER 2.28% 대 Nemotron 2.81%·Voxtral 2.77%; VoiceCodeBench 성공률 76.3%, 엔터티 일치 93.4% | BF16·16kHz·7개 언어. VoiceCodeBench는 비공개 리더보드 | 외부 리더보드 원문 재검증·재현 없음. 기술보고서 예정, 오염 통제 미확인. 모델 카드 4.6B 활성·26.6B 전체와 홍보 반올림 구분 |
| ZONOS3-Mini | 55개 언어 집합 평균 WER 6.71%; 첫 오디오 지연 중앙값 80ms, 최대 처리량 초당 오디오 457초 | 평가 35개 클린·20개 실환경 언어 집합. H100 80GB, 지연 동시성 8, 처리량은 최적 동시성 | 개발자 설계·실행. 886M 전체와 블로그 800M 백본 표현 차이. 오염·외부 재현 미확인. 논문 공개와 최초 릴리스 날짜 분리 |
| PACER | GPU 전력 관리 기준선 대비 3~12% 개선, 이상적 해법의 3% 이내 | 하드웨어·펌웨어 기법; GPU·전력 설정·반복·구체 기준선 미확인 | 초록 수준 증거. 모델 학습 오염은 적용 여부 불명확하고, 시스템 측정 공정성이 핵심. 구현·독립 재현 미확인 |
| Bait | 악성 보상 탐지·안전 저하 억제와 정상 학습 유지; 무방어 RL 및 Excision 공격 고려 | 상용 Tinker API 실험. 최소 공격비용 20달러 보고 | 수치 방어 성능은 채택하지 않음. 일반화·오염 감사·외부 재현 미확인. 저장소 존재와 구간 내 코드 출시 구분 |
| CodeQL 재작성 | 탐지된 JS/npm 흐름 172개. 경고 인지 생성기는 26.2% 경고 제거, 비인지 대조군은 없음 | 흐름당 3회, 함수 1개 변경. 수동·통제 시험으로 취약점 존속 확인했다고 보고 | 언어·표본 선택 한계. 2차·3중 분석기 회피 74%·53%는 같은 저자 시험. 모델·분석기 버전과 오염 통제·외부 재현 미확인 |
| ReliaGuard | 이미지 귀속·편집 영역 IoU 85.61%/94.90%, 식별 비트 정확도 각 100%; 최강 기준선 대비 전체 출력 IoU +45.02%p | 300개 원본·900개 편집·3개 이미지 영역, 명목 배경 오탐 1%로 임계값 보정 | 7개 처리군에서 성능 저하도 보고. 기준선 명칭·적응형 공격·오염 통제 미확인. 저자 보류 시험셋은 독립 재현 아님 |

### 비벤치마크 주장과 과장 방지

- Copilot의 Hydrogen 지시 이행 개선은 정량 조건이 없는 공급자 설명이다.
- Nectar의 3억 개 이상 크리에이터 프로필은 회사가 주장한 데이터 범위이지 성공률이 아니다.
- Muse 전화 기능의 제공 확대는 통화 완료율이나 유료 매출을 증명하지 않는다.
- DeepSeek 도구 API, GHES 호환성, SGLang 협력체, AMD·PsiQuantum 계획에는 검증된 성능 비교를 부여하지 않았다.
- **영국 얼굴인식 수치는 사용자 지식·인식 조사다.** 자발적 응답 편향이 있으며 모델 정확도나 오인 체포 발생률로 전환하지 않는다.
- 한국 모니터링단 선발·과거 제보 수는 새 조직의 안전 개선 성과가 아니다.
- Fireworks는 확인된 사고를 인용한 구간 내 보도지만 원문 권고문·최초 공개일·공격일을 재검증하지 못했다.
- **소송 제기, 수사 공개, 프로그램 출범을 새 법률 시행으로 합치지 않았다.** 싱가포르의 regulatory=yes는 공식 조사 맥락이며 유죄 확정을 뜻하지 않는다.
- **Evidence C 후보는 핵심 신호와 원장에 포함하지 않았다.** <br class="report-field-break" />Evidence A/B 사건도 모든 independent_reproduction 상태는 unknown이다.

## 7 다음 확인 일정

| 시점 | 확인 대상 | 통과 기준 |
|---|---|---|
| 다음 편집 전, 날짜 미정 | 날짜만 있는 발표와 Google 수정 이력 | 원발행 시각·시간대, 컷오프 이전 본문 및 수치 확인 |
| 다음 편집 전, 날짜 미정 | DeepSeek·Copilot GHES·Hydrogen | 실제 계정 접근, 지역·요금·관리자 정책·데이터 처리 확인 |
| 다음 편집 전, 날짜 미정 | Nectar·Muse·United | 외부 행동 승인·동의·허용 연동 경로와 집행 범위 확인 |
| 다음 편집 전, 날짜 미정 | Fireworks·Notion | 원문 권고문, 최초 공개일, 노출 기간·대상·보관·대응 확인 |
| 다음 연구 검토, 날짜 미정 | 논문·음성 모델·PACER | 코드·하드웨어·분할·오염 통제·기준선과 독립 재현 확인 |
| 2026-11-16~18 예정 | COP31 관련 세션 | 실제 개최와 채택 문서·재정 약속 확인; 현재는 의제 예고 |
| 2026-11-17 예정 | NVIDIA 실적 공개 | 경영진 교체 이후 로드맵·고객 약속·자본 배분 변화 확인 |
| 2026-12-10 예정 | 삼성 안경 한국 일반 출시 | 실제 판매·국내 기능·독립 사용기·개인정보 통제 확인 |
| 2027년 1분기 목표 | 한국 사이버 회복력 전략 | 공개 전략·예산·책임기관·복구 훈련 기준 확인 |
| 2027년 8월까지 활동 예정 | 한국 AI 안전 모니터링단 | 재현 가능한 제보·검증 결과·공급자 수정 이력 확인 |

소송 심리·수사 결론·투자 종결·외부 재현에는 확정 일정을 만들지 않았다.

## 8 Coverage Audit

### 연구자 종료 및 수량

10개 연구자 모두 최종 결과 객체와 coverage_notes를 제출해 terminal completion을 확인했다. 별도 실행 로그나 종료 코드는 번들에 없으므로 프로세스 수준 정상 종료를 추가 주장하지 않는다.

후보 수는 검색에서 검토한 모든 항목을 뜻하며, 번들은 이를 완전한 숫자로 제공하지 않는다. 따라서 검색 후보 총수와 검증 이벤트 수를 혼용하지 않았다. 아래의 포함 수는 전역 중복 제거 후 해당 영역에 원장을 배치한 고유 사건 수다.

| Category | 연구자 종료 | 전체 검색 후보 수 | 1차→표적 2차 검증 | 연구자 검증 수 | 고유 포함 수 | 목표 3건 대비 포함 부족 |
|---|---|---|---|---:|---:|---:|
| Frontier Models | 완료 | 미집계 | 2→1 | 3 | 3 | 0 |
| AI Research | 완료 | 미집계 | 1차 3, 별도 2차 기록 없음 | 3 | 3 | 0 |
| Agents/Developer Tools | 완료 | 미집계 | 1차 5, 별도 2차 기록 없음 | 5 | 4 | 0 |
| Open Source/Repos | 완료 | 미집계 | 1→1 | 2 | 2 | 1 |
| Chips/Compute/Infrastructure | 완료 | 미집계 | 2→3 | 5 | 5 | 0 |
| Enterprise/Applications | 완료 | 미집계 | 1차 3, 별도 2차 기록 없음 | 3 | 1 | 2 |
| Funding/M&A/Business | 완료 | 미집계 | 1차 3, 별도 2차 기록 없음 | 3 | 2 | 1 |
| Safety/Evaluation/Security | 완료 | 미집계 | 1차 3, 별도 2차 기록 없음 | 3 | 3 | 0 |
| Policy/Geopolitics | 완료 | 미집계 | 0→3 | 3 | 2 | 1 |
| Korea Exposure | 완료 | 미집계 | 1차 3, 별도 2차 기록 없음 | 3 | 3 | 0 |

4개 영역에だけ search_audit 객체가 있으며, 나머지 6개는 coverage_notes와 제출된 events에 근거했다. 기록되지 않은 2차 검색을 수행했다고 간주하지 않았다. coverage_notes 앞부분의 Frontier 2건·Open Source 1건·Infrastructure 2건·Policy 0건은 1차 상태이고, 뒤의 Targeted 및 search_audit를 최종값으로 적용했다.

### 영역별 검색 한계와 부족 사유

- **Frontier Models: 1차 Google·DeepSeek 2건, 표적 2차 XYBench 1건으로 목표 충족. Anthropic 11월 9일, Google Carbon 11월 10일, Qwen의 8월 릴리스 등을 제외했다.** XYBench는 신규 가중치가 아니라 평가 공식 공개이며 DeepSeek도 기존 모델의 API 확장이다. 날짜만 있는 공개와 검색 부정확성 때문에 정확한 시간·완전성은 미확인.
- **AI Research: arXiv 직접 추출로 정확한 제출 시각을 가진 3건을 확보했다.** 일반 검색은 무관 결과가 많았고, 이전 날짜의 Anthropic 자료와 날짜 없는 DeepMind 항목은 채택하지 않았다. 연구 논문 중심 편향이 있다.
- **Agents/Developer Tools: GitHub·Anthropic·TechCrunch 직접 추출로 5건을 검증했다.** Hydrogen을 Frontier에 병합해 고유 원장 4건이다. 이전 날짜 발표는 제외했고, 11월 13일 날짜만 있는 GitHub 항목은 정확한 시각이 미확인이다.
- **Open Source/Repos: search_audit는 1차 1건·표적 2차 1건·최종 2건·부족 1건이다.** AI Edge Gallery는 11월 10일 원문 재게시, MotionGraphicsBench는 11월 10일, vLLM·Ollama는 확인된 릴리스 날짜가 이전이어서 제외했다. ZONOS는 정확한 arXiv 제출로 기술 공개를 확보했지만 최초 출시일은 미해결이다. 검색 품질 저하가 있어 생태계 전체의 사건 부재를 뜻하지 않는다.
- **Chips/Compute/Infrastructure: 1차 2건에서 2차 SGLang·AMD/PsiQuantum·PACER 3건을 추가해 5건으로 보완했다.** HPE·Microsoft 기사는 정확한 컷오프 이후, Yandex는 과거 사건, AMD MI400 상세는 404, Intel은 차단이었다. SK hynix의 확인된 최신 항목은 11월 11일이었다.
- **Enterprise/Applications: 검증 3건은 충족했지만 Nectar·United를 Agents 원장에 통합해 1건만 고유 계상했다.** 추가 고유 사건 확보를 위한 별도 2차 기록은 없다. KT 관련 Microsoft 글은 11월 11일, Salesforce 글은 명확한 기업 앱 출시보다 평가 연구에 해당해 제외했다.
- **Funding/M&A/Business: 검증 3건 중 NVIDIA를 인프라로 병합해 2건이다.** 이를 보충할 별도 2차 기록은 없다. Reuters·OpenAI 추출의 429와 부정확한 검색으로 전체 후보 파악에 한계가 있다. Nebius의 실적과 가이던스를, Norwest의 펀드 조성과 AI 실제 집행을 분리했다.
- **Safety/Evaluation/Security: 정확한 arXiv 제출 시각 3건으로 목표 충족. 날짜 밖 논문이 다음 날 목록에 나타난 경우도 제외했다.** 뉴스 검색 실패로 연구 편중이 크며 기업 사고·조치의 포괄적 부재를 주장하지 않는다.
- **Policy/Geopolitics: 1차 0건에서 표적 2차 3건으로 검증 부족을 해소했다.** 싱가포르를 인프라로 병합해 고유 포함 2건이다. EU 드론은 11월 11일 원공개, COP31은 의제 예고, 호주 기사는 구간 이전, 영국 감독기관 기사는 구간 이후다. Reuters 차단과 BIS 경로 오류 등으로 누락 가능성이 있다.
- **Korea Exposure: 삼성·연합뉴스 직접 추출로 3건 충족. 부처 목록·ZDNet의 429가 범위를 제한했다.** 06:00 이후 기사와 정확히 종료시각인 물류 발표는 제외했고, 11월 11일 체결 협약을 다음 날 새 사건으로 바꾸지 않았다. 삼성 안경의 연합뉴스 보도는 11월 12일 23:00으로 추가 뒷받침됐으나 별도 사건으로 세지 않았다.

### 전역 중복 제거와 편집 배제

- 연구자 제출 이벤트 33개에서 중복 표현 5개를 병합해 고유 사건 28개를 포함했다.
- Nectar: Agents와 Enterprise의 동일 ID·사실을 Agents 원장 하나로 통합했다.
- United: 서로 다른 ID였지만 동일 기사·정책이므로 Agents의 정식 원장 하나로 통합했다.
- **Hydrogen: Google 모델 발표와 GitHub Copilot 제공을 모델 출시·유통 확장의 동일 사건군으로 병합하고 Google 발표 ID를 유지했다.** Search·Antigravity도 분할하지 않았다.
- NVIDIA: Infrastructure와 Funding의 동일 사건은 Infrastructure에만 계상했다.
- 싱가포르: Infrastructure와 Policy의 동일 공식 공개는 Infrastructure에만 계상했다.
- **ZONOS: 정확한 구간 내 논문 제출은 포함하되, 날짜가 충돌하는 최초 출시 후보는 아래에 보존했다.** 출시와 논문 공개를 두 사건으로 세지 않았다.
- **모든 원장은 <br class="report-field-break" />Evidence A/B다.** C 후보는 미포함이다. 정량 실험 주장은 독립 검증값으로 승격하지 않았다.

### Watchlist (미확인 후보)

아래 목록에는 시간 밖·중요도 부족·상세 증거 부족 후보도 포함된다. 번들의 후보 기록을 보존한 것이며 본문 원장·포함 수에 합산하지 않는다.

- 후보: Zyphra ZONOS3-Mini 최초 오픈 음성 출시일 충돌 (미포함 사유: 플랫폼 표시는 11월 12일이나 본문 작성일은 11월 11일이고 원 회사 글의 날짜는 확인되지 않아 최초 출시의 구간 적격성이 미해결. 별도 논문 공개만 본문 포함 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/Zyphra/zonos3-mini))
- 후보: HPE 하이브리드 슈퍼컴퓨팅 스토리지·랙 냉각 제어기 (미포함 사유: 정확한 기사 발행시각 2026-11-13T16:15:00+00:00가 컷오프 이후이며 제품 제공도 미래 예정 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/storage/2026/11/13/hpe-debuts-hybrid-storage-configs-rising-ssd-costs-hit-supercomputing/5309679))
- 후보: Microsoft 365·Copilot 클라우드 장애 (미포함 사유: 장애 시작은 구간 안으로 보도됐지만 이 기사의 최초 발행은 2026-11-12T23:06:00+00:00로 컷오프 이후 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/saas/2026/11/12/microsoft-struggling-to-fix-massive-cloud-outage-thats-taken-down-email-and-intune/5309531))
- 후보: Yandex 데이터센터 공격 이후 복구 공개 (미포함 사유: 기사는 구간 안이지만 복구 공개·가용영역 출시와 공격 자체는 구간 이전이며 새로운 구간 내 기저 사건이 확인되지 않음 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/off-prem/2026/11/12/russian-cloud-yandex-says-drone-attacks-on-its-datacenters-caused-data-loss/5309234))
- 후보: AMD MI400 시리즈 업데이트 (미포함 사유: 11월 12일 공식 목록은 있으나 상세 기사 경로가 404여서 성능 주장·가용성을 감사할 증거가 부족한 <br class="report-field-break" />Evidence C 후보 / <br class="report-field-break" />출처: [www.amd.com](https://www.amd.com/en/newsroom.html))
- 후보: EU 셀룰러 기반 드론 탐지 의견수렴 (미포함 사유: 최초 공개·개시가 11월 11일이며 11월 12일 후속 보도로 신규 사건이 되지 않음 / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/consultations/commission-collects-feedback-deploying-cellular-based-dual-use-drone-detection-capacity))
- 후보: EU COP31 지속가능 AI·디지털 기후 인프라 의제 (미포함 사유: 날짜가 있는 공식 예고지만 새로운 구속력 있는 정책·재정 약속·합의가 아니고 세션은 미래 예정 / <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/cop31-strengthening-green-and-digital-transitions))
- 후보: 영국 감독기관의 얼굴인식 오인 체포 위험 경고 (미포함 사유: 기사는 2026-11-13T10:15:00+00:00로 컷오프 이후이며 원 감사자료의 구간 내 발행을 확인하지 못함. 내무부 조사와 별도 계상하지 않음 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/13/brit-police-watchdog-says-cops-use-of-facial-recog-risks-wrongful-arrests/5309379))
- 후보: 호주의 유해 AI 형사책임·감독체계 제안 (미포함 사유: 기사 발행이 2026-11-11T02:14:00+00:00로 구간 이전이며 새 구간 내 조치가 확인되지 않음. 제안을 시행 법률로 간주하지 않음 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/public-sector/2026/11/11/australia-may-make-knowingly-selling-unsafe-ai-a-crime/5308999))

- **수록 사건 수:** 28
