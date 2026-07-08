import type { ComponentConfig } from '@puckeditor/core';
export interface Address {
    id: string;
    type: 'shipping' | 'billing';
    firstName: string;
    lastName: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    isDefault: boolean;
}
export interface AddressBookProps {
    layout: 'grid' | 'list';
    showAddButton: boolean;
    showTypeLabels: boolean;
    maxAddresses: number;
    backgroundColor: string;
    cardBackgroundColor: string;
    textColor: string;
    addButtonText: string;
    editButtonText: string;
    deleteButtonText: string;
    setDefaultText: string;
    defaultBadgeText: string;
    emptyStateText: string;
}
export interface AddressBookWithData extends AddressBookProps {
    addresses?: Address[];
    onAdd?: () => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onSetDefault?: (id: string) => void;
}
export declare const AddressBook: ComponentConfig<AddressBookWithData>;
export default AddressBook;
//# sourceMappingURL=AddressBook.d.ts.map