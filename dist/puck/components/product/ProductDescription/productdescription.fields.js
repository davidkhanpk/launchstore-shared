export const productDescriptionFields = {
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }],
    },
    color: {
        type: 'select', label: 'Text Color',
        options: [{ label: 'Default', value: 'default' }, { label: 'Gray', value: 'gray' }, { label: 'Black', value: 'black' }],
    },
    lineHeight: {
        type: 'select', label: 'Line Height',
        options: [{ label: 'Tight', value: 'tight' }, { label: 'Normal', value: 'normal' }, { label: 'Relaxed', value: 'relaxed' }],
    },
    maxWidth: {
        type: 'select', label: 'Max Width',
        options: [
            { label: 'Full Width', value: 'full' },
            { label: 'Prose (readable)', value: 'prose' },
            { label: 'Narrow', value: 'narrow' },
        ],
    },
    marginTop: {
        type: 'select', label: 'Margin Top',
        options: [
            { label: 'None', value: 'mt-0' }, { label: 'Small (0.5rem)', value: 'mt-2' },
            { label: 'Medium (1rem)', value: 'mt-4' }, { label: 'Large (1.5rem)', value: 'mt-6' },
            { label: 'X-Large (2rem)', value: 'mt-8' },
        ],
    },
    marginBottom: {
        type: 'select', label: 'Margin Bottom',
        options: [
            { label: 'None', value: 'mb-0' }, { label: 'Small (0.5rem)', value: 'mb-2' },
            { label: 'Medium (1rem)', value: 'mb-4' }, { label: 'Large (1.5rem)', value: 'mb-6' },
            { label: 'X-Large (2rem)', value: 'mb-8' },
        ],
    },
    paddingX: {
        type: 'select', label: 'Horizontal Padding',
        options: [
            { label: 'None', value: 'px-0' }, { label: 'Small', value: 'px-2' },
            { label: 'Medium', value: 'px-4' }, { label: 'Large', value: 'px-6' },
        ],
    },
    paddingY: {
        type: 'select', label: 'Vertical Padding',
        options: [
            { label: 'None', value: 'py-0' }, { label: 'Small', value: 'py-2' },
            { label: 'Medium', value: 'py-4' }, { label: 'Large', value: 'py-6' },
        ],
    },
};
//# sourceMappingURL=productdescription.fields.js.map