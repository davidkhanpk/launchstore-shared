import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ALIGN = {
    left: 'justify-start', center: 'justify-center', right: 'justify-end',
};
const paginationBarFields = {
    style: {
        type: 'select', label: 'Style',
        options: [
            { label: 'Numbered pages', value: 'numbered' },
            { label: 'Load more button', value: 'load-more' },
            { label: 'Simple (prev/next)', value: 'simple' },
        ],
    },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
    maxPageNumbers: { type: 'number', label: 'Max visible page numbers' },
};
export const PaginationBar = {
    label: 'Pagination Bar',
    fields: paginationBarFields,
    defaultProps: {
        currentPage: 1,
        totalPages: 1,
        style: 'numbered',
        alignment: 'center',
        maxPageNumbers: 7,
    },
    render: (rawProps) => {
        const { currentPage = 1, totalPages = 1, style = 'numbered', alignment = 'center', maxPageNumbers = 7, onPageChange, } = rawProps;
        if (totalPages <= 1)
            return _jsx(_Fragment, {});
        const alignClass = ALIGN[alignment] || ALIGN.center;
        const goTo = (page) => {
            const clamped = Math.max(1, Math.min(totalPages, page));
            onPageChange?.(clamped);
        };
        // "load-more" style
        if (style === 'load-more') {
            if (currentPage >= totalPages)
                return _jsx(_Fragment, {});
            return (_jsx("div", { className: `flex ${alignClass} py-8`, children: _jsx("button", { onClick: () => goTo(currentPage + 1), className: "px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors", children: "Load More" }) }));
        }
        // "simple" style (prev/next only)
        if (style === 'simple') {
            return (_jsxs("div", { className: `flex items-center gap-3 py-6 ${alignClass}`, children: [_jsx("button", { onClick: () => goTo(currentPage - 1), disabled: currentPage === 1, className: "px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50", children: "\u2190 Previous" }), _jsxs("span", { className: "text-sm text-gray-600", children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { onClick: () => goTo(currentPage + 1), disabled: currentPage === totalPages, className: "px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50", children: "Next \u2192" })] }));
        }
        // "numbered" style (default) with ellipsis logic
        const max = Math.min(maxPageNumbers, totalPages);
        let startPage = Math.max(1, currentPage - Math.floor(max / 2));
        let endPage = startPage + max - 1;
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - max + 1);
        }
        const pages = [];
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2)
                pages.push('...');
        }
        for (let i = startPage; i <= endPage; i++)
            pages.push(i);
        if (endPage < totalPages) {
            if (endPage < totalPages - 1)
                pages.push('...');
            pages.push(totalPages);
        }
        return (_jsxs("div", { className: `flex items-center gap-1.5 py-6 ${alignClass}`, children: [_jsx("button", { onClick: () => goTo(currentPage - 1), disabled: currentPage === 1, className: "px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50", children: "\u2190" }), pages.map((p, i) => p === '...' ? (_jsx("span", { className: "px-2 text-gray-400", children: "\u2026" }, `ellipsis-${i}`)) : (_jsx("button", { onClick: () => goTo(p), className: `min-w-[36px] px-3 py-2 rounded-lg text-sm font-medium transition-colors ${p === currentPage
                        ? 'bg-gray-900 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'}`, children: p }, p))), _jsx("button", { onClick: () => goTo(currentPage + 1), disabled: currentPage === totalPages, className: "px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50", children: "\u2192" })] }));
    },
};
export default PaginationBar;
//# sourceMappingURL=PaginationBar.js.map