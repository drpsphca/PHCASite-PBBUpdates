---
layout: default
title: Gen 11 - Nominations and Evictions
permalink: /gen11/nominations
---

<h1>Nominations and evictions</h1>
<p>Full house tally first, then the public-vote result. Red cards are nominated. Blue cards are not nominated or ineligible.</p>

{% for t in site.data.nomination_tallies %}
<section class="block">
  <h2>{{ t.title }} · Week {{ t.week }}</h2>
  <p class="mono">{{ t.method }}{% if t.note %} · {{ t.note }}{% endif %}</p>
  <div class="tally-grid">
    {% assign is_finale = false %}
    {% if t.id >= 12 %}{% assign is_finale = true %}{% endif %}
    {% for entry in t.entries %}
      {% include tally-card.html entry=entry finale=is_finale %}
    {% endfor %}
  </div>
</section>
{% endfor %}

<h2>Public vote results</h2>
{% for e in site.data.evictions reversed %}
<section class="card block">
  <h3>Week {{ e.week }} · Day {{ e.day }} · {{ e.date }}</h3>
  <p>Vote type: <code>{{ e.vote_type }}</code></p>
  <div class="tally-grid">
    {% for n in e.nominated %}
      {% assign hm = site.data.housemates | where: "id", n.id | first %}
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