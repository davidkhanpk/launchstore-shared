export declare const searchBarMeta: {
    readonly name: "SearchBar";
    readonly label: "Search Bar";
    readonly description: "Inline search input with optional popular-searches dropdown. Submit/click handler is router-agnostic via the onSearch callback. Replaces the inline next/navigation router push with a callback so the consumer wires its own routing (Storefront uses next/navigation; Frontend forwards to a static preview or no-op). Lucide-react Search + X icons replaced with inline SVG.";
    readonly category: "navigation";
    readonly intent: readonly ["search", "find", "search-bar", "nav-search"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["popularSearches"];
    readonly themeable: readonly ["backgroundColor", "textColor", "borderColor", "focusBorderColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Submit button has aria-label. Clear button has aria-label. Dropdown closes via onBlur with timeout (200ms) so clickable options remain accessible.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["search", "find", "search-bar", "nav-search"];
    readonly props: {
        readonly placeholder: {
            readonly type: "string";
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "outlined", "filled"];
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly showIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly iconPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "right"];
            readonly required: true;
        };
        readonly fullWidth: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "string";
            readonly required: false;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "full"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly focusBorderColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showPopularSearches: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly popularSearches: {
            readonly type: "array";
            readonly required: false;
            readonly items: "$item";
        };
    };
};
export type SearchBarMeta = typeof searchBarMeta;
//# sourceMappingURL=searchbar.meta.d.ts.map