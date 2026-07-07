export const iconMeta = {
  name: 'Icon',
  label: 'Icon',
  description: 'Standalone icon renderer with curated 38-icon set (outline / heroicons-style). No external dep — bundled as inline SVG components. Size presets (xs..2xl in px), color (hex or theme token), stroke width, alignment, top/bottom margin. Unknown icon name shows fallback "not found" message.',
  category: 'generic',
  intent: ['icon', 'glyph', 'symbol', 'svg', 'visual', 'inline-icon'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: [],
  themeable: ['color'],
  a11yRisk: 'medium',
  a11yNotes: 'Decorative icons should have aria-hidden="true" set by parent. When icon carries meaning, wrap in a button/link with aria-label or visible label.',
  mobileBehavior: 'responsive',
  searchTags: ['icon', 'glyph', 'svg', 'inline', 'heroicon', 'visual', 'symbol'],

  props: {
    iconName: { type: 'enum', options: ['HeartIcon', 'StarIcon', 'BookmarkIcon', 'CheckIcon', 'XMarkIcon', 'PlusIcon', 'MinusIcon', 'ChevronDownIcon', 'ChevronUpIcon', 'ChevronLeftIcon', 'ChevronRightIcon', 'ArrowLeftIcon', 'ArrowRightIcon', 'ArrowUpIcon', 'ArrowDownIcon', 'MagnifyingGlassIcon', 'ShoppingCartIcon', 'ShoppingBagIcon', 'UserIcon', 'UsersIcon', 'HomeIcon', 'EnvelopeIcon', 'PhoneIcon', 'CalendarIcon', 'ClockIcon', 'BellIcon', 'Cog6ToothIcon', 'InformationCircleIcon', 'ExclamationCircleIcon', 'CheckCircleIcon', 'XCircleIcon', 'MapPinIcon', 'TagIcon', 'EyeIcon', 'DocumentIcon', 'GiftIcon', 'QuestionMarkCircleIcon'], required: true },
    size: { type: 'enum', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'], required: true },
    color: { type: 'string' },
    strokeWidth: { type: 'enum', options: ['1', '1.5', '2', '2.5'], required: true },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true },
    marginTop: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    marginBottom: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
  },
} as const;

export type IconMeta = typeof iconMeta;
