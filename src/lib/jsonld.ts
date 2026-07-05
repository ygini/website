import type { Locale } from '~/lib/paths';
import { SITE_ORIGIN } from '~/lib/paths';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '~/i18n/ui';

export function personJsonLd(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yoann Gini',
    url: SITE_ORIGIN,
    email: `mailto:${CONTACT_EMAIL}`,
    jobTitle:
      locale === 'fr'
        ? 'Consultant en informatique · Expert Apple & sécurité'
        : 'IT consultant · Apple & security expert',
    image: `${SITE_ORIGIN}/og.png`,
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
    knowsAbout: [
      'macOS administration',
      'iOS / Apple device management',
      'MDM',
      'Identity provider (IDP)',
      'Directory services',
      'Information security',
      'Reverse engineering',
      'ULM flight instruction',
    ],
    knowsLanguage: ['fr', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grans',
      postalCode: '13450',
      addressCountry: 'FR',
    },
  };
}

export function professionalServiceJsonLd(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Yoann Gini',
    url: SITE_ORIGIN,
    image: `${SITE_ORIGIN}/og.png`,
    email: `mailto:${CONTACT_EMAIL}`,
    description:
      locale === 'fr'
        ? 'Conseil en informatique (expertise Apple, sécurité, MDM/IDP) et instruction ULM multiaxe, exercés en entreprise individuelle.'
        : 'IT consulting (Apple expertise, security, MDM/IDP) and multiaxe ULM flight instruction, operated as a sole proprietorship.',
    founder: { '@type': 'Person', name: 'Yoann Gini' },
    vatID: 'FR3501741615',
    taxID: '50174161500030',
    identifier: { '@type': 'PropertyValue', name: 'SIRET', value: '50174161500030' },
    areaServed: locale === 'fr' ? 'France et international' : 'France and international',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10 rue Émile Zola',
      addressLocality: 'Grans',
      postalCode: '13450',
      addressCountry: 'FR',
    },
  };
}
