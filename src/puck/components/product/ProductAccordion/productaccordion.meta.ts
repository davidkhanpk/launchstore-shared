export const productAccordionMeta = {
  name: 'ProductAccordion',
  label: 'Product Accordion',
  description: 'Accordion of product-detail sections (description / material / dimensions / shipping / custom HTML). Replaces @radix-ui/react-accordion with stateful CSS max-height transition \u2014 same UX, no external UI dep. Single or multi-open modes, configurable border style, default-open via comma-separated section IDs.',
  category: 'product',
  intent: ['product', 'accordion', 'details', 'specs', 'faq'],
  visualRole: 'block',
  dataDeps: ['product (injected)'],
  copyFields: ['sections.title', 'sections.customContent', 'defaultOpen'],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Each trigger is a <button> with aria-expanded. Originally the Radix primitive managed id linking (button \u2194 panel) and aria-controls/region; the simplified version drops those for the cleanest UX. Consumer wrappers can layer id+aria-controls if needed.',
  mobileBehavior: 'responsive',
  searchTags: ['product', 'accordion', 'details', 'specs', 'description', 'material', 'dimensions'],

  props: {
    sections: { type: 'array', required: true, items: '$item' },
    allowMultiple: { type: 'boolean', required: true },
    defaultOpen: { type: 'string', required: false },
    borderStyle: { type: 'enum', options: ['none', 'top', 'full'], required: true },
    product: { type: 'object', required: false },
  },
} as const;

export type ProductAccordionMeta = typeof productAccordionMeta;
