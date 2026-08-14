import type { ComponentConfig } from '@puckeditor/core';
export declare const MAX_WIDTH_OPTIONS: {
    label: string;
    value: string;
}[];
export interface FormContainerProps {
    formId: string;
    formName: string;
    submitButtonText: string;
    successMessage: string;
    successRedirectUrl: string;
    maxWidth: string;
    gap: string;
    paddingX: string;
    paddingY: string;
    marginTop: string;
    marginBottom: string;
    backgroundColor: string;
    borderWidth: string;
    borderColor: string;
    borderRadius: string;
    shadow: string;
}
/**
 * FormContainer — the shell of a Puck-designed form. Presentational in the
 * editor (a DropZone that accepts field components); the storefront wrapper
 * renders the same tree inside a live <form> with react-hook-form + submission.
 */
export declare const FormContainer: ComponentConfig<FormContainerProps>;
export default FormContainer;
//# sourceMappingURL=FormContainer.d.ts.map