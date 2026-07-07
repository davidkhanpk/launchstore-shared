export const contactInfoMeta = {
  name: 'ContactInfo',
  label: 'Contact Info',
  description: 'Contact information block with optional address / phone / email / hours. Each item can be hidden individually. Layout stacked or grid. Each item becomes a mailto:/tel:/maps.google.com link where applicable.',
  category: 'footer',
  intent: ['contact', 'contact-info', 'address', 'phone', 'email', 'hours', 'business-info'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['address', 'phone', 'email', 'hours'],
  themeable: ['textColor', 'iconColor'],
  a11yRisk: 'medium',
  a11yNotes: 'tel/mailto/maps links are exposed via href — screen readers should announce them correctly. Icon-only decorative items hidden via showIcons=false.',
  mobileBehavior: 'responsive',
  searchTags: ['contact', 'address', 'phone', 'email', 'hours', 'maps', 'tel', 'mailto'],

  props: {
    showAddress: { type: 'boolean', required: true },
    address: { type: 'string' },
    showPhone: { type: 'boolean', required: true },
    phone: { type: 'string' },
    showEmail: { type: 'boolean', required: true },
    email: { type: 'string' },
    showHours: { type: 'boolean', required: true },
    hours: { type: 'string' },
    showIcons: { type: 'boolean', required: true },
    layout: { type: 'enum', options: ['stacked', 'grid'], required: true },
    textColor: { type: 'string', required: true },
    iconColor: { type: 'string', required: true },
    fontSize: { type: 'enum', options: ['sm', 'base'], required: true },
    gap: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
  },
} as const;

export type ContactInfoMeta = typeof contactInfoMeta;
