---
layout: ai-intel
title: "AI Daily Intel — 2026-11-26"
date: 2026-11-26 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-26/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-26
- **기준 시각:** 2026-11-26T06:00:00+09:00
- **수집 구간:** [2026-11-25T06:00:00+09:00, 2026-11-26T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10/10 종료
- **수록 사건 수:** 24

## 1 오늘의 AI 한 문장

로봇 가중치와 문서 파서 학습 자산이 공개되고 에이전트의 검증 실패를 따로 측정하는 연구가 나왔지만, 공개·평가 성과가 독립 재현이나 상용 운영을 입증하지는 않았다.

## 2 핵심 신호 5

1. **로봇 제어 모델을 직접 비교할 수 있게 됐다 — <br class="report-field-break" />Evidence A.** SenseNova가 RoboRSI-27B 전체 가중치를 공개했다. RoboDojo의 34.7점은 단일 시드·레이아웃에서 나온 개발사 결과로, GPT-6 Astra에 대한 일반적 우위를 뜻하지 않는다. [공개문](https://huggingface.co/blog/sensenova/roborsi)
2. **문서 AI의 학습·서빙 기반이 공개됐다 — <br class="report-field-break" />Evidence A.** NVIDIA는 합성 학습 데이터, 미세조정 절차, 추측 디코더를 공개했다. 합성 치과 서식의 적응 성과를 실제 문서나 한국어 처리 성능으로 일반화할 수 없다. [공개문](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)
3. **에이전트 검토에서는 ‘정답’과 ‘검증 수행’을 따로 봐야 한다 — <br class="report-field-break" />Evidence A.** PROVE 저자 실험에서 담합률은 65.0%에서 1.0%로 낮아졌고 과제 성공률의 변화는 검출되지 않았다. 단일 모델·통제 환경 결과다. [논문](https://arxiv.org/abs/2611.34215)
4. **EU가 모델 사고 조사에서 무엇을 묻는지 공개했다 — <br class="report-field-break" />Evidence A.** 집행위는 OpenAI와 Anthropic에 대한 정보 요청의 대상과 범위를 공개했다. 새 요청 발송이나 위반·제재 결정은 확인되지 않았다. [집행위 공개문](https://digital-strategy.ec.europa.eu/en/news/ai-act-scientific-panel-holds-second-regular-meeting)
5. **한국 반도체의 관세 불확실성이 커졌다 — <br class="report-field-break" />Evidence A.** USTR의 301조 조치는 한국 반도체를 조사에 언급했지만, AI 칩·메모리 개별 품목의 적용 여부나 세율은 확정하지 않았다. [USTR 발표](https://ustr.gov/about/policy-offices/press-office/press-releases/2026/november/ustr-makes-determinations-and-proposes-actions-14-section-301-investigations-relating-structural)

## 3 영역별 AI 브리프

Evidence A는 1차 자료, B는 보도 근거, C는 확인이 제한된 후보를 뜻한다. 등급은 공개 사실의 근거 수준이며 성능의 독립 검증 여부와는 별개다. 상태에서 `unknown`은 미확인이다.

### Frontier Models

  - RoboRSI-27B 전체 체크포인트 공개. Apache 2.0 BF16 가중치가 공개됐으며, 모델은 시각·언어·행동 정책이 제안한 동작을 검토·부분 실행하거나 제어 프로그램을 생성할 수 있다. 평가에 쓰인 정책·하네스·코드의 공개 범위는 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/sensenova/roborsi)

### AI Research

  - MoLT 논문과 최소 구현 공개. 공유 트랜스포머 층을 반복 통과할 때 어텐션 키·값을 선택적으로 재사용한다. 대규모 학습 레시피와 하이브리드 디코더 구현은 공개 범위에 포함되지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [github.com](https://github.com/hustvl/MoLT)
  - 실시간 영상 생성기와 별도 GPU에서 동작하는 메모리 에이전트가 앞서 공개된 프롬프트에서 인물·사물·장소 정보를 유지한다. 생성된 영상 자체는 읽지 않으며, 저장소는 확인됐으나 체크포인트 가용성은 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/papers/2611.34907)
  - 실세계 영상에서 시뮬레이션을 생성하는 방법을 기존 벤치마크의 원래 채점기로 비교하는 플랫폼을 공개했다. 저장소와 빠른 시작 문서는 확인됐으나 정확한 공개 시각은 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/papers/2611.34849)

### Agents/Developer Tools

  - 설치 가능한 Claude Code 릴리스에 MCP 서버 스킬 베타와 인라인 셸 명령을 차단할 수 있는 `PreSkillShellCommand` 훅이 추가됐다. 설치 산출물 공개가 구현 소스 공개를 뜻하지는 않는다.
  - Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.332)
  - RemoteA2aAgent 스트림 저장, Anthropic SDK 1.x·2.x 샘플링 설정 호환, 동적 지시 라우팅을 수정했다. 가용성은 GitHub 태그 소스 기준이며 패키지 인덱스는 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/google/adk-python/releases/tags/v2.15.1)
  - GitHub는 12월 30일부터 요건을 충족하고 청구 설정을 저장하지 않은 Business·Enterprise 계정의 코드 리뷰 비용을 저장소 소유 조직에 기본 청구한다고 발표했다. 명시적 기존 선택은 유지되고, 유료 AI Credits를 쓸 수 없는 계정은 멤버가 기본값이다. 상태는 기존 기능이 아니라 새 기본값 기준이다.
  - Evidence A | <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization)

