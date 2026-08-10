import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
export interface CategoryProductsGridProps {
    showTitle: boolean;
    title: string;
    titleAlignment: 'left' | 'center' | 'right';
    columns: '2' | '3' | '4' | '5' | '6';
    gap: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}
export interface CategoryProductsGridWithData extends CategoryProductsGridProps {
    products?: any[];
    /** When provided, used instead of the default card for each product. */
    renderProduct?: (product: any) => React.ReactNode;
}
export declare const CategoryProductsGrid: ComponentConfig<CategoryProductsGridWithData>;
export default CategoryProductsGrid;
//# sourceMappingURL=CategoryProductsGrid.d.ts.map