import type { ComponentConfig } from '@puckeditor/core';
import { CommonInputProps } from './form-field-shared';
export type FieldType = 'text' | 'email' | 'phone' | 'number' | 'textarea' | 'url';
export interface FormFieldProps extends CommonInputProps {
    fieldType: FieldType;
    placeholder: string;
    rows: number;
}
/**
 * FormField — a single text-like input (text/email/phone/number/url/textarea).
 * Editor render is a read-only preview; the storefront wrapper registers the
 * real input with react-hook-form (required/min/max rules + type patterns).
 */
export declare const FormField: ComponentConfig<FormFieldProps>;
export default FormField;
//# sourceMappingURL=FormField.d.ts.map