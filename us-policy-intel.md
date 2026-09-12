---
layout: page
title: 미국 정책 인텔리전스 데일리
permalink: /us-policy-intel/
---

미국 정부 공식 발표를 산업정책·공급망·무역·에너지와 한국 산업/KRX 연결 관점에서 정리한 데일리 리포트입니다.

{% assign posts = site.categories["us-policy-intel"] %}
{% if posts and posts.size > 0 %}
## 최근 보고서
{% for post in posts limit:5 %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% if posts.size > 5 %}

## 이전 보고서

**[History에서 이전 보고서 전체 보기 →]({{ '/history/#us-policy-intel' | relative_url }})**
{% endif %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}
