---
layout: default
title: PBB Updates Board from DRPS PHCA
permalink: /
season: home
---

<section class="hero">
  <p class="kicker">Previous season</p>
  <h1><a href="{{ '/collab3/' | relative_url }}">Pinoy Big Brother: Collab 3.0</a></h1>
  <p>Now airing on GMA, ABS-CBN Entertainment YouTube, iWant, and Kapamilya Online Live. <a href="{{ '/collab3/' | relative_url }}">Go here.</a></p>
  <p>
    <a href="{{ '/collab3/housemates/' | relative_url }}">Housemates</a> ·
    <a href="{{ '/collab3/nominations/' | relative_url }}">Nominations</a> ·
    <a href="{{ '/collab3/tasks/' | relative_url }}">Weekly tasks</a>
  </p>
</section>

<div class="season-cards">
  {% for s in site.data.season_list %}
    {% if s.available %}
    <a class="season-card" href="{{ s.href | relative_url }}">
      <p class="kicker">{{ s.label }}</p>
      <h2>{{ s.label }}</h2>
      <p>{{ s.summary }}</p>
    </a>
    {% endif %}
  {% endfor %}
</div>