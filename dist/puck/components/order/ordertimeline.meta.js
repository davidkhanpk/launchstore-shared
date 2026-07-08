export const orderTimelineMeta = {
    name: 'OrderTimeline', label: 'Order Timeline',
    description: 'Order status timeline (placed → processing → shipped → delivered) with 2 orientations (vertical/horizontal) and 3 detail levels. Optional tracking number with copy button. Cart-library-agnostic: takes steps[], trackingNumber, onCopyTracking.',
    category: 'order', intent: ['order', 'tracking', 'timeline', 'status'], visualRole: 'block', dataDeps: ['steps (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text + decorative icons. Tracking Copy button has onClick.', mobileBehavior: 'responsive',
    searchTags: ['order', 'tracking', 'timeline', 'status', 'shipped'],
    props: { orientation: { type: 'enum', options: ['vertical', 'horizontal'], required: true }, style: { type: 'enum', options: ['default', 'minimal', 'detailed'], required: true }, showIcons: { type: 'boolean', required: true }, showTimestamps: { type: 'boolean', required: true }, showTrackingNumber: { type: 'boolean', required: true } },
};
//# sourceMappingURL=ordertimeline.meta.js.map