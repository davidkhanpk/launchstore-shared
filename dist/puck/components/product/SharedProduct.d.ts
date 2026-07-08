/**
 * Domain-agnostic subset of a product used by the product/
 * Puck components. Source-of-truth: storefront's
 * `@lib/hooks/useProduct` shape; consumers project their
 * product objects into this.
 *
 * Different components require different slices:
 *   - ProductTitle: title
 *   - ProductDescription: description (HTML)
 *   - ProductPrice: variants[]
 *   - ProductMetadata: variants[0].sku + weight/length/width/height/origin_country
 *
 * Fields beyond what one component needs are simply ignored.
 */
export interface SharedProductVariant {
    id: string;
    sku?: string;
    /** Numeric weight in grams (Medusa convention). */
    weight?: number | null;
    /** Numeric length in cm. */
    length?: number | null;
    /** Numeric width in cm. */
    width?: number | null;
    /** Numeric height in cm. */
    height?: number | null;
}
export interface SharedPriceData {
    /** Calculated display price, e.g. "$24.99". */
    calculated_price: string;
    /** Original price (compare-at). */
    original_price?: string;
    /** e.g. "sale" | "default" — used to detect on-sale state. */
    price_type?: string;
    /** Percentage savings string e.g. "20%". */
    percentage_diff?: string;
}
export interface SharedProduct {
    id: string;
    title: string;
    description?: string;
    handle?: string;
    material?: string;
    /** Medusa StoreProduct convention — number fields are nullable. */
    weight?: number | null;
    length?: number | null;
    width?: number | null;
    height?: number | null;
    origin_country?: string | null;
    metadata?: Record<string, any>;
    variants?: SharedProductVariant[];
}
/**
 * Resolution helper: cheapest price across variants.
 * Pure function — consumers can override with their region-aware logic.
 */
export declare const resolveCheapestPrice: (product: SharedProduct | null | undefined) => SharedPriceData | undefined;
//# sourceMappingURL=SharedProduct.d.ts.map