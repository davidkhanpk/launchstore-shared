export declare const collectionMetadataMeta: {
    readonly name: "CollectionMetadata";
    readonly label: "Collection Metadata";
    readonly description: "Collection metadata display (handle, created date, updated date) with font-size and color.";
    readonly category: "collection";
    readonly intent: readonly ["collection", "metadata", "admin"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["handle/createdAt/updatedAt (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text only.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "metadata", "admin", "handle"];
    readonly props: {
        readonly showHandle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCreatedDate: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showUpdatedDate: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["text-xs", "text-sm", "text-base"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "enum";
            readonly options: readonly ["text-gray-400", "text-gray-500", "text-gray-600"];
            readonly required: true;
        };
    };
};
export type CollectionMetadataMeta = typeof collectionMetadataMeta;
//# sourceMappingURL=collectionmetadata.meta.d.ts.map