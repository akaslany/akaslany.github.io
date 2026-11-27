---
layout: ai-intel
title: "AI Daily Intel — 2026-11-27"
date: 2026-11-27 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-27/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-27  
- **기준 시각:** 2026-11-27T06:00:00+09:00 (Asia/Seoul, 미포함)  
- **수집 구간:** [2026-11-26T06:00:00+09:00, 2026-11-27T06:00:00+09:00) Asia/Seoul  
- **조사 범위:** 10/10 최종 결과 제출  
- **수록 사건 수:** 24

## 1 오늘의 AI 한 문장

모델 가중치와 평가 산출물은 외부 검증의 출발점을 넓혔지만, 한국의 GPU 배정은 아직 계획이고 벤치마크 성과는 독립 재현 전이다.

## 2 핵심 신호 5

1. **한국 NIPA, 2027년 GPU 16,832개 배정계획 공개 — <br class="report-field-break" />Evidence B.** B300은 1월, Vera Rubin은 3·6월 서비스가 목표다. 신규 구매나 현재 서비스 개시가 아니라, 이미 확보한 자원의 배정 계획이다. [출처](https://zdnet.co.kr/view/?no=20261126162650)
2. **Sage-Med-Preview 가중치 공개 — <br class="report-field-break" />Evidence A.** 날짜가 확인되는 저장소 커밋에 가중치와 추론 안내가 포함됐다. 이전 논문의 재노출과는 별개이며, 임상 성능이나 허가를 뜻하지 않는다. [출처](https://huggingface.co/api/models/Sage-Med/Sage-Med-Preview/commits/main)
3. **U-MoLT 최소 구현 공개 — <br class="report-field-break" />Evidence A.** 반복 층의 어텐션 메모리 재사용을 실험할 코드가 나왔다. 저자 보고의 토큰 효율 개선은 대규모 학습 레시피와 평가 체크포인트가 확인되기 전까지 일반화할 수 없다. [출처](https://github.com/hustvl/MoLT)
4. **머신코드 생성 비교, 검증 산출물 공개 — <br class="report-field-break" />Evidence A.** 생성 엔진과 참조 출력·검증 스크립트를 공개했다. 단일 CPU·과제에 서로 다른 에이전트 실행틀을 쓴 결과이므로 모델 종합 순위로 읽을 수 없다. [출처](https://github.com/alesha-pro/machine-code-llm-battle)
5. **SkillsBench 재분석, 채점기와 실행 편차의 영향 확인 — <br class="report-field-break" />Evidence A.** 평균 개선과 개별 과제의 효과는 구분해야 한다. 다중검정 보정 후 유의하게 남은 과제별 하락은 없었으며, 이는 하락이 불가능하다는 뜻은 아니다. [논문](https://arxiv.org/abs/2611.33943) · [감사 산출물](https://github.com/rrrrr4788/skillsbench-lift-reanalysis)

## 3 영역별 AI 브리프

Evidence A는 주로 논문·저장소·공식 문서가 뒷받침하는 공개 사실, B는 귀속 가능한 보도가 뒷받침하는 사실, C는 핵심 근거가 부족한 후보를 뜻한다. 공개 근거의 등급은 성능 검증 등급이 아니다. 상태는 각각 별개이며, `unknown`은 확인되지 않았다는 뜻이다.

### Frontier Models

  - **Evidence A** | <br class="report-field-break" />출처: [github.com](https://github.com/hustvl/MoLT)
  - 11월 26일 공개된 최소 BlaGPT 구현은 공유 층을 반복 통과할 때 어텐션 메모리를 재사용한다. 코드는 공개됐지만 평가 체크포인트와 전체 대규모 학습 레시피의 가용성은 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [github.com](https://github.com/alesha-pro/machine-code-llm-battle)
  - Alexey Fateev가 Gemini 4 Neon과 Claude Opus 5.5의 생성 엔진, 참조 출력, 검증 스크립트를 공개했다. 가용성은 평가 산출물에 해당하며 모델 가중치 공개를 뜻하지 않는다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### AI Research

  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.CL/new)
  - MGMem(2611.33174)은 반복 언급을 그래프로 색인해 생성 요약 대신 원문 대화를 검색한다. 공개 코드와 평가 스크립트는 확인됐지만 저장소 공개일과 한국어 성능은 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.AI/new)
  - 출력 후보 선택 연구(2611.33161)에서 저자들은 개선의 대부분을 필수 제약 검사와 후보 간 비교에 귀속했다. 완화된 검사 항목의 자동 선택·가중은 더 단순한 방식보다 추가 이점을 보이지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.LG/new?skip=0&show=25)
  - MultiNet v2.0-Gridworld(2611.33162)는 합성 미로에서 장면 오독, 행동 순서 오류, 오류 복구 실패를 구분한다. 공개가 확인된 것은 프리프린트다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Agents/Developer Tools

  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.SE/recent?skip=0&show=25) · [arxiv.org](https://arxiv.org/abs/2611.34875)
  - 해결에 성공한 사례에서 에이전트 패치는 더 많은 줄을 바꿨지만, 단위 변경의 평균 테스트상 필요성은 사람 패치보다 낮지 않았다. 변경 줄 수만으로 과잉 수정을 판단하기 어렵다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.SE/recent?skip=0&show=25) · [arxiv.org](https://arxiv.org/abs/2611.34617)
  - 전체 성공률을 추정할 때와 실패를 빨리 발견할 때 유리한 과제 표본이 달랐다. 실패 탐지용 표본의 결과를 전체 성공률로 해석하면 안 된다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/abs/2611.33943) · [github.com](https://github.com/rrrrr4788/skillsbench-lift-reanalysis)
  - 공개 실험 재분석에서 채점기 구현과 실행 간 편차가 과제별 스킬 효과 해석을 어렵게 했다. 코드와 감사 산출물이 공개됐다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Open Source/Repos

  - **Evidence A** | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/api/models/Sage-Med/Sage-Med-Preview/commits/main)
  - Shanghai AI Laboratory의 의료 멀티모달 프리뷰 모델(총 35B, 활성 3B) 가중치와 vLLM 안내가 11월 26일 커밋으로 공개됐다. 추론 코드와 설정 공개가 전체 학습 코드·데이터 공개를 뜻하지 않으며, 한국 배치도 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/Kling-Keye/VibeVideoAgent/releases/tags/v0.2.1)
  - Kling-Keye가 영상·음향 초안 렌더를 비교하는 MIT 라이선스 MCP 도구의 v0.2.1 소스, 설치용 wheel, 오프라인 테스트를 공개했다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Chips/Compute/Infrastructure

  - **Evidence B** | <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126162650) · [www.etnews.com](https://www.etnews.com/20261126000509)
  - NIPA의 11월 26일 브리핑: 2027년 GPU 16,832개 배정, B300 1월 및 Vera Rubin 3·6월 서비스 목표. 2개월 연속 활용률 20% 미만이면 심사 후 회수·재배정할 수 있다. 같은 브리핑에서 삼성SDS가 참여하는 특수목적법인을 통한 국가 AI 컴퓨팅센터 완공 전 접근 방안도 제시됐다. 조기 접근은 제안이며 별도 개통이나 규제 조치가 아니다.
  - **상태:** 발표=있음; 이용 가능=없음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음(조기 접근 제안).
  - **Evidence B** | <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126133159)
  - KT클라우드는 Keppel과 안산 2센터를 추진한다. 전 층 액체냉각을 지원할 계획이며 수전용량은 60 MW, 개소 목표는 2030년이다. 안산 1센터를 합친 110 MW는 계획 수전용량이지 현재 가동 용량이나 GPU IT 부하가 아니다.
  - **상태:** 발표=있음; 이용 가능=없음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=없음; 매출=미확인; 규제=미확인.
  - **Evidence B** | <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126142531)
  - 삼성전자 메모리 개발 조직이 사업부장 직속으로 재편되고 솔루션 조직에 로직개발팀이 신설된다는 내부 통지가 보도됐다. 신제품 공개나 양산 진척을 확인한 것은 아니다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Enterprise/Applications

  - **Evidence A** | <br class="report-field-break" />출처: [docs.cloud.google.com](https://docs.cloud.google.com/composer/docs/release-notes)
  - Google Cloud Managed Airflow에서 대상 빌드·이미지에 맞춰 워크플로 정의의 수정 필요 사항을 업그레이드 전에 확인할 수 있게 됐다. 자동 수정, 서울 리전 지원, 고객 도입은 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence B** | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261126000525)
  - EBS가 과학기술정보통신부 예산 지원으로 무료 AI 학습 플랫폼 AI이솦을 개설했다. AI 기초, 생성형 AI 활용, 실습형 문제 해결을 제공하며, 이용 규모나 학습 효과는 아직 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음.
  - **Evidence B** | <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126150505)
  - 지란지교소프트가 스캔 계약서·신분증 사진 속 개인정보를 탐지하는 AI필터를 WEB필터·SERVER필터에 통합했다고 보도됐다. 일부 고객 공급 보도까지 확인됐으며, 최초 통합일·일반 가용성·실가동은 미확인이다.
  - **상태:** 발표=있음; 이용 가능=있음(일부 공급 보도 범위); 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Funding/M&A/Business

  - **Evidence B** | <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126152620)
  - 한전KPS와 광양그린에너지가 발전소 운전 데이터 활용, AI 진단·정비 도구 공동개발, 현장 실증을 위한 MOU를 체결했다. 계약금액과 실가동은 공개되지 않았다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Safety/Evaluation/Security

  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.AI/recent)
  - 연구 에이전트가 초기 해법을 얼마나 개선하는지 평가하는 REE 프리프린트가 공개됐다. 과제, 채점기, 평가 코드가 공개됐으며, 비교 대상은 실시간으로 과제를 푸는 연구자가 아니라 전문가가 설계한 구현이다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=있음; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.AI/recent)
  - TASK Memory 프리프린트는 사실을 검색하지 못한 오류와 검색된 사실을 인접 개체나 갱신된 기록에 잘못 적용한 오류를 분리했다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.
  - **Evidence A** | <br class="report-field-break" />출처: [arxiv.org](https://arxiv.org/list/cs.CR/new)
  - Proteus-OT 프리프린트는 생성된 산업 제어기 코드에서 실제로 존재하는 라이브러리라도 선언된 공급사·프로토콜과 불일치할 수 있음을 정적 감사로 보여줬다. 실제 장비에서 장애가 발생했다는 보고는 아니다.
  - **상태:** 발표=있음; 이용 가능=있음; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

### Policy/Geopolitics

  - **Evidence B** | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261126000528)
  - TTA와 iA Cloud·Gluesys·Point2 Technology가 판교 시험장에서 국산 NPU 기반 인프라의 추론 성능·전력효율·운영 안정성을 K-Perf로 평가하기 위한 MOU를 체결했다. 구속력 있는 규정이나 완료된 검증은 아니다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음.

