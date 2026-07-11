export const cardFields = {
    id: { type: 'text', label: 'ID' },
    padding: { type: 'radio', label: 'Padding', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    shadow: { type: 'radio', label: 'Shadow', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    border: { type: 'radio', label: 'Border', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    rounded: { type: 'radio', label: 'Corner Radius', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }, { label: 'Full', value: 'full' }] },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    hoverEffect: { type: 'radio', label: 'Hover Effect (lift)', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
//# sourceMappingURL=card.fields.js.map