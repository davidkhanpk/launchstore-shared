export declare const logoCarouselMeta: {
    readonly name: "LogoCarousel";
    readonly label: "Logo Carousel (Swiper)";
    readonly description: "Auto-scrolling logo strip. Logo URLs (one per line) parsed from textarea field. Optional grayscale with color-on-hover, free mode for smooth scroll. Falls back to 8 mock logos when input is empty. Uses SwiperBase for shared Swiper config.";
    readonly category: "swiper";
    readonly intent: readonly ["logo", "brand", "partner", "clients"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["logoUrls"];
    readonly themeable: readonly ["backgroundColor", "logoBackgroundColor", "borderColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Each logo image has alt text. Pause-on-hover is enabled by default; consumers can disable if the autoplay feels intrusive to screen-reader users (who can otherwise press Esc to stop).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["logo", "brand", "partner", "clients", "logo-strip"];
    readonly props: {
        readonly logoUrls: {
            readonly type: "string";
            readonly required: true;
        };
        readonly logosPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly logosPerViewTablet: {
            readonly type: "number";
            readonly required: true;
        };
        readonly logosPerViewMobile: {
            readonly type: "number";
            readonly required: true;
        };
        readonly enableAutoplay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly autoplaySpeed: {
            readonly type: "number";
            readonly required: true;
        };
        readonly freeMode: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly spaceBetween: {
            readonly type: "number";
            readonly required: true;
        };
        readonly grayscale: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly grayscaleHover: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly logoMaxHeight: {
            readonly type: "number";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly logoBackgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showBorder: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly borderColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "full"];
            readonly required: true;
        };
        readonly paddingY: {
            readonly type: "number";
            readonly required: true;
        };
        readonly paddingX: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type LogoCarouselMeta = typeof logoCarouselMeta;
//# sourceMappingURL=logocarousel.meta.d.ts.map