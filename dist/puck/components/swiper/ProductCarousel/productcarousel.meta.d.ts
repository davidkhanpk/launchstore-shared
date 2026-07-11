export declare const productCarouselMeta: {
    readonly name: "ProductCarousel";
    readonly label: "Product Carousel (Swiper)";
    readonly description: "Product carousel with optional product-source config (manual/collection/category/featured/bestsellers). Data fetch happens in the consumer wrapper; shared takes `products?: CarouselProduct[]` + optional `onAddToCart(productId)` callback. Defaults render with 0 products (Puck canvas preview). Uses SwiperBase for shared config + side-effect CSS imports.";
    readonly category: "swiper";
    readonly intent: readonly ["product", "carousel", "featured", "bestsellers", "related"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["products (injected)", "onAddToCart (injected)"];
    readonly copyFields: readonly ["sectionTitle", "productIds"];
    readonly themeable: readonly ["backgroundColor", "cardBackground", "cardBorderRadius", "cardShadow"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Each card is an anchor to /products/handle (full a11y). Add-to-cart button is a real <button> with onClick; consumer should layer aria-label like \"Add {title} to cart\".";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "carousel", "featured", "bestsellers", "related", "grid"];
    readonly props: {
        readonly sectionTitle: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly productSource: {
            readonly type: "enum";
            readonly options: readonly ["manual", "collection", "category", "featured", "bestsellers"];
            readonly required: true;
        };
        readonly productIds: {
            readonly type: "string";
            readonly required: true;
        };
        readonly collectionId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly categoryId: {
            readonly type: "string";
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
        readonly effect: {
            readonly type: "enum";
            readonly options: readonly ["slide", "fade", "cube", "coverflow", "flip"];
            readonly required: true;
        };
        readonly speed: {
            readonly type: "number";
            readonly required: true;
        };
        readonly navigation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly navigationColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly pagination: {
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
        readonly autoplay: {
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
        readonly centeredSlides: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly freeMode: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showProductImage: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showProductTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showProductPrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showAddToCart: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageAspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape"];
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
        readonly cardBorderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly cardShadow: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type ProductCarouselMeta = typeof productCarouselMeta;
//# sourceMappingURL=productcarousel.meta.d.ts.map