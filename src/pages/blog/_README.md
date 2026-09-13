# /blog

Sección "Blog" del nav. A diferencia de recursos/servicios/contacto, esta ya está conectada a una content collection, así que agregar un post es solo crear un archivo Markdown (ver `src/content/blog/README.md`).

## Archivos relacionados

- `index.astro` — lista todos los posts publicados (`draft: false`), ordenados del más nuevo al más viejo.
- `[id].astro` — página de detalle de un post individual (`/blog/nombre-del-archivo/`). Se genera automáticamente uno por cada archivo `.md` en `src/content/blog/`.
- `src/content.config.ts` — define los campos que puede tener cada post (`title`, `description`, `pubDate`, `updatedDate`, `draft`).
- `src/content/blog/` — acá van los archivos `.md` de cada post.

**Importante:** si agregás un post nuevo mientras el servidor de desarrollo (`astro dev`) ya está corriendo y no aparece en `/blog/`, reiniciá el servidor (`astro dev stop` y volver a iniciarlo).
