/**
 * Minimal shape of a category needed by CategoriesGrid render.
 * Consumers (frontend or storefront) fetch the full Medusa type
 * (HttpTypes.StoreProductCategory) and project into this shape.
 */
export interface SharedCategory {
    id: string;
    name: string;
    handle: string;
    image?: string;
    productCount?: number;
}
export interface CategoriesGridProps {
    sectionTitle: string;
    sectionSubtitle: string;
    showTitle: boolean;
    columns: number;
    columnsTablet: number;
    columnsMobile: number;
    gap: number;
    showCategoryImage: boolean;
    showCategoryName: boolean;
    showProductCount: boolean;
    imageAspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
    backgroundColor: string;
    textColor: string;
    cardStyle: 'minimal' | 'bordered' | 'shadow' | 'overlay';
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hoverEffect: 'none' | 'scale' | 'shadow' | 'lift';
    categorySource: 'all' | 'featured' | 'manual';
    selectedCategoryIds: string[];
    categories?: SharedCategory[];
    loading?: boolean;
    error?: string;
}
//# sourceMappingURL=categoriesgrid.types.d.ts.map