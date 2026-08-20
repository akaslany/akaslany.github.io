---
layout: page
title: 산업통상부 정책 투자 리포트
permalink: /motir-policy/
---

산업통상부의 전일 보도·참고자료를 정책 강도와 한국 주식시장 연관성 관점에서 정리한 일일 리포트입니다. 관련 종목은 수혜 확정이 아닌 관찰·검증 후보입니다.

{% assign posts = site.categories["motir-policy"] %}
{% if posts and posts.size > 0 %}
{% for post in posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% else %}
아직 공개된 리포트가 없습니다.
{% endif %}
