export const alertMeta = {
    name: 'Alert',
    label: 'Alert',
    description: 'Inline alert/banner with 4 severity types (info/success/warning/error). Optional title + message + icon + dismiss button. Renders role="alert" for screen readers. Dark-mode aware color schemes.',
    category: 'generic',
    intent: ['alert', 'banner', 'notification', 'callout', 'info', 'warning'],
    visualRole: 'inline',
    dataDeps: [],
    copyFields: ['title', 'message'],
    themeable: [],
    a11yRisk: 'low',
    a11yNotes: 'role="alert" sets the live-region flag — screen readers announce on mount. Dismissible control has aria-label. Ensure message copy is concise.',
    mobileBehavior: 'responsive',
    searchTags: ['alert', 'banner', 'notification', 'callout', 'info', 'success', 'warning', 'error'],
    props: {
        type: { type: 'enum', options: ['info', 'success', 'warning', 'error'], required: true },
        title: { type: 'string' },
        message: { type: 'string', required: true },
        showIcon: { type: 'boolean', required: true },
        dismissible: { type: 'boolean', required: true },
    },
};
//# sourceMappingURL=alert.meta.js.map