/**
 * Minimal shape of a category needed by CategoriesGrid render.
 * Consumers (frontend or storefront) fetch the full Medusa type
 * (HttpTypes.StoreProductCategory) and project into this shape.
 */
export interface SharedCategory {
  id: string;
  name: string;
  handle: string;
  image?: string;
  productCount?: number;
}

export interface CategoriesGridProps {
  // Content
  sectionTitle: string;
  sectionSubtitle: string;
  showTitle: boolean;
  // Layout
  columns: number;
  columnsTablet: number;
  columnsMobile: number;
  gap: number;
  // Category Display
  showCategoryImage: boolean;
  showCategoryName: boolean;
  showProductCount: boolean;
  imageAspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
  // Styling
  backgroundColor: string;
  textColor: string;
  cardStyle: 'minimal' | 'bordered' | 'shadow' | 'overlay';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hoverEffect: 'none' | 'scale' | 'shadow' | 'lift';
  // Category Selection (consumer fetches based on this)
  categorySource: 'all' | 'featured' | 'manual';
  selectedCategoryIds: string[];
  // Data (consumer-injected; see SharedCategory)
  categories?: SharedCategory[];
  loading?: boolean;
  error?: string;
}
