import type { ComponentConfig } from '@puckeditor/core';
import type { CheckoutFormProps } from './cart.types';
interface ShippingMethod {
    id: string;
    name: string;
    price: number;
    estimate: string;
}
interface PaymentMethod {
    id: string;
    name: string;
    icon: string;
}
export interface CheckoutFormData {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    shippingMethod: string;
    paymentMethod: string;
    orderNotes: string;
}
export interface CheckoutFormWithData extends CheckoutFormProps {
    initialStep?: number;
    shippingMethods?: ShippingMethod[];
    paymentMethods?: PaymentMethod[];
    onSubmit?: (data: CheckoutFormData) => void | Promise<void>;
    onStepChange?: (step: number) => void;
    isProcessing?: boolean;
    formatPrice?: (price: number) => string;
}
export declare const CheckoutForm: ComponentConfig<CheckoutFormWithData>;
export default CheckoutForm;
//# sourceMappingURL=CheckoutForm.d.ts.map