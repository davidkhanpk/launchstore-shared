export const mobileMenuMeta = {
    name: 'MobileMenu',
    label: 'Mobile Menu',
    description: 'Drawer-style mobile navigation menu with collapsible accordion items. Triggered open/closed via isOpen/onClose props from a parent (e.g. Header hamburger). Items support two recursive variants: (a) plain link, (b) accordion with children OR subcategories from megaMenu config. Slide-in direction is configurable (left/right).',
    category: 'navigation',
    intent: ['mobile', 'menu', 'drawer', 'hamburger', 'nav-mobile'],
    visualRole: 'overlay',
    dataDeps: ['items[]', 'theme'],
    copyFields: [],
    themeable: ['background', 'text', 'border', 'subText', 'accordionBackground'],
    a11yRisk: 'high',
    a11yNotes: 'Drawer is role="dialog" + aria-modal. Close button has aria-label. Accordion buttons use aria-expanded. Focus trap is the consumer wrapper\'s responsibility (next/modal library or backdrop focus). Escape key closes via backdrop click.',
    mobileBehavior: 'only-mobile',
    searchTags: ['mobile', 'menu', 'drawer', 'hamburger', 'nav-mobile', 'accordion'],
    props: {
        items: { type: 'array', required: true, items: '$item' },
        theme: { type: 'object', required: false },
        isOpen: { type: 'boolean', required: true },
        drawerMaxWidth: { type: 'string', required: false },
        animationDirection: { type: 'enum', options: ['left', 'right'], required: false },
    },
};
//# sourceMappingURL=mobilemenu.meta.js.map