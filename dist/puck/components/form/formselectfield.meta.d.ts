export declare const formSelectFieldMeta: {
    readonly name: "FormSelectField";
    readonly label: "Form Select (Dropdown)";
    readonly description: "Select dropdown with configurable options, label, placeholder, help text, required flag, theme colors.";
    readonly category: "form";
    readonly intent: readonly ["form", "select", "dropdown"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["label", "placeholder", "helpText"];
    readonly themeable: readonly ["labelColor", "inputBackground", "borderColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <select> with <option> children. ColorField → text+resolveColor.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "select", "dropdown"];
    readonly props: {
        readonly label: {
            readonly type: "string";
            readonly required: true;
        };
        readonly placeholder: {
            readonly type: "string";
            readonly required: false;
        };
        readonly required: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly options: {
            readonly type: "array";
            readonly required: true;
        };
        readonly labelColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly inputBackground: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderColor: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type FormSelectFieldMeta = typeof formSelectFieldMeta;
//# sourceMappingURL=formselectfield.meta.d.ts.map