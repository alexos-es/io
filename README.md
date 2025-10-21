# Información Ordenada · Jekyll + Bootstrap

Sitio estático minimalista listo para GitHub Pages, con colección de **Casos de éxito**.

## Uso rápido

1. Sube todo el contenido a tu repositorio de GitHub (p.ej. `informacionordenada.github.io` o `/docs`).
2. En *Settings → Pages*, selecciona la rama y carpeta raíz.
3. Edita `_config.yml` si tu repositorio es de proyecto y requiere `baseurl`.
4. Modifica `index.md` con tus textos de Servicios, Planes, Proceso y FAQ.
5. Añade más casos en `_casos/` con este patrón:

```yaml
---
layout: caso
title: "Título del caso"
date: 2025-10-21
sector: "Sector"
resumen: "Resumen breve"
retos:
  - "Reto 1"
  - "Reto 2"
solucion: >
  Texto de la solución.
resultados:
  - "Resultado 1"
  - "Resultado 2"
stack:
  - "Tecnología 1"
  - "Tecnología 2"
---

Contenido del caso…
```

## Personalización

- Logo: sustituye `assets/img/logo.jpg`.
- Estilos: `assets/css/styles.css`.
- Componentes compartidos: `_includes/header.html`, `_includes/footer.html`, `_includes/cookies.html`.
- Plantillas: `_layouts/default.html`, `_layouts/caso.html`.
