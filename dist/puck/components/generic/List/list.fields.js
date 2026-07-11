export const listFields = {
    id: { type: 'text', label: 'ID' },
    items: {
        type: 'array',
        label: 'Items',
        arrayFields: { text: { type: 'text', label: 'Text' } },
        defaultItemProps: { text: 'List item' },
    },
    type: {
        type: 'radio', label: 'Marker Style',
        options: [
            { label: 'Bullet  •', value: 'bullet' },
            { label: 'Numbered  1.', value: 'numbered' },
            { label: 'Checkmark  ✓', value: 'check' },
            { label: 'None', value: 'none' },
        ],
    },
    spacing: { type: 'radio', label: 'Item Spacing', options: [{ label: 'Tight', value: 'tight' }, { label: 'Normal', value: 'normal' }, { label: 'Relaxed', value: 'relaxed' }] },
    fontSize: { type: 'radio', label: 'Font Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }] },
    color: { type: 'text', label: 'Text Color (hex or theme token)' },
};
//# sourceMappingURL=list.fields.js.map