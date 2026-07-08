export declare const imageGalleryMinimalMeta: {
    readonly name: "ImageGalleryMinimal";
    readonly label: "Minimal Gallery";
    readonly description: "Minimal swiper image gallery with 4 aspect ratios, 3 pagination styles, 3 navigation styles, loop/autoHeight options. Cart-library-agnostic: takes images[] array.";
    readonly category: "product-image-gallery";
    readonly intent: readonly ["image-gallery", "minimal", "slider"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["images (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <img> + Swiper with keyboard nav. ImageFit cover/contain.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["image-gallery", "minimal", "slider", "swiper"];
    readonly props: {
        readonly containerWidth: {
            readonly type: "enum";
            readonly options: readonly ["full", "large", "medium", "small", "custom"];
            readonly required: true;
        };
        readonly customWidth: {
            readonly type: "number";
            readonly required: false;
        };
        readonly maxHeight: {
            readonly type: "number";
            readonly required: false;
        };
        readonly mobileHeight: {
            readonly type: "number";
            readonly required: false;
        };
        readonly aspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape", "wide"];
            readonly required: true;
        };
        readonly showNavigation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly navigationStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "pill", "hidden"];
            readonly required: true;
        };
        readonly showPagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly paginationStyle: {
            readonly type: "enum";
            readonly options: readonly ["dots", "line", "fraction"];
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
        readonly spacing: {
            readonly type: "number";
            readonly required: true;
        };
        readonly imageFit: {
            readonly type: "enum";
            readonly options: readonly ["cover", "contain"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type ImageGalleryMinimalMeta = typeof imageGalleryMinimalMeta;
//# sourceMappingURL=imagegalleryminimal.meta.d.ts.map