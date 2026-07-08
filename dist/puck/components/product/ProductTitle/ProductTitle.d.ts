import type { ComponentConfig } from '@puckeditor/core';
import type { ProductTitleProps } from './producttitle.types';
import type { ProductData } from '../ProductData';
export interface ProductTitleWithProduct extends ProductTitleProps {
    /** Injected at render-time by the consumer wrapper. */
    product?: ProductData | null;
}
export declare const ProductTitle: ComponentConfig<ProductTitleWithProduct>;
export default ProductTitle;
//# sourceMappingURL=ProductTitle.d.ts.map