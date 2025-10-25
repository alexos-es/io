# Información Ordenada — Fix Pack

Este paquete corrige la estructura del sitio para desplegar correctamente en GitHub Pages con dominio personalizado **informacionordenada.es**.

### Cambios clave
- ✅ Se elimina `.git/` del paquete de publicación.
- ✅ Se unifican las páginas legales en `content/` y se eliminan duplicados: `legal.html` y `privacidad.html`.
- ✅ Se conserva `index.html` en raíz como portada única (se elimina `content/index.md` para evitar conflicto).
- ✅ `_config.yml` actualizado: `url: "https://informacionordenada.es"` y `baseurl: ""`.
- ✅ Se integra **Bootstrap 5** por CDN en `_includes/head.html` y se añade el bundle JS en `_layouts/default.html`.
- ✅ Se respetan tus estilos en `assets/css/main.css`, cargando después de Bootstrap para prevalecer.

### Estructura recomendada
- `_layouts/`, `_includes/`: plantillas comunes.
- `assets/`: CSS, imágenes, etc.
- `content/`: páginas tipo `/legal/`, `/privacidad/` generadas con permalink bonito (`/:path/`).

### Publicación
1. Sube todo el contenido de esta carpeta al repositorio de GitHub Pages del proyecto.
2. Asegúrate de incluir el archivo `CNAME` con: `informacionordenada.es`.
3. Activa GitHub Pages (si no lo está) con **Build and deployment → GitHub Actions** o **Pages** clásico.

Cualquier ajuste futuro (nuevas secciones/páginas) crea un `.md` en `content/` con front matter y se publicará en `/:path/`.
