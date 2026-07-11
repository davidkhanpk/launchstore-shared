import type { ComponentConfig } from '@puckeditor/core';
export interface CustomerEmailProps {
    label: string;
    showIcon: boolean;
    fontSize: 'sm' | 'base' | 'lg';
    color: string;
    alignment: 'left' | 'center' | 'right';
    /** Injected by the consumer wrapper. */
    email?: string;
}
export declare const customerEmailFields: ComponentConfig<CustomerEmailProps>['fields'];
export declare const CustomerEmail: ComponentConfig<CustomerEmailProps>;
export default CustomerEmail;
//# sourceMappingURL=CustomerEmail.d.ts.map