import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const discountCodeFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Always Visible', value: 'inline' }, { label: 'Expandable', value: 'expandable' }] },
    showAppliedDiscounts: { type: 'radio', label: 'Show Applied Discounts', options: RADIO_YES_NO },
    buttonText: { type: 'text', label: 'Button Text' },
    placeholder: { type: 'text', label: 'Input Placeholder' },
};
const Tag = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }), _jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" })] }));
const X = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const ChevronDown = ({ size = 20 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const defaultFormat = (p) => `$${(p / 100).toFixed(2)}`;
export const DiscountCode = {
    label: 'Discount Code',
    fields: discountCodeFields,
    defaultProps: { layout: 'inline', showAppliedDiscounts: true, buttonText: 'Apply', placeholder: 'Enter discount code' },
    render: (raw) => {
        const { layout = 'inline', showAppliedDiscounts, buttonText = 'Apply', placeholder = 'Enter discount code' } = raw;
        const [code, setCode] = useState('');
        const [applying, setApplying] = useState(false);
        const appliedDiscount = raw.appliedDiscount ?? { code: 'SAVE10', amount: 1099 };
        const onApply = raw.onApply ?? (() => { });
        const onRemove = raw.onRemove ?? (() => { });
        const formatPrice = raw.formatPrice ?? defaultFormat;
        const handleApply = async () => {
            if (!code.trim())
                return;
            setApplying(true);
            try {
                await onApply(code);
                setCode('');
            }
            finally {
                setApplying(false);
            }
        };
        const inputEl = (_jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: code, onChange: (e) => setCode(e.target.value), className: "flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm", placeholder: placeholder, disabled: applying }), _jsx("button", { onClick: handleApply, disabled: applying || !code.trim(), className: "px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: applying ? 'Applying…' : buttonText })] }));
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-4 bg-white", children: [layout === 'expandable' ? (_jsxs("details", { className: "group", children: [_jsxs("summary", { className: "cursor-pointer flex items-center justify-between text-sm font-medium text-gray-900", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, {}), _jsx("span", { children: "Have a discount code?" })] }), _jsx(ChevronDown, {})] }), _jsx("div", { className: "mt-4", children: inputEl })] })) : (_jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [_jsx(Tag, {}), " Discount Code"] }), inputEl] })), showAppliedDiscounts && appliedDiscount && (_jsxs("div", { className: "mt-4 p-3 bg-green-50 border border-green-200 rounded flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, {}), _jsxs("div", { children: [_jsx("span", { className: "text-sm font-medium text-green-900", children: appliedDiscount.code }), _jsxs("span", { className: "text-xs text-green-700 ml-2", children: ["-", formatPrice(appliedDiscount.amount), " off"] })] })] }), _jsx("button", { onClick: onRemove, className: "text-green-700 hover:text-green-900", children: _jsx(X, {}) })] }))] }));
    },
};
export default DiscountCode;
//# sourceMappingURL=DiscountCode.js.map