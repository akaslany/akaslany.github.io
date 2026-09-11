---
layout: post
title: "AI Daily Intel — 2026-09-11"
date: 2026-09-11 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-09-11/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

Cutoff: 2026-09-11T06:00:00+09:00
Window: [2026-09-10T06:00:00+09:00, 2026-09-11T06:00:00+09:00) Asia/Seoul
Researchers: 10 (Frontier Models · AI Research · Agents/Developer Tools · Open Source/Repos · Chips/Compute/Infrastructure · Enterprise/Applications · Funding/M&A/Business · Safety/Evaluation/Security · Policy/Geopolitics · Korea Exposure) — 전원 정상 종료
Included Event count: 27

## 1 오늘의 AI 한 문장

오늘의 축은 "더 똑똑한 모델"이 아니라 원가·메모리·조달 구조다 — DeepSeek이 552B 오픈웨이트를 MIT로 풀고 KV 캐시를 토큰당 890바이트까지 줄여 에이전트 추론의 비용 곡선을 다시 그리는 사이, OpenAI는 에이전트 하네스를 API 상품으로, TSMC·MediaTek·Oracle은 그 수요를 매출과 마진 압박이라는 두 얼굴로 동시에 보고했으며, Anthropic은 그 능력의 상당 부분이 자체 훈련이 아니라 증류(추출)로 닫히고 있다는 자체 측정치를 공개했다.

## 2 핵심 신호 5

[신호 1] 에이전트 추론의 원가 구조가 메모리 효율로 이동 — DeepSeek-V4.1-Flash (증류 포함 자체 보고 주의)
- Event ID: EVT-20260910-DEEPSEEK-V41FLASH (canonical, 구 EVT-20260910-DS-V41-FLASH-OPENWEIGHTS 통합)
- Evidence: A (official, deepseek.com) + A (repo, Hugging Face, 동일 이벤트)
- Source URL: https://www.deepseek.com/en/news/deepseek-v4-1-flash/ · https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- 상태: announcement=yes · availability=yes · code=yes(웨이트·추론/인코딩 코드, MIT) · independent_reproduction=unknown · production=yes(API 'deepseek-flash') · revenue=unknown · regulatory=unknown
- 왜 강한가: 552B MoE·프리필 8B/디코드 16B 활성화·1M 컨텍스트·KV 890바이트/토큰(전 세대 대비 약 1/4 HBM)에 MIT 라이선스이며, 벤더가 자기 플래그십(V4-Pro)을 소형 티어로 대체·재라우팅(2026-09-14 04:00 UTC)한다고 선언한 사건이다. 헤드라인 IQ가 아니라 서빙 단가·메모리 예산이 레버라는 점에서 물질적이다.

[신호 2] AI capex 사이클의 실물 선행지표가 역대 최고치 — TSMC 8월 매출 +53.3% YoY
- Event ID: EVT-20260910-TSMC-AUG-REV (동일 창 내 MediaTek EVT-20260910-MEDIATEK-AUG-REV은 별도 이벤트, 묶음 해석)
- Evidence: A (official, TSMC IR)
- Source URL: https://pr.tsmc.com/english/news/3340
- 상태: announcement=yes · availability=unknown · code=no · independent_reproduction=no(공시 수치 자체가 1차) · production=yes · revenue=yes · regulatory=no
- 왜 강한가: 2026년 8월 연결 매출 약 NT$514.81B(+10.1% MoM, +53.3% YoY), 월간 사상 최초 NT$500B 돌파, 1~8월 누계 NT$3,386.87B(+39.3% YoY). 예측이 아니라 확정 공시 실적이며, 같은 날 MediaTek 8월 매출도 +44.08% YoY로 확인되어 파운드리·팹리스 양쪽에서 AI ASIC 수요가 동시 확인된다.

[신호 3] AI 인프라 수요는 확산, 수익성은 훼손 — Oracle OCI +121%/마진 61%로 축소
- Event ID: EVT-20260910-ORACLE-OCI-REV
- Evidence: B (broad_news, Bloomberg, 회사 발표 기반)
- Source URL: https://www.bloomberg.com/news/articles/2026-09-10/oracle-posts-cloud-sales-that-top-estimates-on-surging-ai-demand
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=yes · revenue=yes · regulatory=no
- 왜 강한가: 클라우드 인프라 매출 $7.4B(+121%, 컨센서스 약 $7.19B 상회)인데 총마진은 66.3%→61%로 축소, AI 빌드아웃 관련 부채 증가 동반. "수요는 강하지만 현금을 태워 산다"는 구조가 2군 클라우드에서 처음 숫자로 드러났고, 이는 GPU·HBM·전력 발주 사이클의 지속성 질문으로 직결된다.

[신호 4] 에이전트 '하네스' 계층이 관리형 상품으로 편입 — OpenAI Agents API 베타 + Cursor Projects 동시 충돌
- Event ID: EVT-20260910-OAI-AGENTS-API (연관: EVT-20260910-CURSOR-PROJECTS, EVT-20260910-GITHUB-COPILOT-WEEKLY-0907)
- Evidence: A (official, openai.com) / 연관 A (official, cursor.com) · A (official, github.blog)
- Source URL: https://openai.com/index/introducing-the-agents-api/ · https://cursor.com/changelog/projects
- 상태(Agents API): announcement=yes · availability=yes · code=yes(오픈소스 Codex 코드베이스 기반) · independent_reproduction=unknown · production=yes(업체 제공 고객 인용) · revenue=no · regulatory=no
- 왜 강한가: 세션 오케스트레이션·컨텍스트 압축·복구·샌드박스가 개별 빌더 영역에서 관리형 API로 이동했다. 같은 날 Cursor Projects(코디네이터가 수천 서브에이전트 위임)와 GitHub Copilot HydraFusion 멀티모델 라우팅이 겹치면서, 락인 축이 '모델'에서 '오케스트레이션·샌드박스·세션' 계층으로 재배치되고 있다.

[신호 5] 능력 격차가 '훈련'이 아니라 '추출'로 닫히고 있다는 벤더 자체 측정 — Anthropic 9월 위협 인텔리전스
- Event ID: EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT (canonical; 구 EVT-20260910-ANTHROPIC-DISTILL 통합)
- Evidence: A (official, Anthropic) — 증류 섹션 보도는 B (broad_news, CNBC)
- Source URL: https://www.anthropic.com/threat-intelligence-report-september-2026 · https://www.cnbc.com/2026/09/11/chinese-ai-labs-moonshot-deepseek-alibaba-anthropic.html
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=yes · revenue=no · regulatory=no
- 왜 강한가: 동일 문서에서 (a) 바이오 오용 가능성 사례 5건·재래식 무기 소프트웨어 지원 6건 차단/차단 해제 주장, (b) Alibaba 151M+ 교환·Moonshot 300k 릴레이·DeepSeek 14일 12M+ 증류 시도 주장이 함께 나왔다. 수치 전부가 경쟁사 행위에 대한 벤더 자체 측정이고 어떤 랩도 확인하지 않았으므로, '사실'이 아니라 'Anthropic의 측정치'로만 다뤄야 한다.

## 3 영역별 AI 브리프

### Frontier Models

[EVT-20260910-DEEPSEEK-V41FLASH] DeepSeek, DeepSeek-V4.1-Flash 공개 — 552B MoE·MIT 오픈웨이트·네이티브 멀티모달, V4-Flash 대체 및 V4-Pro 단계적 폐기
- Evidence: A (official) / 통합 별칭 EVT-20260910-DS-V41-FLASH-OPENWEIGHTS (A, repo — 본 항목과 동일 이벤트, 중복 계상 안 함)
- Source URL: https://www.deepseek.com/en/news/deepseek-v4-1-flash/
- 상태: announcement=yes · availability=yes · code=yes(웨이트+기술 리포트+추론/인코딩 코드, MIT) · independent_reproduction=unknown · production=yes · revenue=unknown · regulatory=unknown
- 요약: 2026-09-10 공식 발표. Causal Encoder-Decoder 구조, 프리필 8B/디코드 16B 활성화, 45T 토큰 멀티모달 사전학습, 1M 컨텍스트, FP4 KV 캐싱 + CSA2로 토큰당 전역 KV 약 890바이트. API 모델명 'deepseek-flash'로 즉시 제공, 신규 요금 04:00 UTC 2026-09-10 발효, 오프피크 50%. V4-Flash·V4-Flash-Vision-Exp 은퇴, 2026-09-14 04:00 UTC부터 deepseek-v4-pro 요청 전부 V4.1-Flash 요금으로 라우팅.
- Korea link: 국내 개발팀·소규모 팀의 저비용 백엔드로 광범위하게 쓰이는 경로이며, 09-14 재라우팅은 v4-pro 고정 사용자에게 마이그레이션 데드라인이다. KV 890바이트/토큰은 HBM·SSD 예산이 구속 조건인 국내 온프레미스·소버린 배포에 직접 변수다.

