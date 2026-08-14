/**
 * Shared prop vocabulary for the form input components
 * (FormField / FormSelectField / FormChoiceField).
 *
 * All values are Tailwind scale options from the design-system presets —
 * the same ladders every other component uses. The editor's GroupedFields
 * accordion buckets them via suffix conventions (Validation / Typography /
 * Colors / Layout).
 */
import type { Field } from '@puckeditor/core';
export declare const FIELD_WIDTH_OPTIONS: {
    label: string;
    value: string;
}[];
/** Fields shared by every input component. */
export declare const commonInputFields: Record<string, Field>;
/** Default props matching commonInputFields. */
export declare const commonInputDefaultProps: {
    label: string;
    helpText: string;
    required: boolean;
    requiredMessage: string;
    minLength: number;
    maxLength: number;
    labelFontSize: string;
    labelFontWeight: string;
    labelColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    inputBorderColor: string;
    inputBorderWidth: string;
    inputBorderRadius: string;
    inputPaddingX: string;
    inputPaddingY: string;
    focusBorderColor: string;
    fieldWidth: string;
    marginTop: string;
};
export interface CommonInputProps {
    label: string;
    helpText: string;
    required: boolean;
    requiredMessage: string;
    minLength: number;
    maxLength: number;
    labelFontSize: string;
    labelFontWeight: string;
    labelColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    inputBorderColor: string;
    inputBorderWidth: string;
    inputBorderRadius: string;
    inputPaddingX: string;
    inputPaddingY: string;
    focusBorderColor: string;
    fieldWidth: string;
    marginTop: string;
}
/** Tailwind classes + inline styles for the input control surface. */
export declare function inputSurface(props: Pick<CommonInputProps, 'inputBackgroundColor' | 'inputTextColor' | 'inputBorderColor' | 'inputBorderWidth' | 'inputBorderRadius' | 'inputPaddingX' | 'inputPaddingY' | 'focusBorderColor'>): {
    classes: string;
    style: import("react").CSSProperties;
};
/** Label element rendered above every input. */
export declare function FieldLabel({ label, required, labelFontSize, labelFontWeight, labelColor, }: Pick<CommonInputProps, 'label' | 'required' | 'labelFontSize' | 'labelFontWeight' | 'labelColor'>): import("react").JSX.Element;
/** Wrapper div: field width + top margin + label + control + help text. */
export declare function FieldShell({ props, labelNode, children, }: {
    props: Pick<CommonInputProps, 'fieldWidth' | 'marginTop' | 'helpText'>;
    labelNode: React.ReactNode;
    children: React.ReactNode;
}): import("react").JSX.Element;
//# sourceMappingURL=form-field-shared.d.ts.map