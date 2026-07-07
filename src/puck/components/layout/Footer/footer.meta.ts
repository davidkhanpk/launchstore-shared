export const footerMeta = {
  name: 'Footer',
  label: 'Footer',
  description: 'Site footer with up to 5 columns. Each column can be a menu (data-injected) or a newsletter signup. Optional social-links row, payment-icons row, and a bottom bar with copyright + secondary links. Presentational only — accepts pre-fetched menus via menus prop keyed by handle.',
  category: 'layout',
  intent: ['footer', 'site-footer', 'page-footer', 'menu', 'social', 'newsletter', 'copyright'],
  visualRole: 'bottom',
  dataDeps: ['menus (consumer-injected keyed by handle)'],
  copyFields: ['newsletter.title', 'newsletter.description', 'bottomBar.copyright', 'menuConfigs[].title'],
  themeable: ['backgroundColor', 'textColor', 'linkColor', 'linkHoverColor'],
  a11yRisk: 'medium',
  a11yNotes: 'Landmark role=contentinfo on <footer>. Icon-only social links must have aria-label (already added). Provide meaningful alt text on the payment icon SVGs if used.',
  mobileBehavior: 'responsive',
  searchTags: ['footer', 'site-footer', 'links', 'social', 'newsletter', 'payment', 'copyright'],

  props: {
    columns: { type: 'enum', options: ['1', '2', '3', '4', '5'], required: true },
    backgroundColor: { type: 'string', required: true },
    textColor: { type: 'string', required: true },
    linkColor: { type: 'string' },
    linkHoverColor: { type: 'string', required: true },
    menuConfigs: { type: 'array', required: true },
    newsletter: { type: 'object' },
    social: { type: 'object' },
    paymentIcons: { type: 'object' },
    bottomBar: { type: 'object' },
    paddingTop: { type: 'string', required: true },
    paddingBottom: { type: 'string', required: true },
  },
} as const;

export type FooterMeta = typeof footerMeta;
