// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://juanjodigital.nom.pe',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // El sitio usa URLs sin slash final, salvo /blog/, que sí lo lleva
      // (ver Layout.astro) — el sitemap debe reflejar lo mismo.
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname.startsWith('/blog') && !url.pathname.endsWith('/')) {
          url.pathname += '/';
          item.url = url.toString();
        }
        return item;
      }
    })
  ]
});