[EVT-20260910-OPENAI-GPTLIVE1-API] OpenAI, 풀듀플렉스 음성모델 GPT-Live-1 API GA — Full Duplex Bench +30pp, GPT-6 Astra 조합 시 Tau3 1위 주장
- Evidence: A (official)
- Source URL: https://openai.com/index/introducing-gpt-live-1-in-the-api/
- 상태: announcement=yes · availability=yes · code=unknown · independent_reproduction=unknown · production=yes · revenue=unknown · regulatory=unknown
- 요약: ChatGPT에 먼저 적용된 풀듀플렉스 음성모델을 API로 개방. STT-LLM-TTS 체인 대신 단일 추론-오디오 모델로 인터럽트 처리, 심층 추론·툴 호출은 백엔드 텍스트 모델(GPT-6 Astra 또는 서드파티)에 위임하는 분리 아키텍처를 명시적으로 판다. 전화망 지원, ASR 트랜스크립트+키워드 바이어싱, 시스템 프롬프트로 톤·속도 제어.
- Korea link: 국내 보이스봇·컨택센터 자동화 및 통신사(KT·네이버·LG) 경쟁 영역과 직접 맞닿는다. 한국어 품질은 발표문에 언급이 없어 도입 전 자체 검증 필요.

[중복 제거 안내] EVT-20260910-ANTHROPIC-DISTILL(구 Frontier Models 연구자 산출, B/broad_news)은 EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT와 동일 문서·동일 발행일의 상이한 섹션이므로 단일 canonical ID로 통합했다. 해당 이벤트의 전문(증류 수치 포함)은 Safety/Evaluation/Security 항목을 참조.

### AI Research

[EVT-20260910-ANTHROPIC-FRT-KILLCHAIN-EVALS] Anthropic Frontier Red Team, 정보 표적화·재래식 무기 개발 역량 평가 공개
- Evidence: A (official)
- Source URL: https://www.anthropic.com/research/intelligence-targeting-conventional-weapons-capabilities
- 상태: announcement=yes · availability=unknown · code=no · independent_reproduction=no · production=no · revenue=no · regulatory=unknown
- 요약: 계정 상관·인물 분류(F1, 합성 SNS 200과제·3난이도), 정지 사진 지오로케이션(YFCC100M 6,000장 + 컷오프 이후 홀드아웃), 텍스트 지오로케이션, 재래식 무기 공학 과제를 측정. Mythos Preview 중위 오차 37.0km(1km 이내 23.7%), Mythos 5 47.2km, Opus 5 181km, Sonnet 5 384km, 오픈웨이트 Kimi K3 385km. 인간 비교는 GeoGuessr 대회 데이터(챔피언 151km).
- Korea link: 국방 AI·위성/영상정보 수요와 직접 접하는 역량 축이며, 프런티어 접근이 제한된 국내 기관의 오픈웨이트 대체 경로·수출통제 논의에 파급된다.

[EVT-20260910-GOOGLE-RESEARCH-TOOLGRAD] Google Research, ToolGrad — 텍스트 '그래디언트'로 툴사용 데이터셋 생성 (ACL 2026 Findings)
- Evidence: A (official)
- Source URL: https://research.google/blog/toolgrad-efficient-tool-use-dataset-generation-with-textual-gradients/
- 상태: announcement=yes · availability=yes · code=yes(GitHub 공개) · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=no
- 요약: '답 먼저, 질문 나중' 패러다임으로 검증된 API 툴체인을 먼저 생성하고 질의를 한 단계로 주석해 약 99.8% 통과율을 보고. ToolGrad-500으로 파인튜닝한 Gemma-3 기반 ToolGrad-12B가 BFCL 83.1로 gemini-2.5-pro(83.2)·claude-4.5 Opus(82.8)·gpt-5(74.4)와 경쟁적이라고 주장(arXiv 2508.04086).
- Korea link: 사내 에이전트·커머스/금융 자동화가 API 호출 정확도에 의존하는 구조상, 동일 방식으로 자체 API 카탈로그용 합성 데이터를 만들어 소형 모델을 파인튜닝하는 경로가 국내에서도 현실적이다.

### Agents/Developer Tools

[EVT-20260910-OAI-AGENTS-API] OpenAI, Agents API 퍼블릭 베타 — Codex 하네스를 관리형 API로 개방
- Evidence: A (official)
- Source URL: https://openai.com/index/introducing-the-agents-api/
- 상태: announcement=yes · availability=yes · code=yes · independent_reproduction=unknown · production=yes · revenue=no · regulatory=no
- 요약: Codex/ChatGPT for Work를 구동하는 하네스·인프라를 API로 제공. 세션 오케스트레이션·컨텍스트 압축·복구를 OpenAI가 관리하고, MCP 툴 연결, 멀티 에이전트, 내구성 세션, 진행 스트리밍 지원. 실행 환경은 OpenAI 샌드박스 또는 Blaxel·Cloudflare·Daytona·DigitalOcean·E2B·Modal·Oracle·Runloop·Vercel 등 파트너 선택. 별도 API 요금 없이 토큰·툴 사용량만 과금. 공개 사례 수치는 전부 업체 제공 인용.

[EVT-20260910-CURSOR-PROJECTS] Cursor, 'Projects' 베타 — 코디네이터 에이전트가 수천 서브에이전트 지휘
- Evidence: A (official)
- Source URL: https://cursor.com/changelog/projects
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=no
- 요약: 수개월 컨텍스트를 유지하는 장기 작업 단위, 클라우드 자체 머신 실행(노트북 닫아도 지속), 전 머신 동기화 공유 컨텍스트 파일, Slack 감시·스케줄 실행·PR 추적 '서브스크립션'으로 트리거 기반 자율 동작. 벤치마크 수치 없음, 독립 재현 없음.

[EVT-20260910-GITHUB-COPILOT-WEEKLY-0907] GitHub, 9월 7일주 Copilot 릴리스 — HydraFusion 멀티모델 오케스트레이션 CLI 투입
- Evidence: A (official)
- Source URL: https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=unknown · revenue=no · regulatory=no
- 요약: Copilot CLI /experimental에 HydraFusion 투입 — Single/Cascade/Critique 세 실행 패턴으로 모델 라우팅. 같은 릴리스에 Jira 통합, VS Code 1.137 반복 에이전트 작업 스케줄링, 보이스 모드(experimental), JetBrains 엔터프라이즈 관리 샌드박스 포함. 평가는 GitHub 자체 'controlled offline evaluations'이며 태스크·하네스·비용 수치 미공개.

### Open Source/Repos

[EVT-20260910-DS-DEEPSELECT-V1] DeepSeek, DSA용 TopK 커널 라이브러리 DeepSelect v1.0.0 공개(MIT)
- Evidence: A (repo)
- Source URL: https://github.com/deepseek-ai/DeepSelect
- 상태: announcement=yes · availability=yes · code=yes · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=no
- 요약: DeepSeek Sparse Attention 및 샘플러용 TopK 커널. 리포지토리 News와 초기 릴리스 커밋이 2026-09-10으로 확인된다. 벤치마크는 레포 내 tests/test.py --perf-only, 베이스라인 PyTorch torch.topk, 지표는 실효 메모리 대역폭 비율, torch.topk 대비 2~20x 향상 주장. topk ≤ 4096만 지원, NaN 체크 기본 on.

[EVT-20260910-DS-HARNESS-015RC2] DeepSeek Harness v0.1.5-rc.2 — V4.1-Flash 어댑터·기본 모델 전환
- Evidence: A (repo)
- Source URL: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2
- 상태: announcement=yes · availability=yes · code=yes · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=no
- 요약: rc.1에서 DeepSeek-V41-Flash(deepseek-flash) 어댑터 추가와 신규 세션 기본 모델 전환, 세션 데이터 포맷 V3 전환·SQLite 세션 백엔드 제거 등 호환성 파괴 변경 명시. rc.2는 피드백·파일 카드 UI 개선 중심. 개발자 프리뷰 단계.
- [중복 제거 안내] 구 EVT-20260910-DS-V41-FLASH-OPENWEIGHTS(웨이트·코드 공개)는 EVT-20260910-DEEPSEEK-V41FLASH와 동일 이벤트 → Frontier Models canonical 항목으로 통합.

### Chips/Compute/Infrastructure

