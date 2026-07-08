export const emptyCartMeta = {
  name: 'EmptyCart',
  label: 'Empty Cart Message',
  description: 'Empty-cart placeholder with title, message, link CTA, optional auto-hide when cart has items. Heroicons ArrowUpRightIcon replaced with inline SVG.',
  category: 'cart',
  intent: ['cart', 'empty', 'no-items', 'cta'],
  visualRole: 'block',
  dataDeps: ['isEmpty (cart flow)'],
  copyFields: ['title', 'message', 'linkText', 'linkUrl'],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'Plain <a> with href. Returns <></> if showOnlyWhenEmpty && !isEmpty. Mock fallback renders the empty state.',
  mobileBehavior: 'responsive',
  searchTags: ['cart', 'empty', 'no-items', 'cta'],
  props: {
    title: { type: 'string', required: true },
    message: { type: 'string', required: true },
    linkText: { type: 'string', required: true },
    linkUrl: { type: 'string', required: true },
    showOnlyWhenEmpty: { type: 'boolean', required: true },
  },
} as const;

export type EmptyCartMeta = typeof emptyCartMeta;
