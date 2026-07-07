export const stockIndicatorMeta = {
  name: 'StockIndicator',
  label: 'Stock Indicator',
  description: 'Stock-availability indicator: in-stock / low-stock / out-of-stock / pre-order. Inventory is aggregated across all variants. Lucide Check/AlertCircle/XCircle/Clock replaced with inline SVG. Pre-order flag comes from product.metadata.is_pre_order.',
  category: 'product',
  intent: ['product', 'stock', 'inventory', 'availability', 'preorder'],
  visualRole: 'inline',
  dataDeps: ['product (injected)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'Status text is the primary indicator (a11y-safe). Icons are decorative; status text conveys meaning.',
  mobileBehavior: 'responsive',
  searchTags: ['product', 'stock', 'inventory', 'availability', 'pre-order'],

  props: {
    showIcon: { type: 'boolean', required: true },
    showText: { type: 'boolean', required: true },
    showQuantity: { type: 'boolean', required: true },
    lowStockThreshold: { type: 'number', required: true },
    style: { type: 'enum', options: ['default', 'badge', 'minimal'], required: true },
    product: { type: 'object', required: false },
  },
} as const;

export type StockIndicatorMeta = typeof stockIndicatorMeta;
