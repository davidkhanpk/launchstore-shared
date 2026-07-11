export declare const formFieldMeta: {
    readonly name: "FormField";
    readonly label: "Form Field";
    readonly description: "Form input field with 6 types (text/email/phone/number/textarea/URL), label, placeholder, help text, required flag, length constraints, theme colors.";
    readonly category: "form";
    readonly intent: readonly ["form", "input", "field"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["label", "placeholder", "helpText"];
    readonly themeable: readonly ["labelColor", "inputBackground", "borderColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input>/<textarea> with type. Required indicator via red asterisk. ColorField → text+resolveColor.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "input", "field", "text", "email", "phone", "textarea"];
    readonly props: {
        readonly fieldType: {
            readonly type: "enum";
            readonly options: readonly ["text", "email", "phone", "number", "textarea", "url"];
            readonly required: true;
        };
        readonly label: {
            readonly type: "string";
            readonly required: true;
        };
        readonly placeholder: {
            readonly type: "string";
            readonly required: false;
        };
        readonly helpText: {
            readonly type: "string";
            readonly required: false;
        };
        readonly required: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly rows: {
            readonly type: "number";
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
export type FormFieldMeta = typeof formFieldMeta;
//# sourceMappingURL=formfield.meta.d.ts.map