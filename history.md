---
layout: page
title: History
permalink: /history/
---

글로벌 경제 및 리스크 브리핑의 이전 보고서 모음입니다. 최신 5개는 [브리핑 페이지]({{ "/briefings/" | relative_url }})에서 확인할 수 있습니다.

{% assign reports = site.categories["global-risk"] %}
{% assign archived_reports = reports | slice: 5, reports.size %}
{% for post in archived_reports %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% else %}
아직 History로 이동한 보고서가 없습니다.
{% endfor %}