### Korea Exposure

  - **Evidence A** | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156791020&pageIndex=1&repCodeType=&repCode=&startDate=2026-11-26&endDate=2026-11-26&srchWord=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5&period=direct)
  - 개인정보보호위원회가 AI 보이스피싱 탐지 서비스의 수상 사실을 공개했다. 통신 3사 서비스와 사기범 음성 활용 특례는 기존 상태다. 단말 내장 기능 출시는 확인되지 않았다.
  - **상태:** 발표=있음; 이용 가능=있음(기존 서비스); 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=있음(기존 서비스); 매출=미확인; 규제=있음(기존 특례).
  - **Evidence A** | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156791021&pageIndex=1&repCodeType=&repCode=&startDate=2026-11-26&endDate=2026-11-26&srchWord=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5&period=direct)
  - 개인정보보호위원회 미래포럼이 AI 시대 개인정보 제도 개편과 데이터 이익 공유 구상을 논의했다. 규정 채택이나 집행 조치는 아니다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=없음.
  - **Evidence A** | <br class="report-field-break" />출처: [www.korea.kr](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156791129)
  - 소방청이 공공부문 AI 경진대회에서 소방관 5개 팀의 입상을 발표했다. 경진대회 성과이지 소방 현장 배치나 안전 성능 검증이 아니다.
  - **상태:** 발표=있음; 이용 가능=미확인; 코드·웨이트=미확인; 독립 재현=미확인; 운영 사용=미확인; 매출=미확인; 규제=미확인.

