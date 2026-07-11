export const copyrightFields = {
    text: { type: 'textarea', label: 'Copyright Text' },
    showYear: { type: 'radio', label: 'Show Current Year', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [
            { label: 'Extra Small', value: 'xs' },
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
        ],
    },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    showDivider: { type: 'radio', label: 'Show Top Divider', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    dividerColor: { type: 'text', label: 'Divider Color (hex or theme token)' },
    paddingTop: { type: 'text', label: 'Padding Top (e.g., 1rem)' },
    paddingBottom: { type: 'text', label: 'Padding Bottom (e.g., 1rem)' },
};
//# sourceMappingURL=copyright.fields.js.map