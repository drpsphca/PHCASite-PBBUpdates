---
layout: default
title: PBB Collab 3.0
permalink: /collab3/
---

{% assign season = site.data.season %}
{% assign slug = page.url | remove_first: "/" | split: "/" | first %}
{% assign pack = site.data.seasons[slug] %}
{% assign season = pack.season %}
{% assign housemates = pack.housemates %}
{% assign evictions = pack.evictions %}
{% assign tallies = pack.nomination_tallies %}
{% assign tasks = pack.weekly_tasks %}

<section class="hero">
  <p class="kicker">Upcoming season</p>
  <h1>Pinoy Big Brother: Collab 3.0</h1>
  <p>Coming soon on several ABS-CBN and GMA platforms this October 2026. Housemates, nominations, and weekly tasks will publish on the DRPS PHCA PBB Updates website and on the DRPS PHCA App when the season opens.</p>
</section>