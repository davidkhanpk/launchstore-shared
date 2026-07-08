import type { ComponentConfig } from '@puckeditor/core';
export interface DiscountCodeProps {
    layout: 'inline' | 'expandable';
    showAppliedDiscounts: boolean;
    buttonText: string;
    placeholder: string;
}
export interface DiscountCodeWithData extends DiscountCodeProps {
    appliedDiscount?: {
        code: string;
        amount: number;
    } | null;
    onApply?: (code: string) => void | Promise<void>;
    onRemove?: () => void;
    formatPrice?: (price: number) => string;
}
export declare const DiscountCode: ComponentConfig<DiscountCodeWithData>;
export default DiscountCode;
//# sourceMappingURL=DiscountCode.d.ts.map