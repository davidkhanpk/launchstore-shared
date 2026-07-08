export declare const imageGalleryMinimalMeta: {
    readonly name: "ImageGalleryMinimal";
    readonly label: "Minimal Gallery";
    readonly description: "Minimal swiper image gallery with 4 aspect ratios, 3 pagination styles, 3 navigation styles, loop/autoHeight options. Cart-library-agnostic: takes images[] array. Uses shared SwiperBase + inline SVG icons.";
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
export type ImageGalleryMinimalMeta = typeof imageGalleryMinimalMeta;
export type ImageGalleryZoomMeta = typeof imageGalleryZoomMeta;
export type ImageGalleryFullscreenMeta = typeof imageGalleryFullscreenMeta;
//# sourceMappingURL=gallery.metas.d.ts.map