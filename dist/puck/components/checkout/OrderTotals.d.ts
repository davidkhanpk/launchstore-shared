import type { ComponentConfig } from '@puckeditor/core';
export interface OrderTotalsProps {
    showSubtotal: boolean;
    showShipping: boolean;
    showTax: boolean;
    showDiscount: boolean;
    showGiftCard?: boolean;
    showTotal: boolean;
    highlightTotal: boolean;
    layout: 'default' | 'compact';
}
export interface OrderTotalsWithData extends OrderTotalsProps {
    totals?: {
        subtotal: string;
        shipping: string;
        tax: string;
        discount: string;
        giftCard?: string;
        giftCardCode?: string;
        volumeSavings?: string;
        total: string;
        discountCode?: string;
    };
}
export declare const OrderTotals: ComponentConfig<OrderTotalsWithData>;
export default OrderTotals;
//# sourceMappingURL=OrderTotals.d.ts.map