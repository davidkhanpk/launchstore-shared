import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionProductGridProps {
    layout: 'grid' | 'list';
    columns: '2' | '3' | '4';
    showQuickView: boolean;
    showWishlist: boolean;
    showCompare: boolean;
    imageAspectRatio: 'square' | 'portrait' | 'landscape';
    showBadges: boolean;
    gap: 'sm' | 'md' | 'lg';
}
export interface ProductGridWithData extends CollectionProductGridProps {
    products?: Array<{
        id: string;
        title: string;
        handle: string;
        thumbnail: string;
        price: string;
        compareAtPrice?: string;
        badge?: string;
    }>;
    /** When provided, used instead of the default card for each product. */
    renderProduct?: (product: any) => React.ReactNode;
    onQuickView?: (id: string) => void;
    onAddToWishlist?: (id: string) => void;
    onCompare?: (id: string) => void;
    formatPrice?: (p: string) => string;
}
export declare const ProductGrid: ComponentConfig<ProductGridWithData>;
export default ProductGrid;
//# sourceMappingURL=ProductGrid.d.ts.map