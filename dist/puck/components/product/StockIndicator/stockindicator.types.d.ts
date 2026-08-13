export type { ProductData, ProductDataVariant } from '../ProductData';
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
/**
 * Evaluate stock status for a product.
 *
 * Evaluates the SELECTED variant if provided, else the first variant
 * (matching the AddToCart wrapper's behavior). No longer sums all variants.
 */
export declare const evaluateStock: (product: import("../ProductData").ProductData | null | undefined, threshold: number, selectedVariantId?: string) => StockIndicatorResolved;
//# sourceMappingURL=stockindicator.types.d.ts.map