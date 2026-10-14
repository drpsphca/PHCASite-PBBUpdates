---
layout: default
title: PBB Test - Weekly Tasks
permalink: /test/tasks/
description: Test PBB Season.
---

<h1>Weekly tasks</h1>

{% assign tasks = site.data.seasons.test.weekly_tasks | default: empty %}
{% if tasks.size == 0 %}
  <p class="empty">No weekly tasks yet.</p>
{% endif %}
{% for t in tasks %}
  <article class="row">
    <strong>Week {{ t.week }} · {{ t.title }}</strong>
    {% include status-badge.html status=t.status %}
  </article>
{% endfor %}