export declare const collectionsGridMeta: {
    readonly name: "CollectionsGrid";
    readonly label: "Collections Grid";
    readonly description: string;
    readonly category: "homepage";
    readonly intent: readonly ["browse", "navigate", "curate", "showcase"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["collections (storefront-injected)"];
    readonly copyFields: readonly ["sectionTitle", "sectionSubtitle"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collections", "curated", "grid", "shop by collection", "groups"];
    readonly props: {
        readonly sectionTitle: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Section heading, e.g. \"Shop by Collection\".";
        };
        readonly sectionSubtitle: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Optional subheading.";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Render the section heading.";
        };
        readonly columns: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Collection cards per row on desktop (2-4).";
        };
        readonly columnsTablet: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Cards per row on tablet.";
        };
        readonly columnsMobile: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Cards per row on mobile.";
        };
        readonly gap: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Gap between cards in px.";
        };
        readonly showCollectionImage: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show each collection's image.";
        };
        readonly showCollectionTitle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show collection titles.";
        };
        readonly showProductCount: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show product count per collection.";
        };
        readonly showDescription: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show collection descriptions.";
        };
        readonly imageAspectRatio: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Card image ratio: square | portrait | landscape.";
        };
        readonly backgroundColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Section background. Token path (e.g. \"ui.surface\") or hex.";
        };
        readonly textColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"text.primary\") or hex.";
        };
        readonly cardStyle: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Card look: standard | bordered | shadow.";
        };
        readonly borderRadius: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Card corner radius: none | sm | md | lg | full.";
        };
    };
};
export type CollectionsGridMeta = typeof collectionsGridMeta;
//# sourceMappingURL=collectionsgrid.meta.d.ts.map