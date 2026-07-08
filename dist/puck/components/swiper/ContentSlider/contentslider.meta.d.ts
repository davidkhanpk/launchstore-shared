export declare const contentSliderMeta: {
    readonly name: "ContentSlider";
    readonly label: "Content Slider (Swiper)";
    readonly description: "Full-bleed content slider for hero banners, promos, and announcements. Each slide has title/description/button/background. Optional custom HTML per slide. Falls back to 3 mock slides. Uses SwiperBase for shared config.";
    readonly category: "swiper";
    readonly intent: readonly ["hero", "banner", "slider", "carousel", "announcement"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["slides.title", "slides.description", "slides.buttonText", "slides.buttonLink", "slides.htmlContent"];
    readonly themeable: readonly ["slides.backgroundColor", "slides.textColor", "slides.buttonColor", "overlayColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Swiper has its own a11y for nav buttons. The custom HTML per slide uses dangerouslySetInnerHTML — the data is editor-controlled, not user-controlled, so trust is OK. Pause-on-hover (autoplay) helps screen-reader users.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["hero", "banner", "slider", "carousel", "announcement", "content"];
    readonly props: {
        readonly slides: {
            readonly type: "array";
            readonly required: true;
            readonly items: "$item";
        };
        readonly slideHeight: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl", "full"];
            readonly required: true;
        };
        readonly contentWidth: {
            readonly type: "enum";
            readonly options: readonly ["full", "contained"];
            readonly required: true;
        };
        readonly contentPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly effect: {
            readonly type: "enum";
            readonly options: readonly ["slide", "fade", "cube", "coverflow", "flip"];
            readonly required: true;
        };
        readonly showNavigation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly navigationColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly navigationPosition: {
            readonly type: "enum";
            readonly options: readonly ["center", "bottom"];
            readonly required: true;
        };
        readonly showPagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly paginationType: {
            readonly type: "enum";
            readonly options: readonly ["bullets", "fraction", "progressbar"];
            readonly required: true;
        };
        readonly paginationColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly enableAutoplay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly autoplayDelay: {
            readonly type: "number";
            readonly required: true;
        };
        readonly pauseOnHover: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly speed: {
            readonly type: "number";
            readonly required: true;
        };
        readonly enableOverlay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly overlayColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly overlayOpacity: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type ContentSliderMeta = typeof contentSliderMeta;
//# sourceMappingURL=contentslider.meta.d.ts.map