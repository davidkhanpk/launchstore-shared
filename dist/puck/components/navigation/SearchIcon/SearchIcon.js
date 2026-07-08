import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { searchIconFields } from './searchicon.fields';
const SearchIconSvg = ({ size }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
const XIconSvg = ({ size }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const SIZE_MAP = { sm: 20, md: 24, lg: 28 };
const STYLE = {
    minimal: 'p-2 rounded-full hover:bg-gray-100',
    outlined: 'p-2 border-2 rounded-full hover:bg-gray-100',
    filled: 'p-2 rounded-full',
};
export const SearchIcon = {
    label: 'Search Icon',
    fields: searchIconFields,
    defaultProps: {
        iconSize: 'md', iconColor: '#000000', hoverColor: '#3b82f6',
        style: 'minimal', openSearchOnClick: true,
    },
    render: (rawProps) => {
        const { iconSize, iconColor, hoverColor, style, openSearchOnClick, onSearchSubmit, onClose } = rawProps;
        const [isHovered, setIsHovered] = useState(false);
        const [searchOpen, setSearchOpen] = useState(false);
        const [query, setQuery] = useState('');
        const inputRef = useRef(null);
        const sz = SIZE_MAP[iconSize] || 24;
        const cls = STYLE[style] || STYLE.minimal;
        const handleClick = () => {
            if (openSearchOnClick) {
                setSearchOpen(true);
                setQuery('');
            }
        };
        const handleClose = () => {
            setSearchOpen(false);
            setQuery('');
            onClose?.();
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            if (query.trim()) {
                onSearchSubmit?.(query.trim());
                handleClose();
            }
        };
        return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handleClick, className: `transition-all ${cls}`, style: {
                        color: isHovered ? resolveColor(hoverColor) : resolveColor(iconColor),
                        backgroundColor: style === 'filled' ? (isHovered ? resolveColor(hoverColor) : resolveColor(iconColor)) : 'transparent',
                        borderColor: style === 'outlined' ? resolveColor(iconColor) : 'transparent',
                    }, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), "aria-label": "Search", children: _jsx(SearchIconSvg, { size: sz }) }), searchOpen && (_jsx("div", { className: "fixed inset-0 z-[100] flex flex-col items-center", style: { backgroundColor: 'rgba(0, 0, 0, 0.4)' }, onClick: handleClose, children: _jsxs("div", { className: "w-full max-w-2xl mt-16 mx-4 bg-white rounded-xl shadow-2xl overflow-hidden", onClick: (e) => e.stopPropagation(), children: [_jsxs("form", { onSubmit: handleSubmit, className: "flex items-center gap-3 px-4 py-3 border-b border-gray-200", children: [_jsx("span", { className: "text-gray-400", children: _jsx(SearchIconSvg, { size: 20 }) }), _jsx("input", { ref: inputRef, type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search products...", className: "flex-1 text-base text-gray-900 placeholder-gray-400 bg-transparent outline-none", autoFocus: true }), _jsx("button", { type: "button", onClick: handleClose, className: "p-1 rounded-full hover:bg-gray-100 transition-colors shrink-0", "aria-label": "Close search", children: _jsx("span", { className: "text-gray-400", children: _jsx(XIconSvg, { size: 20 }) }) })] }), _jsx("div", { className: "px-4 py-3 text-sm text-gray-400", children: query ? `Press Enter to search for "${query}"` : 'Start typing to search products...' })] }) }))] }));
    },
};
export default SearchIcon;
//# sourceMappingURL=SearchIcon.js.map