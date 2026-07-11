import type { ComponentConfig } from '@puckeditor/core';
export interface HeaderActionsProps {
    showSearch: boolean;
    showAccount: boolean;
    showWishlist: boolean;
    showCart: boolean;
    iconSize: 'sm' | 'md' | 'lg';
    gap: 'sm' | 'md' | 'lg';
    alignment: 'left' | 'center' | 'right';
    color: string;
    cartCount: number;
}
export declare const headerActionsFields: ComponentConfig<HeaderActionsProps>['fields'];
export declare const HeaderActions: ComponentConfig<HeaderActionsProps>;
export default HeaderActions;
//# sourceMappingURL=HeaderActions.d.ts.map