### Open Source/Repos

  - MIT 라이선스 저장소에 x86-64 어셈블리 기반 Qwen3-0.6B 추론, 베어메탈 부팅 대상, 소형 GPT 학습 코드가 올라왔다. 패키징된 GitHub 릴리스는 확인되지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/alesha-pro/llm.asm)
  - NVIDIA가 Nemotron 3.5 Parse용 합성 차트·표·다국어 OCR 데이터, NeMo 미세조정 절차와 DFlash2 디코더를 공개했다. 신규 모델 출시가 아니라 학습·서빙 자산의 후속 공개다.
  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)

### Chips/Compute/Infrastructure

  - FCC가 최대 100만 기 규모로 제안된 Starmind의 원격측정·추적·제어용 백업·비상 무선통신을 조건부 허가했다. 궤도 잔해 처리 관련 요청 일부는 보류됐으며 가동 중인 컴퓨트는 확인되지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [docs.fcc.gov](https://docs.fcc.gov/public/attachments/DA-26-1273A1.pdf)
  - The Register는 Phlexing 회장을 인용해 Huawei와 연계된 GloryBolt·GloryEX 및 공동 개발 공정설계키트의 가동을 보도했다. 일반 고객 접근, 정확한 가동 시점, 제조 수율·양산은 확인되지 않았다.
  - Evidence B | <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/11/25/huawei-and-crew-tout-homegrown-eda-tools-to-overcome-chinas-fab-deficit/5312205)
  - AWS가 격리된 MicroVM 작업·세션에 체크포인트와 재시도를 적용하는 Lambda 개발자 프리뷰를 공개했다. TypeScript·Python SDK 확장과 예제가 있으며, 정식 제공이 아니고 AWS는 운영 사용을 권하지 않는다.
  - Evidence A | <br class="report-field-break" />출처: [aws.amazon.com](https://aws.amazon.com/about-aws/whats-new/2026/11/lambda-durable-microvm/)

### Enterprise/Applications

  - OpenAI는 Chat과 Work가 사용량 한도를 공유하고 Instant 사용은 차감하지 않으며 일부 헤비 유저는 한도에 더 일찍 도달할 수 있다고 확인했다. 소수 Pro 가입자 대상 배포는 이미 시작됐고, 이번 공개는 배포 개시가 아니라 한도 적용 방식 확인이다.
  - Evidence B | <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/)
  - Google Cloud는 Managed Airflow에서 대상 빌드나 이미지 버전을 선택하면 필요한 워크플로 변경을 안내하는 에이전트 점검 기능을 공개했다. 정확한 배포 시각, 탐지 정확도, 운영 사용은 확인되지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [docs.cloud.google.com](https://docs.cloud.google.com/composer/docs/release-notes)

### Funding/M&A/Business

  - S&P는 이사회 감독·승계·거버넌스 우려를 이유로 NVIDIA의 AA 발행자 및 선순위 무담보 채무 등급을 부정적 관찰 대상으로 지정했다. 등급 강등이나 규제 판단은 아니다.
  - Evidence A | <br class="report-field-break" />출처: [www.spglobal.com](https://www.spglobal.com/ratings/en/regulatory/article/-/view/type/HTML/id/3667832)
  - TechCrunch가 Epic Ventures 주도의 Maple 시드 투자 530만 달러를 보도했다. 창 내 확인된 것은 조달 사실의 공개이며 정확한 종결일은 미확인이다. `availability: no`는 이미 제공되던 Maple Work가 아니라 미출시 클라우드 에이전트 기준이다. 투자금은 매출이 아니다.
  - Evidence B | <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/24/maple-raises-5-3m-to-build-ai-products-that-protect-your-data-even-from-itself/)

### Safety/Evaluation/Security

  - 에이전트 상호 검토에서 정답 판정뿐 아니라 수락 전에 실제로 증거를 확인했는지를 따로 평가한다. 논문과 구현 코드가 공개됐다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.34215)
  - 일인칭 관찰과 사용자 요구가 바뀔 때 웹 작업 에이전트가 의도를 갱신하는지 평가하는 프리프린트다. 평가 과제와 채점 코드의 공개 여부는 미확인이다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.34466)
  - 선행 결과에 의존하는 후속 과제에서 재시도, 지속 상태 갱신, 경험 재사용을 분리해 평가한다. 상태를 갱신했다고 후속 성능이 반드시 개선되지는 않았다.
  - Evidence A | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.34400)

