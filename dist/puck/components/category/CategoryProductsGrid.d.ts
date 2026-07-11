import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
export interface CategoryProductsGridProps {
    showTitle: boolean;
    title: string;
    titleAlignment: 'left' | 'center' | 'right';
    columns: '2' | '3' | '4' | '5' | '6';
    gap: 'sm' | 'md' | 'lg' | 'xl';
    gridLocation: 'left' | 'center' | 'right';
    showSortFilter: boolean;
    sortPosition: 'top-left' | 'top-center' | 'top-right';
    showPagination: boolean;
    paginationPosition: 'bottom-left' | 'bottom-center' | 'bottom-right';
    showProductsPerPageDropdown: boolean;
    productsPerPageOptions: string;
    productsPerPage: number;
    className?: string;
}
export interface CategoryProductsGridWithData extends CategoryProductsGridProps {
    products?: Array<{
        id: string;
        title: string;
        handle: string;
        thumbnail: string;
        price: string;
    }>;
    totalCount?: number;
    sortOptions?: Array<{
        label: string;
        value: string;
    }>;
    onSortChange?: (sort: string) => void;
    onPageChange?: (page: number) => void;
    onProductsPerPageChange?: (n: number) => void;
    renderProduct?: (product: {
        id: string;
        title: string;
        handle: string;
        thumbnail: string;
        price: string;
    }) => React.ReactNode;
}
export declare const CategoryProductsGrid: ComponentConfig<CategoryProductsGridWithData>;
export default CategoryProductsGrid;
//# sourceMappingURL=CategoryProductsGrid.d.ts.map