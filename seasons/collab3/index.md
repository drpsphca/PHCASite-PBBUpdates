---
layout: default
title: PBB Collab 3.0
permalink: /collab3/
description: Begins on October 24, 2026 at 18:00. Catch it on ABS-CBN and GMA platforms.
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
  <h2>Nominated this week</h2>
  {% if season.voting_open %}
    <p>Public voting is open. Save your nominated housemates.</p>
  {% else %}
    <div class="empty">No ongoing eviction voting. Season status: <strong>{{ season.status }}</strong>.</div>
  {% endif %}
</section>

<section>
  <h2>Latest weekly tasks</h2>
  <div class="list">
    {% assign tasks = site.data.seasons.collab3.weekly_tasks | reverse %}
    {% for t in tasks limit: 4 %}
      <article class="row">
        <div>
          <strong>Week {{ t.week }} · {{ t.title }}</strong>
          <p>{{ t.summary }}</p>
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