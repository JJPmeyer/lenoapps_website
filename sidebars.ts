import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Data Bridge',
      items: [
        'data-bridge/intro',
        {
          type: 'category',
          label: 'Getting Started',
          items: ['data-bridge/installation', 'data-bridge/template-manager'],
        },
        {
          type: 'category',
          label: 'Pricing',
          items: ['data-bridge/pricing/plans'],
        },
        {
          type: 'category',
          label: 'Support',
          items: ['data-bridge/support/contact'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Subitem Template Builder',
      items: [
        'intro',
        {
          type: 'category',
          label: 'Getting Started',
          items: ['installation', 'first-template', 'editing-templates'],
        },
        {
          type: 'category',
          label: 'Pricing',
          items: ['pricing/plans'],
        },
        {
          type: 'category',
          label: 'Support',
          items: ['support/contact'],
        },
      ],
    },
  ],
}

export default sidebars
