import type { ComponentConfig } from '@puckeditor/core';
import type { ProductReviewsProps, FetchReviews, CreateReviewFn, VoteOnReview, UploadReviewMedia, FetchCustomer } from './productreviews.types';
import type { ProductData } from '../ProductData';
export interface ProductReviewsWithData extends ProductReviewsProps {
    product?: ProductData | null;
    fetchReviews?: FetchReviews;
    createReview?: CreateReviewFn;
    voteOnReview?: VoteOnReview;
    uploadReviewMedia?: UploadReviewMedia;
    fetchCustomer?: FetchCustomer;
    /** Sign-in href (consumer passes the localized URL). */
    signInHref?: string;
}
export declare const ProductReviews: ComponentConfig<ProductReviewsWithData>;
export default ProductReviews;
//# sourceMappingURL=ProductReviews.d.ts.map