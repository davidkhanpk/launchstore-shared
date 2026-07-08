export const menuNavigationRendererMeta = {
    name: 'MenuNavigationRenderer',
    label: 'Menu Navigation Renderer',
    description: 'Live renderer for the storefront navigation menu. Replaces the @headlessui/react Popover-based MegaMenu UX with stateful CSS hover behavior, keeping the same UI. Items with megaMenu.enabled + enriched category data surface a CategoryMegaMenu popover; items with plain children surface a SimpleDropdown. Styled via theme tokens (navigation + megaMenu). Used by HeaderRenderer and storefront layout.tsx data injection.',
    category: 'navigation',
    intent: ['nav', 'navigation', 'menu', 'mega-menu', 'header'],
    visualRole: 'block',
    dataDeps: ['items', 'theme'],
    copyFields: [],
    themeable: ['navigation.background', 'navigation.border', 'navigation.text', 'navigation.textHover', 'megaMenu.background', 'megaMenu.linkText'],
    a11yRisk: 'medium',
    a11yNotes: 'Hover-driven popovers are not keyboard-navigable. A wrapper to add ARIA menu semantics is the consumer\u2019s responsibility (the original @headlessui/react Popover provided menubar/menu roles; we stripped it). If a11y is critical, use the MenuNavigation Puck component instead which goes through @medusajs/ui DropdownMenu.',
    mobileBehavior: 'responsive',
    searchTags: ['nav', 'navigation', 'menu', 'mega-menu', 'header', 'popover', 'dropdown'],
    props: {
        items: { type: 'array', required: true, items: '$item' },
        theme: { type: 'object', required: true },
        layout: { type: 'enum', options: ['horizontal', 'vertical'], required: false },
        alignment: { type: 'enum', options: ['left', 'center', 'right'], required: false },
    },
};
//# sourceMappingURL=menunavigationrenderer.meta.js.map