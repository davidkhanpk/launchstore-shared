export const logoMeta = {
  name: 'Logo',
  label: 'Logo',
  description: 'Logo image + optional storefront name text. Renders as an <a href> linking to the configured URL. Image-only or text-only fallback when one of imageUrl/text is empty. Plain anchor link (consumers wrap with their Link component if next.js routing is needed).',
  category: 'navigation',
  intent: ['logo', 'brand', 'site-logo', 'header', 'navigation', 'store-name'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['altText', 'text'],
  themeable: ['textColor'],
  a11yRisk: 'low',
  a11yNotes: 'Image <img> has alt text. Renders as <a> (whole element clickable) — focus ring inherited from browser default.',
  mobileBehavior: 'responsive',
  searchTags: ['logo', 'brand', 'site-logo', 'header', 'store-name', 'nav'],

  props: {
    imageUrl: { type: 'string' },
    altText: { type: 'string', required: true },
    linkTo: { type: 'string', required: true },
    maxWidth: { type: 'string', required: true },
    maxHeight: { type: 'string', required: true },
    showText: { type: 'boolean', required: true },
    text: { type: 'string', required: true },
    textPosition: { type: 'enum', options: ['right', 'below'], required: true },
    textSize: { type: 'enum', options: ['sm', 'base', 'lg', 'xl'], required: true },
    textColor: { type: 'string', required: true },
    textWeight: { type: 'enum', options: ['normal', 'medium', 'semibold', 'bold'], required: true },
  },
} as const;

export type LogoMeta = typeof logoMeta;
