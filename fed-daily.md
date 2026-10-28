---
layout: page
title: FED 일일 브리프
permalink: /fed-daily/
---

연준 이사회(Board of Governors)와 12개 지구 연은, FRED 릴리스 캘린더, 애틀랜타 GDPNow 등 22개 소스를 매일 확인해 **미국 동부(ET) 기준 당일** 발표된 지표와 새로 올라온 자료를 정리합니다. 매일 08:00 KST 갱신.

{% assign posts = site.categories["fed-daily"] %}
{% if posts and posts.size > 0 %}
{% assign recent_posts = posts | slice: 0, 5 %}
{% for post in recent_posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% if posts.size > 5 %}

## 이전 브리프

**[History에서 이전 보고서 전체 보기 →]({{ "/history/#fed-daily" | relative_url }})**
{% endif %}
{% else %}
아직 공개된 브리프가 없습니다.
{% endif %}
