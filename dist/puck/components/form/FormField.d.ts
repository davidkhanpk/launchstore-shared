import type { ComponentConfig } from '@puckeditor/core';
export type FieldType = 'text' | 'email' | 'phone' | 'number' | 'textarea' | 'url';
export interface FormFieldProps {
    fieldType: FieldType;
    label: string;
    placeholder?: string;
    helpText?: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    rows: number;
    labelColor: string;
    inputBackground: string;
    borderColor: string;
}
export declare const FormField: ComponentConfig<FormFieldProps>;
export default FormField;
//# sourceMappingURL=FormField.d.ts.map