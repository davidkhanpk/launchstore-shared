const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const wishlistButtonFields = {
    showLabel: { type: 'radio', label: 'Show Label', options: RADIO_YES_NO },
    labelText: { type: 'text', label: 'Label Text' },
    size: {
        type: 'select', label: 'Size',
        options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }],
    },
    style: {
        type: 'select', label: 'Button Style',
        options: [
            { label: 'Default', value: 'default' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Icon Only', value: 'icon-only' },
        ],
    },
    iconPosition: {
        type: 'select', label: 'Icon Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
    },
};
//# sourceMappingURL=wishlistbutton.fields.js.map