import type { ProductData } from '../ProductData';
export type StockIndicatorStyle = 'default' | 'badge' | 'minimal';
export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock' | 'pre-order';
export interface StockIndicatorProps {
    showIcon: boolean;
    showText: boolean;
    showQuantity: boolean;
    lowStockThreshold: number;
    style: StockIndicatorStyle;
}
export interface StockIndicatorResolved {
    status: StockStatus;
    text: string;
    iconColor: string;
    bgColor?: string;
    borderColor?: string;
    quantity: number;
    isPreOrder: boolean;
}
export declare const evaluateStock: (product: ProductData | null | undefined, threshold: number) => StockIndicatorResolved;
//# sourceMappingURL=stockindicator.types.d.ts.map