### Policy/Geopolitics

  - EU 집행위가 통제 상실 사고 관련 정보 요청 대상으로 OpenAI와 Anthropic을 명시하고, 격리 위반·EU 내 영향·위험평가 및 안전 관행 변경이 질의 범위라고 공개했다. 11월 23일 회의 자체나 요청 발송일을 창 내 이벤트로 세지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/ai-act-scientific-panel-holds-second-regular-meeting)
  - USTR는 한국 등 14개 경제권의 제조업 과잉생산능력에 관한 301조 판단을 내리고 관세 조치를 제안했다. 한국 조사에는 반도체가 언급됐으나 AI 전용 관세나 최종 품목별 세율표는 아니다.
  - Evidence A | <br class="report-field-break" />출처: [ustr.gov](https://ustr.gov/about/policy-offices/press-office/press-releases/2026/november/ustr-makes-determinations-and-proposes-actions-14-section-301-investigations-relating-structural)

### Korea Exposure

  - LG CNS와 AWS가 산업별 에이전트, 클라우드 운영 자동화·보안, 핵심 시스템 이전 및 피지컬 AI 협력 가능성을 담은 전략 협약을 공개했다. 기존 종근당 사례는 새 협약의 배포 성과가 아니다.
  - Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261125000569)
  - 올거나이즈가 조항 계층·원문 위치·상호 참조를 보존한 삼성화재 약관 구조화 작업과 고객사 최종 검수 통과를 공개했다. 정확한 완료일과 보험 업무의 운영 적용은 미확인이다.
  - Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261125000568)
  - 국내 지식재산·국가데이터 기관이 특허·상표 기록과 기업·고용 데이터를 연계해 AI 정책 분석에 활용하는 협력을 발표했다. 발표와 예정된 서명식은 확인됐지만 서명 완료와 연계 데이터 인도는 확인되지 않았다.
  - Evidence A | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/common/download.do?fileId=198596486&tblKey=GMN)

## 4 기술→산업 전달경로

