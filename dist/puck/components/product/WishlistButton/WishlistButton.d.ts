import type { ComponentConfig } from '@puckeditor/core';
import type { WishlistButtonProps, CheckWishlistAuth, IsVariantWishlisted, ToggleWishlist } from './wishlistbutton.types';
import type { ProductData } from '../ProductData';
export interface WishlistButtonWithData extends WishlistButtonProps {
    product?: ProductData | null;
    /** Currently-selected variant (if any). Falls back to first variant. */
    selectedVariantId?: string | null;
    checkAuth?: CheckWishlistAuth;
    isInWishlist?: IsVariantWishlisted;
    toggleWishlist?: ToggleWishlist;
    /** Optional loading flag from consumer. */
    wishlistLoading?: boolean;
}
export declare const WishlistButton: ComponentConfig<WishlistButtonWithData>;
export default WishlistButton;
//# sourceMappingURL=WishlistButton.d.ts.map