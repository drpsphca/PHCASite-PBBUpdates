---
layout: default
title: Collab 3.0 - Nominations and Evictions
permalink: /collab3/nominations/
description: View all of the nomination tallies and eviction voting results of Pinoy Big Brother Collab 3.0 here.
---

<h1>Nominations and evictions</h1>
<p>Full house tally first, then the public-vote result. Red cards are nominated. Blue cards are not nominated or ineligible.</p>

{% assign tallies = site.data.seasons.collab3.nomination_tallies | default: empty %}
{% assign evictions = site.data.seasons.collab3.evictions | default: empty %}
{% if tallies.size == 0 and evictions.size == 0 %}
  <p class="empty">No nomination or eviction data yet.</p>
{% endif %}
{% for t in tallies %}
  {% for entry in t.entries %}
    {% include tally-card.html entry=entry season="collab3" %}
  {% endfor %}
{% endfor %}