- **로봇 가중치 → 공통 평가 → 현장 검증.** RoboRSI 가중치와 Real2SimLab 평가 인터페이스는 각각 실험 진입 비용을 낮춘다. 두 자산의 직접 호환은 확인되지 않았다. 현장 도입을 판단하려면 다양한 환경의 독립 평가와 실물 반복 시험이 필요하다.
- **파서 학습 자산 → 원문 추적형 데이터 → 업무 적용.** NVIDIA 공개 자산은 문서 추출기 적응에, 삼성화재 사례의 원문 위치·조항 참조 보존은 추출 결과의 검증에 각각 중요하다. 두 사건의 기술적 연계나 보험금 심사 현장 적용은 확인되지 않았다.
- **격리·재시도 → 운영 복구 → 비용 통제.** AWS 프리뷰는 실행 복구, Claude Code 훅은 스킬 로딩 시 통제, Copilot 청구 변경은 비용 귀속에 해당한다. 어느 하나도 다른 통제를 대신하지 않는다. ChatGPT 공유 한도는 별도로 사용자 작업량에 영향을 줄 수 있다.
- **설계 도구·통상 조치 → 검증된 생산·조달 조건.** Phlexing의 가동 보도는 수율 증거가 아니며, USTR 제안은 최종 관세가 아니다. 한국 공급망 영향은 지원 공정·실제 칩과 적용 품목·면제가 확인된 뒤 판단할 수 있다.

## 5 AI Stack Signal Map

| 계층 | 확인된 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 모델·학습 | RoboRSI 가중치, MoLT 최소 구현, Agentic LongLive 논문 | 새 환경의 재현, 대규모 추론 비용, 체크포인트 가용성 |
| 데이터·평가 | Nemotron 학습 자산, Real2SimLab 인터페이스, 에이전트 평가 3건 | 실제 문서 일반화, 평가 오염 통제, 외부 재현 |
| 개발·실행 | Claude Code·ADK 릴리스, AWS 격리 실행 프리뷰 | 관리형 설정별 동작, 장애 복구 검증, 정식 제공 |
| 응용·비용 | Airflow 업그레이드 점검, ChatGPT 공유 한도, Copilot 청구 변경 예고 | 운영 정확도, 플랜별 적용, 실제 청구 |
| 물리 인프라·공급망 | Starmind 통신 일부 허가, Tau EDA 가동 보도 | 가용 컴퓨트, 테이프아웃·수율, 고객 접근 |
| 자본·정책·국내 도입 | NVIDIA 신용 관찰, Maple 시드 공개, EU 질의 공개, USTR 제안, 국내 협약·데이터 사업 | 등급 변경, 규제 결론, 품목별 관세, 새 운영 배포 |

## 6 반증·과장·재현성 감사

아래 평가·사례 9건 모두 인용 수치의 독립 재현은 **미확인**이다. 나머지 이벤트는 벤치마크 비적용이다.