## 4 기술→산업 전달경로

- **학습 구조 → 토큰 예산:** U-MoLT의 메모리 재사용을 동일 데이터·연산량에서 비교하고, 대규모 체크포인트와 디코딩 지연까지 확인해야 학습 예산에 반영할 수 있다.
- **평가 산출물 → 배포 전 검사:** 머신코드 산출물과 스킬 감사 코드는 재검사의 출발점이다. 모델 비교는 동일 실행틀과 새 과제로, 운영 회귀검사는 성공률 추정용 표본과 실패 발굴용 표본을 나눠 검증할 수 있다.
- **가중치 → 의료 적용:** Sage-Med 체크포인트로 지역별 영상·보고서 평가를 시작할 수 있다. 라이선스, 독립 데이터 성능, 안전성, 규제 요건을 확인하기 전에는 임상 적용으로 해석하지 않는다.
- **인프라 계획 → 실제 연산 공급:** NIPA는 배정 공고와 서비스 개시, 안산 2센터는 전력 연계와 실제 IT 부하, K-Perf는 공개 프로토콜과 실측이 다음 관문이다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 전력·시설·가속기 | NIPA 배정 일정, KT클라우드 안산 2 계획, 삼성 메모리 개발 재편 | 배정·가동 실적, 실제 IT 부하, 제품 진척 |
| 모델·체크포인트 | U-MoLT 최소 구현, Sage-Med 가중치 공개 | 대규모 효율 재현, 임상 안전성 |
| 메모리·출력 선택 | MGMem 원문 검색, TASK Memory 오류 분리, 필수 제약 기반 후보 비교 | 한국어 및 신규 데이터에서의 일반화 |
| 개발·평가 | 머신코드 산출물, 회귀 표본 선택, SkillsBench 감사, REE·Gridworld·Proteus-OT 진단 | 독립 재실험, 새 과제와 실행틀에서의 안정성 |
| 응용·공공 운영 | Airflow 사전 검사, VibeVideoAgent 도구, EBS 교육, 이미지 개인정보 탐지 | 자동 수정, 실제 채택, 학습 효과, 탐지 오류율 |
| 표준·거버넌스 | K-Perf 협약, 개인정보 미래포럼, 기존 보이스피싱 서비스의 수상 | 비교 실측, 공식 개정안, 단말 내장 출시 |

