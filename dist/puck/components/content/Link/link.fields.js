export const linkFields = {
    id: { type: 'text', label: 'ID' },
    text: { type: 'text', label: 'Link Text' },
    href: { type: 'text', label: 'URL' },
    target: {
        type: 'radio',
        label: 'Open In',
        options: [
            { label: 'Same Tab', value: '_self' },
            { label: 'New Tab', value: '_blank' },
        ],
    },
    fontSize: {
        type: 'radio',
        label: 'Font Size',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
            { label: 'Large', value: 'lg' },
            { label: 'XL', value: 'xl' },
        ],
    },
    fontWeight: {
        type: 'radio',
        label: 'Font Weight',
        options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Medium', value: 'medium' },
            { label: 'Semibold', value: 'semibold' },
            { label: 'Bold', value: 'bold' },
        ],
    },
    underline: {
        type: 'radio',
        label: 'Underline',
        options: [
            { label: 'Always', value: 'always' },
            { label: 'On Hover', value: 'hover' },
            { label: 'None', value: 'none' },
        ],
    },
    // Shared: plain text input accepts hex ('#3b82f6') OR token path ('brand.primary').
    // Frontend consumer overrides this with ColorField (token picker UI).
    color: { type: 'text', label: 'Color (hex or theme token like brand.primary)' },
};
//# sourceMappingURL=link.fields.js.map