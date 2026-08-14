import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
import { commonInputFields, commonInputDefaultProps, FieldLabel, FieldShell, } from './form-field-shared';
const formChoiceFieldFields = {
    choiceType: {
        type: 'radio',
        label: 'Choice Type',
        options: [
            { label: 'Radio (single choice)', value: 'radio' },
            { label: 'Checkbox (multiple)', value: 'checkbox' },
        ],
    },
    options: {
        type: 'array',
        label: 'Options',
        arrayFields: { label: { type: 'text', label: 'Option Label' } },
        defaultItemProps: { label: 'Option' },
    },
    accentColor: { type: 'text', label: 'Accent Color (token or hex)' },
    ...commonInputFields,
};
/**
 * FormChoiceField — radio group (single) or checkbox group (multiple).
 * The storefront wrapper registers the group with react-hook-form; checkbox
 * groups submit an array of selected labels.
 */
export const FormChoiceField = {
    label: 'Radio / Checkbox Group',
    fields: formChoiceFieldFields,
    defaultProps: {
        choiceType: 'radio',
        options: [{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }],
        accentColor: '#2563eb',
        ...commonInputDefaultProps,
    },
    render: (props) => (_jsx(FieldShell, { props: props, labelNode: _jsx(FieldLabel, { label: props.label, required: props.required, labelFontSize: props.labelFontSize, labelFontWeight: props.labelFontWeight, labelColor: props.labelColor }), children: _jsx("div", { className: "flex flex-col gap-2", children: (props.options || []).map((opt, i) => (_jsxs("label", { className: "flex items-center gap-2 text-sm", style: { color: resolveColor(props.inputTextColor) }, children: [_jsx("input", { type: props.choiceType, name: `choice-${props.label}`, value: opt.label, style: { accentColor: resolveColor(props.accentColor) }, readOnly: true }), opt.label] }, i))) }) })),
};
export default FormChoiceField;
//# sourceMappingURL=FormChoiceField.js.map