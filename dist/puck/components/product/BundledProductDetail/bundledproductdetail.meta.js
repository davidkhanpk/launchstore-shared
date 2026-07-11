export const bundledProductDetailMeta = {
    name: 'BundledProductDetail',
    label: 'Bundled Product Detail',
    description: 'Bundle-of-products widget: lists items, lets user pick a variant per item, computes total + savings, calls onAdd(items) on submit. All 4 lucide icons (ShoppingCart/AlertCircle/Loader/ChevronDown) replaced with inline SVG. shared is SDK-agnostic: bundle data + onAdd(items) + formatPrice are consumer-injected; defaults render gracefully when omitted (Puck canvas preview).',
    category: 'product',
    intent: ['product', 'bundle', 'kits', 'combo'],
    visualRole: 'block',
    dataDeps: ['bundle (injected)', 'onAdd (injected)'],
    copyFields: ['buttonText'],
    themeable: [],
    a11yRisk: 'low',
    a11yNotes: 'Each item has a native <select> for variant \u2014 full keyboard a11y. Image thumbnails have alt text from the product title. The submit button uses a real <button> element.',
    mobileBehavior: 'responsive',
    searchTags: ['product', 'bundle', 'kits', 'combo', 'multi-product'],
    props: {
        showSavingsBadge: { type: 'boolean', required: true },
        showItemImages: { type: 'boolean', required: true },
        buttonText: { type: 'string', required: true },
        bundleIdOverride: { type: 'string', required: true },
        bundle: { type: 'object', required: false },
    },
};
//# sourceMappingURL=bundledproductdetail.meta.js.map