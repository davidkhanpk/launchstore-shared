import type { ComponentConfig } from '@puckeditor/core';
import type { ProductRatingProps, FetchProductReviews } from './productrating.types';
import type { ProductData } from '../ProductData';
export interface ProductRatingWithProduct extends ProductRatingProps {
    product?: ProductData | null;
    /** Injected by consumer wrapper (e.g., wraps @lib/data/reviews.fetchProductReviews). */
    fetchReviews?: FetchProductReviews;
}
export declare const ProductRating: ComponentConfig<ProductRatingWithProduct>;
export default ProductRating;
//# sourceMappingURL=ProductRating.d.ts.map