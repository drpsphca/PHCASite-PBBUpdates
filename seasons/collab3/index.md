---
layout: default
title: PBB Collab 3.0
permalink: /collab3/
description: Stay up to date with our PBB Updates Board for Pinoy Big Brother Collab 3.0.
---

{% assign season = site.data.seasons.collab3.season %}

<section class="hero">
  <p class="kicker">{{ season.short_title }}</p>
  <h1>{{ season.title }}</h1>
  <p>{{ season.premiere }} → {{ season.finale }} · {{ season.days }} days · Week {{ season.current_week }}</p>
  <p>
    {% include status-badge.html status=season.status %}
    {% if season.voting_open %}
      {% include status-badge.html status="eviction_open" %}
    {% else %}
      <span class="badge badge-safe">no live voting</span>
    {% endif %}
  </p>
</section>

<section class="card nom-board">
  <p class="kicker">Eviction desk</p>
  {% if season.voting_open %}
    <h2>Current vote standings</h2>
    <div class="tally-grid">
      {% for entry in last_tally.entries %}
        {% if entry.state == "nominated" %}
          {% assign hm = site.data.seasons.collab3.housemates | where: "id", entry.id | first %}
          <article class="tally-card desk-hidden">
            {% include housemate-photo.html id=entry.id alt=hm.display_name season="collab3" %}
            <h3>{{ hm.display_name }}</h3>
            <p class="tally-label">0.00%</p>
          </article>
        {% endif %}
      {% endfor %}
    </div>
  {% else %}
    <h2>Eviction desk</h2>
    <div class="empty">No ongoing eviction voting.</div>
  {% endif %}
</section>

{% assign last_tally = site.data.seasons.collab3.nomination_tallies | last %}
{% if last_tally %}
<section class="card block">
  <h2>Latest nomination tally</h2>
  <p class="mono">{{ last_tally.title }} · Week {{ last_tally.week }}</p>
  <div class="tally-grid">
    {% for entry in last_tally.entries %}
      {% if entry.state == "nominated" %}
        {% assign hm = site.data.seasons.collab3.housemates | where: "id", entry.id | first %}
        <article class="tally-card tally-nominated">
          {% include housemate-photo.html id=entry.id alt=hm.display_name season="collab3" %}
          <h3>{{ hm.display_name }}</h3>
          <p class="tally-label">{{ entry.label }}</p>
          {% include status-badge.html status="nominated" %}
        </article>
      {% endif %}
    {% endfor %}
  </div>
</section>
{% endif %}

<section>
  <h2>Latest weekly tasks</h2>
  <div class="list">
    {% assign tasks = site.data.seasons.collab3.weekly_tasks | reverse %}
    {% for t in tasks limit: 4 %}
      <article class="row">
        <div>
          <strong>Week {{ t.week }} · {{ t.title }}</strong>
          <p>{{ t.summary | newline_to_br }}</p>
        </div>
        {% include status-badge.html status=t.status %}
      </article>
    {% endfor %}
  </div>
</section>

<section class="card block">
  <h2>Housemates</h2>
  <div class="tally-grid">
    {% assign people = site.data.seasons.collab3.housemates | default: empty %}
    {% if people.first %}
      {% assign people = people | sort: "place" %}
    {% endif %}
    {% for h in people %}
      <article class="tally-card tally-{{ h.status }}">
        {% include housemate-photo.html id=h.id alt=h.display_name season="collab3" %}
        <h3>{{ h.display_name }}</h3>
        <p class="tally-label">{{ h.moniker }}</p>
        {% include status-badge.html status=h.status %}
      </article>
    {% endfor %}
  </div>
</section>