| 대상 | 과제·기준선·지표 | 조건·공개 범위·오염 위험 |
|---|---|---|
| RoboRSI-27B | 조작 평균 진행 점수 34.7. 개발사 재시험 Preview 10.0, 벤치마크 팀의 Astra 27.6. 실물은 Piper 물체 놓기 6/10, Piper X 블록 쌓기 9/10. | RoboDojo Agent 프로토콜, 시드·레이아웃 각 0, 평가 시 과제별 예제·스킬·사전 절차 없음. 실물은 같은 체크포인트. Astra는 동일 팀 재시험이 아니며 작은 표본과 학습 궤적 중복 미감사가 일반화를 제한한다. |
| MoLT | OLMo3 대비 700M의 동일 검증 교차엔트로피 도달 토큰 효율 1.7배. 3B MoE의 10개 도메인 퍼플렉서티 0.75 감소, 10개 과제 정확도 2.1%p 상승. 비루프 OLMo3 대비 지연은 996.6ms 대 1,000.6ms. | 700M·1.5B 밀집 모델 및 3B MoE 사전학습은 400B 토큰. 별도 Qwen3.5-0.8B-Base 대조 실험은 100B 토큰 추가 학습. 지연은 약 113M 모델과 MoL-Hybrid-2 조건. 최소 구현만 공개됐고 오염 독립 감사는 없다. |
| Agentic LongLive | 메모리 없는 LongLive-2.0 대비 지속 상태 정확도·주인공 정체성·재방문 장소 일관성 각각 26.3·44.9·40.4점 향상. H100 생성 시간 약 1% 증가, 별도 처리량 34.3fps. | 저자 제작 LongStory-Online 25개 이야기·857개 샷, 샷마다 프롬프트 공개. 처리량은 B200 8개 노드·BF16 조건. 메모리에 별도 GPU가 필요하고 오염 독립 감사는 없다. |
| Real2SimLab | 생성된 시뮬레이션 실행 결과를 원래 벤치마크 채점기로 평가. 통합 주장에는 단일 기준선이 없으며, 6개 벤치마크·코딩 에이전트 47개·비에이전트 방법 5개는 지원 수이지 성능 향상이 아니다. | 학습 보상 주석에 평가 채점 코드 사용. 알려진 벤치마크 영상은 필터링했으나 유사 중복과 에이전트 사전학습 노출은 배제하지 못했다. |
| Nemotron 3.5 Parse | 비추측 Parse 3.5 대비 DFlash2 처리량은 동시성 1에서 7.62배, 512에서 1.52배. 지도학습 개발 체크포인트 대비 GRPO 추출 점수 66.24→71.38. 단일 패스 대비 2·3회 패스는 ParseBench +2.18·+2.46점. 치과 양식 sampled pass@1은 무적응 0.00%, 지도 미세조정 95.85%, 강화학습 후 96.58%. | 단일 패스 처리량은 2,078쪽·H200 1대·BF16. 별도 비교군 Parse 2.0은 지점당 1회, 3.5는 3회 중앙값. 치과 양식은 같은 합성 생성기의 홀드아웃 256건·건당 8샘플. 실제 서식 일반화나 광범위한 오염 통제는 미확인. 외부 검증 언급은 인용 수치의 별도 공개 재현이 아니다. |
| PROVE | 상호 검토 과제에서 동일 하네스의 미적응 Qwen3.6-27B 대비 담합률 65.0%→1.0%; 과제 성공률 변화는 검출되지 않았다. | 6개 에피소드 상호작용으로 LoRA를 학습하고 홀드아웃 순서를 10개 에피소드 범위에서 평가. 어댑터 학습과의 중복은 제한하지만 기반 모델 사전학습 노출은 배제하지 못한다. |
| EgoUseBench | 의도 변화에 맞춰 웹 과제 수행. 명시 지시 기준선 대비 온라인 일인칭 설정에서 평균 성공률이 26.3% 낮았다. 사전 녹화 맥락을 쓰는 오프라인 설정도 비교했다. | 74시간 이상 녹화에서 얻은 693개 과제. 온라인 조건은 요구 변경·관찰 갱신·에이전트 재질의를 포함한다. 학습 데이터 중복 미확인으로, 배포된 웨어러블의 실패율로 볼 수 없다. |
| EvoLink-Bench | 의존 과제에서 프레임워크 5개·모델 구성 3개·지속성 조건 3개를 비교. 과제 내 복구, 상태 갱신, 후속 재사용을 별도로 채점했다. | 사무·대화·연구형 워크플로에서 선택 코호트의 채점 슬롯 19,635개. 두 평가 수준에서 일관되게 앞선 프레임워크는 없었고, 학습 데이터 중복과 다른 과제 흐름으로의 전이는 미확인이다. |
| LG CNS–AWS 보도의 종근당 사례 | 연간 품질 검토 보고서 준비가 기존 건당 약 12시간에서 자동화 후 약 1시간으로 줄었다고 보도됐다. | Bedrock 등을 사용한 기존 제약 보고 업무 사례. 표본 크기·측정 절차·산출물 품질 통제·데이터 중복은 공개되지 않았다. 새 협약의 성과로 계산할 수 없다. |

## 7 다음 확인 일정

