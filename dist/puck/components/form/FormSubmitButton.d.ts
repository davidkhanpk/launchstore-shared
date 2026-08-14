import type { ComponentConfig } from '@puckeditor/core';
export interface FormSubmitButtonProps {
    buttonText: string;
    fullWidth: boolean;
    fontSize: string;
    fontWeight: string;
    backgroundColor: string;
    textColor: string;
    hoverBackgroundColor: string;
    borderRadius: string;
    shadow: string;
    paddingX: string;
    paddingY: string;
    marginTop: string;
}
/**
 * FormSubmitButton — submits the live form. The storefront wrapper reads
 * isSubmitting from FormContext (disabled + "Submitting…" label swap).
 */
export declare const FormSubmitButton: ComponentConfig<FormSubmitButtonProps>;
export default FormSubmitButton;
//# sourceMappingURL=FormSubmitButton.d.ts.map