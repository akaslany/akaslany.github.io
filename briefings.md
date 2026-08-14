---
layout: page
title: 글로벌 경제 및 리스크 브리핑
permalink: /briefings/
---

최근 24시간 내 직접 확인 가능한 허용 출처만 사용한 일일 글로벌 경제·시장·지정학 리스크 브리핑입니다.

{% assign reports = site.categories["global-risk"] %}
{% for post in reports %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% else %}
아직 공개된 브리핑이 없습니다.
{% endfor %}
