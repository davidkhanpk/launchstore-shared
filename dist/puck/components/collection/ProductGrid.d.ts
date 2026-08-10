import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionProductGridProps {
    showTitle: boolean;
    title: string;
    titleAlignment: 'left' | 'center' | 'right';
    layout: 'grid' | 'list';
    columns: '2' | '3' | '4' | '5' | '6';
    gap: 'sm' | 'md' | 'lg' | 'xl';
    imageAspectRatio: 'square' | 'portrait' | 'landscape';
    showBadges: boolean;
    showQuickView: boolean;
    showWishlist: boolean;
}
export interface ProductGridWithData extends CollectionProductGridProps {
    products?: any[];
    /** When provided, used instead of the default card for each product. */
    renderProduct?: (product: any) => React.ReactNode;
    onQuickView?: (id: string) => void;
    onAddToWishlist?: (id: string) => void;
}
export declare const ProductGrid: ComponentConfig<ProductGridWithData>;
export default ProductGrid;
//# sourceMappingURL=ProductGrid.d.ts.map