export declare const collectionDescriptionMeta: {
    readonly name: "CollectionDescription";
    readonly label: "Collection Description";
    readonly description: "Collection description text with font-size, alignment, color, and max-width. Cart-library-agnostic: takes text override.";
    readonly category: "collection";
    readonly intent: readonly ["collection", "description", "summary"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["text (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <p> with alignment. No interactive elements.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "description", "summary"];
    readonly props: {
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["text-sm", "text-base", "text-lg"];
            readonly required: true;
        };
        readonly textAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "enum";
            readonly options: readonly ["text-gray-600", "text-gray-700", "text-gray-800", "text-black"];
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["mb-0", "mb-2", "mb-4", "mb-6"];
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["max-w-full", "max-w-2xl", "max-w-3xl", "max-w-4xl"];
            readonly required: true;
        };
    };
};
export type CollectionDescriptionMeta = typeof collectionDescriptionMeta;
//# sourceMappingURL=collectiondescription.meta.d.ts.map