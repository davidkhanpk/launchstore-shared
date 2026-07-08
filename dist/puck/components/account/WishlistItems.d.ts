import type { ComponentConfig } from '@puckeditor/core';
export interface WishlistItem {
    id: string;
    variantId: string;
    productTitle: string;
    variantTitle?: string;
    thumbnail?: string;
    productHandle?: string;
}
export interface WishlistItemsProps {
    title: string;
    showTitle: boolean;
    showEmptyMessage: boolean;
    emptyTitle: string;
    emptyMessage: string;
    showAddToCart: boolean;
    addToCartLabel: string;
    removeLabel: string;
    backgroundColor: string;
    cardBackgroundColor: string;
    textColor: string;
    borderRadius: string;
    padding: string;
    shadow: boolean;
}
export interface WishlistItemsWithData extends WishlistItemsProps {
    items?: WishlistItem[];
    onAddToCart?: (variantId: string) => void;
    onRemove?: (id: string) => void;
}
export declare const WishlistItems: ComponentConfig<WishlistItemsWithData>;
export default WishlistItems;
//# sourceMappingURL=WishlistItems.d.ts.map