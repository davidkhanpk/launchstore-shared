import type { Field } from '@puckeditor/core';

export type CartButtonIconSize = 'sm' | 'md' | 'lg';
export type CartButtonStyle = 'minimal' | 'outlined' | 'filled';
export type CartButtonBadgePosition = 'top-right' | 'top-left' | 'bottom-right';

/**
 * CartButton is CART-CONTEXT-AGNOSTIC. The shared component
 * does NOT import useCart or any cart provider. Instead, the
 * consumer wrapper calls the consumer's CartContext (D-3 in
 * shared TRACKER) and passes:
 *
 *   - cartCount: number — the badge count (0 hides badge)
 *   - onOpenCart: () => void — what happens when the user
 *     clicks the button (open a cart drawer, push to /cart route,
 *     etc.)
 *
 * Until D-3 is built in launchstore-shared, consumer wrappers
 * must implement this themselves using their own CartContext.
 * See storefront `useCart.ts` and frontend's `CartProvider.tsx`.
 */
export interface CartButtonProps {
  showLabel: boolean;
  label: string;
  showBadge: boolean;
  badgePosition: CartButtonBadgePosition;
  iconSize: CartButtonIconSize;
  iconColor: string;
  hoverColor: string;
  badgeBackgroundColor: string;
  badgeTextColor: string;
  style: CartButtonStyle;
  /** Injected at render-time by the consumer wrapper. */
  cartCount?: number;
  /** Injected at render-time by the consumer wrapper. */
  onOpenCart?: () => void;
}