## 6 반증·과장·재현성 감사

아래 항목의 독립 재현은 모두 `unknown`이다. 머신코드 비교가 모델 공급사 외부에서 수행됐다는 사실과, 그 평가를 제3자가 독립 재현했다는 주장은 별개다.

| 항목 | 과제·기준선 | 지표·조건 | 공개·오염 및 해석 한계 |
|---|---|---|---|
| U-MoLT | 언어모델 사전학습·계속학습·지연 비교. 비루프 OLMo3와 조건을 맞춘 Qwen3.5-0.8B-Base 계속학습이 기준 | 저자 보고: 700M 검증 교차엔트로피 기준 토큰 효율 1.7배, 3B MoE의 10개 도메인 퍼플렉서티 0.75 하락·10개 과제 정확도 2.1%p 상승. OLMo3 비교는 400B 토큰, Qwen 계속학습은 100B 토큰. 약 113M 별도 지연 비교는 996.6ms 대 1,000.6ms | 공개물은 최소 BlaGPT 구현. 전체 학습·디코딩 레시피와 MoE 구현이 없고 학습·평가 중복 미검증. 소형 지연 결과는 대형 모델에 일반화 불가 |
| 머신코드 비교 | Linux x86-64에서 Qwen3-0.6B Q8_0 추론 엔진 생성. CPU llama.cpp 대비 | 32스레드에서 Neon 188.35, Opus 125.13, llama.cpp 103.82 토큰/초. 두 생성 엔진 모두 16개 정합성 검사 통과. EPYC 7642 한 대, 34토큰 입력·64토큰 생성, 속도 3회 평균. 두 모델 모두 xhigh | 엔진·참조 출력·검증 스크립트 공개. 모델당 에이전트 실행 한 번, 실행틀 상이, 하드웨어 한정, 학습 오염 미평가 |
| MGMem | 영어 다중 세션 QA(LoCoMo·LongMemEval-S), 동일 프로토콜 검색 기준선 및 로컬 검색 방식 대비 | 유형별·전체 QA 판정에서 저자 보고상 LoCoMo 개선, LongMemEval-S 전체 경쟁력. 결정적 색인이 원문을 찾되 LoCoMo는 LLM 판독기·채점기 사용 | 코드·스크립트는 열람됐으나 실행되지 않았고 학습 중복 미검증. 한국어 성능 미확인 |
| 제약 기반 후보 채점 | 코드·로봇 계획·경쟁 프로그래밍·검색증강 QA에서 첫 응답 및 단순 후보 선택 대비 | CWEval 안전 최대 +0.28, 검색증강 QA 정답·안전 공동 점수 최대 +0.21. CWEval·LIBERO 안전 변형·LiveCodeBench·HotpotQA의 저자 비교 | 최대값이지 평균이 아님. 첫 답이 강하면 이득이 거의 없거나 소폭 음수. 코드·오염 통제 미확인 |
| MultiNet Gridworld | 문·스위치·방해물·순서 제약 미로. 너비 우선 탐색 최적 행동 수 기준 | 완료와 최적 대비 진행도. 15개 별도 미로 540회로 프로토콜 고정 후, 동일 렌더러·행동 공간·채점으로 3개 모델과 50개 미로 평가: 150회 중 6회 완료, 스위치 게이트 포함 회차는 완료 없음 | 합성 미로 초기 프리뷰. 생성기·실행 기록 공개 및 학습 중복 미확인 |
| 코딩 패치 과잉수정 | SWE-bench Verified·DeepSWE 버그 수정에서 인간 패치와 비교 | 단위 변경을 되돌려 테스트 재실행. 평균 필요성 에이전트 대 인간: 0.887 대 0.864, 0.797 대 0.785. 18개 모델의 해결 성공 궤적 7,660개 | 성공 사례에 한정. 테스트상 필요성이 의미상 필요성이나 문서·테스트 추가 가치를 대변하지 않음. 코드·오염 통제 미확인 |
| 블랙박스 회귀 표본 | 전체 성공률 추정 또는 조기 실패 탐지. 무작위·과거 데이터 기준선 및 전체 시험 대비 | 10개 벤치마크에서 대상 실행·이력 없이 선택. GPT 5.2 Codex 한 사례에서 500개 중 100개로 비용 $225→$47, 성공률 오차 0.8%p. 같은 예산에서 판정기 기반 실패 발견률 53.0%, 무작위 27.4% | 단일 비용 사례이며 두 목적을 모두 지배한 방법은 없음. 코드·학습 중복 통제 미확인 |
| SkillsBench 감사 | 스킬 유무 짝비교, 스킬 선택 정책에 라벨 섞기·홀드아웃 검사 | 공개 실험 7,554회, 1,421개 짝비교 셀, 조건당 최대 3회. 평균 +18.7%p, 채점기 의존 2개와 조작적 정의가 불명확한 1개 과제에서 +74.6%p. 다중검정 보정 후 과제별 유의한 하락 없음 | 코드 공개. 빈 스킬 디렉터리, 실행기의 내장 스킬, 소수 반복이 해석을 제한. 일부 검사는 상위 파일·원시 궤적 필요, 오염 미검증 |
| Sage-Med | 의료 영상 이해·보고서 생성·시각 근거 위치 특정. Hulu-Med 및 Intern-S2 비교 | 저자 평가에서 공개 31개 벤치마크 평균 58.26%, 기준선 50.99%·52.24%. 더 큰 평가의 일부 집계이며 단일 H200 예시는 전체 평가 조건이 아님 | 가중치·추론 코드 공개. 학습 중복 미검증, 비공개 벤치마크 외부 검토 제한. 임상 안전성·전향적 성능·허가 증거가 아님 |
| VibeVideoAgent | 영상 생성 239개 과제, 에이전트 기본 실행 대비 | 매칭 샌드박스·기본 CLI·고정 인식 모델·동일 가중 모델 채점. Opus 5.5 영상·음향 품질 4.03→4.43/5, 루브릭 통과 98.87→99.35%, 기술 규격 충족 99.92→98.59% | 릴리스 공개. 인식 모델이 채점에도 참여했고 오염 미검증. 개선을 v0.2.1에 단독 귀속할 수 없음 |
| REE | 5개 과학 영역의 연구 문제 100개, 전문가 설계 구현 대비. 초기 해법은 점수 0 | 과제·에이전트당 1회, 최대 12시간 오프라인, 별도 테스트 인스턴스와 유사 자원 조건. 정규화 평균/기준선 승률: Opus 5.5 39.6/86%, GPT-6.1 Sol 38.2/81%; 전문가 구현 평균 24.4 | 과제·채점기·평가 코드 공개. 사람 연구자와의 직접 대결이 아님. 공개 문제·기법의 학습 노출 배제 불가 |
| TASK Memory | 검색 사실 무시·인접 개체 오용·폐기된 사실 적용 검사. BM25 RAG 등 텍스트 검색과 컨텍스트 조정 3종 대비 | 동결 공개 모델, 저자가 설명한 사전등록·단회 시험. 10개 모델-데이터 조합의 기억 무시 오류 최대 1.5%, CounterFact 인접 개체 오용 39.2→7.5% | 프리프린트 공개, 구현 미확인. 통제 실험이지 운영 지표가 아니며 학습 노출 배제 불가 |
| Proteus-OT | 생성 제어기 코드의 선언 대상과 라이브러리 일치 여부. 패키지·메서드 존재 검사 및 판정 가능한 인간 작성 파일 28개와 비교 | 문서화된 바인딩과 선언 메타데이터로 정적 검사. 883개 중 180개(20.4%) 임포트 불일치, 단일 공급사 및 통신 호출 도달 조건으로 제한하면 14.2% | 프리프린트 공개, 검증기 공개 및 오염 미확인. 말뭉치 라벨에 조건부인 비율이며 실제 장비 고장률이 아님 |

