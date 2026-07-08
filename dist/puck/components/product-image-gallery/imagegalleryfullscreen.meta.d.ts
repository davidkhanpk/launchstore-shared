export declare const imageGalleryFullscreenMeta: {
    readonly name: "ImageGalleryFullscreen";
    readonly label: "Fullscreen Gallery";
    readonly description: "Fullscreen-capable swiper image gallery with image counter, 3 thumbnail positions (bottom/left/right), 3 thumbnail shapes, optional lightbox overlay. Cart-library-agnostic: takes images[].";
    readonly category: "product-image-gallery";
    readonly intent: readonly ["image-gallery", "fullscreen", "lightbox", "slider"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["images (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <img> + lightbox overlay. Thumbnail navigation accessible.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["image-gallery", "fullscreen", "lightbox", "slider", "swiper"];
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
        readonly thumbnailsPerView: {
            readonly type: "number";
            readonly required: true;
        };
        readonly thumbnailPosition: {
            readonly type: "enum";
            readonly options: readonly ["bottom", "left", "right"];
            readonly required: true;
        };
        readonly thumbnailShape: {
            readonly type: "enum";
            readonly options: readonly ["square", "rounded", "circle"];
            readonly required: true;
        };
        readonly navigationStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "pill", "hidden"];
            readonly required: true;
        };
        readonly enableZoom: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxZoom: {
            readonly type: "number";
            readonly required: true;
        };
        readonly showImageCounter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly enableFullscreen: {
            readonly type: "boolean";
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
export type ImageGalleryFullscreenMeta = typeof imageGalleryFullscreenMeta;
//# sourceMappingURL=imagegalleryfullscreen.meta.d.ts.map