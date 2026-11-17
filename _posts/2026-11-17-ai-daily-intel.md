---
layout: ai-intel
title: "AI Daily Intel — 2026-11-17"
date: 2026-11-17 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-17/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-17
- **기준 시각:** 2026-11-17T06:00:00+09:00
- **수집 구간:** [2026-11-16T06:00:00+09:00, 2026-11-17T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 6

## 1 오늘의 AI 한 문장

정확한 시간창을 확인할 수 있는 근거에서는 과학 에이전트의 불확실성 판단, 순차 의사결정의 안전 제약, 로컬 추론의 정확성 수정과 한국 기관의 AI 도입 준비가 확인됐지만, 독립 재현이나 실운영 성과까지 입증된 것은 아니다.

이 보고서는 제공된 번들만 사용했다. 연구자들은 날짜만 있는 11월 16~17일 자료에 달력일 중첩 규칙을 적용했지만, 편집 지시의 정확한 반개방 시간창과는 검증 수준이 다르다. 따라서 발표 시각이 없어 시간창 소속을 확정할 수 없는 항목은 본문 원장에서 제외했다. 이는 해당 발표가 거짓이거나 시간창 밖이라는 판정이 아니라, 정확한 시간창 충족 여부의 미확인이다.

Evidence A는 공식 문서·논문·저장소 등 일차 근거, B는 신뢰할 만한 보도, C는 미확인·보조 후보를 뜻한다. A도 주장 자체의 독립 검증을 의미하지 않는다.

## 2 핵심 신호 5

1. 과학 에이전트는 도구 실행 능력과 물리적 오류를 알아차리는 능력을 따로 평가해야 한다. SciResearch-Eval 저자들은 누락된 물리가 있는 조건에서 다수 모델의 명목상 95% 구간 포괄률이 20~62%에 그쳤다고 보고했다. 모델 간 추론 예산 차이와 독립 재현 부재가 해석을 제한한다. <br class="report-field-break" />Evidence A.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.21541)


2. 순차 안전성은 시작 시점의 평균 비용 제한만으로 충분하지 않을 수 있다. subprocess-constrained MDP 논문은 도달 가능한 모든 이력 이후의 계속 비용에 제약을 부과한다. 이론적 보장이지 현장 안전성 입증은 아니다. <br class="report-field-break" />Evidence A.

**출처:** [arxiv.org](https://arxiv.org/abs/2611.21471)


3. 로컬 추론에서는 속도보다 먼저 정확성을 확인해야 한다. llama.cpp b12441은 WebGPU가 마스크의 head 차원을 무시해 잘못된 결과를 내는 문제와 공유 메모리 계산을 수정했다. 수정 공개와 독립적인 하드웨어 재현은 별개다. <br class="report-field-break" />Evidence A.

**출처:** [github.com](https://github.com/ggml-org/llama.cpp/releases/tag/b12441)


4. 한국의 AI 도입 신호는 출시 완료보다 통제·준비 단계에 가깝다. 카카오는 AI 공통 약관을 예고했고, IBK는 내부 코딩 에이전트 구축을 발표했으며, 소방청은 해안 고립 위험 예측 서비스를 공개했다. 동의 체계, 내부 실행 통제, 현장 검증이 다음 관문이다. <br class="report-field-break" />Evidence B.

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261116111500017)

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261116110200002)

**출처:** [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261116040100530)


## 3 영역별 AI 브리프

원장은 전역 중복 제거 후 한 영역에만 배치했다. 상태는 번들의 일곱 필드를 각각 유지했으며, unknown은 no와 다르다.

### Frontier Models

검증 통과 이벤트 없음.

연구자는 공식 발표 3건을 확보했으나 모두 날짜만 있다. GPT-6.2와 Astra for Law의 11월 17일 발표가 06:00 이전인지, 외부평가 계약의 11월 16일 발표가 시작 시각 이후인지 확정할 수 없다. 모델 출시·법률 구성·평가 계약의 존재와 정확한 시간창 적합성을 구분했다.

### AI Research

  제목: SciResearch-Eval, 결함 있는 시뮬레이터를 다루는 과학 에이전트의 판단과 불확실성 평가

