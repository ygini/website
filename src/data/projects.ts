export interface Project {
  name: string;
  url: string;
  stars?: number;
  description: { fr: string; en: string };
  tags?: string[];
}

/**
 * Selected open-source projects (github.com/ygini). Star counts are
 * approximate snapshots; update as needed.
 */
export const projects: Project[] = [
  {
    name: 'Hello IT',
    url: 'https://github.com/ygini/Hello-IT',
    stars: 293,
    description: {
      fr: 'Application de self-service pour macOS, fournie par les équipes IT aux utilisateurs finaux.',
      en: 'A self-support menu app for macOS, provided by IT teams to end users.',
    },
    tags: ['macOS', 'IT ops'],
  },
  {
    name: 'ARD Inspector',
    url: 'https://github.com/ygini/ARD-Inspector',
    stars: 84,
    description: {
      fr: 'Outil de déchiffrement de la base Apple Remote Desktop pour accéder aux identifiants enregistrés.',
      en: 'Decrypts the Apple Remote Desktop database to access stored credentials.',
    },
    tags: ['macOS', 'security'],
  },
  {
    name: 'EstimoteEditor',
    url: 'https://github.com/ygini/EstimoteEditor',
    stars: 120,
    description: {
      fr: 'Outil pour lire et éditer les identifiants (major/minor) des beacons Estimote.',
      en: 'Reads and edits the minor/major identifiers of Estimote beacons.',
    },
    tags: ['iOS', 'BLE'],
  },
  {
    name: 'DockServiceManager',
    url: 'https://github.com/ygini/DockServiceManager',
    stars: 28,
    description: {
      fr: 'Service Swift pilotant le contenu du Dock via MDM et dockutil.',
      en: 'Swift-based service to manage Dock content via MDM and dockutil.',
    },
    tags: ['macOS', 'MDM'],
  },
  {
    name: 'ObjectiveREST',
    url: 'https://github.com/ygini/ObjectiveREST',
    stars: 13,
    description: {
      fr: 'Ajoute des capacités REST aux applications CoreData.',
      en: 'Provides REST capabilities to CoreData applications.',
    },
    tags: ['Cocoa', 'API'],
  },
  {
    name: 'cocoa-courses-fr',
    url: 'https://github.com/ygini/cocoa-courses-fr',
    stars: 14,
    description: {
      fr: 'Support de cours Cocoa en français.',
      en: 'French-language Cocoa development course material.',
    },
    tags: ['Cocoa', 'teaching'],
  },
];
