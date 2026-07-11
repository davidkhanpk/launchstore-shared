export const searchBarFields = {
    placeholder: { type: 'text', label: 'Placeholder Text' },
    style: {
        type: 'select', label: 'Style',
        options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Outlined', value: 'outlined' }, { label: 'Filled', value: 'filled' }],
    },
    size: {
        type: 'select', label: 'Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    showIcon: {
        type: 'radio', label: 'Show Search Icon',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    iconPosition: {
        type: 'select', label: 'Icon Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
    },
    fullWidth: {
        type: 'radio', label: 'Full Width',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    maxWidth: { type: 'text', label: 'Max Width (if not full width)' },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Full', value: 'full' }],
    },
    backgroundColor: { type: 'text', label: 'Background Color' },
    textColor: { type: 'text', label: 'Text Color' },
    borderColor: { type: 'text', label: 'Border Color' },
    focusBorderColor: { type: 'text', label: 'Focus Border Color' },
    showPopularSearches: {
        type: 'radio', label: 'Show Popular Searches',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    popularSearches: {
        type: 'array', label: 'Popular Searches',
        arrayFields: { search: { type: 'text' } },
        getItemSummary: ((item) => item?.search || 'Search term'),
    },
};
//# sourceMappingURL=searchbar.fields.js.map