import type { ComponentConfig } from '@puckeditor/core';
import type { ProductCarouselProps } from './productcarousel.types';
/**
 * Minimal product shape the carousel needs. Consumers project
 * HttpTypes.StoreProduct -> this (or pass the full Medusa
 * shape and let the runtime features [calculated_price, etc.] work).
 */
export interface CarouselProduct {
    id: string;
    title: string;
    handle?: string;
    thumbnail?: string;
    images?: {
        url: string;
    }[];
    variants?: {
        calculated_price?: any;
        original_price?: any;
    }[];
}
export interface ProductCarouselWithProducts extends ProductCarouselProps {
    products?: CarouselProduct[];
    onAddToCart?: (productId: string) => void;
}
export declare const ProductCarousel: ComponentConfig<ProductCarouselWithProducts>;
export default ProductCarousel;
//# sourceMappingURL=ProductCarousel.d.ts.map