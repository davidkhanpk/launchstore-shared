import type { ComponentConfig } from '@puckeditor/core';
import type { ProductCardProps, SharedProductCardProduct, RenderProductCard } from './productcard.types';
export interface ProductCardWithRender extends ProductCardProps {
    product?: SharedProductCardProduct | null;
    renderProduct?: RenderProductCard;
}
export declare const ProductCard: ComponentConfig<ProductCardWithRender>;
export default ProductCard;
//# sourceMappingURL=ProductCard.d.ts.map