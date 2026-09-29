// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const REPO = 'https://github.com/palladium-group/Data.FI-Documentation';
const FHIR_IG = 'https://palladium-group.github.io/datafi-echis-ig/';

const sections = [
  {id: 'workflows', label: 'Workflows'},
  {id: 'architecture', label: 'Architecture'},
  {id: 'integrations', label: 'Integrations'},
  {id: 'standards', label: 'Standards'},
  {id: 'implementation', label: 'Implementation'},
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eCHIS Implementation Portal',
  tagline:
    'Workflows, architecture, integrations, standards and implementation guidance for digital community health systems',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // Placeholder until hosting is agreed.
  url: 'https://example.org',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: `${REPO}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexBlog: false,
        searchResultLimits: 8,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'eCHIS Portal',
        items: [
          ...sections.map(({id, label}) => ({
            type: 'docSidebar',
            sidebarId: id,
            position: 'left',
            label,
          })),
          {href: FHIR_IG, label: 'FHIR IG', position: 'right'},
          {href: REPO, label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portal',
            items: sections.map(({id, label}) => ({label, to: `/docs/${id}/`})),
          },
          {
            title: 'Specifications',
            items: [{label: 'eCHIS FHIR Implementation Guide', href: FHIR_IG}],
          },
          {
            title: 'Contribute',
            items: [{label: 'Source on GitHub', href: REPO}],
          },
        ],
        copyright: `Data.FI · Internal working draft · ${new Date().getFullYear()}`,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
