export const socialIconsMeta = {
  name: 'SocialIcons',
  label: 'Social Icons',
  description: 'Row of social brand icons (Facebook / Instagram / Twitter / YouTube / LinkedIn / GitHub). Inline-SVG brand marks — no external dep. Style: circle / square / minimal (no bg). Hover state via JS handlers (color + background swap).',
  category: 'footer',
  intent: ['social', 'social-icons', 'social-links', 'share', 'follow'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['links[].url'],
  themeable: ['color', 'hoverColor', 'backgroundColor', 'hoverBackgroundColor'],
  a11yRisk: 'medium',
  a11yNotes: 'Each <a> has aria-label=platform. rel="noopener noreferrer" auto-applied for external links. Icons are decorative (the link text is the platform name).',
  mobileBehavior: 'responsive',
  searchTags: ['social', 'icons', 'facebook', 'instagram', 'twitter', 'youtube', 'linkedin', 'github'],

  props: {
    links: { type: 'array', required: true },
    size: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
    style: { type: 'enum', options: ['circle', 'square', 'minimal'], required: true },
    color: { type: 'string', required: true },
    hoverColor: { type: 'string', required: true },
    backgroundColor: { type: 'string', required: true },
    hoverBackgroundColor: { type: 'string', required: true },
    gap: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true },
  },
} as const;

export type SocialIconsMeta = typeof socialIconsMeta;
