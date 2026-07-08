export declare const formEmbedMeta: {
    readonly name: "FormEmbed";
    readonly label: "Form Embed";
    readonly description: "Embed marker for cross-store form references. Shows the form ID placeholder. Heroicons Clipboard replaced with inline SVG.";
    readonly category: "form";
    readonly intent: readonly ["form", "embed", "reference"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["formId (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain placeholder; no inputs. ColorField → text.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "embed", "reference", "form-id"];
    readonly props: {
        readonly formId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly padding: {
            readonly type: "string";
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "string";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type FormEmbedMeta = typeof formEmbedMeta;
//# sourceMappingURL=formembed.meta.d.ts.map