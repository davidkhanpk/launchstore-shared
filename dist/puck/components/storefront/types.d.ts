/**
 * Unified Sort/Filter/Pagination Types
 *
 * These are the CANONICAL types used across the entire system —
 * launchstore-shared components, storefront wrappers, and API routes.
 * No page or component should define its own sort-key vocabulary.
 */
/**
 * The ONE sort-key vocabulary. Every page, every component, every API
 * route uses these exact keys.
 */
export type SortKey = 'created_desc' | 'price_asc' | 'price_desc' | 'title_asc' | 'title_desc';
export declare const SORT_OPTIONS: Array<{
    label: string;
    value: SortKey;
}>;
/**
 * Maps our SortKey to the Medusa API `order` / `sort` param.
 * Used by storefront wrappers when calling /api/products or listProducts.
 */
export declare const SORT_KEY_TO_MEDUSA: Record<SortKey, string>;
/**
 * A single filter value with a count (e.g. { value: 'Red', count: 12 }).
 */
export interface FilterValue {
    value: string;
    count: number;
}
/**
 * A group of filter values (e.g. all colors, all sizes).
 * Built from real product data via extractOptionGroups on the storefront.
 */
export interface FilterGroup {
    /** The option name (e.g. "Color", "Size"). Used as the URL query param key. */
    name: string;
    /** Human-readable label for the group header. */
    label?: string;
    values: FilterValue[];
}
export type FilterLayout = 'sidebar' | 'topbar' | 'none';
export type PaginationStyle = 'numbered' | 'load-more' | 'simple';
export interface FilterBarProps {
    /** Desktop layout: sidebar (left), topbar (above grid), or none. */
    filterLayout: FilterLayout;
    /** Show the sort dropdown. */
    showSort: boolean;
    /** Show the product count text ("Showing 1-12 of 48"). */
    showCount: boolean;
    /** Allow clearing all filters at once. */
    showClearAll: boolean;
    /** Show filter groups (Color, Size, etc.) — not just sort. */
    showFilters: boolean;
    filterGroups?: FilterGroup[];
    totalCount?: number;
    showingCount?: number;
    currentSort?: SortKey;
    activeFilters?: Record<string, string[]>;
    onSortChange?: (sort: SortKey) => void;
    onFilterChange?: (group: string, value: string) => void;
    onClearAll?: () => void;
}
export interface PaginationBarProps {
    currentPage: number;
    totalPages: number;
    totalCount?: number;
    style: PaginationStyle;
    alignment: 'left' | 'center' | 'right';
    maxPageNumbers?: number;
    /** Current products-per-page value. */
    perPage?: number;
    /** Available per-page options shown in the dropdown. */
    perPageOptions?: number[];
    /** Whether to show the per-page selector dropdown. */
    showPerPageSelector?: boolean;
    onPageChange?: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
}
export interface SimpleProductGridProps {
    columns: '2' | '3' | '4' | '5' | '6';
    gap: 'sm' | 'md' | 'lg' | 'xl';
    imageAspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
    cardStyle: 'shadow' | 'bordered' | 'minimal' | 'overlay';
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    products?: any[];
    loading?: boolean;
    renderProduct?: (product: any) => React.ReactNode;
}
//# sourceMappingURL=types.d.ts.map