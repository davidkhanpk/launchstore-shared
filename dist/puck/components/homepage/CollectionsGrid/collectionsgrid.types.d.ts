/**
 * Minimal shape of a collection needed by CollectionsGrid render.
 * Consumers fetch the full Medusa type and project into this shape.
 */
export interface SharedCollection {
    id: string;
    title: string;
    handle: string;
    image?: string;
    productCount?: number;
    description?: string;
}
export interface CollectionsGridProps {
    sectionTitle: string;
    sectionSubtitle: string;
    showTitle: boolean;
    columns: number;
    columnsTablet: number;
    columnsMobile: number;
    gap: number;
    showCollectionImage: boolean;
    showCollectionTitle: boolean;
    showProductCount: boolean;
    showDescription: boolean;
    imageAspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
    backgroundColor: string;
    textColor: string;
    cardStyle: 'minimal' | 'bordered' | 'shadow' | 'overlay';
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hoverEffect: 'none' | 'scale' | 'shadow' | 'lift';
    collectionSource: 'all' | 'manual';
    selectedCollectionIds: string[];
    collections?: SharedCollection[];
    loading?: boolean;
    error?: string;
}
//# sourceMappingURL=collectionsgrid.types.d.ts.map