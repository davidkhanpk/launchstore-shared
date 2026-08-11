import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    showPerPageSelector: { type: 'radio', label: 'Show Per-Page Selector', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    perPageOptions: { type: 'text', label: 'Per-Page Options (comma-separated)' },
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
        showPerPageSelector: true,
        perPageOptions: [12, 24, 48],
        perPage: 12,
    },
    render: (rawProps) => {
        const { currentPage = 1, totalPages = 5, totalCount, style = 'numbered', alignment = 'center', maxPageNumbers = 7, perPage = 12, perPageOptions = [12, 24, 48], showPerPageSelector = true, onPageChange, onPerPageChange, } = rawProps;
        const isEditor = !onPageChange;
        const justify = ALIGN[alignment] || ALIGN.center;
        // Parse perPageOptions (can come as comma-separated string from Puck text field)
        const rawOpts = perPageOptions;
        const ppOptions = typeof rawOpts === 'string'
            ? rawOpts.split(',').map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n))
            : (Array.isArray(rawOpts) ? rawOpts : [12, 24, 48]);
        const goTo = (page) => {
            const clamped = Math.max(1, Math.min(totalPages, page));
            onPageChange?.(clamped);
        };
        const handlePerPageChange = (val) => {
            const n = parseInt(val, 10);
            if (!isNaN(n) && n > 0)
                onPerPageChange?.(n);
        };
        // Shared styles
        const rowStyle = {
            display: 'flex', alignItems: 'center', justifyContent: justify,
            gap: '0.5rem', padding: '1.5rem 0', flexWrap: 'wrap',
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
        const selectStyle = {
            padding: '0.375rem 0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem',
            fontSize: '0.875rem', background: '#fff', cursor: 'pointer',
        };
        // ── Per-page selector (always shown when enabled) ──────────────────
        const perPageSelector = showPerPageSelector && (_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }, children: [_jsx("span", { style: { fontSize: '0.875rem', color: '#6b7280' }, children: "Show:" }), _jsx("select", { value: perPage, onChange: (e) => handlePerPageChange(e.target.value), style: selectStyle, children: ppOptions.map((n) => (_jsx("option", { value: n, children: n }, n))) })] }));
        // ── Result count text ──────────────────────────────────────────────
        const countText = typeof totalCount === 'number' && (_jsxs("span", { style: { fontSize: '0.875rem', color: '#6b7280' }, children: [Math.min((currentPage - 1) * perPage + 1, totalCount), "\u2013", Math.min(currentPage * perPage, totalCount), " of ", totalCount] }));
        // "load-more" style
        if (style === 'load-more') {
            const showButton = isEditor || currentPage < totalPages;
            return (_jsxs("div", { style: rowStyle, children: [countText, showButton && (_jsx("button", { onClick: () => goTo(currentPage + 1), style: { ...btnStyle, padding: '0.75rem 1.5rem', fontWeight: 500 }, children: "Load More" })), perPageSelector] }));
        }
        // "simple" style (prev/next only)
        if (style === 'simple') {
            return (_jsxs("div", { style: rowStyle, children: [countText, _jsx("button", { onClick: () => goTo(currentPage - 1), disabled: currentPage === 1, style: { ...btnStyle, opacity: currentPage === 1 ? 0.4 : 1 }, children: "\u2190" }), _jsxs("span", { style: { fontSize: '0.875rem', color: '#4b5563' }, children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { onClick: () => goTo(currentPage + 1), disabled: currentPage === totalPages, style: { ...btnStyle, opacity: currentPage === totalPages ? 0.4 : 1 }, children: "\u2192" }), perPageSelector] }));
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
        return (_jsxs("div", { style: rowStyle, children: [countText, _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '0.375rem' }, children: [_jsx("button", { onClick: () => goTo(currentPage - 1), disabled: currentPage === 1, style: { ...btnStyle, opacity: currentPage === 1 ? 0.4 : 1 }, children: "\u2190" }), pages.map((p, i) => p === '...' ? (_jsx("span", { style: { padding: '0 0.5rem', color: '#9ca3af' }, children: "\u2026" }, `ellipsis-${i}`)) : (_jsx("button", { onClick: () => goTo(p), style: p === currentPage ? activeBtnStyle : inactiveBtnStyle, children: p }, p))), _jsx("button", { onClick: () => goTo(currentPage + 1), disabled: currentPage === totalPages, style: { ...btnStyle, opacity: currentPage === totalPages ? 0.4 : 1 }, children: "\u2192" })] }), perPageSelector] }));
    },
};
export default PaginationBar;
//# sourceMappingURL=PaginationBar.js.map