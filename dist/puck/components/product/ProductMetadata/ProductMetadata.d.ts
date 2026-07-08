import type { ComponentConfig } from '@puckeditor/core';
import type { ProductMetadataProps } from './productmetadata.types';
import type { ProductData } from '../ProductData';
export interface ProductMetadataWithProduct extends ProductMetadataProps {
    product?: ProductData | null;
}
export declare const ProductMetadata: ComponentConfig<ProductMetadataWithProduct>;
export default ProductMetadata;
//# sourceMappingURL=ProductMetadata.d.ts.map