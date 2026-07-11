import type { ComponentConfig } from '@puckeditor/core';
export interface OrderReviewProps {
    showTermsCheckbox: boolean;
    showPolicies: boolean;
    showSecurityBadge: boolean;
    buttonText: string;
    buttonSize: 'default' | 'large';
}
export interface OrderReviewWithData extends OrderReviewProps {
    shippingAddress?: {
        name: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        email: string;
    };
    shippingMethod?: {
        name: string;
        price: string;
        estimate: string;
    };
    paymentMethod?: {
        description: string;
    };
    termsHref?: string;
    privacyHref?: string;
    refundHref?: string;
    shippingPolicyHref?: string;
    contactHref?: string;
    onPlaceOrder?: () => void | Promise<void>;
    isProcessing?: boolean;
    agreedToTerms?: boolean;
    onAgreedChange?: (v: boolean) => void;
}
export declare const OrderReview: ComponentConfig<OrderReviewWithData>;
export default OrderReview;
//# sourceMappingURL=OrderReview.d.ts.map