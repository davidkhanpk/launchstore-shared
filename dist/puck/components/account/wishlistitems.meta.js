export const wishlistItemsMeta = {
    name: 'WishlistItems', label: 'Wishlist Items',
    description: 'Customer wishlist with item list, add-to-cart, remove actions, and empty state. Cart-library-agnostic: takes items[], onAddToCart(variantId), onRemove(id).',
    category: 'account', intent: ['account', 'wishlist', 'favorites'], visualRole: 'block', dataDeps: ['items (consumer)'],
    copyFields: ['title', 'emptyTitle', 'emptyMessage', 'addToCartLabel', 'removeLabel'], themeable: ['backgroundColor', 'cardBackgroundColor', 'textColor'], a11yRisk: 'low', a11yNotes: 'Real <button> with onClick. Lucide icons replaced with inline SVG.', mobileBehavior: 'responsive',
    searchTags: ['account', 'wishlist', 'favorites', 'saved'],
    props: { title: { type: 'string', required: true }, showTitle: { type: 'boolean', required: true }, showEmptyMessage: { type: 'boolean', required: true }, emptyTitle: { type: 'string', required: true }, emptyMessage: { type: 'string', required: true }, showAddToCart: { type: 'boolean', required: true }, addToCartLabel: { type: 'string', required: true }, removeLabel: { type: 'string', required: true }, backgroundColor: { type: 'string', required: true }, cardBackgroundColor: { type: 'string', required: true }, textColor: { type: 'string', required: true }, borderRadius: { type: 'string', required: true }, padding: { type: 'string', required: true }, shadow: { type: 'boolean', required: true } },
};
//# sourceMappingURL=wishlistitems.meta.js.map