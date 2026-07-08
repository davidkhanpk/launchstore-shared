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
export declare const formDividerMeta: {
    readonly name: "FormDivider";
    readonly label: "Form Divider";
    readonly description: "Form section divider with top/bottom margin + theme color.";
    readonly category: "form";
    readonly intent: readonly ["form", "divider"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <hr>. ColorField → text+resolveColor.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "divider", "separator"];
    readonly props: {
        readonly spacingTop: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly spacingBottom: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export declare const formEmbedMeta: {
    readonly name: "FormEmbed";
    readonly label: "Form Embed";
    readonly description: "Embed marker for cross-store form references. Shows the form ID placeholder. Heroicons Clipboard replaced with inline SVG.";
    readonly category: "form";
    readonly intent: readonly ["form", "embed", "reference"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["formId (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain placeholder; no inputs. ColorField → text.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "embed", "reference", "form-id"];
    readonly props: {
        readonly formId: {
            readonly type: "string";
            readonly required: true;
        };
        readonly padding: {
            readonly type: "string";
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "string";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
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
export type FormContainerMeta = typeof formContainerMeta;
export type FormFieldMeta = typeof formFieldMeta;
export type FormChoiceFieldMeta = typeof formChoiceFieldMeta;
export type FormSelectFieldMeta = typeof formSelectFieldMeta;
export type FormHeadingMeta = typeof formHeadingMeta;
export type FormDividerMeta = typeof formDividerMeta;
export type FormEmbedMeta = typeof formEmbedMeta;
export type FormSubmitButtonMeta = typeof formSubmitButtonMeta;
//# sourceMappingURL=form.metas.d.ts.map