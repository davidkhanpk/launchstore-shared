import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { cartButtonFields } from './cartbutton.fields';
import type { CartButtonProps, CartButtonIconSize, CartButtonStyle, CartButtonBadgePosition } from './cartbutton.types';
import { resolveColor } from '../../../../theme/resolveColor';

const CartSvg = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);

const SIZE_MAP: Record<CartButtonIconSize, number> = { sm: 20, md: 24, lg: 28 };
const BADGE_POS: Record<CartButtonBadgePosition, string> = {
  'top-right': '-top-2 -right-2',
  'top-left': '-top-2 -left-2',
  'bottom-right': '-bottom-2 -right-2',
};
const STYLE_CLASS: Record<CartButtonStyle, string> = {
  minimal: 'p-2 rounded-full hover:bg-gray-100',
  outlined: 'p-2 border-2 rounded-full hover:bg-gray-100',
  filled: 'p-2 rounded-full',
};

export const CartButton: ComponentConfig<CartButtonProps> = {
  label: 'Cart Button',
  fields: cartButtonFields as ComponentConfig<CartButtonProps>['fields'],
  defaultProps: {
    showLabel: false, label: 'Cart', showBadge: true,
    badgePosition: 'top-right', iconSize: 'md',
    iconColor: '#000000', hoverColor: '#3b82f6',
    badgeBackgroundColor: '#ef4444', badgeTextColor: '#ffffff',
    style: 'minimal',
  },
  render: (rawProps: any) => {
    const {
      showLabel, label, showBadge, badgePosition, iconSize, iconColor, hoverColor,
      badgeBackgroundColor, badgeTextColor, style, cartCount, onOpenCart,
    } = rawProps as CartButtonProps;
    const [isHovered, setIsHovered] = useState(false);

    const sz = SIZE_MAP[(iconSize as CartButtonIconSize) || 'md'];
    const cls = STYLE_CLASS[(style as CartButtonStyle) || 'minimal'];
    const badgeCls = BADGE_POS[(badgePosition as CartButtonBadgePosition) || 'top-right'];
    const resolvedIconColor = resolveColor(iconColor);
    const resolvedHoverColor = resolveColor(hoverColor);
    const safeCount = cartCount ?? 0;
    const displayCount = safeCount > 99 ? '99+' : safeCount;

    return (
      <button
        type="button"
        onClick={onOpenCart}
        className={`relative flex items-center gap-2 transition-all ${cls}`}
        style={{
          color: isHovered ? resolvedHoverColor : resolvedIconColor,
          backgroundColor: style === 'filled' ? (isHovered ? resolvedHoverColor : resolvedIconColor) : 'transparent',
          borderColor: style === 'outlined' ? resolvedIconColor : 'transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Shopping cart with ${safeCount} items`}
      >
        <div className="relative">
          <span style={{ color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor) }}>
            <CartSvg size={sz} />
          </span>
          {showBadge && safeCount > 0 && (
            <span
              className={`absolute ${badgeCls} rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs font-bold px-1.5`}
              style={{ backgroundColor: resolveColor(badgeBackgroundColor), color: resolveColor(badgeTextColor) }}
            >
              {displayCount}
            </span>
          )}
        </div>
        {showLabel && (
          <span className="font-medium" style={{ color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor) }}>
            {label}
          </span>
        )}
      </button>
    );
  },
};

export default CartButton;
