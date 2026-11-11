# src/content/blog

Acá van los posts del blog, uno por archivo `.md`.

## Cómo crear un post nuevo

Crea un archivo, por ejemplo `src/content/blog/mi-primer-post.md`, con este formato:

```md
---
title: "Título del post"
description: "Resumen corto para la lista del blog y para SEO."
pubDate: 2026-01-15
cover: ./img/mi-primer-post.jpg
coverAlt: "Descripción breve de la foto"
draft: false
---

Acá va el contenido del post, en Markdown normal.
```

- El nombre del archivo (sin `.md`) se convierte en la URL: `mi-primer-post.md` → `/blog/mi-primer-post/`.
- `draft: true` oculta el post de la lista sin borrarlo (útil para dejarlo a medio escribir).
- `cover` es la **foto de portada** (recomendada): guárdala en `src/content/blog/img/` y ponla con ruta relativa. Ideal 1600×900 px (16:9), JPG o WebP. Se muestra arriba del post, como miniatura en /blog/ y como imagen al compartir en redes. Si falta, el build muestra un aviso; si la pones, `coverAlt` es obligatorio.
- `updatedDate` es opcional, solo si editás un post viejo y querés mostrar que se actualizó.

Los campos disponibles están definidos en `src/content.config.ts` — si necesitás un campo nuevo (por ejemplo una imagen de portada), se agrega ahí.
