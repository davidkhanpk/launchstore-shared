import type { ComponentConfig } from '@puckeditor/core';
export interface ProductRecommendationsProps {
    type: 'related' | 'premium' | 'bestsellers' | 'recentlyviewed';
    limit: number;
    columns: number;
    showPrices: boolean;
    showAddToCart: boolean;
    luxuryStyle: boolean;
    /** Consumer-provided products at render time. */
    products?: Array<{
        id: string;
        title: string;
        price?: number;
        thumbnail?: string;
    }>;
}
export declare const productRecommendationsFields: ComponentConfig<ProductRecommendationsProps>['fields'];
export declare const ProductRecommendations: ComponentConfig<ProductRecommendationsProps>;
export default ProductRecommendations;
//# sourceMappingURL=ProductRecommendations.d.ts.map