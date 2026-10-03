---
layout: default
title: PBB Collab 3.0
permalink: /collab3/
---

{% assign season = site.data.seasons.collab3.season %}
<section class="hero">
  <p class="kicker">Upcoming season</p>
  <h1>{{ season.title }}</h1>
  <p>{{ season.summary | default: "Coming this October 2026 on ABS-CBN and GMA platforms." }}</p>
</section>