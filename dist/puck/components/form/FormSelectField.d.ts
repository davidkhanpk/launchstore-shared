import type { ComponentConfig } from '@puckeditor/core';
export interface FormSelectFieldProps {
    label: string;
    placeholder?: string;
    helpText?: string;
    required: boolean;
    options: {
        label: string;
    }[];
    labelColor: string;
    inputBackground: string;
    borderColor: string;
}
export declare const FormSelectField: ComponentConfig<FormSelectFieldProps>;
export default FormSelectField;
//# sourceMappingURL=FormSelectField.d.ts.map