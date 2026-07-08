/**
 * MobileMenu is a RENDERED-FROM-DATA component: in the Puck editor
 * it shows an empty placeholder (no menu data bound), but in the
 * live renderer the consumer wrapper injects `items` + `theme` from
 * the page's navigation/menu config before passing the props down.
 *
 * Therefore the Puck fields are intentionally minimal — only
 * cosmetic overrides (drawer width, animation direction). The
 * `items` and `theme` props are populated at render-time via the
 * consumer wrapper, not via the editor panel.
 */
export const mobileMenuFields = {
    drawerMaxWidth: { type: 'text', label: 'Drawer Max Width (e.g. 400px)' },
    animationDirection: {
        type: 'select',
        label: 'Slide-In Direction',
        options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
    },
};
//# sourceMappingURL=mobilemenu.fields.js.map