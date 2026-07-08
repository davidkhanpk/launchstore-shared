import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Clipboard = ({ size = 32 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }), _jsx("rect", { x: "9", y: "3", width: "6", height: "4", rx: "1" })] }));
const formEmbedFields = {
    formId: { type: 'text', label: 'Form ID' },
    padding: { type: 'text', label: 'Padding' },
    maxWidth: { type: 'text', label: 'Max width' },
    backgroundColor: { type: 'text', label: 'Background color (token or hex)' },
    borderRadius: { type: 'text', label: 'Border radius' },
};
export const FormEmbed = {
    label: 'Form Embed',
    fields: formEmbedFields,
    defaultProps: { formId: '', padding: '24px', maxWidth: '640px', backgroundColor: '', borderRadius: '16px' },
    render: ({ formId, padding, maxWidth, backgroundColor, borderRadius }) => (_jsx("div", { style: { padding, maxWidth, margin: '0 auto' }, children: _jsxs("div", { style: { borderRadius, backgroundColor: backgroundColor || undefined }, className: "border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 flex flex-col items-center justify-center text-center gap-3", children: [_jsx(Clipboard, {}), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300", children: "Form Embed" }), formId ? (_jsx("p", { className: "mt-1 text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded inline-block break-all", children: formId })) : (_jsx("p", { className: "mt-1 text-xs text-gray-400 dark:text-gray-500", children: "Paste a Form ID in the panel on the right \u2192" }))] }), _jsxs("p", { className: "text-[10px] text-gray-400 dark:text-gray-500 max-w-xs", children: ["Create and design your form in ", _jsx("strong", { children: "Dashboard \u2192 Forms" }), ", then copy the Form ID and paste it here."] })] }) })),
};
export default FormEmbed;
//# sourceMappingURL=FormEmbed.js.map