export declare const listMeta: {
    readonly name: "List";
    readonly label: "List";
    readonly description: "Vertical list with 4 marker styles (bullet, numbered, check, none). Item spacing (tight/normal/relaxed) + font size (sm/base/lg). Text color accepts hex or theme token.";
    readonly category: "generic";
    readonly intent: readonly ["list", "bullet", "numbered", "checklist", "todo", "items"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["items[].text"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Renders semantic <ul>/<li>. Custom markers rendered as inline <span> inside <li> — screen readers will not announce markers as \"list item\" depending on UA. For ordered semantics consider keeping type=numbered.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["list", "ul", "ol", "bullet", "items", "checklist", "todo"];
    readonly props: {
        readonly items: {
            readonly type: "array";
            readonly required: true;
        };
        readonly type: {
            readonly type: "enum";
            readonly options: readonly ["bullet", "numbered", "check", "none"];
            readonly required: true;
        };
        readonly spacing: {
            readonly type: "enum";
            readonly options: readonly ["tight", "normal", "relaxed"];
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type ListMeta = typeof listMeta;
//# sourceMappingURL=list.meta.d.ts.map