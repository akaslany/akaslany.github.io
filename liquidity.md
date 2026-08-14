---
layout: page
title: 미국 유동성 데일리 리포트
permalink: /liquidity/
---

FRED·연준 계열 공개 데이터를 이용해 Net Liquidity, TGA, ON RRP, 지급준비금, SOFR, 하이일드 스프레드 등을 점검하는 일일 리포트입니다.

{% assign posts = site.categories["us-liquidity"] %}
{% if posts and posts.size > 0 %}
{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}
