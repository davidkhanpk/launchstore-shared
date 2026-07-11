export type LogoRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export interface LogoCarouselProps {
    logoUrls: string;
    logosPerView: number;
    logosPerViewTablet: number;
    logosPerViewMobile: number;
    enableAutoplay: boolean;
    autoplaySpeed: number;
    freeMode: boolean;
    loop: boolean;
    spaceBetween: number;
    grayscale: boolean;
    grayscaleHover: boolean;
    logoMaxHeight: number;
    backgroundColor: string;
    logoBackgroundColor: string;
    showBorder: boolean;
    borderColor: string;
    borderRadius: LogoRadius;
    paddingY: number;
    paddingX: number;
}
//# sourceMappingURL=logocarousel.types.d.ts.map