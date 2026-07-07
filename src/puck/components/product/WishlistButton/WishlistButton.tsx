import React, { useState, useEffect } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { wishlistButtonFields } from './wishlistbutton.fields';
import type {
  WishlistButtonProps, WishlistButtonSize, WishlistButtonStyle, WishlistIconPosition,
  CheckWishlistAuth, IsVariantWishlisted, ToggleWishlist,
} from './wishlistbutton.types';
import type { ProductData } from '../ProductData';

const HeartSvg = ({ size = 20, filled }: { size?: number; filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const SIZE_CLASS: Record<WishlistButtonSize, string> = {
  small: 'px-3 py-1.5 text-sm', medium: 'px-4 py-2 text-base', large: 'px-6 py-3 text-lg',
};
const SIZE_ICON: Record<WishlistButtonSize, number> = { small: 16, medium: 20, large: 24 };

const noopAuth: CheckWishlistAuth = async () => false;
const noopInList: IsVariantWishlisted = () => false;
const noopToggle: ToggleWishlist = async () => {};

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

export const WishlistButton: ComponentConfig<WishlistButtonWithData> = {
  label: 'Wishlist Button',
  fields: wishlistButtonFields as ComponentConfig<WishlistButtonWithData>['fields'],
  defaultProps: {
    showLabel: true, labelText: 'Add to Wishlist',
    size: 'medium', style: 'outline', iconPosition: 'left',
  },
  render: (rawProps: any) => {
    const {
      showLabel, labelText, size = 'medium', style = 'outline', iconPosition = 'left',
      product, selectedVariantId, checkAuth, isInWishlist, toggleWishlist, wishlistLoading,
    } = rawProps as WishlistButtonWithData;

    const auth = checkAuth || noopAuth;
    const inList = isInWishlist || noopInList;
    const toggle = toggleWishlist || noopToggle;

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isToggling, setIsToggling] = useState(false);

    useEffect(() => {
      auth().then(setIsAuthenticated).catch(() => setIsAuthenticated(false));
    }, [auth]);

    if (!isAuthenticated || !product) return <></>;

    const variantId = selectedVariantId || product.variants?.[0]?.id;
    if (!variantId) return <></>;
    const inWishlist = inList(variantId);

    const handleClick = async () => {
      if (isToggling) return;
      setIsToggling(true);
      try { await toggle(variantId); } finally { setIsToggling(false); }
    };

    const sz = (size as WishlistButtonSize) || 'medium';
    const sty = (style as WishlistButtonStyle) || 'outline';
    const iconPos = (iconPosition as WishlistIconPosition) || 'left';

    const styleClass = (() => {
      if (sty === 'default') return inWishlist ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
      if (sty === 'outline') return inWishlist ? 'border-2 border-red-500 text-red-500 bg-red-50 hover:bg-red-100' : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400';
      if (sty === 'ghost') return inWishlist ? 'text-red-500 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-100';
      return inWishlist ? 'text-red-500 hover:bg-red-50 p-2' : 'text-gray-700 hover:bg-gray-100 p-2';
    })();

    const buttonLabel = inWishlist ? 'Remove from Wishlist' : labelText;
    const heart = <HeartSvg size={SIZE_ICON[sz]} filled={inWishlist} />;

    return (
      <button
        type="button" onClick={handleClick}
        disabled={isToggling || !!wishlistLoading}
        className={`wishlist-button inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${sty === 'icon-only' ? 'p-2' : SIZE_CLASS[sz]} ${styleClass}`}
        aria-label={buttonLabel} title={buttonLabel}
      >
        {iconPos === 'left' && heart}
        {showLabel && sty !== 'icon-only' && (
          <span>{isToggling ? '...' : buttonLabel}</span>
        )}
        {iconPos === 'right' && heart}
      </button>
    );
  },
};

export default WishlistButton;
