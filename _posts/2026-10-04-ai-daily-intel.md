---
layout: ai-intel
title: "AI Daily Intel — 2026-10-04"
date: 2026-10-04 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-10-04/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-10-04
- **기준 시각:** 2026-10-04T06:00:00+09:00
- **수집 구간:** [2026-10-03T06:00:00+09:00, 2026-10-04T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 4

## 1 오늘의 AI 한 문장

이번 관측창의 핵심은 새 모델 출시 경쟁보다 ‘에이전트가 실제 상태를 정확히 바꾸는가’라는 신뢰성 검증과 보안·거버넌스 대응이며, 한국 은행 침해의 AI 개입은 아직 확인되지 않았다.

번들에서 전역 중복 제거 후 포함한 사건은 ThinkingBox 평가·OpenEnv 공개, Mythos 활용 HFS 취약점 조사 보도, OpenAI 안전보고 책임자의 사임 설명, KISA 보안 권고다. <br class="report-field-break" />Evidence A는 공식 공개 근거, B는 실명·기관 귀속 보도, C는 미확인 주장으로 구분한다. A도 독립 재현이나 상용 성과를 자동으로 뜻하지 않는다.

## 2 핵심 신호 5

### 신호 1 — 단일 시도 성능과 반복 신뢰성은 다른 지표다
Evidence A. ThinkingBox 저자 보고에서 Claude Opus 5.5의 pass@1은 67.16%지만, 모든 20회 시도가 성공한 과제 비중은 47.53%로 Opus 5와 같았다. 높은 단발 성능을 반복 업무의 무실패 보증으로 해석하면 안 된다.

[Microsoft·Hugging Face 공개](https://huggingface.co/blog/microsoft/thinkingbox)

### 신호 2 — 보안 에이전트의 발견 능력과 공격 확산을 분리해야 한다
Evidence B. 실명 연구자들이 Mythos 활용 HFS 취약점 발견 과정과 공격 관측을 설명했다. 실제 취약점 조사 업무에서의 활용 보도는 있으나, 모델의 발견 과정을 독립 재현한 결과나 다른 모델 대비 우월성은 없다.

[The Register 보도](https://www.theregister.com/security/2026/10/03/anthropics-super-bug-hunting-model-mythos-is-hardcore-good-at-math-as-latest-vuln-under-attack-shows/5300933)

### 신호 3 — 한국의 확인된 대응은 보안 권고이지 AI 공격 확정이 아니다
Evidence B. KISA 권고는 노출 자산, 웹/API 권한, 인증정보, 횡적 이동, 정보 유출 감시를 다룬다. 관리자 MFA와 노출 키 폐기 등은 실행 가능한 조치다. ARTEX가 은행 공격에 사용됐다는 주장은 <br class="report-field-break" />Evidence C로 분리한다.

[Digital Daily 보도](https://www.ddaily.co.kr/page/view/2026100318384955049)

### 신호 4 — 안전보고 인력 이탈은 공급자 거버넌스 점검 사유다
Evidence B. David Robinson의 사임 설명과 OpenAI 대변인 반응은 귀속 가능한 공개 발언이다. 조직문화 비판을 검증된 안전 실패로 확대하지 않되, 후임 책임과 안전보고 체계의 연속성은 확인할 필요가 있다.

[TechCrunch 보도](https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/)

다섯 번째 신호는 추가하지 않는다. 별도 강한 사건 없이 공개 코드나 한국 적용 가능성을 다른 사건으로 쪼개면 중복 집계가 된다.

## 3 영역별 AI 브리프

상태는 번들의 announcement, availability, code, independent_reproduction, production, revenue, regulatory를 각각 표시한다. 중복 사건은 아래 한 곳에서만 정식 원장을 작성하고 다른 영역에서는 참조한다.

### Frontier Models

  - 사건: Microsoft·Hugging Face의 ThinkingBox 신뢰성 평가 및 OpenEnv 이용 경로 공개.
  - **근거 등급:** A — 공식 공동 공개. 실행과 성능의 독립 재현은 미확인.
  - 공개일: 2026-10-03. 날짜 단위 근거이며 시각·시간대는 추정하지 않는다. 번들의 달력일 적격 판정을 따른다.
  - **출처 URL:** [huggingface.co](https://huggingface.co/blog/microsoft/thinkingbox)
  - 추가 코드 근거: [github.com](https://github.com/microsoft/thinkingbox)
  - OpenEnv 어댑터: [github.com](https://github.com/huggingface/OpenEnv/tree/main/envs/thinkingbox_env)
  - 의미: 답변이나 도구 호출의 성공이 아니라 최종 백엔드 상태와 부작용을 검사한다. 단발 성공, 여러 번 중 성공, 반복 전회 성공을 구분할 수 있다.
  - 한계: 합성 업무이며 실제 고객 운영 신뢰성을 입증하지 않는다. 한국어 성능·국내 배포·매출 근거도 없다.

1차 1건, 표적 2차 추가 0건, 검증 1건, 정식 포함 1건. 목표 대비 2건 부족. 이전 모델 출시와 창 밖 논문을 제외했고, 검색 관련성 저하 때문에 직접 뉴스룸·논문·블로그 확인으로 보완했다.

### AI Research

검증 통과 이벤트 없음.

1차 0건, 표적 2차 0건, 검증 0건, 포함 0건. 목표 대비 3건 부족. arXiv와 Hugging Face의 최신 표시 배치는 10월 2일이었고, 개별 논문은 10월 1일 또는 그 이전 제출이었다. SIFT 후속 보도는 새 연구 공개·재현을 입증하지 못했다. StarCraft 사례는 창 밖 보도라 후보로만 남긴다. 검색 오류와 Reuters 접근 차단은 완전성 제약이다.

### Agents/Developer Tools

  - 사건: Mythos 활용 Rejetto HFS 취약점 조사와 후속 공격 관측에 관한 실명 연구자 보도.
  - **근거 등급:** B — Horizon3의 Zach Hanley와 VulnCheck의 Patrick Garrity에게 귀속된 설명.
  - 공개 시각: 2026-10-03T16:27:00Z.
  - **출처 URL:** [www.theregister.com](https://www.theregister.com/security/2026/10/03/anthropics-super-bug-hunting-model-mythos-is-hardcore-good-at-math-as-latest-vuln-under-attack-shows/5300933)
  - 의미: CVE-2026-61500 조사에서 의사난수 출력 누출, 서명 키 복구, 세션 쿠키 위조를 연결한 과정이 보도됐다. 보도는 미국·일본 대상 공격 관측과 HFS v3.2.1 이상 수정도 설명한다.
  - 한계: 창 안 사건은 해당 보도와 귀속 가능한 기술·운영 정보 공개다. 발견·패치·최초 공격이 창 안에 발생했다는 뜻이 아니다. production은 실제 취약점 조사 업무 활용을 뜻하며 Mythos 일반 공개나 광범위한 상용 배포를 뜻하지 않는다.

1차 1건, 표적 2차 추가 0건, 검증 1건, 정식 포함 1건. 목표 대비 2건 부족. Claude Code 인접 릴리스는 정확한 시각상 창 밖이고, Codex 프리릴리스는 실질적 변경 설명이 부족했다. 제품 모음 기사와 과거 출시를 신규 사건으로 나누지 않았다.

### Open Source/Repos

검증 통과 사건: Frontier Models 원장의 ThinkingBox 공개를 참조한다. 별도 사건으로 재집계하지 않는다.

1차 0건, 표적 2차 1건, 검증 1건, 이 영역의 정식 원장 포함 0건. 영역 관련 포함 사건은 ThinkingBox 1건이며 목표 대비 2건 부족. OpenEnv 경로와 공개 코드는 확인됐으나 독립 실행 재현은 없다. llama.cpp decision models, Olmo-core 3, AstaBrief와 주요 저장소 릴리스는 창 밖이었다. 자동 빌드나 날짜 불명 변경을 채우기용 사건으로 쓰지 않았다.

### Chips/Compute/Infrastructure

검증 통과 이벤트 없음.

1차 0건, 표적 2차 0건, 검증 0건, 포함 0건. 목표 대비 3건 부족. Amazon 지역사회 투자·NDA 약속, DGX Spark 64GB, Oracle 전력 승인 위험 보도의 원 공개 시각은 창 이전이었다. 후속 기사와 정정은 별도 신규 발표가 아니다. 직접 제조사·기술언론·한국언론·저장소·논문 확인을 수행했지만 검색 오류, Reuters 차단, 동적 페이지의 정보 부족이 남았다.

### Enterprise/Applications

검증 통과 이벤트 없음.

1차 0건, 표적 2차 0건, 검증 0건, 포함 0건. 목표 대비 3건 부족. 기업 도입·교육 발표는 창 이전이고, ServiceNow 사례와 Perplexity 한국 법인 계획 보도는 창 이후였다. 중국 오픈웨이트 모델 의존 기사와 메시징 에이전트 모음은 새 배포 사건을 입증하지 못했다. Iris는 날짜 없는 제품 주장이라 후보로만 보존한다. 검색 오류·429 응답·누락된 발행 정보가 완전성을 제한한다.

### Funding/M&A/Business

  - 사건: OpenAI 안전보고 작성 책임자 David Robinson의 사임 설명과 조직문화 비판 공개.
  - **근거 등급:** B — Robinson의 실명 발언과 OpenAI 대변인 Drew Pusateri의 귀속 가능한 반응.
  - 공개일: 2026-10-03. Funding 연구자의 날짜 있는 기사 목록 확인을 근거로 날짜 단위 적격성을 유지한다.
  - **출처 URL:** [techcrunch.com](https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/)
  - 의미: 안전보고 책임 인력의 이탈 설명은 공급자 인력·거버넌스 변화로 포함한다. 투자나 인수 사건으로 분류하지 않는다.
  - 한계: 실제 퇴사 효력일, 후임 책임, 안전 절차 변경은 미확인이다. 비판은 당사자 평가이며 독립 조사 결과가 아니다.

1차 1건, 표적 2차 추가 0건, 검증 1건, 정식 포함 1건. 목표 대비 2건 부족. Amazon 약속과 과거 에이전트 투자·인수는 재포장하지 않았다. 로보택시·웨어러블·데이터센터 기사는 새 거래나 승인 사건을 입증하지 못했다. 검색 오류와 Reuters 차단으로 포괄적 부재를 단정할 수 없다.

### Safety/Evaluation/Security

  - 사건: KISA의 국내 기업·기관 대상 긴급 보안 권고.
  - **근거 등급:** B — Digital Daily가 발행 기관·담당 팀과 권고 내용을 명시한 보도.
  - 공개 시각: 2026-10-03T19:04:35+09:00.
  - **출처 URL:** [www.ddaily.co.kr](https://www.ddaily.co.kr/page/view/2026100318384955049)
  - 의미: 노출 자산, 웹/API 인가, 인증정보, 서버 침해·횡적 이동, 정보 유출 감시의 다섯 영역을 다룬다. 관리자·원격접속 MFA, 노출 키 교체, API 호출·다운로드 제한, 로그 보존 등이 제시됐다.
  - 한계: 기관 권고의 공개이지 새로운 구속력 있는 규제 제정이나 AI 공격 확정이 아니다. regulatory: yes는 이 기관 대응 의미로 제한한다. 중복 원장 간 code와 revenue 값이 달라, 부재를 확정하는 no 대신 unknown을 유지한다.

추가 검증 사건은 Agents/Developer Tools 원장의 Mythos/HFS 보도를 참조한다.

1차 1건, 표적 2차 1건, 검증 2건, 이 영역의 정식 원장 포함 1건. 영역 관련 포함 사건은 2건이며 목표 대비 1건 부족. 이전 OpenAI 통지·California 소환장과 창 밖 Google 보상 프로그램 보도는 제외했다. ARTEX 주장은 C로 남겼다. 직접 정부·연구·저장소·언론 확인에도 검색 오류와 접근·메타데이터 제약이 남았다.

### Policy/Geopolitics

검증 통과 이벤트 없음.

1차 0건, 표적 2차 0건, 검증 0건, 포함 0건. 목표 대비 3건 부족. EU 항목, 수출 혐의 보도, California 소환장, arXiv 제출 제한은 창 이전이었다. Grok 관련 익명 주장은 과거 활동의 재전재이고 새 정책 조치를 입증하지 못했다. Mythos 보도도 신규 규제나 국가 배후를 확인하지 않는다. 검색 오류, Reuters 차단, 불완전한 목록 추출이 완전성 제약이다.

### Korea Exposure

검증 통과 사건: Safety/Evaluation/Security 원장의 KISA 권고를 참조한다. 직접 한국 노출이 확인된 포함 사건이다.

1차 0건, 표적 2차 1건, 검증 1건, 이 영역의 정식 원장 포함 0건. 영역 관련 포함 사건은 KISA 1건이며 목표 대비 2건 부족. 금융사 침해 자체가 AI 개입을 입증하지 않으며 ARTEX 주장은 후보에 남긴다. 이전 행사·제품 발표, 발행 정보 없는 기사, 창 밖 금융당국 회의·Perplexity 계획은 제외했다. 검색 오류와 누락된 발행 정보가 완전성을 제한한다.

## 4 기술→산업 전달경로

- 상태 기반 평가 → 기업 에이전트 도입 심사  
  ThinkingBox는 은행·보험·여행·고객서비스 업무에서 실제 상태 변경과 부작용을 검증하는 평가 경로를 제공한다. 이는 도입 심사의 방법론적 신호이지 한국 운영 성과나 고객 계약의 증거가 아니다.

- AI 보조 취약점 조사 → 패치·노출 관리  
  Mythos/HFS 보도는 취약점 연결 능력과 공격 관측을 보여주는 귀속 사례다. 산업적 대응은 영향 버전·패치·노출 확인이며, 공격 관측을 모델 발견 과정의 재현으로 간주하면 안 된다.

- 국내 침해 대응 → 권한·키·로그 관리  
  KISA 권고는 공격의 AI 여부가 미확정이어도 적용 가능한 방어 조치를 제시한다. 권고 공개와 기업의 실제 이행·효과는 별개다.

- 안전보고 인력 변화 → 공급자 거버넌스 실사  
  Robinson의 사임 설명은 책임 인계와 평가 공개 절차를 확인할 사유다. 고객 이탈·매출 감소·규제 위반으로 이어졌다는 근거는 없다.

## 5 AI Stack Signal Map

| 계층 | 포함 근거 | 확인된 신호 | 확인되지 않은 연결 |
|---|---|---|---|
| 모델·평가 | ThinkingBox, A | 저자 보고 모델 비교와 반복 신뢰성 차이 | 독립 재현, 한국어 성능, 새 모델 출시 |
| 오픈 평가 환경 | ThinkingBox, A | 공개 코드·OpenEnv 이용 경로 | 자체 완결 실행, 학습 통합, 고객 운영 성과 |
| 보안 에이전트 | Mythos/HFS, B | 실제 조사 업무 활용에 대한 실명 설명 | 일반 공개, 비교 성능, 발견 과정 독립 재현 |
| 기업 방어·한국 노출 | KISA, B | 구체적 보안 권고 공개 | AI 공격 확정, 권고 이행 효과, 새 법적 의무 |
| 공급자 거버넌스 | Robinson, B | 사임 설명·회사 반응 | 퇴사 효력일, 후임, 안전 체계 변경 |
| 칩·전력·자금·정책 | 신규 포함 없음 | 적격 신규 근거 부족 | 산업 활동 자체의 부재는 단정 불가 |

## 6 반증·과장·재현성 감사

### ThinkingBox 벤치마크

- Task: 소매, 자동차보험, 여행, 네오뱅크, 컨설팅의 합성 상태형 업무 507개. 최종 백엔드 상태와 의도치 않은 부작용을 검사한다.
- Baseline: Claude Opus 5.5·Opus 5, GPT-5.4, GPT-6 Astra, Kimi-K3, Qwen3.8-27B, DeepSeek-V4-Pro 등을 포함한 18개 모델 비교.
- Metric: 저자 보고 task-weighted pass@1은 Opus 5.5 67.16%, Opus 5 66.50%, GPT-6 Astra 58.31%, Kimi-K3 57.37%. 관측된 20회 전부 성공 과제 비중은 각각 47.53%, 47.53%, 45.56%, 13.41%. Kimi-K3의 pass@20은 93.89%.
- **Conditions: 동일한 초기 백엔드에서 과제별 20회 독립 시도. 정식 실행에는 고정된 프레임워크·데이터와 공개된 번들 해시가 중요하다.** OpenEnv 어댑터는 평가용이며 외부 ThinkingBox 서비스와 모델 엔드포인트 관리가 필요하다.
- **Disclosure: 공식 저자 공개다.** 비용 추정은 정가 스냅샷이며 실제 운영 청구서가 아니다. 10월 3일 공개를 기초 연구의 최초 발표일로 해석하지 않는다.
- **Contamination: 독립적인 오염 감사가 확인되지 않았다.** 공개 벤치마크 노출에 따른 위험은 남는다.
- Independent replication: unknown.
- 반증 기준: 고정 설정과 전체 추적 로그를 사용한 독립 반복 평가에서 수치·순위가 재현되지 않으면 현재 비교 해석을 수정해야 한다.
- **과장 금지: pass@20은 반복 전회 성공이 아니며, 관측 20/20도 항상 성공한다는 보증이 아니다.** 합성 업무 성적을 실제 금융 운영 SLA로 바꾸지 않는다.

### 기타 포함 사건

- **Mythos/HFS: 통제 벤치마크가 아니므로 task/baseline/metric 비교는 적용되지 않는다.** 수학적 능력에 대한 묘사는 비교 성능 증명이 아니다. 취약점 재현, 모델 기여, 인간 검증, 공격 관측을 분리해야 한다.
- **KISA: 보안 권고이며 벤치마크가 아니다.** 담당 조직 이름에 AI가 포함되거나 공격에 AI 사용이 의심된다는 사실만으로 AI 원인을 확정하지 않는다.
- **Robinson: 인력·거버넌스 공개이며 벤치마크가 아니다.** 사임 설명과 조직문화 평가를 분리하고 회사 반응도 함께 보존한다.

### 후보의 성능·인과 주장

- llama.cpp 지연시간은 단일 NVIDIA RTX PRO 6000의 발행자 측 측정으로 독립 재현이 없다.
- Olmo-core 3 처리량·용량 주장은 무작위 라우팅 시스템 측정과 짧은 용량 시험을 모델 품질·지속 학습 성과와 구분해야 한다.
- AstaBrief는 주로 2025년 평가이며 최신 프런티어 모델 대상으로 전면 재평가하지 않았다는 단서가 있다.
- **ServiceNow 사례는 참여자 작성 사례다.** 표본·측정 조건이 충분하지 않고 개발비 80% 감소는 기대이지 검증된 절감률이 아니다.
- Iris의 업무 감소 주장은 평가 조건이 공개되지 않았다.
- ARTEX의 은행 공격 사용은 익명 귀속·명시적 미확정 주장이다.
- StarCraft 봇 대체 보도는 평가 규칙 우회에 관한 귀속 보도이지 우수한 게임 성능이나 독립 재현의 증거가 아니다.

## 7 다음 확인 일정

아래는 후속 확인 우선순위이며 새 사실이나 확정된 일정이 아니다.

| 확인 대상 | 다음 확인 | 판단을 바꾸는 증거 |
|---|---|---|
| ThinkingBox | 고정 설정·모델 버전·전체 로그·오염 통제 및 독립 반복 실행 | 반복 지표 재현, 한국어 업무 결과 |
| Mythos/HFS | 원 연구자 공개·벤더 권고·CVE·패치·추가 공격 관측 | 영향 버전과 모델 기여의 독립 기술 검증 |
| KISA·국내 금융 침해 | 원 권고·후속 포렌식·기관 발표 | AI 도구 사용을 입증하거나 반박하는 명시적 조사 결과 |
| OpenAI 안전보고 인력 | 공식 퇴사 확인·효력일·후임·책임 인계 | 실제 거버넌스 절차 변경 |
| 창 밖 후보 | 다음 적격 창에서 새 공개 여부 확인 | 과거 기사 재노출이 아닌 새 발표·가용성·조치 |

DGX Spark의 10월 23일 파트너 가용성과 Google 보상 프로그램의 2027년 1분기 업데이트는 후보 자료에 제시된 미래 확인 지점이다. 현재 가용성이나 재개 완료로 취급하지 않는다.

## 8 Coverage Audit

### 연구자 완료와 영역별 집계

10개 연구자 모두 최종 결과와 2회 검색 기록을 제출한 terminal completion 상태다. 이는 조사 종료를 뜻하며 검색의 완전성이나 모든 주장 검증을 뜻하지 않는다.

‘1차/2차’는 search_audit의 initial_count/targeted_count다. 발견 후보 전체 수나 검색 결과 총수는 제공되지 않았으므로 이를 후보 총량으로 바꾸지 않는다. Watchlist는 별도의 미포함 후보이며 검증 수에 가산하지 않는다.

‘정식 포함’은 중복 제거 후 해당 영역이 소유한 원장 수다. ‘관련 포함’은 다른 영역 원장 참조까지 포함한 영역별 사건 수로, 전역 합계에 더하지 않는다.

| Category | 완료 | 1차 | 표적 2차 | 검증 | 정식 포함 | 관련 포함 | 목표 부족 |
|---|---|---:|---:|---:|---:|---:|---:|
| Frontier Models | 완료 | 1 | 0 | 1 | 1 | 1 | 2 |
| AI Research | 완료 | 0 | 0 | 0 | 0 | 0 | 3 |
| Agents/Developer Tools | 완료 | 1 | 0 | 1 | 1 | 1 | 2 |
| Open Source/Repos | 완료 | 0 | 1 | 1 | 0 | 1 | 2 |
| Chips/Compute/Infrastructure | 완료 | 0 | 0 | 0 | 0 | 0 | 3 |
| Enterprise/Applications | 완료 | 0 | 0 | 0 | 0 | 0 | 3 |
| Funding/M&A/Business | 완료 | 1 | 0 | 1 | 1 | 1 | 2 |
| Safety/Evaluation/Security | 완료 | 1 | 1 | 2 | 1 | 2 | 1 |
| Policy/Geopolitics | 완료 | 0 | 0 | 0 | 0 | 0 | 3 |
| Korea Exposure | 완료 | 0 | 1 | 1 | 0 | 1 | 2 |

### 중복·제외·불일치 처리

- **ThinkingBox 평가와 OpenEnv 공개는 같은 공식 글의 같은 공개 사건으로 병합했다.** 평가 원장을 정식 항목으로 유지한다.
- Mythos/HFS의 개발도구·보안 원장은 같은 보도와 사실이므로 개발도구 원장 하나만 유지한다.
- **KISA의 보안·한국 원장은 같은 권고이므로 보안 원장 하나만 유지한다.** code·revenue의 unknown/no 차이는 unknown으로 보수 처리했다. 기관 권고를 구속력 있는 새 규제로 해석하지 않는다.
- **Robinson은 Funding의 검증 사건과 Safety의 후보가 동일하다.** Funding 연구자가 확인한 날짜 있는 기사 목록을 근거로 포함하되, Safety 추출에서 발행 메타데이터가 누락됐다는 제한도 보존한다. URL 숫자만으로 시각을 만들지 않는다.
- **중복 Watchlist는 사실 단위로 합쳤다.** Perplexity는 표적 조사에서 확인한 10월 4일 10:10 KST 목록 시각을 적용해 창 밖으로 처리한다. Oracle 후보의 regulatory 값 차이도 새 승인·거부 결정의 증거로 사용하지 않는다.
- **일부 coverage_notes의 ‘사건 없음’ 문장은 1차 또는 표적 조사만 설명한다.** 최종 events 배열과 search_audit의 2회 결과를 기준으로 집계했다.
- 창 밖 보도, 과거 사건의 재보도, 버전만 있는 프리릴리스, 익명 AI 귀속, 날짜 없는 제품 주장, 실질적 신규 변화가 없는 동향 기사는 핵심 사건에서 제외했다.
- 반복된 검색 관련성 문제, Reuters 차단, 일부 429·동적 페이지·발행 정보 누락 때문에 이 결과를 전 세계 사건의 완전한 목록으로 주장하지 않는다.

- **수록 사건 수:** 4

### Watchlist (미확인 후보)

아래 후보는 전역 사실 중복을 제거했다. 이미 본문에 병합된 Robinson 후보도 원 연구자의 보류 사유를 보존하며, 별도 사건으로 세지 않는다.

- 후보: GPT-6 Astra의 StarCraft 인간 제작 봇 대체 보도 (미포함 사유: 명시적 발행 시각이 관측창 이후이며 과거 활동을 창 안 공개로 바꿀 수 없음 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1004543/openai-gpt-cheat-starcraft))
- 후보: Claude Code v2.1.289 팀원 생성·권한 경계 수정 (미포함 사유: 정확한 발행 시각이 창 종료 이후이며 동작 주장은 미시험 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.289))
- 후보: Claude Code v2.1.288 에이전트 복구·MCP 재인증 개선 (미포함 사유: 정확한 발행 시각이 창 시작 이전이며 동작 주장은 미시험 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/anthropics/claude-code/releases/tags/v2.1.288))
- 후보: Codex 0.162.0-alpha.11 프리릴리스 (미포함 사유: 버전 공개 외 실질적 기능 변화·상세 변경 내역을 확인하지 못함 / <br class="report-field-break" />출처: [github.com](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.11))
- 후보: Google 오픈소스 취약점 보상 프로그램 일시 중단 (미포함 사유: 보도는 창 이후이고 중단 효력일도 창 이전이며 여러 영역의 같은 후보를 병합 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/10/04/google-froze-its-open-source-bug-bounty-program-due-to-a-significant-rise-in-ai-submissions/))
- 후보: llama.cpp decision models 지원 (미포함 사유: 원 공개일이 10월 2일로 창 밖이며 지연시간 주장은 독립 재현 없음 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp))
- 후보: Olmo-core 3 MoE 학습 인프라 (미포함 사유: 원 공개일이 10월 1일로 창 밖이며 처리량·용량 주장은 미재현 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/allenai/olmocore3))
- 후보: AstaBrief 8B 가중치·학습 데이터 공개 (미포함 사유: 원 공개일이 10월 2일로 창 밖이며 과거 평가를 새 평가로 취급할 수 없음 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/allenai/astabrief))
- 후보: Amazon 데이터센터 지역사회 투자·NDA 약속 (미포함 사유: 원 공개가 창 이전이며 정정·후속 기사는 새 약속이 아니고 투자 집행도 미확인 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/10/02/shut-up-and-take-our-money-amazon-plows-1b-into-quashing-datacenter-dissent/5300914))
- 후보: Amazon 데이터센터 투명성 약속에 관한 WIRED 보도 (미포함 사유: 같은 Amazon 후보의 보강 출처로 병합하며 원 공개일은 10월 2일이고 계약업체 적용 범위도 미확인 / <br class="report-field-break" />출처: [www.wired.com](https://www.wired.com/story/amazon-says-it-is-going-to-stop-using-ndas-for-data-centers/))
- 후보: NVIDIA DGX Spark 64GB 구성 (미포함 사유: 원 공개가 창 이전이며 파트너 가용성은 미래 일정이고 성능 주장은 미재현 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/10/02/nvidia-debuts-4999-dgx-spark-with-half-the-ram-and-storage-amid-memory-crunch/5300622))
- 후보: Oracle Wisconsin AI 캠퍼스 전력 승인 일정 위험 (미포함 사유: 원 보도가 창 이전이며 전망은 확정된 개장 변경이나 규제 거부 결정이 아님 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/on-prem/2026/10/02/power-approval-set-to-delay-oracles-wisconsin-ai-datacenter/5300832))
- 후보: Perplexity 한국 법인 설립 계획 (미포함 사유: 표적 조사에서 확인한 발행 시각은 10월 4일 10:10 KST로 창 이후이며 인터뷰는 창 이전이고 설립 완료도 미확인 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261004000952))
- 후보: 한국 기업의 중국 오픈웨이트 모델 의존 동향 (미포함 사유: 새로운 배포·라이선스·정책 사건이 아닌 동향 분석이며 발행 메타데이터도 불완전 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261003004306))
- 후보: ServiceNow AI 디지털 워커 운영 파일럿 사례 (미포함 사유: 발행 시각이 창 이후이고 참여자 사례의 성능·절감 주장은 독립 검증 부족 / <br class="report-field-break" />출처: [venturebeat.com](https://venturebeat.com/orchestration/we-built-an-ai-agent-for-servicenow-the-real-pain-points-were-narrower-than-our-roadmap-assumed))
- 후보: Iris의 지속형 iMessage 업무 비서 (미포함 사유: 날짜 없는 제품 페이지이며 새 출시·가용성 변화와 성능을 확인하지 못함 / <br class="report-field-break" />출처: [iris-agent.co](https://iris-agent.co/personal-assistant))
- 후보: OpenAI의 100개 이상 조직 대상 모델 활동 통지 (미포함 사유: 정확한 보도 시각이 창 이전이며 통지를 침해·개인정보 접근 확정으로 볼 수 없음 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/10/02/openai-alerts-100-orgs-that-its-misaligned-models-attempted-to-break-in-or-worse/5300891))
- 후보: California 법무장관의 OpenAI 사이버보안 조사 소환장 (미포함 사유: 정확한 보도 시각이 창 이전이며 조사는 위법 확정이 아님 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/ai-and-ml/2026/10/02/openais-wandering-ai-agents-earn-it-a-california-subpoena/5300850))
- 후보: ARTEX의 한국 은행 공격 사용 의혹 (미포함 사유: 창 안 보도지만 AI 귀속은 익명 출처에 의존하고 당국·금융사가 공격 원인과 방법을 확정하지 않음 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261003000032))
- 후보: David Robinson의 OpenAI 사임·안전문화 비판에 관한 Safety 연구자 보류 항목 (미포함 사유: 해당 연구자의 추출에는 명시적 발행 메타데이터가 없었으며 별도 항목은 Funding의 검증 원장에 병합해 중복 제외 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/))
- 후보: Trump의 Grok 활용 Venezuela 관련 의혹 (미포함 사유: 익명 주장 재전재이며 기초 공개·활동이 창 이전이고 독립 검증된 새 정책 조치가 아님 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261003082217))
- 후보: NVIDIA 하드웨어 중국 우회 수출 혐의 기소 보도 (미포함 사유: 정확한 보도 시각이 창 이전이며 혐의는 유죄 판단이 아님 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/10/02/californian-accused-of-shipping-300m-worth-of-nvidia-chips-to-china-without-uncle-sams-approval/5300856))
- 후보: arXiv 신규 제출 제한 (미포함 사유: 보도와 원 정책 발표가 창 이전이며 저장소 운영 정책이지 정부 규제가 아님 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/ai-and-ml/2026/10/02/arxiv-imposes-rate-limit-on-paper-submissions-to-stem-the-ai-slop-tide/5300899))
- 후보: 한국 금융당국의 보안 회의·AI 방어 요청 (미포함 사유: 회의와 발행이 창 종료 이후이며 AI 해킹 가능성 언급은 원인 확정이 아님 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261004000019))
