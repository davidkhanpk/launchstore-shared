import type { Field } from '@puckeditor/core';

export type ProductRatingSize = 'sm' | 'md' | 'lg';

export interface ProductRatingSummary {
  average_rating: number;
  count: number;
}

export type FetchProductReviews = (productId: string, opts?: { limit?: number }) => Promise<ProductRatingSummary | null>;

/**
 * Pad to: shared stores ProductRatingSummary which the consumer's
 * fetchProductReviews returns. Falls back to null/0 values when
 * omitted (Puck canvas preview).
 */
export interface ProductRatingProps {
  showCount: boolean;
  size: ProductRatingSize;
}

export const NOOP_FETCH_REVIEWS: FetchProductReviews = async () => null;
