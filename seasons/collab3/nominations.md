---
layout: default
title: Collab 3.0 - Nominations and Evictions
permalink: /collab3/nominations/
description: View all of the nomination tallies and eviction voting results of Pinoy Big Brother Collab 3.0 here.
---

<h1>Nominations and evictions</h1>
<p>Full house tally first, then the public-vote result. Red cards are nominated. Blue cards are not nominated or ineligible.</p>

{% for t in site.data.seasons.collab3.nomination_tallies %}
<section class="block">
  <h2>{{ t.title }} · Week {{ t.week }}</h2>
  <p class="mono">{{ t.method }}{% if t.note %} · {{ t.note }}{% endif %}</p>
  <div class="tally-grid">
    {% assign is_finale = false %}
    {% if t.id >= 12 %}{% assign is_finale = true %}{% endif %}
    {% for entry in t.entries %}
      {% include tally-card.html entry=entry finale=is_finale season="collab3" %}
    {% endfor %}
  </div>
</section>
{% endfor %}

{% if e.vote_type == "save_evict" %}Save or Evict Voting
{% elsif e.vote_type == "save" %}Save Voting
{% elsif e.vote_type == "finale" %}Finale
{% else %}{{ e.vote_type }}
{% endif %}

<h2>Public vote results</h2>
{% for e in site.data.seasons.collab3.evictions reversed %}
<section class="card block">
  <h3>Week {{ e.week }} · Day {{ e.day }} · {{ e.date }}</h3>
  <p>Vote type: {% if e.vote_type == "save_evict" %}Save or Evict Voting{% elsif e.vote_type == "save" %}Save Voting{% elsif e.vote_type == "finale" %}Finale{% else %}{{ e.vote_type }}{% endif %}</p>
  <div class="tally-grid">
    {% for n in e.nominated %}
      {% assign hm = site.data.seasons.collab3.housemates | where: "id", n.id | first %}
      <article class="tally-card tally-result-{{ n.result }}{% if e.week >= 13 %} tally-finale tally-hm-{{ n.id }}{% endif %}">
      {% include housemate-photo.html id=n.id alt=hm.display_name %}
      <h3>{{ hm.display_name }}</h3>
      <p class="tally-label">{{ n.percent }}%</p>
      {% include status-badge.html status=n.result %}
  </article>
{% endfor %}

  </div>
</section>
{% endfor %}