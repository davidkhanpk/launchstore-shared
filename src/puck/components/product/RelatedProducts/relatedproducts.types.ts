import type { Field } from '@puckeditor/core';
import type { ProductGridProps, ProductGridDisplayStyle, ProductGridPadding } from './productgrid.types';
export type { CarouselProduct } from '../../swiper/ProductCarousel';

export type RelatedBy = 'collection' | 'tags' | 'category' | 'upsell' | 'crosssell' | 'frequently_bought';
export type RelatedGridColumns = '2' | '3' | '4' | '5';

export interface RelatedProductsProps extends ProductGridProps {
  tagline: string;
  showTagline: boolean;
  relatedBy: RelatedBy;
  productCardTemplateId: string;
  gridColumns: RelatedGridColumns;
}
