/**
 * Domain-agnostic subset of a product used by the product/
 * Puck components. Source-of-truth: storefront's
 * `@lib/hooks/useProduct` shape; consumers project their
 * product objects into this.
 *
 * NOTE: The homepage/FeaturedProducts component also exports a
 * `SharedProduct` interface (representing a card-view product).
 * They describe overlapping but not identical shapes — the
 * namespacing keeps both exportable from launchstore-shared
 * without collision.
 *
 * Different product/* components require different slices:
 *   - ProductTitle: title
 *   - ProductDescription: description (HTML)
 *   - ProductPrice: variants[]
 *   - ProductMetadata: variants[0].sku + weight/length/width/height/origin_country
 */
export interface ProductDataVariant {
  id: string;
  sku?: string;
  weight?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
}

export interface ProductDataPrice {
  /** Calculated display price, e.g. "$24.99". */
  calculated_price: string;
  original_price?: string;
  /** e.g. "sale" | "default" \u2014 used to detect on-sale state. */
  price_type?: string;
  /** Percentage savings string e.g. "20%". */
  percentage_diff?: string;
}

export interface ProductDataCollection {
  title: string;
  handle: string;
}

export interface ProductDataCategory {
  name: string;
  handle: string;
}

export interface ProductData {
  id: string;
  title: string;
  description?: string;
  handle?: string;
  material?: string;
  /** Medusa StoreProduct convention \u2014 number fields are nullable. */
  weight?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  origin_country?: string | null;
  metadata?: Record<string, any>;
  variants?: ProductDataVariant[];
  collection?: ProductDataCollection | null;
  categories?: ProductDataCategory[];
}
