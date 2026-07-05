export type Locale = 'fr' | 'en';
export type PageId = 'home' | 'it' | 'ulm' | 'legal';

export const LOCALES: Locale[] = ['fr', 'en'];
export const DEFAULT_LOCALE: Locale = 'fr';

/** Production origin, used for canonical + hreflang (always base '/'). */
export const SITE_ORIGIN = 'https://yoann.gini.me';

/**
 * Base path injected at build time. '/' in production, or
 * '/pr-preview/pr-<n>/' for PR previews (via PREVIEW_BASE).
 */
const BASE = import.meta.env.BASE_URL;

/** Prefix an app-absolute path with the (possibly preview) base path. */
export function withBase(path: string): string {
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}` || '/';
}

/** FR/EN route table. FR lives at the root, EN under /en/. */
export const ROUTES: Record<PageId, Record<Locale, string>> = {
  home: { fr: '/', en: '/en/' },
  it: { fr: '/conseil-informatique/', en: '/en/it-consulting/' },
  ulm: { fr: '/ulm/', en: '/en/ulm/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
};

/** Base-aware internal link for a page in a given locale. */
export function localizedPath(page: PageId, locale: Locale): string {
  return withBase(ROUTES[page][locale]);
}

/** Absolute production URL (ignores preview base) for canonical/hreflang. */
export function canonicalUrl(page: PageId, locale: Locale): string {
  return new URL(ROUTES[page][locale], SITE_ORIGIN).href;
}

/** The other locale (for the language switcher). */
export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
