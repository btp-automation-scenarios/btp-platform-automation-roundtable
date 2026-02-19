import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SAP BTP Platform Automation Roundtable - Landing Page',
  tagline: 'Central Landing page for or the sessions of the SAP BTP Platform Automation Roundtable focusing on the BTP CLI and Terraform.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  //url: 'https://github.com/',
  url: 'https://btp-automation-scenarios.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/sap/btp-diagram-guideline',
  baseUrl: '/btp-platform-automation-roundtable/',
  githubHost: 'github.com',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'btp-automation-scenarios', // Usually your GitHub org/user name.
  projectName: 'btp-platform-automation-roundtable', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'log',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  plugins: [
    './src/plugins/init-ui5-theme',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
      }
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
        disableSwitch: false
      },
      metadata: [
        {
          name: 'keywords',
          content: 'sap, btp, terraform, automation, iac, opentofu, btp cli, platform automation roundtable',
        },
      ],
      image: 'img/thumbnail.png',
      navbar: {
        title: 'SAP BTP Platform Automation Roundtable',
        logo: {
          alt: 'Roundtable Logo',
          src: 'img/logo.jpeg',
        },
        hideOnScroll: false,
        items: [

          {
            type: 'docSidebar',
            sidebarId: 'roundtable_landingpage',
            position: 'right',

            label: 'Sessions',
            className: 'navbar__link--demo__res',
          },

          {
            position: 'right',
            title: 'Visit GitHub Repository',
            className: 'navbar__link--demo__repo',
            href: 'https://github.com/btp-automation-scenarios/btp-platform-automation-roundtable',

          },

        ],

      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
              }
            ],
          },
          {
            title: 'GitHub',
            items: [

              {
                label: 'GitHub Repository',
                href: 'https://github.com/btp-automation-scenarios/btp-platform-automation-roundtable',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/btp-automation-scenarios/btp-platform-automation-roundtable/issues',
              }
            ],
          },
        ]

      },

      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            dark: '#171717',
            light: '#ffffff'
          }
        }
      },
    } satisfies Preset.ThemeConfig,
};

module.exports = config;
