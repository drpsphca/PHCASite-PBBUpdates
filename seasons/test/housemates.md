---
layout: default
title: PBB Test - Housemates
permalink: /test/housemates/
description: Test PBB Season.
---
{% assign test_season = site.data.season_list | where: "id", "test" | first %}
{% unless test_season.available %}
<meta http-equiv="refresh" content="0; url={{ '/' | relative_url }}">
<p>This season is not available. <a href="{{ '/' | relative_url }}">Return to the main page</a>.</p>
{% else %}

<h1>Housemates</h1>
<p>Official monikers, type, and final status. 2-in-1 pairs share a single game slot.</p>

<div class="table-wrap">
<table>
  <thead>
    <tr>
      <th>#</th><th>Housemate</th><th>Moniker</th><th>Type</th><th>In</th><th>Out</th><th>Status</th><th>Nom. pts</th>
    </tr>
  </thead>
  <tbody>
  {% assign people = site.data.seasons.test.housemates | sort: "place" %}
  {% for h in people %}
    <tr>
      <td>{{ h.place }}</td>
      <td>
        <div class="hm-cell">
          {% include housemate-photo.html id=h.id alt=h.display_name season="test" %}
          <div>
            <strong>{{ h.display_name }}</strong><br>
            <small>{{ h.name }} · {{ h.hometown }}</small>
          </div>
        </div>
      </td>
      <td>{{ h.moniker }}</td>
      <td>{{ h.type }}</td>
      <td>D{{ h.day_entered }}</td>
      <td>{% if h.day_exited %}D{{ h.day_exited }}{% else %}—{% endif %}</td>
      <td>{% include status-badge.html status=h.status %}</td>
      <td>{{ h.nomination_points }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>