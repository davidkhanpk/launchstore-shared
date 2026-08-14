import type { ComponentConfig } from '@puckeditor/core';
import { CommonInputProps } from './form-field-shared';
export interface FormChoiceFieldProps extends CommonInputProps {
    choiceType: 'radio' | 'checkbox';
    options: {
        label: string;
    }[];
    accentColor: string;
}
/**
 * FormChoiceField — radio group (single) or checkbox group (multiple).
 * The storefront wrapper registers the group with react-hook-form; checkbox
 * groups submit an array of selected labels.
 */
export declare const FormChoiceField: ComponentConfig<FormChoiceFieldProps>;
export default FormChoiceField;
//# sourceMappingURL=FormChoiceField.d.ts.map