const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const stockIndicatorFields = {
    showIcon: { type: 'radio', label: 'Show Icon', options: RADIO_YES_NO },
    showText: { type: 'radio', label: 'Show Text', options: RADIO_YES_NO },
    showQuantity: { type: 'radio', label: 'Show Quantity Available', options: RADIO_YES_NO },
    lowStockThreshold: { type: 'number', label: 'Low Stock Threshold' },
    style: {
        type: 'select', label: 'Style',
        options: [{ label: 'Default', value: 'default' }, { label: 'Badge', value: 'badge' }, { label: 'Minimal', value: 'minimal' }],
    },
};
//# sourceMappingURL=stockindicator.fields.js.map