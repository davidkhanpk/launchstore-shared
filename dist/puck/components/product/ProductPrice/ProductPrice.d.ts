import type { ComponentConfig } from '@puckeditor/core';
import type { ProductPriceProps } from './productprice.types';
import type { ProductData } from '../ProductData';
export interface ProductPriceWithProduct extends ProductPriceProps {
    product?: ProductData | null;
}
export declare const ProductPrice: ComponentConfig<ProductPriceWithProduct>;
export default ProductPrice;
//# sourceMappingURL=ProductPrice.d.ts.map