K-Perf는 시험 계획만 공개했다. EBS 개설·공공 AI 경진대회 입상·보이스피싱 서비스 수상도 효과 검증이나 운영 성능 비교를 대신하지 않는다.

## 7 다음 확인 일정

| 시점 또는 조건 | 확인할 항목 |
|---|---|
| 다음 배정 공고 | NIPA 지원 자격·플랫폼별 용량·가격·접수일, 조기 접근 방안의 공식화 여부 |
| 2027년 1월 및 3·6월 목표 시점 | B300 및 Vera Rubin 서비스 실제 개시와 배정·회수 기준 적용 |
| 후속 저장소·평가 공개 시 | U-MoLT 전체 레시피와 평가 체크포인트, Sage-Med 라이선스와 독립 한국어 임상 데이터 평가, 머신코드 비교의 동일 실행틀·다른 CPU 재시험 |
| 새 평가 자료 확보 시 | SkillsBench 수정 채점기와 반복 실행, REE 비공개 신규 과제, MGMem·TASK Memory의 새 기록 검사, VibeVideoAgent 사람 채점 및 추가 비용 |
| 사업·제도 후속 공지 시 | 안산 2 전력 연계·공사·실사용 부하, 광양 발전소 실증 착수, K-Perf 시험 규약·실측, 개인정보 개정안과 단말 내장 일정 |
| 제품·공공 운영 후속 공지 시 | Airflow 리전·환경 자격, AI이솦 이용·학습 결과, 이미지 탐지 오류율, 소방 AI의 평가가 포함된 현장 실증 |

