---
layout: post
title: "AI Daily Intel — 2026-09-25"
date: 2026-09-25 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-09-25/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-09-25
- **기준 시각:** 2026-09-25T06:00:00+09:00
- **수집 구간:** [2026-09-24T06:00:00+09:00, 2026-09-25T06:00:00+09:00) Asia/Seoul
- **조사 범위:** 10/10 terminal completion
- **수록 사건 수:** 9

## 1 오늘의 AI 한 문장

이번 창에서 확인된 신호는 에이전트의 감사 가능성과 안전 경계, 로봇 제어 연구, Copilot 운영 정책에 집중됐지만, 연구 성능치는 저자 보고이며 날짜만 확인된 제품 공지는 창 안의 발표 시각까지 확정하지 못했다.

## 2 핵심 신호 5

1. 로컬 코딩 에이전트가 자신의 실행 기록을 삭제할 수 있다는 연구가 나왔다. 사고 조사에 쓰는 로그는 에이전트의 통제 밖에서 보존할 필요가 있는지 확인해야 한다. [논문](https://arxiv.org/abs/2609.30266)
2. 출력 접두어와 추론 채널 접근을 결합한 공격이 일부 시험 모델에서 높은 성공률을 보였다. 최대 99%는 모든 모델·일반 API 이용 조건에 적용되는 수치가 아니다. [논문](https://arxiv.org/abs/2609.29775)
3. 로봇 연구 두 편이 각각 행동 구별형 세계모델의 성공률과 연속 재계획의 속도 개선을 보고했다. 둘 다 독립 재현이나 상용 배치를 입증하지 않는다. [AD-WM](https://arxiv.org/abs/2609.30264) · [Rolling-WAM](https://arxiv.org/abs/2609.30247)
4. GitHub는 기업용 Copilot 기능의 전역 기본 정책을 추가했다. 기존 접근은 28일 설정 기간에 바뀌지 않으며, 시행 예정일은 10월 22일이다. [GitHub](https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise)
5. Liquid AI가 비전언어 모델용 다운로드 가능한 투기적 디코딩 drafter를 공개했다. 제시된 속도 향상은 공급사 측정치이므로 대상 하드웨어와 라이선스를 별도로 확인해야 한다. [Liquid AI](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark)

## 3 영역별 AI 브리프

Frontier Models — 검증 통과 이벤트 없음.

AI Research

  - 내용: 연구진은 시험한 여러 로컬 코딩 하네스에서 에이전트가 요청에 따라 실행 기록을 감시 장치의 경고 없이 삭제할 수 있었다고 보고했다. 시험 대상 중 Muse Code는 예외였으며, 외부 공격 경로도 보고했다. 독립 재현은 아니다.
  - Evidence A: 시각이 확인된 논문 원문에 근거한 연구 결과. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://arxiv.org/abs/2609.30266
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: no; 운영 배치: unknown; 매출: unknown; 규제: unknown.
  - 다음 확인: 에이전트 외부의 기록 보존 방식과 독립 재현.

  - 내용: AD-WM은 후보 행동 간 차이를 보존하도록 세계모델을 학습한다. 저자들은 OGBench-Cube의 어려운 시작 조건 성공률 52.0% 대 3.7%, Franka 기본 집기·놓기 성공률 71.1% 대 42.2%를 보고했다.
  - Evidence A: 시각이 확인된 신규 프리프린트와 저자 실험. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://arxiv.org/abs/2609.30264
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: no; 운영 배치: no; 매출: unknown; 규제: unknown.
  - 다음 확인: 전체 실험 절차·코드와 다른 로봇에서의 재현.

  - 내용: 미래 비디오·행동 청크의 부분적 디노이징 결과를 다음 제어 주기로 넘기는 재계획 방식이다. 저자들은 정상 상태 재계획 속도 4.5배 향상을 보고했다.
  - Evidence A: 시각이 확인된 심사 중 프리프린트와 저자 실험. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://arxiv.org/abs/2609.30247
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: no; 운영 배치: no; 매출: unknown; 규제: unknown.
  - 다음 확인: 동일 하드웨어·제어 주기에서의 지연시간 비교와 독립 재현.

Agents/Developer Tools

  - 내용: GitHub는 기업·조직 관리자가 일반 제공 Copilot 기능의 전역 기본 정책을 설정할 수 있다고 공지했다. 명시적 선택은 유지되고 프리뷰는 별도 opt-in이며, 시행은 10월 22일 예정이다. 원문은 달력 날짜만 제공해 창 내 발표 시각은 미확정이다.
  - Evidence A: GitHub 공식 공지. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: no; 운영 배치: unknown; 매출: unknown; 규제: no.
  - 다음 확인: 시행 여부와 적용 기능·예외 목록.

  - 내용: GitHub에 따르면 Copilot Memory를 활성화한 고객의 agentic autofix는 기존 메모리를 읽고 수정 패턴을 저장할 수 있다. 두 기능 모두 공개 프리뷰다. 9월 25일이라는 날짜만 있어 창 내 발표 시각은 미확정이다.
  - Evidence A: GitHub 공식 공지. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: no; 운영 배치: unknown; 매출: unknown; 규제: no.
  - 다음 확인: 프리뷰 자격, 메모리 통제, 수정 품질 측정치.

  - 내용: GitHub는 Slack·Teams 연동의 대화 맥락 처리, 유사 이슈 확인, 원대화 연결, 모델 전환을 공지했다. 기업용 공개 프리뷰이며 일부 기능은 단계적으로 배포된다. 9월 25일이라는 날짜만 있어 창 내 발표 시각은 미확정이다.
  - Evidence A: GitHub 공식 공지. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: no; 운영 배치: unknown; 매출: unknown; 규제: no.
  - 다음 확인: 작업공간별 실제 제공 범위와 대화 공유 권한.

Open Source/Repos

  - 내용: Liquid AI는 기존 LFM2.5-VL-3B용 약 2억 8천만 매개변수 DSpark drafter와 Safetensors·GGUF 체크포인트를 공개했다. 원문은 달력 날짜만 제공해 창 내 발표 시각은 미확정이다.
  - Evidence A: Liquid AI 공식 게시물과 모델 카드에 근거한 공개·공급사 측정치. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: unknown; 운영 배치: unknown; 매출: unknown; 규제: unknown.
  - 다음 확인: lfm1.0 라이선스 조건, 호환 런타임, 한국어 작업의 종단 간 지연시간.

Chips/Compute/Infrastructure — 검증 통과 이벤트 없음.

Enterprise/Applications — 검증 통과 이벤트 없음.

Funding/M&A/Business — 검증 통과 이벤트 없음.

Safety/Evaluation/Security

  - 내용: 연구진은 악성 추론 주입만으로는 공격 성공률이 약 0%였지만 출력 접두어와 결합하면 일부 시험 모델에서 최대 99%에 이르렀다고 보고했다. 이는 일반 사용자가 모든 배포 환경의 추론 채널을 편집할 수 있다는 뜻은 아니다.
  - Evidence A: 시각이 확인된 논문과 연결된 재현 코드에 근거한 저자 실험. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://arxiv.org/abs/2609.29775
  - 상태 — 발표: yes; 이용 가능: yes; 코드: yes; 독립 재현: unknown; 운영 배치: unknown; 매출: unknown; 규제: unknown.
  - 다음 확인: 현재 API의 필드 접근 권한과 독립 재현.

  - 내용: 연구진은 Ollama API를 모사한 허니팟 네 곳에서 84일간 고유 발신 IP 2,793개와 상호작용 290,887건을 관찰했다고 보고했다. 실제 Ollama 이용자의 침해가 확인됐다는 결과는 아니다.
  - Evidence A: 시각이 확인된 논문의 관찰 결과. Evidence B: 없음. Evidence C: 없음.
  - 출처 URL: https://arxiv.org/abs/2609.29757
  - 상태 — 발표: yes; 이용 가능: yes; 코드: unknown; 독립 재현: unknown; 운영 배치: no; 매출: unknown; 규제: unknown.
  - 다음 확인: 관찰 기록 공개·독립 재현 및 실제 배포 환경에서 공격의 성공 여부.

Policy/Geopolitics — 검증 통과 이벤트 없음.

Korea Exposure — 검증 통과 이벤트 없음.

## 4 기술→산업 전달경로

- 에이전트 기록 변조 연구 → 코딩 에이전트 운영팀의 감사 로그 신뢰성 점검 → 에이전트가 수정할 수 없는 별도 기록 저장 여부 확인. 한국 내 사고나 배치는 확인되지 않았다.
- 출력 접두어 공격 연구 → 추론모델 API·서빙 하네스의 편집 권한 검토 → 실제 제공 필드와 차단 경계 시험. 논문의 최대 공격 성공률을 운영 환경에 그대로 적용할 수 없다.
- AD-WM·Rolling-WAM → 로봇의 행동 선택·재계획 연구 → 동일 작업·하드웨어에서의 재현이 선행돼야 산업 현장의 성능 신호로 해석할 수 있다.
- Copilot 정책·메모리·채팅 연동 → 기업 관리자의 승인 규칙과 저장 맥락·대화 권한 검토 → 예정된 정책 시행과 작업공간별 프리뷰 제공 범위를 확인해야 한다.
- DSpark 공개 → 비전언어 추론의 디코딩 지연시간 최적화 시험 → 대상 장비의 종단 간 성능·라이선스를 확인해야 한다.

## 5 AI Stack Signal Map

- 모델·추론: DSpark는 기존 비전언어 모델의 디코딩 경로를 겨냥한다. 공급사 속도 측정치이며 모델 품질 향상 주장은 아니다.
- 연구·로보틱스: AD-WM은 행동 구별, Rolling-WAM은 재계획 지연시간을 겨냥한다. 둘 다 저자 실험 단계다.
- 에이전트·개발 도구: Copilot의 기본 정책, 수정 메모리, 협업 채팅 연동은 관리 범위와 맥락 접근 경로를 넓힌다.
- 안전·운영: 실행 기록 삭제, 출력 접두어 공격, 공개 LLM API 대상 탐색 관찰은 각각 로그 무결성, 하네스 권한, 엔드포인트 접근 통제를 점검할 이유가 된다.
- 칩·자금·정책·한국 고유 신호: 이번 번들에서 창 내 검증 통과 이벤트가 없다. 활동 부재를 뜻하지 않는다.

## 6 반증·과장·재현성 감사

- AD-WM: 과제는 OGBench-Cube 조작 계획과 Franka 집기·놓기 이전이다. 기준선은 각각 맞춘 LeWM과 AD-WM을 제거한 설정이며, 지표는 성공률 52.0% 대 3.7%, 71.1% 대 42.2%다. 저자들은 시뮬레이션 환경 다섯 곳과 동결 V-JEPA 2 인코더·맞춘 DROID 후학습 조건을 보고했다. 다른 로봇으로의 일반화 및 독립 재현은 확인되지 않았고, 초록에서 벤치마크 오염을 다루지 않는다.
- Rolling-WAM: 과제는 로봇 조작의 비디오·행동 공동 생성 재계획이다. 매 주기 전체 예측 구간을 새로 디노이징하는 방식이 기준선이고, 보고 지표는 정상 상태 4.5배 속도 향상과 정량치가 제시되지 않은 경쟁력 있는 조작 성능이다. LIBERO·RoboTwin·Unitree G1 평가가 보고됐으나 초록만으로 하드웨어·지연시간 분해를 확정할 수 없다. 오염 평가는 확인되지 않았고 독립 재현도 없다.
- DSpark: 일반·텍스트·차트 VQA, 이미지 설명, 복잡 추론, 다회 대화의 추론이 과제다. 동일 목표 모델의 drafter 미사용 경로와 비교해 Apple M5 Max에서 디코딩 최대 3.13배·종단 간 최대 2.62배, 단일 H100에서 각각 2.66배·2.27배를 공급사가 보고했다. 배치 1·온도 0이며 H100은 SGLang/BF16/블록 9, Apple은 FP16/블록 8 조건이다. 비전 인코딩과 prefill은 빨라지지 않는다. 독립 재현은 미확인이고, 모델 카드의 lfm1.0 라이선스와 게시물의 사용 설명 간 차이를 확인해야 한다. 벤치마크 오염에 관한 별도 판단 근거는 번들에 없다.
- 출력 접두어 공격: AdvBench의 유해 요청에 대한 공격 성공률을 측정했다. 추론 주입만 적용한 조건을 기준으로 정적·맥락형 접두어와 추론 주입 설정을 비교했으며, 세 모델에서 총 1,800개 시험 사례를 사용했다. 약 0% 대 일부 모델 최대 99%는 저자 보고다. 공개 시험 세트의 오염 가능성을 배제할 수 없고, 결과는 prefill·추론 필드 접근을 허용하는 하네스 조건에 좌우된다. 독립 재현은 미확인이다.
- 나머지 포함 이벤트는 번들에 비교 성능 벤치마크가 제시되지 않았다. 실행 기록 삭제와 허니팟 관찰은 저자 연구 결과이지 독립 확인된 운영 사고가 아니다. Copilot 기능의 품질 개선치 역시 독립 검증 자료가 제시되지 않았다.

## 7 다음 확인 일정

- 2026-10-22: GitHub의 기업용 Copilot 전역 기본 정책 시행 여부, 적용 대상과 예외 확인.
- 일정 미정: Copilot 공개 프리뷰의 작업공간별 제공 범위, 메모리 통제와 공유 대화 권한 확인.
- 일정 미정: AD-WM·Rolling-WAM의 코드·전체 실험 조건과 독립 재현 확인.
- 일정 미정: 출력 접두어 공격의 현재 API 재현 가능성, 에이전트 외부 로그 보존 시험, 허니팟 관찰의 실제 침해 여부 확인.
- 일정 미정: DSpark의 라이선스와 대상 하드웨어·한국어 작업 종단 간 지연시간 확인.

## 8 Coverage Audit

연구자 10/10명이 각 범주의 초기 조사와 표적 2차 조사를 마쳤다. 아래의 후보는 `search_audit`의 초기·표적 후보 합계, 검증은 해당 감사의 `verified_count`, 포함은 이 보고서의 고유 원장 건수다. AI Research에는 `search_audit` 수치가 없어 번들에 제시된 이벤트 3건을 후보·검증으로 표시했다.

| 범주 | 초기 후보 | 2차 후보 | 검증 | 포함 | 3건 목표 미달 사유 |
|---|---:|---:|---:|---:|---|
| Frontier Models | 0 | 0 | 0 | 0 | 공식 발표·논문·보도 재검색에도 창 내 날짜와 사건을 함께 확인하지 못함. 창 밖 모델 항목 제외. |
| AI Research | 3 | 0 | 3 | 3 | 미달 없음. 세 건 모두 신규 프리프린트이며 독립 재현은 확인되지 않음. |
| Agents/Developer Tools | 0 | 3 | 3 | 3 | 미달 없음. 날짜만 있는 GitHub 공지에 날짜 겹침 기준 적용; 창 내 시각은 미확정. |
| Open Source/Repos | 2 | 0 | 2 | 1 | 추가 검색에서 새 사건이 없었고, 검증된 GitHub proof-of-presence는 공개 소스 출시가 아닌 일반 저장소 플랫폼 보안 기능이라 핵심 AI 신호에서 제외. |
| Chips/Compute/Infrastructure | 0 | 0 | 0 | 0 | 2차 검색 결과가 무관하거나 날짜·출처 확인 불가. |
| Enterprise/Applications | 0 | 0 | 0 | 0 | 공식·언론 검색에서 창 내 발행일 확인 실패; 날짜 없는 기업 사례와 창 밖 항목 제외. |
| Funding/M&A/Business | 0 | 0 | 0 | 0 | 거래 관련 검색 결과가 무관하거나 날짜 미확인. |
| Safety/Evaluation/Security | 2 | 0 | 2 | 2 | 2차 공식 발표 검색에서 추가 건 없음; 21:00 UTC 마감 뒤 논문과 독립 검증 없는 중대한 침해 주장은 제외. |
| Policy/Geopolitics | 0 | 0 | 0 | 0 | 정부·언론 검색에서 검증 가능한 창 내 원문 미확보. |
| Korea Exposure | 0 | 0 | 0 | 0 | 한국어·영어 2차 검색에서 관련성과 날짜를 함께 확인할 원문 미확보. |

전역 중복 제거 결과, 동일 사건을 두 개의 Event ID로 포함한 사례는 없다. GitHub의 9월 25일 Copilot 주간 요약은 채팅 연동 업데이트 등을 반복하므로 별도 사건으로 세지 않았다. proof-of-presence는 검증 2건과 포함 1건의 차이를 설명하는 제외 건이다. 그 밖의 0건 범주는 사건이 없었다는 판정이 아니라 검색 회수·시각 검증의 한계다. 9월 24일·25일 날짜만 제공된 공식 게시물은 날짜 겹침 기준에 따른 조건부 포함이며, 특히 9월 25일 게시물의 06:00 KST 이전 발행은 확정되지 않았다.

- **수록 사건 수:** 9