[EVT-20260910-TSMC-AUG-REV] TSMC 8월 매출 NT$514.81B — +53.3% YoY, 월간 사상 최초 NT$500B 돌파
- Evidence: A (official) / 교차 보도 B (CNBC, 동일 사건)
- Source URL: https://pr.tsmc.com/english/news/3340
- 상태: announcement=yes · availability=unknown · code=no · independent_reproduction=no · production=yes · revenue=yes · regulatory=no
- 요약: 2026-09-10 IR 공시. 8월 연결 매출 약 NT$514.81B(+10.1% MoM, +53.3% YoY), 1~8월 누계 NT$3,386.87B(+39.3% YoY). 확정 실적이며 특정 고객·노드 귀속은 공시되지 않음.
- Korea link: 삼성 파운드리 직접 경쟁이자 국내 HBM·패키징 수요 기준선. AI 가속기 출하 강세는 SK하이닉스·삼성전자에 우호적, 파운드리 점유율 측면에서는 삼성에 부담.

[EVT-20260910-MEDIATEK-AUG-REV] MediaTek 8월 매출 +44% YoY — AI 칩 모멘텀
- Evidence: B (broad_news, Bloomberg; DIGITIMES 교차로 NT$64.183B)
- Source URL: https://www.bloomberg.com/news/articles/2026-09-10/nvidia-backed-mediatek-s-sales-soar-44-with-ai-chip-momentum
- 상태: announcement=yes · availability=yes · code=unknown · independent_reproduction=no · production=yes · revenue=yes · regulatory=no
- 요약: 8월 월매출 +44.08% YoY(+32.41% MoM, NT$64.183B). AI 칩(구글 협업 포함) 기여가 배경으로 보도되나 제품·고객별 분해는 미공시. 차기 공식 일정 2026-10-08 17:00 GMT+8.

[EVT-20260910-DMATRIX-NVLINK-FUSION] d-Matrix, NVIDIA NVLink Fusion 채택 — 랙스케일 Raptor XPU
- Evidence: A (official, d-Matrix/NVIDIA 뉴스룸) / 교차 B (Reuters, 동일 사건)
- Source URL: https://www.d-matrix.ai/announcements/d-matrix-rackscale-nvidia/
- 상태: announcement=yes · availability=no · code=no · independent_reproduction=no · production=no · revenue=no · regulatory=no
- 요약: 차세대 Raptor 추론 XPU를 NVIDIA MGX 랙 레퍼런스에 NVLink Fusion으로 편입(Vera CPU, NVLink 스위치, BlueField-4 DPU, ConnectX-9, Spectrum-X, Astera Labs 연결 파트너). 출하 시점·물량·가격·고객·벤치마크 전무 — 생태계/디자인인 발표이지 가용·양산이 아니다.
- Korea link: MGX·네트워킹 표준 채택 여부가 국내 서버·냉각·전력 인프라 발주에 직접 영향. 국내 사업자 도입 계획은 미확인.

[EVT-20260910-NVDA-GROQ-DOJ-PROBE] 미국 법무부, Nvidia–Groq 라이선스 거래 반독점 구조 조사
- Evidence: B (broad_news, NYT 최초 보도; Reuters·Bloomberg 창 내 후속)
- Source URL: https://www.nytimes.com/2026/09/09/business/nvidia-groq-antitrust.html
- 상태: announcement=no · availability=unknown · code=no · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=yes
- 요약: 약 $17B~$20B 규모로 보도된 Groq 라이선스 거래(창업자 Jonathan Ross 이동 포함)가 반독점 합병심사를 우회하려는 구조인지 조사. DOJ 문서·서브포에나·회사 확인은 공개되지 않았고, 익명 소스 기반 보도 단계로 책임 판단은 없다.
- Korea link: Groq 추론 가속기 양산에 삼성 파운드리가 참여한 것으로 보도돼 온 만큼 거래 구조 불확실성은 수주 가시성에 간접 영향(직접 인과는 미확인).

[EVT-20260910-ORACLE-OCI-REV] Oracle 클라우드 인프라 매출 2배 이상 $7.4B — 마진은 61%로 축소
- Evidence: B (broad_news, Bloomberg; 회사 실적 발표 기반)
- Source URL: https://www.bloomberg.com/news/articles/2026-09-10/oracle-posts-cloud-sales-that-top-estimates-on-surging-ai-demand
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=yes · revenue=yes · regulatory=no
- 요약: OCI 매출 +121% $7.4B(컨센서스 약 $7.19B 상회), 총마진 66.3%→61%. AI 빌드아웃 관련 부채 증가 병기. Bloomberg 기사 기준 2026-09-11 05:15 KST로 창 종료 45분 전 포함(CNBC 후속 21:42 UTC는 창 밖).

### Enterprise/Applications

[EVT-20260910-OPENAI-CHATGPT-FINSERV] OpenAI, ChatGPT for Financial Services 출시 — Morgan Stanley·Evercore 디자인 파트너
- Evidence: A (official)
- Source URL: https://openai.com/index/introducing-chatgpt-financial-services/
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=no
- 요약: ChatGPT Work의 금융 특화판, GPT-6 Astra 기반. Daloopa·PitchBook·LSEG News·Crunchbase·Fiscal.ai 인덱싱 데이터, 50+ 커넥터, S&P Capital IQ·LSEG·MSCI·Factiva·Moody's 자격(entitlement) 연동, Excel/Word/PowerPoint 템플릿, 출처 인용, SAML SSO·SCIM·RBAC·정보장벽. 유료 도입 금융기관은 미공개(디자인 파트너는 프로덕션 실적이 아님).

[EVT-20260910-OPENAI-DATA-AGENT] OpenAI, ChatGPT Work에 Data agent 투입 — 엔터프라이즈 데이터 분석·대시보드
- Evidence: A (official)
- Source URL: https://openai.com/index/put-data-to-work/
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=unknown · production=yes · revenue=no · regulatory=no
- 요약: Redshift·Databricks·Snowflake·BigQuery·ClickHouse·MongoDB·Redis·Datadog 및 Google Drive/SharePoint 연결, 시맨틱 레이어(Databricks Genie Ontology, dbt, GitHub, Snowflake Horizon)와 BI 도구(Tableau, Power BI, Sigma, ThoughtSpot, Omni, Oracle BI) 읽기, 대화형 공유 대시보드 생성. 권한 집행·Slack/이메일 푸시. 프로덕션 근거는 OpenAI 제공 고객 인용(NTT Data, Thermo Fisher, ServiceTitan, Zipline, CookUnity, Turing, Doeren Mayhew, Empower).

[EVT-20260910-AMAZON-QUICK-DESKTOP-GA] Amazon Quick 데스크톱 앱 GA — 모바일 활동 피드 추가
- Evidence: A (official)
- Source URL: https://www.aboutamazon.com/news/aws/amazon-quick-desktop-ai-assistant
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=unknown · production=yes · revenue=no · regulatory=no
- 요약: macOS·Windows GA, iOS/Android 활동 피드, 채팅·폴더 동기화. 로컬 파일·연결 앱 읽기, 개인 지식그래프, 브라우저 워크플로 자동화, Kiro CLI·Claude Code 연결, 노트북을 닫아도 백그라운드 에이전트 실행. Microsoft 365 확장 프리뷰, Google Workspace·Zoom·Airtable·Dropbox·Teams 네이티브 통합. 프리뷰 사용 기업 3M·Mondelēz·LabCorp·Southwest Airlines·PGA Tour.
- 주의: 기사 내부 표기('updated September 9, 2026')와 09-10 게재일이 충돌 → AWS What's New로 정확 GA 일자 재확인 필요.

[EVT-20260910-SALESFORCE-ENTERPRISE-AI-HARNESS] Salesforce, Enterprise AI Harness·AI Control Plane 아키텍처 발표
- Evidence: A (official)
- Source URL: https://www.salesforce.com/news/stories/enterprise-ai-harness/
- 상태: announcement=yes · availability=no · code=no · independent_reproduction=unknown · production=unknown · revenue=no · regulatory=no
- 요약: 6대 역량(Trusted Context·Agency·Action·Governance·Security·Models) + 에이전트 발견·등록·거버넌스·관측·비용관리용 AI Control Plane. MCP·API·스킬·플러그인으로 헤드리스 개방. 가용성은 명시적으로 미래형 — 신규 역량·통합 경험은 FY28 초부터 롤아웃 예정, 패키징·가격·업그레이드 경로는 GA 임박 시 공지. Dreamforce 전 포지셔닝 성격.

[EVT-20260910-AMAZON-OPENAI-CHATGPT-ADS] Amazon, 광고주에 ChatGPT 광고 구매 개방(미국 파일럿)
- Evidence: B (broad_news, CNBC — Amazon 블로그 인용, 원문 URL은 이번 실행에서 확보 실패)
- Source URL: https://www.cnbc.com/2026/09/10/amazon-chatgptads-open-ai.html
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=unknown · production=no · revenue=no · regulatory=unknown
- 요약: Amazon 광고주 일부가 ChatGPT 내 광고를 구매하는 파일럿(Delta Vacations 참여). 캠페인은 Amazon이 설정·관리, 전달 결정은 OpenAI 광고 시스템, 광고는 응답 하단 텍스트/이미지. OpenAI 광고 사업은 연환산 $1B 런레이트 도달 보도(이는 본 파일럿 매출이 아니라 전체 광고 사업의 이전 기간 수치).

