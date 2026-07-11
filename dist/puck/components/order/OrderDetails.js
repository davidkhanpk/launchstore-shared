import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderDetailsFields = {
    showItemImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
    showItemQuantity: { type: 'radio', label: 'Show Item Quantity', options: RADIO_YES_NO },
    showItemPrice: { type: 'radio', label: 'Show Item Prices', options: RADIO_YES_NO },
    showShippingAddress: { type: 'radio', label: 'Show Shipping Address', options: RADIO_YES_NO },
    showBillingAddress: { type: 'radio', label: 'Show Billing Address', options: RADIO_YES_NO },
    showPaymentMethod: { type: 'radio', label: 'Show Payment Method', options: RADIO_YES_NO },
    showShippingMethod: { type: 'radio', label: 'Show Shipping Method', options: RADIO_YES_NO },
    showPricingBreakdown: { type: 'radio', label: 'Show Pricing Breakdown', options: RADIO_YES_NO },
    compactView: { type: 'radio', label: 'Compact View', options: RADIO_YES_NO },
};
const MOCK = {
    items: [
        { id: '1', title: 'Classic T-Shirt', variant: 'Medium / Black', thumbnail: 'https://via.placeholder.com/80', quantity: 2, unit_price: 2999, total: 5998 },
        { id: '2', title: 'Denim Jeans', variant: '32x34 / Blue', thumbnail: 'https://via.placeholder.com/80', quantity: 1, unit_price: 7999, total: 7999 },
    ],
    shippingAddress: { first_name: 'John', last_name: 'Doe', address_1: '123 Main St', city: 'New York', province: 'NY', postal_code: '10001', country: 'United States' },
    billingAddress: { first_name: 'John', last_name: 'Doe', address_1: '123 Main St', city: 'New York', province: 'NY', postal_code: '10001', country: 'United States' },
    payment: { provider: 'Stripe', card_last4: '4242', card_brand: 'Visa' },
    shippingMethod: { method: 'Standard Shipping', cost: 995 },
    totals: { subtotal: 13997, shipping_total: 995, tax_total: 1120, total: 16112 },
};
const defaultFormat = (p) => `$${(p / 100).toFixed(2)}`;
export const OrderDetails = {
    label: 'Order Details',
    fields: orderDetailsFields,
    defaultProps: { showItemImages: true, showItemQuantity: true, showItemPrice: true, showShippingAddress: true, showBillingAddress: true, showPaymentMethod: true, showShippingMethod: true, showPricingBreakdown: true, compactView: false },
    render: (raw) => {
        const { showItemImages, showItemQuantity, showItemPrice, showShippingAddress, showBillingAddress, showPaymentMethod, showShippingMethod, showPricingBreakdown, compactView } = raw;
        const items = raw.items ?? MOCK.items;
        const shippingAddress = raw.shippingAddress ?? MOCK.shippingAddress;
        const billingAddress = raw.billingAddress ?? MOCK.billingAddress;
        const payment = raw.payment ?? MOCK.payment;
        const shippingMethod = raw.shippingMethod ?? MOCK.shippingMethod;
        const totals = raw.totals ?? MOCK.totals;
        const formatPrice = raw.formatPrice ?? defaultFormat;
        return (_jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Order Items" }), _jsx("div", { className: "space-y-4", children: items.map((item) => (_jsxs("div", { className: "flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0", children: [showItemImages && item.thumbnail && _jsx("img", { src: item.thumbnail, alt: item.title, className: `${compactView ? 'w-16 h-16' : 'w-20 h-20'} object-cover rounded flex-shrink-0` }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: `${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900`, children: item.title }), _jsx("p", { className: `${compactView ? 'text-xs' : 'text-sm'} text-gray-600 mt-1`, children: item.variant }), item.isPreorder && _jsx("p", { className: "text-xs text-orange-600 mt-1", children: "Pre-order \u00B7 Ships on expected date" }), showItemQuantity && _jsxs("p", { className: "text-sm text-gray-600 mt-1", children: ["Quantity: ", item.quantity] })] }), showItemPrice && (_jsxs("div", { className: "text-right", children: [_jsx("p", { className: `${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900`, children: formatPrice(item.total) }), item.quantity > 1 && !compactView && _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [formatPrice(item.unit_price), " each"] })] }))] }, item.id))) })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [showShippingAddress && (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-3", children: "Shipping Address" }), _jsxs("div", { className: `${compactView ? 'text-sm' : 'text-base'} text-gray-600 space-y-1`, children: [_jsxs("p", { children: [shippingAddress.first_name, " ", shippingAddress.last_name] }), _jsx("p", { children: shippingAddress.address_1 }), _jsxs("p", { children: [shippingAddress.city, ", ", shippingAddress.province, " ", shippingAddress.postal_code] }), _jsx("p", { children: shippingAddress.country })] })] })), showBillingAddress && (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-3", children: "Billing Address" }), _jsxs("div", { className: `${compactView ? 'text-sm' : 'text-base'} text-gray-600 space-y-1`, children: [_jsxs("p", { children: [billingAddress.first_name, " ", billingAddress.last_name] }), _jsx("p", { children: billingAddress.address_1 }), _jsxs("p", { children: [billingAddress.city, ", ", billingAddress.province, " ", billingAddress.postal_code] }), _jsx("p", { children: billingAddress.country })] })] })), showPaymentMethod && (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-3", children: "Payment Method" }), _jsxs("div", { className: `${compactView ? 'text-sm' : 'text-base'} text-gray-600`, children: [_jsxs("p", { children: [payment.card_brand, " ending in ", payment.card_last4] }), _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: ["via ", payment.provider] })] })] })), showShippingMethod && (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-3", children: "Shipping Method" }), _jsxs("div", { className: `${compactView ? 'text-sm' : 'text-base'} text-gray-600`, children: [_jsx("p", { children: shippingMethod.method }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: formatPrice(shippingMethod.cost) })] })] }))] }), showPricingBreakdown && (_jsxs("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-4", children: "Order Summary" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between text-gray-600", children: [_jsx("span", { children: "Subtotal" }), _jsx("span", { children: formatPrice(totals.subtotal) })] }), _jsxs("div", { className: "flex justify-between text-gray-600", children: [_jsx("span", { children: "Shipping" }), _jsx("span", { children: formatPrice(totals.shipping_total) })] }), _jsxs("div", { className: "flex justify-between text-gray-600", children: [_jsx("span", { children: "Tax" }), _jsx("span", { children: formatPrice(totals.tax_total) })] }), _jsxs("div", { className: "flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t border-gray-200", children: [_jsx("span", { children: "Total" }), _jsx("span", { children: formatPrice(totals.total) })] })] })] }))] }));
    },
};
export default OrderDetails;
//# sourceMappingURL=OrderDetails.js.map