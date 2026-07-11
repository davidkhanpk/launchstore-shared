import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const paginationFields = {
    style: { type: 'select', label: 'Pagination Style', options: [{ label: 'Simple (Prev/Next)', value: 'simple' }, { label: 'Numbered Pages', value: 'numbered' }, { label: 'Load More Button', value: 'load-more' }] },
    showPageNumbers: { type: 'radio', label: 'Show Page Numbers', options: RADIO_YES_NO },
    showFirstLast: { type: 'radio', label: 'Show First/Last Buttons', options: RADIO_YES_NO },
    maxPageNumbers: { type: 'number', label: 'Max Page Numbers to Show' },
    alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
};
const ChevronL = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "15 18 9 12 15 6" }) }));
const ChevronR = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
const alignmentClasses = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };
export const Pagination = {
    label: 'Pagination',
    fields: paginationFields,
    defaultProps: { showPageNumbers: true, showFirstLast: true, maxPageNumbers: 7, style: 'numbered', alignment: 'center' },
    render: (raw) => {
        const { showPageNumbers, showFirstLast, maxPageNumbers = 7, style = 'numbered', alignment = 'center' } = raw;
        const [internalPage, setInternalPage] = useState(raw.currentPage ?? 1);
        const totalPages = raw.totalPages ?? 4;
        const externalOnPageChange = raw.onPageChange;
        const setPage = (p) => { setInternalPage(p); externalOnPageChange?.(p); };
        const loadMoreText = raw.loadMoreText ?? 'Load More';
        if (style === 'load-more') {
            return (_jsx("div", { className: `flex ${alignmentClasses[alignment]} mt-8`, children: _jsx("button", { onClick: () => setPage(internalPage + 1), disabled: internalPage >= totalPages, className: "px-6 py-3 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed", children: loadMoreText }) }));
        }
        if (style === 'simple') {
            return (_jsxs("div", { className: `flex items-center gap-2 mt-8 ${alignmentClasses[alignment]}`, children: [_jsxs("button", { onClick: () => setPage(internalPage - 1), disabled: internalPage <= 1, className: "flex items-center gap-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: [_jsx(ChevronL, {}), " Prev"] }), _jsxs("span", { className: "px-4 text-sm text-gray-600", children: ["Page ", internalPage, " of ", totalPages] }), _jsxs("button", { onClick: () => setPage(internalPage + 1), disabled: internalPage >= totalPages, className: "flex items-center gap-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: ["Next ", _jsx(ChevronR, {})] })] }));
        }
        const pages = [];
        const half = Math.floor(maxPageNumbers / 2);
        let start = Math.max(1, internalPage - half);
        let end = Math.min(totalPages, start + maxPageNumbers - 1);
        if (end - start + 1 < maxPageNumbers)
            start = Math.max(1, end - maxPageNumbers + 1);
        if (start > 1) {
            pages.push(1);
            if (start > 2)
                pages.push('ellipsis');
        }
        for (let i = start; i <= end; i++)
            pages.push(i);
        if (end < totalPages) {
            if (end < totalPages - 1)
                pages.push('ellipsis');
            pages.push(totalPages);
        }
        return (_jsxs("nav", { className: `flex items-center gap-1 mt-8 ${alignmentClasses[alignment]}`, children: [showFirstLast && _jsx("button", { onClick: () => setPage(1), disabled: internalPage === 1, className: "px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: "\u00AB" }), _jsx("button", { onClick: () => setPage(internalPage - 1), disabled: internalPage <= 1, className: "px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: _jsx(ChevronL, {}) }), showPageNumbers && pages.map((p, i) => p === 'ellipsis' ? _jsx("span", { className: "px-2 text-gray-400", children: "\u2026" }, `e${i}`) : (_jsx("button", { onClick: () => setPage(p), className: `px-3 py-2 border rounded ${p === internalPage ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-gray-50'}`, children: p }, p))), _jsx("button", { onClick: () => setPage(internalPage + 1), disabled: internalPage >= totalPages, className: "px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: _jsx(ChevronR, {}) }), showFirstLast && _jsx("button", { onClick: () => setPage(totalPages), disabled: internalPage === totalPages, className: "px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", children: "\u00BB" })] }));
    },
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map