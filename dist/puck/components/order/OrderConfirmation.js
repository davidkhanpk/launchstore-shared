import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderConfirmationFields = {
    style: { type: 'select', label: 'Style', options: [{ label: 'Success (Large checkmark)', value: 'success' }, { label: 'Minimal', value: 'minimal' }, { label: 'Detailed', value: 'detailed' }] },
    titleText: { type: 'text', label: 'Title Text' },
    messageText: { type: 'textarea', label: 'Message Text' },
    showCheckmark: { type: 'radio', label: 'Show Checkmark Icon', options: RADIO_YES_NO },
    showOrderNumber: { type: 'radio', label: 'Show Order Number', options: RADIO_YES_NO },
    showEmailConfirmation: { type: 'radio', label: 'Show Email Confirmation Message', options: RADIO_YES_NO },
    showContinueShopping: { type: 'radio', label: 'Show Continue Shopping Button', options: RADIO_YES_NO },
};
const Check = ({ size = 48 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const Mail = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), _jsx("polyline", { points: "22,6 12,13 2,6" })] }));
export const OrderConfirmation = {
    label: 'Order Confirmation',
    fields: orderConfirmationFields,
    defaultProps: { showCheckmark: true, titleText: 'Order Confirmed!', messageText: "Thank you for your order. We've received your order and will begin processing it right away.", showOrderNumber: true, showEmailConfirmation: true, showContinueShopping: true, style: 'success' },
    render: (raw) => {
        const { showCheckmark, titleText = 'Order Confirmed!', messageText, showOrderNumber, showEmailConfirmation, showContinueShopping, style = 'success' } = raw;
        const orderId = raw.orderId ?? 'ORD-2025-12345';
        const email = raw.email ?? 'customer@example.com';
        const viewOrderHref = raw.viewOrderHref ?? '/account/orders';
        const continueShoppingHref = raw.continueShoppingHref ?? '/';
        if (style === 'success') {
            return (_jsxs("div", { className: "max-w-2xl mx-auto text-center py-12", children: [showCheckmark && _jsx("div", { className: "mb-6", children: _jsx("div", { className: "w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center", children: _jsx(Check, {}) }) }), _jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: titleText }), showOrderNumber && _jsxs("p", { className: "text-lg text-gray-600 mb-2", children: ["Order Number: ", _jsx("strong", { className: "text-gray-900", children: orderId })] }), _jsx("p", { className: "text-gray-600 mb-6 max-w-lg mx-auto", children: messageText }), showEmailConfirmation && (_jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6", children: _jsxs("p", { className: "flex items-center justify-center gap-2 text-sm text-blue-900", children: [_jsx(Mail, {}), " A confirmation email has been sent to ", _jsx("strong", { children: email })] }) })), showContinueShopping && (_jsxs("div", { className: "flex gap-4 justify-center", children: [_jsx("a", { href: viewOrderHref, className: "px-6 py-3 bg-black text-white rounded hover:bg-gray-800", children: "View Order Details" }), _jsx("a", { href: continueShoppingHref, className: "px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50", children: "Continue Shopping" })] }))] }));
        }
        if (style === 'minimal') {
            return (_jsxs("div", { className: "max-w-lg mx-auto text-center py-8", children: [showCheckmark && _jsx("div", { className: "flex justify-center mb-4 text-green-600", children: _jsx(Check, { size: 40 }) }), _jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-2", children: titleText }), showOrderNumber && _jsxs("p", { className: "text-gray-600 mb-4", children: ["Order #", orderId] }), _jsx("p", { className: "text-gray-600 mb-6", children: messageText }), showContinueShopping && _jsx("a", { href: continueShoppingHref, className: "text-blue-600 hover:underline", children: "\u2190 Back to Home" })] }));
        }
        return (_jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("div", { className: "bg-green-50 border-l-4 border-green-500 p-6 mb-8", children: _jsxs("div", { className: "flex items-start", children: [showCheckmark && _jsx("div", { className: "flex-shrink-0 text-green-600", children: _jsx(Check, { size: 32 }) }), _jsxs("div", { className: "ml-3", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-2", children: titleText }), showOrderNumber && _jsxs("p", { className: "text-gray-700 mb-1", children: ["Order Number: ", _jsx("strong", { children: orderId })] }), _jsx("p", { className: "text-gray-600", children: messageText })] })] }) }), showEmailConfirmation && (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6 mb-6", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: "What happens next?" }), _jsxs("ul", { className: "space-y-2 text-gray-600", children: [_jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "mr-2", children: "\u2713" }), _jsxs("span", { children: ["Confirmation email sent to ", email] })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "mr-2", children: "\u2713" }), _jsx("span", { children: "We'll process your order within 24 hours" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "mr-2", children: "\u2713" }), _jsx("span", { children: "You'll receive a shipping notification when your order ships" })] })] })] })), showContinueShopping && (_jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: viewOrderHref, className: "flex-1 px-6 py-3 bg-black text-white text-center rounded hover:bg-gray-800", children: "Track Your Order" }), _jsx("a", { href: continueShoppingHref, className: "flex-1 px-6 py-3 border border-gray-300 text-gray-700 text-center rounded hover:bg-gray-50", children: "Continue Shopping" })] }))] }));
    },
};
export default OrderConfirmation;
//# sourceMappingURL=OrderConfirmation.js.map