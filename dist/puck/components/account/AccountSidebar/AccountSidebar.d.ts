import type { ComponentConfig } from '@puckeditor/core';
export interface AccountSidebarProps {
    showOrders: boolean;
    showProfile: boolean;
    showAddresses: boolean;
    showWishlist: boolean;
    showPaymentMethods: boolean;
    showConcierge: boolean;
    showRewards: boolean;
    showLogout: boolean;
    style: 'standard' | 'luxury';
    activeView: string;
}
export declare const accountSidebarFields: ComponentConfig<AccountSidebarProps>['fields'];
export declare const AccountSidebar: ComponentConfig<AccountSidebarProps>;
export default AccountSidebar;
//# sourceMappingURL=AccountSidebar.d.ts.map