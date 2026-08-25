---
layout: page
title: 미국·한국 증시 주간 핵심 일정
permalink: /market-calendar/
---

매주 일요일, 다가오는 월요일부터 금요일까지의 미국·한국 증시 핵심 일정을 한국시간 기준으로 정리합니다.

{% assign reports = site.categories["weekly-market-calendar"] %}
{% for post in reports %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% else %}
아직 공개된 주간 일정이 없습니다.
{% endfor %}
