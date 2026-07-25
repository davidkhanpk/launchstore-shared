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
}
export declare const PaymentMethod: ComponentConfig<PaymentMethodWithData>;
export default PaymentMethod;
//# sourceMappingURL=PaymentMethod.d.ts.map