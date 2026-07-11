import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const formChoiceFieldFields = {
    choiceType: { type: 'radio', label: 'Choice Type', options: [{ label: 'Radio (single)', value: 'radio' }, { label: 'Checkbox (multiple)', value: 'checkbox' }] },
    label: { type: 'text', label: 'Group Label' },
    helpText: { type: 'text', label: 'Help Text' },
    required: { type: 'radio', label: 'Required', options: RADIO_YES_NO },
    options: { type: 'array', label: 'Options', arrayFields: { label: { type: 'text', label: 'Option Label' } }, defaultItemProps: { label: 'Option' } },
    labelColor: { type: 'text', label: 'Label Color (token or hex)' },
    accentColor: { type: 'text', label: 'Accent Color (token or hex)' },
};
export const FormChoiceField = {
    label: 'Form Choice (Radio / Checkbox)',
    fields: formChoiceFieldFields,
    defaultProps: { choiceType: 'radio', label: 'Choose one', helpText: '', required: false, options: [{ label: 'Option 1' }, { label: 'Option 2' }], labelColor: 'text.primary', accentColor: 'brand.primary' },
    render: ({ choiceType, label, helpText, required, options, labelColor }) => (_jsxs("div", { className: "mb-4", children: [_jsxs("p", { className: "block text-sm font-medium mb-2", style: { color: resolveColor(labelColor) }, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), _jsx("div", { className: "space-y-2", children: options.map((opt, i) => (_jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer", style: { color: resolveColor(labelColor) }, children: [_jsx("input", { type: choiceType, name: `choice-${label}`, value: opt.label, readOnly: true }), opt.label] }, i))) }), helpText && _jsx("p", { className: "mt-1 text-xs text-gray-500", children: helpText })] })),
};
export default FormChoiceField;
//# sourceMappingURL=FormChoiceField.js.map