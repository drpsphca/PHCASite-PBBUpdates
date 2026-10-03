---
layout: default
title: Gen 11 - Weekly Tasks
permalink: /gen11/tasks/
description: View all of weekly tasks done by the housemates of Pinoy Big Brother Gen 11 here.
---

<h1>Weekly tasks</h1>
{% for t in site.data.seasons.gen11.weekly_tasks reversed %}
<article class="row">
  <div>
    <strong>Week {{ t.week }} · {{ t.title }}</strong>
    <p>{{ t.summary }}</p>
    {% if t.note %}<p class="mono">{{ t.note }}</p>{% endif %}
  </div>
  {% include status-badge.html status=t.status %}
</article>
{% endfor %}