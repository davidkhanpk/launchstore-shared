import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { bundledProductDetailFields } from './bundledproductdetail.fields';
const AlertSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })] }));
const LoaderSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: "animate-spin", children: [_jsx("line", { x1: "12", y1: "2", x2: "12", y2: "6" }), _jsx("line", { x1: "12", y1: "18", x2: "12", y2: "22" }), _jsx("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }), _jsx("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }), _jsx("line", { x1: "2", y1: "12", x2: "6", y2: "12" }), _jsx("line", { x1: "18", y1: "12", x2: "22", y2: "12" }), _jsx("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }), _jsx("line", { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })] }));
const CartSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
const ChevronDownSvg = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const defaultFormat = (v) => {
    if (typeof v.calculated_price === 'number')
        return `$${v.calculated_price.toFixed(2)}`;
    if (v.calculated_price && typeof v.calculated_price.calculated_amount === 'number') {
        return `$${v.calculated_price.calculated_amount.toFixed(2)}`;
    }
    return 'Price unavailable';
};
const getNumericPrice = (p) => {
    if (typeof p === 'number')
        return p;
    if (p && typeof p.calculated_amount === 'number')
        return p.calculated_amount;
    if (p && typeof p.original_amount === 'number')
        return p.original_amount;
    return 0;
};
export const BundledProductDetail = {
    label: 'Bundled Product Detail',
    fields: bundledProductDetailFields,
    defaultProps: {
        showSavingsBadge: true, showItemImages: true,
        buttonText: 'Add Bundle to Cart', bundleIdOverride: '',
    },
    render: (rawProps) => {
        const { showSavingsBadge = true, showItemImages = true, buttonText = 'Add Bundle to Cart', bundleIdOverride = '', bundle, isLoading, error, onAdd, isAdding, formatPrice, } = rawProps;
        const fmt = formatPrice || defaultFormat;
        const [selectedVariants, setSelectedVariants] = useState({});
        const [addError, setAddError] = useState(null);
        // Auto-select first variant for each item when the bundle loads
        const items = bundle?.items;
        useMemo(() => {
            if (!items)
                return;
            const auto = {};
            items.forEach((it) => {
                const v0 = it.product?.variants?.[0]?.id;
                if (v0 && !selectedVariants[it.id])
                    auto[it.id] = v0;
            });
            if (Object.keys(auto).length > 0) {
                setSelectedVariants((prev) => ({ ...prev, ...auto }));
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [items]);
        const totals = useMemo(() => {
            if (!items)
                return { total: 0, individual: 0, savings: 0, savingsPercent: 0 };
            let total = 0;
            let individual = 0;
            items.forEach((it) => {
                const vid = selectedVariants[it.id];
                const v = it.product?.variants?.find((x) => x.id === vid);
                if (v) {
                    const cap = getNumericPrice(v.calculated_price);
                    const orig = getNumericPrice(v.original_price || v.calculated_price);
                    total += cap * it.quantity;
                    individual += orig * it.quantity;
                }
            });
            const savings = individual - total;
            const savingsPercent = individual > 0 ? Math.round((savings / individual) * 100) : 0;
            return { total, individual, savings, savingsPercent };
        }, [items, selectedVariants]);
        if (isLoading) {
            return (_jsxs("div", { className: "p-6 flex items-center justify-center gap-2 text-gray-600", children: [_jsx(LoaderSvg, {}), _jsx("span", { className: "text-sm", children: "Loading bundle..." })] }));
        }
        if (error) {
            return (_jsxs("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2", children: [_jsx("span", { className: "text-red-600", children: _jsx(AlertSvg, {}) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-red-800", children: "Failed to load bundle" }), _jsx("p", { className: "text-xs text-red-600 mt-1", children: error })] })] }));
        }
        if (!bundle) {
            // Empty state — no bundle available (preview)
            return (_jsx("div", { className: "p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm", children: "This bundle has no items" }));
        }
        if (!items || items.length === 0) {
            return (_jsx("div", { className: "p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm", children: "This bundle has no items" }));
        }
        const allSelected = items.every((it) => selectedVariants[it.id]);
        const handleAdd = async () => {
            if (!onAdd || !allSelected)
                return;
            setAddError(null);
            try {
                await onAdd(items.map((it) => ({ item_id: it.id, variant_id: selectedVariants[it.id] })));
            }
            catch (err) {
                setAddError(err?.message || 'Failed to add bundle to cart');
            }
        };
        return (_jsxs("div", { className: "bundled-product-detail space-y-6", children: [_jsx("div", { children: _jsx("h2", { className: "text-2xl font-bold text-gray-900", children: bundle.title || 'Product Bundle' }) }), _jsx("div", { className: "space-y-4", children: items.map((item, idx) => (_jsxs("div", { className: "p-4 border border-gray-200 rounded-lg space-y-3", children: [_jsxs("div", { className: "flex gap-4", children: [showItemImages && item.product?.images?.[0]?.url && (_jsx("div", { className: "w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden", children: _jsx("img", { src: item.product.images[0].url, alt: item.product.title, className: "w-full h-full object-cover" }) })), _jsxs("div", { className: "flex-1", children: [_jsxs("p", { className: "text-sm font-medium text-gray-600 mb-1", children: ["Item ", idx + 1, item.quantity > 1 && ` (\u00d7${item.quantity})`] }), _jsx("p", { className: "font-semibold text-gray-900", children: item.product?.title || 'Unknown Product' })] })] }), item.product?.variants && item.product.variants.length > 0 && (_jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: ["Select Variant", item.product.variants.length > 1 && _jsx("span", { className: "text-red-500", children: "*" })] }), _jsxs("div", { className: "relative", children: [_jsxs("select", { value: selectedVariants[item.id] || '', onChange: (e) => setSelectedVariants((prev) => ({ ...prev, [item.id]: e.target.value })), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900", children: [_jsx("option", { value: "", disabled: true, children: "Choose a variant..." }), item.product.variants.map((v) => (_jsxs("option", { value: v.id, children: [v.title, " - ", fmt(v)] }, v.id)))] }), _jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none", children: _jsx(ChevronDownSvg, {}) })] })] }))] }, item.id))) }), _jsxs("div", { className: "bg-gray-50 rounded-lg p-4 space-y-2", children: [showSavingsBadge && totals.savingsPercent > 0 && (_jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium", children: ["Save ", totals.savingsPercent, "%"] })), _jsxs("div", { className: "flex items-baseline gap-2", children: [_jsxs("span", { className: "text-3xl font-bold text-gray-900", children: ["$", totals.total.toFixed(2)] }), totals.savingsPercent > 0 && (_jsxs("span", { className: "text-lg text-gray-500 line-through", children: ["$", totals.individual.toFixed(2)] }))] }), totals.savings > 0 && (_jsxs("p", { className: "text-sm text-green-600", children: ["You save $", totals.savings.toFixed(2)] }))] }), addError && (_jsx("div", { className: "p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700", children: addError })), _jsx("button", { type: "button", onClick: handleAdd, disabled: !onAdd || !allSelected || !!isAdding, className: "w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2", children: isAdding ? _jsxs(_Fragment, { children: [_jsx(LoaderSvg, {}), " Adding..."] }) : _jsxs(_Fragment, { children: [_jsx(CartSvg, {}), " ", buttonText] }) })] }));
    },
};
export default BundledProductDetail;
//# sourceMappingURL=BundledProductDetail.js.map