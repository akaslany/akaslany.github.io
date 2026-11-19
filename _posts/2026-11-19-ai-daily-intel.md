---
layout: ai-intel
title: "AI Daily Intel — 2026-11-19"
date: 2026-11-19 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-19/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-19  
- **기준 시각:** 2026-11-19T06:00:00+09:00 (Asia/Seoul, 미포함)  
- **수집 구간:** [2026-11-18T06:00:00+09:00, 2026-11-19T06:00:00+09:00) Asia/Seoul  
- **조사 범위:** 10  
- **수록 사건 수:** 30

## 1 오늘의 AI 한 문장

Gemini 4 Neon의 유료 배포와 AMD 제조 설계에 반영된 AI 생성 코드가 모델의 활용 범위를 넓혔지만, 공개된 성능 수치는 평가 환경에 따라 달랐고 고객 운영·실현 매출·독립 재현은 별도로 확인해야 한다.

## 2 핵심 신호 5

1. **Gemini 4 Neon, 유료 배포 시작 — <br class="report-field-break" />Evidence A.** Google API와 구독 서비스에 이어 GitHub Copilot에도 순차 배포된다. 같은 모델의 SWE-sweep 점수가 실행 환경에 따라 12.8%와 39.0%로 달랐다. [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · [GitHub](https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot)
2. **NVIDIA 데이터센터 분기 매출 1,076억 달러 — <br class="report-field-break" />Evidence A.** 전년 동기 대비 110% 증가했다. 공급·용량 약정 3,900억 달러는 실현 매출이 아니며 한국 공급사별 배분도 공개되지 않았다. [SEC 공시](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/0001045810-26-000088-index.htm)
3. **AI 생성 RTL 일부가 AMD의 제조 의뢰 설계에 반영 — <br class="report-field-break" />Evidence A.** OpenAI가 공개한 실무 적용 사례다. 최대 14% 개선은 일부 GPU IP의 PPA 수치이지 칩 전체 성능이나 완제품 출하를 뜻하지 않는다. [OpenAI](https://openai.com/index/advancing-chip-design-with-our-models/)
4. **Anthropic, IPO 공모가 주당 83달러 확정 — <br class="report-field-break" />Evidence A.** 공모 총액은 인수단 옵션 전 813.4억 달러다. 구주매출분이 포함돼 있으며 거래 개시와 공모 종결은 가격 발표에서 확인되지 않았다. [Anthropic](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)
5. **미 BIS, 해외 데이터센터의 원격 연산 접근을 반영한 규칙 공표 — <br class="report-field-break" />Evidence A.** 반도체의 배송 목적지뿐 아니라 최종 원격 이용자도 일부 거래의 허가 판단에 중요해졌다. 한국은 새로 열거된 5개 목적지에 포함되지 않는다. [Federal Register](https://www.federalregister.gov/documents/2026/11/19/2026-23529/addressing-remote-access-to-advanced-semiconductors)

## 3 영역별 AI 브리프

Evidence A는 원문·공시·논문·릴리스 또는 공식 교차근거, B는 귀속 가능한 보도 근거다. <br class="report-field-break" />Evidence C는 미확인 근거로 코어에 넣지 않으며 이번 번들에는 없다. A/B는 사건 자체의 근거 등급이지 성능 검증 등급이 아니다. 상태값은 `yes`(해당 확인), `no`(해당 없음 또는 미충족), `unknown`(확인 불가)으로 구분한다.

### Frontier Models

  - Evidence A | 2026-11-18 | [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · [GitHub](https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot)
  - 100만 토큰 컨텍스트 모델의 유료 배포가 시작됐다. API 정가는 백만 토큰당 입력 3달러·출력 15달러다. Copilot의 적격 플랜에도 순차 배포된다. 한국 계정 접근과 실현 매출은 미확인이다.
  - Evidence A | 2026-11-18 | [Google DeepMind](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/)
  - 적격 Ultra 가입자에게 브라우저 실험판을 배포하기 시작했다. 상호작용 중 환경 편집과 오디오 생성을 지원한다. Pro는 대기 명단이며 한국 자격과 장시간 장면 유지 성능은 미확인이다.
  - Evidence A | 2026-11-18 | [OpenAI](https://openai.com/index/research-acceleration-jagged-frontier/)
  - 내부 AI 연구에서 코딩 에이전트가 맡은 과제의 무개입 완료 추정치를 공개했다. 올해 3월과 10월의 과거 사용을 비교한 것으로, 신규 모델 출시나 외부 배포가 아니다. `production`은 내부 실무 사용, `availability`는 에이전트의 외부 가용성을 뜻한다.

### AI Research

  - Evidence A | 2026-11-18 | [arXiv](https://arxiv.org/abs/2611.23068)
  - 에이전트 프롬프트·스킬의 유익한 수정안이 존재해도, 단일 실행으로는 해로운 수정안과 구분하기 어려웠다. 가용 산출물은 논문이다.
  - Evidence A | 2026-11-18 | [arXiv](https://arxiv.org/abs/2611.23192)
  - WoRD는 부분 이동 궤적에서 여러 목적지 가설을 유지하고 관측이 쌓일 때마다 확률을 갱신한다. 가용 산출물은 논문이며 실도로 배치는 확인되지 않았다.
  - Evidence A | 2026-11-18 | [arXiv](https://arxiv.org/abs/2611.23138)
  - 모델 학습 실험의 의사결정 기록을 활용해 후학습 에이전트를 개선하는 방법을 제시했다. 논문은 공개됐으나 실험 궤적 데이터 접근은 미확인이다.

### Agents/Developer Tools

  - Evidence A | 2026-11-18 | [TechCrunch](https://techcrunch.com/2026/11/18/snapchat-now-lets-developers-build-ar-lenses-with-ai-coding-assistants-like-claude-code-and-cursor/)
  - Snap은 무료 Easy Lens CLI를 즉시 제공한다고 밝혔다. Claude Code·Codex·Cursor로 AR 렌즈를 만들고 미리 본 뒤 기존 심사 절차에 제출할 수 있다. 출시와 가용성은 Snap 발표로 교차 확인됐다.
  - Evidence A | 2026-11-18T00:18:35Z | [GitHub 릴리스](https://api.github.com/repos/cli/cli/releases/tags/v2.105.0)
  - 공개된 GitHub CLI 2.105.0은 PR 리뷰 제출과 검사 완료 같은 이벤트를 기다리는 기능을 추가했다. 실제 스트리밍에는 대기 명단이 있는 GitHub.com 프리뷰 자격이 필요하다.
  - Evidence A | 2026-11-18 | [GitHub](https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team)
  - Copilot Business·Enterprise에서 승인된 에이전트 플러그인을 팀 기본값으로 설정할 수 있다. 직접 소속 팀원에게 적용되며 하위 팀에는 상속되지 않고 상위 정책이 우선한다.
  - Evidence A | 2026-11-18 | [GitHub](https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot)
  - Supabase·Box·Buildkite 등 8개 MCP 커넥터가 공개 프리뷰에 추가됐다. 기업 프리뷰 설정, 허용 목록, 서비스 권한이 실제 접근 범위를 결정한다.

### Open Source/Repos

  - Evidence A | 2026-11-18T03:40:48Z | [GitHub 릴리스](https://api.github.com/repos/openai/codex/releases/tags/rust-v0.170.0)
  - Codex CLI 0.170.0 안정판에 터미널 실시간 음성 협상, OpenTelemetry HTTP 인증 헤더 갱신, 환경별 동명 MCP 서버 실험 지원이 추가됐다. 샌드박스 권한 보존과 MCP OAuth 관련 수정도 포함됐다.
  - Evidence A | 2026-11-18 | [Nutrient](https://huggingface.co/blog/nutrientdocs/recapture)
  - Apache-2.0 도구로 문서 이미지를 휴대전화 촬영본이나 스캔처럼 변환하면서 레이아웃 주석도 함께 보정하고 COCO 형식으로 내보낸다. 실제 촬영 문서나 한글 문서에서의 성능 향상은 미확인이다.
  - Evidence A | 2026-11-18 | [FINAL-Bench·VIDRAFT Lab](https://huggingface.co/blog/FINAL-Bench/we-handed-20-open-models-a-shell-20-of-them-failed)
  - 모의 도구를 사용해 모델이 시도한 행동을 평가하는 Apache-2.0 도구가 공개됐다. 실제 행동을 실행하지 않았으며, A는 도구 공개의 근거 등급이다.

### Chips/Compute/Infrastructure

  - Evidence A | 2026-11-18 06:20:51 KST | [SEC 8-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/0001045810-26-000088-index.htm)
  - 분기 총매출 1,158억 달러, 데이터센터 매출 1,076억 달러를 공시했다. 공급·용량 약정 3,900억 달러의 증가에는 다년 메모리 조달이 주로 기여했다. 한국 공급사별 배분은 없으며 `regulatory`는 공시 접수이지 승인이 아니다.
  - Evidence B | 2026-11-18T18:34:00Z | [The Verge](https://www.theverge.com/tech/1036880/nvidia-rtx-spark-ai-mini-pc-desktops)
  - ASUS·Dell·MSI의 RTX Spark N1X 소형 데스크톱이 판매를 시작했다. 통합 메모리는 최대 128GB이며 미국 ASUS 64GB 모델 시작가는 4,499달러로 보도됐다. 한국 판매와 실측 성능은 미확인이다.
  - Evidence A | 2026-11-19(날짜만 공개) | [NVIDIA](https://blogs.nvidia.com/blog/microsoft-ignite-accelerated-computing-azure-windows-pcs/)
  - NVIDIA는 Azure 데이터센터에서 Vera Rubin NVL72 랙이 가동 중이며 VM 프리뷰를 확대한다고 밝혔다. 정식 가용성, 한국 리전, 고객 운영, Rubin 자체 성능은 확인되지 않았다.

### Enterprise/Applications

  - Evidence A | 2026-11-18 | [OpenAI](https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership/)
  - Figaro의 기사와 아카이브를 ChatGPT에 링크가 있는 요약·발췌로 제공하고, 그룹 내부에 ChatGPT Enterprise를 도입할 계획이다. 서비스 시작일과 거래 조건은 공개되지 않았다.
  - Evidence A | 2026-11-18 | [OpenAI](https://openai.com/index/advancing-chip-design-with-our-models/)
  - OpenAI에 따르면 AMD는 AI 생성 RTL 변경 일부를 제조 의뢰 설계에, 다른 일부를 실무 설계 파일에 반영했다. 기간 내 사건은 이 사실의 공개이며 `production`은 설계 실무 적용이지 제조 완료나 출하가 아니다.

### Funding/M&A/Business

  - Evidence A | 2026-11-18 | [Anthropic](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)
  - 9.8억 주를 주당 83달러에 책정했다. 옵션 전 총 공모액 813.4억 달러에는 구주매출분이 포함된다. 회사는 SEC 등록 효력 발생을 밝혔지만 거래 개시와 종결은 예정으로 제시했다.
  - Evidence A | 2026-11-18 | [Payhawk](https://payhawk.com/blog/payhawk-series-c-280m-funding)
  - Goldman Sachs Alternatives 측이 기업가치 20억 달러 기준 2.8억 달러 전액 지분 라운드를 주도했다. 고객 77%의 일일 에이전트 사용은 회사 보고치이며 거래는 규제 승인 조건이 남아 있다.
  - Evidence B | 2026-11-18 | [TechCrunch](https://techcrunch.com/2026/11/18/accel-backs-indias-humyn-labs-to-supply-training-data-needed-by-u-s-robotics-ai-developers/)
  - 로봇 학습데이터 기업이 지분 2,600만 달러와 벤처대출 2,100만 달러를 조달한 것으로 보도됐다. 공동창업자가 밝힌 4~10월 매출 1,000만 달러와 별도 계약액 2,000만 달러는 구분해야 한다. 한국은 회사가 지목한 주요 수집 거점 중 하나다.
  - Evidence B | 2026-11-18 | [TechCrunch](https://techcrunch.com/2026/11/18/felicis-leads-7-5m-bet-on-unsiloed-ai-to-make-enterprise-documents-usable-by-ai-agents/)
  - 문서 구조화 업체가 Felicis 주도로 750만 달러 시드 투자를 유치한 것으로 보도됐다. CEO는 Bolna AI의 지식베이스 활용을 밝혔으나 매출은 공개하지 않았다.

### Safety/Evaluation/Security

  - Evidence A | 2026-11-18 | [OpenAI](https://openai.com/index/managing-frontier-ai-risk)
  - 연구에서 내부·외부 배포로 넘어갈 때 안전성 검토를 거치며, 도구 사용 내부 배포 전체를 포함한 대부분의 배포 환경에서 모니터링한다고 밝혔다. 절차 공개이지 신규 통제 출시나 효과 검증은 아니다.
  - Evidence A | 2026-11-18 | [OpenAI](https://openai.com/index/inside-the-codex-sandbox/)
  - 기존 Codex 샌드박스의 파일·네트워크 권한과 운영체제별 적용 방식을 문서화했다. 기본 작업공간 프로필의 쓰기·네트워크 제한이 로컬 파일 읽기까지 포괄하는 것은 아니다. `production`은 기존 프로필 운용을 가리키며 고객사 운영 확인은 아니다.

### Policy/Geopolitics

  - Evidence A | 2026-11-19(날짜만 공개) | [Federal Register](https://www.federalregister.gov/documents/2026/11/19/2026-23529/addressing-remote-access-to-advanced-semiconductors)
  - D:5 국가군 또는 마카오에 본사를 둔 기업에 상당한 원격 연산을 제공하는 해외 데이터센터 관련 일부 거래를 제한한다. 인도네시아·말레이시아·싱가포르·태국·브라질 등 해당 목적지의 대상 반도체에 예외 조항이 있는 허가 요건을 추가하고 기존 AI Diffusion Rule을 공식 폐지한다. 명시 발효일은 11월 19일이다.
  - Evidence A | 2026-11-19(날짜만 공개) | [Federal Register](https://www.federalregister.gov/documents/2026/11/19/2026-23539/policies-on-the-use-of-generative-super-intelligence-in-agency-adjudication-request-for-comments)
  - 미국 연방 행정심판에서 생성형 AI 사용에 관한 공개 의견수렴을 시작했다. 향후 권고안을 위한 절차로, 구속력 있는 규칙이나 도입 발표가 아니다.
  - Evidence A | 2026-11-19(날짜만 공개) | [유럽위원회](https://digital-strategy.ec.europa.eu/en/news/almost-eu24-billion-mobilised-and-614-projects-awarded-their-support-critical-technologies-europe)
  - STEP 연차보고서는 2025년 말까지 핵심기술 전반에 239억 유로를 동원했다고 집계한다. 2025년 직접 관리 디지털 공모 7.46억 유로에 AI 칩과 오픈소스 LLM이 포함됐지만, 어느 수치도 AI 단독 지원액이나 집행액은 아니다.

### Korea Exposure

  - Evidence B | 2026-11-18T09:29:00+09:00 | [ZDNet Korea](https://zdnet.co.kr/view/?no=20261118091130)
  - 삼성전기가 NVIDIA 차세대 GPU용 첨단 패키지 기판 공급 협력과 세종·부산 제조 역량을 확대한다고 밝혔다. 추가 자금은 검토 단계이며 2029년 본격 양산은 계획이다.
  - Evidence B | 2026-11-18T13:30:00+09:00 | [ZDNet Korea](https://zdnet.co.kr/view/?no=20261118120439)
  - TrendForce는 서울 로드쇼에서 2027년 HBM4 가격을 기가비트당 3~5.50달러로 전망했다. 보도상 2026년 비교치는 2.05달러 이상이다. 해당 사건은 전망 발표이며 계약가나 실현 단가 확인이 아니다.
  - Evidence B | 2026-11-18T18:00:00+09:00 | [ZDNet Korea](https://zdnet.co.kr/view/?no=20261118180032)
  - 다우기술 사방넷이 와이즈트래커 AI 개인화를 카카오톡 채널 메시지에 연동했다. 기존 고객은 자사몰 이력을 활용할 수 있지만 오픈마켓 구매 이력 지원은 계획이며 실사용·전환율은 미확인이다.

## 4 기술→산업 전달경로

- **모델 → 개발 도구 → 기업 도입:** Neon이 API와 Copilot에 들어오고 팀 플러그인 기본값, PR 이벤트, MCP 커넥터가 개발 흐름과의 연결을 돕는다. 도입 판단은 같은 과제에서 완료율·과제당 청구비용·편집 범위와 권한 경계를 함께 확인한 뒤 내릴 수 있다.
- **AI 설계 지원 → 제조 설계 반영 → 실리콘 검증:** AMD 사례는 첫 두 단계의 연결을 보여준다. 독립적으로 확인된 블록별 PPA와 제조 후 실측 없이는 칩 전체 효과나 출하 성과로 확대할 수 없다.
- **가속기 수요 → 메모리·기판 공급망:** NVIDIA 실적과 조달 약정, 삼성전기 기판 협력, 서울 HBM4 전망은 서로 다른 근거다. 매출 공시는 수요 규모를 보여주지만 한국 업체별 수주나 단가를 확정하지 않는다.
- **해외 연산 공급 → 원격 이용자 확인 → 수출허가 판단:** BIS 규칙은 적용 대상 거래에서 배송지와 원격 이용자를 함께 보게 한다. 한국 기업의 직접 영향은 거래 구조, 고객 본사 소재지, 실제 접근 권한에 따라 달라진다.
- **기존 상거래 도구 → AI 개인화 → 사업 성과:** 사방넷의 기존 메시지 채널 연동은 기능 접근을 확인해 준다. 실제 판매자가 사용하는지, 대조군 대비 전환이 늘었는지, 매출에 기여했는지는 별개다.

## 5 AI Stack Signal Map

| 계층 | 확인된 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 반도체·메모리·연산 | NVIDIA 실적 공시, Azure Rubin 프리뷰, RTX Spark 판매, 삼성전기 협력 확대 | Rubin 실측·한국 리전, 한국 공급사별 조달액, 기판 양산 |
| 모델·연구 | Neon 유료 접근, Genie 4 제한 배포, 연구 논문 3편 공개 | 동일 환경 성능 우위, 장시간 월드모델 안정성, 연구 결과 재현 |
| 에이전트·개발 환경 | CLI 릴리스, PR 이벤트 프리뷰, Copilot 팀 설정과 커넥터 | 전사 운영 성과, 커넥터 권한·감사, 한국 계정별 자격 |
| 데이터·응용 | Recapture 공개, Figaro 제휴, AMD 설계 반영, 사방넷 통합, 로봇 데이터 조달 투자 | 실촬영 데이터 성능, 제휴 개시, 완제품 실측, 판매자 성과, 한국 수집 파트너 |
| 평가·통제 | 에이전트 평가 잡음 연구, ViKernel 모의 평가, OpenAI 안전 검토·샌드박스 문서 | 평가 재현, 운영 환경 방어 효과, 독립 권한 검증 |
| 자본·제도 | IPO 가격과 투자 발표, BIS 규칙, ACUS 의견수렴, EU STEP 보고 | 공모·거래 종결, 허가 적용 사례, 최종 권고, AI 단독 집행액 |

## 6 반증·과장·재현성 감사

| 대상 | 과제·기준선·지표 | 조건·공개·오염·독립 재현 |
|---|---|---|
| Gemini 4 Neon | Artificial Analysis 종합 능력 지수에서 순위권 모델 대비 61점·3위. SWE-sweep에서 동일 Neon이 mini-SWE 12.8%, Antigravity 39.0%. Copilot 공지는 Carbon 대비 유사 품질, 낮은 과제당 토큰 비용과 빠른 응답 시작 등을 정성 주장했다. | 종합 지수는 `xhigh` 사고 설정이며 외부 평가자 수치를 Google 발표에서 인용한 것으로 해당 실행을 별도 확인하지 않았다. SWE-sweep은 하네스가 달라 모델 단독 개선이 아니다. Copilot 비교는 수치·과제·표본·채점·설정 미공개. 학습 중복·독립 재현 미확인. |
| OpenAI 내부 연구 에이전트 | 3월 대비 10월 무개입 성공 추정: 사람 기준 2~4시간 과제 23%→46%, 4~8시간 13%→35%. 과제 유형별로 학습 실행 모니터링 79%, 추론·서빙 코드 작성 25%. | 시간은 에이전트 실행 시간이 아니라 추정 인력 시간. 고정 과제·체크포인트 비교가 아닌 내부 관찰치로 과제 구성·도구·사용 방식의 변화를 통제하지 않았다. 학습 중복과 독립 재현 미확인. 인과적 생산성 개선이나 자율 자기개선의 증거가 아니다. |
| 에이전트 수정 평가 잡음 | 유익한 수정안 선택 및 방법별 순위 비교. 무작위 50% 대비 단일 실행 선택 정확도 49.7%; 방법 간 격차가 같은 방법의 반복 실행 변동보다 작은 경우가 많았다. | 저자 평가: 7개 방법, 6개 모델, 1,000만 회 이상 LLM 호출, 반복 재평가. 고정 가중치 수정 설정이며 평가의 편법이 일부 향상치에 영향을 줬다. 오염·독립 재현 미확인. |
| WoRD | 부분 궤적의 목적지 추정. 같은 점수망의 Reverse Diffuser 대비 top-1 정확도 inD 65.7% 대 58.6%, rounD 71.3% 대 64.9%; GRU 등도 비교하고 Brier 점수·고확신 오답률 등을 보고했다. | 시뮬레이션과 기록 궤적의 선택 장면을 사용했고 후보 경유점 집합을 가정했다. 실도로 운영 시험이 아니며 학습·시험 누출 감사와 독립 재현 미확인. |
| RSI-Prime | PostTrainBench 자율 후학습에서 미변경 GLM-5.3 대비 종합 성능 31.95% 상대 개선. | 7개 유형의 350개 실험 궤적에서 저품질 의사결정에 대한 학습 신호를 제외했다. 한 기반 모델·한 벤치마크의 저자 결과. 데이터 접근과 학습·시험 중복, 독립 재현 미확인. 지속적 재귀 자기개선을 입증하지 않는다. |
| ViKernel Scanner | 무단·위험 행동 시도 및 정상 과제 대조군 평가. 방화벽 없는 공개 가중치 모델 20개가 최저 영역 기준 모두 F; 공급사 규칙으로 재생한 비교에서는 표시된 897개 호출 모두 거부 판정. | 모의 도구 8개, 안전 검사 100개·정상 대조 20개. 무료판은 6개 영역 중 4개만 포함하고 일부 미응답이 있으며 원격 평가 세트는 변경 가능하다. 공개 시험자료의 학습 중복·독립 재현 미확인. 실제 방어를 시험한 결과가 아니다. |
| RTX Spark | 최대 1페타플롭스는 공급사 피크 사양. 특정 과제·기준선·데이터셋이 없다. | 정밀도·희소성·전력·지속 조건 미공개. 데이터 오염은 이 사양에 해당하지 않으며, 독립 실측 처리량·지연은 미확인. |
| Azure Rubin 기사에 인용된 MLPerf | v6.1 DeepSeek-V3 학습 제출 규모 10,240 GPU, DeepSeek-R1 대화형 추론 처리량은 다른 클라우드 제출 대비 10% 초과 우위라고 NVIDIA가 인용. 학습 성능 기준선과 구체적 추론 비교 대상은 명시되지 않았다. | 학습은 GB200, 추론은 GB300으로 둘 다 Blackwell이다. 세부 설정·오염 평가·독립 재현 미확인. Rubin 프리뷰 성능의 근거가 아니다. |
| OpenAI·AMD RTL | PicoRV32·Ibex 최적화 및 명세 기반 설계에서 유사 토큰 예산의 이전 모델과 정규화 추정 초당 명령 수를 비교. 기존 산업 설계 대비 AMD GPU IP 최대 14% PPA 개선, Jalapeño 벡터·행렬 유닛 추정 면적 약 13%·10% 절감. | RISC-V 채점 9,881회, 대표 비교 약 11.2만 토큰; 시뮬레이션 실패 또는 원 면적 16배 초과는 0점, 통과 결과는 비공개 워크로드의 IPC와 Yosys 추정 클록으로 산정. 공개 코어의 학습 포함 가능성이 있고, 일부 기능 생략이 허용됐으며 배치배선 후 실측이 아니다. AMD 설계는 Synopsys로 확인했다는 참여사 보고이며, 블록 결과의 칩 전체 일반화와 독립 재현은 미확인. |
| Unsiloed AI | 금융 문서에서 주요 AI 모델·Azure Document Intelligence·고객 자체 도구와 비교, 약 8.4만 데이터 포인트의 회사 보고 정확도 99.78%. olmOCR-Bench에서는 88.0 대 Reducto 66.0·Unstructured 39.9. | 금융 평가는 고객 한 곳의 문서 542건, 공개 벤치마크는 PDF 1,403쪽을 사용한 회사 실행 결과. 학습·시험 분리·오염 통제 확인 불가, 사적 표본의 일반화 불명, 독립 재현 없음으로 기록. |

Snap의 하루 제작 예시는 통제 벤치마크가 아니고, Payhawk의 77%는 공급사가 보고한 사용률이지 성능 지표가 아니다. Recapture와 사방넷도 각각 실문서 성능 개선과 판매자 전환율 개선이 확인되지 않았다.

## 7 다음 확인 일정

| 시점 | 확인할 항목 |
|---|---|
| 11월 19~20일 예정 | Anthropic Nasdaq 거래 개시와 공모 종결을 각각 확인하고, 최종 서류에서 발행사 순유입액과 인수단 옵션을 구분한다. |
| 후속 공시·문서 공개 시 | NVIDIA 10-Q의 조달 약정 세부 내역, Azure Rubin 프리뷰의 리전·VM·쿼터·가격, Payhawk 거래 승인·종결, 삼성전기 추가 자금·고객 인증·양산 이정표를 확인한다. |
| 접근 자격·도구 업데이트 확인 시 | 한국 계정의 Neon·Genie·개발 도구 접근 여부, Copilot 팀 정책 우선순위와 MCP 권한·감사 로그, PR 이벤트 전달, Codex 음성과 운영체제별 샌드박스 정책을 확인한다. |
| 후속 검증 자료 공개 시 | 동일 하네스 Neon 비교, 고정 과제의 내부 연구 비교, 에이전트 평가 다중 시드 로그, WoRD 신규 도로 검증, RSI-Prime 궤적 접근, ViKernel 고정 버전 방어·정상 과제 지표, AMD 블록별 PPA와 독립 검증을 확인한다. 문서 도구는 실제 촬영본과 독립 표본으로 확인한다. |
| 응용·한국 공급망 후속 자료 공개 시 | Figaro 인용과 직원 배포, 사방넷 실사용·전환율, Humyn의 투자자 확인 및 한국 수집 파트너·동의 절차, HBM4 전망과 실제 계약가의 차이를 확인한다. |
| 2027년 1월 19일 의견 마감 및 이후 | BIS 이행 지침·허가 예외·의견 대응과 ACUS 제출 의견·권고 채택 여부를 각각 확인한다. EU STEP은 다음 공모에서 AI별 예산·자격·수혜자를 확인한다. |

## 8 Coverage Audit

**연구자 종료 확인: 10/10.** 10개 카테고리 모두 최종 결과 봉투가 도착했다. 별도 terminal 상태 필드는 없어 완료는 결과 반환 기준이다. 구조화된 `search_audit`도 번들에 없어 패스별 전체 후보 수와 개별 로그는 확인할 수 없다. 아래의 1차(탐색)·2차(직접 확인)는 `coverage_notes`에 기록된 작업을 역할별로 구분한 것이며, 누락된 패스별 수치를 추정하지 않았다.

| 카테고리 | 전체 탐색 후보 | 연구자 검증 | 최종 포함 | 두 단계의 근거 및 차이 |
|---|---:|---:|---:|---|
| Frontier Models | 미기재 | 3 | 3 | 1차: 기술지·한국어·연구 및 저장소 검색. 2차: 공식 뉴스룸에서 모델과 공개일 확인. GPT-6.2, Hydrogen, Fable/Mythos는 기간 밖, 위험 검토 글은 새 모델 사건이 아니다. 목표 충족. |
| AI Research | 미기재 | 3 | 3 | 1차: arXiv·HF·GitHub·언론·기업 연구·한국 매체. 2차: arXiv 공개 목록과 초록의 제출 시간을 구분. AscendGYM은 기존 논문 재노출, Xing4는 README 편집. 기업 페이지 제한과 국내 미확인에도 목표 충족. |
| Agents/Developer Tools | 미기재 | 6 | 4 | 1차: 영문·한국어·연구 인덱스 검색. 2차: TechCrunch·Snap·GitHub 변경로그·릴리스 확인. 이전 날짜의 Event Streams 플랫폼 발표는 제외. Codex 릴리스는 Repos, Neon 배포는 Frontier에 통합. 목표 충족. |
| Open Source/Repos | 미기재 | 3 | 3 | 1차: 영문·한국 매체, GitHub·HF·arXiv 탐색. 2차: 태그와 게시·저장소 이력 확인. Codex 알파 및 기존 vLLM·Transformers 릴리스는 기간 밖, README 수정·논문 피드 재노출은 새 저장소 릴리스가 아니다. 일부 추출 제한에도 목표 충족. |
| Chips/Compute/Infrastructure | 미기재 | 3 | 3 | 1차: 가속기·클라우드·패키징·메모리 및 국내 공급망 검색. 2차: 기술지·뉴스룸·SEC 직접 확인. 날짜만 있는 NVIDIA 실적 발표 대신 시각이 있는 SEC 접수를 채택. 마감 이후 데이터센터 기사, 기존 실적의 후속 해설, 날짜가 안 나온 공급망 자료는 추가 계상하지 않았다. 목표 충족. |
| Enterprise/Applications | 미기재 | 3 | 2 | **목표 대비 1건 부족.** 1차: 일반·기술·한국 매체와 기업·저장소 후보 탐색. 2차: 원문 시각·릴리스 확인. Applied Compute 딜은 마감 5분 후, Gemini Tasks는 시작 전, ChatGPT for Sales·Drive 분류는 날짜 기준 밖, Power BI 번들은 6월 릴리스다. 일부 페이지 접근 제한과 국내 검증 후보 부재에 더해 샌드박스 공개를 Safety로 통합해 두 건만 남았다. |
| Funding/M&A/Business | 미기재 | 4 | 4 | 1차: 통신사·경제지·기술지·한국 매체·규제 자료 검색. 2차: 발행사 원문과 TechCrunch 창업자 귀속 보도 추출. 기존 NVIDIA 금융 약정 설명과 예정된 Anthropic 상장은 추가 사건이 아니다. 검색·추출 제약은 있으나 목표 충족. |
| Safety/Evaluation/Security | 미기재 | 3 | 2 | **목표 대비 1건 부족.** 1차: 국제·한국 보도, 평가기관·연구·저장소 탐색. 2차: 기업·NIST·UK AISI·arXiv·GitHub 등 직접 확인을 시도했으나 추가 검증 건은 없고 The Register 날짜별 아카이브는 추출 실패. Anthropic 가이드는 기간 밖, 논평과 7월 사건은 제외. 내부 연구 측정을 Frontier로 통합해 두 건만 남았다. |
| Policy/Geopolitics | 미기재 | 3 | 3 | 1차: 영문·한국 보도, EU·미국·APEC 자료 탐색. 2차: Federal Register와 EU 위원회 인덱스 직접 확인. EU 기존 공모 업데이트와 마감 밖 사건을 제외했고, 아태 AI 센터 관련 발언은 출범·합의를 입증하지 못했다. Reuters 차단 등에도 목표 충족. |
| Korea Exposure | 미기재 | 3 | 3 | 1차: 영문·한국어 날짜 제한 검색. 2차: 삼성·SK hynix 뉴스룸 및 국내 기술지 목록을 확인하고 ZDNet Korea 원문 3건 추출. 기간 밖 SK hynix·LG 소식, 이전 행사 재보도, 중대한 AI 변경 미입증 베타를 제외. B급 단일 매체 근거로 목표 충족. |

- **전역 중복 제거:** 연구자 검증 행 34개 중 4개 중복 행을 통합했다. Codex CLI 안정판은 Open Source/Repos, Codex 샌드박스 문서는 Safety/Evaluation/Security에 한 번씩만 남겼다. ID가 달랐던 OpenAI 내부 연구 측정은 같은 원문·측정이므로 Frontier Models에 통합했다. Copilot의 Neon은 같은 모델 출시의 배포 채널로 처리해 Frontier Models의 Google Neon 항목에 GitHub 근거를 붙였다.
- **중복이 아닌 공개:** Codex 안정판 릴리스와 기존 샌드박스 기술 문서는 산출물이 다르다. Gemini Neon과 Genie 4는 별개 모델이다. 삼성전기의 공급 협력 확대와 NVIDIA의 분기 공시는 같은 공급망을 다루지만 별개 공개다. ViKernel은 Open Source/Repos 한 곳에만 계상했다.
- **상태 충돌 처리:** OpenAI 내부 연구의 `availability`는 공개 보고서가 아니라 외부 에이전트 접근을 기준으로 `unknown`, `production`은 내부 실무 사용으로 `yes`다. Codex 샌드박스의 `production: yes`는 기존 프로필 운용으로 제한하며 고객사 운영이나 신규 기능 출시를 뜻하지 않는다.
- **시간 및 제외:** 정확 시각이 있는 자료는 반개구간으로 판정했다. 날짜만 있는 원문은 번들의 달력일 겹침 규칙을 적용하되 공개 시각이나 시간대를 추정하지 않았다. C급 포함 0건, watchlist 항목 0건이다. 검증은 번들의 출처와 공개 사실 기준이며, 독립 성능 검증이나 탐색의 완전성을 뜻하지 않는다.

- **수록 사건 수:** 30
