import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ALIGN = {
    left: 'flex-start', center: 'center', right: 'flex-end',
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
        totalPages: 5,
        style: 'numbered',
        alignment: 'center',
        maxPageNumbers: 7,
    },
    render: (rawProps) => {
        const { currentPage = 1, totalPages = 5, style = 'numbered', alignment = 'center', maxPageNumbers = 7, onPageChange, } = rawProps;
        // Debug logging
        console.log('[PaginationBar]', { currentPage, totalPages, style, alignment, hasOnPageChange: !!onPageChange });
        // In the editor (no onPageChange), always show a preview so the designer
        // can see the component. On the storefront, hide when only 1 page.
        const isEditor = !onPageChange;
        if (totalPages <= 1 && !isEditor)
            return _jsx(_Fragment, {});
        const justify = ALIGN[alignment] || ALIGN.center;
        const goTo = (page) => {
            const clamped = Math.max(1, Math.min(totalPages, page));
            onPageChange?.(clamped);
        };
        const btnStyle = {
            padding: '0.5rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem',
            fontSize: '0.875rem', background: '#fff', cursor: 'pointer',
        };
        const activeBtnStyle = {
            minWidth: '36px', padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
            fontSize: '0.875rem', fontWeight: 500, background: '#111827', color: '#fff',
            border: 'none', cursor: 'pointer',
        };
        const inactiveBtnStyle = {
            minWidth: '36px', padding: '0.5rem 0.75rem', borderRadius: '0.5rem',
            fontSize: '0.875rem', fontWeight: 500, background: '#fff', color: '#111827',
            border: '1px solid #d1d5db', cursor: 'pointer',
        };
        // "load-more" style
        if (style === 'load-more') {
            if (currentPage >= totalPages && !isEditor)
                return _jsx(_Fragment, {});
            return (_jsx("div", { style: { display: 'flex', justifyContent: justify, padding: '2rem 0' }, children: _jsx("button", { onClick: () => goTo(currentPage + 1), style: { padding: '0.75rem 1.5rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 500, background: '#fff', cursor: 'pointer' }, children: "Load More" }) }));
        }
        // "simple" style (prev/next only)
        if (style === 'simple') {
            return (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: justify, padding: '1.5rem 0' }, children: [_jsx("button", { onClick: () => goTo(currentPage - 1), disabled: currentPage === 1, style: { ...btnStyle, opacity: currentPage === 1 ? 0.4 : 1 }, children: "\u2190 Previous" }), _jsxs("span", { style: { fontSize: '0.875rem', color: '#4b5563' }, children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { onClick: () => goTo(currentPage + 1), disabled: currentPage === totalPages, style: { ...btnStyle, opacity: currentPage === totalPages ? 0.4 : 1 }, children: "Next \u2192" })] }));
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
        return (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '0.375rem', justifyContent: justify, padding: '1.5rem 0' }, children: [_jsx("button", { onClick: () => goTo(currentPage - 1), disabled: currentPage === 1, style: { ...btnStyle, opacity: currentPage === 1 ? 0.4 : 1 }, children: "\u2190" }), pages.map((p, i) => p === '...' ? (_jsx("span", { style: { padding: '0 0.5rem', color: '#9ca3af' }, children: "\u2026" }, `ellipsis-${i}`)) : (_jsx("button", { onClick: () => goTo(p), style: p === currentPage ? activeBtnStyle : inactiveBtnStyle, children: p }, p))), _jsx("button", { onClick: () => goTo(currentPage + 1), disabled: currentPage === totalPages, style: { ...btnStyle, opacity: currentPage === totalPages ? 0.4 : 1 }, children: "\u2192" })] }));
    },
};
export default PaginationBar;
//# sourceMappingURL=PaginationBar.js.map