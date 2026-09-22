---
layout: post
title: "AI Daily Intel — 2026-09-22"
date: 2026-09-22 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-09-22/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-09-22
- **기준 시각:** 2026-09-22T06:00:00+09:00
- **수집 구간:** [2026-09-21T06:00:00+09:00, 2026-09-22T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10/10 terminal completion
- **수록 사건 수:** 8

## 1 오늘의 AI 한 문장

프런티어 모델 경쟁의 중심이 단순 최고 성능에서 비용·캐시·에이전트 운영 효율로 이동하는 가운데, 연구 현장에서는 장기 행동 평가, 선택적 강화학습, 기하학적 생성, 희귀 실패 추정, 에이전트 하네스 자동 최적화가 이를 뒷받침하고 있다.

## 2 핵심 신호 5

1. OpenAI와 Anthropic이 같은 날 비용 중심의 프런티어 모델 경쟁을 강화했다.
   - OpenAI는 GPT-6 Sol·Luna를 API와 ChatGPT/Codex 일부 요금제에 출시했다. Sol은 입력 100만 토큰당 2달러·출력 10달러, Luna는 각각 0.10달러·0.50달러다.
   - Anthropic은 Claude Opus 5.5를 Claude, 자사 플랫폼, AWS·Google Cloud·Microsoft Azure에 출시했다. 입력 4달러·출력 20달러이며, 통상 워크로드 비용이 Opus 5보다 40% 낮다고 주장한다.
   - 두 발표 모두 공급자 자체 벤치마크 의존도가 높아 독립적인 비용 대비 성능 검증이 필요하다.

2. GPT-6 프롬프트 캐싱은 지속형 에이전트의 실질적인 운영비 절감 신호다.
   - 30분 이내 재사용 prefix, 캐시 읽기 최대 90% 할인, 명시적 breakpoint, prewarming, 모니터링 및 cache-miss 진단이 제공된다.
   - GitHub는 이전 기준 대비 새로 처리해야 하는 prompt token이 50% 이상 감소했다고 보고했지만, OpenAI가 제시한 고객 사례이며 독립 감사 결과는 아니다.

3. 에이전트 성능 개선의 초점이 모델 가중치뿐 아니라 학습 지점과 하네스 구조로 확장되고 있다.
   - Critical-State RL은 다단계 도구 사용 중 실제로 학습할 의사결정 지점을 선별한다.
   - RRSI는 prompt, 도구, memory, control flow, skill, subagent를 포함한 하네스를 자동 진화시키면서 과적합과 비용을 규제한다.
   - 두 접근 모두 실제 기업 워크플로에서의 재현성과 총 탐색비용 검증이 남아 있다.

4. 장기 행동 평가와 희귀 실패 확률 추정이 에이전트 평가의 새로운 축으로 부상했다.
   - GameHorizon은 단기·중기·장기 게임 이해와 온라인 행동 성공을 분리해 평가한다.
   - Iterative Unalignment는 최대 10^-9 수준의 희귀 사건 확률을 importance sampling으로 추정하려 한다.
   - 전자는 데이터·코드 공개가 예정 상태이고, 후자는 소형 모델과 구성된 사건군 중심이어서 즉시 일반화하기 어렵다.

5. 생성 모델의 latent가 외형 표현에서 명시적 3D 구조 표현으로 확장되고 있다.
   - GAE는 RGB뿐 아니라 depth, camera, point map을 함께 복원하는 기하학적 latent를 제안했다.
   - 코드와 가중치는 공개됐지만, 공개 generation checkpoint가 논문 표에 사용된 원본 checkpoint와 달라 주요 수치의 정확한 재현에는 제약이 있다.

## 3 영역별 AI 브리프

### Frontier Models

  제목: OpenAI, GPT-6 Sol 및 GPT-6 Luna 출시
  요약: 비용 중심의 GPT-6 Sol·Luna가 `gpt-6-sol`, `gpt-6-luna`로 API에 제공되고 ChatGPT Work와 Codex 유료 플랜 등에 순차 배포됐다. OpenAI는 GPT-5.6 프로모션 모델 대비 가격이 50% 낮다고 설명했다.
  중요성: 지속형 코딩·업무 에이전트의 경제성이 최고 단일 벤치마크보다 비용 조정 성능에 의해 결정되는 흐름을 강화한다.
  한국 연계: 한국 개발자와 기업도 지역별 서비스 제공, 가격, 데이터 거버넌스 조건에 따라 평가할 수 있으나 한국 전용 조건은 발표되지 않았다.
  Evidence A: OpenAI 공식 출시 발표 및 API·제품 가용성·가격 정보.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://openai.com/index/introducing-gpt-6-sol-and-luna/
  Announcement status: yes
  Availability status: yes
  Code status: no
  Independent reproduction status: unknown
  Production status: unknown
  Revenue status: no
  Regulatory status: no
  다음 확인: 실제 API 지연·신뢰성, 한국어 성능, cache 반영 비용, 제3자 벤치마크 재현, 전체 플랜 배포 여부.

  제목: OpenAI, GPT-6 프롬프트 캐싱 및 진단 기능 확대
  요약: 30분 재사용 prefix, 캐시 읽기 최대 90% 할인, cache breakpoint와 prewarming, 모니터링 dashboard, cache-miss 진단이 추가됐다. 지원 범위에서는 reasoning effort와 tool 설정 변경 시에도 이전 context cache를 유지할 수 있다.
  중요성: 긴 instruction, tool schema, 대화 이력을 반복 전송하는 production agent의 지연과 추론비용을 줄일 수 있다.
  한국 연계: 한국 기업의 코딩·리서치·업무 에이전트에도 직접적인 비용 효과가 예상되지만, 한국 지역 인프라나 데이터 거주성 약속은 없다.
  Evidence A: OpenAI 공식 기능 발표와 고객 귀속 운영 측정치.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://openai.com/index/better-prompt-caching-for-gpt-6/
  Announcement status: yes
  Availability status: yes
  Code status: no
  Independent reproduction status: no
  Production status: yes
  Revenue status: no
  Regulatory status: no
  다음 확인: 공개 API 문서 반영, 한국어 장문 context의 hit rate와 first-token latency, 독립적인 비용 비교.

  제목: Anthropic, Claude Opus 5.5 출시
  요약: `claude-opus-5-5`가 Claude와 Claude Platform, AWS, Google Cloud, Microsoft Azure에 출시됐다. 가격은 입력 100만 토큰당 4달러, 출력 20달러, cache read 0.20달러, cache write 5달러다. Anthropic은 Opus 5 대비 통상 비용 40% 감소와 출력 속도 30% 이상 향상을 주장한다.
  중요성: 고성능 코딩·지식업무 모델의 가격 경쟁을 강화하며, 안전장치 발동 시 구형 모델로 fallback되는 구조는 명목 성능과 실제 사용자 노출 성능이 다를 수 있음을 보여준다.
  한국 연계: 3대 cloud를 통한 조달 경로는 열렸지만 한국 region, 한국어 평가, 데이터 거주성 및 국내 규제 준수 조건은 명시되지 않았다.
  Evidence A: Anthropic 공식 출시 발표, 가격, 가용성, 공급자 벤치마크.
  Evidence B: Zapier의 early-access AutomationBench 실행과 METR·Frontier Design의 사전 평가가 언급됐으나 모든 벤치마크의 완전한 독립 재현 기록은 제공되지 않았다.
  Evidence C: 없음.
  Source URL: https://www.anthropic.com/claude-opus-5-5
  Announcement status: yes
  Availability status: yes
  Code status: no
  Independent reproduction status: yes
  Production status: unknown
  Revenue status: no
  Regulatory status: no
  다음 확인: 전체 system card와 외부 평가, 한국 cloud region 제공 여부, 한국어 전문업무, 비용 조정 코딩 성능, safeguard fallback 빈도.

### AI Research

  제목: Tencent 주도 연구진, 다중 시간축 게임 평가군 GameHorizon 공개
  요약: 21개 AAA 게임의 전문가 플레이 5,000시간을 기반으로 5,000개 offline 문항과 20개 online task·62개 subtask를 구성했다. 논문과 leaderboard는 공개됐지만 데이터·benchmark·구현은 공개 예정 상태다.
  중요성: 멀티모달 이해 점수가 장기 행동 성공으로 이어지는지 분리해 측정하려는 평가 체계다.
  한국 연계: 한국 게임 개발사와 embodied-agent 연구진의 장기 상호작용 평가에 활용 가능하지만 직접적인 국내 참여는 확인되지 않았다.
  Evidence A: arXiv 논문과 공개 leaderboard.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://arxiv.org/abs/2609.25001
  Announcement status: yes
  Availability status: no
  Code status: no
  Independent reproduction status: no
  Production status: no
  Revenue status: no
  Regulatory status: no
  다음 확인: 2026-10-25 전후로 예고된 코드·benchmark·데이터 공개, 게임 라이선스, 데이터 문서, offline-online 상관관계의 독립 재현.

  제목: Critical-State RL, 다단계 도구 사용에서 학습할 개별 의사결정 지점 선별
  요약: 최종 reward를 모든 선행 행동에 일괄 귀속하지 않고 실제로 개선 가능한 model call을 nested sampling으로 식별해 선택적으로 학습한다. BFCL v4 missing-function task에서 약 14%p 향상을 보고했다.
  중요성: 실패 원인이 특정 결정에 집중된 도구형 에이전트의 학습비용과 불안정성을 줄일 가능성이 있다.
  한국 연계: 다단계 API 및 업무 자동화 에이전트를 개발하는 국내 기업에 관련되지만 직접적인 한국 소속이나 배포는 확인되지 않았다.
  Evidence A: arXiv 논문과 저자 보고 실험.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://arxiv.org/abs/2609.24985
  Announcement status: yes
  Availability status: unknown
  Code status: no
  Independent reproduction status: no
  Production status: no
  Revenue status: no
  Regulatory status: no
  다음 확인: 코드와 전체 실험 artifact, 모델·표본·신뢰구간, BFCL 외 환경의 일반화, nested-sampling 추가비용.

  제목: GAE, 생성 latent 내부에 3D geometry 통합
  요약: geometry foundation model feature를 compact latent로 변환해 RGB, depth, camera, point map을 공동 복원한다. 코드·학습 및 평가 script·가중치는 공개됐지만 generation checkpoint는 논문 주요 표에 사용된 버전과 다르다.
  중요성: 외부 depth condition에만 의존하지 않고 생성 상태 자체에 지속적인 3D 구조를 담아 world model, simulation, robotics, video generation에 활용할 가능성이 있다.
  한국 연계: 국내 로봇, 게임, digital twin, VFX 연구와 연관되지만 직접적인 한국 기관 참여는 확인되지 않았다.
  Evidence A: arXiv 논문과 공개 repository·모델 가중치.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://arxiv.org/abs/2609.24981
  Announcement status: yes
  Availability status: yes
  Code status: yes
  Independent reproduction status: no
  Production status: no
  Revenue status: no
  Regulatory status: no
  다음 확인: 공개 script 실행, codec 결과와 generation 결과의 재현 가능성 구분, 동일 checkpoint·학습 데이터 조건의 독립 비교.

  제목: Iterative Unalignment, AI agent trajectory의 극희귀 실패 확률 추정
  요약: 모델 weight를 교란해 목표 사건을 증폭하는 importance-sampling proposal을 학습하고 estimator 불안정성을 제어한다. 120M·2.6B 모델과 300개 이상 사건에서 최대 10^-9 확률을 다뤘으며, 제한된 검증 가능 조건에서 naive Monte Carlo 대비 800배 이상 compute-weighted 효율을 보고했다.
  중요성: 실패 가능성의 시연을 넘어 저빈도·고영향 agent hazard에 대한 정량적 확률 추정을 지향한다.
  한국 연계: 국내 안전 연구기관, 모델 개발사, 규제산업의 agent risk 평가에 잠재적으로 유용하지만 직접적인 국내 연계는 확인되지 않았다.
  Evidence A: arXiv 논문과 공개 코드·reference probability parameter.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://arxiv.org/abs/2609.24969
  Announcement status: yes
  Availability status: yes
  Code status: yes
  Independent reproduction status: no
  Production status: no
  Revenue status: no
  Regulatory status: no
  다음 확인: 공개 코드 기반 효율 계산 재현, unbiasedness와 confidence-interval coverage, 대형 agent 및 현실적 장기 hazard 확장성.

  제목: Google 연구진, agent harness 정규화 자기개선 프레임워크 RRSI 공개
  요약: prompt, control flow, tool, memory, context, skill, subagent를 자동 진화시키면서 edit 제약, novelty pressure, leakage screening, noise-aware selection, 비용 규칙 및 pruning을 적용한다. 최대 14.1%p의 동일분포 향상과 5개 분포외 benchmark에서 최대 4.7%p 향상, unregularized evolution 대비 policy token 30% 절감을 보고했다.
  중요성: 모델 weight를 바꾸지 않고도 하네스 수준에서 성능을 높이고 과적합과 배포비용을 함께 관리하려는 접근이다.
  한국 연계: 고정된 상용·공개 모델 위에서 agent workflow를 최적화하는 국내 연구소와 기업에 관련된다. 저자 이름만으로 한국 기관 소속을 추정할 수는 없다.
  Evidence A: arXiv 논문과 공개 search loop·prompt·adapter·test·평가 workflow.
  Evidence B: 없음.
  Evidence C: 없음.
  Source URL: https://arxiv.org/abs/2609.24972
  Announcement status: yes
  Availability status: yes
  Code status: yes
  Independent reproduction status: no
  Production status: no
  Revenue status: no
  Regulatory status: no
  다음 확인: 고정된 모델 버전으로 benchmark delta 재현, 배포 token뿐 아니라 전체 탐색비용 측정, 한국어 및 locally hosted model 전이성.

### Agents/Developer Tools

검증 통과 이벤트 없음

### Open Source/Repos

검증 통과 이벤트 없음

### Chips/Compute/Infrastructure

검증 통과 이벤트 없음

### Enterprise/Applications

검증 통과 이벤트 없음

### Funding/M&A/Business

검증 통과 이벤트 없음

### Safety/Evaluation/Security

검증 통과 이벤트 없음

### Policy/Geopolitics

검증 통과 이벤트 없음

### Korea Exposure

검증 통과 이벤트 없음

## 4 기술→산업 전달경로

1. 모델 가격 인하
   → API 호출당 비용 감소
   → 더 긴 reasoning과 반복 실행 허용
   → 코딩·리서치·업무 agent의 상시 운영 가능성 확대
   → 실제 비용은 latency, output length, cache hit rate, fallback에 의해 결정.

2. 향상된 prompt caching
   → instruction·tool schema·대화 history의 반복 처리 축소
   → first-token latency와 input 비용 절감
   → 장기 context를 유지하는 enterprise agent의 경제성 개선
   → workload별 cache 구조 설계와 독립 측정 필요.

3. Critical-State RL
   → 실패를 유발한 model call 선별
   → 불필요한 trajectory 전체 학습 감소
   → API·workflow agent의 학습 안정성과 비용 개선 가능
   → 다양한 업무 환경에서의 일반화 검증 필요.

4. RRSI 기반 harness evolution
   → model 교체 없이 prompt·tool·memory·subagent 자동 최적화
   → 상용 모델을 사용하는 기업도 system-level 성능 향상 가능
   → search inference 비용과 benchmark leakage가 도입 판단의 핵심.

5. Geometry-aware latent
   → 생성 과정에서 camera·depth·point structure 유지
   → 게임·로봇·digital twin·VFX의 일관된 시점 제어 가능성 확대
   → 동일 checkpoint 재현과 실제 production pipeline 검증 필요.

6. 희귀 사건 importance sampling
   → 극저빈도 agent failure의 효율적 관측
   → 안전성 평가가 사례 수집에서 확률 추정으로 발전
   → frontier-scale agent와 실제 위험 시나리오로 확장돼야 규제·보험·감사에 활용 가능.

## 5 AI Stack Signal Map

- Model layer
  - GPT-6 Sol·Luna: 비용 조정형 프런티어 모델.
  - Claude Opus 5.5: 고성능 coding·knowledge work와 safeguard routing.

- Inference and serving layer
  - GPT-6 prompt caching: cache read 할인, prewarming, breakpoint, 진단 및 monitoring.
  - 핵심 지표: cache hit rate, time-to-first-token, 실제 workload당 총비용.

- Agent training layer
  - Critical-State RL: trajectory 전체가 아니라 개선 가능한 model call에 credit assignment.

- Agent orchestration layer
  - RRSI: prompt, tool, memory, context, skill, subagent를 포함한 harness 자동 진화.
  - 핵심 위험: benchmark-specific overfitting, leakage, 비공개 judge 의존성, 탐색비용.

- Evaluation layer
  - GameHorizon: short·medium·long horizon 이해와 online 행동 분리.
  - Iterative Unalignment: 저빈도 실패 확률과 estimator 효율 측정.

- Generative representation layer
  - GAE: appearance와 geometry를 함께 표현하는 latent.
  - 적용 후보: world model, simulation, robotics, gaming, digital twin, VFX.

- Application and market layer
  - 이번 window에는 독립적인 enterprise deployment, funding/M&A, chip 공급, 정책 또는 한국 특화 사건이 검증되지 않았다.
  - 따라서 모델 발표가 실제 생산성·매출·조달 변화로 이어졌다고 단정할 수 없다.

## 6 반증·과장·재현성 감사

### GPT-6 Sol·Luna

- Task: professional workflow, agentic coding, software engineering, computer use, factuality.
- Baseline: GPT-5.6 Sol/Luna, GPT-6 Astra, Claude Opus 5, Claude Fable 5/5.1 등 시험별 상이.
- Metric: AutomationBench 33.2%, DeepSWE 68.8%, OSWorld 2.0 offline 60.5% 등 공급자 제시 수치.
- Conditions: reasoning effort별 설정, AutomationBench 47개 tool, OSWorld offline release v2026.08.08, API 가격 기반 task 비용.
- Disclosure/contamination: 연구 환경·API와 production ChatGPT 결과가 다를 수 있다. 일부 경쟁 모델 수치는 대체값이며 Fable 5.1 비용에서 Opus fallback 비용이 제외됐다. contamination 분석은 공개되지 않았다.
- Independent replication: 확인되지 않음.
- 판정: 출시·가격·가용성은 강한 A급 사실이나 상대 성능 우위는 잠정적이다.

### GPT-6 prompt caching

- Task/baseline/metric: 표준화 benchmark가 아니라 고객 workload의 운영 측정이다. GitHub는 이전 baseline 대비 fresh prompt processing token 50% 이상 감소를 보고했다.
- Conditions: 수십억 request 규모라는 고객 귀속 설명이 있으나 workload 구성과 측정법은 공개되지 않았다.
- Disclosure/contamination: benchmark contamination은 비적용. 대신 selection bias와 공급자 제시 사례라는 제약이 있다.
- Independent replication: 독립 감사 없음.
- 판정: production 사용 신호는 있으나 일반적인 절감률로 확대 해석해서는 안 된다.

### Claude Opus 5.5

- Task: coding, terminal, professional knowledge work, business workflow, computer use, data collection, safety, prompt-injection resistance.
- Baseline: Claude Opus 5, Claude Fable 5.1, GPT-6 Astra, GPT-5.6 Sol.
- Metric: FrontierCode 54.6%, CursorBench 52.5%, GDPval-AA 1846 Elo 등.
- Conditions: 주로 adaptive thinking max effort, 일부 coding benchmark는 medium effort. production safeguard가 발동하면 일부 과제에서 구형 모델 fallback. Terminal-Bench는 Claude Code harness, WANDR는 offline web tool과 980,000-token budget 사용.
- Disclosure/contamination: 대부분 Anthropic 보고다. 경쟁사 수치는 공급자 보고값을 사용했고, WANDR는 타사 조건과 직접 비교하기 어렵다. 일부 표준오차가 크며 contamination 분석은 없다.
- Independent replication: Zapier와 외부 평가기관의 제한적 사전 평가가 있으나 모든 결과가 재현된 것은 아니다.
- 판정: 독립 신호가 일부 존재하지만 전체 benchmark 우위를 확정하기에는 부족하다.

### GameHorizon

- Task: 시간축별 gameplay 이해와 online task·subtask 완료.
- Baseline: 44개 모델의 offline suite 및 12개 모델의 online task 결과.
- Metric: multiple-choice accuracy, mean accuracy, subtask 및 장기 task success rate.
- Conditions: 21개 AAA 게임, 전문가 100명, 5,000시간, 5,000문항, 20개 online task.
- Disclosure/contamination: 데이터·benchmark·코드가 아직 공개되지 않았다. 게임 선택, 자동 annotation, 모델의 게임 사전 노출과 contamination을 감사해야 한다.
- Independent replication: 없음.
- 판정: 평가 설계는 유망하지만 현재 수치는 재현 불가다.

### Critical-State RL

- Task: missing function·argument, 반복 호출 방지, memory management 등 다단계 tool-use 진단.
- Baseline: 동일 환경에서 diagnostic-selected state와 alternative state 학습 비교.
- Metric: BFCL v4 missing-function에서 약 14%p 향상.
- Conditions: candidate call, local reward, nested sampling, contextual-bandit optimization.
- Disclosure/contamination: abstract에는 모델, 표본수, 신뢰구간, 세부 baseline이 충분하지 않다. contamination 논의와 코드가 없다.
- Independent replication: 없음.
- 판정: 방법론적 신호이며 성능 개선의 일반성은 검증되지 않았다.

### GAE

- Task: text-to-image, camera-controlled video, novel-view synthesis의 3D consistency.
- Baseline: generator와 training protocol을 고정하고 appearance-centric latent를 GAE로 대체.
- Metric: RealEstate10K FVD 12.7% 감소, DL3DV 23.1% 감소, camera-trajectory error 약 절반 감소.
- Conditions: frozen geometry foundation model feature에서 RGB·depth·camera·point map을 공동 decode.
- Disclosure/contamination: 공개 generation checkpoint는 추가 고해상도·다프레임·추가 데이터 학습을 받았고 논문 표의 원본 checkpoint는 공개되지 않았다. 데이터 overlap과 contamination도 배제되지 않았다.
- Independent replication: 없음.
- 판정: 코드 공개는 강점이나 주요 generation table의 정확한 재현은 현재 불가능하다.

### Iterative Unalignment

- Task: stochastic agent trajectory에서 희귀 사건 확률 추정.
- Baseline: naive Monte Carlo와 activation·logit·LoRA 기반 cross-entropy importance sampling.
- Metric: compute-weighted efficiency, effective sample size, estimator stability, relative standard error.
- Conditions: 약 120M·2.6B 모델, 300개 이상 사건, 최저 10^-9 확률. 800배 이상 효율 주장은 “가장 검증 가능한 설정”으로 한정된다.
- Disclosure/contamination: 소형 모델과 구성된 사건군 중심이며 repository는 초기 commit 수준이다. 실제 frontier agent로의 전이는 미확립이다.
- Independent replication: 없음.
- 판정: 정량 안전평가의 중요한 연구 신호이나 production risk 수치로 사용할 단계는 아니다.

### RRSI

- Task: agent prompt, control flow, tool, memory, context, skill, subagent의 자동 진화.
- Baseline: unregularized harness evolution과 초기 harness.
- Metric: 동일분포 최대 14.1%p, 5개 분포외 benchmark 최대 4.7%p 향상, policy token 30% 감소.
- Conditions: 8개 benchmark, domain adapter, proprietary judge·policy model, cloud credential 및 상당한 inference 요구.
- Disclosure/contamination: 최대 향상치는 서로 다른 task의 결과이며 단일 aggregate가 아니다. 공개 benchmark에 대한 proprietary model의 사전 노출 가능성이 있다. 배포 token 감소가 전체 search 비용 감소를 의미하지 않는다.
- Independent replication: 없음.
- 판정: 재사용 가능한 system optimization 접근이지만 총비용과 leakage를 포함한 독립 검증이 필요하다.

## 7 다음 확인 일정

- 2026-09-22 이후 즉시
  - GPT-6 Sol·Luna 및 Claude Opus 5.5의 API 문서, 실제 region 가용성, rate limit, latency, 장애율 확인.
  - 한국어 coding·업무·장문 context에서 동일 조건의 비용 대비 성능 측정.
  - GPT-6 caching의 cache hit rate, first-token latency, breakpoint 및 reasoning/tool 변경 동작 검증.

- 다음 제3자 평가 공개 시
  - OpenAI·Anthropic 모델을 동일 harness, 동일 effort, 동일 tool, 동일 가격 기준으로 재비교.
  - Claude safeguard fallback 빈도와 fallback 후 성능 차이 확인.
  - 공급자 benchmark의 contamination disclosure 및 confidence interval 확인.

- 코드·artifact 검증 가능 시
  - Critical-State RL 코드와 전체 실험 설정 공개 여부 확인.
  - GAE 공개 checkpoint로 재현 가능한 표와 재현 불가능한 표를 분리.
  - Iterative Unalignment estimator의 unbiasedness, interval coverage, compute accounting 재현.
  - RRSI의 전체 search cost, pinned model version, leakage screening 효과 재현.

- 2026-10-25 전후
  - GameHorizon code, benchmark, dataset의 예고된 공개 여부 확인.
  - 라이선스·annotation quality·게임 사전 노출·offline-online correlation 감사.

- 산업 전달 확인
  - production deployment, 고객 유지율, 실제 매출, cloud 한국 region, 국내 조달·보안·데이터 거주성 발표가 나오는지 추적.
  - 이번 window에 비어 있던 chip, enterprise, funding, policy, Korea Exposure 영역에 후속 사건이 생기는지 확인.

## 8 Coverage Audit

- Researcher terminal completion: 10/10. 모든 연구자가 지정된 exact KST window 조사를 종료했다.
- Frontier Models: 3
- AI Research: 5
- Agents/Developer Tools: 0
- Open Source/Repos: 0
- Chips/Compute/Infrastructure: 0
- Enterprise/Applications: 0
- Funding/M&A/Business: 0
- Safety/Evaluation/Security: 0
- Policy/Geopolitics: 0
- Korea Exposure: 0
- Dedupe notes: 제출된 8개 Event ID 사이에 동일 사실을 가리키는 중복은 확인되지 않았다. GPT-6 Sol·Luna 출시와 GPT-6 prompt caching 확대는 관련 발표지만 각각 모델 출시와 inference 운영 기능 변경이라는 별도 사건으로 유지했다. AI Research 사건이 safety·agent·open-source 영역과 주제상 겹치더라도 동일 연구 발표를 다른 category에 중복 등재하지 않았다.
- Exclusion notes: publication timing을 검증할 수 없거나 window 밖인 결과, 허용되지 않은 출처, 영향이 미미한 신규 repository, 독립 근거가 없는 주장, 관련성만 있고 별도 사건이 아닌 항목은 제외했다. C-grade 항목은 core signal이나 ledger에 포함하지 않았으며, 제공 bundle에는 별도의 C-grade 포함 후보가 없었다. 빈 category는 quota를 채우기 위해 약한 항목을 추가하지 않았다.
- Included Event count: 8
