---
layout: page
title: 미국 국채 수급 모니터
permalink: /treasury-demand/
---

발행시장 경매, 포지셔닝, 해외 공적 보관, 단기 유동성을 **4계층으로 교차 확인**하는 미국 국채 수요 리포트입니다. 한 지표로 결론을 내리지 않고, 3계층 이상이 같은 방향일 때만 신호로 인정합니다.

{% assign posts = site.categories["us-treasury-demand"] %}
{% if posts and posts.size > 0 %}
{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}

## 이 리포트가 보는 것

- **L1 발행시장** — 테너별 응찰률·간접·딜러 낙찰 비중(직전 4주 평균 대비)
- **L2 포지셔닝·가격** — CFTC TFF 자산운용/레버리지 순포지션, 커브와 레벨
- **L3 자금 흐름** — H.4.1 해외 공적 보관(주간, 액면가), TIC MFH(월간, 시차 명시)
- **L4 단기 유동성** — ON RRP, TGA, bill 순발행

자료는 모두 공개 원천에서 수집하며, 각 수치의 스냅샷 JSON을 함께 공개합니다.
