import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const COLS = { 2: 'grid-cols-2', 3: 'grid-cols-2 md:grid-cols-3', 4: 'grid-cols-2 md:grid-cols-4', 5: 'grid-cols-2 md:grid-cols-5' };
export const productRecommendationsFields = {
    type: {
        type: 'select', label: 'Type',
        options: [
            { label: 'Related', value: 'related' }, { label: 'Premium', value: 'premium' },
            { label: 'Best Sellers', value: 'bestsellers' }, { label: 'Recently Viewed', value: 'recentlyviewed' },
        ],
    },
    limit: { type: 'number', label: 'Limit' },
    columns: { type: 'select', label: 'Columns', options: [{ label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }] },
    showPrices: { type: 'radio', label: 'Show Prices', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showAddToCart: { type: 'radio', label: 'Show Add to Cart', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    luxuryStyle: { type: 'radio', label: 'Luxury Style', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
export const ProductRecommendations = {
    label: 'Product Recommendations',
    fields: productRecommendationsFields,
    defaultProps: {
        type: 'related',
        limit: 4,
        columns: 4,
        showPrices: true,
        showAddToCart: false,
        luxuryStyle: false,
    },
    render: ({ limit, columns, showPrices, showAddToCart, luxuryStyle, products }) => {
        const count = Math.max(1, Math.min(limit || 4, 12));
        const items = products && products.length > 0
            ? products.slice(0, count)
            : Array.from({ length: count }, (_, i) => ({ id: `p-${i + 1}`, title: `Product ${i + 1}`, price: (i + 1) * 25 + 0.99, thumbnail: '' }));
        const cols = columns || count;
        return (_jsx("div", { className: `grid ${COLS[cols] || COLS[4]} gap-4 ${luxuryStyle ? 'font-light' : ''}`, children: items.map((p) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "aspect-square bg-gray-100 rounded-lg mb-2 flex items-center justify-center text-gray-400 text-xs", children: p.thumbnail ? _jsx("img", { src: p.thumbnail, alt: p.title, className: "w-full h-full object-cover rounded-lg" }) : 'Image' }), _jsx("div", { className: "text-sm text-gray-900", children: p.title }), showPrices && typeof p.price === 'number' && _jsxs("div", { className: "text-sm text-gray-600 mt-0.5", children: ["$", p.price.toFixed(2)] }), showAddToCart && (_jsx("button", { type: "button", className: "mt-2 w-full text-xs font-medium py-1.5 rounded-md bg-gray-900 text-white", children: "Add to Cart" }))] }, p.id))) }));
    },
};
export default ProductRecommendations;
//# sourceMappingURL=ProductRecommendations.js.map