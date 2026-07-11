import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const productGridFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }] },
    columns: { type: 'select', label: 'Grid Columns', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }] },
    showQuickView: { type: 'radio', label: 'Show Quick View Button', options: RADIO_YES_NO },
    showWishlist: { type: 'radio', label: 'Show Wishlist Button', options: RADIO_YES_NO },
    showCompare: { type: 'radio', label: 'Show Compare Button', options: RADIO_YES_NO },
    imageAspectRatio: { type: 'select', label: 'Image Aspect Ratio', options: [{ label: 'Square (1:1)', value: 'square' }, { label: 'Portrait (3:4)', value: 'portrait' }, { label: 'Landscape (4:3)', value: 'landscape' }] },
    showBadges: { type: 'radio', label: 'Show Badges (Sale)', options: RADIO_YES_NO },
    gap: { type: 'select', label: 'Grid Gap', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
};
const Heart = ({ size = 20 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }) }));
const Eye = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const aspectMap = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]' };
const gapMap = { sm: 'gap-3', md: 'gap-6', lg: 'gap-8' };
const colsMap = { '2': 'md:grid-cols-2', '3': 'md:grid-cols-2 lg:grid-cols-3', '4': 'md:grid-cols-2 lg:grid-cols-4' };
const MOCK = [
    { id: '1', title: 'Classic T-Shirt', handle: 'classic-t-shirt', thumbnail: 'https://placehold.co/400x400', price: '$29.99', compareAtPrice: '$39.99', badge: 'Sale' },
    { id: '2', title: 'Denim Jeans', handle: 'denim-jeans', thumbnail: 'https://placehold.co/400x400', price: '$79.99' },
    { id: '3', title: 'Leather Belt', handle: 'leather-belt', thumbnail: 'https://placehold.co/400x400', price: '$49.99', badge: 'New' },
    { id: '4', title: 'Sneakers', handle: 'sneakers', thumbnail: 'https://placehold.co/400x400', price: '$99.99' },
];
export const ProductGrid = {
    label: 'Product Grid',
    fields: productGridFields,
    defaultProps: { layout: 'grid', columns: '3', showQuickView: true, showWishlist: true, showCompare: false, imageAspectRatio: 'square', showBadges: true, gap: 'md' },
    render: (raw) => {
        const { layout = 'grid', columns = '3', showQuickView, showWishlist, showCompare, imageAspectRatio = 'square', showBadges, gap = 'md' } = raw;
        const products = raw.products ?? MOCK;
        const onQuickView = (id) => raw.onQuickView?.(id);
        const onAddToWishlist = (id) => raw.onAddToWishlist?.(id);
        const onCompare = (id) => raw.onCompare?.(id);
        if (layout === 'list') {
            return (_jsx("div", { className: "space-y-6", children: products.map((p) => (_jsxs("div", { className: "flex gap-4 border border-gray-200 rounded-lg p-4", children: [_jsx("a", { href: `/products/${p.handle}`, className: "flex-shrink-0", children: _jsx("img", { src: p.thumbnail, alt: p.title, className: `${aspectMap[imageAspectRatio]} w-32 object-cover rounded` }) }), _jsxs("div", { className: "flex-1", children: [_jsx("a", { href: `/products/${p.handle}`, className: "font-semibold text-lg hover:underline", children: p.title }), _jsxs("div", { className: "mt-2 flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: p.price }), p.compareAtPrice && _jsx("span", { className: "text-sm text-gray-500 line-through", children: p.compareAtPrice }), showBadges && p.badge && _jsx("span", { className: "text-xs font-medium px-2 py-0.5 bg-red-100 text-red-700 rounded", children: p.badge })] }), _jsxs("div", { className: "mt-4 flex gap-2", children: [showQuickView && _jsx("button", { onClick: () => onQuickView(p.id), className: "p-2 border border-gray-300 rounded hover:bg-gray-50", title: "Quick view", children: _jsx(Eye, {}) }), showWishlist && _jsx("button", { onClick: () => onAddToWishlist(p.id), className: "p-2 border border-gray-300 rounded hover:bg-gray-50", title: "Add to wishlist", children: _jsx(Heart, {}) }), showCompare && _jsx("button", { onClick: () => onCompare(p.id), className: "px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50", children: "Compare" })] })] })] }, p.id))) }));
        }
        return (_jsx("div", { className: `grid grid-cols-2 ${colsMap[columns]} ${gapMap[gap]}`, children: products.map((p) => (_jsxs("div", { className: "group relative", children: [_jsxs("a", { href: `/products/${p.handle}`, className: "block relative", children: [_jsx("img", { src: p.thumbnail, alt: p.title, className: `${aspectMap[imageAspectRatio]} w-full object-cover rounded-lg mb-3` }), showBadges && p.badge && _jsx("span", { className: "absolute top-2 left-2 text-xs font-medium px-2 py-0.5 bg-red-100 text-red-700 rounded", children: p.badge }), (showQuickView || showWishlist) && (_jsxs("div", { className: "absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [showQuickView && _jsx("button", { onClick: (e) => { e.preventDefault(); onQuickView(p.id); }, className: "p-2 bg-white border border-gray-200 rounded hover:bg-gray-50", title: "Quick view", children: _jsx(Eye, {}) }), showWishlist && _jsx("button", { onClick: (e) => { e.preventDefault(); onAddToWishlist(p.id); }, className: "p-2 bg-white border border-gray-200 rounded hover:bg-gray-50", title: "Wishlist", children: _jsx(Heart, {}) })] }))] }), _jsx("a", { href: `/products/${p.handle}`, className: "block font-medium hover:underline", children: p.title }), _jsxs("div", { className: "flex items-center gap-2 mt-1", children: [_jsx("span", { className: "font-medium", children: p.price }), p.compareAtPrice && _jsx("span", { className: "text-sm text-gray-500 line-through", children: p.compareAtPrice })] })] }, p.id))) }));
    },
};
export default ProductGrid;
//# sourceMappingURL=ProductGrid.js.map