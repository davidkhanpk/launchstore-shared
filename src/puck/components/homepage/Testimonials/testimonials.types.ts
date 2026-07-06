/**
 * Testimonials props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface TestimonialsProps {
  /** Unique id used by Puck patch operations */
  id?: string;

  // Content
  sectionTitle: string;
  sectionSubtitle: string;
  showTitle: boolean;

  // Display Mode
  displayMode: 'grid' | 'carousel';
  layout: 'card' | 'quote' | 'minimal';

  // Grid Settings
  columns: number;
  maxTestimonials: number;

  // Carousel Settings (Swiper)
  slidesPerView: number;
  slidesPerViewTablet: number;
  slidesPerViewMobile: number;
  spaceBetween: number;
  autoplay: boolean;
  autoplayDelay: number;
  loop: boolean;
  navigation: boolean;
  pagination: boolean;
  effect: 'slide' | 'fade';

  // Display Options
  showAvatar: boolean;
  showName: boolean;
  showRole: boolean;
  showRating: boolean;
  showDate: boolean;

  // Styling
  backgroundColor: string;
  textColor: string;
  cardBackground: string;
  accentColor: string;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
