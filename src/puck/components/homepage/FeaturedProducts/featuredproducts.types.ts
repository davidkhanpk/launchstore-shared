/**
 * Minimal product shape consumed by FeaturedProducts renderer.
 * Consumers project their Medusa `HttpTypes.StoreProduct` (or
 * frontend mock) into this subset.
 */
export interface SharedProduct {
  id: string;
  title: string;
  handle?: string;
  thumbnail?: string;
  price?: number | null;
}

export interface FeaturedProductsProps {
  // Content
  sectionTitle: string;
  sectionSubtitle: string;
  showTitle: boolean;
  // Display Mode
  displayMode: 'grid' | 'carousel';
  // Grid Settings
  productsPerRow: number;
  maxProducts: number;
  // Carousel Settings (uses Swiper)
  slidesPerView: number;
  slidesPerViewTablet: number;
  slidesPerViewMobile: number;
  spaceBetween: number;
  autoplay: boolean;
  autoplayDelay: number;
  loop: boolean;
  navigation: boolean;
  pagination: boolean;
  paginationStyle: 'dots' | 'fraction' | 'progressbar';
  // Product Selection (drives the consumer's fetch)
  productSource: 'featured' | 'bestsellers' | 'new' | 'category' | 'manual';
  categoryId: string;
  productIds: string;
  // Styling
  backgroundColor: string;
  textColor: string;
  cardStyle: 'minimal' | 'bordered' | 'shadow';
  showPrice: boolean;
  showAddToCart: boolean;
  buttonText: string;
  // Data (consumer-injected)
  products?: SharedProduct[];
  loading?: boolean;
  error?: string;
  // D-1 escape hatch: storefront passes its own renderer (e.g. ProductPreview)
  // to keep storefront-specific presentation concerns out of shared.
  renderProduct?: ((product: SharedProduct, region?: any) => React.ReactNode);
}
