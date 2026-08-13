import type { ProductGridProps } from '../RelatedProducts/productgrid.types';

/**
 * Shared layout / typography props surfaced via the design-system accordion.
 * All optional — present so RecentlyViewedProductsWithData composes cleanly
 * and the render function can destructure them.
 */
export interface RecentlyViewedProductsSharedProps {
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

export interface RecentlyViewedProductsProps extends ProductGridProps {}
