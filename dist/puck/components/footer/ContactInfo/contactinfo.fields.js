export const contactInfoFields = {
    showAddress: { type: 'radio', label: 'Show Address', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    address: { type: 'textarea', label: 'Address' },
    showPhone: { type: 'radio', label: 'Show Phone', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    phone: { type: 'text', label: 'Phone Number' },
    showEmail: { type: 'radio', label: 'Show Email', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    email: { type: 'text', label: 'Email Address' },
    showHours: { type: 'radio', label: 'Show Business Hours', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    hours: { type: 'textarea', label: 'Business Hours' },
    showIcons: { type: 'radio', label: 'Show Icons', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    layout: {
        type: 'select', label: 'Layout',
        options: [{ label: 'Stacked', value: 'stacked' }, { label: 'Grid', value: 'grid' }],
    },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    iconColor: { type: 'text', label: 'Icon Color (hex or theme token)' },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
    },
    gap: {
        type: 'select', label: 'Spacing',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
};
//# sourceMappingURL=contactinfo.fields.js.map