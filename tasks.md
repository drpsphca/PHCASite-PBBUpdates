---
layout: default
title: Weekly Tasks
---

<h1>Weekly tasks</h1>
{% for t in site.data.weekly_tasks %}
<article class="row">
  <div>
    <strong>Week {{ t.week }} · {{ t.title }}</strong>
    <p>{{ t.summary }}</p>
    {% if t.note %}<p class="mono">{{ t.note }}</p>{% endif %}
  </div>
  {% include status-badge.html status=t.status %}
</article>
{% endfor %}