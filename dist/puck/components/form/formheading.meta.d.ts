export declare const formHeadingMeta: {
    readonly name: "FormHeading";
    readonly label: "Form Heading / Instruction";
    readonly description: "Form section heading or instruction text. 5 sizes, theme color, bottom margin.";
    readonly category: "form";
    readonly intent: readonly ["form", "heading", "instruction"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <p>. ColorField → text+resolveColor.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "heading", "instruction"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export type FormHeadingMeta = typeof formHeadingMeta;
//# sourceMappingURL=formheading.meta.d.ts.map