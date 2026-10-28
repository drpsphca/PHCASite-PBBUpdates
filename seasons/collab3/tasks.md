---
layout: default
title: Collab 3.0 - Weekly Tasks
permalink: /collab3/tasks/
description: View all of the nomination tallies and eviction voting results of Pinoy Big Brother Collab 3.0 here.
---

<h1>Weekly tasks</h1>
{% for t in site.data.seasons.collab3.weekly_tasks reversed %}
<article class="row">
  <div>
    <strong>Week {{ t.week }} · {{ t.title }}</strong>
    <p>{{ t.summary | newline_to_br }}</p>
    {% if t.note %}<p class="mono">{{ t.note }}</p>{% endif %}
  </div>
  {% include status-badge.html status=t.status %}
</article>
{% endfor %}