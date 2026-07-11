export const categoryTitleFields = {
    tag: {
        type: 'select', label: 'HTML Tag',
        options: [{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' }, { label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' }],
    },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [
            { label: 'Theme Default', value: 'default' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'X-Large', value: 'xl' },
            { label: '2X-Large', value: '2xl' },
            { label: '3X-Large', value: '3xl' },
        ],
    },
    color: {
        type: 'select', label: 'Color',
        options: [
            { label: 'Theme Default', value: 'default' },
            { label: 'Black', value: 'black' },
            { label: 'Gray', value: 'gray' },
            { label: 'Primary', value: 'primary' },
            { label: 'White', value: 'white' },
        ],
    },
    alignment: { type: 'radio', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    fontWeight: {
        type: 'select', label: 'Font Weight',
        options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Medium', value: 'medium' },
            { label: 'Semibold', value: 'semibold' },
            { label: 'Bold', value: 'bold' },
        ],
    },
    marginBottom: { type: 'text', label: 'Margin Bottom' },
    className: { type: 'text', label: 'Custom CSS Classes' },
};
//# sourceMappingURL=categorytitle.fields.js.map