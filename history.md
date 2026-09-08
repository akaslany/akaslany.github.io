---
layout: page
title: History
permalink: /history/
---

각 항목의 최신 5개를 제외한 이전 보고서 모음입니다.

{% assign sections = "global-risk|글로벌 경제 및 리스크 브리핑,ai-daily-intel|AI Daily Intel,bok-briefing|한국은행 보도자료 브리핑,us-liquidity|미국 유동성 데일리 리포트,weekly-market-calendar|미국·한국 증시 주간 핵심 일정,motir-policy|산업통상부 정책 투자 리포트,stock-analysis|종목 심층분석,us-policy-intel|미국 정책 인텔리전스 데일리" | split: "," %}
{% for section in sections %}
{% assign parts = section | split: "|" %}
{% assign category = parts[0] %}
{% assign label = parts[1] %}
{% assign posts = site.categories[category] %}
{% assign archived_posts = posts | slice: 5, posts.size %}
<span id="{{ category }}"></span>
## {{ label }}

{% for post in archived_posts %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% else %}
아직 History로 이동한 보고서가 없습니다.
{% endfor %}

{% endfor %}