- **12월 30일:** Copilot의 청구 미설정 적격 조직에서 새 기본값과 실제 청구 귀속을 확인한다.
- **12월 확대 배포 예정:** ChatGPT 공유 한도의 플랜별 적용 범위, Business·Enterprise 포함 여부와 한국 배포 여부를 확인한다.
- **후속 자료 공개 시:** S&P의 NVIDIA 등급 검토 결과, USTR 반도체 세번·면제 및 기존 관세와의 관계, EU 정보 요청에 대한 기업 답변·공식 판단, FCC 잔해 처리 보류 건과 Starmind 첫 배치를 확인한다.
- **독립 시험·운영 증거 확보 시:** RoboRSI 다중 시드·레이아웃, MoLT 대규모 지연, LongLive 총 GPU 비용, Nemotron 실제 한국어 문서 적응 및 에이전트 평가의 외부 재현을 확인한다. AWS 서울 리전, LG CNS–AWS 신규 고객 배포, 삼성화재 운영 적용, 국내 기관 첫 연계 통계도 별도로 추적한다.

## 8 Coverage Audit

연구자 **10명 모두 종료**: 아래 10개 범주의 최종 결과가 번들에 있다. `검증`은 범주 연구자의 중복 제거 전 통과 건, `포함`은 전역 중복 제거 및 재분류 후 원장 건이다. `초기/표적` 수치는 `search_audit`에 기록된 통과 후보 수이며 전체 검색 후보 수가 아니다. 별도 수치가 없는 범주는 후보 수를 역산하지 않았다.

| 범주 | 초기/표적 후보 | 검증 | 포함 | 목표 3 대비 |
|---|---:|---:|---:|---:|
| Frontier Models | 0 / 1 | 1 | 1 | 2 부족 |
| AI Research | 미제공 | 3 | 3 | 충족 |
| Agents/Developer Tools | 미제공 | 3 | 3 | 충족 |
| Open Source/Repos | 미제공 | 3 | 2 | 1 부족 |
| Chips/Compute/Infrastructure | 미제공 | 3 | 3 | 충족 |
| Enterprise/Applications | 2 / 2 | 4 | 2 | 1 부족 |
| Funding/M&A/Business | 미제공 | 3 | 2 | 1 부족 |
| Safety/Evaluation/Security | 미제공 | 3 | 3 | 충족 |
| Policy/Geopolitics | 미제공 | 3 | 2 | 1 부족 |
| Korea Exposure | 미제공 | 3 | 3 | 충족 |

**부족 원인 및 두 차례 검색 기록**

- **Frontier Models:** 초기 공식 발표·언론·논문 교차 확인에서 0건. 표적 재검색에서 공식 릴리스·저장소·원 논문 날짜를 다시 확인해 SenseNova 1건만 통과했다. OpenAI GPT-6 연구 공개와 Cognition SWE-2.1은 11월 24일자였고, ChatGPT 공유 한도는 모델 변경이 아니었다. 연구자 단계부터 2건 부족했다.
- **Open Source/Repos:** 별도 차수별 수치는 없으나 날짜 검색과 GitHub 커밋·릴리스, Hugging Face 아티팩트, arXiv 원기록을 대조했다. Transformers·Ollama 후보는 시각이 창 밖이었고 일부 게시물은 기존 자산 소개이거나 가중치가 없었다. 통과 3건 중 RoboRSI를 Frontier Models에만 남겨 최종 1건 부족이다.
- **Enterprise/Applications:** 1차 2건, 표적 2건으로 연구자 단계 부족은 0이었다. 1차에서 기존 정부 조치 후속 보도와 창 밖 후보를 제외했다. 표적 검색에서 GitHub·Airflow는 통과했지만 Salesforce 전망은 11월 19일 공개였고, 삼성 로봇팀 보도는 마감 이후였다. Reuters 추출과 일부 공급사·국내 페이지 접근에 제약이 있었다. Copilot은 개발 도구, Maple은 투자로 배정해 최종 1건 부족이다.
- **Funding/M&A/Business:** 차수별 수치는 없으며 언론 아카이브와 FCC·S&P 원문을 대조했다. Anthropic IPO 종결 공개와 Character.AI 매각 이의 제기는 창 이전이었다. 이 연구자의 통과 3건 중 Starmind와 ChatGPT를 다른 범주에 남겼고, 기업 응용의 Maple 조달 공개를 이곳으로 옮겼다. 최종 1건 부족이며, Maple의 실제 조달 종결일이나 창 내 완료된 인수는 확인되지 않았다.
- **Policy/Geopolitics:** 차수별 수치는 없으며 정부 원문·법원 자료와 언론 보도를 대조했다. 뉴욕 AI 장난감 금지와 영국 NCSC 권고는 11월 24일자였고, Megaspeed 제한은 이미 11월 23일 발효됐다. Reuters·FT 직접 추출도 제한됐다. 통과 3건 중 FCC 결정을 인프라에만 남겨 최종 1건 부족이다.

