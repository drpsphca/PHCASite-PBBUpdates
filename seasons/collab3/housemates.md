---
layout: default
title: Collab 3.0 - Housemates
permalink: /collab3/housemates/
description: View all of the housemates of Pinoy Big Brother Collab 3.0 here.
---

<h1>Housemates</h1>
<p>Official monikers, type, and final status. 2-in-1 pairs share a single game slot.</p>

{% assign people = site.data.seasons.collab3.housemates %}
{% if people.first %}
  {% assign people = people | sort: "place" %}
  {% for h in people %}
    {% include housemate-photo.html id=h.id alt=h.display_name season="collab3" %}
    <strong>{{ h.display_name }}</strong>
  {% endfor %}
{% else %}
  <p class="empty">Housemates will be posted when the season opens.</p>
{% endif %}