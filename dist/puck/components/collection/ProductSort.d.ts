import type { ComponentConfig } from '@puckeditor/core';
export interface ProductSortProps {
    defaultSort: string;
    showResultCount: boolean;
    showViewToggle: boolean;
    position: 'left' | 'center' | 'right';
}
export interface ProductSortWithData extends ProductSortProps {
    totalCount?: number;
    showingCount?: number;
    sortOptions?: Array<{
        label: string;
        value: string;
    }>;
    onSortChange?: (sort: string) => void;
    onViewChange?: (view: 'grid' | 'list') => void;
}
export declare const ProductSort: ComponentConfig<ProductSortWithData>;
export default ProductSort;
//# sourceMappingURL=ProductSort.d.ts.map