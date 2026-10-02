---
layout: default
title: PBB Updates Board from DRPS PHCA
permalink: /
season: home
---

<section class="hero">
  <p class="kicker">Previous season</p>
  <h1><a href="{{ '/gen11/' | relative_url }}">Pinoy Big Brother: Gen 11</a></h1>
  <p>July 20 to October 26, 2024. Winner <a href="{{ '/gen11/' | relative_url }}">Fyang Smith</a> (30.66%).</p>
  <p>
    <a href="{{ '/gen11/housemates/' | relative_url }}">Housemates</a> ·
    <a href="{{ '/gen11/nominations/' | relative_url }}">Nominations</a> ·
    <a href="{{ '/gen11/tasks/' | relative_url }}">Weekly tasks</a>
  </p>
</section>

<div class="season-cards">
  {% for s in site.data.seasons %}
  <a class="season-card" href="{{ s.href | relative_url }}">
    <p class="kicker">{{ s.label }}</p>
    <h2>{{ s.label }}</h2>
    <p>{{ s.summary }}</p>
  </a>
  {% endfor %}
</div>