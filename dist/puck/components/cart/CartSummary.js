import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const cartSummaryFields = {
    position: { type: 'select', label: 'Position', options: [{ label: 'Sidebar (Sticky)', value: 'sidebar' }, { label: 'Bottom', value: 'bottom' }] },
    showSubtotal: { type: 'radio', label: 'Show Subtotal', options: RADIO_YES_NO },
    showShipping: { type: 'radio', label: 'Show Shipping', options: RADIO_YES_NO },
    showTax: { type: 'radio', label: 'Show Tax', options: RADIO_YES_NO },
    showDiscount: { type: 'radio', label: 'Show Discount', options: RADIO_YES_NO },
    showCouponInput: { type: 'radio', label: 'Show Coupon Input', options: RADIO_YES_NO },
    showCheckoutButton: { type: 'radio', label: 'Show Checkout Button', options: RADIO_YES_NO },
    checkoutButtonText: { type: 'text', label: 'Checkout Button Text' },
    freeShippingThreshold: { type: 'number', label: 'Free Shipping Threshold ($)' },
    showTrustBadges: { type: 'radio', label: 'Show Trust Badges', options: RADIO_YES_NO },
};
const Bag = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }), _jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), _jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })] }));
const Tag = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }), _jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" })] }));
const ArrowRight = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), _jsx("polyline", { points: "12 5 19 12 12 19" })] }));
const Shield = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }));
const Check = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const MOCK_TOTALS = { subtotal: 10997, shipping: 995, tax: 880, discount: 1099, total: 11773 };
const defaultFormat = (p) => `$${(p / 100).toFixed(2)}`;
export const CartSummary = {
    label: 'Cart Summary',
    fields: cartSummaryFields,
    defaultProps: {
        showSubtotal: true, showShipping: true, showTax: true, showDiscount: true, showCouponInput: true, showCheckoutButton: true,
        checkoutButtonText: 'Proceed to Checkout', freeShippingThreshold: 50, position: 'sidebar', showTrustBadges: true,
    },
    render: (raw) => {
        const { showSubtotal, showShipping, showTax, showDiscount, showCouponInput, showCheckoutButton, checkoutButtonText = 'Proceed to Checkout', freeShippingThreshold = 50, position = 'sidebar', showTrustBadges } = raw;
        const [code, setCode] = useState('');
        const [applying, setApplying] = useState(false);
        const [error, setError] = useState(null);
        const totals = raw.totals ?? MOCK_TOTALS;
        const appliedCoupon = raw.appliedCoupon ?? null;
        const onApply = raw.onApplyCoupon ?? (() => { });
        const onRemove = raw.onRemoveCoupon ?? (() => { });
        const onCheckout = raw.onCheckout ?? (() => { });
        const formatPrice = raw.formatPrice ?? defaultFormat;
        const amountToFreeShipping = Math.max(0, freeShippingThreshold * 100 - totals.subtotal);
        const freeShippingProgress = Math.min(100, (totals.subtotal / (freeShippingThreshold * 100)) * 100);
        const shippingIsFree = totals.shipping === 0;
        const handleApply = async () => {
            if (!code.trim())
                return;
            setApplying(true);
            setError(null);
            try {
                await onApply(code);
                setCode('');
            }
            catch (e) {
                setError(e?.message || 'Failed to apply');
            }
            finally {
                setApplying(false);
            }
        };
        const containerClass = position === 'sidebar' ? 'sticky top-4 border border-gray-200 rounded-lg p-6 bg-white shadow-sm' : 'border border-gray-200 rounded-lg p-6 bg-white';
        return (_jsxs("div", { className: containerClass, children: [_jsxs("div", { className: "flex items-center gap-2 mb-6 pb-4 border-b border-gray-200", children: [_jsx(Bag, {}), _jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Order Summary" })] }), showShipping && amountToFreeShipping > 0 && (_jsxs("div", { className: "mb-6 p-4 bg-blue-50 rounded-lg", children: [_jsxs("p", { className: "text-sm text-blue-900 mb-2", children: ["Add ", _jsx("span", { className: "font-semibold", children: formatPrice(amountToFreeShipping) }), " more for free shipping!"] }), _jsx("div", { className: "w-full bg-blue-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-300", style: { width: `${freeShippingProgress}%` } }) })] })), showCouponInput && !appliedCoupon && (_jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Have a coupon code?" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: code, onChange: (e) => setCode(e.target.value), placeholder: "Enter code", className: "flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500", disabled: applying }), _jsx("button", { onClick: handleApply, disabled: applying || !code.trim(), className: "px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed", children: applying ? 'Applying…' : 'Apply' })] }), error && _jsx("p", { className: "text-sm text-red-600 mt-2", children: error })] })), showDiscount && appliedCoupon && (_jsxs("div", { className: "mb-6 p-3 bg-green-50 border border-green-200 rounded flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, {}), _jsx("span", { className: "text-sm font-medium text-green-900", children: appliedCoupon.code })] }), _jsx("button", { onClick: onRemove, className: "text-sm text-green-700 hover:text-green-900 underline", children: "Remove" })] })), _jsxs("div", { className: "space-y-3 mb-6", children: [showSubtotal && _jsxs("div", { className: "flex justify-between text-gray-700", children: [_jsx("span", { children: "Subtotal" }), _jsx("span", { children: formatPrice(totals.subtotal) })] }), showShipping && (_jsxs("div", { className: "flex justify-between text-gray-700", children: [_jsx("span", { children: "Shipping" }), _jsx("span", { children: shippingIsFree ? _jsx("span", { className: "text-green-600 font-medium", children: "FREE" }) : formatPrice(totals.shipping) })] })), showTax && _jsxs("div", { className: "flex justify-between text-gray-700", children: [_jsx("span", { children: "Tax" }), _jsx("span", { children: formatPrice(totals.tax) })] }), showDiscount && totals.discount > 0 && _jsxs("div", { className: "flex justify-between text-green-600", children: [_jsx("span", { children: "Discount" }), _jsxs("span", { children: ["-", formatPrice(totals.discount)] })] })] }), _jsx("div", { className: "pt-4 border-t border-gray-200 mb-6", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-lg font-semibold text-gray-900", children: "Total" }), _jsx("span", { className: "text-2xl font-bold text-gray-900", children: formatPrice(totals.total) })] }) }), showCheckoutButton && (_jsxs("button", { onClick: onCheckout, className: "w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-4", children: [_jsx("span", { className: "font-medium", children: checkoutButtonText }), _jsx(ArrowRight, {})] })), showTrustBadges && (_jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsxs("div", { className: "flex items-center justify-center gap-4 text-xs text-gray-600", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Shield, {}), _jsx("span", { children: "Secure Checkout" })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Check, {}), _jsx("span", { children: "30-Day Returns" })] })] }), _jsxs("div", { className: "flex items-center justify-center gap-3 mt-3", children: [_jsx("img", { src: "https://via.placeholder.com/40x25/4285F4/FFFFFF?text=Visa", alt: "Visa", className: "h-6" }), _jsx("img", { src: "https://via.placeholder.com/40x25/EB001B/FFFFFF?text=MC", alt: "Mastercard", className: "h-6" }), _jsx("img", { src: "https://via.placeholder.com/40x25/0070BA/FFFFFF?text=PP", alt: "PayPal", className: "h-6" })] })] }))] }));
    },
};
export default CartSummary;
//# sourceMappingURL=CartSummary.js.map