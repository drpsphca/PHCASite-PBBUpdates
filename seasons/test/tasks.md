---
layout: default
title: PBB Test - Weekly Tasks
permalink: /test/tasks/
description: Test PBB Season.
---
{% assign test_season = site.data.season_list | where: "id", "test" | first %}
{% unless test_season.available %}
<meta http-equiv="refresh" content="0; url={{ '/' | relative_url }}">
<p>This season is not available. <a href="{{ '/' | relative_url }}">Return to the main page</a>.</p>
{% else %}
{% endunless %}

<h1>Weekly tasks</h1>
{% for t in site.data.seasons.test.weekly_tasks reversed %}
<article class="row">
  <div>
    <strong>Week {{ t.week }} · {{ t.title }}</strong>
    <p>{{ t.summary }}</p>
    {% if t.note %}<p class="mono">{{ t.note }}</p>{% endif %}
  </div>
  {% include status-badge.html status=t.status %}
</article>
{% endfor %}