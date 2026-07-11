import type { ComponentConfig } from '@puckeditor/core';
export interface CategoryGridProps {
    columns: number;
    gap: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    showImages: boolean;
    showCounts: boolean;
    showDescriptions: boolean;
    cardStyle: 'standard' | 'luxury' | 'minimal';
    /** Subcategories (consumer-provided at render time on the storefront). */
    categories?: Array<{
        id: string;
        name: string;
        image?: string;
        count?: number;
        description?: string;
    }>;
}
export declare const categoryGridFields: ComponentConfig<CategoryGridProps>['fields'];
export declare const CategoryGrid: ComponentConfig<CategoryGridProps>;
export default CategoryGrid;
//# sourceMappingURL=CategoryGrid.d.ts.map