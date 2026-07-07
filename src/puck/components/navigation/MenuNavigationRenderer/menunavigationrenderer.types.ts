import type { Field } from '@puckeditor/core';
import type { SharedMegaMenuItem } from '../CategoryMegaMenu';
import type { SharedCategoryMegaMenuConfig } from '../CategoryMegaMenu';

export type MenuLayout = 'horizontal' | 'vertical';
export type MenuAlignment = 'left' | 'center' | 'right';

/**
 * Stripped-down shape of EnrichedMenuItem that MenuNavigationRenderer
 * needs. Consumer wrappers project EnrichedMenuItem → this.
 */
export interface SharedEnrichedMenuItem extends SharedMegaMenuItem {
  isVisible: boolean;
  parentId?: string | null;
  type?: 'category' | 'collection' | 'page' | 'custom';
  position?: number;
  children?: SharedEnrichedMenuItem[];
  megaMenu?: SharedCategoryMegaMenuConfig & { enabled: boolean };
}

export interface SharedMenuNavTheme {
  navigation?: {
    background?: string;
    border?: string;
    text?: string;
    textHover?: string;
    fontSize?: string;
    fontWeight?: number;
    fontFamily?: string;
    padding?: string;
    gap?: string;
  };
  megaMenu?: {
    background?: string;
    linkText?: string;
  };
  effects?: {
    transition?: { duration?: string; easing?: string };
    borderRadius?: { megaMenu?: string };
    shadow?: { megaMenu?: string };
  };
}

export interface MenuNavigationRendererProps {
  items: SharedEnrichedMenuItem[];
  theme: SharedMenuNavTheme;
  layout?: MenuLayout;
  alignment?: MenuAlignment;
  onLinkClick?: () => void;
}
