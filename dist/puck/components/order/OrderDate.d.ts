import type { ComponentConfig } from '@puckeditor/core';
export interface OrderDateProps {
    label: string;
    fontSize: 'sm' | 'base' | 'lg';
    color: string;
    alignment: 'left' | 'center' | 'right';
    /** Injected by the consumer wrapper (ISO date string). */
    date?: string;
}
export declare const orderDateFields: ComponentConfig<OrderDateProps>['fields'];
export declare const OrderDate: ComponentConfig<OrderDateProps>;
export default OrderDate;
//# sourceMappingURL=OrderDate.d.ts.map