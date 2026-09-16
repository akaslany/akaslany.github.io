---
layout: post
title: "AI Daily Intel — 2026-09-16"
date: 2026-09-16 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-09-16/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-09-16
- **기준 시각:** 2026-09-16T06:00:00+09:00
- **수집 구간:** [2026-09-15T06:00:00+09:00, 2026-09-16T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10/10 terminal completion
- **수록 사건 수:** 10

## 1 오늘의 AI 한 문장

이번 관측창의 핵심은 새 초대형 모델 발표가 아니라 브라우저 유통, 과학 에이전트의 반복학습, 소비자 기기 장문맥 추론, 지속형 에이전트 지식층, 보안 자동화로 AI의 경쟁축이 모델 자체에서 배포·런타임·상태 관리·검증으로 이동했다는 점이다.

## 2 핵심 신호 5

1. Mistral이 Firefox Smart Window의 실제 사용자 접점을 확보했다
   - 프랑스와 북미의 베타 서비스에 Mistral 모델이 투입됐다.
   - 신규 모델 발표는 아니지만 브라우저 배포, 지역 언어 최적화, 기본 비저장 및 제로 데이터 보존 조건이 결합된 생산 환경 신호다.
   - 출처: https://mistral.ai/news/mistral-x-mozilla/

2. ScienceBuddy가 에이전트 하네스와 기반 모델을 함께 반복 개선하는 구조를 제시했다
   - 사용자 상호작용과 실행 증거를 평가 과제로 전환하고, 하네스 개선과 강화학습을 교대로 수행한다.
   - 실험 코드는 공개됐지만 호스팅 제품 전체 소스는 공개되지 않았고 독립 재현도 없다.
   - 출처: https://arxiv.org/abs/2609.17523

3. JustFit이 24 GiB 노트북에서 20만 토큰급 로컬 추론 가능성을 보고했다
   - 단일 M4 Pro·Qwen3.8-27B MXFP4 구성에서 최대 212,992 positions 완료를 주장했다.
   - 프라이버시 중심 온디바이스 AI의 잠재력은 크지만 코드 가용성과 타 하드웨어 재현은 확인되지 않았다.
   - 출처: https://arxiv.org/abs/2609.17475

4. EvoOntology가 데이터 에이전트의 의미 지식을 버전 관리하는 오픈소스 계층을 공개했다
   - 궤적에서 온톨로지 변경안을 만들고 동일 조건에서 부모 버전과 비교해 통과한 후보만 배포하는 구조다.
   - MCP 계층과 Claude Code·Codex 플러그인은 공개됐으나 성능 향상은 저자 보고에 머문다.
   - 출처: https://github.com/ruc-datalab/EvoOntology

5. 보안 분야에서는 에이전트 활용과 자율 대응의 가능성보다 평가 공백이 더 선명했다
   - WordPress 플러그인 분석은 81건 중 79건의 수동 재현을 보고했지만 미탐률과 비LLM 기준선이 없다.
   - 사이버 레인지의 자율 대응은 휴리스틱보다 효율적이라고 보고됐지만 수치와 현실망 전이는 공개되지 않았다.
   - RECAL의 거의 완벽한 F1은 구형·포화 가능성이 있는 벤치마크에 집중돼 독립 검증이 필요하다.
   - 관련 Event ID: 관련 항목, 관련 항목, 관련 항목

## 3 영역별 AI 브리프

### Frontier Models

  제목: Mistral 모델, 프랑스·북미 Firefox Smart Window 구동
  요약: Mozilla의 베타 브라우징 보조 기능이 해당 지역에서 명시되지 않은 Mistral 모델을 사용한다. 영국과 독일은 2026년 후반 추가될 예정이다. Mozilla 서버에는 대화가 기본 저장되지 않으며 Mistral은 제로 데이터 보존에 동의했다고 발표됐다.
  의미: Mistral이 소비자 브라우저의 생산 배포 접점을 확보했다. 다만 신규 모델, 가중치, 코드, 벤치마크, 매출 또는 규제 승인은 발표되지 않았다.
  한국 연결: 한국 제공이나 한국어 지원은 발표되지 않았다. 국내 브라우저·플랫폼 기업에는 지역 모델 조달과 제로 보존 추론의 참고 사례다.
  Evidence A: Mistral 공식 발표가 현재 배포 지역, Mozilla 협력 및 데이터 보존 조건을 직접 확인한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://mistral.ai/news/mistral-x-mozilla/
  announcement: yes
  availability: yes
  code: no
  independent_reproduction: unknown
  production: yes
  revenue: unknown
  regulatory: no
  다음 확인: 사용 모델 버전, 원격·로컬 추론 방식, 언어별 품질과 지연, 한국어 및 한국 지역 확대, 독립적인 개인정보·성능 검증.

### AI Research

  제목: ScienceBuddy, 과학 에이전트 하네스 진화와 모델 강화학습 결합
  요약: 사용자 상호작용·피드백·실행 증거를 과제와 평가 기준으로 바꾸고, 하네스 개선과 기반 모델 학습을 교대하는 구조가 제안됐다. 공개 프리뷰와 단순화된 실험 코드는 있지만 호스팅 제품 전체 소스는 없다.
  의미: 과학 에이전트를 단발성 요청 처리기가 아니라 장기 상호작용에서 학습하는 시스템으로 설계한다.
  한국 연결: 대학·병원·바이오 조직에서 증거 추적형 연구 보조를 시험할 수 있으나 데이터 거버넌스와 생의학 검증이 선행돼야 한다.
  Evidence A: 논문과 공식 저장소가 방법, 공개 범위, 실험 설정을 직접 설명한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.17523
  announcement: yes
  availability: yes
  code: yes
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 3회 반복 실험의 독립 재현, 진정한 미관측 과제 평가, 호스팅 프리뷰의 접근·데이터 보존 조건.

  제목: PhysStream, 생성 도중 속도를 제어하는 스트리밍 비디오 생성 제안
  요약: 한 이미지에서 영상을 자기회귀적으로 생성하면서 복수 강체의 속도를 중간에 바꿀 수 있게 한다. 위치 및 객체 추적 지도를 후속 생성 단계에 되먹임한다.
  의미: 사전 고정 궤적보다 상호작용성이 높아 시뮬레이션·애니메이션·콘텐츠 제작에 유용할 수 있으나 현재 증거는 탁상 강체 장면 중심이다.
  한국 연결: 게임·애니메이션·로봇·디지털 콘텐츠 분야와 연관될 수 있지만 물리적 일반성과 라이선스는 확인되지 않았다.
  Evidence A: 논문과 데모 페이지가 방법 및 저자 평가 결과를 제시한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.17521
  announcement: yes
  availability: no
  code: no
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 코드·가중치, 절대 점수, 인간평가 절차, 변형 물체와 복합 접촉, 동일 조건 독립 비교.

  제목: LimiX-2, 표형 파운데이션 모델을 위한 결합 메커니즘 모델링 제안
  요약: 표형 문맥학습을 목표값 예측만이 아니라 특성과 목표의 결합분포 모델링으로 재구성한다. 구조적 인과모델로 만든 합성 데이터에서 사전학습하고 세 평가군의 성능 향상과 attention의 구조 신호를 주장한다.
  의미: 텍스트·이미지 밖의 구조화 데이터로 파운데이션 모델 범위를 넓힐 가능성이 있지만 attention만으로 인과성을 입증할 수는 없다.
  한국 연결: 제조·금융·의료의 표형 데이터에 적용 가능성이 있으나 도메인별 검증과 개인정보 통제가 필요하다.
  Evidence A: 논문이 방법과 저자 주장을 직접 공개한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.17488
  announcement: yes
  availability: unknown
  code: unknown
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 코드·가중치, 데이터셋별 수치, 동규모 PFN 대비 ablation, 실제 인과발견 데이터 평가.

  제목: JustFit, 24 GiB 노트북의 200K 토큰급 로컬 LLM 추론 보고
  요약: 압축 KV 실행, 적시 구성요소 상주, 상태 보존형 serving 전환을 결합한 MLX 런타임이다. 저자는 M4 Pro와 Qwen3.8-27B MXFP4에서 212,992 positions를 완료했다고 보고했다.
  의미: 재현된다면 민감 문서를 외부로 보내지 않는 소비자 장비 장문맥 추론 범위를 넓힐 수 있다.
  한국 연결: 온디바이스 문서 처리가 필요한 국내 기업·공공기관과 관련되지만 한국어 장문맥과 국내 보편 하드웨어 성능은 검증되지 않았다.
  Evidence A: 논문이 런타임 설계, 하드웨어 조건 및 결과를 직접 보고한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.17475
  announcement: yes
  availability: unknown
  code: unknown
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 실행 코드, Apple 및 비Apple 장비 재현, 압축 대비 품질, 한국어 장문맥, 오염 저항형 추론 평가.

  제목: Fuse, LLM 사회적 추론의 사용자 프레이밍 민감성 평가
  요약: 숨은 동기가 시뮬레이션상 알려진 사회적 상호작용을 만들고, 주관적 서술을 받은 모델이 동기를 맞히는지 검사한다. 12개 모델에서 편향된 프레이밍과 사용자 매개가 추론을 약화한다고 보고했다.
  의미: 검증 불가능한 현실 일화 대신 구성된 정답을 제공하며, 조력자가 사용자의 관점을 무비판적으로 흡수할 위험을 드러낸다.
  한국 연결: 존댓말, 간접화법, 문화별 규범을 포함한 한국어 재현이 필요하다.
  Evidence A: 논문이 21,000개 데이터셋과 프레임워크 공개 및 24,000건 인간 주석을 명시한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.17496
  announcement: yes
  availability: yes
  code: yes
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 저장소·라이선스, 주석자 합의도, 모델별 결과, 한국어 및 실제 인간 상호작용 검증.

### Agents/Developer Tools

검증 통과 이벤트 없음

### Open Source/Repos

  제목: EvoOntology, 데이터 에이전트용 자기진화 의미 계층 공개
  요약: MIT 라이선스 저장소가 MCP 기반 온톨로지 계층, 결정론적 저장소, 진화 로직, 벤치마크 어댑터와 Claude Code·Codex 플러그인을 제공한다. 후보 온톨로지를 부모 버전과 비교해 통과한 버전만 게시하도록 설계됐다.
  의미: 도메인 지식을 프롬프트나 가중치 안에만 두지 않고 검사 가능한 지속·버전형 상태로 관리한다.
  한국 연결: 공개 자료에서 한국 조직·데이터셋·배포 연결은 확인되지 않았다.
  Evidence A: 공개 GitHub 저장소가 코드, 라이선스, 플러그인 및 저자 벤치마크를 제공한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://github.com/ruc-datalab/EvoOntology
  announcement: yes
  availability: yes
  code: yes
  independent_reproduction: no
  production: unknown
  revenue: no
  regulatory: no
  다음 확인: 태그 릴리스, 외부 벤치마크 재실행, 플러그인 사용자 이슈, 전체 6개 백본 결과.

  중복 제외: ScienceBuddy 저장소 결과는 AI Research의 관련 항목에 병합했다. 별도 이벤트로 재계상하지 않았다.

### Chips/Compute/Infrastructure

검증 통과 이벤트 없음

### Enterprise/Applications

검증 통과 이벤트 없음

### Funding/M&A/Business

검증 통과 이벤트 없음

### Safety/Evaluation/Security

  제목: 에이전트형 LLM 프레임워크, WordPress 플러그인의 로그 노출 가능성 탐지
  요약: 정적·동적 분석을 수행하는 시스템이 설치량 상위 300개 플러그인을 조사했다. 저자는 62개 플러그인에서 발견한 81건 중 79건을 수동 재현했다고 보고했다.
  의미: 도구 사용형 LLM이 생태계 규모 보안 감사에 기여할 수 있음을 보이지만 미탐률과 기존 도구 대비 우위는 알 수 없다.
  한국 연결: 국내 WordPress 운영 조직과 플러그인 개발자에게 잠재적으로 관련된다.
  Evidence A: AISEC 2026 논문 기록이 평가 범위와 저자 재현 결과를 직접 제시한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.17164
  announcement: yes
  availability: yes
  code: no
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 모델·프롬프트, 플러그인별 공개와 수정 상태, recall, 비용, 코드 및 독립 재현.

  제목: 사이버 레인지에서 자율 네트워크 사고대응 에이전트 평가
  요약: 가변 네트워크, 공격자, 사용자 및 SIEM 경보를 포함한 에뮬레이션 환경에서 휴리스틱과 강화학습 방어 정책을 비교했다. 학습 정책이 대체로 더 효율적이라고 보고됐지만 공격자와 사용자 정책에 따라 편차가 컸다.
  의미: 차단률만이 아니라 방어 조치가 초래하는 가용성 비용까지 함께 평가했다는 점이 중요하다.
  한국 연결: 국내 SOC와 중요 인프라의 자동 대응 검토에 관련되지만 직접 배포 사례는 없다.
  Evidence A: 논문이 실험 환경, 비교 기준선 및 정성적 결과를 직접 설명한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.16541
  announcement: yes
  availability: yes
  code: no
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 절대 비용, 분산, 미관측 공격자·토폴로지, 위험한 자동 대응, 인간 운영자 비교, 실제망 전이.

  제목: RECAL, 그래프 기반 침입탐지의 관계 불균형 보정
  요약: provenance graph의 관계별 빈도 불균형을 보정하는 masked graph learning과 관계별 정상 재구성 오차 보정을 결합한다. DARPA E3 세 데이터셋에서 99.93~99.99% F1을 보고했다.
  의미: 희귀 공격 관계의 탐지와 오탐 감소를 겨냥하지만 극단적으로 높은 점수는 최신 환경에서 별도 검증해야 한다.
  한국 연결: 국내 기업·공공기관의 endpoint 모니터링과 관련될 수 있으나 로컬 텔레메트리 검증이 없다.
  Evidence A: 논문이 방법, 데이터셋 및 저자 측 성능 수치를 직접 제시한다.
  Evidence B: 없음.
  Evidence C: 없음.
  source URL: https://arxiv.org/abs/2609.16462
  announcement: yes
  availability: yes
  code: no
  independent_reproduction: no
  production: no
  revenue: no
  regulatory: no
  다음 확인: 코드·분할·임계값, 최신 데이터와 실환경 재현, calibration drift, 처리량, 메모리, 회피 공격.

### Policy/Geopolitics

검증 통과 이벤트 없음

### Korea Exposure

검증 통과 이벤트 없음

## 4 기술→산업 전달경로

1. 모델 공급 → 브라우저 기본 접점
   - Mistral 모델 → Firefox Smart Window → 소비자 검색·탐색 보조 → 사용량과 지역 언어 피드백 축적.
   - 병목: 모델 버전 비공개, 한국 미지원, 실제 품질·지연 및 개인정보 처리의 독립 검증 부재.

2. 사용자 상호작용 → 평가 과제 → 하네스·모델 공동 개선
   - ScienceBuddy의 연구 작업 기록 → 과제·rubric 구성 → 하네스 진화와 GRPO 반복 → 연구 보조의 지속적 개선.
   - 병목: 폐쇄된 호스팅 제품 영역, 시뮬레이션 피드백 의존, 독립 재현 부재.

3. 메모리·상주 최적화 → 온디바이스 장문맥
   - JustFit 런타임 최적화 → 제한된 통합 메모리에서 더 긴 문맥 → 민감 문서의 로컬 처리.
   - 병목: 단일 장비·모델 결과, 품질 저하 측정 부족, 코드 가용성 불명.

4. 에이전트 궤적 → 버전형 의미 상태 → 업무 특화
   - EvoOntology가 실행 궤적을 축적 → 온톨로지 변경 후보 평가 → 검증된 의미 계층 배포 → 데이터 에이전트의 지속적 도메인 적응.
   - 병목: 저자 벤치마크 의존, 운영 환경의 드리프트·권한·오염 통제 미검증.

5. AI 분석·정책 학습 → 보안 운영 자동화
   - 플러그인 감사, 사이버 레인지 대응, 그래프 이상탐지 → 취약점 선별·자동 방어·경보 감소 → SOC 생산성 향상 가능성.
   - 병목: 미탐률, 최신 공격 전이, 잘못된 자동 조치, 독립 재현 및 운영비용 자료 부족.

## 5 AI Stack Signal Map

- Application/Distribution
  - Firefox Smart Window에 Mistral 배포.
  - 신호 강도: 높음. 실제 제공 및 생산 상태가 공식 확인됐다.

- Agent/Product Layer
  - ScienceBuddy의 장기 상호작용 기반 연구 에이전트.
  - 신호 강도: 중간. 프리뷰와 실험 코드는 있으나 전체 제품 소스와 생산 검증은 없다.

- Runtime/Inference
  - JustFit의 소비자 장비 장문맥 실행.
  - 신호 강도: 중간. 수치는 구체적이나 단일 구성의 저자 보고다.

- Data/Semantic Memory
  - EvoOntology의 버전형 온톨로지와 플러그인.
  - 신호 강도: 중간. 코드가 공개됐지만 성능은 독립 재현되지 않았다.

- Model/Method Research
  - PhysStream의 중간 속도 제어, LimiX-2의 표형 결합 모델링.
  - 신호 강도: 탐색적. 코드·가중치 또는 정량 공개가 불완전하다.

- Evaluation
  - Fuse의 사회적 프레이밍 민감성 평가.
  - 신호 강도: 중간. 데이터와 프레임워크는 공개됐지만 현실 사회관계로의 일반화는 불명확하다.

- Security
  - 플러그인 노출 분석, 자율 사고대응, RECAL 침입탐지.
  - 신호 강도: 탐색적~중간. 모두 생산 배포와 독립 검증이 없다.

- Compute/Hardware
  - 검증 통과 이벤트 없음. JustFit은 하드웨어 신제품이 아니라 런타임 연구로 분류했다.

- Business/Capital 및 Policy
  - 검증 통과 이벤트 없음.

## 6 반증·과장·재현성 감사

- Mistral–Firefox
  - 벤치마크 비적용.
  - 확인된 것은 지정 지역의 서비스 배포와 발표된 보존 조건이다. 신규 frontier model, 성능 우위, 매출, 규제 승인 또는 한국 제공으로 확대 해석하면 안 된다.

- ScienceBuddy
  - task: 네 종류 과학 과제군에서 하네스 진화와 모델 학습의 반복 개선.
  - baseline: 부모 하네스 및 이전 모델·하네스 단계.
  - metric: verifier가 채점한 단계별 과제 성능.
  - conditions: Qwen3.5-4B, 715/90/90 고정 분할, 3회 하네스/RL 사이클, 사이클당 하네스 3단계, 단계당 16 interactions·3 proposals, RL 단계당 GRPO 30 updates.
  - disclosure/contamination: 저장소 실험은 이전 논문 도표와 다르며 전체 호스팅 제품 소스가 아니다. 오염 평가는 없다.
  - independent replication: 없음.

- PhysStream
  - task: 복수 강체의 생성 중 속도 제어형 image-to-video.
  - baseline: 합성 벤치마크 상위 기준선 및 Tora, FlashMotion, DragStream, RealWonder.
  - metric: FVMD, trajectory error, 인간 선호.
  - conditions: 합성 탁상 강체 장면과 공개된 in-the-wild 비교 20건.
  - disclosure/contamination: FVMD 33% 감소, 궤적 오차 12% 감소, 85% 초과 선호는 저자 주장이다. 절대 점수, 평가자 절차, 오염 통제가 없다.
  - independent replication: 없음.

- LimiX-2
  - task: 문맥 내 구조화 데이터 예측 및 causal-skeleton 복원.
  - baseline: TabArena, TALENT, BCCO의 데이터셋 특화 모델과 기존 표형 파운데이션 모델.
  - metric: 우수한 예측과 정확한 skeleton 복원을 주장하지만 초록에 수치가 없다.
  - conditions: 다양한 구조·메커니즘·관측 과정을 갖는 구조적 인과모델 합성 데이터 사전학습.
  - disclosure/contamination: 비교 설정, compute, 오염 검사 미공개. feature attention을 일반적 인과 추정으로 간주할 수 없다.
  - independent replication: 없음.

- JustFit
  - task: 오픈웨이트 LLM의 로컬 장문맥 추론과 수학 문제 해결.
  - baseline: mlx-vlm의 30,720 positions.
  - metric: 최대 positions, tokens/s, peak process memory, AIME 2026 정확도.
  - conditions: 24 GiB M4 Pro, Qwen3.8-27B MXFP4. 최대 212,992 positions, 별도 32K probe 19.11 tokens/s, 32K+6K 반복 workload 중앙 peak 16,374 MiB, AIME 29/30.
  - disclosure/contamination: 용량·속도·AIME는 서로 다른 시험이다. 최대 문맥에서 29/30 정확도를 유지했다는 뜻이 아니다. AIME 오염 분석도 없다.
  - independent replication: 없음.

- Fuse
  - task: 주관적 사회 서술로부터 시뮬레이션 에이전트의 숨은 동기 추론.
  - baseline: 12개 LLM, 직접 추론과 사용자 매개·편향 프레이밍·정보량·대화 길이 조건 비교.
  - metric: 시뮬레이션 정답 대비 동기 예측 정확도.
  - conditions: 인간 주석 24,000건으로 시뮬레이션 충실도를 평가하고 21,000개 예제를 공개.
  - disclosure/contamination: 모델별 점수와 주석 합의도, 오염 통제가 초록에 없다. 구성된 동기는 현실 관계의 모호성을 대표하지 않는다.
  - independent replication: 없음.

- EvoOntology
  - task: DDR-Bench 10-K 조사, InsightBench 업무 분석, BIRD text-to-SQL.
  - baseline: 온톨로지 없는 ReAct 및 초기 온톨로지 계층.
  - metric: 4-backbone subset에서 DDR 89.5 대 69.5, Insight 54.2 대 53.2, BIRD 72.4 대 63.6.
  - conditions: GPT-5.5, GPT-5.6-sol, Claude-Sonnet-5, Claude-Opus-4.8; 동일 데이터·에이전트·디코딩·상호작용 예산 비교를 지향.
  - disclosure/contamination: 저자 보고이며 일부 값은 논문 그림에서 산출한 소수점 1자리 평균이다. 오염 분석이 없고 전체 6-backbone 결과가 아닌 부분집합이다.
  - independent replication: 없음.

- WordPress 플러그인 로그 노출
  - task: 정적·동적 분석으로 민감 로그 파일 노출 가능성 탐지.
  - baseline: 비교 탐지 기준선 없음.
  - metric: 81건 중 79건 수동 재현.
  - conditions: 설치량 상위 300개 플러그인으로, 전체의 약 0.6%지만 활성 설치의 75%라고 설명된다.
  - disclosure/contamination: 모델, 프롬프트, 비용, 미탐률, 비LLM 기준선이 없다. 잠재 노출은 실제 악용 입증과 다르다.
  - independent replication: 없음.

- 자율 사고대응 사이버 레인지
  - task: 공격 차단과 방어 조치의 가용성 비용을 함께 최소화.
  - baseline: 휴리스틱 사고대응 에이전트.
  - metric: 보안·가용성 결합 비용이나 초록에 수치 없음.
  - conditions: 가변 토폴로지, red-team, 가상 사용자, SIEM 경보, 시뮬레이터에서 학습한 RL 정책.
  - disclosure/contamination: 효과 크기, 분할, 불확실성, 실제망 전이가 없다. 공격자·사용자 정책에 민감하다.
  - independent replication: 없음.

- RECAL
  - task: provenance graph 기반 비지도 APT 탐지.
  - baseline: 선행 provenance 침입탐지법이나 구체 구성은 초록에 없음.
  - metric: DARPA E3 세 데이터셋 F1 99.99%, 99.93%, 99.99%; 최고 기준선 대비 0.88, 0.82, 0.42%p 향상.
  - conditions: 관계 균형형 masked graph learning과 관계별 정상 오차 분포 보정.
  - disclosure/contamination: 분할, 임계값, confidence interval, 코드, 오염 통제가 없다. 벤치마크 포화 및 노후화 가능성이 크다.
  - independent replication: 없음.

종합 판단: 포함된 연구·저장소 이벤트는 모두 Evidence A로서 “저자가 해당 내용을 공개했다”는 사실을 강하게 뒷받침한다. 그러나 저자 주장 자체를 독립 확인하는 Evidence B는 없고, C급 근거도 핵심 신호에 사용하지 않았다. Mistral 배포를 제외하면 생산 운용을 입증한 사건은 없다.

## 7 다음 확인 일정

- 즉시 확인
  - Mistral–Firefox의 실제 모델명, 지역별 rollout 문서, privacy validation 공개 여부.
  - ScienceBuddy와 EvoOntology의 태그 릴리스, 설치 재현성, 라이선스 및 이슈 추적.
  - PhysStream·LimiX-2·JustFit의 코드와 가중치 공개 여부.

- 첫 독립 재현 시점
  - JustFit: 동일 M4 Pro와 비Apple 장비에서 context capacity, 속도, 품질을 분리 측정.
  - ScienceBuddy: 고정 분할 3-cycle 실험 재현과 unseen scientific task 평가.
  - EvoOntology: 동일 예산 아래 전체 백본 및 외부 데이터셋 재실행.
  - RECAL: 정확한 분할·임계값으로 DARPA E3 재현 후 최신 provenance 데이터로 확장.

- 방법론 공개 시점
  - PhysStream 인간평가의 표본·무작위화·평가자 수.
  - Fuse의 모델별 점수와 주석자 합의도.
  - WordPress 연구의 모델·프롬프트·미탐률·수정 현황.
  - 사이버 레인지 연구의 절대 비용, 분산 및 held-out attacker 결과.

- 한국 관련 후속
  - Firefox Smart Window의 한국·한국어 지원.
  - JustFit의 한국어 장문맥 및 국내 사용 하드웨어 결과.
  - Fuse의 한국어 존댓말·간접화법 평가.
  - 보안 시스템의 국내 SOC·공공망 텔레메트리 검증.

## 8 Coverage Audit

- Frontier Models: terminal completion. 포함 1건.
- AI Research: terminal completion. 포함 5건.
- Agents/Developer Tools: terminal completion. 포함 0건.
- Open Source/Repos: terminal completion. 포함 1건.
- Chips/Compute/Infrastructure: terminal completion. 포함 0건.
- Enterprise/Applications: terminal completion. 포함 0건.
- Funding/M&A/Business: terminal completion. 포함 0건.
- Safety/Evaluation/Security: terminal completion. 포함 3건.
- Policy/Geopolitics: terminal completion. 포함 0건.
- Korea Exposure: terminal completion. 포함 0건.

중복 처리:
- AI Research의 관련 항목와 Open Source/Repos의 관련 항목는 동일 논문·코드 공개 사건으로 병합했다.
- 정규 Event ID는 최초 논문 제출 시점과 일치하는 관련 항목로 통일했다.
- 저장소 정보와 코드 공개 상태는 해당 정규 이벤트에 합쳤고 Open Source/Repos에서 별도 계상하지 않았다.

제외 처리:
- 관측창 밖의 Vercel 발표와 BLINDSPOT 저장소는 제외했다.
- 발행 시각을 검증할 수 없는 Vercel AI SDK 7은 제외했다.
- 신규 모델 사건이 아닌 IBM Research/Hugging Face의 에이전트 진단 항목은 Frontier Models에서 제외했다.
- 날짜·출처가 검증되지 않거나 중요도가 낮은 후보, 허용되지 않은 출처, 할당량을 채우기 위한 약한 항목은 제외했다.
- Evidence C 항목은 core signal에 포함하지 않았다.
- 빈 카테고리는 “검증 통과 이벤트 없음”으로 유지했다.

- **수록 사건 수:** 10
