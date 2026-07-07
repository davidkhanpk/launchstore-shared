export const productRatingMeta = {
  name: 'ProductRating',
  label: 'Product Rating',
  description: 'Star-rating row with optional review count. Optional count display, three sizes (sm/md/lg). The shared component does NOT fetch reviews; the consumer wrapper provides a `fetchReviews(productId, { limit })` callback returning `{ average_rating, count } | null`. Lucide Star replaced with inline SVG.',
  category: 'product',
  intent: ['product', 'rating', 'stars', 'reviews-summary'],
  visualRole: 'inline',
  dataDeps: ['product (injected)', 'fetchReviews (injected)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Stars are decorative. The numeric rating (e.g. "4.3") is announced by screen readers. For full a11y the consumer can wrap with role="img" aria-label="Average rating 4.3 out of 5 from 12 reviews".',
  mobileBehavior: 'responsive',
  searchTags: ['product', 'rating', 'stars', 'reviews', 'summary'],

  props: {
    showCount: { type: 'boolean', required: true },
    size: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
  },
} as const;

export type ProductRatingMeta = typeof productRatingMeta;
