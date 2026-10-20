---
layout: default
title: PBB Collab 3.0
permalink: /collab3/
description: Begins on October 24, 2026 at 18:00. Catch it on ABS-CBN and GMA platforms.
---

{% assign season = site.data.seasons.collab3.season %}
<section class="hero">
  <p class="kicker">Upcoming season</p>
  <h1>{{ season.title }}</h1>
  <p>{{ season.summary | default: "Coming this October 24, 2026 on ABS-CBN and GMA platforms." }}</p>
</section>