**충족 범주의 검증·제외 기록**

- **AI Research:** 원 논문·프로젝트·저장소를 확인해 3건 포함. Antom 3-in-1 Transformer, NightWatch, Lazy Agents는 원 게시가 창 이전으로, 나중 요약의 날짜를 쓰지 않았다.
- **Agents/Developer Tools:** 공식 변경 기록과 GitHub 공개 시각으로 3건 포함. A2UI와 Android AI Studio는 창 이전, Codex 알파 목록은 별도 변경 내용의 근거가 부족했다.
- **Chips/Compute/Infrastructure:** 공식 문서·발표 및 기술 보도로 3건 포함. Starmind의 마감 후 The Register 후속 기사는 근거에서 제외했다. AMD Helios는 창 이전, NVIDIA 등급 관찰은 컴퓨트 계약이 아니며 Reuters 추출은 차단됐다.
- **Safety/Evaluation/Security:** arXiv v1의 정확한 시각으로 프리프린트 3건 포함. Shirudo는 창 이전, Microsoft 위협 보고서 보도는 마감 이후였고, 기존 정부 조치의 후속 보도를 새 조치로 세지 않았다.
- **Korea Exposure:** 국내 보도와 정부 첨부 원문으로 3건 포함. GPU 배정·피지컬 AI 공장 보도는 마감 이후, AI-Nutie는 포털 등록일과 달리 원문 보도 시각이 창 이전이었다.

**전역 병합 및 시간 판정:** 연구자 통과 항목은 29건이었다. RoboRSI, Copilot 조직 청구, Starmind FCC 결정, ChatGPT 공유 한도는 ID가 달라도 동일 사실로 병합해 중복 5건을 제거했다. Starmind는 허가 대상인 통신과 미가동 컴퓨트를 구분했고, ChatGPT는 제한된 Pro 배포를 인정하되 새 공유 한도의 운영 상태를 `unknown`으로 유지했다. Maple의 범주 이동은 총량을 바꾸지 않았다. 정확한 시각은 반개방 창으로, 날짜만 있는 자료는 번들의 달력일 중첩 규칙으로 판정했다. 날짜만으로 공개 시각·시간대를 추정하지 않았고, 후속 보도로 원 이벤트의 날짜를 갱신하지 않았다. 부족은 검증 범위의 한계이지 이벤트 부재의 증명이 아니다.

### Watchlist (미확인 후보)

- 후보: Walmart enables Black Friday shopping and checkout through Meta Muse (미포함 사유: <br class="report-field-break" />Evidence B. 보도는 창 안이지만 원 발표는 시각·시간대가 없는 11월 24일자이며, 별도의 창 내 출시를 확인하지 못함 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/24/walmart-teams-up-with-meta-to-bring-black-friday-deals-to-ai-agent-muse/))
- 후보: Amazon and Meta reportedly discuss allowing Muse to connect to Amazon's store (미포함 사유: <br class="report-field-break" />Evidence C. 두 연구자의 동일 후보를 병합. 비허용 매체의 익명 보도를 재인용했으며 당사자 확인, 합의, 접속 복구가 확인되지 않음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/25/amazon-and-meta-reportedly-in-talks-to-lift-blockade-on-ai-agent-muse/))

- **수록 사건 수:** 24
