import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const MARGIN_OPTS = (prefix) => [
    { label: 'None', value: `${prefix}-0` },
    { label: 'Small', value: `${prefix}-2` },
    { label: 'Medium', value: `${prefix}-4` },
    { label: 'Large', value: `${prefix}-6` },
    { label: 'Extra Large', value: `${prefix}-8` },
];
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    showLabel: {
        type: 'radio', label: 'Show Label',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    labelText: { type: 'text', label: 'Label Text' },
    minQuantity: { type: 'number', label: 'Minimum Quantity' },
    maxQuantity: { type: 'number', label: 'Maximum Quantity' },
    defaultQuantity: { type: 'number', label: 'Default Quantity' },
    size: {
        type: 'select', label: 'Size',
        options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }],
    },
    style: {
        type: 'select', label: 'Style',
        options: [{ label: 'Default', value: 'default' }, { label: 'Minimal', value: 'minimal' }, { label: 'Rounded', value: 'rounded' }],
    },
    marginTop: { type: 'select', label: 'Margin Top', options: MARGIN_OPTS('mt') },
    marginBottom: { type: 'select', label: 'Margin Bottom', options: MARGIN_OPTS('mb') },
    marginLeft: { type: 'select', label: 'Margin Left', options: MARGIN_OPTS('ml').slice(0, 4) },
    marginRight: { type: 'select', label: 'Margin Right', options: MARGIN_OPTS('mr').slice(0, 4) },
    paddingX: { type: 'select', label: 'Padding Horizontal', options: MARGIN_OPTS('px') },
    paddingY: { type: 'select', label: 'Padding Vertical', options: MARGIN_OPTS('py') },
};
const MinusSvg = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }));
const PlusSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), _jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })] }));
const SIZE_INPUT = { small: 'h-8 text-sm', medium: 'h-10 text-base', large: 'h-12 text-lg' };
const SIZE_BUTTON = { small: 'w-8 h-8', medium: 'w-10 h-10', large: 'w-12 h-12' };
const SIZE_ICON = { small: 12, medium: 16, large: 20 };
const STYLE = {
    default: 'border border-gray-300 rounded-lg shadow-sm',
    minimal: 'border-b border-gray-300',
    rounded: 'border border-gray-300 rounded-full shadow-sm',
};
export const QuantitySelector = {
    label: 'Quantity Selector',
    fields: allFields,
    defaultProps: {
        showLabel: true, labelText: 'Quantity',
        minQuantity: 1, maxQuantity: 99, defaultQuantity: 1,
        size: 'medium', style: 'default',
        marginTop: 'mt-4', marginBottom: 'mb-4', marginLeft: 'ml-0', marginRight: 'mr-0',
        paddingX: 'px-0', paddingY: 'py-0',
    },
    render: (rawProps) => {
        const { showLabel, labelText, minQuantity = 1, maxQuantity = 99, defaultQuantity = 1, size = 'medium', style = 'default', marginTop, marginBottom, marginLeft, marginRight, paddingX, paddingY, quantity: externalQuantity, setQuantity: externalSet, } = rawProps;
        const [localQ, setLocalQ] = useState(defaultQuantity);
        const controlled = externalQuantity !== undefined;
        const quantity = controlled ? externalQuantity : localQ;
        const setQuantity = externalSet || setLocalQ;
        useEffect(() => {
            if (defaultQuantity !== quantity)
                setQuantity(defaultQuantity);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        const increment = () => { if (quantity < maxQuantity)
            setQuantity(quantity + 1); };
        const decrement = () => { if (quantity > minQuantity)
            setQuantity(quantity - 1); };
        const handleInputChange = (e) => {
            const value = parseInt(e.target.value) || minQuantity;
            if (value >= minQuantity && value <= maxQuantity)
                setQuantity(value);
        };
        const sz = size || 'medium';
        const sty = style || 'default';
        return (_jsxs("div", { className: `quantity-selector ${marginTop || ''} ${marginBottom || ''} ${marginLeft || ''} ${marginRight || ''} ${paddingX || ''} ${paddingY || ''}`, children: [showLabel && (_jsx("label", { className: "block text-sm font-medium text-gray-800 mb-2", children: labelText })), _jsxs("div", { className: `inline-flex items-center ${STYLE[sty]} bg-white overflow-hidden hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20 transition-all duration-200`, children: [_jsx("button", { type: "button", onClick: decrement, disabled: quantity <= minQuantity, className: `${SIZE_BUTTON[sz]} flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all duration-150 border-r border-gray-200`, "aria-label": "Decrease quantity", children: _jsx(MinusSvg, { size: SIZE_ICON[sz] }) }), _jsx("input", { type: "number", value: quantity, onChange: handleInputChange, min: minQuantity, max: maxQuantity, className: `${SIZE_INPUT[sz]} w-16 text-center font-semibold text-gray-900 border-none focus:outline-none appearance-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`, "aria-label": "Quantity" }), _jsx("button", { type: "button", onClick: increment, disabled: quantity >= maxQuantity, className: `${SIZE_BUTTON[sz]} flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all duration-150 border-l border-gray-200`, "aria-label": "Increase quantity", children: _jsx(PlusSvg, { size: SIZE_ICON[sz] }) })] })] }));
    },
};
export default QuantitySelector;
//# sourceMappingURL=QuantitySelector.js.map