import type { ComponentConfig } from '@puckeditor/core';
import type { ProductAccordionProps } from './productaccordion.types';
import type { ProductData } from '../ProductData';
export interface ProductAccordionWithProduct extends ProductAccordionProps {
    product?: ProductData | null;
}
export declare const ProductAccordion: ComponentConfig<ProductAccordionWithProduct>;
export default ProductAccordion;
//# sourceMappingURL=ProductAccordion.d.ts.map