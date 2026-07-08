import type { ComponentConfig } from '@puckeditor/core';
export interface OrderConfirmationProps {
    showCheckmark: boolean;
    titleText: string;
    messageText: string;
    showOrderNumber: boolean;
    showEmailConfirmation: boolean;
    showContinueShopping: boolean;
    style: 'success' | 'minimal' | 'detailed';
}
export interface OrderConfirmationWithData extends OrderConfirmationProps {
    orderId?: string;
    email?: string;
    createdAt?: string;
    viewOrderHref?: string;
    continueShoppingHref?: string;
}
export declare const OrderConfirmation: ComponentConfig<OrderConfirmationWithData>;
export default OrderConfirmation;
//# sourceMappingURL=OrderConfirmation.d.ts.map