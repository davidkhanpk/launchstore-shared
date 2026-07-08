import type { CartItem, CartItemLayout, CartItemUpdateFn, CartItemDeleteFn } from './cart.types';
export interface CartItemsViewProps extends CartItem {
    layout: CartItemLayout;
    showImages: boolean;
    showVariantInfo: boolean;
    showQuantitySelector: boolean;
    showDeleteButton: boolean;
    imageSize: 'sm' | 'md' | 'lg';
    maxQuantity: number;
    onQuantityChange: CartItemUpdateFn;
    onDelete: CartItemDeleteFn;
    updating: boolean;
    formatPrice: (price: number) => string;
}
export declare const CartItemRow: React.FC<CartItemsViewProps>;
//# sourceMappingURL=CartItemRow.d.ts.map