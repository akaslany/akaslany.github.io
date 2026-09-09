---
layout: page
title: 미국 유동성 데일리 리포트
permalink: /liquidity/
---

공식 연준·뉴욕 연은·미 재무부 자료를 PIT 기준으로 점검하는 유동성·자금시장 인텔리전스입니다.

{% assign posts = site.categories["us-liquidity"] %}
{% if posts and posts.size > 0 %}
{% assign recent_posts = posts | slice: 0, 5 %}
{% for post in recent_posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% if posts.size > 5 %}

[이전 보고서 전체 보기 → History]({{ "/history/#us-liquidity" | relative_url }})
{% endif %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}
