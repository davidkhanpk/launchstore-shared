import type { ComponentConfig } from '@puckeditor/core';
export interface PaymentMethodProps {
    layout: 'list' | 'cards' | 'icons';
    showPaymentIcons: boolean;
    showSecurityBadges: boolean;
    enableSaveCard: boolean;
}
export interface PaymentMethodWithData extends PaymentMethodProps {
    methods?: Array<{
        id: string;
        name: string;
        icon: string;
        description: string;
    }>;
    selectedId?: string;
    onSelect?: (id: string) => void;
    onContinue?: () => void;
}
export declare const PaymentMethod: ComponentConfig<PaymentMethodWithData>;
export default PaymentMethod;
//# sourceMappingURL=PaymentMethod.d.ts.map