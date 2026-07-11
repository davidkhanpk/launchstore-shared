import type { ComponentConfig } from '@puckeditor/core';
export interface AccountContentProps {
    defaultView: 'dashboard' | 'orders' | 'profile' | 'addresses' | 'wishlist';
    showRecentOrders: boolean;
    showWishlist: boolean;
    showRecommendations: boolean;
    showLoyaltyPoints: boolean;
    showPersonalStylist: boolean;
    luxuryStyle: boolean;
}
export declare const accountContentFields: ComponentConfig<AccountContentProps>['fields'];
export declare const AccountContent: ComponentConfig<AccountContentProps>;
export default AccountContent;
//# sourceMappingURL=AccountContent.d.ts.map