export const orderActionsMeta = {
    name: 'OrderActions', label: 'Order Actions',
    description: 'Post-order action buttons (download invoice, track shipment, contact support, reorder, return request) with 3 layouts (buttons/cards/list) and 3 button styles. Cart-library-agnostic: takes onInvoice/onTrack/onSupport/onReorder/onReturn callbacks.',
    category: 'order', intent: ['order', 'actions', 'post-purchase'], visualRole: 'block', dataDeps: ['callbacks (injected)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <button> with onClick. Lucide + Heroicons replaced with inline SVG.', mobileBehavior: 'responsive',
    searchTags: ['order', 'actions', 'invoice', 'tracking', 'support', 'reorder', 'return'],
    props: { layout: { type: 'enum', options: ['buttons', 'cards', 'list'], required: true }, buttonStyle: { type: 'enum', options: ['filled', 'outlined', 'text'], required: true }, showDownloadInvoice: { type: 'boolean', required: true }, showTrackShipment: { type: 'boolean', required: true }, showContactSupport: { type: 'boolean', required: true }, showReorder: { type: 'boolean', required: true }, showReturnRequest: { type: 'boolean', required: true } },
};
//# sourceMappingURL=orderactions.meta.js.map