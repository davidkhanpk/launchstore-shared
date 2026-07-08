import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const categoryProductsGridFields = {
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Grid Title' },
    titleAlignment: { type: 'radio', label: 'Title Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    columns: { type: 'select', label: 'Columns (Desktop)', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' }, { label: '6 Columns', value: '6' }] },
    gap: { type: 'select', label: 'Gap Between Products', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }] },
    gridLocation: { type: 'radio', label: 'Grid Location', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    showSortFilter: { type: 'radio', label: 'Show Sort & Filter', options: RADIO_YES_NO },
    sortPosition: { type: 'select', label: 'Sort Position', options: [{ label: 'Top Left', value: 'top-left' }, { label: 'Top Center', value: 'top-center' }, { label: 'Top Right', value: 'top-right' }] },
    showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
    paginationPosition: { type: 'select', label: 'Pagination Position', options: [{ label: 'Bottom Left', value: 'bottom-left' }, { label: 'Bottom Center', value: 'bottom-center' }, { label: 'Bottom Right', value: 'bottom-right' }] },
    showProductsPerPageDropdown: { type: 'radio', label: 'Show Per-Page Selector', options: RADIO_YES_NO },
    productsPerPageOptions: { type: 'text', label: 'Per-Page Options (comma-separated)' },
    productsPerPage: { type: 'number', label: 'Products Per Page (Default)' },
    className: { type: 'text', label: 'Custom CSS Classes' },
};
const gapClasses = { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '3rem' };
const colsClasses = { '2': 'md:grid-cols-2', '3': 'md:grid-cols-2 lg:grid-cols-3', '4': 'md:grid-cols-2 lg:grid-cols-4', '5': 'md:grid-cols-2 lg:grid-cols-5', '6': 'md:grid-cols-2 lg:grid-cols-6' };
const alignJustify = { left: 'flex-start', center: 'center', right: 'flex-end' };
const marginStyles = { left: '0', center: '0 auto', right: '0 0 0 auto' };
const DefaultProductCard = ({ title, handle, thumbnail, price }) => (_jsxs("a", { href: `/products/${handle}`, className: "block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow", children: [_jsx("img", { src: thumbnail, alt: title, className: "w-full aspect-square object-cover rounded mb-3" }), _jsx("h3", { className: "font-medium text-sm text-gray-700 mb-1", children: "Product" }), _jsx("p", { className: "font-semibold text-base text-gray-900", children: title }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: price })] }));
export const CategoryProductsGrid = {
    label: 'Category Products Grid',
    fields: categoryProductsGridFields,
    defaultProps: { showTitle: false, title: 'Products', titleAlignment: 'left', columns: '4', gap: 'md', gridLocation: 'center', showSortFilter: true, sortPosition: 'top-right', showPagination: true, paginationPosition: 'bottom-center', showProductsPerPageDropdown: false, productsPerPageOptions: '12,24,36,48', productsPerPage: 12, className: '' },
    render: (raw) => {
        const { showTitle, title = 'Products', titleAlignment = 'left', columns = '4', gap = 'md', gridLocation = 'center', showSortFilter, sortPosition = 'top-right', showPagination, paginationPosition = 'bottom-center', showProductsPerPageDropdown, productsPerPageOptions = '12,24,36,48', productsPerPage = 12, className } = raw;
        const products = raw.products ?? [];
        const totalCount = raw.totalCount ?? products.length;
        const sortOptions = raw.sortOptions ?? [{ label: 'Latest Arrivals', value: 'created_desc' }, { label: 'Price: Low to High', value: 'price_asc' }, { label: 'Price: High to Low', value: 'price_desc' }];
        const onSortChange = raw.onSortChange;
        const onPageChange = raw.onPageChange;
        const onProductsPerPageChange = raw.onProductsPerPageChange;
        const renderProduct = raw.renderProduct ?? DefaultProductCard;
        const perPageOptions = productsPerPageOptions.split(',').map((n) => n.trim()).filter(Boolean);
        const perPage = productsPerPage ?? 12;
        const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
        const [internalPage, setInternalPage] = useState(1);
        const setPage = (p) => { setInternalPage(p); onPageChange?.(p); };
        return (_jsxs("div", { className: className, style: { width: '100%', margin: marginStyles[gridLocation] }, "data-puck-component": "category-products-grid", "data-category-field": "products", children: [showTitle && title && _jsx("h2", { className: "text-2xl font-semibold mb-6", style: { textAlign: titleAlignment, color: '#000' }, children: title }), showSortFilter && (_jsxs("div", { className: "flex flex-wrap items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg", style: { justifyContent: alignJustify[sortPosition === 'top-left' ? 'left' : sortPosition === 'top-center' ? 'center' : 'right'] }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Sort by:" }), _jsx("select", { onChange: (e) => onSortChange?.(e.target.value), className: "px-3 py-2 border border-gray-300 rounded text-sm", children: sortOptions.map((o) => _jsx("option", { value: o.value, children: o.label }, o.value)) })] }), showProductsPerPageDropdown && perPageOptions.length > 0 && (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Show:" }), _jsx("select", { onChange: (e) => onProductsPerPageChange?.(Number(e.target.value)), className: "px-3 py-2 border border-gray-300 rounded text-sm", children: perPageOptions.map((opt) => _jsx("option", { value: opt, children: opt }, opt)) })] })), _jsxs("span", { className: "text-sm text-gray-500", "data-category-field": "product_count", children: [totalCount, " products"] })] })), _jsx("div", { className: `grid grid-cols-2 ${colsClasses[columns]}`, style: { gap: gapClasses[gap] }, children: products.slice(0, 8).map((p) => (_jsx("div", { children: renderProduct(p) }, p.id))) }), showPagination && totalPages > 1 && (_jsxs("div", { className: "mt-6 flex items-center gap-2", style: { justifyContent: alignJustify[paginationPosition === 'bottom-left' ? 'left' : paginationPosition === 'bottom-center' ? 'center' : 'right'] }, children: [_jsx("button", { onClick: () => setPage(Math.max(1, internalPage - 1)), disabled: internalPage === 1, className: "px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50", children: "Previous" }), _jsxs("span", { className: "text-sm text-gray-600", children: ["Page ", internalPage, " of ", totalPages] }), _jsx("button", { onClick: () => setPage(Math.min(totalPages, internalPage + 1)), disabled: internalPage === totalPages, className: "px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50", children: "Next" })] }))] }));
    },
};
export default CategoryProductsGrid;
//# sourceMappingURL=CategoryProductsGrid.js.map