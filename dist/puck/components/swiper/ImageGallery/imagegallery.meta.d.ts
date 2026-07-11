export declare const imageGalleryMeta: {
    readonly name: "ImageGallery";
    readonly label: "Image Gallery (Swiper)";
    readonly description: "Standalone product image gallery with standard/thumbnails/grid layouts, optional zoom, navigation, and pagination. Reads images from the `images` prop (consumer wrapper injects product.images). Uses the shared SwiperBase utility for unified config across all swiper components.";
    readonly category: "swiper";
    readonly intent: readonly ["image", "gallery", "carousel", "product-images"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["images (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor", "borderColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Each image has alt text. Navigation buttons inherit Swiper a11y. Thumbnail swiper uses opacity to show active state — for full a11y the active thumb should also have aria-current. Consumer can layer that on.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["image", "gallery", "carousel", "product-images", "zoom", "thumbs"];
    readonly props: {
        readonly containerWidth: {
            readonly type: "enum";
            readonly options: readonly ["full", "large", "medium", "small", "custom"];
            readonly required: true;
        };
        readonly customWidth: {
            readonly type: "number";
            readonly required: true;
        };
        readonly maxHeight: {
            readonly type: "number";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["standard", "thumbnails", "grid"];
            readonly required: true;
        };
        readonly mainImageAspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape", "wide"];
            readonly required: true;
        };
        readonly showThumbnails: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly thumbnailPosition: {
            readonly type: "enum";
            readonly options: readonly ["bottom", "right", "left"];
            readonly required: true;
        };
        readonly thumbnailsPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly thumbnailSpacing: {
            readonly type: "number";
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
        readonly navigationSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
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
        readonly enableZoom: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxZoomScale: {
            readonly type: "number";
            readonly required: true;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly autoHeight: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly spaceBetween: {
            readonly type: "number";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
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
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type ImageGalleryMeta = typeof imageGalleryMeta;
//# sourceMappingURL=imagegallery.meta.d.ts.map