import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { productVariantSelectorFields } from './productvariantselector.fields';
const CheckSvg = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const renderOptionRow = (option, selectorStyle, showLabels, selected, onChange) => {
    if (selectorStyle === 'dropdown') {
        return (_jsxs("div", { className: "mb-4", children: [showLabels && _jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: option.title }), _jsx("select", { value: selected || '', onChange: (e) => onChange(e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", children: (option.values || []).map((v) => (_jsx("option", { value: v.value, children: v.value }, v.id))) })] }, option.id));
    }
    if (selectorStyle === 'buttons') {
        return (_jsxs("div", { className: "mb-4", children: [showLabels && _jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: option.title }), _jsx("div", { className: "flex flex-wrap gap-2", children: (option.values || []).map((v) => {
                        const isSelected = selected === v.value;
                        return (_jsx("button", { type: "button", onClick: () => onChange(v.value), className: `px-4 py-2 border rounded-md transition-colors ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 hover:border-gray-400'}`, children: v.value }, v.id));
                    }) })] }, option.id));
    }
    // color-swatches
    return (_jsxs("div", { className: "mb-4", children: [showLabels && _jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: option.title }), _jsx("div", { className: "flex flex-wrap gap-2", children: (option.values || []).map((v) => {
                    const isSelected = selected === v.id;
                    const colorValue = v.metadata?.color || v.value.toLowerCase();
                    return (_jsx("button", { type: "button", title: v.value, onClick: () => onChange(v.id), className: `w-10 h-10 rounded-full border-2 transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'}`, style: { backgroundColor: colorValue } }, v.id));
                }) })] }, option.id));
};
export const ProductVariantSelector = {
    label: 'Product Variant Selector',
    fields: productVariantSelectorFields,
    defaultProps: {
        selectorStyle: 'buttons', showLabels: true, showStock: true,
        marginTop: 'mt-4', marginBottom: 'mb-4', marginLeft: 'ml-0', marginRight: 'mr-0',
        paddingX: 'px-0', paddingY: 'py-0',
    },
    render: (rawProps) => {
        const { selectorStyle = 'buttons', showLabels, showStock = true, marginTop, marginBottom, marginLeft, marginRight, paddingX, paddingY, product, selectedOptions: externalOpts, setSelectedOptions: externalSetOpts, selectedVariant, setSelectedVariant: externalSetVariant, } = rawProps;
        const controlled = externalOpts !== undefined && typeof externalSetOpts === 'function';
        const [localOpts, setLocalOpts] = useState({});
        const selectedOptions = controlled ? externalOpts : localOpts;
        const setOptions = controlled ? externalSetOpts : setLocalOpts;
        if (!product || !product.variants || product.variants.length === 0) {
            return _jsx("div", { className: "text-gray-400 italic", children: "No variants available" });
        }
        if (product.variants.length === 1 && (!product.options || product.options.length === 0)) {
            return _jsx("div", {});
        }
        const options = product.options || [];
        // Initialize selection when options become available and nothing is
        // selected yet. Runs in BOTH controlled and uncontrolled modes, and
        // RE-RUNS whenever options.length changes (e.g. when the product
        // loads asynchronously after the selector mounts, or when the user
        // navigates to a different product). The previous version had `[]`
        // as deps, which meant the effect only ran once at mount — if the
        // product wasn't loaded yet, the effect saw options=[] and silently
        // did nothing, and nothing re-ran when the product finally arrived.
        // Now: when options transitions from 0 → N, the effect re-fires and
        // seeds the first value of each option. The matching-variant effect
        // (below) then sees the new selectedOptions and calls externalSetVariant,
        // so the AddToCart's selectedVariant gets populated and the button
        // enables correctly on first paint.
        useEffect(() => {
            if (options.length > 0 && Object.keys(selectedOptions).length === 0) {
                const init = {};
                options.forEach((opt) => {
                    if (opt.values && opt.values.length > 0)
                        init[opt.id] = opt.values[0].value;
                });
                setOptions(init);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [options.length]);
        // Find matching variant when options change
        useEffect(() => {
            if (Object.keys(selectedOptions).length === options.length) {
                const match = product.variants?.find((variant) => variant.options?.every((vo) => {
                    const oid = vo.option_id;
                    const v = vo.value;
                    return oid && v && selectedOptions[oid] === v;
                }));
                if (externalSetVariant && match) {
                    externalSetVariant({
                        id: match.id, sku: match.sku ?? undefined,
                        inventory_quantity: match.inventory_quantity ?? null,
                        options: match.options,
                    });
                }
                else if (externalSetVariant) {
                    externalSetVariant(null);
                }
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedOptions]);
        const sty = selectorStyle || 'buttons';
        return (_jsxs("div", { className: `space-y-4 ${marginTop || ''} ${marginBottom || ''} ${marginLeft || ''} ${marginRight || ''} ${paddingX || ''} ${paddingY || ''}`, children: [options.map((opt) => renderOptionRow(opt, sty, !!showLabels, selectedOptions[opt.id], (val) => setOptions({ ...selectedOptions, [opt.id]: val }))), showStock && selectedVariant && (_jsx("div", { className: "mt-4 text-sm flex items-center gap-1", children: selectedVariant.inventory_quantity && selectedVariant.inventory_quantity > 0 ? (_jsxs("span", { className: "text-green-600 inline-flex items-center gap-1", children: [_jsx(CheckSvg, {}), " In stock (", selectedVariant.inventory_quantity, " available)"] })) : (_jsx("span", { className: "text-red-600", children: "\u2717 Out of stock" })) }))] }));
    },
};
export default ProductVariantSelector;
//# sourceMappingURL=ProductVariantSelector.js.map