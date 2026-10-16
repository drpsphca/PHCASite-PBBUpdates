---
layout: default
title: PBB Test - Nominations and Evictions
permalink: /test/nominations/
description: Test PBB Season.
---

<h1>Nominations and evictions</h1>
<p>Full house tally first, then the public-vote result. Red cards are nominated. Blue cards are not nominated or ineligible.</p>

{% for t in site.data.seasons.test.nomination_tallies %}
<section class="block">
  <h2>{{ t.title }} · Week {{ t.week }}</h2>
  <p class="mono">{{ t.method }}{% if t.note %} · {{ t.note }}{% endif %}</p>
  <div class="tally-grid">
    {% assign is_finale = false %}
    {% if t.id >= 12 %}{% assign is_finale = true %}{% endif %}
    {% for entry in t.entries %}
      {% include tally-card.html entry=entry finale=is_finale season="test" %}
    {% endfor %}
  </div>
</section>
{% endfor %}

<h2>Public vote results</h2>
{% for e in site.data.seasons.test.evictions reversed %}
<section class="card block">
  <h3>Week {{ e.week }} · Day {{ e.day }} · {{ e.date }}</h3>
  <p>Vote type: <code>{{ e.vote_type }}</code></p>
  {% if e.desk_state == "partial" or e.desk_state == "eviction_night" or e.desk_state == "closed_tally" %}
    <p class="mono">Voting results as of {{ e.results_as_of | date: "%b %d, %Y %I:%M %p" }}</p>
  {% endif %}
  <div class="tally-grid">
    {% for n in e.nominated %}
      {% assign hm = site.data.seasons.test.housemates | where: "id", n.id | first %}
      <article class="tally-card {% if e.desk_state == 'closed_revealed' %}tally-result-{{ n.result }}{% else %}desk-hidden{% endif %}">
        {% if e.desk_state == "closed_revealed" %}
          {% include housemate-photo.html id=n.id alt=hm.display_name season="test" %}
          <h3>{{ hm.display_name }}</h3>
        {% else %}
          <img class="hm-photo" src="{{ '/assets/img/misc/misc_hm.png' | relative_url }}" alt="{{ n.label | default: 'Nominee' }}">
          <h3>{{ n.label | default: "Nominee" }}</h3>
        {% endif %}
        <p class="tally-label">{{ n.percent | default: 0.00 }}%</p>
        {% if e.desk_state == "closed_revealed" %}
          {% include status-badge.html status=n.result %}
        {% else %}
          {% include status-badge.html status=n.result %}
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
{% endfor %}