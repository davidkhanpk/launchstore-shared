import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const formFieldFields = {
    fieldType: { type: 'select', label: 'Field Type', options: [{ label: 'Text', value: 'text' }, { label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' }, { label: 'Number', value: 'number' }, { label: 'Textarea', value: 'textarea' }, { label: 'URL', value: 'url' }] },
    label: { type: 'text', label: 'Label' },
    placeholder: { type: 'text', label: 'Placeholder' },
    helpText: { type: 'text', label: 'Help Text' },
    required: { type: 'radio', label: 'Required', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    minLength: { type: 'number', label: 'Min Length / Min Value' },
    maxLength: { type: 'number', label: 'Max Length / Max Value' },
    rows: { type: 'number', label: 'Rows (textarea only)' },
    labelColor: { type: 'text', label: 'Label Color (token or hex)' },
    inputBackground: { type: 'text', label: 'Input Background (token or hex)' },
    borderColor: { type: 'text', label: 'Border Color (token or hex)' },
};
const inputTypeMap = { text: 'text', email: 'email', phone: 'tel', number: 'number', textarea: 'textarea', url: 'url' };
export const FormField = {
    label: 'Form Field',
    fields: formFieldFields,
    defaultProps: { fieldType: 'text', label: 'Field Label', placeholder: '', helpText: '', required: false, rows: 4, labelColor: 'text.primary', inputBackground: 'ui.surface', borderColor: 'ui.border' },
    render: ({ fieldType, label, placeholder, helpText, required, rows, labelColor, inputBackground, borderColor }) => {
        const inputStyle = { backgroundColor: resolveColor(inputBackground), borderColor: resolveColor(borderColor), color: 'inherit' };
        const labelStyle = { color: resolveColor(labelColor) };
        const inputClass = 'w-full px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-offset-0';
        return (_jsxs("div", { className: "mb-4", children: [_jsxs("label", { className: "block text-sm font-medium mb-1", style: labelStyle, children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), fieldType === 'textarea' ? (_jsx("textarea", { className: inputClass, placeholder: placeholder, rows: rows, style: inputStyle, readOnly: true })) : (_jsx("input", { type: inputTypeMap[fieldType], className: inputClass, placeholder: placeholder, style: inputStyle, readOnly: true })), helpText && _jsx("p", { className: "mt-1 text-xs text-gray-500", children: helpText })] }));
    },
};
export default FormField;
//# sourceMappingURL=FormField.js.map