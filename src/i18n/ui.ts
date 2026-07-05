import type { Locale } from '~/lib/paths';

/** Shared chrome strings (nav, footer, common labels). Page body copy
 * lives inline in each localized page file. */
export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.it': 'Conseil informatique',
    'nav.ulm': 'ULM',
    'nav.legal': 'Mentions légales',
    'skip': 'Aller au contenu',
    'lang.switchTo': 'English',
    'lang.switchLabel': 'Changer de langue : passer en anglais',
    'lang.badge': 'FR',
    'footer.role': 'Conseil en informatique · Instruction ULM',
    'footer.entity': 'Entreprise individuelle',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Ce site est statique, sans cookie ni traceur.',
    'footer.nav': 'Navigation',
    'footer.elsewhere': 'Ailleurs',
    'meta.author': 'Yoann Gini',
  },
  en: {
    'nav.home': 'Home',
    'nav.it': 'IT consulting',
    'nav.ulm': 'ULM',
    'nav.legal': 'Legal notice',
    'skip': 'Skip to content',
    'lang.switchTo': 'Français',
    'lang.switchLabel': 'Change language: switch to French',
    'lang.badge': 'EN',
    'footer.role': 'IT consulting · ULM instruction',
    'footer.entity': 'Sole proprietorship (entreprise individuelle)',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'This site is static, with no cookies or trackers.',
    'footer.nav': 'Navigation',
    'footer.elsewhere': 'Elsewhere',
    'meta.author': 'Yoann Gini',
  },
} as const;

export type UiKey = keyof (typeof ui)['fr'];

export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui.fr[key];
  };
}

/** External profiles featured across the site. */
export const SOCIAL_LINKS = {
  github: 'https://github.com/ygini',
  linkedin: 'https://www.linkedin.com/in/ygini',
  ffplum: 'https://www.ffplum.fr',
  nostradamus: 'https://www.ulm-nostradamus.fr',
} as const;

export const CONTACT_EMAIL = 'y@gini.me';
