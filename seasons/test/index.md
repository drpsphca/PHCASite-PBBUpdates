---
layout: default
title: PBB Test
permalink: /test/
description: Test PBB Season.
---

{% assign season = site.data.seasons.test.season %}
<section class="hero">
  <p class="kicker">Upcoming season</p>
  <h1>{{ season.title }}</h1>
  <p>{{ season.summary | default: "Test PBB Season" }}</p>
</section>