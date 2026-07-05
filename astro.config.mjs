// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production canonical origin.
const SITE = 'https://yoann.gini.me';

// Base path is '/' in production. For PR previews we deploy into a
// subfolder (e.g. /pr-preview/pr-42/) and pass it through PREVIEW_BASE so
// every asset and internal link resolves under that prefix.
const base = process.env.PREVIEW_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en',
        },
      },
    }),
  ],
});
