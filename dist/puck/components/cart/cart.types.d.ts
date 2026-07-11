export interface CartItem {
    id: string;
    title: string;
    product_title: string;
    product_handle: string;
    thumbnail?: string;
    variant: {
        id: string;
        title: string;
        options: Array<{
            value: string;
        }>;
    };
    quantity: number;
    unit_price: number;
    total: number;
    isPreorder?: boolean;
}
export interface CartTotals {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
}
export interface CartCoupon {
    code: string;
    amount: number;
}
export type CartItemLayout = 'table' | 'list' | 'card';
export type CartSummaryPosition = 'sidebar' | 'bottom';
export type OrderSummaryPosition = 'sidebar' | 'inline';
export type CartItemUpdateFn = (itemId: string, quantity: number) => void | Promise<void>;
export type CartItemDeleteFn = (itemId: string) => void | Promise<void>;
export interface CartItemsProps {
    layout: CartItemLayout;
    showImages: boolean;
    showVariantInfo: boolean;
    showQuantitySelector: boolean;
    showDeleteButton: boolean;
    imageSize: 'sm' | 'md' | 'lg';
    maxQuantity: number;
    emptyMessage: string;
}
export interface CartSummaryProps {
    showSubtotal: boolean;
    showShipping: boolean;
    showTax: boolean;
    showDiscount: boolean;
    showCouponInput: boolean;
    showCheckoutButton: boolean;
    checkoutButtonText: string;
    freeShippingThreshold: number;
    position: CartSummaryPosition;
    showTrustBadges: boolean;
}
export interface OrderSummaryProps {
    position: OrderSummaryPosition;
    showItemImages: boolean;
    showItemQuantity: boolean;
    showItemPrice: boolean;
    showSubtotal: boolean;
    showShipping: boolean;
    showTax: boolean;
    showDiscount: boolean;
    showTotal: boolean;
    compactView: boolean;
}
export interface CheckoutFormProps {
    showStepIndicators: boolean;
    enableGuestCheckout: boolean;
    requirePhoneNumber: boolean;
    showSaveAddressCheckbox: boolean;
    defaultCountry: string;
    showOrderNotes: boolean;
}
//# sourceMappingURL=cart.types.d.ts.map