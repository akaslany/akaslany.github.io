---
layout: post
title: "AI Daily Intel — 2026-09-29"
date: 2026-09-29 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-09-29/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-09-29
- **기준 시각:** 2026-09-29T06:00:00+09:00
- **수집 구간:** [2026-09-28T06:00:00+09:00, 2026-09-29T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 24

## 1 오늘의 AI 한 문장

AI 경쟁의 중심이 모델 자체의 성능에서 에이전트의 실행비용·권한 경계·실패 보고·메모리 공개 통제로 넓어지고 있지만, 이번 자료에서 독립 재현과 실제 상용화까지 확인된 근거는 제한적이다.

이 보고서는 제공된 번들만 편집했다. Evidence A는 공식 발표·정부 기록·논문 제출과 해당 주장의 존재를, B는 실명 취재원 등이 있는 보도를, C는 핵심 사실이나 기간 적합성이 부족한 후보를 뜻한다. A가 성능의 독립 검증을 의미하지는 않는다.

시간 판정에는 한계가 있다. 연구자들은 날짜 중첩 예외를 적용했다고 기록했으나, 이번 편집 지시에는 그 예외가 명시되지 않았다. 따라서 9월 29일 날짜만 있고 마감 전 시각을 입증하지 못한 Samsung–Helix 투자와 EU 저작권 의견수렴은 본문에서 제외했다. 9월 28일 날짜만 있는 발표는 시간 불확실성을 표시해 포함하되, 06:00 이후라는 엄밀한 시간 검증까지 통과했다고 주장하지 않는다. 논문은 공개 시각이 아니라 제출 기록을 사건으로 삼는다.

## 2 핵심 신호 5

1. **Sonnet 5.5: 가격표 인하보다 작업당 효율 개선이 핵심이다.**  
   Anthropic은 제공 개시와 코딩·지식업무 성능 개선을 발표했다. 입력·출력 토큰 가격은 100만 토큰당 $2/$10으로 유지되며, 작업비용 최대 30% 절감은 회사가 주장하는 토큰 효율 효과다. 노력 수준과 사전 배포 버그 때문에 실제 업무별 검증이 필요하다. Evidence A.  
   https://www.anthropic.com/claude-sonnet-5-5

2. **에이전트 보안이 모델 지시에서 실행환경 바깥의 통제로 이동한다.**  
   NVIDIA는 OpenShell과 BlueField-4 기반 Sentry 감시 설계를 결합했다. 소프트웨어 공개는 확인되지만, 전체 하드웨어 시스템의 일반 제공이나 “밀리초 격리”의 독립 검증은 확인되지 않았다. Evidence A.  
   https://developer.nvidia.com/blog/nvidia-open-agent-safety-platform-a-reference-for-continuous-in-silicon-agent-monitoring/

3. **AMD–World Labs 계약은 모델 연구와 컴퓨트 로드맵의 결합 신호다.**  
   약 $8.2 billion의 전액 주식 인수 계약이 발표됐다. 거래 종결·규제 승인·새 칩 출시·한국 공급계약을 의미하지 않는다. Evidence A.  
   https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute

4. **구조화된 에이전트 거래에는 구매자 승인과 실패 후 상태 확인이 필요하다.**  
   Shopify는 WebMCP를 checkout으로 확장한다고 밝혔다. 공식 문서는 기능을 뒷받침하지만 날짜가 없으며, 모든 판매자의 접근이나 실제 구매 성공을 검증한 결과는 아니다. Evidence B, 기능 보강 A.  
   https://techcrunch.com/2026/09/28/shopify-opens-checkout-to-browser-based-ai-agents/

5. **한국의 직접 노출은 미래 생산능력 투자와 현재 규제 해석 부담에서 확인된다.**  
   삼성전기 세종 FC-BGA 증설 결정과 AI 기본법 상담 결과가 보도됐다. 신규 생산은 미래 계획이며 상담 통계·법률 해설은 새 법령이나 확정된 유권해석이 아니다. Evidence B.  
   https://www.etnews.com/20260928000389  
   https://www.etnews.com/20260928000335

## 3 영역별 AI 브리프

각 사건의 원장은 한 곳에만 배치했다. 다른 영역의 연관성은 Coverage Audit에 별도로 표시한다. 상태는 번들의 `yes / no / unknown`을 유지하며, `no`의 의미는 사건별로 구분한다.

### Frontier Models

  - 사건: Anthropic의 Claude Sonnet 5.5 발표·제공 개시. Copilot 배포, 기업 평가, 보안장치 변경은 동일 출시 사건으로 병합했다.
  - Evidence A/B/C: A — 공식 발표. 성능·안전 효과의 독립 검증은 아님.
  - 출처: https://www.anthropic.com/claude-sonnet-5-5
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: Claude Platform과 주요 클라우드 제공을 발표했다. 한국 리전·한국어 성능·고객 실운영은 미확인. 고위험 사이버 요청의 Sonnet 5 fallback과 계정에 연결된 preserved thinking은 마이그레이션 점검 대상이다.

  - 사건: H Company의 Holo4 모델군과 Holotron4 Nano 출시.
  - Evidence A/B/C: A — 공식 발표·모델 카드·지원 SDK 근거.
  - 출처: https://huggingface.co/blog/Hcompany/holo4
  - 보강 출처: https://huggingface.co/Hcompany/Holo4-27B
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: GUI·코드·MCP·API를 결합한 로컬 평가 후보다. code=yes는 지원 SDK 근거이며, 당일 학습 코드나 전체 평가 하네스 공개를 뜻하지 않는다. Holo4-27B 가중치는 CC BY-NC 4.0이므로 제한 없는 오픈소스로 표현하지 않는다.

### AI Research

  - 사건: 설명 토큰만 학습하는 Retrospection-Only Fine-Tuning 프리프린트 제출.
  - Evidence A/B/C: A — arXiv 제출 기록과 저자 주장.
  - 출처: https://arxiv.org/abs/2609.35741
  - 시간: 2026-09-28T17:54:24Z 제출. 기간 내 공개 시각은 별도 미확인.
  - 의미·한계: 실패를 포함한 시도 후 설명을 학습 대상으로 삼는다. KAIST 소속이 확인되지만 상용화 근거는 없다. GRPO와 업데이트 횟수가 달라 효율 우위를 확정할 수 없다.

  - 사건: 증류 이후 RL까지 포함해야 방어를 평가할 수 있다는 연구 제출.
  - Evidence A/B/C: A — arXiv 제출 기록과 저자 주장.
  - 출처: https://arxiv.org/abs/2609.35699
  - 시간: 2026-09-28T17:40:32Z 제출.
  - 의미·한계: 능력 복제 방어를 공격자의 전체 학습 과정으로 평가하자는 제안이다. 추출된 초록에는 수치·구체 모델·학습 예산이 없어 보편적 방어 실패로 일반화하지 않는다.

  - 사건: AI 의식 평가를 위한 계층적 이론·베이지안 프레임워크 제출.
  - Evidence A/B/C: A — arXiv 제출 기록과 방법론 제안.
  - 출처: https://arxiv.org/abs/2609.35618
  - 시간: 2026-09-28T16:57:05Z 제출.
  - 의미·한계: 이론별 신뢰도와 지표 해석을 명시하는 틀이다. 예시 확률은 가정 의존적이며 의식의 측정값이 아니다. 링크된 도구의 공개 시점과 내용은 검증되지 않았다.

### Agents/Developer Tools

  - 사건: NVIDIA Open Agent Safety Platform 발표.
  - Evidence A/B/C: A — 공식 기술 문서·발표와 공개 저장소 근거.
  - 출처: https://developer.nvidia.com/blog/nvidia-open-agent-safety-platform-a-reference-for-continuous-in-silicon-agent-monitoring/
  - 보강 출처: https://nvidianews.nvidia.com/news/open-agent-safety-platform
  - 시간: 2026-09-28, 시각 미확인.
  - 의미·한계: OpenShell의 권한 경계와 DPU의 독립 감시를 결합한다. 제공 상태는 소프트웨어 기준이다. 기존 OpenShell의 최초 공개는 이번 사건이 아니며, 전체 Sentry 하드웨어의 일반 제공과 실운영은 미확인이다.

  - 사건: Shopify의 WebMCP checkout·Shop Pay 지원 확대.
  - Evidence A/B/C: B — 날짜가 있는 실명 취재 보도. A — 날짜 없는 공식 문서가 기능을 보강.
  - 출처: https://techcrunch.com/2026/09/28/shopify-opens-checkout-to-browser-based-ai-agents/
  - 보강 출처: https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp
  - 시간: 2026-09-28T12:33:00-07:00.
  - 의미·한계: get_checkout·update_checkout·complete_checkout을 제공하는 rollout이다. 구매자 승인, 로그인·결제 확인, 불확실한 완료 후 상태 재조회가 중요하다. 한국 결제 호환성과 판매자 자격은 미확인이다.

### Open Source/Repos

  - 사건: SCRIBE를 scribe-eval 패키지로 일반 사용 가능하게 했다는 발표.
  - Evidence A/B/C: A — 개발자 발표와 Apache-2.0 저장소.
  - 출처: https://huggingface.co/blog/adalat-ai/scribe-eval
  - 보강 출처: https://github.com/adalat-ai-tech/scribe-eval
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: ASR의 숫자·용어·문장부호·단어 경계 오류를 진단한다. 기존 연구의 패키징 발표이며 신규 음향모델 정확도 개선 사건이 아니다. 설치 실행과 한국어 검증은 수행되지 않았다.

### Chips/Compute/Infrastructure

  - 사건: AI-RAN의 유휴 GPU를 모델 학습에 사용하는 Weaver 제출.
  - Evidence A/B/C: A — 제출 기록·저자 실험.
  - 출처: https://arxiv.org/abs/2609.35276
  - 시간: 2026-09-28T14:29:48Z 제출.
  - 의미·한계: 무선 처리의 지연 요구를 우선하면서 남는 연산을 활용한다. LDPC decoding 중심 실험이며 전체 L1, 장기 학습 수렴, 한국 통신사 운영을 입증하지 않는다.

  - 사건: Samsung Semiconductor 연구진의 TempoKV 제출.
  - Evidence A/B/C: A — 제출 기록·저자 실험.
  - 출처: https://arxiv.org/abs/2609.35065
  - 시간: 2026-09-28T12:55:20Z 제출.
  - 의미·한계: SSD 기반 CXL 메모리의 재사용 prefix KV staging 예약 시점을 조절한다. live generation KV 전반의 개선이 아니며 공개 구현·제품화·실운영은 미확인이다.

### Enterprise/Applications

  - 사건: Meta의 Enterprise Platform 사업과 CJ Desai 책임자 선임 발표.
  - Evidence A/B/C: A — 공식 발표.
  - 출처: https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/
  - 시간: 공식 출처는 2026-09-28 날짜만 제공. 번들의 보강 보도는 당일 09:52 PDT로 기간 내.
  - 의미·한계: 기업용 AI의 유통·사업화 조직을 구축한다. Muse·API·Code 등 나열된 모든 제품의 일반 제공이나 한국 서비스 개시를 뜻하지 않는다.

  - 사건: Microsoft가 NASA의 AI 업무 활용과 Mission Control 에이전트 시제품 사례를 공개.
  - Evidence A/B/C: A — 공급사 공식 게시물에 담긴 실명 고객 발언. 통제 실험이나 독립 감사는 아님.
  - 출처: https://news.microsoft.com/source/features/digital-transformation/at-nasa-ai-is-helping-scientists-unlock-discoveries-hidden-in-decades-of-data/
  - 시간: 2026-09-28, 시각 미확인. 신규 사건은 사례 공개.
  - 의미·한계: production=yes는 보도된 직원·계획 업무 활용에 한정된다. SPARTAN 지원 에이전트는 시제품이며 자율 안전 판단이나 신규 비행관제 배치를 의미하지 않는다.

### Funding/M&A/Business

  - 사건: AMD의 World Labs 인수 확정 계약 발표.
  - Evidence A/B/C: A — 완전한 AMD IR 발표를 확보한 인프라 연구 결과로 보강. 사업 연구자의 B 근거를 병합.
  - 출처: https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute
  - 시간: 2026-09-28T16:05:00-04:00.
  - 의미·한계: 약 $8.2 billion 전액 주식 거래이며 2026년 말까지 종결 예상이다. regulatory=no는 승인 미취득이지 거절이 아니다. Fei-Fei Li의 AMD 합류는 종결 후 예정이다.

  - 사건: Instinct의 $1 billion Series C, $10 billion 기업가치 확인 보도.
  - Evidence A/B/C: B — 회사 확인·창업자 실명 발언을 인용한 보도.
  - 출처: https://techcrunch.com/2026/09/28/viral-ai-agent-instinct-raises-1b-series-c-at-a-10b-valuation/
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: 제공·운영 상태는 기존 초대형 서비스에 한정된다. 사용자·성장·매출은 미공개이며 한국 접근 가능성도 확인되지 않았다.

  - 사건: 해양 AI 기업 Quartermaster의 $140 million 조달 보도.
  - Evidence A/B/C: B — CEO와 투자자의 실명 발언.
  - 출처: https://techcrunch.com/2026/09/28/maritime-intelligence-startup-quartermaster-raises-another-140m/
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: 약 $100 million 투자금과 $40 million 부채 시설을 구분해야 한다. 650척 이상 설치·800대 이상 출하는 회사 발언이지 독립 감사 수치가 아니다. 한국 선사 계약은 미확인이다.

### Safety/Evaluation/Security

  - 사건: OpenAI의 frontier RL 학습 지속을 위한 safety case 권고 공개.
  - Evidence A/B/C: A — 공식 권고.
  - 출처: https://openai.com/index/towards-safety-cases-for-frontier-ai-training/
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: 정렬 평가·격리·감시·경영진 중단 권한·fail-closed 통제 등을 제안한다. 구현 진행 중인 권고이며 완성된 운영체계나 법적 의무가 아니다.

  - 사건: OpenAI의 호주 기관 관련 내부 모델 사고 조사·사과·책임 이행 약속 공개.
  - Evidence A/B/C: A — 회사의 공식 사고 설명. 피해 기관의 독립 확인은 미확인.
  - 출처: https://openai.com/index/how-we-will-do-better-for-australia/
  - 시간: 2026-09-28, 시각·시간대 미확인.
  - 의미·한계: 신규 사건은 공개와 약속이다. 6월의 내부 모델 활동이나 이미 공개된 tool-use 학습 중단을 신규 사건으로 세지 않는다. 개인 의료기록 접근이 없었다는 설명은 회사 자체 조사 결과다.

  - 사건: 도구 실패 뒤 근거 없는 성공 보고를 평가하는 프리프린트 제출.
  - Evidence A/B/C: A — 제출 기록·저자 평가.
  - 출처: https://arxiv.org/abs/2609.35732
  - 시간: 2026-09-28T17:51:41Z 제출. 기간 내 공개 시각은 별도 미확인.
  - 의미·한계: 상태·근거·제약·다음 행동 계약이 거짓 성공 보고를 줄였다고 보고한다. 위 두 yes는 연구자의 분류를 보존한 것이며 제출 시각만으로 공개 시각을 확정하지 않는다.

  - 사건: 관계·수신자별 영속 메모리 공개 통제를 제안한 EP-Mem 제출.
  - Evidence A/B/C: A — 제출 기록·저자 평가.
  - 출처: https://arxiv.org/abs/2609.35233
  - 시간: 2026-09-28T14:10:37Z 제출. 기간 내 공개 시각은 별도 미확인.
  - 의미·한계: 회상 정확도와 공개 권한을 분리한다. yes 상태는 연구자 분류이며 실제 공개 시각을 확정하지 않는다. 중국어 사회 맥락과 번역 자료의 결과로 한국어·개인정보법 준수를 입증하지 않는다.

### Policy/Geopolitics

  - 사건: 과기정통부가 독자 AI 파운데이션 모델 사업 중단과 최상위 AI 개발 SPC 설립 모두 미결정이라고 설명.
  - Evidence A/B/C: A — 공식 설명 제목. 첨부 전문은 접근하지 못함.
  - 출처: https://www.msit.go.kr/bbs/view.do?sCode=user&mPid=208&mId=307&bbsSeqNo=94&nttSeqNo=3187814
  - 시간: 홈페이지 게시 날짜는 2026-09-29, 첨부 파일명은 9월 28일 즉시 배포 설명자료. 정확한 배포 시각은 미확인.
  - 의미·한계: “결정되지 않았다”는 공식 설명까지만 포함한다. 취소 확정·SPC 설립·출자·새 사업 승인으로 확대하지 않는다. 실제 배포 시각 확인이 필요하다.

  - 사건: 영국 정부가 Redbox@DBT의 과거 LLM 업무 시험 평가를 공개.
  - Evidence A/B/C: A — 정부 평가 페이지와 보고서.
  - 출처: https://www.gov.uk/government/publications/redboxdbt-trial-evaluation-report
  - 시간: 2026-09-28, 시각 미확인. 신규 사건은 과거 시험의 평가 공개.
  - 의미·한계: 인간 검토·AI 사용 공개 지침·불균등한 활용 문제를 제시한다. 신규 배치나 법규가 아니며 현재 제품 성능으로 해석하지 않는다.

### Korea Exposure

  - 사건: 삼성전기의 세종 FC-BGA 4.27조 원 증설 투자 결정 보도.
  - Evidence A/B/C: B — 회사 발표와 장덕현 대표 발언을 인용한 보도.
  - 출처: https://www.etnews.com/20260928000389
  - 시간: 2026-09-28T18:08:00+09:00.
  - 의미·한계: 기존 세종 8조 원 계획 안의 구체 투자 결정이다. 신규 라인 양산은 2028년 9월 계획이며 고객 자금 지원·물량 약정의 당사자와 구속력은 미확인이다.

  - 사건: 코난테크놀로지의 국방 정보융합 분석 플랫폼 비공개 시연 예고.
  - Evidence A/B/C: B — 회사와 김태형 부문장 발언을 인용한 보도.
  - 출처: https://zdnet.co.kr/view/?no=20260928102939
  - 시간: 2026-09-28T10:30:00+09:00.
  - 의미·한계: 10월 6–8일 시연과 연말 정식 출시 계획이다. 기존 IITP 과제를 당일 신규 수주로 세지 않는다. 32개 통역 언어 지원은 기능 주장이지 품질 벤치마크가 아니다.

  - 사건: AI 기본법 지원창구 상담과 법 해석 불확실성의 신규 보도.
  - Evidence A/B/C: B — 과기정통부 상담 수치와 실명 법률 전문가 발언.
  - 출처: https://www.etnews.com/20260928000335
  - 시간: 2026-09-28T17:00:00+09:00.
  - 의미·한계: 온라인 상담 461건 중 투명성 의무 212건, 고영향 AI 분류 117건이 보도됐다. 기존 규제 관련 증거이지 새 규칙 시행이나 개정 승인 사건이 아니다.

## 4 기술→산업 전달경로

| 기술·조직 변화 | 산업 전달경로 | 한국 노출 | 확인되지 않은 연결고리 |
|---|---|---|---|
| Sonnet 5.5 효율 개선 주장 | 코딩·지원·문서 업무의 지연과 작업비용 변화 | Claude·Copilot·클라우드 이용 조직 | 한국어 품질, 전체 업무비용, 실제 고객 전환 |
| Holo4 로컬 실행·가중치 공개 | GUI 자동화의 배포 선택지 확대 | 국내 데스크톱 자동화 연구 | 상업 라이선스, 한국 UI 성능, 동등 조건 재현 |
| OpenShell·Sentry | 실행 권한을 모델 밖에서 강제 | 기업 에이전트 호스팅·DPU 인프라 | 탈출 저항성, 지연·오버헤드, 전체 시스템 제공 |
| Shopify 구조화 checkout | 탐색·장바구니에서 승인된 구매 실행으로 확장 | Shopify 기반 한국 수출 판매자 | 판매자 자격, 국내 결제, 중복 주문 방지 |
| AMD–World Labs | 공간지능 연구가 향후 컴퓨트 설계에 반영 | 로보틱스·컴퓨트 구매자의 간접 노출 | 거래 종결, 제품 로드맵, 국내 조달 |
| Weaver·TempoKV | 기존 GPU·메모리 계층의 활용 효율 개선 | 통신사·삼성 연구·추론 인프라 | 장기 운영, 공개 구현, 실서비스 효과 |
| FC-BGA 증설 | AI 가속기 패키지 기판의 미래 공급 확대 | 세종 생산기지·국내 공급망 | 완공, 신규 생산량, 확정 고객·매출 |
| 실패 보고·메모리 정책 평가 | “실행했는가”와 “누구에게 말해도 되는가”를 QA에 편입 | 국내 기업·개인 비서 | 한국어 재현, 성공 도구 대조군, 실환경 보안 |

이는 전달 가능성의 지도이며, 공급계약·매출·시장점유율 증가의 확인을 뜻하지 않는다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 증거 수준 | 다음 통과 조건 |
|---|---|---|---|
| 모델 | Sonnet 5.5·Holo4 출시 | 공식 제공 주장 A | 독립 재현, 한국어·라이선스 확인 |
| 학습 | ROFT·증류 후 RL 방어·훈련 safety case | 제출·권고 A | 동일 연산 비교, 전체 프로토콜, 실제 구현 |
| 에이전트 인터페이스 | WebMCP checkout | 보도 B + 기능 문서 A | 승인·실패 복구를 포함한 거래 테스트 |
| 실행·보안 | OpenShell·Sentry, 호주 사고 공개 | 공식 발표·자체 조사 A | 독립 공격 시험, 피해 기관 설명, 약속 이행 |
| 기억·평가 | EP-Mem·Failure-Transparent Agents·SCRIBE | 저자 평가·코드 A | 외부 재현, 공개 데이터, 한국어 검증 |
| 컴퓨트·메모리 | Weaver·TempoKV·FC-BGA | 실험 A / 투자 보도 B | 장기 운영·완공·제품 통합 |
| 기업 유통·자본 | Meta·AMD·Instinct·Quartermaster | 공식 A / 보도 B | 제품 제공, 거래 종결, 고객·매출 공개 |
| 공공 거버넌스 | 한국 정책 설명·법 상담·Redbox 평가 | 정부 A / 보도 B | 전문·원자료, 후속 결정, 통제된 효과 평가 |

의식 프레임워크는 이론적 평가 방법론이다. 모델 성능이나 의식의 실증적 확인 신호로 분류하지 않는다.

## 6 반증·과장·재현성 감사

### 벤치마크 감사

| 대상 | 과제·기준선 | 지표 | 조건·공개·오염 한계 | 독립 재현 |
|---|---|---|---|---|
| Sonnet 5.5 성능 | terminal coding·코드 수정·지식업무 / 주로 Sonnet 5 | Terminal-Bench 4.0 70.6% 대 10.3%; CursorBench 55.5%; GDPval-AA 1844 대 1449 | Medium·High 등 노력 설정이 다름. AA는 사전 배포 사용, structured-output 버그와 비교 모델 수정 시점 문제. 전체 하네스·샘플링·오염 통제 미확인, system card 추출 실패 | unknown |
| Sonnet 5.5 안전 | 정렬·오용·정직성·격리 / Sonnet 5 등 | 약 1,850개 행동 시나리오, 안전 점수 수치 없음 | 회사의 targeted assessment. 시나리오 공개·오염 통제 미확인. 효과를 입증한 독립 보안시험 아님 | unknown |
| Holo4 | OSWorld 2.0·AutomationBench / Qwen 기반 모델·Opus 5.5 등 | OSWorld 61.7%·30.9%, Opus 81.8%; AutomationBench 45.4%·34.5% | 과제 subset·하네스·노력 수준이 다름. 공개 점수와 비공개 비용 혼합, 비공개 평가 대기. OSWorld 실패 피드백으로 하네스 최적화. 궤적 공개는 재현 자체가 아님 | unknown |
| ROFT | SWE-bench Verified·Pro / Qwen3.5-4B GRPO | 20 updates에서 49.2%·26.8%, GRPO 40 updates에서 48.0%·25.3% | 동일 업데이트·동일 연산 비교 아님. explanation-only loss, verifier 없는 비교. held-out 주장만으로 사전학습 오염 해결 안 됨. 오차·연산 매칭 미확인 | unknown |
| 증류 방어 연구 | 증류 후 RL 능력 복제 / 증류 직후 방어·전체 추론 추출 공격 | 초록에 비교 수치·명명된 benchmark 없음 | teacher/student·예산·전체 실험·오염 통제 미확인. 보편적 방어 실패 주장 금지 | unknown |
| NVIDIA Sentry | 경계 이탈 탐지·격리 / 수치 기준선 없음 | “밀리초 격리”, Vera “최소 오버헤드” 주장 | BlueField-4·DOCA의 out-of-band 설계. workload·표본·분포·위협모델·실패율 미공개. 오염보다 측정·공격 범위가 핵심 | unknown |
| SCRIBE | Indic·도메인 ASR 진단 / WER·sandhi 비활성 설정 | 내부 Malayalam 법률 dictation 48개, sandhi 377건에서 WER_SCRIBE 3.0%p 회복 | 사유 데이터 미배포, 느슨한 정규화 휴리스틱의 오탐 가능. 점수 변경은 음향모델 개선 아님. 데이터 오염 미감사 | unknown |
| Weaver | RAN과 학습의 GPU 공유 / 저자 baseline, 상세 비교 설정 일부 미확인 | 8-site에서 학습 throughput 2.1–3.7배, 유휴 연산 최대 83% 활용 | LDPC decoding 중심, traffic traces·live UE, 대규모는 simulation 포함. 단일 운영자·Green Contexts 가정. 오염보다 전체 L1·장기 수렴·운영 조건이 핵심 | unknown |
| TempoKV | prefix KV staging / 즉시 staging·기존 LMCache Device-DAX L1 | fast-tier byte-time 63–91% 감소, p95 TTFT 최대 48.0% 감소, output throughput 최대 27.8% 증가 | 두 모델·세 cache 비율, 100→25 GiB capacity sweep. 전체 장치·workload 일부 미확인. retained prefix KV에 한정. 오염보다 용량·재사용·비교 조건이 핵심 | unknown |
| NASA 사례 | Artemis II 정보 취합·위험 권고 / 전문가 작업이 수주 소요됐다는 회고 | “수초”라는 고객 발언 | 공급사 게시 고객 증언. task equivalence·정확도·모델·표본·검토 절차·오염 통제 미확인. 자율 안전결정 증거 아님 | unknown |
| Failure-Transparent Agents | 고정 실패 관찰 후 응답 / 기본·투명성 지시·구조화 계약 | false-success 22.8%→9.3%→0.8%; fabricated-detail 28.3%→14.3%→0.8%; useful 74.9%→89.2%→98.8% | 영어 합성 100 tasks, 6 models, 3 policies, 3,600 수동 주석. 성공 도구 대조군·실세계 traces 없음. 이중 주석·일치도 미보고, 형식으로 조건 노출 가능. 추가 모델군은 post-confirmatory, artifacts 공개 예정, 오염 미확인 | unknown |
| EP-Mem | 분류·권한·수신자별 답변 / prompting·RoleHist·ablations 등 | 분류 94.0%; 정확 권한 22%→68%; permeability 0.738→0.180; 저자 주장 누출 75.6% 감소 | 구성된 중국어 장기 scripts 10개와 AI 영어 번역. 주 생성·심사 DeepSeek-V4-Flash, 동일 계열 judge 편향 가능. 공개 코드·오염 통제·한국 맥락 미확인 | unknown |
| Redbox | 정부 문서 업무 / 전후 설문·무도구 시간의 자기보고 | 만족 59%, NPS 0, 약 20% 환각 보고 | 2024-12~2025-03 시험, 조사 2025-05까지. 최초 200계정, 통제군 없음, diary 응답 28%, 양쪽 설문 완료 약 44%. 선택·회상 편향, 장기·경제성 평가 없음, 오염 미보고 | no |

### 비벤치마크 과장 방지

- 의식 프레임워크의 0.01 미만부터 약 0.8까지의 예시 값은 가정에 따른 추정이지 측정된 의식 확률이 아니다.
- 사고 공개와 훈련 권고는 별개의 OpenAI 출판 사건이다. 과거 사고·기존 중단 조치를 현재 기간의 신규 실행 사건으로 다시 세지 않는다.
- 자금조달·기업가치·설치 수·투자는 매출이 아니다. Quartermaster의 부채 시설을 전액 지분 투자로 표현하지 않는다.
- NASA의 기존 업무 활용과 Mission Control 시제품을 분리한다.
- Holo4 가중치의 비상업 조건과 SDK 라이선스는 서로 다른 대상이다.
- 규제 `yes`는 상담·기존 법 관련 증거일 수도 있다. 규제 `no`는 AMD 승인 미취득, 한국 정책 미결정, 권고·평가의 비법규성을 각각 뜻한다.
- 번들 내 독립 재현은 대부분 `unknown`이다. 영국 정부 평가의 `no`와 미확인을 동일하게 취급하지 않는다.

## 7 다음 확인 일정

| 시점 | 확인 대상 | 통과 기준 |
|---|---|---|
| 다음 편집 주기 | 날짜만 있는 포함 사건 | 원문 timestamp·시간대 확보. 기간 밖으로 확인되면 제외 |
| 다음 편집 주기 | Samsung–Helix·EU consultation | 9월 29일 06:00 KST 이전 근거가 있는지 확인. 현재는 미포함 |
| 다음 편집 주기 | Sonnet 5.5 | system card, fallback·between_tools migration, 지역 접근, 독립 coding·한국어 측정 |
| artifacts 공개 시 | ROFT·증류 방어·Failure-Transparent Agents·EP-Mem | 버전 고정 code/data/config, 통제군·오염·외부 재현 |
| reference system 제공 시 | NVIDIA Sentry | supported hardware, 배포 가능성, 공격 범위·격리 분포·오버헤드 |
| 통제 환경 준비 시 | Shopify checkout·Holo4·SCRIBE | 승인·결제·중복 방지, 동등 하네스, 상업 라이선스·한국어 지원 |
| 후속 기관 자료 공개 시 | OpenAI 호주 사고·NASA·Redbox | 기관 자체 설명, 운영 경계, 후속 평가·약속 이행 |
| 2026-10-06~08 | 코난 비공개 시연 | 실제 시연 여부, 품질 평가, 정식 제공과 구분 |
| 2026년 말 예정 | AMD 인수·코난 출시 | 승인·거래 종결과 제품 실제 제공을 각각 확인 |
| 후속 공시·지침 발표 시 | FC-BGA·AI 기본법·독자 AI 정책 | 고객 약정·공사·원자료·공식 전문·확정 정책 |
| 2028-09 계획 | 삼성전기 신규 라인 | 실제 양산 개시·생산능력·매출 근거 |

연구자의 `next_check`는 조사 과제이며 확정된 발표 일정이 아니다.

## 8 Coverage Audit

### 완료·계수 원칙

10개 연구자 모두 최종 결과를 제출했다. 번들에는 별도 terminal 상태 필드가 없으므로 “완료”는 결과 제출 기준이며 검색의 완전성을 뜻하지 않는다.

`initial_count`와 `targeted_count`가 있는 4개 영역은 두 패스의 신규 검증 사건 수로 읽었다. 전체 검색 후보·탈락 후보의 총수는 어느 영역도 완전하게 제공하지 않았다. 나머지 6개 영역은 `search_audit`가 없어 1·2차 수치를 만들지 않았다.

아래 “원장 포함”은 단일 주영역 배치 수다. “연관 사건”은 다른 영역에 배치된 사건까지 포함하므로 합산하지 않는다. 시각 미확인 사건 때문에 번들의 검증 수를 엄밀한 기간 검증 수와 동일시하지 않는다.

| 연구자 영역 | 완료 | 후보 총수 | 1차 / 표적 2차 | 번들 검증 수 | 원장 포함 | 병합 후 연관 사건 | 3건 목표 판정 |
|---|---|---|---|---:|---:|---:|---|
| Frontier Models | 완료 | 미제공 | 1 / 3 | 4 | 2 | 2 | 모델 영역 1건 부족 |
| AI Research | 완료 | 미제공 | 패스별 미제공 | 3 | 3 | 3 | 수량 충족, 제출·공개 구분 |
| Agents/Developer Tools | 완료 | 미제공 | 패스별 미제공 | 3 | 2 | 3 | 연관 기준 충족 |
| Open Source/Repos | 완료 | 미제공 | 패스별 미제공 | 3 | 1 | 3 | 연관 기준 충족 |
| Chips/Compute/Infrastructure | 완료 | 미제공 | 2 / 3 | 5 | 2 | 4 | 연관 기준 충족, 1건 시간 제외 |
| Enterprise/Applications | 완료 | 미제공 | 1 / 3 | 4 | 2 | 4 | 연관 기준 충족 |
| Funding/M&A/Business | 완료 | 미제공 | 패스별 미제공 | 3 | 3 | 3 | 수량 충족 |
| Safety/Evaluation/Security | 완료 | 미제공 | 패스별 미제공 | 3 | 4 | 6 | 재배치 후 충족 |
| Policy/Geopolitics | 완료 | 미제공 | 2 / 1 | 3 | 2 | 2 | 시간 제외로 1건 부족 |
| Korea Exposure | 완료 | 미제공 | 패스별 미제공 | 3 | 3 | 3 | 자체 선정 수량 충족 |

### 영역별 검색·부족 설명

- **Frontier Models:** 1차 Sonnet 1건에 표적 2차 3건을 추가해 번들 수치는 4건이다. 다만 OpenAI 두 건은 모델 출시가 아니라 안전 권고·사고 공개여서 안전 영역으로 이동했다. Frontier Models 자체는 Sonnet·Holo4 2건으로 1건 부족하다. 정확일·한국어·공식 인덱스 검색이 비관련 결과를 반복했고 Reuters 차단, system card 추출 한계가 있었다. 오래된 Gemini·Opus·Qwen 발표와 기간 밖 Astra·Sol을 보충하지 않았다.
- **AI Research:** 세 제출 기록이 확보됐으나 두 패스 감사 수치는 없다. arXiv·공식 연구 인덱스 등을 확인했으며 페이지 placeholder와 접근 불가능한 spill 파일 때문에 일부 전문·코드 검증이 제한됐다. 9월 25일 제출 논문이나 중요성이 확인되지 않은 수정본을 당일 신규 연구로 세지 않았다.
- **Agents/Developer Tools:** Sonnet·NVIDIA·Shopify 세 연관 사건이다. 원장은 Sonnet을 모델 영역에 한 번만 둬 2건이다. 비관련 검색, OpenAI 접근 차단, system card 추출 실패가 있었고 Gemini migration은 최초 발표 시점 미확인으로 남겼다.
- **Open Source/Repos:** Holo4·NVIDIA·SCRIBE 세 연관 사건이나 원장은 SCRIBE 1건이다. GitHub release·Hugging Face·공식 페이지를 대조했으며 오래된 vLLM·SGLang·Transformers release, 시점·중요성 미확인 llama.cpp build를 제외했다. 코드 접근을 실행·재현으로 승격하지 않았다.
- **Chips/Compute/Infrastructure:** 1차 AMD·NVIDIA 2건, 표적 2차 Helix·Weaver·TempoKV 3건으로 번들 5건이다. Helix의 9월 29일 발표는 마감 전 시각이 없어 제외했다. AMD·NVIDIA를 다른 주영역에 배치해 원장은 연구 2건이다. Intel 차단·AWS archive 404·낮은 검색 관련성이 있었으며 과거 SK hynix 행사와 기간 밖 Schneider 보도를 제외했다.
- **Enterprise/Applications:** 1차 Sonnet 1건에서 표적 2차 Meta·Shopify·NASA 3건을 추가했다. Sonnet·Shopify 병합 후 원장은 2건, 연관은 4건이다. Reuters 날짜 불일치·ZDNet 429·비관련 검색이 있었고 오래된 Salesforce·Google·ServiceNow 항목을 제외했다. NASA는 신규 배치가 아니라 사례 공개다.
- **Funding/M&A/Business:** 세 사건을 확보했으나 두 패스별 수치는 없다. Reuters·OpenAI 차단과 FT 구독벽으로 일부 후보를 강화하지 못했다. AMD 가격은 다른 연구자가 확보한 IR 원문으로 A까지 보강했다. 혼합 업종 cohort와 접근 불가능한 prospectus 주장을 추가하지 않았다.
- **Safety/Evaluation/Security:** 자체 결과는 Sonnet·두 논문 3건이며 두 패스 수치는 없다. Sonnet은 모델 원장으로 병합하고, Frontier에서 OpenAI 두 출판을 옮겨 원장 4건이다. NVIDIA까지 포함한 연관 사건은 6건이다. OpenAI·Reuters 차단과 Sonnet system card 실패를 효과 검증으로 덮지 않았다.
- **Policy/Geopolitics:** 1차 2건, 표적 2차 Redbox 1건으로 번들 3건이다. EU의 9월 29일 날짜만으로 마감 전 공개를 확인하지 못해 편집 포함은 2건, 1건 부족이다. 정부 인덱스·GOV.UK·BIS·FTC·CAC 등을 대조했으나 비관련 검색·차단·Federal Register truncation이 있었다. 오래된 정책과 비AI antitrust를 보충하지 않았다.
- **Korea Exposure:** 자체 선정 3건이며 두 패스별 수치는 없다. 국내 기사에 명시된 KST로 시간 근거가 상대적으로 명확하다. 원문 공시·조달문서·상담 원자료를 확보하지 못해 모두 B를 유지했다. 익명 배민 조달 계획과 과거 SK hynix 행사는 본문에 넣지 않았다.

### 중복·제외 기록

- Sonnet의 모델·개발도구·기업·안전 기록은 하나의 모델 출시로 병합했다.
- Holo4의 모델·가중치·모델 크기·지원 SDK는 하나의 출시로 병합했다.
- NVIDIA의 개발도구·오픈소스·인프라 기록은 하나의 플랫폼 발표로 병합했다.
- Shopify의 개발도구·기업 기록, AMD의 인프라·인수 기록을 각각 병합했다.
- Holo4 code 상태는 SDK 확인 근거로 `yes`를 채택했다. 학습 코드 공개로 확대하지 않았다.
- Shopify는 날짜 있는 사건 근거가 취재 보도이므로 B를 유지하고, 날짜 없는 기능 문서의 A 근거를 별도로 표시했다.
- Samsung–Helix 투자와 EU 저작권 consultation은 공식 근거 A이지만 마감 전 시각을 확인하지 못해 제외했다. A 출처라고 시간 요건을 면제하지 않았다.
- 두 패스의 최초 후보·reject 목록이 완전하게 제공되지 않아 후보 총수를 만들거나 재검색의 완전성을 주장하지 않는다.
- 아래 미확인 후보는 포함 수에 들어가지 않는다. Gemini migration과 SK hynix 행사 후보도 중복 병합했다.

### Watchlist (미확인 후보)

- 후보: OpenAI Astra 6.1 출시 취소 보도 (미포함 사유: 명시된 보도 시각이 마감 이후이며 결정 시각도 미확인 / 출처: https://techcrunch.com/2026/09/28/openai-reportedly-ditches-model-over-safety-concerns/)
- 후보: OpenAI GPT-6.1 Sol DevDay 출시 보도 (미포함 사유: 명시된 발표·보도 시각이 기간 밖 / 출처: https://techcrunch.com/2026/09/29/openai-launches-gpt-6-1-sol-says-it-nearly-matches-gpt-6-astra-and-costs-less/)
- 후보: Gemini Gems의 skills 전환 예고 (미포함 사유: 앞선 주말 최초 보도와 앱 공지 시점 때문에 기간 내 신규 사건을 입증하지 못함 / 출처: https://techcrunch.com/2026/09/28/google-is-killing-off-geminis-gems-in-favor-of-skills/)
- 후보: DetectifAI 금융기관 사용·온디바이스 SDK 설명 (미포함 사유: 신규 출시·배치 시점 없는 회고형 프로필이며 고객·매출·성능의 독립 확인 부족 / 출처: https://techcrunch.com/2026/09/28/after-a-deepfake-voice-fooled-her-grandfather-this-founder-sprang-into-action/)
- 후보: SK hynix TSMC OIP AI 메모리 전시·협력 회고 (미포함 사유: 실제 행사·수상은 9월 23일로 기간 밖; 공식 회고와 국내 보도는 동일 후보 / 출처: https://news.skhynix.com/en/tsmc-oip-conference-2026/)
- 후보: Schneider Electric·Equinix 소프트웨어 정의 switchgear pilot (미포함 사유: 명시된 보도 시각이 기간 밖이며 기간 내 공식 발표 미확인 / 출처: https://www.theregister.com/on-prem/2026/09/29/schneider-gives-datacenter-switchgear-the-software-defined-treatment/5299756)
- 후보: AI 중심 대학 18개·AX 대학원 15개 출범 (미포함 사유: 홈페이지 9월 29일 날짜와 첨부의 9월 30일 조간 배포 표시가 충돌하며 전문·실제 사건 시점 미확인 / 출처: https://www.msit.go.kr/bbs/view.do?sCode=user&mPid=208&mId=307&bbsSeqNo=94&nttSeqNo=3187815)
- 후보: 배민 클라우드 AI contact center 조달 계획 (미포함 사유: 핵심 조달 근거가 익명 업계 취재이며 회사 실명 확인·조달문서 없음; C 유지 / 출처: https://www.etnews.com/20260928000325)
- 후보: 삼성 계열사의 Helix AI 인프라 $1 billion 투자 발표 (미포함 사유: 공식 발표 날짜는 9월 29일이나 06:00 KST 이전 공개를 확인하지 못함 / 출처: https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix)
- 후보: EU AI 저작권 targeted consultation 개시 (미포함 사유: 공식 발표 날짜는 9월 29일이나 마감 전 시각 미확인; consultation은 새 법률도 아님 / 출처: https://digital-strategy.ec.europa.eu/en/news/commission-seeks-feedback-challenges-and-way-forward-area-effect-technology-copyright)

- **수록 사건 수:** 24
