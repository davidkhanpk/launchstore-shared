import type { ComponentConfig } from '@puckeditor/core';
export interface FormContainerProps {
    formId: string;
    formName: string;
    submitButtonText: string;
    successMessage: string;
    successRedirectUrl?: string;
    padding: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    backgroundColor: string;
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
export declare const FormContainer: ComponentConfig<FormContainerProps>;
export default FormContainer;
//# sourceMappingURL=FormContainer.d.ts.map