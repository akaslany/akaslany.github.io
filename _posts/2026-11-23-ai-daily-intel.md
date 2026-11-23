---
layout: ai-intel
title: "AI Daily Intel — 2026-11-23"
date: 2026-11-23 06:00:00 +0900
categories: [ai-daily-intel]
tags: [AI, 인공지능, 개발자, 투자, 모델, 인프라]
permalink: /ai-intel/2026-11-23/
description: "검증 가능한 출처를 바탕으로 AI 산업·모델·인프라 신호를 정리한 일일 인텔리전스"
---

> **공개 자료 안내:** 공개적으로 확인 가능한 출처를 바탕으로 사실·주장·추론·미확인을 구분한 정보 자료입니다. 기본 판단은 관망이며, 투자 권유나 수익 보장이 아닙니다.

- **보고서 날짜:** 2026-11-23  
- **기준 시각:** 2026-11-23T06:00:00+09:00  
- **수집 구간:** [2026-11-22T06:00:00+09:00, 2026-11-23T06:00:00+09:00) Asia/Seoul  
- **조사 범위:** 10  
- **수록 사건 수:** 17

## 1 오늘의 AI 한 문장
AI 모델의 학습 손실, 에이전트 감시 성능, 랙 단위 추론 검증이 각각 공개됐지만, 어느 것도 그 자체로 안전 기준의 성립이나 운영 배포를 입증하지는 않았다.

