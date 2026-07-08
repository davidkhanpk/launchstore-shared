export declare const videoMeta: {
    readonly name: "Video";
    readonly label: "Video";
    readonly description: "Embeds a YouTube, Vimeo, or direct MP4 video. Supports autoplay, loop, mute, controls, multiple aspect ratios, and optional caption.";
    readonly category: "content";
    readonly intent: readonly ["video", "embed", "media", "demo", "tutorial"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["caption"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Always provide a caption. iframe embeds lack keyboard shortcuts by default; users cannot pause via spacebar. Add poster image via CSS for YouTube loads.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["video", "youtube", "vimeo", "mp4", "embed", "media", "autoplay"];
    readonly props: {
        readonly videoType: {
            readonly type: "enum";
            readonly options: readonly ["youtube", "vimeo", "mp4"];
        };
        readonly videoUrl: {
            readonly type: "string";
        };
        readonly autoplay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly muted: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly controls: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly aspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["16:9", "4:3", "1:1", "21:9"];
        };
        readonly maxWidth: {
            readonly type: "string";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
        readonly shadow: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
        readonly caption: {
            readonly type: "string";
        };
    };
};
export type VideoMeta = typeof videoMeta;
//# sourceMappingURL=video.meta.d.ts.map