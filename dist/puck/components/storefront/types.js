/**
 * Unified Sort/Filter/Pagination Types
 *
 * These are the CANONICAL types used across the entire system —
 * launchstore-shared components, storefront wrappers, and API routes.
 * No page or component should define its own sort-key vocabulary.
 */
export const SORT_OPTIONS = [
    { label: 'Latest Arrivals', value: 'created_desc' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Name: A to Z', value: 'title_asc' },
    { label: 'Name: Z to A', value: 'title_desc' },
];
/**
 * Maps our SortKey to the Medusa API `order` / `sort` param.
 * Used by storefront wrappers when calling /api/products or listProducts.
 */
export const SORT_KEY_TO_MEDUSA = {
    created_desc: '-created_at',
    price_asc: 'price.calculated_amount',
    price_desc: '-price.calculated_amount',
    title_asc: 'title',
    title_desc: '-title',
};
//# sourceMappingURL=types.js.map