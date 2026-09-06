export const quantityPricingTableMeta = {
  name: 'QuantityPricingTable', label: 'Quantity Pricing',
  description: 'Displays quantity-based tier pricing (volume discounts) on the product page. Shows tier cards or table with quantity ranges, unit prices, and savings percentages. Automatically highlights the active tier based on current cart quantity.',
  category: 'product', intent: ['product-page', 'pricing', 'quantity', 'volume', 'tier', 'discount'], visualRole: 'block', dataDeps: ['tiers (variant prices with min_quantity)'],
  copyFields: ['title'], themeable: [], a11yRisk: 'low', a11yNotes: 'Standard table/card markup. Tier information is text-readable.', mobileBehavior: 'responsive (cards stack on mobile)',
  searchTags: ['quantity', 'volume', 'tier', 'pricing', 'breaks', 'discount', 'buy more', 'save', 'bulk', 'wholesale'],
  props: { layout: { type: 'enum', options: ['cards', 'table'], required: false }, showSavings: { type: 'boolean', required: false }, showBasePrice: { type: 'boolean', required: false }, highlightActiveTier: { type: 'boolean', required: false }, title: { type: 'string', required: false } },
} as const;
export type QuantityPricingTableMeta = typeof quantityPricingTableMeta;
