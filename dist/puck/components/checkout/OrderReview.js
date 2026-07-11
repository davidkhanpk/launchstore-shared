import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderReviewFields = {
    showTermsCheckbox: { type: 'radio', label: 'Show Terms Checkbox', options: RADIO_YES_NO },
    showPolicies: { type: 'radio', label: 'Show Policy Links', options: RADIO_YES_NO },
    showSecurityBadge: { type: 'radio', label: 'Show Security Badge', options: RADIO_YES_NO },
    buttonText: { type: 'text', label: 'Button Text' },
    buttonSize: { type: 'select', label: 'Button Size', options: [{ label: 'Default', value: 'default' }, { label: 'Large', value: 'large' }] },
};
const Check = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("polyline", { points: "9 11 12 14 22 4" }), _jsx("path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })] }));
const Shield = ({ size = 20 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }));
const MOCK_ADDR = { name: 'John Doe', street: '123 Main Street, Apt 4B', city: 'New York', state: 'NY', zip: '10001', country: 'United States', email: 'john.doe@example.com' };
const MOCK_SHIP = { name: 'Standard Shipping', price: '$9.95', estimate: '5-7 business days' };
const MOCK_PAY = { description: 'Credit Card ending in 3456' };
export const OrderReview = {
    label: 'Order Review & Place Order',
    fields: orderReviewFields,
    defaultProps: { showTermsCheckbox: true, showPolicies: true, showSecurityBadge: true, buttonText: 'Place Order', buttonSize: 'large' },
    render: (raw) => {
        const { showTermsCheckbox, showPolicies, showSecurityBadge, buttonText = 'Place Order', buttonSize = 'large' } = raw;
        const addr = raw.shippingAddress ?? MOCK_ADDR;
        const ship = raw.shippingMethod ?? MOCK_SHIP;
        const pay = raw.paymentMethod ?? MOCK_PAY;
        const termsHref = raw.termsHref ?? '#';
        const privacyHref = raw.privacyHref ?? '#';
        const refundHref = raw.refundHref ?? '#';
        const shippingPolicyHref = raw.shippingPolicyHref ?? '#';
        const contactHref = raw.contactHref ?? '#';
        const onPlaceOrder = raw.onPlaceOrder ?? (() => { });
        const isProcessing = raw.isProcessing ?? false;
        const agreed = raw.agreedToTerms ?? false;
        const onAgreedChange = raw.onAgreedChange ?? (() => { });
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6 pb-4 border-b border-gray-200", children: [_jsx(Check, {}), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Review Your Order" })] }), _jsxs("div", { className: "space-y-4 mb-6", children: [_jsxs("div", { className: "border border-gray-100 rounded-lg p-4 bg-gray-50", children: [_jsx("h3", { className: "font-medium text-gray-900 mb-3", children: "Shipping to:" }), _jsxs("p", { className: "text-sm text-gray-700", children: [addr.name, _jsx("br", {}), addr.street, _jsx("br", {}), addr.city, ", ", addr.state, " ", addr.zip, _jsx("br", {}), addr.country] }), _jsx("p", { className: "text-sm text-gray-600 mt-2", children: addr.email })] }), _jsxs("div", { className: "border border-gray-100 rounded-lg p-4 bg-gray-50", children: [_jsx("h3", { className: "font-medium text-gray-900 mb-2", children: "Shipping Method:" }), _jsxs("p", { className: "text-sm text-gray-700", children: [ship.name, " - ", ship.price] }), _jsxs("p", { className: "text-xs text-gray-600 mt-1", children: ["Estimated delivery: ", ship.estimate] })] }), _jsxs("div", { className: "border border-gray-100 rounded-lg p-4 bg-gray-50", children: [_jsx("h3", { className: "font-medium text-gray-900 mb-2", children: "Payment Method:" }), _jsx("p", { className: "text-sm text-gray-700", children: pay.description })] })] }), showTermsCheckbox && (_jsx("div", { className: "mb-6", children: _jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: agreed, onChange: (e) => onAgreedChange(e.target.checked), className: "mt-1 h-4 w-4" }), _jsxs("span", { className: "text-sm text-gray-700", children: ["I agree to the ", _jsx("a", { href: termsHref, className: "text-blue-600 hover:underline", children: "Terms and Conditions" }), " and ", _jsx("a", { href: privacyHref, className: "text-blue-600 hover:underline", children: "Privacy Policy" })] })] }) })), _jsxs("button", { onClick: onPlaceOrder, disabled: isProcessing || (showTermsCheckbox && !agreed), className: `w-full bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 ${buttonSize === 'large' ? 'py-4 text-lg' : 'py-3 text-base'} disabled:opacity-50 disabled:cursor-not-allowed`, children: [_jsx(Check, {}), " ", buttonText] }), showSecurityBadge && (_jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-sm text-gray-600", children: [_jsx(Shield, {}), " ", _jsx("span", { children: "Secure checkout - Your payment info is encrypted" })] })), showPolicies && (_jsx("div", { className: "mt-4 pt-4 border-t border-gray-200", children: _jsxs("div", { className: "flex items-center justify-center gap-4 text-xs text-gray-600", children: [_jsx("a", { href: refundHref, className: "hover:underline", children: "Refund Policy" }), _jsx("span", { children: "\u2022" }), _jsx("a", { href: shippingPolicyHref, className: "hover:underline", children: "Shipping Policy" }), _jsx("span", { children: "\u2022" }), _jsx("a", { href: contactHref, className: "hover:underline", children: "Contact Us" })] }) }))] }));
    },
};
export default OrderReview;
//# sourceMappingURL=OrderReview.js.map