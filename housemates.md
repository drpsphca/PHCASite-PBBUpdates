---
layout: default
title: Housemates
---

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
  {% assign people = site.data.housemates | sort: "place" %}
  {% for h in people %}
    <tr>
      <td>{{ h.place }}</td>
      <td><strong>{{ h.display_name }}</strong><br><small>{{ h.name }} · {{ h.hometown }}</small></td>
      <td>{{ h.moniker }}</td>
      <td>{{ h.type }}</td>
      <td>D{{ h.day_entered }}</td>
      <td>D{{ h.day_exited }}</td>
      <td>{% include status-badge.html status=h.status %}</td>
      <td>{{ h.nomination_points }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
