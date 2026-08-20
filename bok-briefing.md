---
layout: page
title: 한국은행 보도자료 브리핑
permalink: /bok-briefing/
---

한국은행의 전일 보도자료를 통화정책·금융시장·외환·경제지표·금융안정 관점에서 정리한 일일 브리핑입니다.

{% assign posts = site.categories["bok-briefing"] %}
{% if posts and posts.size > 0 %}
{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
아직 공개된 브리핑이 없습니다.
{% endif %}
