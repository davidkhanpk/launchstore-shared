export const wishlistButtonMeta = {
  name: 'WishlistButton',
  label: 'Wishlist Button',
  description: 'Toggle button for adding/removing the active variant from the user\'s wishlist. Auth-aware: hidden for guests. Wishlist state lives in the consumer\'s wishlist provider; shared takes `checkAuth()`, `isInWishlist(variantId)`, `toggleWishlist(variantId)` callbacks. Lucide Heart replaced with inline SVG.',
  category: 'product',
  intent: ['product', 'wishlist', 'favorite', 'save'],
  visualRole: 'inline',
  dataDeps: ['product (injected)', 'selectedVariantId (injected)', 'checkAuth / isInWishlist / toggleWishlist (callbacks)'],
  copyFields: ['labelText'],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'aria-label updates between "Add to Wishlist" and "Remove from Wishlist" based on state. Disabled during in-flight toggle.',
  mobileBehavior: 'responsive',
  searchTags: ['product', 'wishlist', 'favorite', 'save', 'heart'],

  props: {
    showLabel: { type: 'boolean', required: true },
    labelText: { type: 'string', required: true },
    size: { type: 'enum', options: ['small', 'medium', 'large'], required: true },
    style: { type: 'enum', options: ['default', 'outline', 'ghost', 'icon-only'], required: true },
    iconPosition: { type: 'enum', options: ['left', 'right'], required: true },
    product: { type: 'object', required: false },
  },
} as const;

export type WishlistButtonMeta = typeof wishlistButtonMeta;
