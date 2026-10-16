export const quickLinksMeta = {
  name: 'QuickLinks',
  label: 'Quick Links',
  description:
    'A titled list of plain links — typically used in footers or help areas ("Shipping", "Returns", "Contact"). Links data is consumer-injected; the editor shows placeholders.',
  category: 'navigation',
  intent: ['navigate', 'links'],
  visualRole: 'footer-column',
  dataDeps: ['links (consumer-injected)'],
  copyFields: ['title'],
  themeable: [],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['links', 'footer', 'quick links', 'menu', 'help'],
  props: {
    title: { type: 'string', required: true, description: 'Optional heading above the list.' },
    fontSize: { type: 'enum', options: ['xs', 'sm', 'md'], required: true, description: 'Link text size.' },
  },
} as const;

export type QuickLinksMeta = typeof quickLinksMeta;
