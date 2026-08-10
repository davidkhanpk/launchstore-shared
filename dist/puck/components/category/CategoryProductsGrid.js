import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * CategoryProductsGrid — SIMPLIFIED (pure presentation).
 *
 * Sort, filter, and pagination are now handled by the separate FilterBar
 * and PaginationBar components. This component only renders the product
 * cards in a grid layout.
 */
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const categoryProductsGridFields = {
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Grid Title' },
    titleAlignment: { type: 'radio', label: 'Title Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    columns: { type: 'select', label: 'Columns (Desktop)', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' }, { label: '6 Columns', value: '6' }] },
    gap: { type: 'select', label: 'Gap Between Products', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }] },
    className: { type: 'text', label: 'Custom CSS Classes' },
};
const gapClasses = { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '3rem' };
const colsClasses = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-2 lg:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
    '5': 'md:grid-cols-2 lg:grid-cols-5',
    '6': 'md:grid-cols-3 lg:grid-cols-6',
};
const DefaultProductCard = ({ title, handle, thumbnail, price }) => (_jsxs("a", { href: `/products/${handle}`, className: "block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow", children: [_jsx("img", { src: thumbnail, alt: title, className: "w-full aspect-square object-cover rounded mb-3" }), _jsx("p", { className: "font-semibold text-base text-gray-900", children: title }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: price })] }));
export const CategoryProductsGrid = {
    label: 'Category Products Grid',
    fields: categoryProductsGridFields,
    defaultProps: {
        showTitle: false,
        title: 'Products',
        titleAlignment: 'left',
        columns: '4',
        gap: 'md',
        className: '',
    },
    render: (raw) => {
        const { showTitle, title = 'Products', titleAlignment = 'left', columns = '4', gap = 'md', className = '', } = raw;
        const products = raw.products ?? [];
        const renderProduct = raw.renderProduct ?? DefaultProductCard;
        return (_jsxs("div", { className: className, style: { width: '100%' }, children: [showTitle && title && (_jsx("h2", { className: "text-2xl font-semibold mb-6", style: { textAlign: titleAlignment }, children: title })), products.length === 0 ? (_jsx("div", { className: "p-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center text-gray-500", children: _jsx("p", { children: "No products found." }) })) : (_jsx("div", { className: `grid grid-cols-2 ${colsClasses[columns] || colsClasses['4']}`, style: { gap: gapClasses[gap] || gapClasses.md }, children: products.map((p) => (_jsx("div", { children: renderProduct(p) }, p.id))) }))] }));
    },
};
export default CategoryProductsGrid;
//# sourceMappingURL=CategoryProductsGrid.js.map