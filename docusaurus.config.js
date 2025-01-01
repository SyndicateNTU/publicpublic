// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syndicate',
  tagline: 'The Student Community for CS and CE Undergrads',
  url: 'https://syndicate.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'syndicate',
  projectName: 'syndicate-docs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/syndicate/syndicate-docs/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/syndicate/syndicate-docs/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'syndicate, ntu, student organization, workshops, students, learning, engineering, documentation, blog',
        },
      ],
      image: 'images/syndicate-full.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: false,
        },
      },
      navbar: {
        title: 'Syndicate',
        logo: {
          alt: 'Syndicate Logo',
          src: 'images/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            html: `
            <div style="display:flex;align-items:center">
              <img src="https://img.shields.io/github/stars/SyndicateNTU/cli?style=social" alt="GitHub stars" />
            </div>
            `,
            href: 'https://github.com/SyndicateNTU',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Join Us Now',
                to: '/docs/getting-started',
              },
              {
                label: 'Want to Sponsor Us?',
                to: '/docs/Support',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://github.com/SyndicateNTU',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Current Projects',
                href: '#',
              },
              {
                label: 'Upcoming Workshops',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Syndicate.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
