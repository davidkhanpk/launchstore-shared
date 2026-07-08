export declare const formContainerMeta: {
    readonly name: "FormContainer";
    readonly label: "Form Container";
    readonly description: "Form container with DropZone for FormField/FormHeading/FormDivider children. Theme tokens via resolveColor.";
    readonly category: "form";
    readonly intent: readonly ["form", "container"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["children (Puck DropZone)"];
    readonly copyFields: readonly ["submitButtonText", "successMessage"];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Container with Puck DropZone. ColorField replaced with text+resolveColor().";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "container", "dropzone"];
    readonly props: {
        readonly formId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly formName: {
            readonly type: "string";
            readonly required: true;
        };
        readonly submitButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly successMessage: {
            readonly type: "string";
            readonly required: true;
        };
        readonly padding: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl", "full"];
            readonly required: true;
        };
    };
};
export type FormContainerMeta = typeof formContainerMeta;
//# sourceMappingURL=formcontainer.meta.d.ts.map