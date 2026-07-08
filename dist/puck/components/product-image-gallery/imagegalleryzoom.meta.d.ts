export declare const imageGalleryZoomMeta: {
    readonly name: "ImageGalleryZoom";
    readonly label: "Zoom Gallery";
    readonly description: "Zoom swiper image gallery with hover-zoom, configurable max zoom, click-to-zoom in/out, thumbnail strip. Cart-library-agnostic: takes images[].";
    readonly category: "product-image-gallery";
    readonly intent: readonly ["image-gallery", "zoom", "slider"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["images (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <img> + zoom controls. Thumbnail strip keyboard navigable.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["image-gallery", "zoom", "slider", "swiper"];
    readonly props: {
        readonly containerWidth: {
            readonly type: "enum";
            readonly options: readonly ["full", "large", "medium", "small"];
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
        readonly maxZoom: {
            readonly type: "number";
            readonly required: true;
        };
        readonly showThumbnails: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly thumbnailsPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly thumbnailShape: {
            readonly type: "enum";
            readonly options: readonly ["square", "rounded", "circle"];
            readonly required: true;
        };
        readonly aspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape"];
            readonly required: true;
        };
        readonly enableDoubleClickZoom: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly spacing: {
            readonly type: "number";
            readonly required: true;
        };
        readonly navigationStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "pill", "hidden"];
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
export type ImageGalleryZoomMeta = typeof imageGalleryZoomMeta;
//# sourceMappingURL=imagegalleryzoom.meta.d.ts.map