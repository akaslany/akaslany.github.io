---
layout: ai-intel
title: "AI Daily Intel — 2026-11-05"
date: 2026-11-05 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-05/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-05
- **기준 시각:** 2026-11-05T06:00:00+09:00
- **수집 구간:** [2026-11-04T06:00:00+09:00, 2026-11-05T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10
- **수록 사건 수:** 26

## 1 오늘의 AI 한 문장

이미지·영상·보안 모델과 에이전트 운영 도구의 공급은 확대됐지만, 독립 재현·실제 수요·권한 통제까지 확인된 성과는 제한적이다.

본 보고서는 제공된 연구 번들만 편집했다. <br class="report-field-break" />Evidence A는 공식·논문·정부의 1차 공개 근거, B는 귀속 가능한 취재 근거, C는 미확인 주장 중심의 근거다. A도 성능의 독립 검증을 뜻하지 않는다.

시간 적격성에는 중요한 한계가 있다. 번들은 날짜만 있는 11월 4~5일 자료에 달력일 중첩 예외를 적용했다. 아래에서는 이를 조건부로 유지하되, 정확한 24시간 구간 내 게시가 확인된 자료와 구별한다. 날짜만으로 정확한 창 내 게시를 확정하지 않는다.

## 2 핵심 신호 5

- **생성 미디어가 속도·품질·편집 제어별로 분화한다.** OpenAI Images 2.6과 Google Gemini Omni 1.2 Flash는 제작 반복비용을 낮출 가능성이 있지만, 지연시간·품질·한국어 성능은 독립 검증 전이다. [OpenAI](https://openai.com/index/introducing-images-2-6/) · [Google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
- **보안 모델의 능력 확대와 접근 제한이 함께 진행된다.** GPT-6 Cyber는 승인 고객에게 제한 제공된다. 공급사 벤치마크와 혼재된 외부 평가를 함께 봐야 하며, 내부 Critical 분류는 규제 승인이 아니다. [발표](https://openai.com/index/introducing-gpt-6-cyber/) · [시스템 카드](https://deploymentsafety.openai.com/gpt-6-cyber)
- **에이전트의 병목이 모델 호출 밖으로 이동한다.** Pierre 인수 계획, Copilot 리뷰 지표, Vera CPU 비교는 각각 코드 변경 관리·운영 관측·CPU 실행 효율을 겨냥한다. 인수 완료나 생산성 개선까지 입증된 것은 아니다. [Pierre](https://openai.com/index/openai-to-acquire-pierre/) · [Copilot](https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate) · [Vera](https://blogs.nvidia.com/blog/vera-cpu-highest-throughput-fastest-agents/)
- **기업 내부 사용과 소비자 거래 확산은 별개의 단계다.** Salesforce와 현대제철은 업무 사용을 공개했지만, Uber의 에이전트 주문 공개치는 대중적 상거래 확산 주장에 반증을 제공한다. 각 수치는 회사 보고이지 독립 감사 결과가 아니다. [Salesforce](https://www.salesforce.com/news/stories/agentforce-coworker-surpasses-185k-users/) · [현대제철](https://www.etnews.com/20261104000117) · [Uber](https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/)
- **문서 추출 충실도와 지속적 권한 검사가 별도 보안 계층으로 부상한다.** Office 추출 불일치 연구와 ACCA는 각각 모델 입력 이전, 실행 직전의 실패를 다룬다. 모두 연구 공개 단계이며 실제 방어 효과의 독립 재현은 미확인이다. [문서 추출](https://arxiv.org/abs/2611.05806) · [ACCA](https://arxiv.org/abs/2611.05632)

## 3 영역별 AI 브리프

각 원장의 일곱 상태는 announcement, availability, code, independent_reproduction, production, revenue, regulatory를 분리해 표시한다. yes는 해당 사건에서 설명한 범위에만 적용되며 unknown은 no와 다르다.

### Frontier Models

  - 사건: Images 2.6을 ChatGPT·Codex와 API의 Flare·Sunburst로 공개. GIF, 이미지 마크업, SVG 내보내기, 품질과 별도인 complexity 제어를 제시했다.
  - **근거 등급:** A — 공식 발표. 게시일 2026-11-04, 시각·시간대 미상으로 달력일 예외 적용.
  - **출처:** [openai.com](https://openai.com/index/introducing-images-2-6/)
  - 해석: 제작 반복비용 감소 가능성은 있으나 고객 예시는 배포 규모·매출 증거가 아니다. 한국어 타이포그래피와 연속 편집 일관성 확인이 필요하다.

  - 사건: GPT-6 Cyber를 선정·승인된 Daybreak Red 고객에게 API·Codex로 제한 제공. 더 넓은 접근은 계획이다.
  - **근거 등급:** A — 공식 발표 및 번들에서 확인한 시스템 카드. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [openai.com](https://openai.com/index/introducing-gpt-6-cyber/)
  - 해석: production은 회사·고객이 설명한 운영상 보안 사용을 가리킨다. 한국 접근 자격과 현지 배포는 미확인이고, Critical은 OpenAI 내부 분류다.

  - 사건: Gemini API·Gemini for business 일반 제공 발표. 기본 클립 길이를 10초에서 15초로 늘리고 다중 턴 편집을 제공하며, 720p 가격을 초당 0.07달러로 제시했다.
  - **근거 등급:** A — 공식 발표. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)
  - 해석: production은 Google이 보고한 업무 사용에 한정한다. 앱 배포는 별도 순차 진행이며 한국 이용 가능성·실청구 가격·음성 품질은 확인되지 않았다.

### AI Research

  - 사건: 장기 터미널 작업에서 매 턴 여러 행동을 생성하고 별도 선택기가 하나를 고르는 추론 방식 공개.
  - **근거 등급:** A — 논문. 최초 제출 2026-11-04T18:23:14+00:00으로 정확한 창 내.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.06868)
  - 해석: availability는 논문 공개다. 보고된 정확도 개선과 추가 추론비용을 동일 계산예산에서 비교해야 한다.

  - 사건: 실제 개인 맥락과 전문가 루브릭을 활용해 금융·이사·구직·육아 등 소비자 에이전트 과제를 평가하는 LifeVal 공개.
  - **근거 등급:** A — 논문. 최초 제출 2026-11-04T15:55:20+00:00으로 정확한 창 내.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.06687)
  - 해석: 논문 공개와 전체 데이터셋 공개는 다르다. 개인정보·동의·평가 신뢰도와 한국 소비자 맥락의 적용 가능성은 미확인이다.

  - 사건: 질문 요구·증거·추론을 구조화해 검색 에이전트의 중간 추론 오류를 검사하는 GraphRail 공개.
  - **근거 등급:** A — 논문. 최초 제출 2026-11-04T15:37:36+00:00으로 정확한 창 내.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.06662)
  - 해석: 최종 정답만으로 놓치는 오류를 겨냥한다. 저자 이름만으로 한국 소속·한국어 검증을 추정하지 않는다.

### Agents/Developer Tools

  - 사건: Xcode 기본 코딩 어시스턴트의 Copilot 공개 프리뷰 발표. Xcode 27.3 beta와 macOS Tahoe 26.6 이상을 요구하며 기존 확장과 별도다.
  - **근거 등급:** A — 공식 변경 기록. 게시일 2026-11-04, 정확한 창 내 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant)
  - 해석: 공개 프리뷰는 일반 제공·운영 도입의 증거가 아니다. 한국 Apple 플랫폼 개발팀에 대한 관련성은 잠재적이다.

  - 사건: 조직·기업 저장소 일별 사용 보고에 Copilot 리뷰 평가·대응 댓글 수와 세부 분류를 추가.
  - **근거 등급:** A — 공식 변경 기록. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [github.blog](https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate)
  - 해석: addressed에는 향후 수정 약속도 들어갈 수 있어 수정 완료율이 아니다. 봇 PR의 지표별 포함 기준도 다르다.

검증 제출 3건 중 Pierre 인수 계획은 Funding/M&A/Business에 단일 원장으로 배치했다. 이 영역의 포함은 2건이며, 중복을 메우기 위한 대체 사건은 추가하지 않았다.

### Open Source/Repos

  - 사건: NVIDIA가 Cosmos 3 시뮬레이션 체크포인트 4종과 추론 노트북·후학습 레시피를 공개.
  - **근거 등급:** A — NVIDIA의 공식 게시물. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation)
  - 해석: 각 모델의 학습 가능 파라미터는 160억 개로 설명된다. OpenMDW1.1 조건의 오픈웨이트이며 무제한 OSI식 라이선스로 표현하지 않는다. 센서 일관성과 정책 전이는 미검증이다.

  - 사건: LeRobot v0.7.0 발표. 상호작용 로봇 제어, 원격 GPU 서빙, 데이터 스트리밍, FSDP2/HSDP·분산 체크포인트를 제공한다.
  - **근거 등급:** A — 공식 발표와 별도 확인된 공개 코드·버전 문서. 게시일 2026-11-05, 정확한 창 내 공개 시점 미확인.
  - **출처:** [huggingface.co](https://huggingface.co/blog/lerobot/lerobot-release-v070)
  - 해석: 현재 코드 접근 가능성과 창 내 접근 가능 시점은 구별한다. 설치·체크포인트·추론 인터페이스 변경과 원격 제어 안전성 검토가 필요하다.

1차 1건, 표적 2차 1건으로 검증·포함 2건이다. 목표 대비 1건 부족하며, 신규 공개 산출물이 확인되지 않은 Dharma와 과거 출시 회고인 Phonon으로 채우지 않았다.

### Chips/Compute/Infrastructure

  - 사건: NVIDIA가 Vera CPU의 에이전트 속도·전력당 처리량 비교를 공개.
  - **근거 등급:** A — 공식 성능 주장 공개. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [blogs.nvidia.com](https://blogs.nvidia.com/blog/vera-cpu-highest-throughput-fastest-agents/)
  - 해석: Perplexity의 향후 운영 배포 계획은 현재 운영 증거가 아니다. 한국 고객·배포는 제시되지 않았다.

  - 사건: The Register가 최대 128코어를 지원하는 vSphere Express와 유통 계획을 보도.
  - **근거 등급:** B — Broadcom 임원·대변인 귀속 취재. 게시 2026-11-04T17:01:00+00:00으로 정확한 창 내.
  - **출처:** [www.theregister.com](https://www.theregister.com/virtualization/2026/11/04/vmware-returns-to-low-end-server-virtualization-with-vsphere-express/5307466)
  - 해석: 범용 가상화 구매 선택지의 변화다. AI 특화성은 간접적이며 AI 운영 도입으로 읽지 않는다. 별도 S3 호환 vSAN 기능은 2027년 1분기 예정이다.

  - 사건: IBM·AMD·ORNL이 양자 오류정정을 위한 양자–HPC 공동설계 플랫폼을 발표.
  - **근거 등급:** A — IBM 공식 발표, 번들에서 AMD의 동일 협력 설명도 확인. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [newsroom.ibm.com](https://newsroom.ibm.com/2026-11-05-oak-ridge-national-lab,-ibm,-and-amd-launch-new-co-design-platform-for-quantum-error-correction)
  - 해석: Nighthawk와 MI355X·5세대 EPYC 기반 Umbra의 통합 환경을 설명한다. 일반 고객 접근·상용 운영·새 성능 기록은 확인되지 않았고, AI와의 연결은 HPC 인프라 차원이다.

### Enterprise/Applications

  - 사건: Agentforce Coworker 연결·가격 확대와 기업 사용 사례 공개. 현재 제공 기능과 11월·12월 예정 기능을 구분했다.
  - **근거 등급:** A — 공식 발표와 귀속 가능한 고객 발언. 게시일 2026-11-04, 정확한 창 내 시각 미확인.
  - **출처:** [www.salesforce.com](https://www.salesforce.com/news/stories/agentforce-coworker-surpasses-185k-users/)
  - 해석: 회사는 사용자 18만5천 명 이상, 3개월 사용량 21배 증가, 월 1인당 50달러 SKU를 제시했다. Fulton Bank 사례는 약 3천 사용자·20개 초과 사용 사례다. 유료 전환·매출·한국 제공은 미확인이다.

  - 사건: Conductor가 Meta 합류와 Cloud 서비스 종료 일정을 공식 공지.
  - **근거 등급:** A — 공식 변경 기록 및 연결된 발표. 게시일 2026-11-04, 정확한 창 내 시각 미확인.
  - **출처:** [www.conductor.build](https://www.conductor.build/changelog/0.93.0-conductor-is-joining-meta)
  - 해석: availability는 기존 사용자 접근 유지에 한정한다. 신규 가입·다운로드 중단, 11월 13일 Cloud 읽기 전용 전환, 11월 20일 종료, 로컬 지원은 2027년 초까지로 안내됐다. 대체 Meta 제품 출시는 확인되지 않았다.

  - 사건: Uber 경영진이 실적 통화에서 할로윈 주간 에이전트 차량 호출 4건·Eats 주문 500건을 공개했다고 TechCrunch가 보도.
  - **근거 등급:** B — CFO·CEO의 실명 발언 취재. 게시일 2026-11-04, 정확한 창 내 시각 미확인.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/)
  - 해석: 전체 약 3억2천만 건과 대비되는 제한적 사용이다. 사건은 11월 공개이며 거래 자체는 10월이다. 일부 실거래를 광범위한 통합 제공이나 AI 매출로 확대하지 않는다.

### Funding/M&A/Business

  - 사건: OpenAI가 Pierre 인수 계획 발표. 금액 미공개, 규제 승인 등 종결 조건이 남아 있다.
  - **근거 등급:** A — 공식 발표. 게시일 2026-11-04, 정확한 창 내 시각 미확인.
  - **출처:** [openai.com](https://openai.com/index/openai-to-acquire-pierre/)
  - 해석: availability·code·production은 기존 Pierre 도구와 Codex에서의 Trees·Diffs 사용에 한정한다. 개발도구 연구자의 availability=unknown과 사업 연구자의 yes는 대상 범위 차이로 조정했다. 인수 후 신규 기능 제공이나 거래 종결을 뜻하지 않는다.

  - 사건: Dropbox의 3억5천만 달러 Tigris Data 인수 계획과 DBX Agent Cloud 인프라 전략을 TechCrunch가 보도.
  - **근거 등급:** B — Dropbox의 직접 이메일 설명을 포함한 취재. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [techcrunch.com](https://techcrunch.com/2026/11/05/dropbox-acquires-tigris-data-for-350m-to-bolster-its-ai-iinfrastructure/)
  - 해석: 2026년 4분기 종결 예상이며 계획 플랫폼은 S3 호환 객체 저장소를 우선 겨냥한다. 인수 완료·서비스 출시·한국 제공은 미확인이다.

검증 제출 3건 중 Uber는 Enterprise/Applications 원장으로 통합했다. 포함 2건으로, 중복 제거 후 생긴 공백을 다른 거래로 채우지 않았다.

### Safety/Evaluation/Security

  - 사건: 사람이 보는 Office 문서와 LLM 추출 텍스트의 불일치를 악용하는 연구와 Prism 방어 제안 공개.
  - **근거 등급:** A — 논문. 최초 제출 2026-11-04T01:32:31+00:00으로 정확한 창 내.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.05806)
  - 해석: 지시문 삽입 없는 입력 충실도 공격을 다룬다. 코드 공개·공급사 수정·한국 현장 사고는 확인되지 않았다.

  - 사건: 안전 정렬이 일부 뉴런·거절 방향에 집중되는 취약성을 줄이려는 후학습 기법 공개.
  - **근거 등급:** A — 논문. 최초 제출 2026-11-04T14:18:05+00:00으로 정확한 창 내.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.06553)
  - 해석: 일부 공격의 최대 90% 성공률 감소 주장은 전체 공격·모델에 대한 보장이 아니다. 공개 가중치·운영 채택은 미확인이다.

  - 사건: 증거·정책 변화에 따라 에이전트의 유효 권한을 지속 조정하고 오래된 행동을 차단하는 ACCA 공개.
  - **근거 등급:** A — 논문. 최초 제출 2026-11-03T21:19:46+00:00, KST 11월 4일 06:19:46으로 정확한 창 내.
  - **출처:** [arxiv.org](https://arxiv.org/abs/2611.05632)
  - 해석: 로컬 게이트웨이와 모의 브로커를 사용한 단일 거래 도메인 시나리오다. 실거래 운영·범용 안전 보장·규제 승인이 아니다.

### Policy/Geopolitics

  - 사건: EU 공공행정용 AI 도구상자 공개. 상호운용성·사례·교육·법률·조달 지침을 묶었다.
  - **근거 등급:** A — 정부 자료. 하위 원문 날짜 2026-11-04를 보존하며 목록의 11월 5일 표기와 구별한다. 정확한 창 내 시각 미확인.
  - **출처:** [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/ai-toolbox-supports-public-administrations-put-apply-ai-strategy-practice)
  - 해석: Apply AI Strategy의 실무 자원이지 새로운 구속력 있는 규정은 아니다. 한국 공급사의 EU 조달 검토에 잠재적으로 관련된다.

  - 사건: 유럽위원회가 학교의 디지털·AI 도구, 교사·직업교육 등을 다루는 교육·역량 패키지 발표.
  - **근거 등급:** A — 정부 발표. 게시일 2026-11-05, 정확한 창 내 시각 미확인.
  - **출처:** [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-launches-education-and-skills-package-tackle-declining-basic-skills-rapid-digital-change)
  - 해석: 안전한 교육기술과 기술 주권을 강조한다. 별도 언급된 11월 3일 EDU-EDIC 설립은 창 내 신규 사건으로 세지 않는다.

1차 0건에서 표적 2차 2건을 확보했다. 목표 대비 1건 부족하다. 반도체 설계 지원·DSA 광고 저장소 자문·범용 딥테크 금융은 AI 특화 조치가 확인되지 않아 제외했다.

### Korea Exposure

  - 사건: 네이버가 검색·쇼핑·지도 통합 에이전트 개발 가속을 확인했다고 전자신문이 보도.
  - **근거 등급:** B — 네이버 관계자 귀속 취재. 게시 2026-11-04T17:00:00+09:00으로 정확한 창 내.
  - **출처:** [www.etnews.com](https://www.etnews.com/20261104000273)
  - 해석: 다음 해 상반기 출시 기대는 확정 일정이 아니다. 기존 수직형 에이전트와 과거 타사 출시는 별도 신규 사건으로 나누지 않았다.

  - 사건: 현대제철이 현대오토에버와 개발한 사내 생성형 AI 플랫폼 Steel-X의 최근 개설을 공개.
  - **근거 등급:** B — 회사 발표에 귀속된 전자신문 보도. 게시 2026-11-04T10:06:00+09:00으로 정확한 창 내.
  - **출처:** [www.etnews.com](https://www.etnews.com/20261104000117)
  - 해석: 창 내 사건은 공개이며 정확한 선행 개설일은 미상이다. 사내 배포를 뜻할 뿐 활성 사용자·생산성·매출은 확인되지 않았다.

  - 사건: Cloudera의 기업 AI 설문 공개. 한국 응답자의 투자 확대·지출·거버넌스·데이터 주권 제약을 제시.
  - **근거 등급:** B — 회사·실명 임원에 귀속된 전자신문 보도. 게시 2026-11-04T09:00:00+09:00으로 정확한 창 내.
  - **출처:** [www.etnews.com](https://www.etnews.com/20261104000031)
  - 해석: 9개국 1,500명 설문에서 한국 응답자의 72%가 투자 증가, 49%가 연 100만 달러 이상 지출, 62%가 거버넌스·준법 제약, 56%가 데이터 주권 제약을 답했다. 한국 표본 수·조사일·가중치 미상으로 모집단 전체에 일반화하지 않는다.

## 4 기술→산업 전달경로

- **생성 이미지·영상 제어 확대 → 제작 반복·편집 자동화 → 광고·게임·커머스 제작 도구. 전달 조건은 실제 청구 단가, 지연시간 분포, 한국어 표현, 반복 편집 품질이다.** 제품 발표만으로 제작 인력 대체나 매출 증대를 결론 내리지 않는다.
- 턴별 행동 선택·중간 추론 검사 → 에이전트 오류 탐지·수정 → 코딩·검색 업무 신뢰도. 추가 호출비용과 선택기·추출기 오류가 이득을 상쇄할 수 있다.
- 코드 탐색·변경 리뷰·운영 지표 → 병렬 코딩 에이전트 관리 → 개발조직 도입. Pierre의 기존 라이브러리 사용, 인수 계획, 향후 통합은 서로 다른 단계다.
- 로봇 체크포인트·스트리밍·분산 학습 → 시뮬레이션·학습 접근성 → 자동차·제조 로봇 실험. 합성 관측 품질이 실제 정책 전이나 안전성을 보장하지 않는다.
- CRM·업무 시스템 연결 → 사내 지식 활용·업무 수행 → 기업 사용 확대. Salesforce·Steel-X의 배포 공개는 사용자 성과·순매출과 구별한다.
- 검색·지도·쇼핑 통합 → 의도 탐지에서 구매 행동으로 연결 → 한국 플랫폼 유통 경로 변화 가능성. 네이버는 개발 단계이며 Uber 사례는 거래 수요 검증이 별도임을 보여준다.
- 문서 추출 검증·지속 권한 검사 → 잘못된 입력과 오래된 권한 차단 → 금융·공공·기업 에이전트 통제. 현재 근거는 연구·시나리오 수준이다.

## 5 AI Stack Signal Map

| 계층 | 관측 신호 | 확인 수준과 공백 |
|---|---|---|
| 컴퓨트·전력 | Vera CPU 에이전트 비교 | 공급사 주장, 구성·독립 재현·출하 미확인 |
| 기반 인프라 | vSphere Express, 양자–HPC 공동설계 | 범용/HPC 성격, AI 직접성 제한; 주문 가능성·연구 접근 미확인 |
| 저장소·개발 기반 | Pierre·Tigris 인수 계획 | 기존 도구 사용과 향후 거래·서비스 구별 |
| 모델 | Images 2.6, GPT-6 Cyber, Omni 1.2 Flash | 공식 공개·접근 설명, 성능 독립 재현 미확인 |
| 오픈 산출물 | Cosmos 3, LeRobot | 코드·웨이트 관련 근거 확보, 라이선스·공개 시점·재현 한계 |
| 에이전트 실행·개발 | Xcode Copilot, 턴별 best-of-N, 리뷰 지표 | 프리뷰·연구·관측 지표이지 생산성 보장 아님 |
| 평가·통제 | LifeVal, GraphRail, Office 추출 연구, ACCA, 정렬 연구 | 개인 맥락·중간 추론·입력·권한으로 평가 범위 확장 |
| 업무·상거래 | Salesforce, Steel-X, Uber, 네이버 | 사내 사용·소량 거래·개발 계획의 단계 차이 |
| 정책·수요 | EU 도구상자·교육 패키지, 한국 기업 설문 | 실무 지침·정책 발표·표본 응답이며 규제 시행·시장 전체 실적 아님 |

## 6 반증·과장·재현성 감사

### 벤치마크와 실험

| 대상 | 과제·기준선 | 지표·조건 | 공개·오염·독립 재현 감사 |
|---|---|---|---|
| Images 2.6 | 이미지 생성 속도·편집 일관성; 이전 제품의 정확한 모델·설정 미상 | 50% 빠른 생성 주장; 최단 6초는 Flare 저품질 조건 | 하드웨어·해상도·표본·지연 분포 미공개. 오염 분석 없음, 독립 재현 미확인 |
| GPT-6 Cyber | 취약점 악용·블랙박스 탐지·범위 준수; GPT-5.6 Cyber 또는 GPT-6 Astra | ExploitGym 48.5% 대 32.1%, 웹 재현율 40.3% 대 32.0%, 범위 밖 honeypot 악용 회피 99.93% 또는 지시 포함 100% | 표본·계산 설정과 오염 통제 불충분. 데이터·평가기·정책 변화로 카드 간 비교 제한. Irregular 평가는 Cyber 90/288, Astra 96/288이며 완전 강화 대상 공격 성공 없음. 헤드라인 성능의 독립 재현 아님 |
| 턴별 best-of-N | 장기 터미널 작업; 정확한 비교 모델·설정 미상 | 정확도 5~10% 개선 주장, 상대 개선인지 퍼센트포인트인지 불명 | N·모델·계산예산·과제 수 미상. 계산량 일치 비교·통계·오염 통제·독립 재현 미확인 |
| LifeVal | 개인화 소비자 과제; 비교 모델 미상 | 과제별 루브릭. 3,800명 초과 설문·148개 활동 범주, 최소 3회 사람 품질검사 | 비교 모델 점수 미확보. 데이터 접근·동의·개인정보·채점 신뢰도·오염 통제·독립 재현 미확인 |
| GraphRail | 다중 홉 QA 중간 오류; 생성형 검증기와 비교 | 3개 벤치마크·3개 추론 프레임워크에서 재현율·안정성 개선 주장, 수치 미확보 | 구체 모델·벤치마크명·정밀도 절충·비용·오염 통제·독립 재현 미확인 |
| LeRobot | 데이터 로딩·ACT 학습·체크포인트; 워커·증강·이전 저장 방식 비교 | 4워커 처리량 2.1~2.5배, ACT H100 2.8배·A100 3.3배, 저장 3배; 재개 메모리 GPU당 143→42GB. 체크포인트는 8×H200·6B FastWAM | 유지관리자 측정. 전체 설정·분산·반복 측정 미확인. 인프라 측정에 학습 오염은 직접 적용되지 않으나 독립 재현 필요 |
| Vera | CPU 에이전트 실행·오케스트레이션·샌드박스; 모델명이 없는 x86 비교군 | 최고속 x86 대비 전력당 에이전트 1.6배, 최고효율 x86 대비 속도 2배 주장; 100MW 비교 설명 | 전체 구성·작업 정의·측정 절차·선정 통제 미공개. 파트너 원보고서 별도 추출·독립 재현 미확인 |
| Office 추출 불일치 | Office 추출 파이프라인과 사람 가시 화면 비교; Prism 방어 제안 | 비가시 내용 노출 경로 19개·가시 내용 누락 경로 12개. 5개 공격 중 하나 이상에 8개 도구 모두 오도됐다는 주장 | 모델·추출기 버전·시행 수·종합 공격 성공률·오염 통제 미확보. 독립 재현·공급사 수정 미확인 |
| Addition by Subtraction | 프루닝·거절 방향 제거·블랙박스 공격; 개입 전 정렬 모델 | 3개 공급사의 4개 모델, 일부 공격 성공률 최대 90% 감소 주장 | 개별 기준 성공률·공격예산·데이터·모델 버전·오염 통제 미상. 효용 보존·독립 재현 미확인 |
| ACCA | 증거 기반 권한 변경·오래된 행동 차단; 비교 기준선 없음 | 단일 거래 도메인의 회귀 시나리오, 로컬 게이트웨이·모의 브로커; 수치 없음 | 구현 시나리오이지 범용 성능 보장 아님. 코드 접근·오염 분석·다른 도메인·독립 재현 미확인 |

Gemini Omni의 길이·가격은 제품 사양이고, 선택된 비교 시연은 정량 품질 벤치마크가 아니다. Cosmos의 설정 테스트도 시뮬레이션 충실도의 독립 검증이 아니다. IBM 협력 발표는 새 성능 기록으로 취급하지 않는다.

### 사업·운영 수치의 과장 방지

- **Copilot addressed rate는 수정 완료·코드 품질·생산성의 대리 검증 지표가 아니다.** 댓글은 병합일에 집계되며 봇 PR 제외 기준이 지표마다 다르다.
- **Salesforce의 사용자·사용량과 고객 발언은 통제 실험이 아니다.** 현재 기능과 11월·12월 예정 기능을 합쳐 “전부 출시”라고 쓰지 않는다.
- **Uber 수치는 경영진 보고다.** 소량의 실거래는 존재하지만 대중적 채택·AI 귀속 매출을 입증하지 않는다.
- LifeVal의 연간 1.7조 달러 지불의향 추정은 실현 매출이 아니다.
- **Cloudera 설문은 공급사 후원·자기보고이며 한국 하위표본과 방법론이 불충분하다.** 규제 제약 응답을 새 규제 시행으로 해석하지 않는다.
- **OpenAI–Pierre·Dropbox–Tigris는 계획 거래다.** Conductor의 공식 전환 공지도 거래 조건·규제 결과·대체 제품 전달을 확정하지 않는다.
- **한국 핵심 3건은 모두 전자신문 취재에 의존한다.** 실명·회사 귀속은 있으나 다중 독립 확인은 아니다.

### 시간·출처 감사

- **정확한 시각이 있는 자료에는 정확한 창을 적용했다.** ACCA의 UTC 11월 3일 제출은 KST 창 안이므로 포함했다.
- **날짜만 있는 자료는 번들의 달력일 예외에 따른 조건부 포함이다.** 특히 11월 5일 표기는 06:00 이전 게시를 증명하지 않는다. 엄격한 시각 검증 완료 보고서로 읽어서는 안 된다.
- **별도 Conductor TechCrunch 기사는 06:10 KST로 창 밖이다.** 포함 근거는 날짜만 있는 공식 변경 기록이며, 후행 기사를 창 내 증거로 바꾸지 않았다.
- **검색 응답의 반복적 무관성과 사이트 차단으로 보도·반증 탐색이 제한됐다.** 발견 실패를 사건 부재로 결론 내리지 않는다.

## 7 다음 확인 일정

아래는 편집상 확인 계획이지 자동 예약이나 추가 검증 완료를 뜻하지 않는다.

| 시점 | 확인 대상 |
|---|---|
| 다음 편집 전 | 날짜만 있는 모든 핵심 자료의 게시 시각·시간대 확보, 정확한 창 적격성 재판정 |
| 다음 접근·실험 시 | Images API 접근·가격·한국어 편집, Omni 지역 접근·실청구·한국어 음성, Cyber 승인 조건·전체 평가 설정 |
| 다음 연구 검토 시 | best-of-N 계산량 일치 비교, LifeVal 데이터·개인정보·루브릭, GraphRail 수치·추출 강건성 |
| 다음 배포 검증 시 | Cosmos 라이선스·리비전·센서 일관성, LeRobot 공개 시각·체크포인트 이전·원격 제어 안전 |
| 다음 인프라 확인 시 | Vera 비교군·파트너 원보고서·출하, vSphere 주문·한국 가격, 양자–HPC 연구 접근·실제 워크로드 |
| 2026-11-13 전 | Conductor Cloud 내보내기·로컬 이전 완료 여부 확인; 공지상 읽기 전용 전환일 |
| 2026-11-20 전 | Conductor Cloud 종료와 데이터 처리·삭제 정책 재확인 |
| 2026년 11월 중 | Salesforce의 Teams·데스크톱·iOS·MCP 일반 제공 이행 및 지역별 차이 |
| 2026년 12월 | Salesforce Daily Digest·예약 작업 예정 기능의 실제 출시 여부 |
| 2026년 4분기 후속 공시 | Tigris 거래 종결·조건·DBX Agent Cloud 접근; Pierre 종결·규제 승인·오픈 프로젝트 유지 |
| 다음 국내 후속 보도·공식 자료 시 | 네이버 확정 일정·지원 행동, Steel-X 활성 사용·권한·성과, Cloudera 한국 표본·방법론 |
| 다음 실적 공개 시 | Uber 에이전트 거래 정의·반복 사용·전환·매출을 동일 기준으로 비교 |
| 2027년 1분기 | 예고된 S3 호환 vSAN의 실제 제공 여부; 현재 제공으로 소급하지 않음 |

## 8 Coverage Audit

### 연구자 종결 및 범주별 집계

10개 연구자 모두 최종 결과 객체를 제출한 terminal completion 상태다. 번들에 별도 실행 로그·종결 상태 필드는 없어 런타임 성공 여부까지 독립 확인한 것은 아니다.

후보 수와 검증 수는 다르다. 번들은 완전한 후보 대장이나 총 후보 수를 제공하지 않는다. 아래의 “후보”는 수량을 창작하지 않고 확인된 탐색 범위·탈락 사례를 기록한다. search_audit의 initial_count·targeted_count는 해당 패스의 검증 확보 수로 해석하며 검색 적중 수로 쓰지 않는다.

| Category | 완료 | 후보·탐색 기록 | 1차 / 표적 2차 검증 | 최종 검증 제출 | 단일 원장 포함 | 목표 대비 설명 |
|---|---|---|---|---:|---:|---|
| Frontier Models | 최종 제출 | 공식 3개사 색인·핵심 원문, 오래된 Anthropic·DeepMind 발표 제외 | 분리 집계 미제공 | 3 | 3 | 수량 부족 없음; 시각·독립 성능 검증 한계 |
| AI Research | 최종 제출 | arXiv·공식 연구 목록, 과거 연구·제품 발표 제외 | 분리 집계 미제공 | 3 | 3 | 수량 부족 없음; 초록 기반 평가 세부 공백 |
| Agents/Developer Tools | 최종 제출 | GitHub·OpenAI·Anthropic, 과거 발표와 전문 보안 도구 제외 | 분리 집계 미제공 | 3 | 2 | Pierre를 사업 원장으로 이전한 중복 제거 공백 |
| Open Source/Repos | 최종 제출 | Cosmos·LeRobot, Dharma·Phonon 후보; 과거 vLLM·Transformers·Mistral 제외 | 1 / 1 | 2 | 2 | 검증 1건 부족 |
| Chips/Compute/Infrastructure | 최종 제출 | Vera·VMware·양자–HPC, 창 밖 기사·기존 기술 해설 제외 | 2 / 1 | 3 | 3 | 2차로 최초 부족 해소; AI 직접성 제한 명시 |
| Enterprise/Applications | 최종 제출 | Salesforce·Conductor·Uber, 과거 배포·후행 Apple 기사 등 제외 | 분리 집계 미제공 | 3 | 3 | 수량 부족 없음 |
| Funding/M&A/Business | 최종 제출 | Pierre·Uber·Tigris, 후행 Conductor 보도·범용 VC 기사 제외 | 분리 집계 미제공 | 3 | 2 | Uber를 기업 원장으로 통합한 중복 제거 공백 |
| Safety/Evaluation/Security | 최종 제출 | arXiv 원제출 확인, 오래된 Anthropic·NIST 자료 제외 | 분리 집계 미제공 | 3 | 3 | 수량 부족 없음; 모두 연구 공개 단계 |
| Policy/Geopolitics | 최종 제출 | EU 연계 기사 5개 검토, AI 비특화 조치·창 밖 자료 제외 | 0 / 2 | 2 | 2 | 검증 1건 부족 |
| Korea Exposure | 최종 제출 | 국내 매체·기업 뉴스룸, Atlas 미귀속 주장·과거 자료 제외 | 분리 집계 미제공 | 3 | 3 | 수량 부족 없음; 핵심 출처가 한 매체에 집중 |

### 두 패스와 부족 사유

- **Open Source/Repos: 1차 Cosmos 1건, 표적 2차 LeRobot 1건으로 최종 2건이다.** coverage_notes의 첫 문장 “1건”은 1차 기록이며 최종 search_audit와 사건 배열을 우선했다. Dharma는 새 추출기의 공개 코드·웨이트 미확인, Phonon은 2주 전 출시 회고다. 검색 무관 응답, TechCrunch 429와 과거 릴리스만 확인된 경로가 부족을 설명한다. 전 세계 적격 사건이 2건뿐이라는 뜻은 아니다.
- **Chips/Compute/Infrastructure: 1차 2건에서 표적 2차 양자–HPC 협력 1건을 추가해 최종 3건이다.** coverage_notes의 “2건”은 1차 상태다. AMD·IBM 설명은 같은 협력으로 병합했다. Reuters DataDome, AMD 429, Intel Akamai 등 접근 한계와 부정확한 검색이 있었으나 수량 부족은 해소됐다.
- **Policy/Geopolitics: 1차는 무관 검색과 429 등으로 0건이었다.** 표적 2차에서 위원회 색인·연결 기사 직접 추출로 2건을 검증했다. 반도체 설계 지원·광고 저장소 자문·딥테크 금융은 AI 특화 근거가 부족해 세 번째로 승격하지 않았다. Commerce Cloudflare 차단과 검색 실패로 탐색 완전성은 제한된다.
- **Agents/Developer Tools 및 Funding/M&A/Business: 원 연구에서는 각각 3건이었으나 전역 중복 제거 후 각 2건이다.** 별도 표적 2차 search_audit는 제공되지 않았다. 추가 탐색 성공이나 실제 사건 희소성을 주장하지 않는다.
- **나머지 범주: 최종 검증 3건씩이지만 두 패스별 정량 감사는 제공되지 않았다.** 모든 범주에 두 패스가 실행됐다고 추정하지 않는다.

### 전역 중복·제외 및 상태 조정

- 제출 사건 28개를 전역 통합해 고유 원장 26개로 편집했다.
- **Pierre는 동일 ID·동일 공식 발표의 중복이다.** Funding/M&A/Business에만 원장을 두고 개발도구 영향은 교차 설명했다.
- **Uber는 서로 다른 ID로 제출됐지만 같은 기사·실적 통화·거래 수치다.** Enterprise/Applications에 있는 공개 사건의 ID를 정본으로 유지했고 사업 범주의 별도 원장은 제거했다.
- Phonon watchlist 두 항목은 같은 URL·같은 회고이므로 한 후보로 합쳤다.
- **Conductor는 공식 발표로 핵심 포함하되, 창 밖 TechCrunch 기사 자체는 watchlist에 남긴다.** 같은 인수를 추가 사건으로 세지 않는다.
- OpenAI Linux 연구 공개는 Cyber와 겹치는 역량 설명으로 별도 핵심 사건화하지 않았다.
- **A·B는 공개·취재의 근거 수준이다.** C 후보는 핵심에 승격하지 않았고, B라도 창 밖 기사는 제외했다.
- **현시점 산출물 접근, 실제 창 내 공개, 기존 운영 사용, 미래 통합 제공은 서로 구분했다.** 모든 상태가 원장에 별도로 표시돼 있다.

### Watchlist (미확인 후보)

- 후보: Dharma-AI의 특화 문서 필드 추출기 발표 (미포함 사유: 새 추출기의 공개 체크포인트·어댑터·코드가 확인되지 않아 오픈소스 범주 적격성 부족; <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/Dharma-AI/dharma-field-extractor))
- 후보: Phonon 온디바이스 TTS 기술 회고 (미포함 사유: 동일 회고 후보 2개를 통합; 모델은 2주 전 공개됐으며 창 내 신규 출시·별도 실험 실행은 확인되지 않음; <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/phonon-tts))
- 후보: Counterpoint의 DRAM 매출 급증 조사 보도 (미포함 사유: 명시 게시 시각이 11월 6일 00:07 KST로 창 밖이며 원조사 공개일 미확인; <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/11/05/memory-makers-mint-megabucks-while-buyers-beg-for-mercy/5307846))
- 후보: 유럽 데이터센터 모라토리엄 요구 시위 계획 (미포함 사유: 게시 시각이 11월 5일 22:29 KST로 창 밖; 예정 시위와 요구는 시행 규제가 아님; <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/11/05/stop-dirty-datacenters-europe-wide-protests-planned-demanding-building-moratorium/5307790))
- 후보: Apple 내부 엔지니어링 AI 예산 축소 보도 (미포함 사유: 게시 시각이 11월 5일 10:26 KST로 창 밖이고 익명 원보도의 재전달·10월 활동 설명; <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/04/apple-is-reportedly-cutting-budgets-for-its-internal-ai-usage/))
- 후보: Meta의 Conductor 인수에 관한 TechCrunch 보도 (미포함 사유: 기사 게시가 11월 5일 06:10 KST로 마감 후; 공식 발표로 포함한 동일 사건의 별도 기사이며 추가 집계하지 않음; <br class="report-field-break" />Evidence B / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/))
- 후보: Atlas 한국 부품 공급사 확정 주장 (미포함 사유: 추출 기사에 공급사 선정 확인 문서·귀속 발언이 없어 회사 확인이나 계약 근거 필요; <br class="report-field-break" />Evidence C / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261104000033))

후보 벤치마크 추가 감사: Dharma의 546개 문서·1,638개 사례 비교는 공급사 실험이다. 복합 점수 0.834와 비교 모델 점수는 추론 설정·비용 기준 차이를 함께 봐야 한다. SROIE·FUNSD 학습 제외 주장 외의 오염 통제와 독립 재현은 미확인이다. Phonon의 CPU 첫 오디오 지연 수치도 정확한 CPU·전체 설정·독립 재현이 미확인이고, 리더보드의 23개 언어를 공개 모델의 지원 언어로 오인하면 안 된다.

- **수록 사건 수:** 26
