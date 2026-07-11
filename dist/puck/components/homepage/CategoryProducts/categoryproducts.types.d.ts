import type { SharedProduct } from '../FeaturedProducts/featuredproducts.types';
/** Adds display fields specific to CategoryProducts (rating, badges). */
export interface CategoryProduct extends SharedProduct {
    rating?: number;
    compareAtPrice?: number | null;
    isNew?: boolean;
    onSale?: boolean;
}
export interface CategoryProductsProps {
    sectionTitle: string;
    sectionSubtitle: string;
    showTitle: boolean;
    categoryId: string;
    categoryName: string;
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
    imageAspectRatio: 'square' | 'portrait' | 'landscape';
    showPrice: boolean;
    showAddToCart: boolean;
    showRating: boolean;
    showBadges: boolean;
    showViewAllButton: boolean;
    viewAllButtonText: string;
    backgroundColor: string;
    textColor: string;
    cardStyle: 'minimal' | 'bordered' | 'shadow';
    borderRadius: 'none' | 'sm' | 'md' | 'lg';
    buttonColor: string;
    buttonTextColor: string;
    buttonRadius: 'medium' | 'small' | 'large' | 'none';
    products?: CategoryProduct[];
    loading?: boolean;
    error?: string;
    renderProduct?: ((product: CategoryProduct, region?: any) => React.ReactNode);
}
//# sourceMappingURL=categoryproducts.types.d.ts.map