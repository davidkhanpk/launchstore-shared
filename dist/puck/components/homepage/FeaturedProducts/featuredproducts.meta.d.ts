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
            readonly description: "Heading for the section, e.g. \"Best Sellers\".";
        };
        readonly sectionSubtitle: {
            readonly type: "string";
            readonly description: "Optional subheading under the title.";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Whether to render sectionTitle/subtitle.";
        };
        readonly displayMode: {
            readonly type: "enum";
            readonly options: readonly ["grid", "carousel"];
            readonly required: true;
            readonly description: "grid = static rows; carousel = Swiper slider.";
        };
        readonly productsPerRow: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Products per row in grid mode (2-5).";
        };
        readonly maxProducts: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Max products to show.";
        };
        readonly slidesPerView: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Carousel: slides visible on desktop.";
        };
        readonly slidesPerViewTablet: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Carousel: slides visible on tablet.";
        };
        readonly slidesPerViewMobile: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Carousel: slides visible on mobile.";
        };
        readonly spaceBetween: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Carousel: gap between slides in px.";
        };
        readonly autoplay: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Carousel: auto-advance slides.";
        };
        readonly autoplayDelay: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Carousel: autoplay delay in ms.";
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Carousel: loop back to the start.";
        };
        readonly navigation: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Carousel: show prev/next arrows.";
        };
        readonly pagination: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Carousel: show pagination indicator.";
        };
        readonly paginationStyle: {
            readonly type: "enum";
            readonly options: readonly ["dots", "fraction", "progressbar"];
            readonly required: true;
            readonly description: "Carousel pagination style.";
        };
        readonly productSource: {
            readonly type: "enum";
            readonly options: readonly ["featured", "bestsellers", "new", "category", "manual"];
            readonly required: true;
            readonly description: "Where products come from. \"featured\"/\"bestsellers\"/\"new\" = the STOREFRONT auto-selects them (PREFER these for such requests — no ids needed). \"category\" = all products in one categoryId (requires categoryId). \"manual\" = exactly the products in productIds (requires productIds).";
        };
        readonly categoryId: {
            readonly type: "string";
            readonly required: true;
            readonly description: "ONLY used when productSource=\"category\". Get a real collection/category id from list_collections — never invent one.";
        };
        readonly productIds: {
            readonly type: "string";
            readonly required: true;
            readonly description: "ONLY used when productSource=\"manual\". Comma-separated real product ids, e.g. \"prod_1,prod_2\" — get them from search_products, never invent ids.";
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Token path (e.g. \"ui.surface\") or hex.";
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Token path (e.g. \"text.primary\") or hex.";
        };
        readonly cardStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "bordered", "shadow"];
            readonly required: true;
            readonly description: "Product card look.";
        };
        readonly showPrice: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show price on each product card.";
        };
        readonly showAddToCart: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show an Add-to-Cart button on each card.";
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Label for the section CTA button.";
        };
    };
};
export type FeaturedProductsMeta = typeof featuredProductsMeta;
//# sourceMappingURL=featuredproducts.meta.d.ts.map