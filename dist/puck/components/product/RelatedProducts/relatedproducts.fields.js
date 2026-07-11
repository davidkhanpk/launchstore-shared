const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const relatedProductsFields = {
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Title' },
    showTagline: { type: 'radio', label: 'Show Tagline', options: RADIO_YES_NO },
    tagline: { type: 'textarea', label: 'Tagline' },
    relatedBy: {
        type: 'select', label: 'Show Products Related By',
        options: [
            { label: 'Same Collection', value: 'collection' },
            { label: 'Similar Tags', value: 'tags' },
            { label: 'Same Category', value: 'category' },
            { label: 'Upsells (Manual)', value: 'upsell' },
            { label: 'Cross-sells (Manual)', value: 'crosssell' },
            { label: 'Frequently Bought Together', value: 'frequently_bought' },
        ],
    },
    displayStyle: {
        type: 'select', label: 'Display Style',
        options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel', value: 'carousel' }],
    },
    maxProducts: { type: 'number', label: 'Number of Products' },
    productCardTemplateId: { type: 'text', label: 'Product Card Template ID (optional)' },
    gridColumns: {
        type: 'select', label: 'Grid Columns',
        options: [
            { label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' },
        ],
    },
    containerPadding: {
        type: 'select', label: 'Container Padding',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
        ],
    },
};
//# sourceMappingURL=relatedproducts.fields.js.map