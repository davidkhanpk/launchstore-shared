import type { ComponentConfig } from '@puckeditor/core';
export interface AccountProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    birthday?: string;
    address?: string;
    newsletter?: boolean;
    orderNotifications?: boolean;
}
export interface AccountProfileProps {
    layout: 'single-column' | 'two-column' | 'card-grid';
    showAvatar: boolean;
    showPersonalInfo: boolean;
    showContactInfo: boolean;
    showPreferences: boolean;
    allowEditing: boolean;
    editButtonText: string;
    saveButtonText: string;
    cancelButtonText: string;
    backgroundColor: string;
    textColor: string;
}
export interface AccountProfileWithData extends AccountProfileProps {
    profile?: AccountProfile;
    avatarUrl?: string;
    onSave?: (profile: AccountProfile) => void | Promise<void>;
}
export declare const AccountProfile: ComponentConfig<AccountProfileWithData>;
export default AccountProfile;
//# sourceMappingURL=AccountProfile.d.ts.map