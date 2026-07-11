import type { ComponentConfig } from '@puckeditor/core';
import type { AddToCartProps, AddToCartFn } from './addtocart.types';
export interface AddToCartWithData extends AddToCartProps {
    /** Selected variant id (from consumer's useVariantSelection). */
    selectedVariantId?: string | null;
    /** Quantity selector state. Defaults to 1 if omitted. */
    quantity?: number;
    /** Consumer's add-to-cart action. */
    onAdd?: AddToCartFn;
    /** In-flight state from consumer. */
    isLoading?: boolean;
    /** Whether the selected variant is in stock. Defaults to true. */
    inStock?: boolean;
    /** Whether the selected variant is a preorder. Defaults to false. */
    isPreorder?: boolean;
    /** Optional preorder ship date (ISO string). */
    preorderAvailableDate?: string;
    /** Optional theme object for color token resolution. */
    theme?: any;
}
export declare const AddToCart: ComponentConfig<AddToCartWithData>;
export default AddToCart;
//# sourceMappingURL=AddToCart.d.ts.map