export const searchIconFields = {
    iconSize: {
        type: 'select', label: 'Icon Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    iconColor: { type: 'text', label: 'Icon Color (hex or theme token)' },
    hoverColor: { type: 'text', label: 'Hover Color (hex or theme token)' },
    style: {
        type: 'select', label: 'Button Style',
        options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Outlined', value: 'outlined' }, { label: 'Filled', value: 'filled' }],
    },
    openSearchOnClick: { type: 'radio', label: 'Open Search Modal on Click', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
//# sourceMappingURL=searchicon.fields.js.map