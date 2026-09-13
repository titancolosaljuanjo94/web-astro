/// <reference types="astro/client" />

// Declaración global de window.dataLayer para que TypeScript no se queje
// en los <script> que hacen dataLayer.push(...) para Google Tag Manager.
interface Window {
	dataLayer: unknown[];
}
