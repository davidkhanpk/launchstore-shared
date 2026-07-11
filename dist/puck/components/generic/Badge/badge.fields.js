export const badgeFields = {
    id: { type: 'text', label: 'ID' },
    text: { type: 'text', label: 'Badge Text' },
    variant: {
        type: 'select', label: 'Variant',
        options: [
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
            { label: 'Info', value: 'info' },
        ],
    },
    size: { type: 'radio', label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
    rounded: { type: 'radio', label: 'Corner Radius', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Full (Pill)', value: 'full' }] },
    customBgColor: { type: 'text', label: 'Custom Background (Optional, hex or theme token)' },
    customTextColor: { type: 'text', label: 'Custom Text Color (Optional, hex or theme token)' },
};
//# sourceMappingURL=badge.fields.js.map