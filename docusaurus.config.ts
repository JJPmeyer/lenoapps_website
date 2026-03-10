import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Leno Apps',
  tagline: 'We build powerful apps that enhance your monday.com experience',
  favicon: 'img/favicon-32x32.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lenoapps.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JJPmeyer', // Usually your GitHub org/user name.
  projectName: 'lenoapps_website', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: '/crisp-init.js',
    },
    {
      src: '/embed-detector.js',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/leno-apps-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Leno Apps Logo',
        src: 'img/Leno_Apps_Website_logo.png',
      },
      items: [
        {
          to: '/subitem-template-builder',
          label: 'Subitem Template Builder',
          position: 'left',
        },
        {
          to: '/data-bridge',
          label: 'Data Bridge',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'mailto:support@lenoapps.com',
          label: 'Contact Us',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Apps',
          items: [
            {
              label: 'Subitem Template Builder',
              to: '/subitem-template-builder',
            },
            {
              label: 'Data Bridge',
              to: '/data-bridge',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'Subitem Docs',
              to: '/docs/intro',
            },
            {
              label: 'Data Bridge Docs',
              to: '/docs/data-bridge/intro',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Subitem Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Subitem Terms of Service',
              to: '/terms',
            },
            {
              label: 'Data Bridge Privacy Policy',
              to: '/data-bridge-privacy',
            },
            {
              label: 'Data Bridge Terms of Service',
              to: '/data-bridge-terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leno Apps.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
