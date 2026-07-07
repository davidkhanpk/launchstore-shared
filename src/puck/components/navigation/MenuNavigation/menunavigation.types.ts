import type { Field } from '@puckeditor/core';

export type MenuNavigationLayout = 'horizontal' | 'vertical' | 'stacked';
export type MenuNavigationAlignment = 'left' | 'center' | 'right';
export type MenuNavigationHoverEffect = 'underline' | 'background' | 'color' | 'none';
export type MenuNavigationFontSize = 'sm' | 'base' | 'lg';
export type MenuNavigationFontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type MenuNavigationDropdownStyle = 'default' | 'mega';

export interface SharedNavMenuItem {
  id: string;
  label: string;
  url?: string;
  position: number;
  isVisible: boolean;
  openInNewTab: boolean;
  children?: SharedNavMenuItem[];
  megaMenu?: {
    enabled: boolean;
    columns?: number;
    showImage?: boolean;
    imageUrl?: string;
  };
}

export interface MenuNavigationProps {
  menuHandle: string;
  layout: MenuNavigationLayout;
  alignment: MenuNavigationAlignment;
  hoverEffect: MenuNavigationHoverEffect;
  textColor: string;
  hoverColor: string;
  fontSize: MenuNavigationFontSize;
  fontWeight: MenuNavigationFontWeight;
  showDropdownArrows: boolean;
  dropdownStyle: MenuNavigationDropdownStyle;
  maxDepth: '1' | '2' | '3';
  menuData?: SharedNavMenuItem[];
  dropdownBackground?: string;
  dropdownBorder?: string;
  dropdownShadow?: 'sm' | 'md' | 'lg' | 'xl';
  dropdownRadius?: 'sm' | 'md' | 'lg' | 'xl';
}
