export declare const linkListMeta: {
    readonly name: "LinkList";
    readonly label: "Link List";
    readonly description: "A configurable list of links with custom colors — the building block for footer link columns. Unlike QuickLinks, the links themselves are editable props.";
    readonly category: "footer";
    readonly intent: readonly ["navigate", "links"];
    readonly visualRole: "footer-column";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color", "hoverColor"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["links", "footer", "column", "navigation"];
    readonly props: {
        readonly color: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Link text color. Token path (e.g. \"text.secondary\") or hex.";
        };
        readonly hoverColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Hover color. Token path or hex.";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md"];
            readonly required: true;
            readonly description: "Link text size.";
        };
        readonly spacing: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
            readonly description: "Vertical spacing between links.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "List alignment.";
        };
    };
};
export type LinkListMeta = typeof linkListMeta;
//# sourceMappingURL=linklist.meta.d.ts.map