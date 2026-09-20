---
layout: page
title: Trump Truth Social 발언 요약
permalink: /trump-truth/
---

Donald J. Trump의 Truth Social 최근 24시간 게시물을 원문에 충실하게 한국어로 정리합니다. 게시자의 주장은 독립적으로 검증된 사실과 구분해 표시합니다.

{% assign posts = site.categories["trump-truth"] %}
{% if posts and posts.size > 0 %}
## 최근 보고서
{% assign recent_posts = posts | slice: 0, 5 %}
{% for post in recent_posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% if posts.size > 5 %}

[이전 보고서 전체 보기 → History]({{ "/history/#trump-truth" | relative_url }})
{% endif %}
{% else %}
아직 공개된 보고서가 없습니다.
{% endif %}
