import type { ComponentConfig } from '@puckeditor/core';
import type { ProductDescriptionProps } from './productdescription.types';
import type { ProductData } from '../ProductData';
export interface ProductDescriptionWithProduct extends ProductDescriptionProps {
    product?: ProductData | null;
}
export declare const ProductDescription: ComponentConfig<ProductDescriptionWithProduct>;
export default ProductDescription;
//# sourceMappingURL=ProductDescription.d.ts.map