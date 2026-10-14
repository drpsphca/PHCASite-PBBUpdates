---
layout: default
title: PBB Test - Nominations and Evictions
permalink: /test/nominations/
description: Test PBB Season.
---

<h1>Nominations and evictions</h1>
<p>Full house tally first, then the public-vote result. Red cards are nominated. Blue cards are not nominated or ineligible.</p>

{% assign tallies = site.data.seasons.test.nomination_tallies | default: empty %}
{% assign evictions = site.data.seasons.test.evictions | default: empty %}
{% if tallies.size == 0 and evictions.size == 0 %}
  <p class="empty">No nomination or eviction data yet.</p>
{% endif %}
{% for t in tallies %}
  {% for entry in t.entries %}
    {% include tally-card.html entry=entry season="test" %}
  {% endfor %}
{% endfor %}