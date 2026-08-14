import type { ComponentConfig } from '@puckeditor/core';
import { CommonInputProps } from './form-field-shared';
export interface FormSelectFieldProps extends CommonInputProps {
    placeholder: string;
    options: {
        label: string;
    }[];
}
/**
 * FormSelectField — a dropdown select. Options are designed in the editor
 * (array field); the storefront wrapper registers the live <select> with
 * react-hook-form.
 */
export declare const FormSelectField: ComponentConfig<FormSelectFieldProps>;
export default FormSelectField;
//# sourceMappingURL=FormSelectField.d.ts.map