import type { ComponentConfig } from '@puckeditor/core';
import type { CartItem, OrderSummaryProps } from './cart.types';
export interface OrderSummaryWithData extends OrderSummaryProps {
    items?: CartItem[];
    totals?: {
        subtotal: number;
        shipping: number;
        tax: number;
        discount: number;
        total: number;
    };
    formatPrice?: (price: number) => string;
}
export declare const OrderSummary: ComponentConfig<OrderSummaryWithData>;
export default OrderSummary;
//# sourceMappingURL=OrderSummary.d.ts.map