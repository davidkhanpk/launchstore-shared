import type { SharedProduct } from '../FeaturedProducts/featuredproducts.types';

/** Adds display fields specific to CategoryProducts (rating, badges). */
export interface CategoryProduct extends SharedProduct {
  rating?: number;
  compareAtPrice?: number | null;
  isNew?: boolean;
  onSale?: boolean;
}

export interface CategoryProductsProps {
  // Content
  sectionTitle: string;
  sectionSubtitle: string;
  showTitle: boolean;
  // Category Selection
  categoryId: string;
  categoryName: string;
  // Display Mode
  displayMode: 'grid' | 'carousel';
  // Grid Settings
  productsPerRow: number;
  maxProducts: number;
  // Carousel Settings
  slidesPerView: number;
  slidesPerViewTablet: number;
  slidesPerViewMobile: number;
  spaceBetween: number;
  autoplay: boolean;
  autoplayDelay: number;
  loop: boolean;
  navigation: boolean;
  pagination: boolean;
  // Product Display
  imageAspectRatio: 'square' | 'portrait' | 'landscape';
  showPrice: boolean;
  showAddToCart: boolean;
  showRating: boolean;
  showBadges: boolean;
  // CTA
  showViewAllButton: boolean;
  viewAllButtonText: string;
  // Styling
  backgroundColor: string;
  textColor: string;
  cardStyle: 'minimal' | 'bordered' | 'shadow';
  borderRadius: 'none' | 'sm' | 'md' | 'lg';
  buttonColor: string;
  buttonTextColor: string;
  buttonRadius: 'medium' | 'small' | 'large' | 'none';
  // Data (consumer-injected)
  products?: CategoryProduct[];
  loading?: boolean;
  error?: string;
  // D-1 escape hatch
  renderProduct?: ((product: CategoryProduct, region?: any) => React.ReactNode);
}
