import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { commonInputFields, commonInputDefaultProps, inputSurface, FieldLabel, FieldShell, } from './form-field-shared';
const formSelectFieldFields = {
    placeholder: { type: 'text', label: 'Placeholder' },
    options: {
        type: 'array',
        label: 'Options',
        arrayFields: { label: { type: 'text', label: 'Option Label' } },
        defaultItemProps: { label: 'Option' },
    },
    ...commonInputFields,
};
/**
 * FormSelectField — a dropdown select. Options are designed in the editor
 * (array field); the storefront wrapper registers the live <select> with
 * react-hook-form.
 */
export const FormSelectField = {
    label: 'Dropdown Select',
    fields: formSelectFieldFields,
    defaultProps: {
        placeholder: 'Choose an option',
        options: [{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }],
        ...commonInputDefaultProps,
    },
    render: (props) => {
        const surface = inputSurface(props);
        return (_jsx(FieldShell, { props: props, labelNode: _jsx(FieldLabel, { label: props.label, required: props.required, labelFontSize: props.labelFontSize, labelFontWeight: props.labelFontWeight, labelColor: props.labelColor }), children: _jsxs("select", { className: surface.classes, style: surface.style, disabled: true, children: [props.placeholder && _jsx("option", { value: "", children: props.placeholder }), (props.options || []).map((opt, i) => (_jsx("option", { value: opt.label, children: opt.label }, i)))] }) }));
    },
};
export default FormSelectField;
//# sourceMappingURL=FormSelectField.js.map