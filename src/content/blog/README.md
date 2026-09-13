# src/content/blog

Acá van los posts del blog, uno por archivo `.md`.

## Cómo crear un post nuevo

Crea un archivo, por ejemplo `src/content/blog/mi-primer-post.md`, con este formato:

```md
---
title: "Título del post"
description: "Resumen corto para la lista del blog y para SEO."
pubDate: 2026-01-15
draft: false
---

Acá va el contenido del post, en Markdown normal.
```

- El nombre del archivo (sin `.md`) se convierte en la URL: `mi-primer-post.md` → `/blog/mi-primer-post/`.
- `draft: true` oculta el post de la lista sin borrarlo (útil para dejarlo a medio escribir).
- `updatedDate` es opcional, solo si editás un post viejo y querés mostrar que se actualizó.

Los campos disponibles están definidos en `src/content.config.ts` — si necesitás un campo nuevo (por ejemplo una imagen de portada), se agrega ahí.
