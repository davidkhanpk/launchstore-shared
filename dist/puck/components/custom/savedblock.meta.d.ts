export declare const savedBlockMeta: {
    readonly name: "SavedBlock";
    readonly label: "Saved Block";
    readonly description: "Reference to a saved reusable block. Renders a placeholder until blockId is set; storefront resolves the block live.";
    readonly category: "custom";
    readonly intent: readonly ["saved-block", "reference", "reusable"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["blockId (consumer)"];
    readonly copyFields: readonly ["blockName"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain placeholder; no interactive elements. Block rendering is delegated to storefront.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["saved-block", "reference", "reusable", "snippet"];
    readonly props: {
        readonly id: {
            readonly type: "string";
            readonly required: true;
        };
        readonly blockId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly blockName: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type SavedBlockMeta = typeof savedBlockMeta;
//# sourceMappingURL=savedblock.meta.d.ts.map