## 8 Coverage Audit

연구자 10/10 최종 결과 제출 완료. 아래 `초기/표적`은 제출된 두 검색 패스의 `search_audit` 후보 집계다. 감사 필드가 없는 영역은 패스별 후보 수·검색에서 발견한 전체 후보 수를 알 수 없으므로, 제출 이벤트와 감시 후보 수만 표시했다. `연구자 검증`은 번들의 판정, `편집 검증`은 시간·근거 재심 후의 영역별 수(교차 영역 중복 포함), `포함`은 전역 중복 제거 후의 원장 수다.

| 영역 | 초기/표적 후보 | 제출 이벤트 / 감시 후보 | 연구자 검증 | 편집 검증 | 포함 | 목표 3 대비 부족 |
|---|---:|---:|---:|---:|---:|---:|
| Frontier Models | 1 / 1 | 2 / 1 | 2 | 2 | 2 | 1 |
| AI Research | 미기록 | 3 / 0 | 3 | 3 | 3 | 0 |
| Agents/Developer Tools | 미기록 | 3 / 0 | 3 | 3 | 3 | 0 |
| Open Source/Repos | 미기록 | 3 / 0 | 3 | 3 | 2 | 1 |
| Chips/Compute/Infrastructure | 미기록 | 3 / 1 | 3 | 3 | 3 | 0 |
| Enterprise/Applications | 미기록 | 3 / 1 | 3 | 3 | 3 | 0 |
| Funding/M&A/Business | 0 / 3 | 3 / 2 | 3 | 2 | 1 | 2 |
| Safety/Evaluation/Security | 미기록 | 3 / 1 | 3 | 3 | 3 | 0 |
| Policy/Geopolitics | 미기록 | 3 / 0 | 3 | 3 | 1 | 2 |
| Korea Exposure | 미기록 | 3 / 0 | 3 | 3 | 3 | 0 |

