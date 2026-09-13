# /contacto

Sección "Contacto" del nav. Tiene un formulario (nombre, email, mensaje).

## Estado actual: envío simulado, no real

El formulario **todavía no envía el mensaje a ningún lado real** — no hay backend ni servicio externo conectado. Al enviarlo, el `<script>` al final de `index.astro`:

1. Hace `event.preventDefault()` (evita que el navegador intente enviarlo de verdad).
2. Empuja un evento a `window.dataLayer`:
   ```js
   {
     event: "contact_form_submit",
     form_name: "contacto",
     form_destination: "/contacto/",
   }
   ```
3. Muestra un mensaje de confirmación y limpia el formulario.

Esto es intencional por ahora: sirve para poder armar y probar un trigger en Google Tag Manager (Custom Event → nombre del evento `contact_form_submit`) **antes** de tener el envío real funcionando.

## Cómo conectar el envío real más adelante

Elegí una de estas opciones y se reemplaza/completa el bloque `<script>`:

- **Formspree / servicio similar**: en el listener del submit, hacer `fetch()` con `POST` a la URL que te den, mandando el `FormData`.
- **Netlify Forms** (si el hosting final es Netlify): agregar `data-netlify="true"` y un input hidden `form-name` al `<form>`, y dejar que el form se envíe normal (sin `preventDefault`).
- **Función serverless propia** (Vercel/Netlify Functions): mismo approach que Formspree, mandando el `fetch()` a tu propio endpoint.

En cualquier caso, conviene mantener el `dataLayer.push` como está — así el evento de GTM no depende de qué backend termines usando.

## Sobre Google Tag Manager

Todavía **no está instalado el snippet de GTM** en el sitio (no hay `<script>` de `googletagmanager.com` en `src/layouts/Layout.astro`). Este formulario ya deja `window.dataLayer` inicializado (`window.dataLayer = window.dataLayer || []`) para que funcione sin errores tanto si GTM se carga antes como después. Cuando instales el contenedor de GTM, el snippet oficial va en el `<head>` de `Layout.astro`.
