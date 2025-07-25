import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tiny Tree Solutions',
  tagline: 'We build powerful apps that enhance your monday.com experience',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tinytreesolutions.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tinytreesolutions', // Usually your GitHub org/user name.
  projectName: 'tiny-tree-solutions-website', // Usually your repo name.

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
          editUrl:
            'https://github.com/tinytreesolutions/tiny-tree-solutions-website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/tiny-tree-social-card.jpg',
    navbar: {
      title: 'Tiny Tree Solutions',
      logo: {
        alt: 'Tiny Tree Solutions Logo',
        src: 'img/tiny-tree-logo.svg',
      },
      items: [
        {
          to: '/subitem-template-builder',
          label: 'Subitem Template Builder',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'subitemTemplateBuilderSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'mailto:support@tinytreesolutions.com',
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
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/terms',
            },
            {
              label: 'Cookies Policy',
              to: '/cookies',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tiny Tree Solutions. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
