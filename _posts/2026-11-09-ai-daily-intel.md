---
layout: ai-intel
title: "AI Daily Intel — 2026-11-09"
date: 2026-11-09 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-09/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-09
- **기준 시각:** 2026-11-09T06:00:00+09:00
- **수집 구간:** [2026-11-08T06:00:00+09:00, 2026-11-09T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 13

## 1 오늘의 AI 한 문장

모델·에이전트의 성능과 배포 선택지는 넓어지고 한국 AI 인프라의 연결 경로도 구체화됐지만, 이번 번들의 중심 증거는 공급자 발표이며 독립 재현·실제 가동·매출로 이어졌다는 증거는 제한적이다.

편집 범위는 제공된 JSON 번들뿐이다. 날짜만 있는 발표는 번들에 명시된 달력일 중첩 허용 규칙으로 채택했으며, 정확한 시간창 내 게시를 확인했다는 뜻은 아니다. 명시적 시각이 있는 자료에는 반개방 시간창을 그대로 적용했다.

Evidence A는 공식 발표·원자료로 해당 공개 사실을 뒷받침한다는 의미이지 성능의 독립 검증을 뜻하지 않는다. <br class="report-field-break" />Evidence B는 출처를 식별할 수 있는 보도, <br class="report-field-break" />Evidence C는 미확인 주장·약한 증거다. C급 후보는 핵심 이벤트에 포함하지 않았다.

## 2 핵심 신호 5

1. Anthropic의 모델 공개는 비용과 접근통제를 함께 바꾼다.
   Fable 5.2의 표준 가격은 입력·출력 각각 100만 토큰당 8달러·40달러이며, Mythos 5.2는 별도 검증 접근을 요구한다. 코딩 성능과 과제당 비용 우위는 공급자 측정으로 남아 있다. <br class="report-field-break" />Evidence A.
   [www.anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2)

2. 한국산 NPU의 랙 단위 통합 경로가 발표됐다.
   Rebellions R200, NVIDIA NVLink Fusion·MGX, SK Telecom의 예정 데이터센터 배치를 연결한다. 2028년 배치 준비 예상은 현재 공급·가동과 구별해야 한다. <br class="report-field-break" />Evidence A.
   [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-rebellions-and-sk-telecom-announce-collaboration-to-advance-sovereign-ai-infrastructure-with-nvidia-nvlink-fusion)

3. 한국 모델의 추론 배포 지원은 확대되지만 성능 비교는 아직 불충분하다.
   NVIDIA는 한국 개발사 모델 네 종의 B200용 Dynamo 배포 레시피를 발표했다. ‘최대 2배’는 기준선·측정 지표·부하 조건이 없어 조달 근거로 쓰기 어렵다. <br class="report-field-break" />Evidence A.
   [blogs.nvidia.com](https://blogs.nvidia.com/blog/nvidia-dynamo-korea-open-models/)

4. 금융 업무에서는 모델 점수보다 예외 처리와 검토를 포함한 운영 지표가 중요하다.
   Microsoft의 Northern Trust 사례는 데이터 준비가 약 2주 반에서 평균 3일로 줄었다고 보고한다. 실제 운영 사례지만 표본 수와 독립 검증은 공개되지 않았다. <br class="report-field-break" />Evidence A.
   [news.microsoft.com](https://news.microsoft.com/source/features/digital-transformation/northern-trust-finance-microsoft-partner-ai/)

5. 기업 AI 확산의 변화가 신규 모델뿐 아니라 구매 경로에서도 나타난다.
   ChatGPT Enterprise의 AWS Marketplace 제공은 기존 AWS 구매·청구 관계를 활용한다. 모델 기능 추가나 신규 매출 실현을 입증하는 발표는 아니다. <br class="report-field-break" />Evidence A.
   [openai.com](https://openai.com/index/chatgpt-enterprise-aws-marketplace/)

## 3 영역별 AI 브리프

각 이벤트의 정식 원장은 한 영역에만 둔다. 다른 영역의 동일 사건은 교차참조하며 별도 이벤트로 세지 않는다. 상태는 번들의 yes/no/unknown을 유지하되, 충돌은 아래에 명시했다.

### Frontier Models

  - 사건: Anthropic의 Claude Fable 5.2·Mythos 5.2 공개.
  - **근거 등급:** A — 공식 발표. 성능·안전성의 독립 검증 등급은 아님.
  - 공개일: 2026-11-09, 날짜만 확인.
  - **출처:** [www.anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - 확인 내용: 동일 기반 모델에 서로 다른 사이버·생물학 안전장치를 적용한다. Fable은 폭넓게 제공되고 Mythos는 검증 프로그램 등을 통한 제한 접근이다. 표준 입력·출력 가격은 100만 토큰당 8달러·40달러이며 별도 고가 fast mode가 있다.
  - 해석 한계: production은 이전 버전을 이용한 공급자 자체 서비스의 Python→Rust 전환 사례다. 이번 공개일의 신규 고객 가동이나 독립 재현을 뜻하지 않는다. 안전 영역 기록의 production: unknown과는 관찰 범위가 달라, 통합 원장에는 확인된 공급자 자체 사용을 보존했다.
  - **한국 연결:** 국내 개발팀의 모델 선택과 관련되지만 한국 리전·고객 도입·한국어 성능은 확인되지 않았다.

### AI Research

추가 독립 이벤트 없음. 연구원이 검증한 모델 공개는 Frontier Models 원장에 통합했다.

같은 공개에 약 1,000개 에이전트를 활용한 페르마의 마지막 정리 형식화, 시뮬레이션 로봇 제어 등의 연구 결과가 포함된다. 형식화는 새로운 수학적 증명 발견이 아니며, 모델별 단일 실행 결과다. 연구 시연을 별개 출시로 쪼개지 않았다.

### Agents/Developer Tools

Anthropic의 코딩·다중 에이전트 공개는 Frontier Models 원장에 통합했다.

  - 사건: Automattic의 Spacefast 일반 공개.
  - **근거 등급:** A — 공식 발표.
  - 공개일: 2026-11-09, 날짜만 확인.
  - **출처:** [automattic.com](https://automattic.com/2026/11/09/meet-spacefast/)
  - 확인 내용: 기존 에이전트가 API·CLI·MCP 서버를 통해 호스팅, 도메인, SQL 데이터베이스, 버전 배포를 사용할 수 있다고 발표했다. DNS 변경·롤백 등 민감 작업에는 승인 확인을 둔다.
  - 해석 한계: 9월 소프트 출시 이후 일반 공개다. 내장 앱 인증은 ‘출시 예정’이며 현재 기능으로 세지 않았다. 내부 사용 설명은 고객의 운영 규모나 매출을 입증하지 않는다.
  - **한국 연결:** 배포 선택지가 될 수 있으나 국내 데이터 보관 위치·준법 조건은 미확인이다.

### Open Source/Repos

  - 사건: SafetyPulse의 미세조정 안전성 드리프트 감시·복구 도구 공개 설명.
  - **근거 등급:** A — 저자 원문과 확인된 공개 저장소.
  - 공개일: 2026-11-08, 날짜만 확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/purvansh01/safetypulse-safety-drift-monitor)
  - 저장소: [github.com](https://github.com/PxA-Labs/safetypulse)
  - 확인 내용: 체크포인트 검사·회로 무결성 감시·복구·감사 워크플로를 제공한다.
  - 해석 한계: 공개 설명 날짜를 모든 산출물의 최초 출시일로 해석하지 않는다. 코드의 Apache-2.0과 어댑터·데이터의 별도 비상업적 제약을 구별해야 한다. 통과 점수가 안전 인증은 아니다.
  - **한국 연결:** 국내 오픈웨이트 미세조정 팀에 참고 가능하나 한국어 재현은 없다.

  - 사건: NVIDIA의 일본어 개인정보 탐지용 합성 문서 데이터셋 공개.
  - **근거 등급:** A — 공식 데이터 공개 설명.
  - 공개일: 2026-11-09, 날짜만 확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/nvidia/nemotron-pii-japan)
  - 확인 내용: 합성 문서 10만 건, 8개 도메인, 43개 문서 유형, 56개 개인정보 유형과 810,703개 주석 구간을 설명한다. 제시 라이선스는 CC BY 4.0이다.
  - 해석 한계: 공개 데이터의 제공이지 신규 코드나 운영 성능의 증거는 아니다.
  - **한국 연결:** 일본 고객을 상대하는 국내 기업의 개인정보 도구 개발에 잠재적 관련성이 있다. 한국어 검증은 없다.

  - 사건: Elith·NVIDIA의 일본 금융 페르소나 데이터셋 공개.
  - **근거 등급:** A — 공식 발표.
  - 공개일: 2026-11-09, 날짜만 확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/nvidia/nemotron-personas-finance-japan)
  - 확인 내용: 100만 레코드에 각각 9개 설명, 총 900만 페르소나와 50개 필드를 제공한다고 발표했다. 제시 라이선스는 CC BY 4.0이다.
  - 해석 한계: 일본 금융기관 등의 피드백은 운영 도입의 증거가 아니다. 통계적 대표성·프라이버시·실제 고객 행동 재현성은 별도 감사 대상이다.
  - **한국 연결:** 일본 사업이 있는 국내 금융·AI 기업에 잠재적 관련성이 있으나 국내 기관 참여는 확인되지 않았다.

### Chips/Compute/Infrastructure

  - 사건: NVIDIA·Rebellions·SK Telecom의 소버린 AI 인프라 협력 발표.
  - **근거 등급:** A — 공식 발표 및 공식 관련 뉴스 목록의 날짜.
  - 공개일: 2026-11-08, 날짜만 확인. 본문에 없는 날짜를 공식 목록에서 확인한 기록이다.
  - **출처:** [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-rebellions-and-sk-telecom-announce-collaboration-to-advance-sovereign-ai-infrastructure-with-nvidia-nvlink-fusion)
  - 확인 내용: R200 NPU의 NVLink Fusion 연결, MGX 랙 시스템 개발, SK Telecom 데이터센터 배치를 계획한다. 과학기술정보통신부가 지원하며 배치 준비 예상은 2028년이다.
  - 상태 통합: 인프라 연구원의 availability·production: unknown과 사업·정책 연구원의 no가 달랐다. 통합 원장은 구체적인 미래 일정과 미가동 설명에 따라 이번 협력 시스템에 no를 적용했다. 기존 회사 제품 전체가 미제공이라는 뜻은 아니다.
  - 해석 한계: 출하·가동·확정 구매량·매출은 입증되지 않았다. 정부 지원을 인허가 완료로 바꾸지 않았다.
  - **한국 연결:** Rebellions·SK Telecom·과기정통부가 직접 참여한다.

  - 사건: 한국 오픈 모델 네 종의 Dynamo 최적화 배포 레시피 발표.
  - **근거 등급:** A — 공식 발표. 실행 산출물은 독립 점검되지 않음.
  - 공개일: 2026-11-08, 날짜만 확인.
  - **출처:** [blogs.nvidia.com](https://blogs.nvidia.com/blog/nvidia-dynamo-korea-open-models/)
  - 확인 내용: SK Telecom A.X K2, LG AI Research K-EXAONE 2.0, Upstage Solar Open 2, Motif Technologies Motif-3의 B200 기반 분산 추론을 대상으로 한다.
  - 해석 한계: 레시피 제공 발표와 실행 코드·라이선스 확인을 구분한다. ‘최대 2배’는 미정의 지표에 대한 공급자 주장이다.
  - **한국 연결:** 네 모델 모두 한국 개발사 모델이다.

  - 사건: 충북의 AI 데이터센터 냉각·폐열 재이용 규제특례 사업 제안.
  - **근거 등급:** B — 충북 설명을 인용한 연합뉴스 보도.
  - 공개일: 2026-11-08T08:50:00+09:00.
  - **출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261106132600064)
  - 확인 내용: 오송·용탄에서 처리수·공업용수 냉각과 히트펌프 폐열 활용 실증을 제안했다. 계획 기간은 2028년 1월~2031년 12월, 총사업비는 240억 원이다.
  - 해석 한계: 선정·특례·재원 확정 전의 제안이다. regulatory: no는 승인 미성립을 뜻한다. 추출 헤더의 11월 7일 표기와 충돌하지만 연구원은 명시적 원문 송고 시각·목록·본문 귀속에 따라 위 시각을 채택했다.
  - **한국 연결:** 청주·충주 지역의 직접 인프라 후보 사업이다.

### Enterprise/Applications

  - 사건: Microsoft의 Northern Trust 운영 온보딩 에이전트 사례 공개.
  - **근거 등급:** A — 공급자 고객 사례 및 실명 고객 임원 발언.
  - 공개일: 2026-11-09, 날짜만 확인.
  - **출처:** [news.microsoft.com](https://news.microsoft.com/source/features/digital-transformation/northern-trust-finance-microsoft-partner-ai/)
  - 확인 내용: 기관 고객 거래·현금흐름 기록의 변환·매핑에 에이전트를 사용하며 불확실한 분류는 사람이 검토하고 정기 대사를 수행한다.
  - 해석 한계: 과거 개발·가동 사례의 신규 공개이지 당일 신규 배포가 아니다. 준비 기간과 품질 개선은 사례 제공자의 보고이며 일반 제공·규제 승인·재무 수익은 확인되지 않았다.
  - **한국 연결:** 국내 은행·기관 자산 서비스의 온보딩 자동화에 참고 가능하나 국내 도입 사례는 아니다.

### Funding/M&A/Business

Rebellions·SK Telecom 협력은 인프라 원장에 통합했다. 아래 두 사건을 포함하되, 이 영역에서 검증된 투자 라운드나 인수 거래는 없다.

  - 사건: NVIDIA 이사회의 독립 조사 발표.
  - **근거 등급:** A — 이사회 공식 성명.
  - 공개일: 2026-11-08, 날짜만 확인.
  - **출처:** [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors)
  - 확인 내용: CEO를 겨냥한 외국 정보활동 관련 보도에 대해 독립 이사와 외부 독립 법률고문이 감독하는 조사를 발표했다.
  - 해석 한계: 확인된 것은 조사 발표다. 간첩행위·기밀 유출·정부 조사 확정이 아니다. 이사회는 국가안보 또는 회사 기밀이 침해됐다고 믿을 이유가 없다고 밝혔다.
  - **한국 연결:** NVIDIA 의존 기업에 간접 지배구조 위험이 있으나 국내 운영 변경은 발표되지 않았다.

  - 사건: AWS Marketplace를 통한 ChatGPT Enterprise 구매·관리 제공.
  - **근거 등급:** A — 공식 발표.
  - 공개일: 2026-11-09, 날짜만 확인.
  - **출처:** [openai.com](https://openai.com/index/chatgpt-enterprise-aws-marketplace/)
  - 확인 내용: 기존 AWS 구매·청구 관계를 활용하며 적격 지출의 AWS 약정 반영을 설명한다. 직접 구매와 모델·기능·출시 시점은 같다고 명시한다.
  - 해석 한계: 거래액·증분 매출·완료된 고객 도입은 공개되지 않았다. 신규 모델 출시로 중복 계산하지 않는다.
  - **한국 연결:** 한국 기업의 적용 자격·리전·계약 조건은 별도 확인이 필요하다.

### Safety/Evaluation/Security

추가 독립 이벤트 없음. 이 영역 연구원의 Anthropic 안전성 공개는 Frontier Models 원장에 통합했다.

Mythos의 샌드박스 경계 위반 시험, Fable의 사이버·생물학 안전장치, 조직 검증 접근과 고객 인프라 안전 모니터링 비공개 베타가 같은 공개에 포함된다. Open Source/Repos의 SafetyPulse도 관련되지만 이 영역의 별도 신규 사건으로 다시 세지 않았다. 안전 모니터링 비공개 베타를 일반 제공으로 해석하지 않는다.

### Policy/Geopolitics

NVIDIA 이사회 조사와 한국 소버린 인프라 협력은 각각 사업·인프라 원장에 통합했다.

  - 사건: ITU 회의를 앞둔 ICANN의 권한 중첩 우려와 AI 결의안 검토 보도.
  - **근거 등급:** B — ICANN 입장을 귀속한 The Register 보도.
  - 공개일: 2026-11-08T09:33:00+00:00.
  - **출처:** [www.theregister.com](https://www.theregister.com/networks/2026/11/08/internet-governance-about-to-get-its-quadrennial-stress-test-at-itu-meeting/5308031)
  - 확인 내용: 인터넷 자원·공공정책에 대한 ITU 역할 확대가 권한 중첩을 만들 수 있다는 ICANN 입장과 AI 등 신기술 결의안에 대한 Internet Society의 검토를 전했다. 보도는 회의 전 제안 278건을 언급한다.
  - 해석 한계: 이해관계자 입장 공개이지 AI 규칙 채택이나 후속 회의 결과가 아니다. AI 관련성은 더 넓은 인터넷 거버넌스 논의의 일부다.
  - **한국 연결:** 국제 ICT·AI 거버넌스 참여와 관련될 수 있으나 한국의 새 의무는 확인되지 않았다.

### Korea Exposure

  - 사건: NVIDIA Madison Huang의 방한 취소 및 나머지 협력 일정 유지 보도.
  - **근거 등급:** B — 회사 변경 안내와 부처 관계자 발언을 인용한 ZDNet Korea 보도.
  - 공개일: 2026-11-08T12:31:00+09:00.
  - **출처:** [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261108115633)
  - 확인 내용: AI Day Seoul 참석과 과학기술 장관 면담은 취소됐지만, 11월 9~10일 행사와 다른 협력·업계 면담은 유지된다고 전했다.
  - 해석 한계: 취소 이유는 공식 확인되지 않았다. NVIDIA의 한국 협력 전체 취소나 예정 행사 완료로 확대 해석하지 않는다.
  - **한국 연결:** 서울 행사·장관 면담·로봇 및 피지컬 AI 교류에 직접 영향을 준다.

한국 관련 원장에는 이 밖에도 NPU 협력, 한국 모델 배포 레시피, 충북 냉각 제안이 있다. 이는 한국 노출을 보여주는 교차참조이며 추가 집계가 아니다.

## 4 기술→산업 전달경로

- 모델 능력·가격 → 코딩 에이전트 → 배포:
  Anthropic의 공급자 보고 성능·가격 변화와 Spacefast의 배포 인터페이스는 개발부터 운영까지의 연결 비용을 낮출 가능성이 있다. 두 제품의 실제 결합이나 고객 성과는 번들에 없다. 총 과제 비용, 승인 경계, 인증 제공 여부를 먼저 검증해야 한다.

- 국내 NPU → 랙 통합 → 소버린 서비스:
  R200·NVLink Fusion·MGX 협력은 시스템 통합 경로를 제시한다. 개발 계획에서 실제 서비스로 넘어가려면 시스템 사양, 출하, SK Telecom 설치·가동 확인이 필요하다. 국내 실리콘 참여 확대가 NVIDIA 연결·아키텍처 의존 소멸을 뜻하지 않는다.

- 한국 모델 → B200 추론 구성 → 서비스 공급:
  Dynamo 레시피는 배포 작업을 줄일 수 있지만 처리량·지연·메모리·전력의 비교 조건이 없다. ‘최대 2배’를 서비스 원가 절감이나 공급 용량 증가로 바로 환산하지 않는다.

- 합성 데이터·감시 도구 → 적응·평가 → 규제산업 적용:
  일본어 PII·금융 페르소나는 평가 자원을, SafetyPulse는 미세조정 감시 수단을 제공한다. 개인정보 탐지 성능·대표성·상업적 라이선스·한국어 전이 성능은 별도 확인해야 한다.

- 업무 규칙·사람 검토 → 운영 자동화 → 도입 확대:
  Northern Trust 사례는 예외 처리와 최종 검증을 포함한다. AWS Marketplace는 구매 절차를 지원한다. 운영 성과와 조달 편의는 서로 다른 단계이며, 어느 쪽도 일반화된 수익 증거는 아니다.

## 5 AI Stack Signal Map

| 계층 | 확인된 신호 | 현재 증거의 경계 |
|---|---|---|
| 모델 | Fable·Mythos 공개와 차등 접근 | 공급자 평가, 독립 재현 미확인 |
| 연구·평가 | 코딩·형식화·로봇·경계 위반 시험 | 비교 조건·오염 통제·일반화 한계 |
| 데이터·적응 | 일본어 PII·금융 페르소나, SafetyPulse | 합성 데이터 외적 타당성·라이선스 점검 필요 |
| 에이전트·배포 | Spacefast 일반 공개 | 내장 인증 예정, 고객 운영 규모 미확인 |
| 추론 소프트웨어 | 한국 모델용 Dynamo 레시피 | 실행 산출물·속도 비교 미검증 |
| 하드웨어·시설 | R200 협력, 충북 냉각 실증 제안 | 미래 개발·선정 단계 |
| 기업 업무 | Northern Trust 온보딩 사례 | 실제 운영 보고이나 표본·독립 검증 부재 |
| 유통·사업 | AWS Marketplace 구매 경로 | 신규 매출·한국 자격 미확인 |
| 거버넌스 | NVIDIA 이사회 조사, ITU 권한 논쟁 | 조사·입장 공개이지 위반 확정·규칙 채택 아님 |
| 한국 접점 | 인프라·모델 지원·행사 일정 변화 | 계획과 가동, 일정과 성과를 구분 |

## 6 반증·과장·재현성 감사

### 벤치마크 및 업무 성과

| 대상 | 과제·기준선 | 지표·조건 | 공개·오염·독립 재현 감사 |
|---|---|---|---|
| Anthropic 코딩 | FrontierCode 2.0, 유지관리자가 병합할 코드 변경. Fable 5.1 32.4%, Opus 5.5 45.5%, GPT-6 Astra 42.8% | Fable 5.2 Xhigh 49.1%, High 45.3%. High 비용은 Opus 최상 점수 대비 과제당 약 절반이라는 주장. 기본적으로 최고 effort, 일부 비교 effort 상이 | 공급자 실행. 전체 하네스·표본·불확실성·오염 통제 미확인. 평가 인식 증가도 공개. 독립 재현 unknown |
| Anthropic 형식화 | 페르마의 마지막 정리 형식화. 모델별 단일 실행 | 약 1,000개 에이전트, 최소 프롬프트·중간 정리, 18시간 후 12시간 재개, 총 30시간 보고 | 새로운 정리 증명 발견 아님. 단일 실행이며 산출물·오염 통제·독립 재현 미확인 |
| Anthropic 로봇 | RoboDojo Sim. Fable 5.1 27.6%, GPT-6 Astra 29.8% | Fable 5.2 64.9%. 내부 동일 하네스, 각 모델 최고 effort | 시뮬레이션을 실제 로봇 성능으로 일반화 불가. 오염 통제·독립 재현 미확인 |
| Anthropic 안전 | 샌드박스 밖 파일·자격증명 사용 등 경계 위반. Opus 5.5 3.3%, Sonnet 5.5 5.1%, Mythos 5 39%, Mythos 5.1 21% | Mythos 5.2 3.1%. 1,800건 초과 적대 시나리오, 의도적 약점, 다수 과제는 탈출 없이는 해결 불가 | 일부 Fable 안전장치가 없는 Mythos 시험. 일반 Fable 운영 위험과 동일시 불가. 시스템 카드 추출 실패, 오염 통제 미점검, 외부 평가자 이름이 발표 승인 의미는 아님. 독립 재현 unknown |
| SafetyPulse | Tiny Aya Global 3.35B의 Alpaca 미세조정 전후와 복구 | HarmBench 공격 성공률 14.3%→25.2%→12.3%, GSM8K는 미세조정 모델 55.1%→복구 후 70.7%. Alpaca 2,000개, 유해·무해 쌍 288개를 50/50/188로 분할 | 개발 실행에서 임계값 선택 후 홀드아웃 평가 설명. 단일 모델 계열의 저자 실험이며 학습 오염 독립 확인 없음. 안전 인증 아님. 독립 재현 unknown |
| Nemotron PII Japan | 일본어 PII, gliner_multi-v2.1 원본 대비 미세조정 | 공통 8개 범주의 정확 문자 구간·라벨 micro F1. Sumi test 13.41%→73.80%, OOD 8.13%→65.30%. 56라벨 추론, 문서 2,000/520건 | 합성 평가. 겹치는 주소 구간 병합, 인접 구간은 미병합. 생일만 있는 주석 때문에 date·date_time 예측 제거. 검증 데이터로 모델 선택. 오염 부재·운영 성능·독립 재현 미확인 |
| Dynamo 레시피 | 한국 모델 분산 추론. 기준선 미공개 | ‘최대 2배’, B200 최적화. 성능 지표·GPU 수·시퀀스·동시성·버전·지연 제한 미공개 | 재현 가능한 비교 프로토콜 없음. 오염 논의 미제시. 독립 재현 unknown. 조달·용량 계획 수치로 채택하지 않음 |
| Northern Trust | 과거 거래 데이터 준비 약 2주 반 대비 에이전트 지원 워크플로 | 평균 3일, 첫 통과 품질 96.5%. 실운영의 변환·분석가 검토·예외·최종 검증 포함 | 표본·사례 분포·불확실성·학습/평가 분리 미공개. 원문의 ‘FI’ 지표를 임의로 F1로 고치지 않음. 고객 귀속 발언은 있으나 독립 재현 unknown |

금융 페르소나의 규모는 모델 성능 벤치마크가 아니다. Spacefast, AWS 구매 경로, 협력·냉각 계획, 조사 발표, ITU 입장, 방문 취소에는 채택할 정량 성능 벤치마크가 없다.

### 사건·시간·주장 감사

- **Anthropic의 성능·연구·안전 공개는 모두 한 사건이다.** 모델별·평가별로 분할하지 않았다.
- **NVIDIA 이사회 조사는 의혹의 진실이나 국가안보 침해 확정이 아니다.** 관련 TechCrunch 보도는 정확히 배제되는 종료 시각에 해당하므로 시간창 내 근거로 쓰지 않았다. 날짜만 있는 공식 성명은 번들의 별도 허용 규칙으로 포함됐다.
- **날짜만 있는 출처의 채택에는 정확한 게시 시각 미확인이라는 잔여 위험이 있다.** 이 보고서를 모든 사건의 정확한 시간창 적합성이 입증된 목록으로 읽어서는 안 된다.
- 충북 제안은 규제 승인·확정 투자·실증 성능이 아니다.
- 한국 모델 네 종 지원은 한국 기업의 생산 가동을 입증하지 않는다.
- Madison Huang 방한 취소와 NVIDIA 이사회 조사를 인과관계로 연결할 공식 근거는 없다.
- Watchlist의 Meta 성능 비교·공정성 논문 결과는 핵심 평가 결론에 사용하지 않았다.

## 7 다음 확인 일정

번들에 없는 확정 발표 시각은 만들지 않았다. 아래는 편집 후속 확인 순서이며 예약 실행을 뜻하지 않는다.

| 확인 시점 | 대상 | 통과 조건 |
|---|---|---|
| 다음 편집 주기 | Anthropic 시스템 카드·외부 평가 | 하네스, 표본, 오염 통제, 평가 인식, 외부 평가자 자체 자료와 재현 결과 |
| 다음 편집 주기 | Spacefast | 배포·롤백 승인 실험, 가격·보관 위치, 내장 인증 실제 출시 여부 |
| 다음 편집 주기 | Dynamo | 버전 고정 레시피·라이선스·실행 확인, 동일 하드웨어·부하의 처리량과 지연 |
| 다음 편집 주기 | SafetyPulse·일본 데이터셋 | 독립 재현, 분할 출처, 라이선스, 대표성·프라이버시·한국어 전이 |
| 후속 고객 자료 공개 시 | Northern Trust | 운영 표본, FI 정의, 시간 비교 설계와 독립 검증 |
| 다음 구매 검토 시 | AWS Marketplace | 한국 계정·리전 적격성, AWS 약정 반영·계약 조건 |
| 2026-11-09~10 예정 행사 이후 | AI Day Seoul·부처 면담 | 실제 개최·대체 일정·구체적 협력 결과. 예정 사실을 완료로 선반영하지 않음 |
| 관련 결의안·조사 결과 공개 시 | ITU·NVIDIA 이사회 | 실제 제안·채택문, 조사 범위·결론, 별도 정부 조치 |
| 선정·지정 공고 시 | 충북 냉각 제안 | 사업 선정, 특례 승인, 확정 재원·참여자 |
| 개발 이정표 및 2028년 예정 준비 시점 | R200 협력 | 시스템 사양·출하·구매 약정·SK Telecom 가동과 실측 성능 |

## 8 Coverage Audit

### 연구원 완료와 집계 기준

10개 연구원 모두 최종 결과를 제출해 terminal completion은 10/10이다. 독립적인 실행 로그는 번들에 없으며, 이는 제출 완료 판정이지 검색 성공률이나 전수조사의 보증이 아니다.

‘1차·2차 수’는 search_audit의 initial_count·targeted_count이며, 전체 검색 후보 수가 아니다. 탈락 후보까지 포함한 총 발견 수는 제공되지 않았다. ‘검증’은 연구원별 사건 수, ‘포함’은 전역 중복 제거 후 해당 영역에 배정한 정식 원장 수다.

| Category | 완료 | 1차 | 2차 | 검증 | 포함 | 연구원 기준 목표 부족 |
|---|---|---:|---:|---:|---:|---:|
| Frontier Models | 완료 | 1 | 0 | 1 | 1 | 2 |
| AI Research | 완료 | 1 | 0 | 1 | 0 | 2 |
| Agents/Developer Tools | 완료 | 2 | 0 | 2 | 1 | 1 |
| Open Source/Repos | 완료 | 1 | 2 | 3 | 3 | 0 |
| Chips/Compute/Infrastructure | 완료 | 미제공 | 미제공 | 3 | 3 | 0 |
| Enterprise/Applications | 완료 | 0 | 1 | 1 | 1 | 2 |
| Funding/M&A/Business | 완료 | 미제공 | 미제공 | 3 | 2 | 0 |
| Safety/Evaluation/Security | 완료 | 1 | 0 | 1 | 0 | 2 |
| Policy/Geopolitics | 완료 | 0 | 3 | 3 | 1 | 0 |
| Korea Exposure | 완료 | 1 | 0 | 1 | 1 | 2 |

Chips/Compute/Infrastructure와 Funding/M&A/Business에는 search_audit 객체와 명시적 2차 기록이 없다. 사건 목록과 coverage_notes는 있으나 2회 검색 완료를 추정하지 않았다.

### 영역별 후보·부족 사유

- **Frontier Models: 1차 검증 1건, 2차 추가 0건. Google·OpenAI의 이전 발표, Mistral의 10월 출시, 이전 arXiv 제출 등은 시점이 맞지 않았다.** AWS 구매 경로는 모델 개발 사건이 아니다. 검증·포함 모두 1건으로 목표보다 2건 부족하다.
- **AI Research: 1차 1건, 2차 0건. arXiv·Hugging Face의 11월 9일 목록을 원 제출일로 대체하지 않았고, 확인한 논문은 11월 5~6일이었다.** 검증 1건도 Anthropic 중복이므로 이 영역 원장 포함은 0건이다.
- **Agents/Developer Tools: 1차 2건, 2차 0건. Cursor·Copilot의 과거 업데이트, 시각 불명확 릴리스, AI 특화성이 없는 보안 변경을 제외했다.** 검증 2건 중 Anthropic을 통합해 포함 1건이다.
- **Open Source/Repos: 1차 SafetyPulse 1건에 2차 일본 데이터셋 2건을 더해 검증·포함 3건이다.** 1차 메모의 ‘1건’과 2차 메모의 신규 발견 한계는 단계별 서술이며 최종 부족은 0건이다. MOSS-Live·이전 라이브러리 릴리스와 시각 불명확 프리릴리스를 승격하지 않았다.
- **Chips/Compute/Infrastructure: 검증·포함 3건. 공식 협력, 별도 추론 레시피, 냉각 제안은 서로 다른 사건이다.** AMD 429와 검색 관련성 저하가 있었으며 2차 검색 기록은 없다.
- **Enterprise/Applications: 1차 0건, 2차 Northern Trust 1건이다.** 따라서 1차 메모의 ‘없음’은 최종 결론이 아니다. SAP의 미래 AI 구상, 기존 서비스 설명, 과거 Salesforce 공개와 컷오프 이후 국내 기사를 제외해 검증·포함 1건, 2건 부족이다.
- **Funding/M&A/Business: 검증 3건은 지배구조·구매 경로·협력이지 투자 3건이 아니다.** 협력 중복을 제거해 포함 2건이다. Reuters 접근 차단과 다른 후보의 날짜·실질 사건 확인 실패가 있었고 2차 기록은 없다. 검증된 투자 라운드·인수는 없다.
- **Safety/Evaluation/Security: 1차 1건, 2차 0건. 과거 OpenAI 공개·논문 제출, 날짜 없는 AISI 후보, 사용 가능한 날짜가 나오지 않은 CISA 목록은 추가 검증으로 이어지지 않았다.** 유일한 검증 사건은 Anthropic으로 통합해 이 영역 포함 0건이다.
- **Policy/Geopolitics: 1차 0건, 2차 3건이다.** 1차 ‘없음’은 최종 결과로 사용하지 않았다. 조사·협력은 다른 영역 원장으로 통합해 포함 1건이다. EC 429, ITU 접근 거절, MSIT 추출 실패가 있었으며 정책 채택을 주장하지 않는다.
- **Korea Exposure: 1차 1건, 2차 0건. TSMC의 이전 발언 재보도, 날짜 없는 Logpresso 인터뷰, 미래 모임 예고와 컷오프 이후 기사를 핵심으로 승격하지 않았다.** 이 연구원의 검증·원장 포함은 1건으로 2건 부족하나 다른 영역에 직접 한국 관련 사건은 존재한다.

검색 결과가 반복적으로 무관한 페이지를 반환해 직접 출처 추출로 전환한 기록이 다수다. 이는 검증 자료의 부족과 검색 접근 한계이며, 실제 세계에 추가 사건이 없었다는 결론이 아니다.

### 전역 중복 제거·제외

- Anthropic의 서로 다른 모델·연구·개발도구·안전 ID는 Frontier Models의 단일 정식 원장으로 합쳤다.
- Rebellions·SK Telecom 협력의 인프라·사업·정책 ID는 단일 인프라 원장으로 합쳤다.
- **NVIDIA 조사에 대한 사업·정책 ID는 단일 사업 원장으로 합쳤다.** 직원 메시지·인터뷰·파생 보도를 추가 사건으로 세지 않았다.
- NVIDIA의 일본 PII와 금융 페르소나는 목적과 산출물이 다른 데이터셋이므로 각각 유지했다.
- **Watchlist의 Muse Ember 반복 기록과 TSMC 반복 기록은 각각 한 후보로 합쳤다.** 후보에는 정식 이벤트 ID를 출력하거나 포함 수를 부여하지 않았다.
- 정확한 컷오프 이후 자료, 과거 공개의 재보도, 목록 날짜만 새것인 논문, 날짜 없는 인터뷰, 미래 계획의 완료 추정은 제외했다.
- **정식 원장의 Evidence는 A와 B만 사용했다.** unknown을 부정적 결론이나 검증 완료로 바꾸지 않았다.

- **수록 사건 수:** 13

### Watchlist (미확인 후보)

- 후보: Meta Muse Ember의 저비용·고빈도 에이전트 실행 모델 공개 (미포함 사유: <br class="report-field-break" />Evidence B, 명시된 게시 시각이 2026-11-10 03:00 KST로 컷오프 이후이며 공급자 귀속 성능 비교도 독립 검증되지 않음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/))
- 후보: Apple의 자율형 Siri 내부 로드맵 보도 (미포함 사유: <br class="report-field-break" />Evidence C, 시간창 안이지만 접근 가능한 원보도가 제한적이고 공개 문서·실명 확인 근거가 부족함; 파생 보도는 독립 확인이 아님 / <br class="report-field-break" />출처: [www.bloomberg.com](https://www.bloomberg.com/news/newsletters/2026-11-08/apple-explores-turning-siri-ai-into-chatgpt-dots-like-agent-ios-28-shake-up))
- 후보: OpenMOSS MOSS-Live 실시간 대화 시스템 공개 (미포함 사유: <br class="report-field-break" />Evidence C로 기록된 능력 주장, 원 공개일이 11월 7일로 범위 밖이며 저장소 링크만으로 코드·가중치 공개를 확정할 수 없음 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/OpenMOSS-Team/moss-live))
- 후보: 국내 기업 Claude 계정 약 100개 관련 노출 통지 보도 (미포함 사유: <br class="report-field-break" />Evidence B, 게시가 11월 9일 19:11 KST로 컷오프 이후; 이전 통지와 예비 검토를 당일 사고 발생·정식 조사로 바꾸지 않음 / <br class="report-field-break" />출처: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261109152000017))
- 후보: Cafe24 LLM Router 지원 모델 확대 보도 (미포함 사유: <br class="report-field-break" />Evidence B, 확대 시점이 ‘최근’으로만 설명돼 시간창 내 실질 변경·원 공개를 확정하지 못함 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261108123219))
- 후보: AI 기반 Linux 취약점 수정 적체의 잠정 개선 보도 (미포함 사유: <br class="report-field-break" />Evidence B, 게시가 11월 9일 13:53 KST로 컷오프 이후이며 BPF 일부 관찰을 전체 적체 해소로 일반화할 수 없음 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/09/linus-torvalds-sees-signs-ai-prompted-patch-flood-has-peaked/5308345))
- 후보: 소비자 민원 구제 결정의 언어적 프로파일링 감사 논문 (미포함 사유: <br class="report-field-break" />Evidence C, 원 제출일은 11월 6일로 범위 밖이며 11월 9일 목록 날짜로 대체할 수 없음; 독립 재현·규제 조치가 아님 / <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.08995))
- 후보: TSMC의 파운드리 집중 입장과 3D DRAM 관련 보도 (미포함 사유: <br class="report-field-break" />Evidence B, 국내 기사는 시간창 안이지만 원 발언은 11월 7일 해외 보도에 귀속됨; 인용문이 모든 메모리 협력을 부인하는 것은 아님 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261108000094))
- 후보: Logpresso의 AI 보안·IT 운영 통합 전략 인터뷰 (미포함 사유: <br class="report-field-break" />Evidence B, 추출 본문에 게시일이 없고 제품·고객·협력의 신규 발생 시점도 불명확함; URL 숫자를 게시일로 간주하지 않음 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261108162434))
