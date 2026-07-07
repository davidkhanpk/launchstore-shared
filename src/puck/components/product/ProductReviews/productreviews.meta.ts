export const productReviewsMeta = {
  name: 'ProductReviews',
  label: 'Product Reviews',
  description: 'Full product-reviews widget: list + ratings summary + sort + paginate + inline submit form + helpful/unhelpful votes + optional media uploads + verified-purchase badges. State (form, votes, media) lives in shared. Data actions are callback-injected: fetchReviews, createReview, voteOnReview, uploadReviewMedia, fetchCustomer. signInHref is the localized path consumers pass (default /account). All 7 lucide icons (Star/Check/Pencil/X/Image/ThumbUp/ThumbDown) replaced with inline SVG.',
  category: 'product',
  intent: ['product', 'reviews', 'ratings', 'social-proof', 'feedback'],
  visualRole: 'block',
  dataDeps: ['product (injected)', 'fetchReviews', 'createReview', 'voteOnReview', 'uploadReviewMedia', 'fetchCustomer', 'signInHref'],
  copyFields: ['reviewsPerPage'],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Form submit triggers a POST. Vote buttons are real <button>s with disabled state during in-flight. Stars use SVG with currentColor so they pick up hover/focus state. Media uploads use an sr-only file input triggered by a labeled visible button (proper a11y). Sign-in link uses a label + href, not a button (preserves middleware behavior).',
  mobileBehavior: 'responsive',
  searchTags: ['product', 'reviews', 'ratings', 'social-proof', 'feedback', 'ugc'],

  props: {
    showRatingsSummary: { type: 'boolean', required: true },
    showVerifiedBadge: { type: 'boolean', required: true },
    sortBy: { type: 'enum', options: ['recent', 'helpful', 'rating_high', 'rating_low'], required: true },
    reviewsPerPage: { type: 'number', required: true },
    product: { type: 'object', required: false },
  },
} as const;

export type ProductReviewsMeta = typeof productReviewsMeta;
