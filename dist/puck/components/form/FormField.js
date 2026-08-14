import { jsx as _jsx } from "react/jsx-runtime";
import { commonInputFields, commonInputDefaultProps, inputSurface, FieldLabel, FieldShell, } from './form-field-shared';
const FIELD_TYPE_OPTIONS = [
    { label: 'Text', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'Number', value: 'number' },
    { label: 'Textarea', value: 'textarea' },
    { label: 'URL', value: 'url' },
];
const inputTypeMap = {
    text: 'text', email: 'email', phone: 'tel', number: 'number', textarea: 'textarea', url: 'url',
};
const formFieldFields = {
    fieldType: { type: 'select', label: 'Field Type', options: FIELD_TYPE_OPTIONS },
    placeholder: { type: 'text', label: 'Placeholder' },
    rows: { type: 'number', label: 'Rows (textarea only)' },
    ...commonInputFields,
};
/**
 * FormField — a single text-like input (text/email/phone/number/url/textarea).
 * Editor render is a read-only preview; the storefront wrapper registers the
 * real input with react-hook-form (required/min/max rules + type patterns).
 */
export const FormField = {
    label: 'Input Field',
    fields: formFieldFields,
    defaultProps: {
        fieldType: 'text',
        placeholder: '',
        rows: 4,
        ...commonInputDefaultProps,
    },
    render: (props) => {
        const surface = inputSurface(props);
        return (_jsx(FieldShell, { props: props, labelNode: _jsx(FieldLabel, { label: props.label, required: props.required, labelFontSize: props.labelFontSize, labelFontWeight: props.labelFontWeight, labelColor: props.labelColor }), children: props.fieldType === 'textarea' ? (_jsx("textarea", { className: surface.classes, placeholder: props.placeholder, rows: props.rows, style: surface.style, readOnly: true })) : (_jsx("input", { type: inputTypeMap[props.fieldType] || 'text', className: surface.classes, placeholder: props.placeholder, style: surface.style, readOnly: true })) }));
    },
};
export default FormField;
//# sourceMappingURL=FormField.js.map