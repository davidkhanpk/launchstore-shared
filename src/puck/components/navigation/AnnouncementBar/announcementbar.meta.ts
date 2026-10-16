export const announcementBarMeta = {
  name: 'AnnouncementBar',
  label: 'Announcement Bar',
  description:
    'Thin top-of-page banner for short promotions ("Free shipping over $50"). Sits above the header on every page. Keep text under ~80 characters.',
  category: 'navigation',
  intent: ['announce', 'promote', 'shipping-offer'],
  visualRole: 'top-strip',
  dataDeps: [],
  copyFields: ['text', 'linkText'],
  themeable: ['backgroundColor', 'textColor'],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['announcement', 'banner', 'top bar', 'promo strip', 'free shipping'],
  props: {
    text: { type: 'string', required: true, description: 'The announcement message.' },
    linkText: { type: 'string', description: 'Optional CTA label; adds a link inside the bar.' },
    linkUrl: { type: 'string', description: 'URL for the CTA link.' },
    backgroundColor: { type: 'color', required: true, description: 'Token path (e.g. "brand.primary") or hex.' },
    textColor: { type: 'color', required: true, description: 'Token path (e.g. "text.inverse") or hex.' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Text alignment.' },
    fontSize: { type: 'enum', options: ['xs', 'sm', 'md'], required: true, description: 'Text size.' },
    paddingY: { type: 'enum', options: ['sm', 'md', 'lg'], required: true, description: 'Vertical padding.' },
  },
} as const;

export type AnnouncementBarMeta = typeof announcementBarMeta;
