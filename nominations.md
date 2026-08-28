---
layout: default
title: Nominations & Evictions
---

<h1>Nominations & evictions</h1>
<p>Public vote percentages as published. Early weeks used save–evict; later weeks used vote-to-save.</p>

{% assign lookup = site.data.housemates | map: "id" %}
{% for e in site.data.evictions reversed %}
<section class="card block">
  <h2>Week {{ e.week }} · Day {{ e.day }} · {{ e.date }}</h2>
  <p>Vote type: <code>{{ e.vote_type }}</code></p>
  <ul>
    {% for n in e.nominated %}
      {% assign hm = site.data.housemates | where: "id", n.id | first %}
      <li>
        <strong>{{ hm.display_name }}</strong> — {{ n.percent }}%
        {% include status-badge.html status=n.result %}
      </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
