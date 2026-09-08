---
layout: page
title: AI Daily Intel
permalink: /ai-intel/
---

검증 가능한 공개 출처를 바탕으로 AI 산업·모델·인프라의 핵심 신호를 투자자·개발자 관점에서 정리한 일일 인텔리전스입니다.

{% assign posts = site.categories["ai-daily-intel"] %}
{% if posts and posts.size > 0 %}
{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}
