export const recentlyViewedProductsMeta = {
    name: 'RecentlyViewedProducts',
    label: 'Recently Viewed',
    description: 'Grid/carousel of products the shopper recently viewed (storefront-injected browsing history; ' +
        'renders empty for new visitors). Good near the footer or below the product page. ' +
        'For curated selections use FeaturedProducts; for related-to-product use RelatedProducts.',
    category: 'product',
    intent: ['re-engage', 'browse-history', 'personalize'],
    visualRole: 'block',
    dataDeps: ['visitor browsing history (storefront-injected)'],
    copyFields: ['title'],
    themeable: ['textColor'],
    a11yRisk: 'medium',
    a11yNotes: 'Carousel mode uses Swiper — enable navigation for keyboard users.',
    mobileBehavior: 'responsive',
    searchTags: ['recently viewed', 'history', 'browse', 'carousel', 'product grid'],
    props: {
        showTitle: { type: 'boolean', required: true, description: 'Render the section heading.' },
        title: { type: 'string', required: true, description: 'Section heading, e.g. "Recently Viewed".' },
        displayStyle: { type: 'enum', options: ['grid', 'carousel'], required: true, description: 'grid = static rows; carousel = Swiper slider.' },
        maxProducts: { type: 'number', required: true, description: 'Max products shown (4-8 recommended).' },
        containerPadding: { type: 'enum', options: ['none', 'sm', 'md', 'lg'], required: true, description: 'Section padding.' },
        textColor: { type: 'color', required: true, description: 'Token path (e.g. "text.secondary") or hex.' },
    },
};
//# sourceMappingURL=recentlyviewedproducts.meta.js.map