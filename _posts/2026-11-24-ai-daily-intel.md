---
layout: ai-intel
title: "AI Daily Intel — 2026-11-24"
date: 2026-11-24 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-24/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-24
- **기준 시각:** 2026-11-24T06:00:00+09:00 (종료 시각 미포함)
- **수집 구간:** [2026-11-23T06:00:00+09:00, 2026-11-24T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10/10 완료
- **수록 사건 수:** 24

## 1 오늘의 AI 한 문장

AI 도입의 다음 관문은 모델 점수만이 아니라 운영 조건이다. 커머스 특화 모델은 자체 평가에서 강점을 보였고, 개발 에이전트는 PR 승인까지 맡기 시작했지만, 독립 재현·권한 통제·실서비스 성능은 아직 별도로 검증해야 한다.

## 2 핵심 신호 5

1. **Tencent WeMM-Ecom | <br class="report-field-break" />Evidence A.** 중국어·영어 커머스 특화 멀티모달 모델 5종을 공개했다. 대표 모델은 자체 커머스 평가에서 74.35점을 기록했지만, 28개 평가 중 23개가 내부 벤치마크다. 위챗 운영은 회사 보고이며 한국어 성능은 미확인이다. [논문](https://arxiv.org/abs/2611.30662)
2. **WorldLeague | <br class="report-field-break" />Evidence A.** 시뮬레이션에서 13개 시스템을 비교한 결과, 선두도 물리 목표 60개 중 13개만 완수했다. 정답을 말하는 능력과 목표를 실제로 달성하는 능력은 같은 지표가 아니다. [논문](https://arxiv.org/abs/2611.30989)
3. **Claude Ship | <br class="report-field-break" />Evidence A.** GitHub PR 수정과 정책 기반 승인이 Team·Enterprise 베타에 들어갔다. 병합에는 기존 브랜치 규칙이 계속 적용된다. 도입 판단에는 자동 승인 오류와 사람에게 넘기는 비율이 필요하다. [공식 발표](https://claude.com/resources/articles/introducing-claude-ship)
4. **Azure의 AMD Helios 검증 | <br class="report-field-break" />Evidence A.** Microsoft가 Azure 연구실의 첫 Helios 랙에서 초기 워크로드를 실행했다고 AMD가 밝혔다. 실험실 검증은 고객 가용성이나 추론 비용 우위를 뜻하지 않는다. [AMD 발표](https://newsroom.amd.com/news/microsoft-running-workload-validation-amd-helios-rackscale-solution/)
5. **Amazon–Decart | <br class="report-field-break" />Evidence A(계약 체결), B(보도 경로).** Amazon이 최적화 기술을 인수하고 공동창업자와 팀을 영입하는 계약을 체결했다. 회사 전체 인수나 거래 종결이 아니며, 보도된 75억 달러는 Amazon이 확인하지 않았다. [보도](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/)

## 3 영역별 AI 브리프

상태의 `yes`는 출처가 해당 상태를 뒷받침한다는 뜻이다. 베타 접근은 정식 출시와, 회사가 보고한 운영·매출은 독립 검증과 구분한다. `unknown`은 미확인이다.

### Frontier Models

  - Evidence A · <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.30662)
  - Tencent가 0.8B부터 35B MoE(활성 3B)까지 5종과 코드·가중치를 공개했다고 밝혔다. 위챗에서 일일 10억 건 규모의 요청을 처리한다고 보고했으나 운영 개시일과 한국어 성능은 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=있음; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.30989)
  - 시뮬레이션에서 로봇의 궤적상 진척과 목표 완수를 분리해 평가한다. 데이터와 평가 코드를 제공하지만 실물 로봇 신뢰성의 근거는 아니다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.31201)
  - 새 기반 모델이 아니라 로봇 제어 하네스 연구다. 저자 설정에서는 공간 목표를 정확히 추정하는 것이 저수준 관절 동작이나 궤적을 모델이 직접 생성하는 것보다 중요했다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### AI Research

  - Evidence A · <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.29897)
  - 텍스트·목표 조건부 휴머노이드 동작 생성에서 같은 모델의 실행 경로를 최적화해 저자 보고 기준 쌍별 중앙값 6.138배 가속을 보였다. 로봇 제어 전체의 지연 개선치는 아니다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Agents/Developer Tools

  - Evidence A · <br class="report-field-break" />출처: [claude.com](https://claude.com/resources/articles/introducing-claude-ship)
  - PR Steward는 검사 실패·충돌·리뷰 피드백에 대응하고, Claude Approvals는 저장소 정책에 따라 승인할 수 있다. 두 기능은 베타이며 기존 Code Review와 출시 단계가 다르다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-23-issue-statuses-and-repository-boards-are-in-public-preview)
  - 이슈 상태와 저장소 보드를 공개 프리뷰로 열었다. 에이전트와 자동화가 GraphQL·REST·MCP로 상태를 공유할 수 있다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/anomalyco/opencode/releases/tags/v2.4.0)
  - 안정판에서 자동화 API의 기능 플래그를 없애고, 플러그인에 Code Mode 전용 스키마와 호출 출처를 구분하는 훅 메타데이터를 제공했다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Open Source/Repos

  - Evidence A · <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/QuentinJG/ive-release)
  - Illuin이 텍스트·이미지에서 미리 정의된 선택지를 채점하는 Apache-2.0 모델 IVE-4B와 Ivonnet-0.8B를 공개했다. 한국어 문서 정확도는 미확인이다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [www.llamaindex.ai](https://www.llamaindex.ai/blog/introducing-ocria-nano-1)
  - OCR·표·레이아웃 복원을 위한 CPU 파이프라인 가중치가 공개됐다. 파서 코드는 Apache-2.0, 가중치는 별도 수정 Open RAIL-M이다. CJK 인식기 제공과 한국어 정확도 검증은 별개다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/api/models/inclusionAI/Ling-3.2-air/commits/main)
  - 커밋 이력으로 멀티모달 MoE 가중치 업로드를 확인했다. 가중치는 MIT 라이선스이며, 문서에 제시된 서빙 구성은 복수 GPU를 요구한다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Chips/Compute/Infrastructure

  - Evidence A · <br class="report-field-break" />출처: [newsroom.amd.com](https://newsroom.amd.com/news/microsoft-running-workload-validation-amd-helios-rackscale-solution/)
  - Azure 연구실에서 MI455X·EPYC·Pensando·ROCm을 결합한 첫 Helios 랙의 초기 워크로드를 검증했다고 AMD가 발표했다. 이번 이벤트는 랙 납품이나 상용 출시가 아니라 검증 공개다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director)
  - NVIDIA 이사회가 Jensen Huang을 CEO·사장·이사로 즉시 복귀시켰다. 독립 이사회 위원회 조사는 계속되며, 한국 공급 계약·출하나 수출 규정 변경은 발표되지 않았다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Enterprise/Applications

  - Evidence A · <br class="report-field-break" />출처: [claude.com](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards)
  - 적격 조직 대상 Enterprise Frontier Safeguards 베타가 열렸다. 설정된 워크스페이스의 적용 대상 Messages API 요청·응답은 Anthropic이 보관하지 않고, 암호화된 안전 데이터는 고객 소유 버킷으로 간다. Managed Agents 세션·Files API 업로드·코드 실행 컨테이너 등은 적용 범위 밖이다. 한국 리전과 규제 적합성은 미확인이다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [claude.com](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more)
  - MCP Skills는 공개 베타로, Tasks·Elicitation은 Pro·Max·Ultra에서 정식 제공으로 전환됐다. Team의 Skills는 관리자 활성화가 필요하고 Enterprise Skills와 File Uploads는 아직 제공 예정이다. 원문은 날짜만 표기한다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Funding/M&A/Business

  - Evidence A(번들이 확인한 Amazon의 계약 체결 발표), B(아래 보도 경로·금액 보도) · <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/)
  - 대상은 Decart Optimization Stack 기술과 인력이며 회사 전체 인수는 확인되지 않았다. 거래 종결은 규제 승인 등 조건부다. 75억 달러는 Bloomberg 보도치로, 공식 대가나 Trainium 통합 성과로 볼 수 없다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음(승인 확인 전).
  - Evidence B · <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/)
  - Sierra가 17억5000만 달러 시리즈 F와 300억 달러 기업가치를 밝혔다. 명시된 고객과 기존 매출 지표는 회사 보고에 근거한다. 이전의 4억 달러 런레이트는 이번 창의 신규 공시나 감사된 인식 매출이 아니다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=있음; 매출=있음; 규제=미확인.

