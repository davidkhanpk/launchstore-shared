export const alertFields = {
    id: { type: 'text', label: 'ID' },
    type: { type: 'radio', label: 'Type', options: [{ label: 'Info', value: 'info' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }] },
    title: { type: 'text', label: 'Title (Optional)' },
    message: { type: 'textarea', label: 'Message' },
    showIcon: { type: 'radio', label: 'Show Icon', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    dismissible: { type: 'radio', label: 'Dismissible', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
//# sourceMappingURL=alert.fields.js.map