export const productBreadcrumbsMeta = {
    name: 'ProductBreadcrumbs',
    label: 'Product Breadcrumbs',
    description: 'Breadcrumb trail: Home \u2192 Shop \u2192 collection \u2192 categories \u2192 current product. Inactive items are linked; current product is plain text. Configurable separator (arrow/slash/dot), text-transform, and Home-icon visibility. Lucide Home + ChevronRight replaced with inline SVG.',
    category: 'product',
    intent: ['product', 'breadcrumbs', 'navigation', 'path'],
    visualRole: 'inline',
    dataDeps: ['product (injected)'],
    copyFields: [],
    themeable: [],
    a11yRisk: 'low',
    a11yNotes: 'Renders semantic <nav aria-label="Breadcrumb"> with <ol> list. Current page item is plain <span> (no link, no aria-current).',
    mobileBehavior: 'responsive',
    searchTags: ['product', 'breadcrumbs', 'navigation', 'path', 'trail'],
    props: {
        showHomeIcon: { type: 'boolean', required: true },
        separator: { type: 'enum', options: ['arrow', 'slash', 'dot'], required: true },
        textTransform: { type: 'enum', options: ['none', 'uppercase', 'capitalize'], required: true },
        product: { type: 'object', required: false },
    },
};
//# sourceMappingURL=productbreadcrumbs.meta.js.map