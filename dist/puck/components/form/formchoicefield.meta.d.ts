export declare const formChoiceFieldMeta: {
    readonly name: "FormChoiceField";
    readonly label: "Form Choice (Radio / Checkbox)";
    readonly description: "Radio or checkbox group with configurable options, label, help text, required flag, theme colors.";
    readonly category: "form";
    readonly intent: readonly ["form", "choice", "radio", "checkbox"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["label", "helpText"];
    readonly themeable: readonly ["labelColor", "accentColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <input type=\"radio\">/type=\"checkbox\">. ColorField → text+resolveColor.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "choice", "radio", "checkbox", "multi"];
    readonly props: {
        readonly choiceType: {
            readonly type: "enum";
            readonly options: readonly ["radio", "checkbox"];
            readonly required: true;
        };
        readonly label: {
            readonly type: "string";
            readonly required: true;
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
        readonly accentColor: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type FormChoiceFieldMeta = typeof formChoiceFieldMeta;
//# sourceMappingURL=formchoicefield.meta.d.ts.map