export const categoryMegaMenuMeta = {
    name: 'CategoryMegaMenu',
    label: 'Category Mega Menu',
    description: 'Sub-renderer used inside MenuNavigationRenderer. Renders a category with subcategories in a configurable-column grid, with optional banner image, "View All" heading, and per-subcategory description snippet. Styled via theme tokens (heading/linking colors, font sizes, padding, border-radius, box-shadow).',
    category: 'navigation',
    intent: ['mega-menu', 'mega', 'category-grid', 'nav-submenu'],
    visualRole: 'overlay',
    dataDeps: ['item', 'megaMenu', 'theme'],
    copyFields: [],
    themeable: ['background', 'sectionHeading', 'linkText', 'linkHover', 'headingFontSize', 'headingFontWeight', 'linkFontSize', 'linkFontWeight', 'padding', 'columnGap', 'borderRadius', 'boxShadow'],
    a11yRisk: 'low',
    a11yNotes: 'Renders inside a parent <nav> provided by MenuNavigationRenderer. Links use semantic <a> tags. No standalone ARIA needed.',
    mobileBehavior: 'desktop-only',
    searchTags: ['mega-menu', 'mega', 'category-grid', 'nav-submenu'],
    props: {
        item: { type: 'object', required: true },
        megaMenu: { type: 'object', required: true },
        theme: { type: 'object', required: false },
    },
};
//# sourceMappingURL=categorymegamenu.meta.js.map