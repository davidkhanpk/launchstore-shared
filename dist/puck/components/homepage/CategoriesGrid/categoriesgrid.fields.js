export const categoriesGridFields = {
    sectionTitle: { type: 'text', label: 'Section Title' },
    sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
    showTitle: { type: 'radio', label: 'Show Section Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    columns: { type: 'number', label: 'Columns (Desktop)', min: 2, max: 6 },
    columnsTablet: { type: 'number', label: 'Columns (Tablet)', min: 2, max: 4 },
    columnsMobile: { type: 'number', label: 'Columns (Mobile)', min: 1, max: 2 },
    gap: { type: 'number', label: 'Gap Between Items (px)', min: 0, max: 64 },
    showCategoryImage: { type: 'radio', label: 'Show Category Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showCategoryName: { type: 'radio', label: 'Show Category Name', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showProductCount: { type: 'radio', label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    imageAspectRatio: {
        type: 'select', label: 'Image Aspect Ratio',
        options: [
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (4:3)', value: 'landscape' },
            { label: 'Wide (16:9)', value: 'wide' },
        ],
    },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    cardStyle: {
        type: 'select', label: 'Card Style',
        options: [
            { label: 'Minimal', value: 'minimal' },
            { label: 'Bordered', value: 'bordered' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Image Overlay', value: 'overlay' },
        ],
    },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
    hoverEffect: {
        type: 'select', label: 'Hover Effect',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Scale Up', value: 'scale' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Lift', value: 'lift' },
        ],
    },
    categorySource: {
        type: 'select', label: 'Category Source',
        options: [
            { label: 'All Categories', value: 'all' },
            { label: 'Featured Categories', value: 'featured' },
            { label: 'Manual Selection', value: 'manual' },
        ],
    },
    // array-of-strings selector; consumers may wrap with a richer picker if desired
    selectedCategoryIds: {
        type: 'array',
        label: 'Manual Category IDs (when Source = Manual)',
        arrayFields: {
            id: { type: 'text', label: 'Category ID' },
        },
        defaultItemProps: { id: '' },
    },
};
//# sourceMappingURL=categoriesgrid.fields.js.map