---
layout: default
title: PBB Test
permalink: /test/
description: Test PBB Season.
---

{% assign test_season = site.data.season_list | where: "id", "test" | first %}
{% unless test_season.available %}
<meta http-equiv="refresh" content="0; url={{ '/' | relative_url }}">
<p>This season is not available. <a href="{{ '/' | relative_url }}">Return to the main page</a>.</p>
{% else %}

{% assign season = site.data.seasons.test.season %}

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

{% assign latest = site.data.seasons.test.evictions | last %}

<section class="card nom-board">
  <p class="kicker">Eviction desk</p>

  {% if latest.desk_state == "started" %}
    <h2>Current vote standings</h2>
    <div class="tally-grid">
      {% for n in latest.nominated %}
        <article class="tally-card desk-hidden">
          <img class="hm-photo" src="{{ '/assets/img/misc/misc_hm.png' | relative_url }}" alt="{{ n.label }}">
          <h3>{{ n.label }}</h3>
          <p class="tally-label">0.00%</p>
        </article>
      {% endfor %}
    </div>

{% elsif latest.desk_state == "partial" or latest.desk_state == "eviction_night" or latest.desk_state == "closed_tally" %}
  <h2>Current vote standings</h2>
  <p class="mono">Voting results as of {{ latest.results_as_of | date: "%b %d, %Y %I:%M %p" }}</p>
  <div class="tally-grid">
    {% for n in latest.nominated %}
      <article class="tally-card desk-hidden">
        <img class="hm-photo" src="{{ '/assets/img/misc/misc_hm.png' | relative_url }}" alt="{{ n.label }}">
        <h3>{{ n.label }}</h3>
        <p class="tally-label">{{ n.percent | default: 0.00 }}%</p>
      </article>
    {% endfor %}
  </div>

  {% elsif latest.desk_state == "closed_revealed" %}
    <h2>Final votes tally</h2>
    <div class="tally-grid">
      {% for n in latest.nominated %}
        {% assign hm = site.data.seasons.test.housemates | where: "id", n.id | first %}
        <article class="tally-card tally-result-{{ n.result }}">
          {% include housemate-photo.html id=n.id alt=hm.display_name season="test" %}
          <h3>{{ hm.display_name }}</h3>
          <p class="tally-label">{{ n.percent }}%</p>
          {% include status-badge.html status=n.result %}
        </article>
      {% endfor %}
    </div>
  {% endif %}
</section>

  {% assign last_tally = site.data.seasons.test.nomination_tallies | last %}
  {% if last_tally %}
  <section class="card block">
    <h2>Latest Nomination Tally</h2>
    <p class="mono">{{ last_tally.title }} · Week {{ last_tally.week }}</p>
    <div class="tally-grid">
      {% for entry in last_tally.entries %}
        {% if entry.state == "nominated" %}
          {% include tally-card.html entry=entry season="test" %}
        {% endif %}
      {% endfor %}
    </div>
  </section>
  {% endif %}

<section>
  <h2>Big 4 result</h2>
  <div class="grid">
    {% include housemate-photo.html id=h.id alt=h.display_name class="hm-photo-lg" %}
    {% assign big4 = site.data.seasons.test.housemates | where_exp: "h", "h.place <= 4" %}
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

{% assign last_tally = site.data.seasons[season.id].nomination_tallies | last %}
{% if last_tally %}
<section>
  <h2>Recent nomination tally</h2>
  <p class="mono">{{ last_tally.title }} · Week {{ last_tally.week }}</p>
  <div class="tally-grid">
    {% for entry in last_tally.entries %}
      {% if entry.state == "nominated" %}
        {% include tally-card.html entry=entry season=season.id %}
      {% endif %}
    {% endfor %}
  </div>
</section>
{% endif %}

<section>
  <h2>Latest weekly tasks</h2>
  <div class="list">
    {% assign tasks = site.data.seasons.test.weekly_tasks | reverse %}
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
    {% assign people = site.data.seasons.test.housemates | default: empty %}
    {% if people.first %}
      {% assign people = people | sort: "place" %}
    {% endif %}
    {% for h in people %}
      <article class="tally-card tally-{{ h.status }}">
        {% include housemate-photo.html id=h.id alt=h.display_name season="test" %}
        <h3>{{ h.display_name }}</h3>
        <p class="tally-label">{{ h.moniker }}</p>
        {% include status-badge.html status=h.status %}
      </article>
    {% endfor %}
  </div>
</section>