import type { ProductData, ProductDataPrice } from '../ProductData';
export type ProductPriceSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ProductPriceLayout = 'horizontal' | 'vertical';
export interface ProductPriceProps {
    size?: ProductPriceSize;
    showComparePrice?: boolean;
    showSavingsBadge?: boolean;
    layout?: ProductPriceLayout;
    fontWeight?: string;
    textColor?: string;
    marginTop?: string;
    marginBottom?: string;
    /**
     * Optional price-resolution hook. Consumer wrapper provides this
     * for region-aware pricing (e.g., using @lib/util/get-product-price
     * which considers region/currency). Falls back to no-op if omitted.
     */
    resolvePrice?: (product: ProductData) => ProductDataPrice | undefined;
}
//# sourceMappingURL=productprice.types.d.ts.map