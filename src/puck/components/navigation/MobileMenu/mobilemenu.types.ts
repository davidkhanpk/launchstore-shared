import type { Field } from '@puckeditor/core';

export interface SharedMobileMenuItem {
  id: string;
  label: string;
  url: string;
  openInNewTab?: boolean;
  children?: SharedMobileMenuItem[];
  /**
   * Mega menu rendering — when enabled, the menu's subcategories
   * are surfaced as an inline accordion (View All + subcategory
   * list). When false, the item itself is a plain link.
   */
  megaMenu?: {
    enabled: boolean;
    subcategoryLimit?: number;
    subcategories: { id: string; label: string; url: string }[];
  };
}

export interface SharedMobileMenuTheme {
  background?: string;
  text?: string;
  border?: string;
  subText?: string;
  accordionBackground?: string;
  titleFontSize?: string;
  padding?: string;
  itemPadding?: string;
}

export interface MobileMenuProps {
  items: SharedMobileMenuItem[];
  theme?: SharedMobileMenuTheme;
  isOpen: boolean;
  onClose: () => void;
  /** Drawer max-width CSS value (e.g. '400px'). */
  drawerMaxWidth?: string;
  /** Slide-in animation direction. */
  animationDirection?: 'left' | 'right';
}

/**
 * Resolved theme — what gets passed down to MobileMenuItem after
 * applying defaults. Consumers can rely on these being present.
 */
export interface MobileMenuThemeResolved extends Required<SharedMobileMenuTheme> {}

// ----------------------------------------------------------------------
// MobileMenuItem — sub-component exported as its own module
// (T-076). Public so it can be reused by consumer wrappers if
// they want finer control over the rendering; not a Puck component.
// ----------------------------------------------------------------------
export interface MobileMenuItemProps {
  item: SharedMobileMenuItem;
  theme: MobileMenuThemeResolved;
  onLinkClick: () => void;
  /** Recursion depth; defaults to 0. Used for nested indentation. */
  depth?: number;
}
