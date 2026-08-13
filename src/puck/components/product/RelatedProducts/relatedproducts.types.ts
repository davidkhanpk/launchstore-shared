import type { ProductGridProps, ProductGridDisplayStyle, ProductGridPadding } from './productgrid.types';
export type { CarouselProduct } from '../../swiper/ProductCarousel';

export type RelatedBy = 'collection' | 'tags' | 'category' | 'upsell' | 'crosssell' | 'frequently_bought';
export type RelatedGridColumns = '2' | '3' | '4' | '5';

/**
 * Shared layout / typography props surfaced via the design-system accordion.
 * All optional — present so the spread in RelatedProductsWithData composes
 * cleanly and the render function can destructure them.
 */
export interface RelatedProductsSharedProps {
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  textColor?: string;
}

export interface RelatedProductsProps extends ProductGridProps {
  tagline: string;
  showTagline: boolean;
  relatedBy: RelatedBy;
  productCardTemplateId: string;
  gridColumns: RelatedGridColumns;
  containerPadding: ProductGridPadding;
}
