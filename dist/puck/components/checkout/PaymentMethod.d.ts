import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
export interface PaymentMethodProps {
    layout: 'list' | 'cards' | 'icons';
    showPaymentIcons: boolean;
    showSecurityBadges: boolean;
    enableSaveCard: boolean;
}
/**
 * Each `Method` only needs `id`. The shared component looks up the display
 * meta (title, description, icon) from `PAYMENT_INFO_MAP`. Wrappers can
 * override per-method by passing extra fields (name/description/icon).
 */
export interface PaymentMethodItem {
    id: string;
    name?: string;
    icon?: React.JSX.Element;
    description?: string;
}
export interface PaymentMethodWithData extends PaymentMethodProps {
    methods?: PaymentMethodItem[];
    selectedId?: string;
    onSelect?: (id: string) => void;
    onContinue?: () => void;
    /**
     * When `false`, the "Review Order" button is hidden. Use in
     * single-page step-by-step checkouts to hide the button once the user
     * has picked a payment method. Defaults to `true` for the legacy
     * multi-step flow.
     */
    showContinueButton?: boolean;
    /**
     * When `true`, the "Review Order" button is disabled and shows a
     * spinner + "Saving..." label. Use during the API call that commits
     * the staging choice to Medusa. Defaults to `false`.
     */
    isLoading?: boolean;
    /** Optional label override for the button while loading. */
    loadingText?: string;
}
export declare const PaymentMethod: ComponentConfig<PaymentMethodWithData>;
export default PaymentMethod;
//# sourceMappingURL=PaymentMethod.d.ts.map