### Safety/Evaluation/Security

  - Evidence A · <br class="report-field-break" />출처: [openai.com](https://openai.com/index/introducing-shirudo/)
  - OpenAI와 Cisco가 영구 패치 전 운영자 승인 임시 보호를 적용하는 Linux 런타임을 프리릴리스로 공개했다. 코드가 공개됐지만 통제된 방어 시연은 실서비스 배포 근거가 아니다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [audiovisual.ec.europa.eu](https://audiovisual.ec.europa.eu/en/media/video/I-298395)
  - EU 집행위가 앞서 알려진 AI 지원 공격 캠페인에서 EU Academy 이용자의 이름·이메일 등 개인정보가 노출됐다고 밝혔다. 신규 사실은 피해 공개이며, 영향 인원은 미확인이다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [newsroom.pinterest.com](https://newsroom.pinterest.com/news/helping-families-navigate-controls-for-teens-on-pinterest/)
  - 보호자가 청소년 추천 피드에서 AI 생성 콘텐츠 노출 정도를 조절할 수 있다. 전면 차단이나 한국 계정 적용, 한국어 탐지 성능은 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=있음; 매출=미확인; 규제=미확인.

### Policy/Geopolitics

  - Evidence A · <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/eu-and-kenya-hold-successful-digital-dialogue)
  - EU와 케냐가 언어 다양성·농업 분야 AI Factories 협력을 심화하고 인재 협력과 케냐의 개방형 컴퓨팅 시설을 검토한다. 시설 가동이나 데이터 적정성 결정 채택은 아니다. 원문은 날짜만 표기한다.
  - **상태:** 발표=있음; 이용 가능=없음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음.
  - Evidence B · <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/jensen-huang-scheduled-to-testify-next-week-in-senate-following-reinstatement-as-nvidia-ceo/)
  - TechCrunch가 상원 은행위원회 공지를 인용해 Huang의 12월 3일 수출통제 감독 청문회 증언 일정을 보도했다. 위원회 원문은 확보되지 않았으며, 일정 공지는 증언이나 규정 변경과 다르다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음.
  - Evidence B · <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/trump-endorses-jensen-huangs-return-to-nvidia-says-us-has-no-evidence-of-wrongdoing/)
  - 보도에 따르면 Trump는 Huang 복귀를 지지하면서 NVIDIA의 내부 수출통제 준수 검토가 계속돼야 한다고 밝혔다. 별도 법무장관 공식 입장, 조사 종결 또는 수출 규정 변경은 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음.

