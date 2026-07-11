/**
 * Minimal product shape consumed by FeaturedProducts renderer.
 * Consumers project their Medusa `HttpTypes.StoreProduct` (or
 * frontend mock) into this subset.
 */
export interface SharedProduct {
    id: string;
    title: string;
    handle?: string;
    thumbnail?: string;
    price?: number | null;
}
export interface FeaturedProductsProps {
    sectionTitle: string;
    sectionSubtitle: string;
    showTitle: boolean;
    displayMode: 'grid' | 'carousel';
    productsPerRow: number;
    maxProducts: number;
    slidesPerView: number;
    slidesPerViewTablet: number;
    slidesPerViewMobile: number;
    spaceBetween: number;
    autoplay: boolean;
    autoplayDelay: number;
    loop: boolean;
    navigation: boolean;
    pagination: boolean;
    paginationStyle: 'dots' | 'fraction' | 'progressbar';
    productSource: 'featured' | 'bestsellers' | 'new' | 'category' | 'manual';
    categoryId: string;
    productIds: string;
    backgroundColor: string;
    textColor: string;
    cardStyle: 'minimal' | 'bordered' | 'shadow';
    showPrice: boolean;
    showAddToCart: boolean;
    buttonText: string;
    products?: SharedProduct[];
    loading?: boolean;
    error?: string;
    renderProduct?: ((product: SharedProduct, region?: any) => React.ReactNode);
}
//# sourceMappingURL=featuredproducts.types.d.ts.map