export declare const richTextContentMeta: {
    readonly name: "RichTextContent";
    readonly label: "Rich Text Content";
    readonly description: "Rich text block rendered inside the Tailwind prose container. Editor uses the Puck richtext widget (ProseMirror). Render output is dangerouslySetInnerHTML — content MUST be sanitized upstream by Puck before reaching this component. Outer controls: max-width preset and vertical padding.";
    readonly category: "content";
    readonly intent: readonly ["rich-text", "prose", "article", "paragraphs", "formatted-text"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["content"];
    readonly themeable: readonly [];
    readonly a11yRisk: "high";
    readonly a11yNotes: "Rich text comes from the Puck widget which sanitizes. Never feed raw user HTML. Heading hierarchy in the content should be coherent with surrounding page structure.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["rich text", "article", "prose", "wysiwyg", "editor", "formatted"];
    readonly props: {
        readonly content: {
            readonly type: "string";
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["max-w-2xl", "max-w-3xl", "max-w-5xl", "max-w-none"];
        };
        readonly padding: {
            readonly type: "enum";
            readonly options: readonly ["py-6", "py-12", "py-20"];
        };
    };
};
export type RichTextContentMeta = typeof richTextContentMeta;
//# sourceMappingURL=richtext.meta.d.ts.map