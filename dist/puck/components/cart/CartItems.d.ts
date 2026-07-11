import type { ComponentConfig } from '@puckeditor/core';
import type { CartItem, CartItemUpdateFn, CartItemDeleteFn, CartItemsProps } from './cart.types';
export interface CartItemsWithData extends CartItemsProps {
    items?: CartItem[];
    onQuantityChange?: CartItemUpdateFn;
    onDelete?: CartItemDeleteFn;
    updatingItems?: Record<string, boolean>;
    formatPrice?: (price: number) => string;
}
export declare const CartItems: ComponentConfig<CartItemsWithData>;
export default CartItems;
//# sourceMappingURL=CartItems.d.ts.map