export const cartItemsPreviewMeta = {
    name: 'CartItemsPreview', label: 'Cart Items Preview',
    description: 'Static read-only cart preview (header, item list, prices). Pure presentational, no callbacks.',
    category: 'checkout', intent: ['cart', 'preview', 'review'], visualRole: 'block', dataDeps: ['items (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text + images.', mobileBehavior: 'responsive',
    searchTags: ['cart', 'preview', 'review'],
    props: { showImages: { type: 'boolean', required: true }, showQuantity: { type: 'boolean', required: true }, showVariantInfo: { type: 'boolean', required: true }, imageSize: { type: 'enum', options: ['sm', 'md', 'lg'], required: true }, layout: { type: 'enum', options: ['list', 'compact'], required: true } },
};
//# sourceMappingURL=cartitemspreview.meta.js.map