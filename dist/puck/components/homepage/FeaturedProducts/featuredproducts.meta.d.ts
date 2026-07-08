export declare const featuredProductsMeta: {
    readonly name: "FeaturedProducts";
    readonly label: "Featured Products";
    readonly description: "Section header + product grid (grid or Swiper carousel) with loading/error/empty/success states. Consumer injects products data via prop plus an optional renderProduct callback (D-1 escape hatch) — storefront passes its own <ProductPreview> via the renderProduct prop. Defaults to a simple image+title+price card when renderProduct is omitted.";
    readonly category: "homepage";
    readonly intent: readonly ["products", "featured", "grid", "carousel", "hero-products", "picks"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["products (consumer-injected)", "loading flag", "error string"];
    readonly copyFields: readonly ["sectionTitle", "sectionSubtitle", "buttonText"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Carousel uses Swiper with navigation — mouse + keyboard nav supported by default. Pause auto-play on hover/focus for stop-motion users. Img alt text comes from the product card renderer.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["products", "featured", "grid", "carousel", "hero", "picks", "swiper"];
    readonly props: {
        readonly sectionTitle: {
            readonly type: "string";
            readonly required: true;
        };
        readonly sectionSubtitle: {
            readonly type: "string";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly displayMode: {
            readonly type: "enum";
            readonly options: readonly ["grid", "carousel"];
            readonly required: true;
        };
        readonly productsPerRow: {
            readonly type: "number";
            readonly required: true;
        };
        readonly maxProducts: {
            readonly type: "number";
            readonly required: true;
        };
        readonly slidesPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly slidesPerViewTablet: {
            readonly type: "number";
            readonly required: true;
        };
        readonly slidesPerViewMobile: {
            readonly type: "number";
            readonly required: true;
        };
        readonly spaceBetween: {
            readonly type: "number";
            readonly required: true;
        };
        readonly autoplay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly autoplayDelay: {
            readonly type: "number";
            readonly required: true;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly navigation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly pagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly paginationStyle: {
            readonly type: "enum";
            readonly options: readonly ["dots", "fraction", "progressbar"];
            readonly required: true;
        };
        readonly productSource: {
            readonly type: "enum";
            readonly options: readonly ["featured", "bestsellers", "new", "category", "manual"];
            readonly required: true;
        };
        readonly categoryId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly productIds: {
            readonly type: "string";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cardStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "bordered", "shadow"];
            readonly required: true;
        };
        readonly showPrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showAddToCart: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type FeaturedProductsMeta = typeof featuredProductsMeta;
//# sourceMappingURL=featuredproducts.meta.d.ts.map