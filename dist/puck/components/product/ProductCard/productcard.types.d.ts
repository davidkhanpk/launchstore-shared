export type ProductCardLayout = 'vertical' | 'horizontal' | 'compact' | 'spacious';
export type ProductCardAspectRatio = 'square' | 'portrait' | 'landscape';
export type ProductCardRadius = 'none' | 'sm' | 'md' | 'lg' | 'full' | 'xl';
export type ProductCardBorder = 'none' | 'sm' | 'md' | 'lg';
export type ProductCardTitleSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type ProductCardTitleWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type ProductCardTitleAlign = 'left' | 'center' | 'right';
export type ProductCardPriceSize = 'sm' | 'base' | 'lg' | 'xl';
export type ProductCardBadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type ProductCardButtonStyle = 'filled' | 'outline' | 'ghost';
export type ProductCardButtonSize = 'sm' | 'md' | 'lg';
/**
 * Shape consumed by the shared component. The host
 * storefront/frontend may have its own product type (e.g.,
 * HttpTypes.StoreProduct in Medusa); a thin adapter translates.
 */
export interface SharedProductCardProduct {
    id: string;
    title: string;
    handle?: string;
    thumbnail?: string;
    images?: {
        url: string;
        alt?: string;
    }[];
    /** Free-form — the storefront can supply whatever its card renderer needs. */
    variants?: {
        calculated_price?: any;
        original_price?: any;
    }[];
    inventory_quantity?: number;
    created_at?: string;
}
export interface ProductCardProps {
    layout: ProductCardLayout;
    enableSwiper: boolean;
    aspectRatio: ProductCardAspectRatio;
    borderRadius: ProductCardRadius;
    showShadow: boolean;
    hoverZoom: boolean;
    showTitle: boolean;
    titleSize: ProductCardTitleSize;
    titleWeight: ProductCardTitleWeight;
    titleAlign: ProductCardTitleAlign;
    showPrice: boolean;
    priceSize: ProductCardPriceSize;
    priceColor: string;
    showCompareAtPrice: boolean;
    showSavingsBadge: boolean;
    showBadges: boolean;
    showSaleBadge: boolean;
    showNewBadge: boolean;
    showLowStockBadge: boolean;
    badgePosition: ProductCardBadgePosition;
    showAddToCart: boolean;
    buttonText: string;
    buttonStyle: ProductCardButtonStyle;
    buttonSize: ProductCardButtonSize;
    showCartIcon: boolean;
    cardRadius: ProductCardRadius;
    cardBorder: ProductCardBorder;
    cardShadow: boolean;
    cardBackground: string;
    accentColor: string;
    fontFamily: string;
    productId?: string;
}
export type RenderProductCard = (product: SharedProductCardProduct, props: ProductCardProps) => React.ReactNode;
//# sourceMappingURL=productcard.types.d.ts.map