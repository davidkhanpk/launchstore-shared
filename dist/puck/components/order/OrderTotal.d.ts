import type { ComponentConfig } from '@puckeditor/core';
export interface OrderTotalProps {
    label: string;
    fontSize: 'base' | 'lg' | 'xl' | '2xl';
    color: string;
    alignment: 'left' | 'center' | 'right';
    fontWeight: 'medium' | 'semibold' | 'bold';
    /** Injected by the consumer wrapper. */
    total?: number;
    formatPrice?: (amount: number) => string;
}
export declare const orderTotalFields: ComponentConfig<OrderTotalProps>['fields'];
export declare const OrderTotal: ComponentConfig<OrderTotalProps>;
export default OrderTotal;
//# sourceMappingURL=OrderTotal.d.ts.map