export interface Talk {
  year: number;
  event: string;
  location?: string;
  title: { fr: string; en: string };
  url?: string;
}

/**
 * Public speaking history, seeded from public conference archives
 * (sched.com). Review/extend before publishing.
 */
export const talks: Talk[] = [
  {
    year: 2023,
    event: 'MacAdmins Conference at Penn State',
    location: 'State College, PA, USA',
    title: {
      fr: 'Bravas : MDM & IDP pensés pour l’avenir',
      en: 'Bravas: MDM & IDP built for the future',
    },
    url: 'https://psumac2023.sched.com/event/1KGTz/bravas-mdm-idp-built-for-the-future',
  },
  {
    year: 2018,
    event: 'MacAdmins Conference at Penn State',
    location: 'State College, PA, USA',
    title: {
      fr: 'Plongée dans l’API de gestion des utilisateurs et groupes sur macOS',
      en: 'A deep dive into users & groups management API on macOS',
    },
    url: 'https://psumac2018.sched.com/speaker/ygini',
  },
  {
    year: 2018,
    event: 'MacAdmins Conference at Penn State',
    location: 'State College, PA, USA',
    title: {
      fr: 'EasyLogin Alpha, un annuaire open source (DaaS) pensé pour le Mac',
      en: 'Using EasyLogin Alpha, an Open Source DaaS made for Mac',
    },
    url: 'https://psumac2018.sched.com/speaker/ygini',
  },
  {
    year: 2017,
    event: 'MacAdmins Conference at Penn State',
    location: 'State College, PA, USA',
    title: {
      fr: 'Passé, présent et futur des services d’annuaire',
      en: 'Past, Present and Future of Directory Services',
    },
    url: 'https://psumac2017.sched.com/speaker/ygini',
  },
  {
    year: 2017,
    event: 'MacAdmins Conference at Penn State',
    location: 'State College, PA, USA',
    title: {
      fr: 'Mac Admins Capture the Flag (co-animation)',
      en: 'Mac Admins Capture the Flag (co-host)',
    },
    url: 'https://psumac2017.sched.com/speaker/ygini',
  },
  {
    year: 2016,
    event: 'MacAdmins Conference at Penn State',
    location: 'State College, PA, USA',
    title: {
      fr: 'Introduction à la sécurité offensive',
      en: 'Introduction to Offensive Security',
    },
    url: 'https://psumac2016.sched.com/speaker/ygini',
  },
  {
    year: 2016,
    event: 'Mac Admin & Developer Conference UK',
    location: 'Brighton, UK',
    title: {
      fr: 'Analyse de paquets et rétro-ingénierie (atelier)',
      en: 'Packet Sniffing and Reverse Engineering (studio)',
    },
    url: 'https://macadmindeveloperconference2016.sched.com/speaker/ygini',
  },
];
