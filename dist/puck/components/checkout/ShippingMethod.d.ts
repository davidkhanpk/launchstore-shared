import type { ComponentConfig } from '@puckeditor/core';
export interface ShippingMethodProps {
    layout: 'list' | 'cards' | 'compact';
    showDeliveryTime: boolean;
    showDeliveryDescription: boolean;
    showPickupOption: boolean;
    defaultSelection: 'standard' | 'express' | 'overnight';
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