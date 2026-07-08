import type { ComponentConfig } from '@puckeditor/core';
export interface FormChoiceFieldProps {
    choiceType: 'radio' | 'checkbox';
    label: string;
    helpText?: string;
    required: boolean;
    options: {
        label: string;
    }[];
    labelColor: string;
    accentColor: string;
}
export declare const FormChoiceField: ComponentConfig<FormChoiceFieldProps>;
export default FormChoiceField;
//# sourceMappingURL=FormChoiceField.d.ts.map