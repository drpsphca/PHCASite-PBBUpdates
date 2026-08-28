---
layout: default
title: Live Board
---

{% assign season = site.data.season %}

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

<section>
  <h2>Nominated this week</h2>
  {% if season.voting_open %}
    <p>Public voting is open. Save your nominated housemates.</p>
  {% else %}
    <div class="empty">No ongoing eviction voting. Season status: <strong>{{ season.status }}</strong>.</div>
    <p>Last public result was the Big Night. Winner: <strong>Fyang Smith</strong> (30.66%).</p>
  {% endif %}
</section>

<section>
  <h2>Big 4 result</h2>
  <div class="grid">
    {% assign big4 = site.data.housemates | where_exp: "h", "h.place <= 4" %}
    {% for h in big4 %}
      <article class="card">
        <h3>{{ h.display_name }}</h3>
        <p class="mono">{{ h.moniker }}</p>
        {% include status-badge.html status=h.status %}
        <p>{{ h.vote_percent_finale }}% · Place {{ h.place }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section>
  <h2>Latest weekly tasks</h2>
  <div class="list">
    {% assign tasks = site.data.weekly_tasks | reverse %}
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