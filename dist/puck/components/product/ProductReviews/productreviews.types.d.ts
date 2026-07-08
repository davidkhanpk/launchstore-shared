export type ReviewSort = 'recent' | 'helpful' | 'rating_high' | 'rating_low';
export interface SharedReviewMedia {
    url: string;
    type: 'image' | 'video';
}
export interface SharedReview {
    id: string;
    title?: string;
    content: string;
    rating: number;
    display_name?: string;
    first_name?: string;
    last_name?: string;
    verified_purchase?: boolean;
    verified_source?: 'none' | 'order_history' | 'review_token';
    created_at: string;
    media_urls?: string[];
    merchant_reply?: string;
    helpful_count?: number;
    unhelpful_count?: number;
    pros?: string;
    cons?: string;
    recommend?: boolean;
}
export type SharedRatingDistribution = Record<'1' | '2' | '3' | '4' | '5', number>;
export interface SharedReviewsResponse {
    reviews: SharedReview[];
    count: number;
    limit: number;
    offset: number;
    average_rating: number;
    rating_distribution: SharedRatingDistribution;
    recommendation_rate: number;
}
export interface SharedFetchReviewsParams {
    limit?: number;
    offset?: number;
    sort?: string;
    rating?: number;
    with_media?: boolean;
}
export interface SharedCreateReviewInput {
    product_id: string;
    content: string;
    rating: number;
    first_name: string;
    last_name: string;
    title?: string;
    pros?: string;
    cons?: string;
    recommend?: boolean;
    media_urls?: string[];
    verified_purchase?: boolean;
    verified_source?: 'none' | 'order_history' | 'review_token';
}
export interface SharedReviewsCustomer {
    first_name?: string;
    last_name?: string;
    email?: string;
}
export type FetchReviews = (productId: string, params: SharedFetchReviewsParams) => Promise<SharedReviewsResponse>;
export type CreateReviewFn = (input: SharedCreateReviewInput) => Promise<SharedReview>;
export type VoteOnReview = (reviewId: string, isHelpful: boolean) => Promise<void>;
export type UploadReviewMedia = (reviewId: string, file: File) => Promise<SharedReviewMedia>;
export type FetchCustomer = () => Promise<SharedReviewsCustomer | null>;
export interface ProductReviewsProps {
    showRatingsSummary: boolean;
    showVerifiedBadge: boolean;
    sortBy: ReviewSort;
    reviewsPerPage: number;
}
//# sourceMappingURL=productreviews.types.d.ts.map