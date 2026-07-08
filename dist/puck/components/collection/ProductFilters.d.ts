import type { ComponentConfig } from '@puckeditor/core';
export interface ProductFiltersProps {
    showPriceFilter: boolean;
    showCategoryFilter: boolean;
    showBrandFilter: boolean;
    showColorFilter: boolean;
    showSizeFilter: boolean;
    showRatingFilter: boolean;
    layout: 'sidebar' | 'top' | 'drawer';
    defaultExpanded: boolean;
}
export interface ProductFiltersWithData extends ProductFiltersProps {
    categories?: Array<{
        id: string;
        label: string;
        count?: number;
    }>;
    brands?: Array<{
        id: string;
        label: string;
        count?: number;
    }>;
    colors?: Array<{
        id: string;
        label: string;
        hex: string;
    }>;
    sizes?: Array<{
        id: string;
        label: string;
    }>;
    priceMin?: number;
    priceMax?: number;
    selected?: Record<string, string[]>;
    onChange?: (group: string, value: string) => void;
}
export declare const ProductFilters: ComponentConfig<ProductFiltersWithData>;
export default ProductFilters;
//# sourceMappingURL=ProductFilters.d.ts.map