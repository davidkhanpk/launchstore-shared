import type { ComponentConfig } from '@puckeditor/core';
import type { ProductBreadcrumbsProps } from './productbreadcrumbs.types';
import type { ProductData } from '../ProductData';
export interface ProductBreadcrumbsWithProduct extends ProductBreadcrumbsProps {
    product?: ProductData | null;
}
export declare const ProductBreadcrumbs: ComponentConfig<ProductBreadcrumbsWithProduct>;
export default ProductBreadcrumbs;
//# sourceMappingURL=ProductBreadcrumbs.d.ts.map