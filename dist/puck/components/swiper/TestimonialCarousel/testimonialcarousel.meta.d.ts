export declare const testimonialCarouselMeta: {
    readonly name: "TestimonialCarousel";
    readonly label: "Testimonial Carousel (Swiper)";
    readonly description: "Customer-testimonial carousel with card/quote/minimal layout variants, optional avatars and star ratings. Falls back to 5 mock testimonials when items prop is omitted (Puck canvas preview). 5 lucide StarIcon replaced with inline SVG. Uses SwiperBase for shared Swiper config.";
    readonly category: "swiper";
    readonly intent: readonly ["testimonial", "review", "social-proof", "quote"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items (optional)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor", "cardBackground", "textColor", "accentColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Avatars have alt text. Star ratings are visual; for screen reader use aria-label on the rating container (e.g. \"Rated 5 out of 5\"). Consumer can layer that on.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["testimonial", "review", "social-proof", "quote", "star-rating"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["card", "quote", "minimal"];
            readonly required: true;
        };
        readonly cardsPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly cardsPerViewTablet: {
            readonly type: "number";
            readonly required: true;
        };
        readonly cardsPerViewMobile: {
            readonly type: "number";
            readonly required: true;
        };
        readonly effect: {
            readonly type: "enum";
            readonly options: readonly ["slide", "fade"];
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
        readonly showPagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly paginationType: {
            readonly type: "enum";
            readonly options: readonly ["bullets", "fraction"];
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
        readonly spaceBetween: {
            readonly type: "number";
            readonly required: true;
        };
        readonly centeredSlides: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showAvatar: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showRating: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showRole: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cardBackground: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly accentColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "2xl"];
            readonly required: true;
        };
        readonly cardShadow: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
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
export type TestimonialCarouselMeta = typeof testimonialCarouselMeta;
//# sourceMappingURL=testimonialcarousel.meta.d.ts.map