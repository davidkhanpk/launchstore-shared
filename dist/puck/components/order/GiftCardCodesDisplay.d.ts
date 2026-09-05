import type { ComponentConfig } from '@puckeditor/core';
export interface GiftCardCodesDisplayProps {
    showCopyButton: boolean;
    showEmailNote: boolean;
    title: string;
}
export interface GiftCardCodesDisplayWithData extends GiftCardCodesDisplayProps {
    /** Injected by the storefront wrapper; mock in editor preview */
    giftCards?: Array<{
        code: string;
        value: number;
        currency: string;
    }>;
    orderId?: string;
}
export declare const GiftCardCodesDisplay: ComponentConfig<GiftCardCodesDisplayWithData>;
//# sourceMappingURL=GiftCardCodesDisplay.d.ts.map