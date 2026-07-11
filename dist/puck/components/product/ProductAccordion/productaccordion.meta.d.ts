export declare const productAccordionMeta: {
    readonly name: "ProductAccordion";
    readonly label: "Product Accordion";
    readonly description: "Accordion of product-detail sections (description / material / dimensions / shipping / custom HTML). Replaces @radix-ui/react-accordion with stateful CSS max-height transition — same UX, no external UI dep. Single or multi-open modes, configurable border style, default-open via comma-separated section IDs.";
    readonly category: "product";
    readonly intent: readonly ["product", "accordion", "details", "specs", "faq"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["product (injected)"];
    readonly copyFields: readonly ["sections.title", "sections.customContent", "defaultOpen"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Each trigger is a <button> with aria-expanded. Originally the Radix primitive managed id linking (button ↔ panel) and aria-controls/region; the simplified version drops those for the cleanest UX. Consumer wrappers can layer id+aria-controls if needed.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "accordion", "details", "specs", "description", "material", "dimensions"];
    readonly props: {
        readonly sections: {
            readonly type: "array";
            readonly required: true;
            readonly items: "$item";
        };
        readonly allowMultiple: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultOpen: {
            readonly type: "string";
            readonly required: false;
        };
        readonly borderStyle: {
            readonly type: "enum";
            readonly options: readonly ["none", "top", "full"];
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductAccordionMeta = typeof productAccordionMeta;
//# sourceMappingURL=productaccordion.meta.d.ts.map