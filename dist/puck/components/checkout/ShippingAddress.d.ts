import type { ComponentConfig } from '@puckeditor/core';
export interface ShippingAddressProps {
    showBillingAddress: boolean;
    requirePhone: boolean;
    showCompanyField: boolean;
    enableAddressAutocomplete: boolean;
    defaultSameAsBilling: boolean;
    layout: 'single-column' | 'two-column';
}
export interface ShippingAddressWithData extends ShippingAddressProps {
    onContinue?: () => void;
    onSameAsBillingChange?: (v: boolean) => void;
    sameAsBilling?: boolean;
    countries?: Array<{
        code: string;
        name: string;
    }>;
    states?: Array<{
        code: string;
        name: string;
    }>;
}
export declare const ShippingAddress: ComponentConfig<ShippingAddressWithData>;
export default ShippingAddress;
//# sourceMappingURL=ShippingAddress.d.ts.map