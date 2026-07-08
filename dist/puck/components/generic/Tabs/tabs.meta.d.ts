export declare const tabsMeta: {
    readonly name: "Tabs";
    readonly label: "Tabs";
    readonly description: "Tabbed interface (stateful, useState). Per-tab title + content textarea. 3 tab visual styles (underline / pills / bordered) and 3 alignment presets. Set defaultTab=0-based index to choose initial active.";
    readonly category: "generic";
    readonly intent: readonly ["tabs", "tabbed", "tabpanel", "tab-switcher", "panel"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["tabs[].label", "tabs[].content"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Tabs render as <button>s without role=tab / aria-selected — strictly visual. For a screen-reader-friendly tabs pattern, wrap with role=tablist and add aria-selected / aria-controls. Tab focus order must match visual order.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["tabs", "tabbed", "tab", "panel", "switcher"];
    readonly props: {
        readonly tabs: {
            readonly type: "array";
            readonly required: true;
        };
        readonly defaultTab: {
            readonly type: "number";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly tabStyle: {
            readonly type: "enum";
            readonly options: readonly ["underline", "pills", "bordered"];
            readonly required: true;
        };
    };
};
export type TabsMeta = typeof tabsMeta;
//# sourceMappingURL=tabs.meta.d.ts.map