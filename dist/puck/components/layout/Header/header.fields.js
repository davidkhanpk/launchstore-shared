export const headerFields = {
    layout: {
        type: 'select',
        label: 'Layout',
        options: [
            { label: 'Logo Left, Menu Center, Actions Right', value: 'left-center-right' },
            { label: 'All Centered', value: 'centered' },
            { label: 'Stacked', value: 'stacked' },
        ],
    },
    // Color: text input accepts hex or token. Frontend wraps with ColorField.
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    sticky: { type: 'radio', label: 'Sticky', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    shadow: { type: 'radio', label: 'Shadow', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    transparent: { type: 'radio', label: 'Transparent', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    logoPosition: {
        type: 'select', label: 'Logo Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    logoMaxWidth: { type: 'text', label: 'Logo Max Width' },
    logoUrl: { type: 'text', label: 'Logo URL' },
    logoAlt: { type: 'text', label: 'Logo Alt Text' },
    // menuItems: rendered externally; consumers inject via data hooks.
    menuPosition: {
        type: 'select', label: 'Menu Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    menuStyle: {
        type: 'select', label: 'Menu Style',
        options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }],
    },
    menuTextColor: { type: 'text', label: 'Menu Text Color (hex or theme token)' },
    menuHoverColor: { type: 'text', label: 'Menu Hover Color (hex or theme token)' },
    actions: {
        type: 'array',
        arrayFields: {
            action: {
                type: 'select',
                options: [
                    { label: 'Search', value: 'search' },
                    { label: 'Wishlist', value: 'wishlist' },
                    { label: 'Account', value: 'account' },
                    { label: 'Cart', value: 'cart' },
                ],
            },
        },
    },
    actionsPosition: {
        type: 'select', label: 'Actions Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
    },
    showCartBadge: { type: 'radio', label: 'Show Cart Badge', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showLabels: { type: 'radio', label: 'Show Labels', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    cartBadgeCount: { type: 'number', label: 'Cart Badge Count' },
    topBar: {
        type: 'object',
        objectFields: {
            enabled: { type: 'radio', label: 'Enabled', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
            backgroundColor: { type: 'text', label: 'Background Color' },
            textColor: { type: 'text', label: 'Text Color' },
            leftText: { type: 'text', label: 'Left Text' },
            centerText: { type: 'text', label: 'Center Text' },
            rightText: { type: 'text', label: 'Right Text' },
        },
    },
    mobileBreakpoint: {
        type: 'select', label: 'Mobile Breakpoint',
        options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
        ],
    },
    mobileMenuStyle: {
        type: 'select', label: 'Mobile Menu Style',
        options: [
            { label: 'Drawer (Slide from left)', value: 'drawer' },
            { label: 'Fullscreen', value: 'fullscreen' },
        ],
    },
};
//# sourceMappingURL=header.fields.js.map