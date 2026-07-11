export const dividerFields = {
    id: { type: 'text', label: 'ID' },
    style: { type: 'radio', label: 'Line Style', options: [{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }] },
    thickness: { type: 'radio', label: 'Thickness', options: [{ label: 'Thin (1px)', value: '1' }, { label: 'Medium (2px)', value: '2' }, { label: 'Thick (4px)', value: '4' }] },
    width: { type: 'radio', label: 'Width', options: [{ label: 'Full', value: 'full' }, { label: '75%', value: '3/4' }, { label: '50%', value: '1/2' }, { label: '25%', value: '1/4' }] },
    color: { type: 'text', label: 'Color (hex or theme token)' },
    marginTop: { type: 'radio', label: 'Margin Top', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
    marginBottom: { type: 'radio', label: 'Margin Bottom', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
};
//# sourceMappingURL=divider.fields.js.map