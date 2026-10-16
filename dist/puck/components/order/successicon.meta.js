export const successIconMeta = {
    name: 'SuccessIcon',
    label: 'Success Icon',
    description: 'Order-confirmation atom: the large checkmark/celebration icon at the top of the confirmation page.',
    category: 'order',
    intent: ['confirm', 'celebrate'],
    visualRole: 'atom',
    dataDeps: [],
    copyFields: [],
    themeable: ['color'],
    a11yRisk: 'low',
    mobileBehavior: 'fixed',
    searchTags: ['order', 'success', 'checkmark', 'icon', 'atom'],
    props: {
        size: { type: 'enum', options: ['md', 'lg', 'xl'], required: true, description: 'Icon size.' },
        color: { type: 'color', required: true, description: 'Token path (e.g. "status.success") or hex.' },
        animate: { type: 'boolean', required: true, description: 'Subtle entrance animation.' },
        style: { type: 'enum', options: ['standard', 'luxury'], required: true, description: 'luxury adds a ring.' },
    },
};
//# sourceMappingURL=successicon.meta.js.map