**미달 사유 및 중복·제외 판정**

- **Frontier Models:** 초기 1건과 표적 재검색 1건만 통과했다. 표적 패스는 기존 U-MoLT를 빼고 공식 채널, 저장소 메타데이터, 논문 목록을 재검사했다. Reuters 추출은 막혔고 날짜 제한 검색은 관련성이 낮았다. Sage-Med 논문과 Stable Gated DeltaNet-2·OS-Omni의 원 논문은 11월 25일자이며, DyLoMo-DiT 논문·체크포인트도 기간 전이었다. Sage-Med 논문 후보는 최초 가중치 공개를 입증하지 못했으나, 별도 연구자의 직접 커밋 근거로 가중치 공개 사건만 Open Source/Repos에 포함했다.
- **Open Source/Repos:** 두 패스의 수치는 미제출. 커버리지 기록상 보도·저장소 태그·커밋을 확인해 3건을 검증했지만, 최소 U-MoLT 구현은 Frontier Models와 같은 저장소·같은 공개이므로 한 건으로 병합했다. 코드의 가용성과 평가 체크포인트의 미확인을 구분했다. vLLM·SGLang은 기간 전, 확인한 llama.cpp 릴리스는 기간 후, OS-Omni의 후속 논문 목록은 저장소 공개 시점을 입증하지 못했다. Sage-Med 후속 미러도 별도 사건이 아니다.
- **Funding/M&A/Business:** 초기 0건 기록은 연구자가 대상 기간을 미래로 취급한 시점의 것이어서 대상 기간 내 부재를 입증하지 않는다. 표적 패스는 직접 아카이브·공식 채널·공시 진입점을 확인해 3건을 검증으로 제출했으나, 새 조달 라운드나 완료된 인수는 확인하지 못했다. Nvidia의 S&P CreditWatch 원 조치는 11월 26일 03:38 KST로 창 밖이며, 07:44 KST 후속 보도나 제출 등급 A로 이를 기간 내 사건으로 바꾸지 않았다. 신용등급 강등도 아니었다. NIPA는 기존 예산으로 확보한 자원의 배정 공지라 인프라에 병합했다. 따라서 편집 검증 2건 중 포함은 한전KPS 협약 1건이다.
- **Policy/Geopolitics:** 두 패스의 수치는 미제출. 커버리지 기록상 유럽·미국 공식 경로와 국제 보도는 사용 가능한 기간 내 근거를 얻지 못했다. EU 과학 패널 건은 기간 전, 국내 물리 AI 법제 세미나 보도는 컷오프 후이자 제안 수준이었다. 검증된 국내 3건 중 NIPA 조기 접근은 같은 브리핑의 배정계획과 병합하되 제안 내용은 보존했다. EBS는 동일 보도·동일 개설로 Enterprise/Applications에 병합했다. 정책 영역에는 K-Perf 협약만 남았다.
- **나머지 6개 영역:** 영역별 3건을 포함해 수량 미달은 없다. AI Research·Agents/Developer Tools·Safety/Evaluation/Security는 arXiv의 11월 26일 공개 목록을 기준으로 삼았으며 투고일을 공개일로 바꾸지 않았다. GrepMem은 기간 내 공개 근거 부족, Context Scaling은 기존 논문의 개정, Copilot 과금 공지와 Cursor 음성 기능은 기간 밖, Codex 알파 태그는 실질 변경 근거 부족으로 제외했다. 인프라에서는 창을 벗어난 AWS 공지와 과거 공개를 다룬 후속 보도를 제외했다. Airflow 중복 릴리스 노트와 보이스피싱 수상 중복 공지는 각각 1건으로 처리했다. Korea Exposure의 날짜만 표기된 보도자료는 원문 날짜를 유지했으며, 별도로 시각이 확인된 11월 27일 11:00 침해 대응 발표는 제외했다.

