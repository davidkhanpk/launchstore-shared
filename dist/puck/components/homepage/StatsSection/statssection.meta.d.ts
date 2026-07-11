export declare const statsSectionMeta: {
    readonly name: "StatsSection";
    readonly label: "Stats Section";
    readonly description: "A row of statistical counters with icons, numbers, and labels. Use for trust-building impact metrics — customer counts, product counts, geographic reach, satisfaction ratings.";
    readonly category: "homepage";
    readonly intent: readonly ["trust", "metrics", "social-proof", "impact", "numbers"];
    readonly visualRole: "mid-page";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "subtitle", "stats[].number", "stats[].label", "stats[].description"];
    readonly themeable: readonly ["backgroundColor", "textColor", "numberColor", "stats[].iconColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Numbers are rendered as plain text — screen readers will read them as a string. If accessibility is critical, expose a separate aria-label on the surrounding container.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["stats", "metrics", "numbers", "counters", "social-proof", "impact"];
    readonly props: {
        readonly title: {
            readonly type: "string";
        };
        readonly subtitle: {
            readonly type: "string";
        };
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4"];
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly stats: {
            readonly type: "array";
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly numberColor: {
            readonly type: "string";
        };
        readonly spacing: {
            readonly type: "enum";
            readonly options: readonly ["compact", "normal", "spacious"];
        };
        readonly showDividers: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
    };
};
export type StatsSectionMeta = typeof statsSectionMeta;
//# sourceMappingURL=statssection.meta.d.ts.map