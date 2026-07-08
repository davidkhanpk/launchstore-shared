export const logoFields = {
    imageUrl: { type: 'text', label: 'Logo Image URL' },
    altText: { type: 'text', label: 'Alt Text' },
    linkTo: { type: 'text', label: 'Link To' },
    maxWidth: { type: 'text', label: 'Max Width (e.g., 150px)' },
    maxHeight: { type: 'text', label: 'Max Height (e.g., 60px)' },
    showText: { type: 'radio', label: 'Show Store Name', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    text: { type: 'text', label: 'Store Name' },
    textPosition: { type: 'select', label: 'Text Position', options: [{ label: 'Right of Logo', value: 'right' }, { label: 'Below Logo', value: 'below' }] },
    textSize: { type: 'select', label: 'Text Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    textWeight: { type: 'select', label: 'Text Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
};
//# sourceMappingURL=logo.fields.js.map