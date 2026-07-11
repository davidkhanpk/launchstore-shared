import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { RelatedProductsProps } from './relatedproducts.types';
import type { CarouselProduct } from '../../swiper/ProductCarousel';
export interface RelatedProductsWithData extends RelatedProductsProps {
    products?: CarouselProduct[];
    taglineRender?: (tagline: string) => React.ReactNode;
}
export declare const RelatedProducts: ComponentConfig<RelatedProductsWithData>;
export default RelatedProducts;
//# sourceMappingURL=RelatedProducts.d.ts.map