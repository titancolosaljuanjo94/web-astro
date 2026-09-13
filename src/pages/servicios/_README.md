# /servicios

Sección "Servicios" del nav.

Por ahora `index.astro` solo muestra un mensaje de "Contenido próximamente".

## Qué va a ir acá después

El detalle completo de los 3 servicios que ya aparecen resumidos en la home (`src/pages/index.astro`, array `services`): Auditoría SEO técnica, Arquitectura de contenido, Tracking y atribución. Acá se puede explicar cada uno con más profundidad (qué incluye, entregables, precio si aplica).

## Cómo agregar contenido

- Opción simple: una sección por servicio dentro de este mismo `index.astro`.
- Opción con una página por servicio: crear `src/pages/servicios/auditoria-seo.astro`, `src/pages/servicios/arquitectura-de-contenido.astro`, etc., y linkear a ellas desde acá.
