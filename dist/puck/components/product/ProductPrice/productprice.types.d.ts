import type { ProductData, ProductDataPrice } from '../ProductData';
export type ProductPriceSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ProductPriceColor = 'default' | 'black' | 'gray' | 'primary';
export type ProductPriceLayout = 'horizontal' | 'vertical';
export type ProductPriceWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export interface ProductPriceProps {
    fontSize: ProductPriceSize;
    color: ProductPriceColor;
    showComparePrice: boolean;
    layout: ProductPriceLayout;
    fontWeight: ProductPriceWeight;
    showSavingsPercentage: boolean;
    /**
     * Optional price-resolution hook. Consumer wrapper provides this
     * for region-aware pricing (e.g., using @lib/util/get-product-price
     * which considers region/currency). Falls back to no-op if omitted.
     */
    resolvePrice?: (product: ProductData) => ProductDataPrice | undefined;
}
//# sourceMappingURL=productprice.types.d.ts.map