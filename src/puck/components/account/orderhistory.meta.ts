export const orderHistoryMeta = {
  name: 'OrderHistory', label: 'Order History',
  description: 'Customer order list with 3 layouts (list/grid/timeline), search, status filter, item thumbnails, and view-details action. Cart-library-agnostic: takes orders[], onViewDetails.',
  category: 'account', intent: ['account', 'orders', 'history'], visualRole: 'block', dataDeps: ['orders (consumer)'],
  copyFields: ['emptyStateText', 'viewDetailsText'], themeable: ['backgroundColor', 'textColor'], a11yRisk: 'low', a11yNotes: 'Real <input type="search"> + <select> + <button>. Filtered client-side from orders prop.', mobileBehavior: 'responsive',
  searchTags: ['account', 'orders', 'history', 'tracking'],
  props: { layout: { type: 'enum', options: ['list', 'grid', 'timeline'], required: true }, showSearch: { type: 'boolean', required: true }, showFilters: { type: 'boolean', required: true }, defaultStatus: { type: 'enum', options: ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'], required: true }, showImages: { type: 'boolean', required: true }, showItemCount: { type: 'boolean', required: true }, ordersPerPage: { type: 'number', required: true }, backgroundColor: { type: 'string', required: true }, textColor: { type: 'string', required: true }, emptyStateText: { type: 'string', required: true }, viewDetailsText: { type: 'string', required: true } },
} as const;
export type OrderHistoryMeta = typeof orderHistoryMeta;
