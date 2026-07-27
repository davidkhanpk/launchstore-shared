import type { ComponentConfig } from '@puckeditor/core';
export interface ShippingAddressProps {
    showBillingAddress: boolean;
    requirePhone: boolean;
    showCompanyField: boolean;
    showAddress2Field: boolean;
    showProvinceField: boolean;
    enableAddressAutocomplete: boolean;
    defaultSameAsBilling: boolean;
    layout: 'single-column' | 'two-column';
}
/** Address shape compatible with `BaseCartAddress` and `BaseCustomerAddress`. */
export interface ShippingAddressValue {
    id?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    province?: string;
    postal_code?: string;
    country_code?: string;
    phone?: string;
}
export interface ShippingAddressWithData extends ShippingAddressProps {
    onContinue?: () => void;
    /**
     * When `false`, the "Continue to Shipping Method" button is hidden.
     * Use in single-page step-by-step checkouts to hide the button once
     * the user has saved the address and moved to the next step. Defaults
     * to `true` for the legacy multi-step flow where each step needs
     * an explicit Continue click to advance.
     */
    showContinueButton?: boolean;
    /**
     * When `true`, the "Continue to Shipping Method" button is disabled
     * and shows a spinner + "Saving..." label. Use during the API call
     * that saves the address to Medusa. Defaults to `false`. Matches
     * the same prop on ShippingMethod / PaymentMethod / OrderReview.
     */
    isLoading?: boolean;
    /** Optional label override for the button while loading. */
    loadingText?: string;
    onSameAsBillingChange?: (v: boolean) => void;
    onSelectSavedAddress?: (address: ShippingAddressValue) => void;
    /**
     * Controlled form values. If provided, the inputs render with `value={formData.X}`
     * and call `onFormChange` on each keystroke. If undefined, inputs are
     * uncontrolled (legacy behavior) — the wrapper must then read values from
     * the DOM via refs or form submission.
     */
    formData?: ShippingAddressValue;
    onFormChange?: (next: ShippingAddressValue) => void;
    sameAsBilling?: boolean;
    countries?: Array<{
        code: string;
        name: string;
    }>;
    states?: Array<{
        code: string;
        name: string;
    }>;
    /**
     * Saved customer addresses (filtered by region) shown as a dropdown for
     * logged-in customers. Wrapper passes `customer.addresses` filtered by
     * the cart's region countries. If empty/undefined, the dropdown is hidden.
     */
    savedAddresses?: ShippingAddressValue[];
}
export declare const ShippingAddress: ComponentConfig<ShippingAddressWithData>;
export default ShippingAddress;
//# sourceMappingURL=ShippingAddress.d.ts.map