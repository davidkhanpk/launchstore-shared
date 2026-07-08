import type { ComponentConfig } from '@puckeditor/core';
import type { CartTotals, CartCoupon, CartSummaryProps } from './cart.types';
export interface CartSummaryWithData extends CartSummaryProps {
    totals?: CartTotals;
    appliedCoupon?: CartCoupon | null;
    onApplyCoupon?: (code: string) => void | Promise<void>;
    onRemoveCoupon?: () => void;
    onCheckout?: () => void;
    formatPrice?: (price: number) => string;
}
export declare const CartSummary: ComponentConfig<CartSummaryWithData>;
export default CartSummary;
//# sourceMappingURL=CartSummary.d.ts.map