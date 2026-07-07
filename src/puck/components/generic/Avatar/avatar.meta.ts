export const avatarMeta = {
  name: 'Avatar',
  label: 'Avatar',
  description: 'Circular or square avatar with image (src) or initials fallback. Initials computed from name field (first letter of each word, max 2). Optional name label inline or below. Background/text colors themable via resolveColor.',
  category: 'generic',
  intent: ['avatar', 'user-avatar', 'profile', 'initials', 'account'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['name'],
  themeable: ['backgroundColor', 'textColor'],
  a11yRisk: 'medium',
  a11yNotes: 'When src is provided, <img> alt=name is the screen reader announcement. Initials-only avatar should ideally have aria-label=name. Decorative avatars inside card layouts can have alt="" + aria-hidden=true.',
  mobileBehavior: 'responsive',
  searchTags: ['avatar', 'user', 'profile', 'initials', 'account', 'profile-pic'],

  props: {
    src: { type: 'string' },
    name: { type: 'string', required: true },
    size: { type: 'enum', options: ['sm', 'md', 'lg', 'xl'], required: true },
    shape: { type: 'enum', options: ['circle', 'square'], required: true },
    showName: { type: 'boolean', required: true },
    namePosition: { type: 'enum', options: ['right', 'bottom'], required: true },
    backgroundColor: { type: 'string', required: true },
    textColor: { type: 'string', required: true },
  },
} as const;

export type AvatarMeta = typeof avatarMeta;
