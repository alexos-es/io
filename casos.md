---
layout: default
title: Casos de éxito
permalink: /casos/
---

<h1 class="h2 mb-4">Casos de éxito</h1>

<div class="row g-3">
  {% assign items = site.casos | sort: 'date' | reverse %}
  {% for c in items %}
  <div class="col-md-6 col-lg-4">
    <a href="{{ c.url | relative_url }}" class="text-decoration-none text-reset">
      <div class="card h-100 card-hover">
        <div class="card-body">
          <p class="text-uppercase small text-muted mb-1">Caso</p>
          <h2 class="h5 mb-1">{{ c.title }}</h2>
          <p class="small text-muted mb-0">{{ c.sector }}</p>
        </div>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
