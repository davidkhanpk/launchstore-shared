import type { ComponentConfig } from '@puckeditor/core';
import type { RecentlyViewedProductsProps } from './recentlyviewedproducts.types';
import type { CarouselProduct } from '../../swiper/ProductCarousel';
export interface RecentlyViewedProductsWithData extends RecentlyViewedProductsProps {
    products?: CarouselProduct[];
}
export declare const RecentlyViewedProducts: ComponentConfig<RecentlyViewedProductsWithData>;
export default RecentlyViewedProducts;
//# sourceMappingURL=RecentlyViewedProducts.d.ts.map