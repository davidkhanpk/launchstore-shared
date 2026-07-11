import type { ComponentConfig } from '@puckeditor/core';
export interface OrderItem {
    id: string;
    title: string;
    variant: string;
    thumbnail?: string;
    quantity: number;
    unit_price: number;
    total: number;
    isPreorder?: boolean;
}
export interface OrderAddress {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
}
export interface OrderPayment {
    provider: string;
    card_last4: string;
    card_brand: string;
}
export interface OrderDetailsProps {
    showItemImages: boolean;
    showItemQuantity: boolean;
    showItemPrice: boolean;
    showShippingAddress: boolean;
    showBillingAddress: boolean;
    showPaymentMethod: boolean;
    showShippingMethod: boolean;
    showPricingBreakdown: boolean;
    compactView: boolean;
}
export interface OrderDetailsWithData extends OrderDetailsProps {
    items?: OrderItem[];
    shippingAddress?: OrderAddress;
    billingAddress?: OrderAddress;
    payment?: OrderPayment;
    shippingMethod?: {
        method: string;
        cost: number;
    };
    totals?: {
        subtotal: number;
        shipping_total: number;
        tax_total: number;
        total: number;
    };
    formatPrice?: (price: number) => string;
}
export declare const OrderDetails: ComponentConfig<OrderDetailsWithData>;
export default OrderDetails;
//# sourceMappingURL=OrderDetails.d.ts.map