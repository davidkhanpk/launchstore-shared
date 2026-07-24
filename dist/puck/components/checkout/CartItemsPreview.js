import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const cartItemsPreviewFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'List', value: 'list' }, { label: 'Compact', value: 'compact' }] },
    showImages: { type: 'radio', label: 'Show Product Images', options: RADIO_YES_NO },
    showQuantity: { type: 'radio', label: 'Show Quantity', options: RADIO_YES_NO },
    showVariantInfo: { type: 'radio', label: 'Show Variant Info', options: RADIO_YES_NO },
    imageSize: { type: 'select', label: 'Image Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
};
const Bag = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }), _jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), _jsx("path", { d: "M16 10a4 4 0 0 1-8 0" })] }));
// No static MOCK — the storefront wrapper injects real Medusa cart items
// via Puck context. If no data is passed, the component shows an empty state.
const SIZES = { sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-20 h-20' };
export const CartItemsPreview = {
    label: 'Cart Items Preview',
    fields: cartItemsPreviewFields,
    defaultProps: { showImages: true, showQuantity: true, showVariantInfo: true, imageSize: 'md', layout: 'list' },
    render: (raw) => {
        const { showImages, showQuantity, showVariantInfo, imageSize = 'md', layout = 'list' } = raw;
        const items = raw.items ?? [];
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4 pb-4 border-b border-gray-200", children: [_jsx(Bag, {}), _jsxs("h3", { className: "text-lg font-semibold text-gray-900", children: ["Order Items (", items.length, ")"] })] }), _jsx("div", { className: `space-y-${layout === 'compact' ? '3' : '4'}`, children: items.map((item) => (_jsxs("div", { className: `flex gap-4 ${layout === 'list' ? 'pb-4 border-b border-gray-100 last:border-0' : ''}`, children: [showImages && item.image && (_jsxs("div", { className: "relative flex-shrink-0", children: [_jsx("img", { src: item.image, alt: item.title, className: `${SIZES[imageSize]} object-cover rounded` }), showQuantity && _jsx("div", { className: "absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center", children: item.quantity })] })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h4", { className: `font-medium text-gray-900 ${layout === 'compact' ? 'text-sm' : 'text-base'} truncate`, children: item.title }), showVariantInfo && _jsx("p", { className: `text-gray-600 mt-1 ${layout === 'compact' ? 'text-xs' : 'text-sm'}`, children: item.variant }), showQuantity && !showImages && _jsxs("p", { className: "text-sm text-gray-600 mt-1", children: ["Qty: ", item.quantity] })] }), _jsxs("div", { className: "text-right flex-shrink-0", children: [_jsx("p", { className: `font-medium text-gray-900 ${layout === 'compact' ? 'text-sm' : 'text-base'}`, children: item.total }), item.quantity > 1 && layout === 'list' && _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [item.price, " each"] })] })] }, item.id))) })] }));
    },
};
export default CartItemsPreview;
//# sourceMappingURL=CartItemsPreview.js.map