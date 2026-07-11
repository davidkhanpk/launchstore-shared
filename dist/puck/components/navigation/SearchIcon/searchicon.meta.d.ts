export declare const searchIconMeta: {
    readonly name: "SearchIcon";
    readonly label: "Search Icon";
    readonly description: "Magnifying-glass icon button with hover state, optional modal search overlay. Click-to-search toggles a full-viewport modal with text input + submit. Modal behavior is router-agnostic via the onSearchSubmit callback prop (consumer wraps with next/navigation useRouter push to /:country/search?q=).";
    readonly category: "navigation";
    readonly intent: readonly ["search", "find", "magnifying-glass", "lookup", "nav-search", "command-palette"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["iconColor", "hoverColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Trigger button has aria-label=\"Search\". Modal closes on backdrop click or Escape (capture is current; escape listener can be added by wrapper). Modal focus traps the input via autoFocus; on close focus should return to the trigger button (wrapper responsibility).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["search", "find", "magnifying-glass", "lookup", "command-palette", "nav"];
    readonly props: {
        readonly iconSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly iconColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "outlined", "filled"];
            readonly required: true;
        };
        readonly openSearchOnClick: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type SearchIconMeta = typeof searchIconMeta;
//# sourceMappingURL=searchicon.meta.d.ts.map