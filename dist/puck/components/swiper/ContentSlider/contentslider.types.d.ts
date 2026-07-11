export type ContentSliderEffect = 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
export type ContentSliderPagination = 'bullets' | 'fraction' | 'progressbar';
export interface ContentSlide {
    title: string;
    description: string;
    backgroundImage: string;
    backgroundColor: string;
    textColor: string;
    buttonText: string;
    buttonLink: string;
    buttonColor: string;
    htmlContent: string;
}
export interface ContentSliderProps {
    slides: ContentSlide[];
    slideHeight: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    contentWidth: 'full' | 'contained';
    contentPosition: 'left' | 'center' | 'right';
    effect: ContentSliderEffect;
    showNavigation: boolean;
    navigationColor: string;
    navigationPosition: 'center' | 'bottom';
    showPagination: boolean;
    paginationType: ContentSliderPagination;
    paginationColor: string;
    enableAutoplay: boolean;
    autoplayDelay: number;
    pauseOnHover: boolean;
    loop: boolean;
    speed: number;
    enableOverlay: boolean;
    overlayColor: string;
    overlayOpacity: number;
}
//# sourceMappingURL=contentslider.types.d.ts.map