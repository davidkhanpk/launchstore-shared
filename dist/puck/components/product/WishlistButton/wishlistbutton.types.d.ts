export type WishlistButtonSize = 'small' | 'medium' | 'large';
export type WishlistButtonStyle = 'default' | 'outline' | 'ghost' | 'icon-only';
export type WishlistIconPosition = 'left' | 'right';
export interface WishlistButtonProps {
    showLabel: boolean;
    labelText: string;
    size: WishlistButtonSize;
    style: WishlistButtonStyle;
    iconPosition: WishlistIconPosition;
}
/**
 * Async functions injected by the consumer wrapper. The shared
 * component does NOT depend on the wishlist SDK. Wishlist state
 * lives in the consumer's provider.
 */
export type CheckWishlistAuth = () => Promise<boolean>;
export type IsVariantWishlisted = (variantId: string) => boolean;
export type ToggleWishlist = (variantId: string) => Promise<void>;
//# sourceMappingURL=wishlistbutton.types.d.ts.map