export declare const imageMeta: {
    readonly name: "Image";
    readonly label: "Image";
    readonly description: "Image with controls for aspect ratio, object fit, width, optional caption (top/bottom), link wrapping, border (color + width), shadow, border radius, hover effect (zoom/brightness/grayscale/lift), and outer alignment + margins. Alt-text is required for accessibility.";
    readonly category: "content";
    readonly intent: readonly ["image", "photo", "picture", "banner", "thumbnail"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["alt", "caption"];
    readonly themeable: readonly ["borderColor"];
    readonly a11yRisk: "high";
    readonly a11yNotes: "Alt text is mandatory for non-decorative images — set alt to empty string \"\" explicitly for decorative images (screen readers will skip them). Decorative images are out-of-scope here; the editor should never leave alt blank by default.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["image", "photo", "picture", "src", "alt", "img", "banner", "thumbnail"];
    readonly props: {
        readonly src: {
            readonly type: "string";
            readonly required: true;
        };
        readonly alt: {
            readonly type: "string";
            readonly required: true;
        };
        readonly aspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["auto", "square", "video", "portrait", "landscape"];
        };
        readonly objectFit: {
            readonly type: "enum";
            readonly options: readonly ["contain", "cover", "fill", "none"];
        };
        readonly width: {
            readonly type: "enum";
            readonly options: readonly ["auto", "full", "custom"];
        };
        readonly customWidth: {
            readonly type: "string";
        };
        readonly showCaption: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly caption: {
            readonly type: "string";
        };
        readonly captionPosition: {
            readonly type: "enum";
            readonly options: readonly ["top", "bottom"];
        };
        readonly captionAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly linkUrl: {
            readonly type: "string";
        };
        readonly openInNewTab: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "2xl", "full"];
        };
        readonly shadow: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "2xl"];
        };
        readonly showBorder: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly borderColor: {
            readonly type: "string";
        };
        readonly borderWidth: {
            readonly type: "number";
            readonly required: true;
        };
        readonly hoverEffect: {
            readonly type: "enum";
            readonly options: readonly ["none", "zoom", "brightness", "grayscale", "lift"];
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly marginTop: {
            readonly type: "number";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type ImageMeta = typeof imageMeta;
//# sourceMappingURL=image.meta.d.ts.map