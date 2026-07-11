import type { ComponentConfig } from '@puckeditor/core';
export interface OrderNumberProps {
    label: string;
    fontSize: 'sm' | 'base' | 'lg' | 'xl';
    color: string;
    alignment: 'left' | 'center' | 'right';
    fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';
    /** Injected by the consumer wrapper. */
    orderNumber?: string;
}
export declare const orderNumberFields: ComponentConfig<OrderNumberProps>['fields'];
export declare const OrderNumber: ComponentConfig<OrderNumberProps>;
export default OrderNumber;
//# sourceMappingURL=OrderNumber.d.ts.map