**Evidence:** A

  source URL: [arxiv.org](https://arxiv.org/abs/2611.21541)
  보조 근거: [github.com](https://github.com/Btwestyo/sciresearch-eval)
  발표 시각: 2026-11-16T18:27:09Z

  열 물성 실험을 설계하고 95% 구간을 보고하는 과제로, 시뮬레이터의 해상도 부족이나 누락된 물리를 알아차리는지 평가한다. 저자들은 93개 보류 과제와 2,511개 에피소드 결과를 보고했다. 누락된 물리 조건의 포괄률은 다수 모델에서 20~62%, Astra에서 94%, Fable 5.2에서 99%로 보고됐다.

  연구 결과와 저장소 공개를 하나의 사건으로 병합했다. code 상태는 동반 저장소를 추출한 Open Source/Repos 연구자의 보강 근거를 반영한다. 원래 보류 과제와 정답 노출 가능성이 있는 에피소드 결과는 공개되지 않아 동일 조건 재현에는 한계가 있다.

**한국 연결:** 자율실험실·AI-for-science 팀의 평가 설계에 참고할 수 있으나 국내 참여·도입은 확인되지 않았다.

**다음 확인:** 동일 추론 예산 비교, fresh-task 실행, 보류 평가 접근, 독립 재현.


  제목: 모든 도달 가능한 이력 이후의 안전 제약을 요구하는 MDP 정식화

**Evidence:** A

  source URL: [arxiv.org](https://arxiv.org/abs/2611.21471)
  보조 근거: [github.com](https://github.com/jrgan/VSI)
  발표 시각: 2026-11-16T17:48:54Z

  Jiarui Gan과 Debmalya Mandal은 상태별 경계에 맞춰 모든 도달 가능한 이력 이후의 할인 계속 비용을 제한하는 subprocess-constrained MDP를 제시했다. 정지 정책은 엄격하게 열등할 수 있고 그 근사 최적화도 NP-hard인 반면, 특정 허용오차 아래 암묵적으로 표현한 이력 의존 정책의 다항시간 근사 최적화가 가능하다고 보고한다.

  동반 구현 공개를 별도 사건으로 세지 않았다. 저장소 확인 근거에 따라 code는 yes로 병합했다. 구현에는 Python 3.10 이상과 유효한 Gurobi 라이선스가 필요하며, 저장소 전체의 최초 생성 시점이나 모든 코드의 신규성을 뜻하지 않는다.

**한국 연결:** 강화학습·로봇·안전 제어 연구의 방법론적 참고 대상이다. 국내 운영 적용은 확인되지 않았다.

**다음 확인:** 정리의 가정, 허용오차 의존성, 정책 표현, 새 SCMDP 구현 범위와 예제 재현.


### Agents/Developer Tools

검증 통과 이벤트 없음.

Copilot 사용자화 출처 통제, VS Code Local harness 폐기 예고, Copilot 모델 지원 종료의 공식 근거는 확보됐지만 모두 11월 16일 날짜만 있다. 발표 시각을 확인하기 전에는 정확한 시간창 내 사건으로 확정하지 않는다. 향후 폐기와 현재 제거, 모델 선택기 제외와 예외적 fallback 접근도 구분해야 한다.

### Open Source/Repos

  제목: llama.cpp b12441, WebGPU head별 attention mask와 공유 메모리 계산 수정

**Evidence:** A

  source URL: [github.com](https://github.com/ggml-org/llama.cpp/releases/tag/b12441)
  발표 시각: 2026-11-16T14:22:09Z

  프리릴리스는 PR #32394를 포함한다. 유지관리자 설명에 따르면 기존 WebGPU flash-attention shader는 마스크의 head 차원을 무시해 ne[2]가 1보다 큰 경우 잘못된 결과를 낼 수 있었다. 수정은 head별 인덱싱과 공유 메모리 추정·연산 지원 검사를 shader 동작에 맞춘다.

  성능 향상 벤치마크가 아니라 정확성과 자원 제한 처리 수정이다. 다운로드 가능한 산출물의 존재는 실제 하위 제품 적용이나 독립 재현을 뜻하지 않는다.

**한국 연결:** 브라우저·로컬 추론 개발자에게 잠재적으로 관련되지만 국내 사용 사례는 확인되지 않았다.

**다음 확인:** WebGPU 하드웨어에서 다중 head mask와 혼합 K/V 저장 사례 재현, 하위 애플리케이션 반영 여부.


SciResearch-Eval과 SCMDP의 코드 공개는 AI Research 원장에 병합했다. Hugging Face–OpenRouter 통합은 날짜 근거가 상충하여 제외했다.

### Chips/Compute/Infrastructure

검증 통과 이벤트 없음.

Rubin HPC, DGX Spark HPC Developer Kit, Lambda의 CPO 배치 공개는 모두 11월 16일 날짜만 제공한다. 공급사 발표의 존재는 확인됐지만 정확한 시간창 소속은 확인되지 않았다. 특히 Rubin HPC의 2028년 공급 예정과 DGX Spark 키트의 판매 가능, Lambda의 배치 주장을 같은 성숙 단계로 취급하지 않는다.

### Enterprise/Applications

검증 통과 이벤트 없음.

Google Maps, Audible, Dreamteam의 자료는 모두 날짜 단위 근거다. 지역별 순차 배포나 유료 고객 보도를 부정하지 않지만, 정확한 발표 시각을 확보하지 못했다. Dreamteam은 Funding/M&A/Business의 동일 사실과 전역 병합 대상으로 처리했다.

### Funding/M&A/Business

검증 통과 이벤트 없음.

Corma 투자, Dreamteam 투자, Zoox–Uber 서비스 공개의 날짜 단위 근거는 있으나 시간창 내 시각을 확정할 수 없다. 투자금·기업가치·매출 목표는 실현 매출과 구분한다. Zoox의 규제 상태는 과거 Nevada 허가를 가리키며 이번 시간창의 신규 승인으로 보지 않는다.

### Safety/Evaluation/Security

검증 통과 이벤트 없음.

아동 안전 도구, 외부평가 계약, GPT-6.2 시스템 카드 모두 날짜만 확인된다. 시스템 카드의 안전성 지표는 중요하지만, 공개 시각 미확인 상태에서 핵심 원장에 넣지 않는다. 외부평가 계약은 Frontier Models·AI Research의 중복 사건이며 완료된 평가나 안전성 인증이 아니다.

### Policy/Geopolitics

검증 통과 이벤트 없음.

BIS 원격 컴퓨트 규칙, EU FRIA 초안 의견수렴, Apply AI Summit 의제 발표는 정부 원문으로 뒷받침되지만 모두 날짜 단위다. BIS 발표만으로 시행일·예외·한국 사업자의 구체적 의무를 확정할 수 없고, 정상회의 예고는 완료된 회의나 새 구속적 규정이 아니다.

### Korea Exposure

  제목: 카카오, 12월 16일 시행 예정 AI 서비스 공통 약관 마련

**Evidence:** B

  source URL: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261116111500017)
  발표 시각: 2026-11-16T14:36:00+09:00

  연합뉴스에 따르면 약관은 카카오톡 내 Kanana와 Kanana Space에 적용될 예정이다. 사용자는 데이터 처리 정보를 확인하고 AI 기능을 개별 활성화할 수 있으며, AI 약관에 동의하지 않아도 기존 카카오톡 서비스를 계속 이용할 수 있다.

  이는 약관 발표이지 시행 완료나 Kanana Space 출시가 아니다. Kanana Space 비공개 시험은 12월 계획이다.

**한국 연결:** 국내 메시징 생태계의 동의·데이터 처리 경계에 직접 관련된다.

**다음 확인:** 최종 약관, 데이터 범주, 12월 16일 시행, 별도의 비공개 시험 개시·자격.


  제목: IBK기업은행, 내부 인프라 기반 Geni-Code 코딩 에이전트 구축 발표

**Evidence:** B

  source URL: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261116110200002)
  발표 시각: 2026-11-16T14:26:00+09:00

  임직원의 자연어 요청으로 자료를 분석하고 코드를 작성하는 내부 도구다. 본부 AI 전환 담당자에게 먼저 배포한 뒤 확대한다는 계획이 보도됐으나, 초기 배포 완료나 실운영 업무 수행은 확인되지 않았다.

  보안 제약에 대응한 내부 구축 사례이며 생산성 향상률, 모델 정보, 공개 소스, 독립 검증 결과는 제시되지 않았다.

**한국 연결:** 국내 금융기관의 내부 개발·보안 통제와 직접 관련된다.

**다음 확인:** 실제 배포일·활성 사용자, 모델·실행 권한·감사 통제, 운영 업무 적용.


  제목: 소방청, AI 해안 고립 위험 예측·구조 지원 서비스 개발 공개

**Evidence:** B

  source URL: [www.yna.co.kr](https://www.yna.co.kr/view/AKR20261116040100530)
  발표 시각: 2026-11-16T12:00:00+09:00

  2017~2025년 해안 사고 5,800여 건과 조석 예측을 활용해 장소·시간별 고립 위험을 추정한다. 119 빅데이터 분석 시스템을 통한 제공이 설명됐지만 전국 운영 개시 완료는 명시되지 않았다.

  10월 28일~11월 6일 현장 시험은 과거 활동이며 이번 시간창의 신규 사건으로 세지 않았다. 예측 정확도나 인명 피해 감소는 입증되지 않았다.

**한국 연결:** 소방청·지역 소방본부·태안 현장 대응과 국립해양조사원 조석 정보에 직접 연결된다.

**다음 확인:** 실제 운영 개시, 오경보·누락률, 검증 설계, 실제 구조 활용 여부.


## 4 기술→산업 전달경로

- **과학적 판단 평가 → 자율실험실 검증 기준: SciResearch-Eval은 실험 수행 성공과 잘못된 시뮬레이터를 의심하는 능력을 분리한다.** 산업 적용 전에는 불확실성 보정과 실패 보고를 함께 평가해야 한다. 실제 생산성 개선은 미확인이다.
- **이력별 안전 제약 → 로봇·계획 시스템 설계: SCMDP는 평균적으로 안전한 정책이 특정 상황 이후에도 안전한지 묻는다.** 이론에서 운영으로 넘어가려면 가정 적합성, 계산 비용, solver 접근성을 검증해야 한다.
- **추론 backend 수정 → 애플리케이션 신뢰성: WebGPU 수정은 조용히 잘못된 결과를 내는 경로를 다룬다.** 코드 공개 이후 하드웨어 재현과 하위 제품 반영이 필요하다.
- **내부 구축 → 금융 개발 업무: IBK 사례의 다음 단계는 사용자 배포, 최소 권한 실행, 코드 검토와 감사다.** 구축 발표만으로 운영 자동화 효과를 추정하지 않는다.
- **데이터·동의 통제 → 소비자 AI 확장: 카카오 약관은 기능 활성화와 데이터 처리 경계를 설정한다.** 시행·실제 화면·사용자 선택권 확인이 필요하다.
- **사고 자료·조석 예측 → 구조 의사결정: 소방청 서비스는 위험 추정을 현장 판단에 연결하려 한다.** 오경보와 미탐지, 실제 활용 기록이 산업적 가치의 검증 관문이다.

## 5 AI Stack Signal Map

| 계층 | 포함된 신호 | 확인된 단계 | 아직 확인되지 않은 단계 |
|---|---|---|---|
| Frontier model | 검증 통과 이벤트 없음 | 날짜 단위 발표 근거만 확보 | 정확한 공개 시각·시간창 적합성 |
| 평가·연구 | SciResearch-Eval | 논문·구현 공개 | 독립 재현·동일 예산 비교 |
| 안전한 의사결정 | SCMDP | 이론·동반 구현 공개 | 가정 검토·예제 재현·현장 효과 |
| 추론 runtime | llama.cpp WebGPU 수정 | 프리릴리스·코드 공개 | 하드웨어 재현·하위 제품 적용 |
| 개발 업무 | IBK Geni-Code | 내부 구축 발표 | 배포 완료·실운영·생산성 |
| 서비스 거버넌스 | 카카오 AI 공통 약관 | 미래 시행 약관 발표 | 시행 완료·비공개 시험 개시 |
| 공공 업무 | 소방청 해안 구조 지원 | 개발·과거 현장 시험 보도 | 전국 운영·예측 성능·구조 효과 |
| 컴퓨트·자본·규제 | 검증 통과 이벤트 없음 | 날짜 단위 공식 자료·보도 확보 | 정확한 시간창 적합성 |

## 6 반증·과장·재현성 감사

### 포함 연구의 벤치마크·이론 감사

SciResearch-Eval:
- Task: 결함 가능성이 있는 열 시뮬레이터로 실험을 설계하고 물성 추정치와 95% 구간을 보고한다.
- Baseline: 9개 모델과 기본·최대 reasoning effort 조건. GPT-6 Astra, Fable 5.2, Claude 5.5 계열 및 이전·open-weight 모델을 포함한다.
- Metric: 구간 점수, 명목상 95% 구간의 실제 포괄률, 과정 진단과 추론·토큰 비용.
- Conditions: 93개 보류 과제, 2,511개 에피소드. 고노력 Opus 조건은 추론량이 13~31배였다는 저자 보고가 있어 단순 순위 비교를 제한한다.
- **Disclosure/contamination: 개발 과제·새 과제 생성기·분할 checksum·집계 figure data와 contamination canary가 공개됐다고 저장소 추출 결과가 설명한다.** 그러나 원래 보류 과제와 답을 노출할 에피소드 결과는 제외된다. Canary 존재만으로 오염 부재가 증명되지는 않는다.
- Independent replication: unknown. 같은 저자의 사전등록 fresh-split 실험은 독립 재현이 아니다.

SCMDP:
- **실증 성능 비교가 아니라 이론적 복잡도·근사 보장 발표다.** task/baseline/metric 기반 성능 우위 주장은 적용하지 않는다.
- **가정, 허용오차, 이력 의존 정책의 표현을 확인해야 한다.** 공개 구현이나 NeurIPS 게재 예정이라는 설명이 정리 검증·실운영 안전성의 대체물은 아니다.
- Independent replication: unknown.

llama.cpp:
- **벤치마크 우위가 아닌 정확성 수정이다.** 영향받는 mask 형태와 메모리 조건에서 회귀 시험이 필요하다.
- 코드·프리릴리스 공개는 확인됐으나 독립 재현은 unknown이다.

한국 사례:
- **IBK의 생산성 수치나 소방청의 예측 정확도·피해 감소 수치는 제공되지 않았다.** 자료 건수나 구축 발표를 성능 지표로 대체하지 않는다.
- 카카오 약관은 계약 거버넌스 사건으로 성능 벤치마크 대상이 아니다.

### 본문에서 제외한 주요 정량 주장

다음은 시간 근거 부족으로 제외한 자료에 대한 감사이며, 핵심 신호나 포함 사건으로 승격하지 않는다.

- **GPT-6.2: 과제는 전문 workflow·과학 terminal·coding·멀티모달 제작이다.** 비교군은 평가마다 GPT-6 Astra, GPT-6.1 Sol, Fable 5.2로 다르다. Agents’ Last Exam의 5.2·5.5점 개선과 Terminal-Bench-Science의 9%p 개선은 공급사 보고다. Fable 비교에서 fallback 사용 9개 과제를 제외했고 harness도 다를 수 있다. 비용은 과제당 비교이며 토큰 단가와 동일하지 않다. 오염 통제·전체 sampling 설정·독립 재현은 미확인이다.
- **Astra for Law: 미국 법률 과제가 대상이다.** LAB-AA 20.8%는 GPT-6.2 Astra 15.0%, Muse Wonder Full 13.1%와 비교된다. 120개 과제·24개 법 영역의 전 기준 통과 조건이며, 다른 법률 평가에는 별도의 검색·초안 조건과 AI pairwise grader가 쓰인다. 검색 index와 지침도 바뀌었으므로 개선을 기본 모델 가중치에만 귀속할 수 없다. 원 평가자 자료·오염 통제·독립 재현은 미확인이고 일부 불확실성 구간은 겹친다.
- **GPT-6.2 시스템 카드: 약 17,000개 필터링된 직원 Codex 과제의 모의 배포에서 전체 misalignment flag는 Astra 4.96% 대 3.19%, Sol 6.78% 대 5.13%로 보고됐다.** 도구 simulator·monitor·두 번째 grader에 의존하며 실제 고객 사고율이 아니다. level-4 flag가 없었다는 결과도 심각한 실패 가능성의 부재를 증명하지 않는다. 오염 통제·불확실성 추정·독립 재현은 미확인이다.
- **아동 안전 분류기: 내부 기존 보호 장치와의 비교에서 유사 탐지 수준에 flag 48% 감소를 보고한다.** 파트너의 72% 확인률, 4건 중 1건 계정 제재, 특정 그림·애니메이션 90% 탐지는 서로 다른 과제·자료·지표다. 동일 baseline으로 합칠 수 없으며 표본 수·threshold·신뢰구간·오염 통제·독립 재현이 확인되지 않았다.
- **Lambda CPO: 기존 pluggable optics 대비 지연 약 4~10% 감소와 온도 중앙값 36°C 대 51°C는 회사 보고다.** 비교 장비·traffic·반복·통계적 불확실성이 부족하다. 별도의 최대 5배 전력 효율·15배 신뢰성 주장을 Lambda 실측으로 바꾸지 않는다. 학습 오염은 해당 없음, 독립 재현은 미확인이다.

### 근거·접근·상업성 감사

- **연구자들은 관련 없는 검색 응답이 반복됐다고 보고했다.** 검색 무결성 문제는 발견 범위의 한계이지 사건 부재의 증거가 아니다.
- Reuters 차단, 일부 HTTP 404·429, 잘린 release listing이 대체 출처 확인을 제한했다.
- OpenAI·NVIDIA 등 단일 회사 근거 집중을 독립적 합의로 해석하지 않는다.
- 유료 고객 보도는 매출액 공개와 다르며, 투자금·기업가치는 매출이 아니다.
- 접근 신청 자격은 자동 접근이 아니고, 판매 가능은 설치 문서 공개나 고객 운영을 뜻하지 않는다.
- **날짜만 있는 발표는 이번 정확한 시간창에 들어왔다는 확정 근거가 아니다.** Hugging Face–OpenRouter는 초기 index의 11월 15일과 후속 발표의 11월 16일 근거까지 상충한다.

## 7 다음 확인 일정

| 시점 | 확인 대상 | 통과에 필요한 근거 |
|---|---|---|
| 다음 조사 패스 | 날짜 단위로 제외한 발표 전체 | 원문 시각·timezone 또는 신뢰할 수 있는 공개 시각 기록 |
| 다음 재현 패스 | SciResearch-Eval | 환경 실행, 동일 추론 예산, fresh-task 평가, 보류 평가 접근 |
| 다음 재현 패스 | SCMDP·VSI | 정리 가정 검토, Gurobi 조건, 새 구현 범위와 예제 실행 |
| 다음 회귀 시험 | llama.cpp b12441 | 해당 WebGPU mask·메모리 사례의 수정 전후 결과 |
| 다음 기관 확인 | IBK·소방청 | 실제 배포일·사용 범위·운영 기록·검증 지표 |
| 2026년 11월 중 | 소방청 서비스 보완 | 예정된 추가 정교화의 결과와 운영 상태 |
| 2026년 12월 | Kanana Space | 비공개 시험의 실제 개시일·참여 자격 |
| 2026-12-16 | 카카오 AI 공통 약관 | 최종 약관 시행과 기능별 동의 화면 |

시각 확인 후 재검토할 일정성 자료도 있다. EU FRIA 시험 참여 의향 마감은 2026-12-04, 의견 마감은 2027-01-15로 제시됐다. VS Code Local harness 제거는 2027년 2월 예정이다. 이 일정은 제외 자료의 후속 확인 정보이며 해당 발표를 이번 원장에 포함했다는 뜻이 아니다.

## 8 Coverage Audit

### 완료·검증 기준

10개 연구자 모두 terminal completion: 완료. 이 표시는 번들에 최종 결과가 제출됐다는 뜻이며, 저장소 실행·benchmark 재현·도구 기반 JSON 검증을 완료했다는 뜻이 아니다.

아래의 ‘연구자 검증’은 연구자 자신의 날짜 중첩 규칙 아래 채택한 이벤트 항목 수다. ‘시간창 확인’은 정확한 시각으로 이번 시간창에 속함을 확인한 수이며 중복을 포함할 수 있다. ‘포함’은 전역 병합 후 이 보고서 원장을 해당 영역에 배치한 수다. 후보 총수는 별도 집계가 없어 연구자 검증 수로 대체하지 않았다.

| Category | 완료 | 전체 후보 수 | 연구자 검증 | 시간창 확인 | 포함 | 목표 3건 대비 부족 |
|---|---|---|---|---|---|---|
| Frontier Models | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| AI Research | 완료 | 미집계 | 3 | 2 | 2 | 1 |
| Agents/Developer Tools | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| Open Source/Repos | 완료 | 미집계 | 4 | 3 | 1 | 2 |
| Chips/Compute/Infrastructure | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| Enterprise/Applications | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| Funding/M&A/Business | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| Safety/Evaluation/Security | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| Policy/Geopolitics | 완료 | 미집계 | 3 | 0 | 0 | 3 |
| Korea Exposure | 완료 | 미집계 | 3 | 3 | 3 | 0 |

### 두 패스와 영역별 부족 사유

Open Source/Repos만 명시적 search_audit를 제공했다: initial_count 1, targeted_count 3, verified_count 4, shortfall 0. 이는 패스별 확보 성과이며 전체 후보 수가 아니다. 나머지 9개 영역은 coverage_notes에 검색 확장·직접 추출 경로가 있으나 별도 search_audit와 1차·2차 계수는 없다. 없는 두 패스 수치를 만들어내지 않았다.

- **Frontier Models: 초기 광역·날짜·Reuters·TechCrunch 검색이 부정확했고 공식 페이지 추출로 보완했다.** 패스별 수치는 없다. 달력일 기준 3건과 달리 시간 확인 0건이다. Gemini Hydrogen·Carbon과 Anthropic의 이전 발표는 기간 밖이거나 갱신일을 사건일로 대체할 수 없어 제외됐다.
- **AI Research: 날짜·arXiv 검색 후 recent listing·논문·공식 발표를 직접 추출했다.** 패스별 수치는 없다. 논문 2건은 시각이 확인됐고 외부평가 계약은 날짜만 있어 제외했다. 과거 AIDE 논문과 단순 접근 확대를 끌어와 부족분을 채우지 않았다.
- **Agents/Developer Tools: 일반·GitHub·타사·한국어 검색과 공식 changelog 직접 추출을 수행했다.** 패스별 수치는 없다. 3건 모두 날짜만 있어 정확한 시간창 검증이 남았다. 무관한 소비자·금융 headline을 개발 도구 사건으로 승격하지 않았다.
- **Open Source/Repos: 초기 1건 뒤 targeted pass에서 3건을 확보했다.** 그중 연구 논문·코드 공개 2건은 AI Research와 동일 사건이므로 병합했다. Hugging Face 통합은 날짜 상충과 시각 미확인으로 제외했다. vLLM은 명확히 cutoff 이후다. 다른 주요 프로젝트의 최신 release는 기간 밖이거나 충분한 신규 근거가 없었다.
- **Chips/Compute/Infrastructure: 광역·매체·한국어 검색 뒤 NVIDIA·AMD·Samsung을 직접 확인했다.** 패스별 수치는 없다. NVIDIA 3건은 날짜만 있고, AMD 기사 본문 추출은 404였다. 삼성의 무관한 기사나 기간 밖 서울 행사를 대체재로 쓰지 않았다.
- **Enterprise/Applications: 영어·한국어·공식 출처 검색 뒤 publisher index·개별 발표·고객 사례를 확인했다.** 패스별 수치는 없다. 채택 자료 3건은 시각이 없고 Dreamteam은 금융 영역과 중복이다. Salesforce·ZDNet Korea의 429와 기간 밖 KT 사례가 추가 검증을 제한했다.
- **Funding/M&A/Business: 초기 검색이 부정확해 확장 검색·TechCrunch archive·Corma 원문으로 보완했다.** 패스별 수치는 없다. 3건 모두 날짜 단위다. Corma 후속 TechCrunch 기사는 cutoff 이후이며, 과거 Anthropic IPO 발표를 신규 자금조달로 재사용하지 않았다.
- **Safety/Evaluation/Security: 날짜·Reuters·arXiv·한국어 검색 뒤 OpenAI·Anthropic·NIST를 직접 확인했다.** 패스별 수치는 없다. 3건은 단일 회사의 날짜 단위 공개이고 외부평가 계약은 다른 영역과 중복이다. 이전 보안 발표나 newsroom freshness를 신규 사건으로 세지 않았다.
- **Policy/Geopolitics: 미국·EU·Reuters·한국어 검색 뒤 두 정부 출처군의 listing과 원문을 추출했다.** 패스별 수치는 없다. 공식 자료 3건의 정확한 발표 시각이 없다. 개별 원문을 확인하지 않은 다른 headline으로 부족분을 채우지 않았다.
- **Korea Exposure: 한국어·영어·기관별 검색 후 연합뉴스 archive와 개별 기사를 직접 확인했다.** 패스별 수치는 없다. 3건 모두 시각이 있어 포함했다. cutoff 이후 Upstage–Cohere·Samsung XR 기사와 본문 근거가 부족한 부처 자료는 제외했다.

### 전역 중복 제거·제외 기록

- **외부 embedded assessment 계약은 Frontier Models·AI Research·Safety/Evaluation/Security의 같은 사건이다.** 하나로 묶은 뒤 시간 근거 부족으로 제외했다.
- **SciResearch-Eval 논문과 구현 공개는 하나로 합쳐 AI Research에 배치했다.** 구현 상태는 확인된 저장소 근거로 보강했다.
- **SCMDP 논문과 VSI 공개도 하나로 합쳐 AI Research에 배치했다.** 저장소 최초 생성이나 전 코드의 신규성을 주장하지 않는다.
- **Dreamteam의 CRM·투자 보도는 같은 기사·같은 사건으로 병합했다.** 시간 근거 부족으로 원장에는 포함하지 않았다.
- **GPT-6.2 출시와 시스템 카드는 같은 출시 묶음의 성능·안전 근거로 함께 검토하되, 별도 검증 사건 수를 늘리는 데 사용하지 않았다.** 두 자료 모두 정확한 시각은 미확인이다.
- Astra for Law는 기본 모델 출시와 다른 구성·접근 정책 변경이지만 시간 근거 부족으로 제외했다.
- **Hugging Face–OpenRouter 통합은 초기·후속 날짜 근거가 상충한다.** 후속 결과만 골라 날짜를 확정하지 않았다.
- **날짜 단위 제외 자료를 C로 자동 강등하지 않았다.** 출처의 <br class="report-field-break" />Evidence A/B와 시간창 적합성 미확인은 별개의 축이다.
- 원장 밖 언급·일정·감사 항목·watchlist는 Included Event count에 포함하지 않는다.

### Watchlist (미확인 후보)

- 후보: vLLM v0.34.0 changes GPU runner and cache defaults (미포함 사유: <br class="report-field-break" />Evidence C; 공개 시각은 2026-11-17T08:22:00+09:00으로 06:00 cutoff 이후이며 성능 주장도 독립 검증되지 않음 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/vllm-project/vllm/releases/tags/v0.34.0))
- 후보: vLLM v0.34.0 release published after the evidence window (미포함 사유: <br class="report-field-break" />Evidence B; 위 후보와 같은 release의 중복 관측이며 공개 시각이 cutoff 이후임. tag 생성 시각으로 대체하지 않음 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/vllm-project/vllm/releases?per_page=5))

- **수록 사건 수:** 6
