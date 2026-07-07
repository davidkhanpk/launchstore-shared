import type { Field } from '@puckeditor/core';

export type ProductMetadataLayout = 'list' | 'grid' | 'table';

export interface ProductMetadataProps {
  showTitle: boolean;
  titleText: string;
  showSku: boolean;
  showWeight: boolean;
  showDimensions: boolean;
  showOrigin: boolean;
  layout: ProductMetadataLayout;
}
