import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, SPACING_OPTIONS, RADIUS_OPTIONS, BORDER_WIDTH_OPTIONS, resolveColor, } from '../../design-system';
const RADIO_YES_NO = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
];
export const FIELD_WIDTH_OPTIONS = [
    { label: 'Full', value: 'full' },
    { label: 'Half', value: 'half' },
];
/** Fields shared by every input component. */
export const commonInputFields = {
    // Content
    label: { type: 'text', label: 'Label' },
    helpText: { type: 'text', label: 'Help Text' },
    // Validation
    required: { type: 'radio', label: 'Required', options: RADIO_YES_NO },
    requiredMessage: { type: 'text', label: 'Required Error Message (optional)' },
    minLength: { type: 'number', label: 'Min Length' },
    maxLength: { type: 'number', label: 'Max Length' },
    // Typography (label surface)
    labelFontSize: { type: 'select', label: 'Label Font Size', options: FONT_SIZE_OPTIONS },
    labelFontWeight: { type: 'select', label: 'Label Font Weight', options: FONT_WEIGHT_OPTIONS },
    labelColor: { type: 'text', label: 'Label Color (token or hex)' },
    // Input styling
    inputBackgroundColor: { type: 'text', label: 'Input Background (token or hex)' },
    inputTextColor: { type: 'text', label: 'Input Text Color (token or hex)' },
    inputBorderColor: { type: 'text', label: 'Input Border Color (token or hex)' },
    inputBorderWidth: { type: 'select', label: 'Input Border Width', options: BORDER_WIDTH_OPTIONS },
    inputBorderRadius: { type: 'select', label: 'Input Border Radius', options: RADIUS_OPTIONS },
    inputPaddingX: { type: 'select', label: 'Input Padding X', options: SPACING_OPTIONS },
    inputPaddingY: { type: 'select', label: 'Input Padding Y', options: SPACING_OPTIONS },
    focusBorderColor: { type: 'text', label: 'Focus Border Color (token or hex)' },
    // Layout
    fieldWidth: { type: 'select', label: 'Field Width', options: FIELD_WIDTH_OPTIONS },
    marginTop: { type: 'select', label: 'Margin Top', options: SPACING_OPTIONS },
};
/** Default props matching commonInputFields. */
export const commonInputDefaultProps = {
    label: 'Field Label',
    helpText: '',
    required: false,
    requiredMessage: '',
    minLength: 0,
    maxLength: 0,
    labelFontSize: 'sm',
    labelFontWeight: 'medium',
    labelColor: '#111827',
    inputBackgroundColor: '#ffffff',
    inputTextColor: '#111827',
    inputBorderColor: '#d1d5db',
    inputBorderWidth: '',
    inputBorderRadius: 'md',
    inputPaddingX: '3',
    inputPaddingY: '2',
    focusBorderColor: '#2563eb',
    fieldWidth: 'full',
    marginTop: '0',
};
const BORDER_WIDTH_CLASS = {
    '0': 'border-0',
    '': 'border',
    '2': 'border-2',
    '4': 'border-4',
};
/** Tailwind classes + inline styles for the input control surface. */
export function inputSurface(props) {
    const classes = [
        'w-full text-sm outline-none transition-colors focus:ring-2 focus:ring-offset-0',
        `px-${props.inputPaddingX} py-${props.inputPaddingY}`,
        `rounded-${props.inputBorderRadius}`,
        BORDER_WIDTH_CLASS[props.inputBorderWidth] ?? 'border',
    ].join(' ');
    const style = {
        backgroundColor: props.inputBackgroundColor ? resolveColor(props.inputBackgroundColor) : undefined,
        color: props.inputTextColor ? resolveColor(props.inputTextColor) : undefined,
        borderColor: props.inputBorderColor ? resolveColor(props.inputBorderColor) : undefined,
        // focus:ring-2 reads its color from --tw-ring-color — set it inline so
        // focusBorderColor can be any token/hex, not just a Tailwind palette class.
        ['--tw-ring-color']: props.focusBorderColor ? resolveColor(props.focusBorderColor) : undefined,
    };
    return { classes, style };
}
/** Label element rendered above every input. */
export function FieldLabel({ label, required, labelFontSize, labelFontWeight, labelColor, }) {
    return (_jsxs("span", { className: `block text-${labelFontSize} font-${labelFontWeight} mb-1`, style: { color: resolveColor(labelColor) }, children: [label, required && _jsx("span", { className: "text-red-500 ml-0.5", children: "*" })] }));
}
/** Wrapper div: field width + top margin + label + control + help text. */
export function FieldShell({ props, labelNode, children, }) {
    return (_jsxs("div", { className: `mt-${props.marginTop} ${props.fieldWidth === 'half' ? 'w-1/2' : 'w-full'}`, children: [labelNode, children, props.helpText && _jsx("p", { className: "mt-1 text-xs text-gray-500", children: props.helpText })] }));
}
//# sourceMappingURL=form-field-shared.js.map