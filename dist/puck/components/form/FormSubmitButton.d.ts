import type { ComponentConfig } from '@puckeditor/core';
export interface FormSubmitButtonProps {
    buttonText: string;
    fullWidth: boolean;
    successMessage: string;
    successRedirectUrl: string;
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
 * FormSubmitButton — submits the live form AND owns the after-submit
 * behavior: success message / redirect. The storefront wrapper publishes
 * these through FormContext so the form owner (FormContainer) applies them
 * on successful submission; while submitting the button disables and swaps
 * its label.
 */
export declare const FormSubmitButton: ComponentConfig<FormSubmitButtonProps>;
export default FormSubmitButton;
//# sourceMappingURL=FormSubmitButton.d.ts.map