### Funding/M&A/Business

[EVT-20260910-POSITRON-SERIESC] Positron AI, $875M Series C · $5B 밸류에이션 — 메모리 우선 추론 실리콘
- Evidence: A (official) / 동일 이벤트 Reuters·WSJ 보도
- Source URL: https://www.positron.ai/press
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=yes · revenue=unknown · regulatory=unknown
- 요약: $375M Series C($3.5B pre-money, NEA·Andra·Atreides·Valor·SemiAnalysis Capital 공동 리드) + 최대 $500M Series C-1(NEA·Jim Clark 리드). DFJ Growth·QIA·Cisco Investments·Hudson River Trading·한국 Naver Ventures 등 참여, Dylan Patel 등 이사 합류. Asimov(TSMC N3P, 2026년 말 테이프아웃·2027 하반기 양산)·2MW+ 엔지니어링 DC·Titan 램프 자금. OCI에 1세대 Atlas 랙 50+ 배치, 프로덕션 고객 Parasail·Jump Trading·i3d.net. 매출·백로그 미공개.
- Korea link: Naver Ventures가 전략 투자자로 명시된 드문 사례. LPDDR5X 대 HBM 아키텍처 논쟁은 삼성전자·SK하이닉스 LPDDR5X 라인에 수요 변수, HBM4E 물량에는 반증 시나리오.

[EVT-20260910-CLAY-SERIESD] Clay, $115M Series D · $7.1B 밸류에이션 — AI GTM 엔진
- Evidence: A (official) / 동일 이벤트 SiliconANGLE·NYT 보도
- Source URL: https://www.clay.com/blog/series-d
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=unknown · production=yes · revenue=yes · regulatory=unknown
- 요약: 2025년 Series C(~$3.1B) 대비 큰 폭 재평가, 2025년 매출 4배 성장 주장, 고객 17,000+ 및 Forbes AI50의 80%·Anthropic·Google·OpenAI·Stripe·ElevenLabs·Visa·Siemens·UPS 포함 주장. 매출·고객 수는 회사 자체 보고·미감사이며 리드 투자자는 미공개.

[EVT-20260910-KPMG-REALITYDEFENDER] KPMG LLP, 딥페이크 탐지 업체 Reality Defender에 소수 지분 투자
- Evidence: A (official)
- Source URL: https://kpmg.com/us/en/media/news/kpmg-llp-takes-minority-stake-in-deepfake-detection-leader-reality-defender.html
- 상태: announcement=yes · availability=unknown · code=no · independent_reproduction=unknown · production=unknown · revenue=unknown · regulatory=unknown
- 요약: 딥페이크·임퍼소네이션 탐지를 사이버·부정예방 실무에 편입. 금액·지분율·구조·밸류에이션 미공개, 리셀/OEM/공동개발 여부·서비스 일정 미공개.

### Safety/Evaluation/Security

[EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT] Anthropic 9월 위협 인텔리전스 보고서 — 바이오 오용 차단 사례 + 이중용도/사이버 악용 공개 확대 (canonical, 구 EVT-20260910-ANTHROPIC-DISTILL 통합)
- Evidence: A (official) — 증류 섹션은 B (broad_news, CNBC)
- Source URL: https://www.anthropic.com/threat-intelligence-report-september-2026 · https://www.cnbc.com/2026/09/11/chinese-ai-labs-moonshot-deepseek-alibaba-anthropic.html
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=yes · revenue=no · regulatory=no
- 요약: 2025-12~2026-08 감지·차단 활동 공개. (1) 바이오 무기 개발 지원 가능 사례 5건 — 치쿤구니야 기능획득 연구비 초안, 조류독감 포유류 적응 계획, Opus 5가 약 1시간에 작성한 오르토폭스바이러스 면역회피 연구비 신청, 독액 펩타이드 아틀라스, 계산 재설계 독소. (2) 재래식 무기 소프트웨어 지원 6건(총기·미사일·무장 드론·탄약 및 표적/제어). (3) 사이버·영향공작(Russia 연계 Midnight Blizzard 정황, ShinyHunters, 국가 선전기관, 감시 도구). (4) 증류 섹션 — Alibaba 계열 151M+ 교환(5~7월, 일 최대 약 300만, 3,500+ 부정 계정), Moonshot 10일 창 300k Kimi 요청을 Claude Opus로 릴레이(5,380 계정, 싱가포르·일본 중심, 5~7월 23M+), DeepSeek 2026년 7월 14일간 12M+ 시도. 기관·국가·행위자는 비공개. Anthropic은 Opus 4/Sonnet 4.5 수준의 생물학적 저위험 보증을 현행 모델에는 "할 수 없다"고 명시.
- Korea link: 한국 기관·기업이 지명되지 않음. 간접 함의는 (a) 이중용도 생물 연구에 상용 LLM을 쓰는 국내 연구소, (b) AI 기본법 체계에 생물 오용 강제 보고 채널 부재, (c) 릴레이/리셀 시장 리스크 벡터 공유.

[EVT-20260910-UK-MHRA-AI-HEALTHCARE-RULES] 영국 MHRA, 의료 AI 규제 44개 권고 — 승인 취소·개발자 제재 포함
- Evidence: B (broad_news, BBC — MHRA 위원회 결과 보도)
- Source URL: https://www.bbc.com/news/articles/c3wjn3pl63xo
- 상태: announcement=yes · availability=yes · code=no · independent_reproduction=no · production=yes · revenue=no · regulatory=no(권고 단계이며 발효된 구속력 없음)
- 요약: 환자·임상의 12,000+ 의견 반영. 승인 후 지속 모니터링, 오작동·성능저하 시 규제 승인 철회, AI 개입 사실을 환자가 알 권리, 기준 미달 개발자 제재, AI 'L plate' 감독 하 시범 도입. 배경: LLM 기반 AI 서기가 영국 GP 약 40%에서 사용, 에든버러대 연구는 AI 처리 사실을 알면 환자가 정보를 숨길 수 있다고 지적.
- Korea link: 식약처의 AI/Software as Medical Device 심사 경로가 통상 벤치마크하는 유형. 의료 AI 라이프사이클 규제·책임 소재 논의의 선행 사례.

### Policy/Geopolitics

[EVT-20260910-GSA-OPENAI-ONEGOV] 미국 GSA, OpenAI와 OneGov 'AI 2.0' 정부 조달 계약 — 라이선스 무료·사용량 50% 할인
- Evidence: A (official, gsa.gov; OpenAI 측 동일 발표)
- Source URL: https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-expands-onegov-ai-offerings-with-discounted-openais-chatgpt-09102026
- 상태: announcement=yes · availability=no(2026-10-01 발효 예정) · code=no · independent_reproduction=no · production=unknown · revenue=no · regulatory=no
- 요약: 27개월(2026-10-01~2028-12-31), ChatGPT 라이선스 $0(통상 $15/월), 토큰 사용량 50% 할인, 최소 구매 약정 없음. 연방 3부·주·지방·부족 정부 대상, FedRAMP 인증 환경 포함. 검증된 정부기관에 사이버방어용 'Daybreak Blue' 50% 할인, 'Daybreak Red'는 정상가. GSA는 OneGov 도입 후 약 $16.8억 절감(약 $14억이 AI 계약, 약 350만 연방 직원 접근) 주장. 다른 벤더 OneGov 계약은 2026-09-30 만료 예정.

