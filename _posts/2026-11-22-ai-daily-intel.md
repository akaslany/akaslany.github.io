---
layout: ai-intel
title: "AI Daily Intel — 2026-11-22"
date: 2026-11-22 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-22/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-22
- **기준 시각:** 2026-11-22T06:00:00+09:00
- **수집 구간:** [2026-11-21T06:00:00+09:00, 2026-11-22T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10/10 종료
- **수록 사건 수:** 18

## 1 오늘의 AI 한 문장

OpenAI는 사전학습 손실을 공개했고 개발 도구는 조직 단위 제어를 강화했지만, 공통 안전 기준의 채택이나 기업 운영 성과까지 확인된 것은 아니다.

## 2 핵심 신호 5

1. **OpenAI, 내부 코드 평가의 사전학습 손실 공개 — <br class="report-field-break" />Evidence A.** GPT-3.5 약 0.99, GPT-4 약 0.91, 이름을 공개하지 않은 후속 모델 약 0.76의 로그 퍼플렉서티를 보고했다. 같은 내부 평가에서의 비교이지, 새 모델 출시나 업계 공통 안전 기준 채택이 아니다. [OpenAI](https://openai.com/index/perplexity-and-intelligence/)
2. **Claude Code, 기업 로그인과 자체 호스팅 러너 제어를 안정판에 추가 — <br class="report-field-break" />Evidence A.** 조직이 지정한 클라우드 제공자 또는 게이트웨이 설정을 로그인에 적용하고, 러너 시작 디렉터리와 시작 지표를 제어할 수 있게 했다. 실제 기업 배포 성과는 미확인이다. [릴리스](https://api.github.com/repos/anthropics/claude-code/releases?per_page=1)
3. **중국 국가데이터국, AI 토큰 계량·과금 표준 추진 방침 공개 — <br class="report-field-break" />Evidence A.** 추론 요금 비교에 영향을 줄 수 있으나 규격, 의무 적용 여부, 시행 일정은 확인되지 않았다. [국가데이터국](https://www.nda.gov.cn/sjj/jgsz/jld/llh/llhldhd/1121/20261121163827783032901_pc.html)
4. **IITP 피지컬 AI 초안, 공동 학습 데이터·시뮬레이션·현장 실증 제안 — <br class="report-field-break" />Evidence B.** 5개 과제의 2031년까지 정부지원 제안 상한은 3,482억 8,000만 원이다. 확정 예산도, 가동 중인 인프라도 아니다. [디지털데일리](https://www.ddaily.co.kr/page/view/2026112102592077504)
5. **캘리포니아 검찰총장, Nvidia 기존 조사에 형사법 위반 가능성도 포함된다고 설명 — <br class="report-field-break" />Evidence B.** 새로 확인된 것은 조사 범위에 대한 설명이다. 새 소환장, 기소, 위법 판단은 아니다. [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-21/california-nvidia-probe-covers-potential-criminal-law-violations)

## 3 영역별 AI 브리프

등급은 해당 사건에 대한 근거 수준이다. A는 공식·정부·저장소 1차 자료, B는 번들이 검증 근거로 채택한 보도, C는 감사에만 남긴 약한 근거다. 상태는 번들의 `yes` / `no` / `unknown`을 유지한다. `unknown`은 미확인이지 부정을 뜻하지 않는다.

### Frontier Models

  - Evidence A | <br class="report-field-break" />출처 URL: [openai.com](https://openai.com/index/perplexity-and-intelligence/)
  - OpenAI가 내부 코드 평가의 세대별 사전학습 손실을 공개하고 퍼플렉서티를 다른 지표와 함께 안전 기준에 활용하자고 제안했다. 사건은 과거 학습이 아니라 이번 공개다. 게시일만 확인돼 번들의 날짜 중첩 규칙을 적용했으며 정확한 게시 시각은 미확인이다.

### AI Research

검증 통과 이벤트 없음 — 이 영역에 별도로 편입할 사건이 없다. 연구자 검증 1건은 Frontier Models의 OpenAI 공개와 동일하다.

### Agents/Developer Tools

  - Evidence A | <br class="report-field-break" />출처 URL: [api.github.com](https://api.github.com/repos/anthropics/claude-code/releases?per_page=1)
  - Claude Code 안정판 2.1.330에 Enterprise Admin Console 로그인, 조직의 제공자·게이트웨이 설정 적용, 자체 호스팅 러너 시작 디렉터리와 시작 지표가 추가됐다.

  - Evidence A | <br class="report-field-break" />출처 URL: [github.blog](https://github.blog/changelog/feed/)
  - GitHub가 Enterprise Cloud 등 대상 요금제의 사용자 지정 저장소 역할에 보안 권고 권한 4개를 정식 제공했다. 조직 전체 보안 권한을 부여하지 않고 저장소 단위로 업무를 위임할 수 있다.

  - Evidence A | <br class="report-field-break" />출처 URL: [api.github.com](https://api.github.com/repos/cline/cline/releases/tags/v4.1.27)
  - Cline 안정판과 다운로드 가능한 VSIX가 공개됐다. 인증이 필요한 LM Studio 연결을 지원하고 파일 읽기 결과의 별도 8,000자 잘림을 없앴다. 도구 자체의 2,000줄 또는 약 48,000자 제한은 남는다.

  - Evidence A | <br class="report-field-break" />출처 URL: [api.github.com](https://api.github.com/repos/openai/codex/releases/tags/rust-v0.173.0-alpha.4)
  - Codex CLI 알파가 대상 기록 동작에 대한 명시적 Guardian 검토 결과를 반환한다. 게이트웨이 OAuth 인터페이스와 상위·하위 에이전트 역할 지시 형식도 바뀌었다. 검토는 동작 실행이나 권한 부여가 아니며, 가용성은 알파로 한정된다.

  - Evidence A | <br class="report-field-break" />출처 URL: [api.github.com](https://api.github.com/repos/google-gemini/gemini-cli/releases/tags/v0.71.0-nightly.20261121.geecccfcd5)
  - Gemini CLI 나이틀리가 가장 최근에 시작된 세션 대신 가장 최근에 활동한 세션을 재개하도록 변경했다. Windows 홈 상대경로 처리도 수정했다. 안정판 배포는 아니다.

### Open Source/Repos

  - Evidence A | <br class="report-field-break" />출처 URL: [api.github.com](https://api.github.com/repos/huggingface/transformers/releases/tags/v5.24.0)
  - Transformers 안정판 5.24.0이 Inkling 2 Mini와 Apertus 1.5를 통합했다. 두 모델의 최초 공개가 아니라 공통 라이브러리에서 사용할 수 있게 된 사건이다.

  - Evidence A | <br class="report-field-break" />출처 URL: [api.github.com](https://api.github.com/repos/ggml-org/llama.cpp/commits/660be5506b15eae512f0df3ae0cc168712555319)
  - llama.cpp 공개 저장소에 ggml CPU 행렬곱의 메모리 접근과 출력 처리를 바꾸는 서명된 커밋이 기록됐다. 소스 공개만 확인됐으며 안정판 바이너리 출시나 처리량 개선은 확인되지 않았다.

### Chips/Compute/Infrastructure

  - Evidence B | <br class="report-field-break" />출처 URL: [www.ddaily.co.kr](https://www.ddaily.co.kr/page/view/2026112102592077504)
  - 디지털데일리가 IITP의 2027~2031년 피지컬 AI 5개 연계 과제 초안을 보도했다. 공동 학습 데이터, 시뮬레이션·디지털 트윈, 로봇 기반모델, 안전 및 현장 실증을 포함한다. 정부지원 제안 상한은 전체 3,482억 8,000만 원, 첫해 최대 550억 원이다. 기재한 발표 상태는 보도 공개를 뜻하며, 초안의 원 게시일이나 정식 공고·예산 승인은 미확인이다.

### Enterprise/Applications

검증 통과 이벤트 없음 — 이 영역에 별도로 편입할 사건이 없다. 연구자 검증 1건은 Agents/Developer Tools의 Codex 알파와 동일하며 기업 운영 도입을 입증하지 않는다.

### Funding/M&A/Business

  - Evidence B | <br class="report-field-break" />출처 URL: [www.cnbc.com](https://www.cnbc.com/2026/11/21/anthropic-ipo-tech-selloff.html)
  - CNBC는 Anthropic의 두 번째 나스닥 거래일 종가가 88.91달러, 완전희석 기준 평가액이 1.6조 달러라고 보도했다. 정규장 마감은 KST 창의 포함 시작점에 해당한다. 11월 19일 IPO는 배경이며 새 자금조달로 세지 않았다.

  - Evidence B | <br class="report-field-break" />출처 URL: [www.theverge.com](https://www.theverge.com/tech/1039305/nvda-down-sec-investigation-accounting)
  - The Verge는 Nvidia가 125.53달러에 마감해 7주 연속 주간 하락을 기록했다고 보도했다. 검증 대상은 주가 마감이며, 기사에 인용된 익명발 SEC 회계 관련 보도나 칩 주문·매출 감소가 아니다.

  - Evidence B | <br class="report-field-break" />출처 URL: [www.theverge.com](https://www.theverge.com/games/1038099/chess-classic-games-expansion-ai)
  - Chess.com이 웹·모바일 공개 베타에 게임 10종을 추가했다. 회사 관계자는 AI를 코딩에 사용했지만 미술·디자인에는 쓰지 않았다고 설명했다. 운영 상태는 공개 베타를 뜻하며, 매출이나 생산성 향상 폭은 미확인이다.

  - Evidence A | <br class="report-field-break" />출처 URL: [www.nda.gov.cn](https://www.nda.gov.cn/sjj/jgsz/jld/llh/llhldhd/1121/20261121163827783032901_pc.html)
  - 중국 국가데이터국이 토큰 계량·과금·품질평가 표준을 개선하겠다는 방침을 공개했다. 사건은 전날 행사 발언 자체가 아닌 기관의 11월 21일 게시이며, 구속력 있는 표준은 제정되지 않았다.

  - Evidence B | <br class="report-field-break" />출처 URL: [www.bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-21/california-nvidia-probe-covers-potential-criminal-law-violations)
  - Bloomberg는 캘리포니아 검찰총장을 인용해 기존 예비 조사가 주 형사법 위반 가능성도 살핀다고 보도했다. 규제 상태의 `yes`는 기존 조사 범위 공개에 한정된다. 새 소환장·기소·판단이나 한국 기업의 조사 대상 편입은 확인되지 않았다.

### Safety/Evaluation/Security

검증 통과 이벤트 없음 — 이 영역에 별도로 편입할 사건이 없다. 연구자 검증 1건인 OpenAI 안전 지표 제안은 Frontier Models의 손실 공개에 병합했다.

### Policy/Geopolitics

  - Evidence B | <br class="report-field-break" />출처 URL: [en.yna.co.kr](https://en.yna.co.kr/view/AEN20261121001051320)
  - 이재명 대통령이 울산 SK AI 데이터센터 건설 현장을 방문해 첨단시설 건설 인력 부족에 대한 지원 방침을 밝혔다. 기존 지역 사업의 점검으로, 신규 사업 착수나 데이터센터 가동을 뜻하지 않는다.

  - Evidence B | <br class="report-field-break" />출처 URL: [en.yna.co.kr](https://en.yna.co.kr/view/AEN20261121001300320)
  - 이재명 대통령이 수능 부정행위 신고 포상금 1억 원이 건별 기준이라고 설명하고, 자진 신고와 공범 제보 시 감경 및 전액 포상 가능성을 언급했다. AI 활용 부정행위는 배경 중 하나이며, 조치는 부정행위 전반을 대상으로 한다. 접수나 지급 개시는 미확인이다.

### Korea Exposure

  - Evidence B | <br class="report-field-break" />출처 URL: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261121081600)
  - 과기정통부가 청소년 로봇 대회 결선을 발표했다. 135개 참가팀 중 32개 팀, 학생 114명이 결선에 진출했다. 우승팀의 ITU 대회 참가 지원은 계획이며 상용 로봇 성능의 증거는 아니다.

  - Evidence B | <br class="report-field-break" />출처 URL: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261121084337)
  - 과기정통부 AI Insight Festival이 71편 중 4편을 선정했다. 최우수 논문은 특허·논문 분류에서 AI와 사람의 판단이 갈리는 사례를 살피고 위험도에 따른 인간 감독 기준을 제안했다. 수상이 실험의 독립 검증이나 감독 기준의 채택을 뜻하지 않는다.

## 4 기술→산업 전달경로

- **사전학습 측정 → 공통 안전 평가:** 내부 코드 손실 공개는 비교의 출발점이다. 공동 코퍼스, 토크나이저와 평가 조건, 오염 점검 절차가 합의돼야 연구소 간 비교에 쓸 수 있다. 지금 수치로 개발 제한선을 정할 수는 없다.
- **에이전트 제어 → 기업 검증:** 조직 로그인과 지정 게이트웨이, 러너 설정, 저장소 단위 권한이 각각 관리 지점을 제공한다. 다음 증거는 실제 조직에서의 설정 적용과 최소권한 동작이다. 릴리스만으로 운영 효과를 단정하지 않는다.
- **공동 데이터·시뮬레이션 → 로봇 현장 시험:** IITP 초안이 공고·예산으로 이어지면 제조·물류·돌봄 실증에서 데이터 형식과 검증 환경을 공유할 수 있다. 과제 선정, 라이선스, 현장 검증을 거쳐야 채택 여부를 판단할 수 있다.
- **토큰 계량 → 추론 구매 비교:** 중국의 추진 방침이 구체 규격과 적용 범위로 이어지면 공급업체 간 과금 비교에 영향을 줄 수 있다. 한국 공급자에 대한 실제 적용이나 계약 변화는 확인되지 않았다.

## 5 AI Stack Signal Map

| 계층 | 확인 신호 | 아직 확인되지 않은 것 |
|---|---|---|
| 모델·평가 | OpenAI 내부 사전학습 손실 공개 | 교차 연구소 비교 기준, 다운스트림 위험과의 대응 |
| 개발 도구·권한 | Claude Code·Cline 안정판, GitHub 권한 정식 제공, Codex 알파·Gemini 나이틀리 | 운영 배포 효과, 알파·나이틀리 변경의 안정판 반영 |
| 라이브러리·런타임 | Transformers 모델 통합, llama.cpp CPU 소스 변경 | 배포 환경 호환성, CPU 처리량 향상 |
| 물리 인프라 | IITP 공동 인프라 초안, 울산 건설 인력 지원 방침 | 예산 확정, 실증·가동, 인력 지원 집행 |
| 응용·시장 | Chess.com 공개 베타, Anthropic·Nvidia 종가 보도 | AI 생산성 효과, 증분 매출, 칩 주문 변화 |
| 과금·법적 환경 | 중국 토큰 표준 추진 방침, 캘리포니아 조사 범위 공개 | 구속 규격, 기소·위법 판단, 한국 기업 영향 |

## 6 반증·과장·재현성 감사

- **OpenAI 벤치마크 — <br class="report-field-break" />Evidence A는 공개 사실에 대한 등급이다.** 과제: 내부 코드의 다음 토큰 예측. 비교 기준: GPT-3.5 약 0.99, GPT-4 약 0.91, 미공개 후속 모델 약 0.76. 지표: 로그 퍼플렉서티(교차 엔트로피 손실, 낮을수록 좋음). 조건: OpenAI가 홀드아웃이라고 설명한 고정 내부 코드 스냅샷. 공개·오염: 코퍼스 미공개로 학습 데이터 중복을 외부에서 감사할 수 없고, 연구소별 데이터셋과 토크나이저 차이도 남는다. 독립 재현: 미확인. 코드에서의 손실 감소는 일반 능력, 사후학습 추론 능력, 다운스트림 위험의 직접 측정이 아니다.
- **다른 편입 사건에는 검증할 성능 벤치마크 결과가 없다.** IITP의 수치는 미래 목표 또는 지원 상한이다. llama.cpp는 상위 커밋 대비 동일 CPU·양자화 조건의 출력 일치 및 처리량 비교 전에는 속도 개선으로 볼 수 없다. Chess.com의 개발 가속 설명에는 비교 기준과 측정치가 없다.
- **가용성과 통제 효과를 분리했다.** Cline MCP의 읽기 전용 표시는 서버의 선언이지 강제 여부의 증거가 아니다. Codex Guardian 검토는 실행 승인이나 권한 부여가 아니다. 알파·나이틀리·소스 공개를 안정판 또는 기업 운영으로 올려 세지 않았다.
- **주가·조사·주장은 별개다.** Nvidia 주가 하락은 주문·매출 감소나 익명발 SEC 조사의 증거가 아니다. 캘리포니아의 조사 범위 설명도 혐의 확정이 아니다. 리만 가설 후보에서 Lean 컴파일은 형식 명제가 고전적 추측과 일치하거나 Claude의 기여가 독립 재현됐다는 뜻이 아니다. Navier–Stokes 후보도 전체 밀레니엄 문제 해결을 입증하지 않는다.

## 7 다음 확인 일정

아래는 확정 일정이 아니라 후속 자료가 나올 때 확인할 항목이다.

- **공동 평가 자료 공개 시:** OpenAI 평가의 코퍼스·토크나이저·오염 점검 및 외부 연구소의 독립 재현·참여 약속을 확인한다.
- **다음 안정판 또는 배포 검증 시:** Claude Code의 조직 게이트웨이 적용과 러너 지표, GitHub 권한 경계, Codex Guardian·OAuth·역할 호환성, Gemini 세션 재개를 확인한다. Cline은 마켓플레이스 배포와 인증 연결을 별도로 확인한다.
- **재현 시험 시:** Transformers 체크포인트 로딩·멀티모달 추론과 llama.cpp의 출력 일치·CPU 처리량을 같은 환경에서 비교한다.
- **공고·시행 자료 발표 시:** IITP 예산·과제 선정·데이터와 코드 공개 조건, 울산 건설 인력 지원의 집행 방식, 수능 신고·지급 규칙, 중국 토큰 표준 초안과 의무 적용 여부를 확인한다.
- **거래소·기관·기업 자료 공개 시:** Anthropic과 Nvidia 종가, Anthropic 희석 주식 수, 캘리포니아 공식 문서 또는 SEC·Nvidia의 귀속 가능한 공개, Chess.com 베타 이용·유료화 지표를 확인한다. 국내 대회는 우승팀의 국제대회 참가와 수상 논문 공개 여부를 확인한다.

## 8 Coverage Audit

번들 기준 10명 전원 최종 결과 제출·종료(10/10). 아래 1차·2차 수치는 `search_audit`의 통과 건수이며 전체 검색 후보 수가 아니다. 전체 후보 수는 제공되지 않았다. 검증 건수는 연구자별 중복 제거 전, 편입 건수는 전역 병합 후 대표 영역에 귀속한 수다. 조사 단계와 최종 편입 단계의 미달은 각각 목표 3건 대비다.

| 영역 | 종료 | 1차 / 2차 | 검증 | 편입 | 조사 / 편입 미달 | 근거 |
|---|---|---:|---:|---:|---:|---|
| Frontier Models | 완료 | 1 / 0 | 1 | 1 | 2 / 2 | 1차 OpenAI만 통과. 2차 공식 연구소·언론·저장소 점검에서 출시일이 창 이전이거나 별도 공개가 없었다. Hugging Face 날짜별 경로는 이전 피드를 반환했고 일부 조회는 제한됐다. |
| AI Research | 완료 | 1 / 0 | 1 | 0 | 2 / 3 | 1차 OpenAI 공개만 통과. 2차에도 논문 원 제출일은 창 밖이고 국내 리만 후속은 컷오프 이후였다. 일부 기관 경로는 404였으며 유일한 검증 건은 Frontier Models에 병합했다. |
| Agents/Developer Tools | 완료 | 2 / 3 | 5 | 5 | 0 / 0 | 1차 Claude Code·GitHub, 2차 Cline·Codex·Gemini CLI. 창 밖 릴리스와 기존 도구 모음 기사는 제외했다. |
| Open Source/Repos | 완료 | 미제공 / 미제공 | 3 | 2 | 0 / 1 | `search_audit` 미제공으로 패스별 결과를 추정하지 않았다. 커버리지 노트가 1차 저장소 근거로 확인한 3건 중 Codex는 도구 영역에 병합했다. Pi Bot 정식 공개와 llama.cpp 후속 바이너리는 컷오프 이후, Ollama 원 릴리스는 창 밖이었다. |
| Chips/Compute/Infrastructure | 완료 | 0 / 1 | 1 | 1 | 2 / 2 | 1차 보도는 기존 실적·장애·설비를 재조명했고 일부 출처는 차단됐다. 2차 IITP만 통과했다. 논문과 런타임 릴리스는 창 이전, 국내 사이버 방어 기사는 제외 상한과 일치했다. |
| Enterprise/Applications | 완료 | 0 / 1 | 1 | 0 | 2 / 3 | 1차 창 복구에서 Google 전환 일정 제외. 2차의 Codex 알파만 통과했으나 도구 영역에 병합했다. NH농협 보도는 컷오프 이후, AWS 후속은 기존 발표였다. |
| Funding/M&A/Business | 완료 | 2 / 3 | 5 | 5 | 0 / 0 | 1차 종가 두 건, 2차 Chess.com 베타·중국 토큰 표준 방침·캘리포니아 조사 범위. 기존 IPO, 미확인 인수설, 익명발 SEC 보도는 새 사건으로 미편입했다. |
| Safety/Evaluation/Security | 완료 | 1 / 0 | 1 | 0 | 2 / 3 | 창 복구 시 Signal은 제외했다. 2차 공식·논문·언론 점검에서도 대학 침입 보도와 논문 원 공개는 창 이전이었다. Reuters 접근이 제한됐고 유일한 검증 건인 OpenAI는 Frontier Models에 병합했다. |
| Policy/Geopolitics | 완료 | 0 / 2 | 2 | 2 | 1 / 1 | 1차 공식·언론 접근 제한과 창 밖 기사로 0건. 2차 연합뉴스 두 건 통과. 자율무기 회의는 최종 결정의 시점·근거가 부족했고 해외 데이터센터 과세 발언은 창 내 신규 조치가 아니었다. |
| Korea Exposure | 완료 | 0 / 3 | 3 | 2 | 0 / 1 | 1차 자료는 기존 활동·창 밖 공개가 주를 이뤘다. 2차 IITP 및 대회·시상 두 건을 확인했다. IITP는 인프라 영역에 병합했다. |

**전역 병합·제외:** 연구자별 검증 항목 23건에서 중복 5건을 제거했다. OpenAI 공개는 서로 다른 ID 세 개를 한 건으로, Codex 동일 알파는 같은 ID 및 다른 ID로 들어온 세 항목을 한 건으로, IITP 동일 보도는 두 ID를 한 건으로 합쳤다. Nvidia 종가와 캘리포니아 조사 범위 공개는 별개 사건이다. 창 이전 소환장, Signal 및 Google 전환 일정은 원장에 편입하지 않았다. 날짜만 있는 자료는 번들의 날짜 중첩 규칙을 따르고 시각을 추정하지 않았다. 컷오프와 정확히 일치한 공개는 제외했다. 검증 미달은 검색 범위와 접근 제한 아래의 결과이지, 다른 사건이 없었다는 결론이 아니다.

- **수록 사건 수:** 18

### Watchlist (미확인 후보)

동일 후보의 교차 제출은 한 줄로 합쳤다. 전부 원장 및 편입 건수에서 제외했다.

- 후보: Claude 보조 리만 가설 증명 주장 (미포함 사유: <br class="report-field-break" />Evidence B; 원 보도는 11월 20일 날짜만 확인됐고 별도 창 내 공개가 입증되지 않았으며 국내 후속은 컷오프 이후 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/))
- 후보: Claude 보조 Navier–Stokes 형식화 (미포함 사유: <br class="report-field-break" />Evidence B; 공개 커밋이 시작점 이전이고 별도 창 내 공개 미확인 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/tristanbuckmaster/navier-stokes/commits?per_page=3))
- 후보: AI 서버 수요에 따른 PCB 공급 경고 (미포함 사유: <br class="report-field-break" />Evidence B; 11월 21일 01:01 KST 보도로 시작점 이전 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/systems/2026/11/20/ai-boom-threatens-circuit-board-crunch-to-rival-pandemic-era-chip-shortage/5311335))
- 후보: 미국 해외 AI 데이터센터 과세·제한 가능성 발언 (미포함 사유: <br class="report-field-break" />Evidence B; The Verge 보도는 창 이전, 국내 후속은 창 안이지만 원 발언 시각이나 별도 신규 조치 미확인 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/policy/1038892/trump-foreign-data-centers-tax) ; [www.ddaily.co.kr](https://www.ddaily.co.kr/page/view/2026112107290071015))
- 후보: 캘리포니아의 Nvidia 조사 소환장 (미포함 사유: <br class="report-field-break" />Evidence B; 원 공개·보도 모두 창 이전이며 편입된 조사 범위 설명과는 다른 사건 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261120135739))
- 후보: SK텔레콤 A.dot의 A.LL 개편 계획 (미포함 사유: <br class="report-field-break" />Evidence B; 보도가 컷오프 10시간 후이며 신규 서비스 가용성 미확인 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000272))
- 후보: Signal 모바일 화면 캡처 제한 (미포함 사유: <br class="report-field-break" />Evidence B; 원 발표의 11월 20일 날짜는 기준 미통과, The Register는 시작 18분 전, TechCrunch는 종료 37분 후 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/20/signal-slams-door-on-prying-ai-agents-to-protect-privacy/5311466) ; [techcrunch.com](https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/))
- 후보: AWS Marketplace 일부 상품의 에이전트 구매 (미포함 사유: <br class="report-field-break" />Evidence B; 창 내 보도는 기존 발표를 인용했고 별도 신규 출시·공개 미확인 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/ai-and-ml/2026/11/20/amazons-split-personality-aws-embraces-bot-commerce-while-main-site-enforces-bans/5311493))
- 후보: Google 스마트 스피커·디스플레이의 Gemini 전환 일정 (미포함 사유: <br class="report-field-break" />Evidence B; 재검토한 최초 보도 시각이 11월 21일 03:00 KST로 시작점 이전 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/tech/1038834/google-assistant-smart-speakers-nest-app-killed-shut-down))
- 후보: CrowdStrike의 Zscaler 인수 협의설 (미포함 사유: <br class="report-field-break" />Evidence C; 익명 소식통 보도로 협의·합의가 확인되지 않았고 AI 연계도 간접적 / <br class="report-field-break" />출처: [www.cnbc.com](https://www.cnbc.com/2026/11/20/zscaler-crowdstrike-deal.html))
- 후보: Shortical의 AI 마이크로드라마 초상 사용권 계약 (미포함 사유: <br class="report-field-break" />Evidence B; 작품 공개는 전주이며 계약 체결과 별도 오디션 포털 출시의 창 내 시점 미확인 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/21/is-selling-an-ai-version-of-your-face-to-this-microdrama-startup-the-future-of-hollywood/))
- 후보: SoftBank의 SK하이닉스 인수 검토 보도와 회사 답변 (미포함 사유: <br class="report-field-break" />Evidence C; 과거 접촉·평가액은 익명발이고 회사 답변은 현재 적극 검토하지 않는다는 내용으로 신규 입찰·합의 미확인 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261121174004))
- 후보: LG유플러스 기업 AI 인프라·플랫폼 조직 개편 (미포함 사유: <br class="report-field-break" />Evidence B; 최초 보도가 컷오프 3시간 후이며 별도 창 내 공개 미확인 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261122085359))
- 후보: Amazon CISO가 설명한 대학 대상 AI 에이전트 침입 (미포함 사유: <br class="report-field-break" />Evidence B; 침입은 9월, 보도는 시작 3시간 30분 전 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/security/2026/11/20/china-attackers-deployed-ai-agents-that-autonomously-found-and-exploited-a-0-day-to-take-over-a-university-server/5311382))
- 후보: 제네바 자율무기 규칙 회의 합의 불발 보도 (미포함 사유: <br class="report-field-break" />Evidence C; 재인용 출처가 허용 목록 밖이고 최종 결정의 창 내 시점이 검증되지 않음 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/tech/1039554/un-regulations-killer-robots))
- 후보: 한국 교육부 장관 사의 표명 (미포함 사유: <br class="report-field-break" />Evidence B; 속보와 상세 기사 모두 06:00 KST 컷오프 이후 / <br class="report-field-break" />출처: [en.yna.co.kr](https://en.yna.co.kr/view/AEN20261122001000315))
- 후보: 한국 AI 사이버 쉴드 돔 R&D 계획 (미포함 사유: <br class="report-field-break" />Evidence B; 표시된 게시 시각이 정확히 제외 상한인 11월 22일 06:00 KST / <br class="report-field-break" />출처: [www.ddaily.co.kr](https://www.ddaily.co.kr/page/view/2026112117530323929))
