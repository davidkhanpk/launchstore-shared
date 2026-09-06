import type { ComponentConfig } from '@puckeditor/core';
export interface QuantityTier {
    minQuantity: number;
    maxQuantity: number | null;
    unitPrice: number;
    currency: string;
}
export interface QuantityPricingTableProps {
    layout: 'cards' | 'table';
    showSavings: boolean;
    showBasePrice: boolean;
    highlightActiveTier: boolean;
    title: string;
}
export interface QuantityPricingTableWithData extends QuantityPricingTableProps {
    tiers?: QuantityTier[];
    basePrice?: number;
    currentQuantity?: number;
    formatPrice?: (price: number) => string;
}
export declare const QuantityPricingTable: ComponentConfig<QuantityPricingTableWithData>;
//# sourceMappingURL=QuantityPricingTable.d.ts.map