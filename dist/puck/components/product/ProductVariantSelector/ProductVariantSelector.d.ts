import type { ComponentConfig } from '@puckeditor/core';
import type { ProductVariantSelectorProps, SelectedOptions, SetSelectedOptions, SetSelectedVariant, ProductVariantSelectorVariantLike } from './productvariantselector.types';
import type { ProductData } from '../ProductData';
export interface ProductVariantSelectorWithState extends ProductVariantSelectorProps {
    product?: ProductData | null;
    selectedOptions?: SelectedOptions;
    setSelectedOptions?: SetSelectedOptions;
    selectedVariant?: ProductVariantSelectorVariantLike | null;
    setSelectedVariant?: SetSelectedVariant;
}
export declare const ProductVariantSelector: ComponentConfig<ProductVariantSelectorWithState>;
export default ProductVariantSelector;
//# sourceMappingURL=ProductVariantSelector.d.ts.map