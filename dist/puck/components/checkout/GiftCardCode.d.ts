import type { ComponentConfig } from '@puckeditor/core';
export interface GiftCardCodeProps {
    layout: 'inline' | 'expandable';
    showAppliedGiftCard: boolean;
    buttonText: string;
    placeholder: string;
}
export interface GiftCardApplyResult {
    success: boolean;
    error?: 'invalid' | 'expired' | 'redeemed' | 'insufficient' | 'network';
    amountApplied?: number;
    remainingBalance?: number;
}
export interface GiftCardCodeWithData extends GiftCardCodeProps {
    /** Injected by the storefront wrapper; mock in editor preview */
    appliedGiftCard?: {
        code: string;
        amount: number;
        remaining: number;
    } | null;
    onApply?: (code: string) => Promise<GiftCardApplyResult>;
    onRemove?: () => void | Promise<void>;
    formatPrice?: (price: number) => string;
}
export declare const GiftCardCode: ComponentConfig<GiftCardCodeWithData>;
//# sourceMappingURL=GiftCardCode.d.ts.map