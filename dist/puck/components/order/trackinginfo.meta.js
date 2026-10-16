export const trackingInfoMeta = {
    name: 'TrackingInfo',
    label: 'Tracking Info',
    description: 'Order-confirmation atom: shipping & tracking panel — estimated delivery, carrier, tracking number. Values come from order context.',
    category: 'order',
    intent: ['confirm', 'track'],
    visualRole: 'atom',
    dataDeps: ['shipment data (page context)'],
    copyFields: ['message'],
    themeable: [],
    a11yRisk: 'low',
    mobileBehavior: 'responsive',
    searchTags: ['order', 'tracking', 'shipping', 'delivery', 'atom'],
    props: {
        showEstimatedDelivery: { type: 'boolean', required: true, description: 'Show the estimated delivery line.' },
        showCarrier: { type: 'boolean', required: true, description: 'Show the carrier line.' },
        showTrackingNumber: { type: 'boolean', required: true, description: 'Show the tracking number.' },
        message: { type: 'string', required: true, description: 'Fallback message before the order ships.' },
        luxuryStyle: { type: 'boolean', required: true, description: 'Lighter typography variant.' },
    },
};
//# sourceMappingURL=trackinginfo.meta.js.map