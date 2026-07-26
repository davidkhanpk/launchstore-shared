import type { ComponentConfig } from '@puckeditor/core';
export interface ShippingMethodProps {
    layout: 'list' | 'cards' | 'compact';
    showDeliveryTime: boolean;
    showDeliveryDescription: boolean;
    showPickupOption: boolean;
}
export interface ShippingMethodWithData extends ShippingMethodProps {
    methods?: Array<{
        id: string;
        name: string;
        price: string;
        time: string;
        description: string;
    }>;
    selectedId?: string;
    onSelect?: (id: string) => void;
    onContinue?: () => void;
    /**
     * When `false`, the "Continue to Payment" button is hidden. Use in
     * single-page step-by-step checkouts to hide the button once the user
     * has picked a shipping method. Defaults to `true` for the legacy
     * multi-step flow.
     */
    showContinueButton?: boolean;
    /**
     * When `true`, the "Continue to Payment" button is disabled and shows
     * a spinner + "Saving..." label. Use during the API call that commits
     * the staging choice to Medusa. Defaults to `false`.
     */
    isLoading?: boolean;
    /** Optional label override for the button while loading. */
    loadingText?: string;
    pickupOption?: {
        id: string;
        name: string;
        price: string;
        time: string;
        description: string;
    };
}
export declare const ShippingMethod: ComponentConfig<ShippingMethodWithData>;
export default ShippingMethod;
//# sourceMappingURL=ShippingMethod.d.ts.map