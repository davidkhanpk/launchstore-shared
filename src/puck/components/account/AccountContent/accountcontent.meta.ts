export const accountContentMeta = {
  name: 'AccountContent',
  label: 'Account Content',
  description:
    'The customer account dashboard body — configurable panels: recent orders, wishlist, recommendations, loyalty points. Account data is storefront-injected; the editor shows sample panels. Pairs with AccountSidebar.',
  category: 'account',
  intent: ['account', 'self-serve'],
  visualRole: 'main',
  dataDeps: ['customer account data (storefront-injected)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['account', 'dashboard', 'orders', 'loyalty', 'customer'],
  props: {
    defaultView: { type: 'string', required: true, description: 'Initially active panel, e.g. "dashboard".' },
    showRecentOrders: { type: 'boolean', required: true, description: 'Show the recent orders panel.' },
    showWishlist: { type: 'boolean', required: true, description: 'Show the wishlist panel.' },
    showRecommendations: { type: 'boolean', required: true, description: 'Show recommended products.' },
    showLoyaltyPoints: { type: 'boolean', required: true, description: 'Show the loyalty points panel.' },
    showPersonalStylist: { type: 'boolean', required: true, description: 'Show the personal-stylist panel.' },
    luxuryStyle: { type: 'boolean', required: true, description: 'Lighter typography variant.' },
  },
} as const;

export type AccountContentMeta = typeof accountContentMeta;
