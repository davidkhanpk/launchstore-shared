export declare const formSubmitButtonMeta: {
    readonly name: "FormSubmitButton";
    readonly label: "Form Submit Button";
    readonly description: "Submit button with theme colors, full-width option, 5 border-radius values. ColorField → text+resolveColor.";
    readonly category: "form";
    readonly intent: readonly ["form", "submit", "button"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["label"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <button type=\"submit\">.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "submit", "button"];
    readonly props: {
        readonly label: {
            readonly type: "string";
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
        readonly fullWidth: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "full"];
            readonly required: true;
        };
    };
};
export type FormSubmitButtonMeta = typeof formSubmitButtonMeta;
//# sourceMappingURL=formsubmitbutton.meta.d.ts.map