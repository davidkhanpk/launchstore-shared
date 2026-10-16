export const collectionsGridMeta = {
    name: 'CollectionsGrid',
    label: 'Collections Grid',
    description: 'Grid of the store\'s product COLLECTIONS (curated groups) — each card is a collection with ' +
        'image, title, and optional product count/description. Collections data is injected by the ' +
        'storefront at render (configure which via selectedCollectionIds, or leave empty for all). ' +
        'For product CATEGORIES use CategoryGrid; for products use FeaturedProducts.',
    category: 'homepage',
    intent: ['browse', 'navigate', 'curate', 'showcase'],
    visualRole: 'block',
    dataDeps: ['collections (storefront-injected)'],
    copyFields: ['sectionTitle', 'sectionSubtitle'],
    themeable: ['backgroundColor', 'textColor'],
    a11yRisk: 'low',
    mobileBehavior: 'responsive',
    searchTags: ['collections', 'curated', 'grid', 'shop by collection', 'groups'],
    props: {
        sectionTitle: { type: 'string', required: true, description: 'Section heading, e.g. "Shop by Collection".' },
        sectionSubtitle: { type: 'string', required: true, description: 'Optional subheading.' },
        showTitle: { type: 'boolean', required: true, description: 'Render the section heading.' },
        columns: { type: 'number', required: true, description: 'Collection cards per row on desktop (2-4).' },
        columnsTablet: { type: 'number', required: true, description: 'Cards per row on tablet.' },
        columnsMobile: { type: 'number', required: true, description: 'Cards per row on mobile.' },
        gap: { type: 'number', required: true, description: 'Gap between cards in px.' },
        showCollectionImage: { type: 'boolean', required: true, description: 'Show each collection\'s image.' },
        showCollectionTitle: { type: 'boolean', required: true, description: 'Show collection titles.' },
        showProductCount: { type: 'boolean', required: true, description: 'Show product count per collection.' },
        showDescription: { type: 'boolean', required: true, description: 'Show collection descriptions.' },
        imageAspectRatio: { type: 'string', required: true, description: 'Card image ratio: square | portrait | landscape.' },
        backgroundColor: { type: 'color', required: true, description: 'Section background. Token path (e.g. "ui.surface") or hex.' },
        textColor: { type: 'color', required: true, description: 'Token path (e.g. "text.primary") or hex.' },
        cardStyle: { type: 'string', required: true, description: 'Card look: standard | bordered | shadow.' },
        borderRadius: { type: 'string', required: true, description: 'Card corner radius: none | sm | md | lg | full.' },
    },
};
//# sourceMappingURL=collectionsgrid.meta.js.map