[EVT-20260910-CA-CHILD-SAFETY-AI-LAWS] 캘리포니아 뉴섬, AI 챗봇·소셜미디어 아동보호 법안 패키지 서명(Adam's Law SB 1119 포함)
- Evidence: A (official, gov.ca.gov) / 교차 broad_news
- Source URL: https://www.gov.ca.gov/2026/09/10/what-they-are-saying-national-leaders-and-lawmakers-celebrate-governor-newsoms-signature-on-landmark-child-safety-chatbot-and-social-media-laws/
- 상태: announcement=yes · availability=no(대부분 2027년 발효) · code=no · independent_reproduction=no · production=no · revenue=no · regulatory=yes
- 요약: SB 1119(위기 대응·학부모 통제·독립 감사), SB 867(AI 완구 모라토리엄), AB 1709(16세 미만 중독적 설계 제한), AB 2 등 서명. 전날(09-09, 창 이전) SB 813·AB 1405에도 서명했고 OpenAI는 09-09 정책문에서 SB 813·AB 1405·SB 1119·AB 1864 지지를 표명.
- Korea link: 국내 챗봇 서비스(카카오·네이버·SKT·KT)와 국내 진출 외국 모델의 미성년자 대상 설계 기준에 선행 사례.

### Korea Exposure

[EVT-20260910-KR-AI-HEALTH-ASEAN] 보건복지부 차관, ASEAN 보건장관회의에서 AI 기반 보건협력 논의 (정부 발표 인덱스 기준)
- Evidence: B (government, korea.net 보도자료 인덱스 — 본문 미확보)
- Source URL: https://www.korea.net/Government/Briefing-Room/Press-Releases
- 상태: announcement=yes · availability=no · code=no · independent_reproduction=no · production=no · revenue=no · regulatory=no
- 요약: 2026-09-10 자 복지부 보도자료 제목으로 확인. AI 기반 보건협력이 ASEAN 의제에 올랐다는 일정·발표 수준의 정보이며, 시스템 배포·계약·지불이 있었다는 근거는 아니다(클라이언트 렌더링으로 본문 미확보, 상대국·예산 미검증).
- 처리: 물질성이 낮은 파이프라인 신호로만 포함한다. 같은 창의 C등급 항목 EVT-20260910-KR-AI-DIPLOMACY(Nikkei Asia 오피니언, 한국 AI 외교에 일본 필요론)는 코어 신호에서 제외하고 Section 6·8 감사 항목으로 이동했다.

## 4 기술→산업 전달경로

경로 1 — KV 캐시·메모리 효율 → 서빙 원가 → 하드웨어 예산 → 국내 온프레미스
EVT-20260910-DEEPSEEK-V41FLASH(토큰당 전역 KV 890바이트, 전 세대 약 1/4) + EVT-20260910-DS-DEEPSELECT-V1(TopK 커널 2~20x) → 동일 GPU로 처리 가능한 컨텍스트·동시 요청 증가 → 에이전트 워크로드의 단가 하락 → HBM/SSD 예산이 구속 조건인 자체 서빙 조직의 선택지 확대 → 국내 소버린·온프레미스 사업자(네이버클라우드·KT클라우드·삼성SDS 계열)와 양자화/서빙 포크 생태계의 배포 비용 구조 변화. 검증 필요: vLLM/SGLang의 DeepSelect 채택 여부가 실제 상용화 시점을 결정한다(현재 unknown).

경로 2 — 풀듀플렉스 음성 + 백엔드 추론 분리 → 컨택센터 자동화 → 통신사·SI 경쟁
EVT-20260910-OPENAI-GPTLIVE1-API → STT-LLM-TTS 체인 통합 비용 제거 → 음성 에이전트의 지능이 백엔드 모델 선택·과금의 함수가 됨 → 국내 보이스봇·컨택센터 SI 및 통신 3사 에이전트 제품의 가격·품질 기준 재설정. 한국어 품질은 발표문에 근거가 없어 자체 검증이 게이트다.

경로 3 — 에이전트 하네스 상품화 → 샌드박스 유통 채널 → 자체 구축 조직의 투자 회수 문제
EVT-20260910-OAI-AGENTS-API + EVT-20260910-CURSOR-PROJECTS + EVT-20260910-GITHUB-COPILOT-WEEKLY-0907 → 하네스·세션·샌드박스가 3개 사업자에서 동시에 상품화 → E2B·Modal·Daytona·Cloudflare·Vercel 등 샌드박스 인프라에 유통 채널 발생, 자체 에이전트 플랫폼을 만든 조직에는 대체 압력 → 국내 개발팀의 기존 하네스 투자 회수와 데이터 레지던시 요건상 '자체 인프라 샌드박스' 옵션의 실질 가치가 쟁점.

경로 4 — 모델 원가 하락 → 기업용 버티컬 제품 → 데이터 라이선싱 락인
EVT-20260910-OPENAI-CHATGPT-FINSERV + EVT-20260910-OPENAI-DATA-AGENT → 경쟁 우위가 모델이 아니라 '프리미엄 데이터 라이선스+자격 연동+감사 가능한 인용'으로 이동 → LSEG·S&P·PitchBook·Moody's 등 데이터 벤더가 모델 벤더의 유통 파트너로 편입 → 국내 증권·은행이 자체 구축으로 복제하기 어려운 격차 발생, 국내 데이터 벤더의 현지화 파트너 기회.

경로 5 — 팹 매출 → HBM·패키징 발주 → 국내 밸류체인
EVT-20260910-TSMC-AUG-REV(+53.3% YoY, 사상 최초 NT$500B 돌파) + EVT-20260910-MEDIATEK-AUG-REV(+44.08% YoY) → AI 가속기·커스텀 실리콘(구글 TPU 계열) 출하 강세 → HBM·CoWoS급 패키징 수요 우호 → SK하이닉스·삼성전자 수혜, 삼성 파운드리 점유율에는 부담. 반대 방향 변수: EVT-20260910-POSITRON-SERIESC의 LPDDR5X 대 HBM 우회 아키텍처가 확산되면 HBM4E 물량 가정이 흔들린다.

경로 6 — 랙 표준화 → 전력·냉각 인프라 발주
EVT-20260910-DMATRIX-NVLINK-FUSION → NVLink Fusion이 자체 XPU를 NVIDIA MGX 랙으로 흡수하는 표준 경로로 굳음 → 랙 단위 표준화와 액체냉각·전력 인프라 수요가 한 방향으로 묶임 → 국내 서버 ODM·냉각·전력 발주 및 데이터센터 규격 채택 변수(국내 도입 공지는 미확인).

경로 7 — 클라우드 매출 성장 ↔ 마진 훼손 → 발주 지속성 질문
EVT-20260910-ORACLE-OCI-REV(매출 +121%, 마진 61%로 축소, 부채 증가) → AI 인프라 수요가 하이퍼스케일러를 넘어 2군 클라우드로 확산되는 증거이자, 그 성장이 자본 소모로 사들여진다는 증거 → GPU·전력·냉각 발주 사이클의 지속성과 수익성 사이 괴리를 추적하는 기준점.

경로 8 — 능력 추출(증류) → 출처·개인정보 리스크 → 조달·컴플라이언스
EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT(증류 섹션) → 중국계 오픈웨이트의 능력 일부가 미국 프런티어 모델 파생일 수 있다는 주장 → Qwen/Kimi/DeepSeek 파생 모델을 도입·리셀하는 기업의 provenance·개인정보 리스크 비용 발생(Anthropic 지목 릴레이 허브는 싱가포르·일본으로 한국 트래픽의 경유지) → 규제·감사 항목으로 이동. 모든 수치는 Anthropic 자체 측정이며 어떤 랩도 확인하지 않았다.

경로 9 — 정부 조달 표준 → 공급망 재편
EVT-20260910-GSA-OPENAI-ONEGOV(라이선스 무료 + 사용량 50% 할인 + FedRAMP) → 미국 연방 조달이 '저가 파일럿'에서 '사용량 기반 상용 할인'으로 이동 → 2026-09-30 타 벤더 OneGov 만료가 공급망 재편의 분기점 → 한국의 조달·공공 AI 기준 수립에도 참조점.

경로 10 — 아동보호·의료 AI 규제 → 제품 설계 비용 → 국내 선행 사례
EVT-20260910-CA-CHILD-SAFETY-AI-LAWS + EVT-20260910-UK-MHRA-AI-HEALTHCARE-RULES → '승인 1회 게이트'가 아니라 지속 모니터링·승인 철회·개발자 제재·독립 감사로 이동 → 제품 설계·감사 수용·재검증 주기가 원가 항목이 됨 → 국내 방통심의위·과기정통부·식약처 논의의 참조 사례.

## 5 AI Stack Signal Map

- 모델 계층: EVT-20260910-DEEPSEEK-V41FLASH(552B MoE·MIT·1M 컨텍스트), EVT-20260910-OPENAI-GPTLIVE1-API(음성 프런트엔드 + 백엔드 추론 분리). 신호 방향: 벤더가 자기 플래그십을 소형·저가 티어로 대체.
- 훈련/연구 계층: EVT-20260910-GOOGLE-RESEARCH-TOOLGRAD(합성 툴사용 데이터, 소형 학생모델이 교사 모델 근접), EVT-20260910-ANTHROPIC-FRT-KILLCHAIN-EVALS(군사·정보 역량 평가). 신호 방향: 데이터 생성 순서 역전과 역량 측정의 확장.
- 하네스/오케스트레이션 계층: EVT-20260910-OAI-AGENTS-API, EVT-20260910-CURSOR-PROJECTS, EVT-20260910-GITHUB-COPILOT-WEEKLY-0907, EVT-20260910-DS-HARNESS-015RC2, EVT-20260910-SALESFORCE-ENTERPRISE-AI-HARNESS. 신호 방향: 락인이 모델에서 세션·샌드박스·거버넌스로 이동.
- 서빙/커널 계층: EVT-20260910-DS-DEEPSELECT-V1, EVT-20260910-DEEPSEEK-V41FLASH(KV 890B/token). 신호 방향: 메모리 대역폭·KV 캐시가 병목으로 명시화.
- 실리콘/파운드리 계층: EVT-20260910-TSMC-AUG-REV, EVT-20260910-MEDIATEK-AUG-REV, EVT-20260910-DMATRIX-NVLINK-FUSION, EVT-20260910-POSITRON-SERIESC, EVT-20260910-NVDA-GROQ-DOJ-PROBE. 신호 방향: 수요는 최고치, 구조는 랙 표준화·추론 특화·규제 심사로 재편.
- 클라우드/인프라·전력 계층: EVT-20260910-ORACLE-OCI-REV(매출 급증·마진 축소·부채 증가), EVT-20260910-DMATRIX-NVLINK-FUSION(랙·냉각·전력 표준). 신호 방향: 수익성 없는 성장의 지속가능성 질문.
- 데이터/엔터프라이즈 애플리케이션 계층: EVT-20260910-OPENAI-DATA-AGENT, EVT-20260910-OPENAI-CHATGPT-FINSERV, EVT-20260910-AMAZON-QUICK-DESKTOP-GA, EVT-20260910-AMAZON-OPENAI-CHATGPT-ADS. 신호 방향: 시맨틱 레이어·데이터 라이선스·광고 인벤토리가 새 수익면.
- 자본 계층: EVT-20260910-POSITRON-SERIESC, EVT-20260910-CLAY-SERIESD, EVT-20260910-KPMG-REALITYDEFENDER. 신호 방향: 추론 인프라 프리미엄 지속, 애플리케이션 레이어 멀티플 재평가, 전문서비스의 신뢰 인프라 매수.
- 안전/평가/보안 계층: EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT(바이오 오용 + 증류), EVT-20260910-ANTHROPIC-FRT-KILLCHAIN-EVALS. 신호 방향: 역량 평가에서 배포 단계 오용·추출·provenance로 논점 이동.
- 정책/지정학 계층: EVT-20260910-GSA-OPENAI-ONEGOV, EVT-20260910-CA-CHILD-SAFETY-AI-LAWS, EVT-20260910-UK-MHRA-AI-HEALTHCARE-RULES. 신호 방향: 연방 공백 속 주·규제기관 선행, 조달과 안보의 결합.
- 한국 노출 계층: EVT-20260910-KR-AI-HEALTH-ASEAN(파이프라인 신호), 그리고 감사 항목 EVT-20260910-KR-AI-DIPLOMACY(오피니언, C). 신호 방향: 이번 창에 한국 기업의 신규 발표는 확인되지 않았고, 노출은 Naver Ventures(Positron)·HBM/패키징 체인·정부 조달 참조점 등 간접 경로로만 존재.

## 6 반증·과장·재현성 감사

벤치마크 감사가 적용되는 이벤트 (task / baseline / metric / conditions / disclosure·contamination / independent replication)

1. EVT-20260910-DEEPSEEK-V41FLASH — Task: DeepSWE, Terminal-Bench 2.1, HLE(텍스트/툴 사용), 내부 에이전트 비교. Baseline: V4-Pro·V4-Flash. Metric: DeepSWE 74.2, Terminal-Bench 2.1 90.6/90.9, HLE 36.8(툴 63.9). Conditions: 벤더 보고, 552B MoE·프리필 8B/디코드 16B, 45T 토큰, 컨텍스트 1M, HF 카드에 HLE 툴 사용 하네스 미기재. 공개/오염: 하네스·조건 일부 미공개, 오염·데이터 중복 논의 없음, '복수 주체 테스트' 주장은 명명·링크 없음. 독립 재현: partial — HF 커뮤니티 리더보드 항목 존재하나 재현 보고는 없음. 판정: 비교 불가 수치(HLE-with-tools)는 인용 금지.

2. EVT-20260910-OPENAI-GPTLIVE1-API — Task: Full Duplex Bench(일시정지·턴테이킹·인터럽트·백채널), 항공/리테일/통신 Tau3급 과업, 은행 상담(banking_knowledge 97과제). Baseline: GPT-Realtime-2.1 및 기존 STT-LLM-TTS 체인. Metric: Full Duplex Bench +30pp, Tau3 1위 주장, Pass@1, 첫 응답 지연, 파트너 보고 인터럽트 약 80% 감소(Speak)·Yelp 개선. Conditions: 전부 OpenAI 실행, 헤드라인 수치는 Astra medium reasoning·툴 사용 평가는 Terra low를 백엔드로 사용 — 'GPT-Live-1 단독 성능'이 아니다. 공개/오염: 채점 루브릭·과제 수(은행 97개 제외)·샘플링 조건 미공개, 오염 논의 없음. 독립 재현: no(파트너 발언은 벤더가 배치한 후기). 판정: 백엔드 의존성을 명시해 인용해야 한다.

3. EVT-20260910-ANTHROPIC-FRT-KILLCHAIN-EVALS — Task: 합성 SNS 계정 상관·인물 분류 200과제(2 시나리오·3 난이도), 정지 사진 지오로케이션(YFCC100M 6,000장 + 컷오프 이후 홀드아웃), 텍스트 지오로케이션, 재래식 무기 공학 과제. Baseline: 인간 프록시(GeoGuessr 챔피언 151km·마스터 174km·골드 1,714km), Opus 5·Sonnet 5·Kimi K3. Metric: F1, 중위 오차(km)·1km 이내 비율 — Mythos Preview 37.0km/23.7%, Mythos 5 47.2km/23.1%, Opus 5 181km/18.0%, Sonnet 5 384km/9.9%, Kimi K3 385km/16.7%. Conditions: 벤더 자체 평가, 합성 데이터(인위적 문구), 사진은 역검색·메타데이터·툴 없는 정지 프레임이며 인간 비교군은 인터랙티브 스트리트뷰(~15-20초 라운드) — 비교 조건 비대칭, Anthropic 스스로 자체 이미지셋에 대한 인간 베이스라인이 없다고 명시. 공개/오염: 하네스·코드 미공개. 독립 재현: unknown. 판정: 벤더가 '제안적(suggestive)'이라고 표현한 수준으로만 인용.

4. EVT-20260910-GOOGLE-RESEARCH-TOOLGRAD — Task: 합성 툴사용 데이터 파인튜닝 후 함수호출 능력·데이터 생성 효율. Baseline: Query-first DFS(ToolBench), ToolACE, Hammer-2.1-7B, Gemma-3 1B/4B/12B, gemini-2.5-pro(83.2)·claude-4.5 Opus(82.8)·gpt-5(74.4). Metric: BFCL 점수, 생성 통과율·최적화 스텝 — ToolGrad-12B 83.1, 생성 통과율 99.8%. Conditions: Gemma-3를 16k+ ToolBench API 위에서 gemini-2.5-flash-lite로 합성한 ToolGrad-500(500샘플)으로 파인튜닝, 평가는 미학습 툴셋(OOD), ACL 2026 Findings(arXiv 2508.04086). 공개/오염: 벤더 저자 결과, 소규모 합성 학습셋, OOD 이득이 Gemini 교사 파이프라인에 기인할 수 있음(논문 스스로 12B 학생이 교사 초과 인정), BFCL 버전·채점 세부 미재기재. 독립 재현: unknown. 판정: 방향성 근거로만 사용, 단일 벤치 의존 금지.

5. EVT-20260910-OAI-AGENTS-API — Task: 고객별 자체 에이전트 워크플로(사례 검토, 멀티스텝 자동화, 로지스틱스 오케스트레이션)가 한 페이지에 혼재. Baseline: 각 고객의 기존 자체 구축(프롬프트 체인·커스텀 오케스트레이션·미분리 샌드박스). Metric: Ciridae 평가점수 0.71→0.85 및 지연 4배 감소, SafetyKit 케이스당 비용 60% 감소, Hypha 실패 응답 86% 감소, Dwelly 버스트 팬아웃. Conditions: 고객 자체 보고, 테스트 데이터셋·표본·측정 절차·하드웨어·모델 조건·통계 처리 전부 미공개. 공개/오염: 큐레이션된 고객 인용으로 자기선택 편향 가능, 수치 간 상호 비교 불가. 독립 재현: no. 판정: 제품 존재 증거로만 사용, 성능 근거로 사용 금지.

6. EVT-20260910-GITHUB-COPILOT-WEEKLY-0907 (HydraFusion) — Task: 세 실행 패턴(Single/Cascade/Critique) 모델 라우팅. Baseline: Opus 5. Metric: 품질 동등 이상 + 추정 워크플로 비용 절감(구체 수치 미공개). Conditions: 'controlled offline evaluations', 태스크 세트·표본·하네스 미공개, 원문 평가는 GitHub 09-04 블로그이고 09-10 체인지로그는 CLI /experimental 배포 공지. 공개/오염: 비용은 '추정치', 저장소 공개 코딩 벤치 점수 아님. 독립 재현: no. 판정: 재현 불가 — 라우팅 기능의 존재만 사실로 취급.

7. EVT-20260910-OPENAI-CHATGPT-FINSERV (OfficeQA Pro) — Task: 미국 재무부 블레틴의 복잡한 표·차트·각주 정보 탐색·분석. Baseline: GPT-5.6 Sol 60.2%. Metric: GPT-6 Astra 69.9%. Conditions: 제품 페이지에 실린 벤더 보고 수치이며 측정 대상은 GPT-6 Astra 모델이지 ChatGPT for Financial Services 제품 구성이 아니다. 공개/오염: 하네스·오염 통제·반복 실행 분산 미공개. 독립 재현: no. 판정: 제품 성능 주장으로 전용(轉用) 금지.

8. EVT-20260910-POSITRON-SERIESC — Task/Baseline/Metric: Asimov·Titan 대 NVIDIA Blackwell GB300 NVL72의 TCO 달러당 토큰·MW당 토큰·사용자당 tokens/sec, 약 24.8x 주장. Conditions: 사이클 정확 시뮬레이션 출력이며 GPU 베이스라인은 SemiAnalysis InferenceX, 2배 프리미엄 토큰 가격을 가정. 공개/오염: 실리콘 실측이 아니라 벤더 시뮬레이션. 독립 재현: unknown. 판정: '마케팅 물리'로 취급 — 투자 이벤트의 성능 근거로 인용 금지.

9. EVT-20260910-DS-DEEPSELECT-V1 — Task: TopK 커널 성능(Lightning Indexer bf16 topk=512, 샘플링 fp32 vocab≈129,280 topk=512). Baseline: PyTorch torch.topk 동일 입력. Metric: 실효 메모리 대역폭 비율, 2~20x 향상 주장(단일 수치 아님). Conditions: 레포 내 기능 벤치, GPU 모델·드라이버·측정 세부 미기재, topk ≤ 4096 제한. 독립 재현: unknown. 판정: 범위 주장으로만 인용.

10. EVT-20260910-DEEPSEEK-V41FLASH(오픈웨이트 항목, HF 모델 카드 기준) — 벤치별 하네스가 상이(MRV/DSH Minimal/1M 컨텍스트/mini-SWE/Claude Code)하여 하나의 조건 세트로 비교 불가. 예: GPQA-Diamond 90.9, MMLU-Pro·LongBench-V2·MMMU-Pro 56.5, DocVQA 95.6, Codeforces 3471 — 전부 내부 평가 프레임워크 결과이며 비교군과 컨텍스트·추론 예산 동일성 보장 없음. 독립 재현: unknown.

11. 참고 — 로컬 검증 개선: 로컬 스택(/opt/hermes-search-stack, adapter :3030 · SearXNG :8888 · CRW :3000 · Lightpanda :9222)이 research-bundle v2.0의 B등급 검증 단계에 실사용된다. 등급 유지보수 중 관찰 사항: 일부 연구자 세션에서는 광역 검색 백엔드가 날짜 지정 쿼리에 무관한 결과(홈페이지·캐시·무관 사이트)를 반환해 광역 소스 계층이 약화된 상태로 창을 닫았다. 따라서 본 보고서의 B등급 커버리지는 로컬 스택의 정상 상태 기준으로 재현·보강이 필요하다.

벤치마크 주장이 없는 이벤트(감사 미적용, applicable=false): EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT(수치 없는 서술 보고서), EVT-20260910-TSMC-AUG-REV, EVT-20260910-MEDIATEK-AUG-REV, EVT-20260910-DMATRIX-NVLINK-FUSION(지연·처리량 미제시), EVT-20260910-NVDA-GROQ-DOJ-PROBE, EVT-20260910-ORACLE-OCI-REV, EVT-20260910-OPENAI-DATA-AGENT, EVT-20260910-AMAZON-QUICK-DESKTOP-GA, EVT-20260910-SALESFORCE-ENTERPRISE-AI-HARNESS, EVT-20260910-AMAZON-OPENAI-CHATGPT-ADS, EVT-20260910-CLAY-SERIESD, EVT-20260910-KPMG-REALITYDEFENDER, EVT-20260910-UK-MHRA-AI-HEALTHCARE-RULES, EVT-20260910-GSA-OPENAI-ONEGOV, EVT-20260910-CA-CHILD-SAFETY-AI-LAWS, EVT-20260910-KR-AI-HEALTH-ASEAN.

핵심 반증·과장 경고
- Frontier Models 3건 중 독립 재현이 확인된 것은 0건이며, 3건 모두 하네스가 완전 공개되지 않았다. DeepSeek의 HLE-with-tools(63.9)와 GPT-Live-1의 Tau3 1위는 각각 하네스 미기재·백엔드 모델 의존 문제로 교차 비교가 안전하지 않다.
- Anthropic 위협 인텔리전스의 모든 수치(151M+/23M+/12M+)는 경쟁사 행위에 대한 벤더 자체 측정이며, 지목된 랩·Xiaomi 모두 논평하지 않았다. '규제 조치'나 '독립 검증 결과'로 승격 금지.
- EVT-20260910-AMAZON-QUICK-DESKTOP-GA는 자체 문서 내 날짜 불일치(9/9 표기 vs 9/10 게재)가 있어 GA 일자 자체가 미확정이다. EVT-20260910-KR-AI-HEALTH-ASEAN은 보도자료 본문 미확보로 제목 수준의 정보에 그친다.
- C등급 처리: EVT-20260910-KR-AI-DIPLOMACY(Nikkei Asia 오피니언, 한국 AI 외교에 일본 필요론)는 신규 사실이 아닌 해석이므로 코어 신호에서 제외하고 아래 Coverage Audit에 기록만 남긴다. 같은 이유로 UNIST EPIC(온디바이스 RAG, 2026-09-10 KST 보도)도 1차/논문 출처가 확인되지 않아 제외했다(출처: en.sedaily.com, 허용 목록 외 — 발견용으로만 사용).

## 7 다음 확인 일정

- 2026-09-14 04:00 UTC: DeepSeek API의 deepseek-v4-pro → V4.1-Flash 전면 재라우팅 실제 동작 확인 및 V4.1-Pro 시점. (EVT-20260910-DEEPSEEK-V41FLASH)
- 2026-09-30: GSA OneGov 기존 계약(Anthropic·Google·xAI 등) 만료 시점의 갱신 여부. (EVT-20260910-GSA-OPENAI-ONEGOV)
- 2026-10-01: GSA–OpenAI 신규 요금제(라이선스 $0 + 토큰 50% 할인) 실제 발효·주문 경로(MAS/리셀러/클라우드 마켓플레이스) 확인.
- 2026-10-08 17:00 GMT+8: MediaTek 9월 월매출 및 3분기 실적 — AI ASIC/데이터센터 비중, 구글 외 고객 확대. (EVT-20260910-MEDIATEK-AUG-REV)
- 2026-10월 초: TSMC 9월 매출 / 2026-10월 중순: 3분기 실적·2027 capex 가이던스 — 53%대 성장률 지속 여부. (EVT-20260910-TSMC-AUG-REV)
- 2026 Q4: Positron Asimov 실리콘(TSMC N3P) 테이프아웃 확인, OCI 내 Atlas 프로덕션 제3자 측정. (EVT-20260910-POSITRON-SERIESC)
- Dreamforce(시점 미확정): Salesforce Enterprise AI Harness·AI Control Plane의 GA·가격·업그레이드 경로. (EVT-20260910-SALESFORCE-ENTERPRISE-AI-HARNESS)
- 2026-10-28~29: GitHub Universe 2026 — HydraFusion GA 및 벤치마크 상세 공개 여부. (EVT-20260910-GITHUB-COPILOT-WEEKLY-0907)
- 상시 감시: dsh 0.1.5 정식 릴리스와 세션 포맷 V3 마이그레이션 문서(EVT-20260910-DS-HARNESS-015RC2), vLLM/SGLang의 DeepSelect 커널 채택 여부(EVT-20260910-DS-DEEPSELECT-V1), Alibaba·Moonshot·DeepSeek·Xiaomi의 공식 반박 및 국내외 개인정보 당국의 재라우팅 프롬프트 조사(EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT), MHRA 44개 권고의 입법화·식약처 대응(EVT-20260910-UK-MHRA-AI-HEALTHCARE-RULES), 캘리포니아 SB 1119·AB 1709 2027년 발효 및 연방 선점 시도(EVT-20260910-CA-CHILD-SAFETY-AI-LAWS).

## 8 Coverage Audit

연구자 종료 상태 (terminal completion): 10/10 완료. 전 카테고리 연구자가 창 [2026-09-10T06:00:00+09:00, 2026-09-11T06:00:00+09:00) Asia/Seoul 기준으로 결과를 정상 반환했고, 타임아웃·미반환·0건 종료 카테고리는 없다. 각 연구자는 수집 경로·창 밖 제외 목록·상태 분리 원칙을 coverage_notes로 제출했다.

카테고리별 포함 이벤트 수 (중복 제거 후, 고유 Event ID 기준)
- Frontier Models: 2 — EVT-20260910-DEEPSEEK-V41FLASH, EVT-20260910-OPENAI-GPTLIVE1-API
- AI Research: 2 — EVT-20260910-ANTHROPIC-FRT-KILLCHAIN-EVALS, EVT-20260910-GOOGLE-RESEARCH-TOOLGRAD
- Agents/Developer Tools: 3 — EVT-20260910-OAI-AGENTS-API, EVT-20260910-CURSOR-PROJECTS, EVT-20260910-GITHUB-COPILOT-WEEKLY-0907
- Open Source/Repos: 2 — EVT-20260910-DS-DEEPSELECT-V1, EVT-20260910-DS-HARNESS-015RC2
- Chips/Compute/Infrastructure: 5 — EVT-20260910-TSMC-AUG-REV, EVT-20260910-MEDIATEK-AUG-REV, EVT-20260910-DMATRIX-NVLINK-FUSION, EVT-20260910-NVDA-GROQ-DOJ-PROBE, EVT-20260910-ORACLE-OCI-REV
- Enterprise/Applications: 5 — EVT-20260910-OPENAI-CHATGPT-FINSERV, EVT-20260910-OPENAI-DATA-AGENT, EVT-20260910-AMAZON-QUICK-DESKTOP-GA, EVT-20260910-SALESFORCE-ENTERPRISE-AI-HARNESS, EVT-20260910-AMAZON-OPENAI-CHATGPT-ADS
- Funding/M&A/Business: 3 — EVT-20260910-POSITRON-SERIESC, EVT-20260910-CLAY-SERIESD, EVT-20260910-KPMG-REALITYDEFENDER
- Safety/Evaluation/Security: 2 — EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT, EVT-20260910-UK-MHRA-AI-HEALTHCARE-RULES
- Policy/Geopolitics: 2 — EVT-20260910-GSA-OPENAI-ONEGOV, EVT-20260910-CA-CHILD-SAFETY-AI-LAWS
- Korea Exposure: 1 — EVT-20260910-KR-AI-HEALTH-ASEAN

Included Event count: 27

Dedupe 처리 내역 (고유 ID 27, 원시 산출 30)
- 병합 1: EVT-20260910-DEEPSEEK-V41FLASH ← EVT-20260910-DS-V41-FLASH-OPENWEIGHTS. 동일 이벤트(같은 날 같은 모델의 공개 발표와 웨이트·코드 공개, 두 연구자가 서로 다른 1차 소스로 각각 포착). canonical은 프런티어 모델 발표 기준 ID를 유지하고, HF 리포지토리 URL·code=yes 상태를 canonical 항목에 병합했다. Frontier Models에 계상, Open Source/Repos에는 중복 계상하지 않음.
- 병합 2: EVT-20260910-ANTHROPIC-BIOMISUSE-THREAT-REPORT ← EVT-20260910-ANTHROPIC-DISTILL. 동일 문서(Anthropic 2026년 9월 위협 인텔리전스 보고서, 2026-09-10)의 상이한 섹션(바이오 오용 vs 중국계 랩 증류)을 두 연구자가 각각 등급·출처로 보고했다. canonical은 Safety 항목(공식 1차 문서, Evidence A)을 유지하고 증류 수치·CNBC URL(Evidence B)을 해당 항목에 병합했다. Safety에 계상, Frontier Models에는 중복 제거 안내만 기재.
- 기타 동일 이벤트 내 다중 소스는 ID 병합 사유가 아니며(동일 ID 유지): Positron(공식+Reuters+WSJ), Clay(공식+SiliconANGLE+NYT), d-Matrix(공식+NVIDIA+Reuters), Nvidia–Groq(NYT+Reuters+Bloomberg), Oracle(Bloomberg+CNBC 일부 창 밖), Amazon Quick(공식 단일), Anthropic 위협 보고서(NYT·BBC 후속은 창 밖/다음 창).

제외·등급 하향 내역
- C등급 → audit 이동: EVT-20260910-KR-AI-DIPLOMACY(Nikkei Asia 오피니언, 2026-09-10). 신규 사실·발표가 아닌 해석(한국 AI 외교에 일본 필요론)이므로 코어 신호·이벤트 계상에서 제외. 창 내 다른 카테고리·연구자와 중복되는 이벤트는 없다.
- 1차 출처 미확보 → 제외: UNIST EPIC 온디바이스 RAG(2026-09-10 KST 보도, en.sedaily.com은 허용 목록 외이며 arXiv·UNIST 뉴스룸 1차 문서 미확인). 4개 지표(검색 메모리 648.96MB→0.27MB, 96.5ms→3ms, +18.79pp, Jetson Orin Nano/M4/Galaxy Z Flip6)는 1차 검증 전까지 집계 제외.
- 소속 연구자 자체 제외(창 밖·허용 출처 위반·물질성 미달, 원문 그대로 기록): Frontier Models — GPT-6 Astra 출시(창 이전), Mistral×Cloudera(신모델 없음), xAI/MiniMax/Qwen/Moonshot 최신 글(창 이전). AI Research — AlphaGenome Atlas·WeatherNext 3·Anthropic 사이버보안 정합성 평가(창 이전). Agents — HydraFusion 원문 블로그(09-04), Google ADK for Kotlin 1.0(09-09), LangChain Managed Deep Agents(09-09), Copilot 코드리뷰 앙상블(09-11), Cloudflare CASB 정책 자동화(09-11), Replit 데스크톱 MCP(09-11). Open Source — YuE2-3B(09-10 03:30 KST, 창 이전), Nex-N2.5, MiniCPM5-2B, GLM-5.3-Flash, vLLM v0.29.0, llama.cpp b10900(야간 빌드). Chips — Qualcomm–Amazon $60B(09-08), UAE Stargate 5GW 계획 수정(09-11), Ayar Labs·Yotta·Microsoft DC 확장(09-11), Enflame 상장(09-11), Biren 매출 보도(허용 매체 외). Funding — WSJ 펜타곤 $5B 대출(창 종료 38분 후), Harvey $550M(09-09), Meta–Stilla.ai(최초 보도 09-09), Salesforce–Listen Labs(09-09), Cohere·Nscale·Socure·Xapien·Inspiren 등(창 외 또는 허용 출처 외). Safety — BBC 'Anthropic 바이오무기 차단'(09-11 17:15 KST, 동일 사건 후속), NYT 09-10 21:50 UTC(창 종료 후), GTIG 트래커(09-09), FT UK AISI 보류(09-09 이전), BBC 킬스위치 거부(09-11). Policy — OpenAI 규제 요구(09-09), SB 813·AB 1405 서명(09-09), ITI 탈퇴·수출통제 로비(09-09), 중국 상무부 시사(09-09), 국정원법 개정 보도(09-11). Korea Exposure — 삼성 요코하마 패키징 허브(09-08), 한-프랑스 정상회담 AI 딜(같은 주, 창 전), 국회 K-NPU 수출 포럼(허용 출처 미확보).
- 약한 항목 미충원 원칙: 어떤 카테고리도 쿼터 충족을 위해 이벤트를 추가하지 않았고, 위 등급 하향·제외로 계상 수는 원시 30에서 27로 감소했다.

커버리지 리스크 (다음 사이클에서 보강 필요)
- 검색 백엔드 열화: 복수 연구자가 광역 검색 백엔드가 날짜 지정 쿼리에 무관한 결과를 반환했다고 보고했고(SearXNG 캐시·홈페이지·무관 사이트), 일부는 Wayback CDX·RSS pubDate로 직접 타이밍 검증으로 대체했다. Reuters/AP는 anti-bot(DataDome/Cloudflare)으로 차단되어 broad_news 교차검증을 CNBC·BBC·Nikkei·Bloomberg·NYT로 대체했다. 로컬 스택(/opt/hermes-search-stack: adapter :3030, SearXNG :8888, CRW :3000, Lightpanda :9222) 정상화 후 B등급 커버리지 재확인이 필요하다.
- 시간 정밀도: 다수 이벤트가 날짜 단위 타임스탬프만 공개되어(공식 블로그·정부 문서·일부 실적) 창 경계 판정은 미국 현지 업무시간 관행 가정에 의존한다. Oracle은 창 종료 45분 전(05:15 KST)으로 포함, CNBC 후속(21:42 UTC)은 창 밖이다.
- 한국 트랙 약세: 이번 창에서 한국 기업·기관의 신규 AI 발표는 허용 출처 기준으로 1건(B, 제목 수준)에 그쳤고, 한국 노출은 자본(Naver Ventures)·공급망(HBM/패키징)·규제 참조점의 간접 경로로만 존재한다. 0건 패딩은 하지 않았으며, 한국 트랙 소스 확대(허용 목록 내 한국어 1차 소스)가 다음 사이클의 과제다.