### Watchlist (미확인 후보)

- 후보: Shanghai AI Laboratory describes Sage-Med-Preview (미포함 사유: <br class="report-field-break" />Evidence B·논문은 11월 25일자이며 이 논문 목록과 후속 편집만으로 기간 내 최초 가중치 공개를 입증하지 못함. 별도 커밋으로 확인된 가중치 사건만 원장에 포함 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/papers/2611.34575))
- 후보: Solidigm reportedly plans to present 240-layer PLC NAND at ISSCC 2027 (미포함 사유: <br class="report-field-break" />Evidence C·익명 업계 소식통 기반이며 공식 프로그램이나 1차 기술 공개 미확인 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126134119))
- 후보: Lablup announces AI:GO 2.0 for running AI agents locally on PCs (미포함 사유: <br class="report-field-break" />Evidence B·11월 27일 17:11 KST 보도로 컷오프 이후이며 적격 선행 공개 미확인 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261127000331))
- 후보: Nvidia reportedly asks partners to pause AI server shipments to four Southeast Asian markets (미포함 사유: <br class="report-field-break" />Evidence C·기간 내 재인용 보도이나 WSJ 원 보도의 시각과 근거를 확인하지 못함 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/26/nvidia-hits-pause-on-chip-shipments-to-southeast-asia/))
- 후보: Samsung reportedly elevates its DX M&A function and creates a Home AI team (미포함 사유: <br class="report-field-break" />Evidence C·재인용 및 익명 소식통 기반으로 삼성의 공식 발표나 귀속 가능한 확인 없음 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261126180646))
- 후보: Microsoft documents ARTEX adoption by state-sponsored and financially motivated groups (미포함 사유: <br class="report-field-break" />Evidence B·후속 보도는 기간 내이나 Microsoft 원 공개는 시각 없는 11월 25일자로 날짜 기준 미충족 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/26/microsoft-hackers-in-china-n-korea-using-artex-ai-tool-to-break-into-global-tech-systems/5312433))

- **수록 사건 수:** 24
