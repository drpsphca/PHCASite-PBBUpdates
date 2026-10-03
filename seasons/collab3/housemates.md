---
layout: default
title: Collab 3.0 - Housemates
permalink: /collab3/housemates/
---

<h1>Housemates</h1>
<p>Official monikers, type, and final status. 2-in-1 pairs share a single game slot.</p>

{% assign people = site.data.seasons.collab3.housemates | default: empty | sort: "place" %}
{% if people.size == 0 %}
  <p class="empty">Housemates will be posted when the season opens.</p>
{% else %}
  {% for h in people %}
    {% include housemate-photo.html id=h.id alt=h.display_name season="collab3" %}
    <strong>{{ h.display_name }}</strong>
  {% endfor %}
{% endif %}