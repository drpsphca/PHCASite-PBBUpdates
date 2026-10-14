---
layout: default
title: PBB Test - Housemates
permalink: /test/housemates/
description: Test PBB Season.
---

<h1>Housemates</h1>
<p>Official monikers, type, and final status. 2-in-1 pairs share a single game slot.</p>

{% assign people = site.data.seasons.test.housemates %}
{% if people.first %}
  {% assign people = people | sort: "place" %}
  {% for h in people %}
    {% include housemate-photo.html id=h.id alt=h.display_name season="test" %}
    <strong>{{ h.display_name }}</strong>
  {% endfor %}
{% else %}
  <p class="empty">Housemates will be posted when the season opens.</p>
{% endif %}