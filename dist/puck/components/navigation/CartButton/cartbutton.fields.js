export const cartButtonFields = {
    showLabel: {
        type: 'radio', label: 'Show Label',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    label: { type: 'text', label: 'Button Label' },
    showBadge: {
        type: 'radio', label: 'Show Item Count Badge',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    badgePosition: {
        type: 'select', label: 'Badge Position',
        options: [
            { label: 'Top Right', value: 'top-right' },
            { label: 'Top Left', value: 'top-left' },
            { label: 'Bottom Right', value: 'bottom-right' },
        ],
    },
    iconSize: {
        type: 'select', label: 'Icon Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    iconColor: { type: 'text', label: 'Icon Color' },
    hoverColor: { type: 'text', label: 'Hover Color' },
    badgeBackgroundColor: { type: 'text', label: 'Badge Background Color' },
    badgeTextColor: { type: 'text', label: 'Badge Text Color' },
    style: {
        type: 'select', label: 'Button Style',
        options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Outlined', value: 'outlined' }, { label: 'Filled', value: 'filled' }],
    },
};
//# sourceMappingURL=cartbutton.fields.js.map