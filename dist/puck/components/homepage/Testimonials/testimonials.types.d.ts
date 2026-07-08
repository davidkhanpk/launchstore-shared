/**
 * Testimonials props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface TestimonialsProps {
    /** Unique id used by Puck patch operations */
    id?: string;
    sectionTitle: string;
    sectionSubtitle: string;
    showTitle: boolean;
    displayMode: 'grid' | 'carousel';
    layout: 'card' | 'quote' | 'minimal';
    columns: number;
    maxTestimonials: number;
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
    showAvatar: boolean;
    showName: boolean;
    showRole: boolean;
    showRating: boolean;
    showDate: boolean;
    backgroundColor: string;
    textColor: string;
    cardBackground: string;
    accentColor: string;
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
//# sourceMappingURL=testimonials.types.d.ts.map