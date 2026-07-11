import type { ProductGridProps } from './productgrid.types';
/**
 * Internal: the sub-renderer used by both RelatedProducts and
 * RecentlyViewedProducts. Takes a flat `products` array; if empty,
 * renders nothing. Otherwise renders either a swiper carousel
 * (using shared `ProductCarousel`) or a simple grid (using shared
 * `ProductCard`).
 *
 * Not exported as a Puck component itself — T-061 / T-062 are
 * the consumer-facing Puck shapes; this is the shared rendering
 * primitive.
 */
import React from 'react';
import type { CarouselProduct } from '../../swiper/ProductCarousel';
export declare const ProductGridRenderer: React.FC<ProductGridProps & {
    products: CarouselProduct[];
}>;
//# sourceMappingURL=productgrid.d.ts.map