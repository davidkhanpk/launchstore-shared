import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const wishlistItemsFields = {
    title: { type: 'text', label: 'Title' },
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    showEmptyMessage: { type: 'radio', label: 'Show Empty State', options: RADIO_YES_NO },
    emptyTitle: { type: 'text', label: 'Empty State Title' },
    emptyMessage: { type: 'text', label: 'Empty State Message' },
    showAddToCart: { type: 'radio', label: 'Show Add to Cart Button', options: RADIO_YES_NO },
    addToCartLabel: { type: 'text', label: 'Add to Cart Label' },
    removeLabel: { type: 'text', label: 'Remove Label' },
    backgroundColor: { type: 'text', label: 'Background Color' },
    cardBackgroundColor: { type: 'text', label: 'Card Background Color' },
    textColor: { type: 'text', label: 'Text Color' },
    borderRadius: { type: 'text', label: 'Border Radius' },
    padding: { type: 'text', label: 'Padding' },
    shadow: { type: 'radio', label: 'Card Shadow', options: RADIO_YES_NO },
};
const Heart = ({ size = 64 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }) }));
const Trash = ({ size = 14 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("polyline", { points: "3 6 5 6 21 6" }), _jsx("path", { d: "M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })] }));
const Cart = ({ size = 14 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
const Package = ({ size = 32 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }), _jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" })] }));
const MOCK = [
    { id: 'wli_01', variantId: 'var_01', productTitle: 'Classic Cotton T-Shirt', variantTitle: 'Navy / Large', thumbnail: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=T-Shirt', productHandle: 'classic-cotton-t-shirt' },
    { id: 'wli_02', variantId: 'var_02', productTitle: 'Running Sneakers Pro', variantTitle: 'White / 42', thumbnail: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Shoes', productHandle: 'running-sneakers-pro' },
];
export const WishlistItems = {
    label: 'Wishlist Items',
    fields: wishlistItemsFields,
    defaultProps: { title: 'My Wishlist', showTitle: true, showEmptyMessage: true, emptyTitle: 'Your wishlist is empty', emptyMessage: 'Save items you love and come back to them anytime.', showAddToCart: true, addToCartLabel: 'Add to Cart', removeLabel: 'Remove', backgroundColor: '#ffffff', cardBackgroundColor: '#ffffff', textColor: '#111827', borderRadius: '8px', padding: '0px', shadow: false },
    render: (raw) => {
        const { title, showTitle, showEmptyMessage, emptyTitle, emptyMessage, showAddToCart, addToCartLabel, removeLabel, backgroundColor, cardBackgroundColor, textColor, borderRadius, padding, shadow } = raw;
        const items = raw.items ?? MOCK;
        const onAddToCart = (variantId) => raw.onAddToCart ? raw.onAddToCart(variantId) : (() => { });
        const onRemove = (id) => raw.onRemove ? raw.onRemove(id) : (() => { });
        return (_jsxs("div", { style: { backgroundColor, color: textColor, padding, borderRadius }, className: "w-full", children: [showTitle && (_jsxs("h2", { className: "text-2xl font-semibold mb-6", children: [title, " ", _jsxs("span", { className: "ml-2 text-base font-normal opacity-60", children: ["(", items.length, " items)"] })] })), items.length === 0 && showEmptyMessage ? (_jsxs("div", { className: "py-16 flex flex-col items-center justify-center text-center gap-4", children: [_jsx(Heart, {}), _jsx("h3", { className: "text-xl font-semibold opacity-70", children: emptyTitle }), _jsx("p", { className: "opacity-50 max-w-md", children: emptyMessage })] })) : (_jsx("div", { className: "space-y-4", children: items.map((item) => (_jsxs("div", { style: { backgroundColor: cardBackgroundColor, borderRadius, boxShadow: shadow ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }, className: "flex gap-4 p-4 border border-gray-200", children: [_jsx("div", { className: "w-20 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100", style: { borderRadius }, children: item.thumbnail ? _jsx("img", { src: item.thumbnail, alt: item.productTitle, className: "w-full h-full object-cover" }) : _jsx("div", { className: "w-full h-full flex items-center justify-center", children: _jsx(Package, {}) }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "font-medium line-clamp-2", children: item.productTitle }), item.variantTitle && _jsx("p", { className: "text-sm opacity-60 mt-0.5", children: item.variantTitle }), _jsxs("div", { className: "flex items-center gap-2 mt-3", children: [showAddToCart && (_jsxs("button", { type: "button", onClick: () => onAddToCart(item.variantId), className: "flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-gray-900 text-white rounded-md hover:opacity-90", children: [_jsx(Cart, {}), " ", _jsx("span", { children: addToCartLabel })] })), _jsxs("button", { type: "button", onClick: () => onRemove(item.id), className: "flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50", children: [_jsx(Trash, {}), " ", _jsx("span", { children: removeLabel })] })] })] })] }, item.id))) }))] }));
    },
};
export default WishlistItems;
//# sourceMappingURL=WishlistItems.js.map