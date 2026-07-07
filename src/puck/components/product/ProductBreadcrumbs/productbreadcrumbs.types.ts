import type { Field } from '@puckeditor/core';

export type ProductBreadcrumbsSeparator = 'arrow' | 'slash' | 'dot';
export type ProductBreadcrumbsTransform = 'none' | 'uppercase' | 'capitalize';

export interface ProductBreadcrumbsProps {
  showHomeIcon: boolean;
  separator: ProductBreadcrumbsSeparator;
  textTransform: ProductBreadcrumbsTransform;
}