### Korea Exposure

  - Evidence B · <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261123000358)
  - 전자신문이 서울 코엑스 Micron 채용 행사를 현장 보도했다. 대만·싱가포르의 제조·첨단 패키징과 일본의 3D 적층 메모리·고속 인터페이스 설계 인력이 대상이었다. 채용 행사 확인이며 실제 채용이나 증산 확인은 아니다.
  - **상태:** 발표=미확인; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - Evidence A · <br class="report-field-break" />출처: [www.msit.go.kr](https://www.msit.go.kr/bbs/view.do?sCode=user&mPid=208&mId=213&bbsSeqNo=87&nttSeqNo=3177775)
  - 과기정통부가 대전에서 과학 AI 자원 공동 활용과 K-Moonshot AI Scientist 임무 지원을 논의했다. 확인된 것은 간담회 개최이며 플랫폼 개통이나 예산 배정은 아니다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

## 4 기술→산업 전달경로

- **특화 멀티모달 → 검색·문서 처리:** WeMM-Ecom은 커머스 검색, Illuin은 문서 분류·라우팅, OCRia는 CPU 기반 PDF 전처리의 후보군이다. 한국 시장에 적용하려면 한국어 상품·문서 표본에서 기존 방식 대비 정확도와 비용을 함께 비교해야 한다.
- **개발 에이전트 → 승인 통제:** GitHub의 공유 이슈 상태는 작업 조율을, Claude Ship은 PR 수정·승인을 자동화한다. 자동 승인 범위를 넓히기 전에 브랜치 보호와 사람에게 넘기는 조건이 의도대로 작동하는지 확인해야 한다.
- **가속기 → 고객의 추론 비용:** Helios는 랙 검증 단계이고 Decart는 기술 인수 계약 단계다. 모두 인프라 선택지를 넓힐 수 있지만, 고객 접근과 동일 조건의 처리량·비용 측정이 나오기 전에는 경제성 개선으로 계산할 수 없다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 컴퓨트·서빙 | Azure Helios 연구실 검증, Amazon–Decart 계약 | 상용 접근, 거래 종결, 단위 추론 비용 |
| 모델·평가 | WeMM-Ecom 공개, WorldLeague와 Embo-Harness의 물리 행동 평가 | 한국어 성능, 하네스 조건을 맞춘 독립 재현, 현장 전이 |
| 데이터·문서 | IVE·Ivonnet, OCRia, Ling 가중치 공개 | 한국어 정확도, 라이선스 적합성, 실제 처리비 |
| 워크플로·보안 | PR 승인 베타, 공유 이슈 상태, 보관 옵션, Shirudo 프리릴리스 | 승인 오류율, 기능별 보관 범위, 실서비스 안전성 |
| 정책·국내 노출 | 수출통제 청문회 일정, 서울 채용 행사, 대전 과학 AI 간담회 | 규정 변경, 실제 채용, 예산·접근 조건 |

## 6 반증·과장·재현성 감사

Evidence A는 공개·발표를 뒷받침하는 1차 근거 등급이지, 성능 주장의 독립 검증을 뜻하지 않는다. 아래 비교의 독립 재현은 모두 미확인이다.

| 항목 | 과제·비교 기준 | 지표·조건 | 공개·오염·재현성 한계 |
|---|---|---|---|
| WeMM-Ecom | 커머스 8개 시나리오 및 범용 64개 평가. 커머스는 Qwen3.8-Flash-Next·HY4, 범용은 유사 크기 Qwen3.5 비교 | 커머스 평균 74.35 대 73.15·72.13. 내부 23개·공개 5개, 범용 평가는 Thinking/Instruct 구분 | 저자 평가이며 내부 비중이 높다. 학습·평가 중복은 독립적으로 배제되지 않았다. |
| WorldLeague | 탐색·재배치·환경 적응 시뮬레이션 60개, 13개 시스템 비교 | 궤적 기반 Interactive Score 100점 척도. 선두 Claude Fable 5.2는 28.58점, 목표 13/60 완수 | 제어 인터페이스가 모델 계열별로 다르고 시뮬레이터 자산에 라이선스 조건이 있다. 과제·자산 사전 노출과 실물 로봇 전이는 미확인이다. |
| Embo-Harness | RoboLab-120 폐루프 조작 및 실물 조작 4개 과제. 보고된 최강 비교군 대비 | 83.3%, 비교군 대비 26.2%p 우위. 실물 제로샷 20회 중 15회 성공 | 저자 실험이며 실물 표본이 작다. 기반 모델 단독이 아닌 모델과 하네스의 결과다. 학습·평가 중복 미확인이다. |
| Motion Mamba 2.0 | 조건부 동작 스트리밍. 같은 모델의 비최적화 실행 경로 대비 | RTX 4090, 25fps·52프레임 창에서 중앙값 1,685.35→276.14ms, 쌍별 중앙값 6.138배. Unitree G1 시연은 별도 | 시험한 롤아웃의 결과·상태가 같았다는 저자 보고다. 전체 제어 지연과 학습·평가 오염은 검증되지 않았다. |
| IVE-4B | 새 도메인 문서의 선택지 판정. 최대 5B Decision Index 코호트 비교 | 비공개 과제에서 166개 모델 중 1위. 자유 응답 생성 없이 단일 순전파로 채점 | 비공개 과제는 직접 감사가 어렵고, 비공개라는 사실만으로 오염이 배제되지는 않는다. |
| OCRia-nano-1 | ParseBench-2 텍스트·표·레이아웃 및 CPU 처리 속도. LiteParse/Tesseract·Indra·Marker 비교 | 종합 59.2, 표 59.5. 비교 종합 점수 48.7·55.1·52.5. 전체 파이프라인 1코어 평균 426ms/쪽, 단일 코어 워커 16개에서 초당 27.8쪽 | 디지털 PDF의 텍스트 레이어를 재사용할 수 있다. 개발사 평가로 오염 감사와 한국어 OCR 성능은 미확인이다. |
| Ling-3.2-air | 자동화와 전문 PDF 질의응답. Ling-3.0-flash-VL 대비 | AutomationBench-AA 61% 대 15.7%, GDP.pdf 전항목 통과율 16% 대 8.4% | 모델 카드 수치이며 평가 하네스·샘플링 설정·반복 횟수와 학습 데이터 중복이 확인되지 않았다. |
| Shirudo | 재시작 없이 임시 보호가 적용되는지 파트너가 통제 환경에서 시연. 정량 비교군 없음 | 방어 작동과 서비스 지속 여부를 본 단일 시연 | 비교 벤치마크가 아니다. 시험 세트·오염 평가는 공개되지 않았고, 일반적 효과와 운영 오버헤드는 미확인이다. |

Claude Ship의 기존 Code Review 내부 관찰치는 새 베타 기능의 통제 실험이 아니다. 또한 Helios의 초기 워크로드 실행에는 비교 처리량이나 비용 지표가 없고, Enterprise Frontier Safeguards 공개 자료에는 탐지 품질의 통제 비교가 없다.

## 7 다음 확인 일정

- **12월 3일 예정:** 미국 상원 청문회 최종 증인 명단과 실제 증언을 확인한다. 청문회 개최와 수출통제 집행·규정 변경은 별도로 기록한다.
- **다음 공시 시:** Decart 거래의 규제 승인·종결·확정 대가, Azure Helios의 고객 접근 시점과 리전, NVIDIA 내부 조사 및 공식 수출통제 조치를 확인한다.
- **다음 검증 공개 시:** WeMM-Ecom 공개 평가와 한국어 홀드아웃, WorldLeague의 제어 조건을 맞춘 재실험, Motion Mamba의 다른 장비에서의 종단간 지연을 확인한다.
- **국내 후속 발표 시:** Micron 채용 인원·배치, 과학 AI 플랫폼의 예산·참여 기관·접근 조건을 확인한다. 기업 도입 관점에서는 Claude의 기능별 보관 범위와 한국 리전 지원을 별도로 본다.

## 8 Coverage Audit

연구자 10/10 모두 최종 결과 제출 완료. 아래 ‘이벤트 후보’는 번들의 `events` 배열에 편집 후보로 전달된 건수로, 전체 검색 적중 건수가 아니다. ‘검증’은 연구자 단계의 공개·사건 근거 통과 건수이며 ‘포함’은 전역 중복 제거와 편집 후의 단일 원장 계상이다. 정량 두 패스 `search_audit`는 Agents/Developer Tools에만 제공됐다. 나머지 영역의 전체 후보 수와 패스별 건수는 미제공이므로 `coverage_notes`를 근거로 검색 범위와 한계를 설명한다.

| 영역 | 완료 | 이벤트 후보 / 연구자 검증 / 최종 포함 | 목표 3 대비 및 검색 근거 |
|---|---|---|---|
| Frontier Models | 완료 | 3 / 3 / 3 | 미달 없음. 공식 채널·arXiv 원본을 확인했고 통신사·한국어 보강 검색은 추가 근거를 내지 못했다. 후행 큐레이션은 공개일을 바꾸지 않는다. |
| AI Research | 완료 | 3 / 3 / 1 | 2건 부족. WeMM-Ecom·WorldLeague는 Frontier Models에 단일 계상했다. 일반 검색의 무관·무일자 결과는 원본으로 확인했고 이전 v1은 제외했다. Embo-Harness는 범위에는 들지만 이미 Frontier Models에 있다. 별도 대체 이벤트는 전달되지 않았다. |
| Agents/Developer Tools | 완료 | 7 / 7 / 3 | 미달 없음. `search_audit`: 초기 4, 표적 3, 검증 7, 연구자 미달 0. 창 복구에서 공식 피드·릴리스 API의 정확 시각을 우선했다. Safeguards·MCP는 Enterprise에 계상했고, 별개로 검증된 OpenCode 2.4.1 패치와 Kiro 제한 프리뷰는 신호 우선순위로 미선정했다. |
| Open Source/Repos | 완료 | 3 / 3 / 3 | 미달 없음. 모델 카드·커밋·릴리스로 확인했다. arXiv 조회는 제한됐고, 과거 공개의 재소개와 마감 후 업로드를 제외했다. |
| Chips/Compute/Infrastructure | 완료 | 3 / 3 / 2 | 1건 부족. Decart는 Funding에 계상했다. 업체·정부 원문과 한영 보도를 검색했으나 이전 TPU·Azure·SK hynix 공개, 신규 건설·조달이 확인되지 않은 보도는 대체할 수 없었다. 일부 매체 추출은 제한됐다. |
| Enterprise/Applications | 완료 | 4 / 4 / 2 | 1건 부족. Ship은 Agents, Shirudo는 Safety에 계상했다. 공식 제품 채널과 한영 보도를 교차 점검했으나 후속 기사 시각 초과, 과거 발표, 기존 활용 사례를 대체 이벤트로 세지 않았다. Reuters 추출은 차단됐다. |
| Funding/M&A/Business | 완료 | 3 / 3 / 2 | 1건 부족. Shirudo는 Safety에 계상했다. 기업 발표·날짜별 보도를 점검했지만 Supertake 등의 원 공개 시점을 확인하지 못했고, 이전 IPO 회고와 제품 단독 기사를 제외했다. |
| Safety/Evaluation/Security | 완료 | 3 / 3 / 3 | 미달 없음. 공식·정부·저장소 및 보도를 확인했다. 공개 시각이 불명확한 평가 2건과 마감 이후 후속 기사를 제외했다. |
| Policy/Geopolitics | 완료 | 3 / 3 / 3 | 미달 없음. EU·미국·한국 공식 채널과 보도를 확인했다. 과거 경고의 재보도, 정책 채택이 없는 패널, 창 밖 보도를 제외했다. 일부 통신사 원문은 확보되지 않았다. |
| Korea Exposure | 완료 | 3 / 3 / 2 | 1건 부족. NVIDIA 복귀는 Chips에 단일 계상했다. 한국 매체와 기업·부처 채널을 확인했지만 기존 베타 채택, 이전 전시 공개, AI 관련성이 낮은 제품 발표는 대체할 수 없었다. 일부 매체 추출은 제한됐다. |

- **중복 병합:** WeMM-Ecom, WorldLeague, Claude Ship, Enterprise Frontier Safeguards, Claude MCP 워크플로, Amazon–Decart, Shirudo, NVIDIA 복귀의 교차 제출을 각각 하나로 합쳤다. NVIDIA 이사회 복귀 결정, 대통령 입장, 상원 청문회 일정은 서로 다른 행위다.
- **시간·등급 처리:** 정확한 시각이 있으면 KST 창으로 판정했다. 날짜만 있는 1차 자료는 번들의 달력일 중첩 규칙으로 포함했으며, 특히 11월 24일자 MCP와 EU–케냐는 06:00 이전 공개가 확인된 것으로 읽으면 안 된다. arXiv v1은 연구 공개의 기록일이며 코드·가중치 최초 배포일이나 운영 개시일이 아니다. Decart 계약 근거와 보도 금액의 등급은 분리했다. <br class="report-field-break" />Evidence C는 원장에 포함하지 않았다.
- **제외:** 창 복구에서 격리된 Claude Code 릴리스는 원장과 신호에서 제외했다. 아래 Megaspeed 두 줄은 연구자 두 명이 제출한 같은 보도를 보존한 것으로, 두 사건이 아니다.

### Watchlist (미확인 후보)

- 후보: Claude Code 2.1.331 adds terminal Code Mode across four cloud platforms (미포함 사유: <br class="report-field-break" />Evidence B, 11월 24일 06:34:41 KST 공개로 마감 이후이며 창 내 별도 공개 미확인 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.331))
- 후보: Codex 0.172.0 adds per-tool approval reviewers and lazy startup for optional MCP servers (미포함 사유: <br class="report-field-break" />Evidence B, 11월 24일 09:03:55 KST 공개로 마감 이후 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/openai/codex/releases/tags/rust-v0.172.0))
- 후보: Megaspeed reportedly faces a possible U.S. Entity List designation (미포함 사유: <br class="report-field-break" />Evidence C, 익명 출처의 미확정 보도이며 06:25 KST로 마감 이후 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/megaspeed-the-company-at-the-center-of-the-jensen-huang-scandal-appears-headed-for-a-u-s-blacklist/))
- 후보: Jesta documents an AI-assisted attempted intrusion at a financial firm (미포함 사유: <br class="report-field-break" />Evidence B, 보도는 마감 이후이고 해당 활동도 11월 16일로 창 이전 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/24/an-ai-coding-agent-a-browser-and-a-mac-tool-found-a-financial-firms-access-key-in-under-6-minutes/5311922))
- 후보: Megaspeed reported as a possible U.S. Entity List target (미포함 사유: <br class="report-field-break" />Evidence C, 위와 동일한 익명 출처 보도로 공식 지정 미확인 및 마감 이후 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/megaspeed-the-company-at-the-center-of-the-jensen-huang-scandal-appears-headed-for-a-u-s-blacklist/))

- **수록 사건 수:** 24
