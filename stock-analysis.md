---
layout: page
title: 종목 심층분석
permalink: /stock-analysis/
---

DART 공시·기업 IR·임상시험 등록자료·KRX 데이터 등 1차 자료를 우선 대조해 작성한 개별 종목 심층분석입니다.

> 각 보고서는 작성 당시의 공개 자료와 시장 데이터를 기준으로 한 정보 자료이며, 투자 권유나 수익 보장이 아닙니다. 보고서의 **기준일·유효기간·철회 기준**을 함께 확인하세요.

{% assign reports = site.categories["stock-analysis"] %}
{% for post in reports %}
- {{ post.date | date: "%Y-%m-%d" }} — [{{ post.title }}]({{ post.url | relative_url }})
{% else %}
아직 공개된 종목 분석이 없습니다.
{% endfor %}
