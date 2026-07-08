import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const formSelectFieldFields = {
    label: { type: 'text', label: 'Label' },
    placeholder: { type: 'text', label: 'Placeholder' },
    helpText: { type: 'text', label: 'Help Text' },
    required: { type: 'radio', label: 'Required', options: RADIO_YES_NO },
    options: { type: 'array', label: 'Options', arrayFields: { label: { type: 'text', label: 'Option Label' } }, defaultItemProps: { label: 'Option' } },
    labelColor: { type: 'text', label: 'Label Color (token or hex)' },
    inputBackground: { type: 'text', label: 'Input Background (token or hex)' },
    borderColor: { type: 'text', label: 'Border Color (token or hex)' },
};
export const FormSelectField = {
    label: 'Form Select (Dropdown)',
    fields: formSelectFieldFields,
    defaultProps: { label: 'Select an option', placeholder: 'Choose...', helpText: '', required: false, options: [{ label: 'Option 1' }, { label: 'Option 2' }], labelColor: 'text.primary', inputBackground: 'ui.surface', borderColor: 'ui.border' },
    render: ({ label, placeholder, helpText, required, options, labelColor, inputBackground, borderColor }) => (_jsxs("div", { className: "mb-4", children: [_jsxs("label", { className: "block text-sm font-medium mb-1", style: { color: resolveColor(labelColor) }, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), _jsxs("select", { className: "w-full px-3 py-2 border rounded-md text-sm outline-none", style: { backgroundColor: resolveColor(inputBackground), borderColor: resolveColor(borderColor), color: 'inherit' }, children: [placeholder && _jsx("option", { value: "", children: placeholder }), options.map((opt, i) => _jsx("option", { value: opt.label, children: opt.label }, i))] }), helpText && _jsx("p", { className: "mt-1 text-xs text-gray-500", children: helpText })] })),
};
export default FormSelectField;
//# sourceMappingURL=FormSelectField.js.map