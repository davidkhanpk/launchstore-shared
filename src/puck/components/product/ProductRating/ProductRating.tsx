import React, { useState, useEffect } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productRatingFields } from './productrating.fields';
import type { ProductRatingProps, ProductRatingSize, FetchProductReviews } from './productrating.types';
import type { ProductData } from '../ProductData';

const StarSvg = ({ filled, size = 16 }: { filled: boolean; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const SIZE_MAP: Record<ProductRatingSize, number> = { sm: 14, md: 20, lg: 24 };

export interface ProductRatingWithProduct extends ProductRatingProps {
  product?: ProductData | null;
  /** Injected by consumer wrapper (e.g., wraps @lib/data/reviews.fetchProductReviews). */
  fetchReviews?: FetchProductReviews;
}

export const ProductRating: ComponentConfig<ProductRatingWithProduct> = {
  label: 'Product Rating',
  fields: productRatingFields as ComponentConfig<ProductRatingWithProduct>['fields'],
  defaultProps: { showCount: true, size: 'md' },
  render: (rawProps: any) => {
    const { showCount = true, size = 'md', product, fetchReviews } = rawProps as ProductRatingWithProduct;

    const [rating, setRating] = useState<number | null>(null);
    const [count, setCount] = useState(0);
    const loader: FetchProductReviews = fetchReviews || (async () => null);

    useEffect(() => {
      if (!product?.id) return;
      loader(product.id, { limit: 1 })
        .then((data) => {
          if (data && data.average_rating != null && data.count > 0) {
            setRating(data.average_rating);
            setCount(data.count);
          }
        })
        .catch(() => {});
    }, [product?.id, loader]);

    if (!product || rating === null) return <></>;

    const starSize = SIZE_MAP[(size as ProductRatingSize) || 'md'] || 20;
    const rounded = Math.round(rating);
    return (
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={s <= rounded ? 'text-yellow-400' : 'text-gray-300'}>
              <StarSvg filled={s <= rounded} size={starSize} />
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
        {showCount && <span className="text-sm text-gray-500">({count})</span>}
      </div>
    );
  },
};

export default ProductRating;
