export const categoryMetadataFields = {
    showHandle: { type: 'radio', label: 'Show Category Handle', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showProductCount: { type: 'radio', label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showUpdatedDate: { type: 'radio', label: 'Show Last Updated Date', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    layout: { type: 'radio', label: 'Layout', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
    fontSize: { type: 'text', label: 'Font Size' },
    textColor: { type: 'text', label: 'Text Color' },
    iconColor: { type: 'text', label: 'Icon Color' },
    spacing: { type: 'text', label: 'Item Spacing' },
    className: { type: 'text', label: 'Custom CSS Classes' },
};
//# sourceMappingURL=categorymetadata.fields.js.map