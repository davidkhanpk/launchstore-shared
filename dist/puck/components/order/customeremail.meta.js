export const customerEmailMeta = {
    name: 'CustomerEmail',
    label: 'Customer Email Line',
    description: 'Order-confirmation atom: "A confirmation email has been sent to {email}". The email value comes from order context (storefront-injected).',
    category: 'order',
    intent: ['confirm'],
    visualRole: 'atom',
    dataDeps: ['order email (page context)'],
    copyFields: ['label'],
    themeable: ['color'],
    a11yRisk: 'low',
    mobileBehavior: 'responsive',
    searchTags: ['order confirmation', 'email', 'atom'],
    props: {
        label: { type: 'string', required: true, description: 'Text before the email address. Empty = email only.' },
        showIcon: { type: 'boolean', required: true, description: 'Show a mail icon.' },
        fontSize: { type: 'enum', options: ['xs', 'sm', 'md', 'lg'], required: true, description: 'Text size.' },
        color: { type: 'color', required: true, description: 'Token path (e.g. "text.secondary") or hex.' },
        alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Alignment.' },
    },
};
//# sourceMappingURL=customeremail.meta.js.map