## 2 핵심 신호 5
1. [UK AISI의 감시기 평가 — Evidence A]([www.aisi.gov.uk](https://www.aisi.gov.uk/blog/attack-policy-selection-can-make-monitor-evaluations-misleading):) 동일한 퇴역 감시기의 미탐률이 합성 시험 조건에 따라 0.2%에서 23%까지 달라졌다. 실제 운영 미탐률이 아니라 시험 설계에 대한 경고다.
2. [OpenAI의 사전학습 손실 공개 — Evidence A]([openai.com](https://openai.com/index/perplexity-and-intelligence/):) 내부 코드 평가에서 GPT-3.5 약 0.99, GPT-4 약 0.91, 최근 모델은 0.8 미만으로 보고됐다. 공동 안전 기준은 제안 단계이며 평가 데이터는 공개되지 않았다.
3. [AMD Helios의 Azure 실험실 검증 — Evidence A]([newsroom.amd.com](https://newsroom.amd.com/news/microsoft-running-workload-validation-amd-helios-rackscale-solution/):) Microsoft와 AMD가 첫 Helios 랙에서 추론 워크로드를 검증 중이라고 AMD가 밝혔다. 고객용 서비스나 성능 수치는 공개되지 않았다.
4. [Anthropic의 무보관 안전장치 공개 베타 — Evidence A]([claude.com](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards):) 적격 고객이 자체 저장소에 입출력 데이터를 두면서 요청 간 오용 패턴을 감시하는 구성을 시험할 수 있다. 독립적인 보관 정책 감사와 한국 리전 지원은 미확인이다.
5. [SK텔레콤의 A.LL 전환 계획 — Evidence B]([www.etnews.com](https://www.etnews.com/20261120000272):) 회사 관계자가 에이닷을 작업 수행형 에이전트로 개편할 계획을 확인했다. 보도상 출시는 12월 예정이며 실제 제공은 확인되지 않았다.

## 3 영역별 AI 브리프

### Frontier Models
  - Evidence A | <br class="report-field-break" />출처: [openai.com](https://openai.com/index/perplexity-and-intelligence/)
  - OpenAI가 내부 사전학습 손실을 공개하고, 프런티어 개발사들이 공통 평가와 안전 이정표에 연계한 개발 한도를 검토하자고 제안했다. 신규 모델 출시, 합의된 한도, 규제 조치는 아니다.

### AI Research
  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/api/models/teerthsharma/Alcyone-W/commits/main)
  - 입자 충돌 표현에서 가려진 영역의 구조를 예측하는 W-JEPA의 가중치·코드·표본이 공개됐다. 가림 과제 성적은 높았지만, 후속 물리 과제에서는 단순 운동학 MLP가 더 나았다.

### Agents/Developer Tools
검증 통과 이벤트 없음

### Open Source/Repos
  - Evidence A | <br class="report-field-break" />출처: [github.com](https://github.com/w01fb0ss/PiBot/releases/tag/v0.0.3)
  - Pi Bot v0.0.3에서 데스크톱 에이전트 소스를 Apache 2.0으로 공개했다. 배포 설치 파일이 태그 소스에서 동일하게 빌드되는지는 미확인이다.

  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/blog/QuentinJG/ive-release)
  - Illuin이 문서 이해 모델 IVE-4B와 Ivonnet-0.8B의 가중치 및 추론 코드를 Apache 2.0으로 공동 발표했다. 공개 시각 근거는 발표 날짜에 한정되며 각 파일의 최초 공개 시각은 확인되지 않았다.

  - Evidence A | <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/ggml-org/llama.cpp/commits/f505c30b92b5579e00532c9e75baa3aa74b70432)
  - llama.cpp에 Qwen3-Omni·Qwen3-ASR의 마지막 불완전 오디오 청크에서 패딩 때문에 생기는 여분 토큰을 제거하는 수정과 회귀 테스트가 병합됐다. 가용성은 소스 기준이지 패키지 배포 기준이 아니다.

### Chips/Compute/Infrastructure
  - Evidence A | <br class="report-field-break" />출처: [newsroom.amd.com](https://newsroom.amd.com/news/microsoft-running-workload-validation-amd-helios-rackscale-solution/)
  - AMD가 Azure 실험실에서 Microsoft의 첫 Helios 랙에 AI 추론 워크로드를 검증 중이라고 공개했다. 검증 시작 시각, 성능, 고객 배포는 공개하지 않았다.

  - Evidence A | <br class="report-field-break" />출처: [www.aboutamazon.com](https://www.aboutamazon.com/news/company-news/amazon-decart-ai-optimization)
  - Amazon이 Decart 최적화 기술을 인수하고 창업자와 기술팀을 영입하는 계약을 발표했다. 규제 승인 등 종결 조건이 남아 있으며, 이 발표는 승인·종결·Trainium 고객 통합을 뜻하지 않는다.

### Enterprise/Applications
  - Evidence A | <br class="report-field-break" />출처: [claude.com](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards)
  - Anthropic이 Enterprise Frontier Safeguards의 무보관 구성을 적격 고객 대상 공개 베타로 전환했다. 회사 설명에 따르면 입출력은 고객이 통제하는 저장소에 남기면서 요청 간 패턴을 감시할 수 있다. 베타 가용성은 운영 도입이나 보관 정책의 독립 검증을 뜻하지 않는다.

### Funding/M&A/Business
  - Evidence A | <br class="report-field-break" />출처: [sierra.ai](https://sierra.ai/blog/series-f-30b)
  - Sierra가 기업가치 300억 달러 기준 17억 5천만 달러 규모의 시리즈 F 조달을 발표했다. 종결은 미확인이다. 4억 달러 초과 ARR은 회사가 별도로 밝힌 연환산 반복매출 지표로, 투자금이나 감사된 인식 매출이 아니다. 가용성과 운영 상태는 신규 라운드가 아닌 기존 서비스에 관한 항목이어서 아래에서 미확인으로 둔다.

  - Evidence A | <br class="report-field-break" />출처: [ir.crowdstrike.com](https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-acquire-zscaler-bringing-network-security-and-zero)
  - CrowdStrike와 Zscaler가 약 439억 달러 규모의 전액 주식 인수 계약을 발표했다. 엔드포인트와 네트워크 통제를 묶어 기업 AI 에이전트를 보호한다는 구상은 합병 종결이나 통합 제품 출시와 별개다.

### Safety/Evaluation/Security
  - Evidence A | <br class="report-field-break" />출처: [www.aisi.gov.uk](https://www.aisi.gov.uk/blog/attack-policy-selection-can-make-monitor-evaluations-misleading)
  - UK AISI가 동일 감시기의 측정 미탐률이 합성 시험 설계에 크게 좌우된다고 보고했다. 가용성은 연구 공개를 뜻하며, 현행 감시기나 운영 환경의 신뢰성은 검증하지 않았다.

  - Evidence A | <br class="report-field-break" />출처: [github.com](https://github.com/kinshuk18/llm-safety-eval-service/commit/baeb43f67127cb33f13a17460d76a0eb45e62639)
  - 공개 저장소가 독성 분류기의 하위집단 오탐, 약한 교차 도메인 성능, 조회 시에만 문제를 표시하는 모니터링 동작을 명시했다. A는 정정 공개의 근거이지 수치의 독립 검증 등급이 아니다.

### Policy/Geopolitics
  - Evidence A | <br class="report-field-break" />출처: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/news/commission-welcomes-european-citizens-panel-recommendations-democratic-resilience)
  - 유럽연합 집행위가 27개 회원국 시민 패널의 권고 23건 인계를 공개했다. AI와 정보 무결성 등이 포함되지만 권고는 구속력 있는 규칙이나 한국 기업의 신규 의무가 아니다.

### Korea Exposure
  - Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261120000272)
  - SK텔레콤 관계자가 에이닷의 A.LL 전환 계획을 확인했다. 보도는 12월 출시와 기존 GPT·Claude 등 모델 선택형 대화 검색 제거를 예고했지만 실제 전환은 미확인이다.

  - Evidence B | <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261122000001)
  - LG유플러스의 2027년 조직 개편 구조가 공개됐다. 기업 사업을 AI 인프라·플랫폼 중심으로 재편하고 CTO 조직의 AI 연구·개발·사업화를 통합한다. 앞선 인사, 실제 시행일, 신규 서비스 출시와는 구분한다.

  - Evidence A | <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/api/models/Mireu-Lab/gomlx-korean-opinion/commits/main)
  - Mireu-Lab이 한국어 GoMLX 체크포인트 6종과 설정·평가 보고서를 공개했다. 연결된 구현의 리비전이 공개 가중치와 일치하는지는 미확인이다.

  - Evidence A | <br class="report-field-break" />출처: [www.navercorp.com](https://www.navercorp.com/media/pressReleasesDetail?seq=10034908)
  - 네이버 커넥트재단이 고교 4개 팀의 강화학습 로봇 결선을 공개했다. 가용성은 참가자에게 제공된 클라우드 훈련·교육 자료를 뜻한다. 학교 워크스테이션 지원과 연구 데이터 공개는 계획이다.

## 4 기술→산업 전달경로
- 내부 학습 손실 공개 → 공통 데이터·오염 점검·연구소 간 교정 → 비교 가능한 평가 기준. 현재 확인된 것은 첫 단계다.
- Azure 실험실의 랙 검증 → 명시된 워크로드의 성능·운영 검증 → 고객 프리뷰·상용 제공. Decart 계약도 종결과 통합 결과가 확인돼야 Trainium의 비용·성능 개선으로 해석할 수 있다.
- 합성 감시 시험과 독성 분류 감사 → 실제 업무 및 언어별 오류 측정 → 기업의 도입 기준. 무보관 베타의 데이터 통제와 감시기의 탐지 성능은 별도로 검증해야 한다.
- 국내 통신사의 서비스·조직 개편 → 앱 기능 공개 또는 고객 계약 → 운영·매출. A.LL 전환 계획과 LG유플러스 조직 구조만으로 후속 단계를 확인할 수 없다.

## 5 AI Stack Signal Map

| 계층 | 확인된 신호 | 다음 관문 |
|---|---|---|
| 모델·학습 | OpenAI 내부 손실 공개, Alcyone 연구 산출물 | 공통 평가, 독립 재현 |
| 추론·인프라 | Helios 실험실 검증, Decart 기술 인수 계약, llama.cpp 소스 수정 | 고객 가용성, 계약 종결·통합, 패키지 반영 |
| 도구·응용 | Pi Bot 소스, Illuin 문서 모델, 무보관 베타 | 재현 빌드, 독립 문서 평가, 보관 정책 검증 |
| 안전·거버넌스 | AISI 감시기 연구, 독성 분류 감사, EU 시민 권고 | 운영 대표성, 언어별 오류, 정식 후속안 |
| 사업·국내 확산 | Sierra 조달 발표, CrowdStrike 인수 계약, 국내 통신·한국어 모델·교육 공개 | 종결, 실서비스, 실제 이용·계약 |

## 6 반증·과장·재현성 감사
A는 원문·저장소가 공개 사실을 뒷받침한다는 뜻이지 결과 재현을 보증하지 않는다. B는 보도 근거이며, C급 미확인 주장은 원장 대신 관찰 목록에 뒀다.

| 평가 | 과제·기준선·지표 | 조건·공개·오염·독립 재현 |
|---|---|---|
| OpenAI 학습 손실 | 다음 토큰 예측. 동일 스냅샷의 GPT-3.5 약 0.99, GPT-4 약 0.91 대비 최근 모델 0.8 미만, 한 모델 약 0.76. 지표는 로그 퍼플렉서티(교차 엔트로피). | 내부 코드 홀드아웃은 비공개이며 별도 오염 감사는 문서화되지 않았다. 후학습·추론 시 사고의 효과나 일반 능력·안전 임계값을 측정하지 않는다. 독립 재현 미확인. |
| UK AISI 감시기 | 합성 소프트웨어 에이전트 기록에서 성공한 유해 행동 식별. 동일 감시기의 기본 조건 0.2%, 조건별 미탐률 0.2~23%. | 두 환경, 에이전트 1종, 퇴역 감시기 1종, 완료된 전체 기록을 사용했다. 대상 감시기는 사례 개발에서 제외됐지만 학습 데이터 오염과 운영 사고 대표성은 확인되지 않았다. 독립 재현 미확인. |
| Alcyone W-JEPA | 가림 영역 분지 수 정확도 0.945 대 최빈값 0.572. 제트 수 MSE 0.0103 대 Galactica 특징 제거 0.0796 및 단순 MLP 0.0016. 숨은 렙톤 전하 정확도는 우연 수준. | 분지 과제는 훈련에서 제외한 파일의 CMS 512건, 후속 평가는 홀드아웃 20만 건·시드 3개. 저자가 마스크 가장자리 단서 노출 가능성을 공개했다. 코드와 체크포인트는 공개됐으나 Galactica 가중치는 포함하지 않았다. 독립 재현 미확인. |
| Illuin | 문서 판단·페이지 재순위화. 비공개 신규 도메인 텍스트 점수 IVE-4B 40.3 대 Flash v1.2 40.0, v1.3 38.0이나 전체 텍스트 지수는 두 모델보다 낮다. 이미지 nDCG@10×100은 66.7 대 재순위화 없음 62.7, Nemotron 68.0. | Decision Index 이미지 상한 1.6MP. ViDoRe V3는 영어 질의로 8개 공개 도메인에서 상위 50페이지를 재순위화했다. 공식 훈련 분할 12개 사용과 테스트 항목 중복 제거를 저자가 보고했지만 비공개 과제는 확인할 수 없다. 다국어 성능·독립 재현 미확인. |
| 독성 분류 감사 | TF-IDF·로지스틱 회귀 대비 오프라인 DistilBERT AUROC: Civil Comments 0.9196→0.9562, HateXplain 0.5666→0.6329. 보고된 정체성 언급 집단의 DistilBERT 오탐률은 전체 대비 4.6~5.1배. | Civil Comments 2만 건, HateXplain 라벨 매핑 2종, 미탐 대 오탐 비용비 5:1. 실제 서비스는 기준 모델을 사용한다. 희소 집단 추정이 불안정하고 DistilBERT 가중치·별도 오염 감사·독립 재현은 확인되지 않았다. |
| Mireu-Lab | 한국어 주제·감성·감정 분류와 군집화. ReLU MLP 및 고정 KLUE-RoBERTa ONNX 헤드와 비교하며 정확도·F1·recall@3·군집 지표를 사용했다. | CPU 2 vCPU·3.8 GiB. 네이티브 모델은 KLUE-YNAT·NSMC 전체 평가 분할, ONNX 헤드는 도메인당 최대 1천 건으로 직접 비교할 수 없다. 훈련·평가 중복과 독립 재현 미확인. |

미포함 평가도 결론에는 쓰지 않았다. GPT-6.2 Sol Chat 수치는 Chat 탭의 GPT-6 대비 자체 평가로, Sol API 대비 결과가 아니다. 과제별 추론 설정이 다르고 오염 통제·독립 재현은 미확인이다. Claude Ship의 PR 병합·되돌림 수치는 기존 Code Review를 사용한 한 팀의 6월·9월 관찰 비교로, 원시 건수·통제군·독립 재현이 없으며 신규 베타 기능의 효과가 아니다. Castorini의 TREC DL·BEIR nDCG@10은 BM25 후보 상위 100개를 재순위화한 단일 저자 실행 결과다. 일부 벤치마크의 유사 훈련 데이터가 공개됐고 독립 재현은 없으며, 업로드 자체가 창 밖이다.

## 7 다음 확인 일정
- 다음 브리핑: GPT-6.2 Sol Chat과 Claude Ship의 공식 공개 시각, Nvidia 복귀의 공식 시각, Decart 계약의 원문 게시 시각과 종결 여부를 분리해 확인한다.
- 후속 평가 공개 시: OpenAI의 공통 데이터·오염 감사, AISI의 현행 감시기 다중 검증, Alcyone의 마스크 누출 통제, Illuin·Mireu-Lab의 동일 조건 독립 평가를 확인한다.
- 고객 공개 또는 거래 공시 시: Azure Helios 프리뷰와 성능, Anthropic 무보관 베타의 한국 리전·독립 감사, Sierra 라운드 및 CrowdStrike 거래의 종결을 확인한다.
- **12월 A.LL 출시 공지 시: 실제 작업 수행 범위, 기존 대화 기록 처리, 모델 선택 접근을 확인한다.** LG유플러스는 조직 시행과 고객 계약을, 로봇 교육은 학교 지원과 데이터 라이선스를 별도로 확인한다.

## 8 Coverage Audit
10개 연구자 모두 터미널 완료(10/10): 번들에 10개 최종 결과가 있다. 아래 후보는 제출된 `events`와 `watchlist`를 범주 안에서 같은 사건끼리 합친 수이며, 탐색 중 검토한 전체 검색 결과 수가 아니다. 연구자 검증은 `search_audit` 값이며, 해당 필드가 없는 세 범주는 제출된 코어 수를 표시했다. 최종 포함은 전역 중복 제거와 시간 검토 이후의 대표 원장 수다.

| 영역 | 제출 후보 | 1차/표적 | 연구자 검증 | 최종 포함 | 목표 3건 대비 부족 |
|---|---:|---|---:|---:|---:|
| Frontier Models | 4 | 1/1 | 2 | 1 | 2 |
| AI Research | 3 | 1/1 | 2 | 1 | 2 |
| Agents/Developer Tools | 5 | 0/0 | 0 | 0 | 3 |
| Open Source/Repos | 3 | 별도 집계 없음 | 3 | 3 | 0 |
| Chips/Compute/Infrastructure | 5 | 1/1 | 2 | 2 | 1 |
| Enterprise/Applications | 4 | 별도 집계 없음 | 3 | 1 | 2 |
| Funding/M&A/Business | 4 | 별도 집계 없음 | 3 | 2 | 1 |
| Safety/Evaluation/Security | 5 | 2/2 | 4 | 2 | 1 |
| Policy/Geopolitics | 5 | 2/1 | 3 | 1 | 2 |
| Korea Exposure | 6 | 1/3 | 4 | 4 | 0 |

- **Frontier Models: 1차는 OpenAI 원문을 확인했고, 표적 패스는 뉴스룸·릴리스·논문 목록을 재검토해 AISI 연구 1건을 추가했다.** AISI는 Safety에 배정했다. 기존 모델 발표, 날짜만 바뀐 페이지, 뒤늦은 논문 모음은 신규 출시가 아니었다. Reuters 인덱스가 오래됐고 일부 원문 접근이 제한됐다.
- **AI Research: 1차 기록은 시간창 복구를 거쳤고 Castorini는 정확한 업로드 시각으로 탈락했다.** 표적 패스는 저장소·논문 원기록에서 Alcyone을 확인했다. arXiv 검색·아카이브 장애와 오래된 모음 페이지는 개별 기록으로 보완했다. Sol Chat에 붙은 “마감 13분 전”은 다음 날 마감에 해당한다. 번들의 상세 시각과 충돌하는 날짜 전용 기록만으로 복구하지 않았다.
- **Agents/Developer Tools: 두 패스 모두 0건. 공식 변경 기록과 논문 원기록에서 주요 후보는 창 이전 또는 이후였고, 창 안의 Gemini CLI 야간 빌드는 실질적 변경이 확인되지 않았다.** 서울 시연 보도도 최초 공개나 출시를 입증하지 않았다. 일부 경로는 접근 불가 또는 요청 제한이었다.
- **Open Source/Repos: 패스별 수치는 없으나 날짜 검색 뒤 원문·릴리스·커밋으로 3건을 확인했다.** Illuin 두 모델은 공동 발표 1건, llama.cpp는 소스 병합 1건이다. 창 밖 패키지 배포는 추가하지 않았다.
- **Chips/Compute/Infrastructure: 1차는 AMD, 표적 패스는 Amazon을 확인했다.** Amazon 원문 추출에는 날짜가 없었지만 표적 패스에서 공식 뉴스룸 목록의 11월 23일 날짜를 확인해 날짜 전용 규칙을 적용했다. 마감 이후 보도와 보도 가격은 사용하지 않았다. 다른 후보는 창 밖, 이전 공개의 재보도, 또는 신규 행동 없는 발언이었다. Reuters는 차단됐다.
- **Enterprise/Applications: 패스별 수치는 없으며 날짜 검색 후 직접 추출로 3건을 제출했다.** Sierra는 Funding에 배정했다. Claude Ship은 명시된 시각의 후속 기사가 같은 날 출시로 설명해 정확한 시간창을 충족한 최초 공개로 확정하지 않았다. Walmart와 Google 관련 보도도 마감 이후였으며, 파리크라상 보도는 게시 날짜 자체를 확인하지 못했다.
- **Funding/M&A/Business: 패스별 수치는 없고 공식 발표·목록에서 3건을 제출했다.** Nvidia 복귀는 시각이 있는 보도가 복귀 자체를 미국 현지 11월 23일로 특정해 날짜 전용 목록보다 우선했다. Sierra는 회사의 날짜 전용 조달 발표만 채택했으며, 마감 이후 기사는 창 내 증거로 쓰지 않았다. 기존 투자 회고는 신규 거래가 아니고 Reuters 추출은 차단됐다.
- **Safety/Evaluation/Security: 1차 OpenAI·AISI, 표적 패스 독성 평가 정정·EU 권고로 연구자 검증은 4건이었다.** OpenAI는 Frontier, EU 권고는 Policy에 배정해 이 영역의 최종 원장은 2건이다. 추가 논문 후보의 목록 날짜는 최초 공개를 뒷받침하지 않았고 Pathway 초안은 창 밖이었다.
- **Policy/Geopolitics: 1차 OpenAI·EU 권고, 표적 패스 AISI로 연구자는 3건을 확인했다.** EU만 이 영역에 남겼고 나머지는 Frontier와 Safety에 통합했다. 수출통제·EU 자문·네덜란드 지침은 이전 공개였고 상원 원문과 Reuters에 접근하지 못했다.
- **Korea Exposure: 1차 A.LL, 표적 패스 3건을 모두 포함했다.** URL 식별자·지면 날짜보다 기사 게시 시각을 우선했다. 장비 발주·개인정보 규정 보도는 마감 이후였고, 다른 국내 기업 회고·행사는 이전 사건이었다.

전역 중복 처리: OpenAI 사전학습 손실·개발 한도 제안은 3개 기록을 Frontier 원장 1건으로, UK AISI 연구는 3개 기록을 Safety 원장 1건으로, EU 시민 권고는 2개 기록을 Policy 원장 1건으로, Sierra는 2개 코어 기록을 Funding 원장 1건으로 합쳤다. 날짜 전용 원문·공식 목록 채택은 해당 KST 시간 안의 게시 시각을 입증하지 않는다. Amazon과 Sierra의 관찰 행은 마감 후 보도 근거만을 가리키며, 채택한 원문 발표를 추가 집계하지 않는다. 출처 접근 제한과 검색 잡음 때문에 부족분은 검증 범위의 한계이지 사건 부재의 증명이 아니다.

### Watchlist (미확인 후보)
- 후보: OpenAI의 GPT-6.2 Sol Chat 전용판 배포 (미포함 사유: <br class="report-field-break" />Evidence B, 명시된 보도 시각은 마감 이후이며 더 이른 공개는 미확인 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1040716/openai-launched-a-chat-specific-version-of-gpt-6-2-sol))
- 후보: 오리건·버지니아의 Grok 소비자보호 소송 (미포함 사유: <br class="report-field-break" />Evidence B, 보도는 마감 이후이며 소장 서명일은 접수·공개 시각을 입증하지 않음 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1040255/x-grok-ai-deepfakes-oregon-virginia-lawsuit))
- 후보: Castorini Gaggle 소형 재순위화 모델 (미포함 사유: <br class="report-field-break" />Evidence B, 업로드가 마감 이후이며 저장소 접미사는 게시 날짜가 아님 / <br class="report-field-break" />출처: [huggingface.co](https://huggingface.co/api/models/castorini/gaggle-reranker-0.6b-20261122/commits/main))
- 후보: GitHub 이슈 상태·저장소 보드 공개 프리뷰 (미포함 사유: <br class="report-field-break" />Evidence B, 공식 게시 시각이 마감 이후 / <br class="report-field-break" />출처: [github.blog](https://github.blog/changelog/2026-11-23-issue-statuses-and-repository-boards-are-in-public-preview))
- 후보: Sierra 시리즈 F 후속 보도 (미포함 사유: <br class="report-field-break" />Evidence B, 기사 시각이 마감 이후이며 공식 조달 발표와 동일 사건 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/))
- 후보: Gemini CLI 11월 22일 야간 빌드 (미포함 사유: <br class="report-field-break" />Evidence C, 창 안의 빌드는 확인됐으나 실질적 기능 변경 미확인 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/google-gemini/gemini-cli/releases/tags/v0.71.0-nightly.20261122.geecccfcd5))
- 후보: OpenCode v2.4.0 브라우저·예약 자동화 (미포함 사유: <br class="report-field-break" />Evidence B, 저장소 게시 시각이 마감 이후 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/anomalyco/opencode/releases/tags/v2.4.0))
- 후보: Anthropic Claude Ship 베타 (미포함 사유: <br class="report-field-break" />Evidence B, 마감 이후 보도가 같은 날 출시로 설명하며 창 안 최초 공개 시각 미확인 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1040134/anthropic-claude-ship-ai-pull-requests))
- 후보: 미국 기업의 해외 데이터센터 과세 발언 (미포함 사유: <br class="report-field-break" />Evidence B, 기사는 마감 이후, 원래 발언은 11월 20일 공개됐으며 새 규칙 아님 / <br class="report-field-break" />출처: [www.theregister.com](https://www.theregister.com/off-prem/2026/11/23/trump-says-he-wont-allow-us-companies-to-build-datacenters-abroad/5311640))
- 후보: Amazon–Decart 최적화 기술 계약 후속 보도 (미포함 사유: <br class="report-field-break" />Evidence B, 기사 시각이 마감 이후이며 공식 발표와 동일 거래; 기사 가격은 채택하지 않음 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/))
- 후보: Micron의 한국 엔지니어 채용 (미포함 사유: <br class="report-field-break" />Evidence B, 서울 행사 보도가 마감 이후이며 이전 적격 공개 미확인 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261123000358))
- 후보: Nvidia 젠슨 황 CEO 복귀 (미포함 사유: <br class="report-field-break" />Evidence B, 보도가 복귀를 미국 현지 11월 23일로 특정해 KST 마감 이후 / <br class="report-field-break" />출처: [www.etnews.com](https://www.etnews.com/20261123000519))
- 후보: Walmart Agent Gateway의 Meta Muse 지원 (미포함 사유: <br class="report-field-break" />Evidence B, 보도가 마감 이후이며 이전 가용성 미확인 / <br class="report-field-break" />출처: [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/1039874/walmart-agent-gateway-meta-muse-black-friday))
- 후보: Pathway의 강화학습·에이전트 안전 반박 초안 (미포함 사유: <br class="report-field-break" />Evidence C, 최초 커밋이 마감 이후이고 주장 독립 검증 없음 / <br class="report-field-break" />출처: [api.github.com](https://api.github.com/repos/pathway/paper-rl-limits-llm-agent-safety/commits?per_page=2))
- 후보: 미 상원 AI 칩 수출통제 청문 일정 (미포함 사유: <br class="report-field-break" />Evidence B, 보도는 마감 이후이며 상원 공지 원문 접근이 차단돼 앞선 공개 미확인 / <br class="report-field-break" />출처: [techcrunch.com](https://techcrunch.com/2026/11/23/jensen-huang-scheduled-to-testify-next-week-in-senate-following-reinstatement-as-nvidia-ceo/))
- 후보: SK텔레콤의 REBEL-100 서버 40대 발주설 (미포함 사유: <br class="report-field-break" />Evidence C, 마감 이후 익명 소식통 보도이며 정확한 계약일과 실명 확인 없음 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261118165352))
- 후보: 개인정보보호위원회 AI 개발 데이터 예외 초안 의견수렴 (미포함 사유: <br class="report-field-break" />Evidence B, 정확한 보도 시각이 마감 이후이며 창 내 규제기관 원문 미확인 / <br class="report-field-break" />출처: [zdnet.co.kr](https://zdnet.co.kr/view/?no=20261123153847))

- **수록 사건 수:** 17
