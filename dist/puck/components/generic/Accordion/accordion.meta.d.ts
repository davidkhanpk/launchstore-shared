export declare const accordionMeta: {
    readonly name: "Accordion";
    readonly label: "Accordion";
    readonly description: "Stateful accordion (useState for open indices). Items array of {id, title, content}. allowMultiple toggles between single-open and multi-open. bordered + rounded styling controls.";
    readonly category: "generic";
    readonly intent: readonly ["accordion", "faq", "collapsible", "expandable", "qa", "disclosure"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["items[].title", "items[].content"];
    readonly themeable: readonly [];
    readonly a11yRisk: "high";
    readonly a11yNotes: "Interactive element. For accessibility consider adding role=region + aria-labelledby per panel, aria-expanded on the trigger button, and a heading for each section (h3/h4). The current implementation is keyboard-focusable on buttons but lacks the ARIA state pattern. Add when time.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["accordion", "faq", "collapsible", "expandable", "qa", "panel"];
    readonly props: {
        readonly items: {
            readonly type: "array";
            readonly required: true;
        };
        readonly allowMultiple: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly bordered: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly rounded: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export type AccordionMeta = typeof accordionMeta;
//# sourceMappingURL=accordion.meta.d.ts.map