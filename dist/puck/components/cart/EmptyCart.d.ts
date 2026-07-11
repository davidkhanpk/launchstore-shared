import type { ComponentConfig } from '@puckeditor/core';
export interface EmptyCartConfig {
    title: string;
    message: string;
    linkText: string;
    linkUrl: string;
    showOnlyWhenEmpty: boolean;
}
export interface EmptyCartWithData extends EmptyCartConfig {
    isEmpty?: boolean;
}
export declare const EmptyCart: ComponentConfig<EmptyCartWithData>;
export default EmptyCart;
//# sourceMappingURL=EmptyCart.d.ts.map