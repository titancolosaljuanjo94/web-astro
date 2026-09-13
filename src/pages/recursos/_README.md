# /recursos

Sección "Recursos y experimentos" del nav.

Por ahora `index.astro` solo muestra un mensaje de "Contenido próximamente".

## Qué va a ir acá después

Herramientas, plantillas, checklists o experimentos de SEO/growth que quieras compartir (por ejemplo: una plantilla de auditoría, una calculadora, un caso de estudio corto).

## Cómo agregar contenido

- Si son pocos recursos y no cambian seguido: agrégalos directo en `index.astro`, siguiendo el mismo patrón que las tarjetas de servicios de la home (`src/components/ServiceCard.astro`).
- Si van a ser varios y cada uno necesita su propia página: se puede armar una content collection igual a la del blog (ver `src/content.config.ts` y `src/content/blog/README.md`).
