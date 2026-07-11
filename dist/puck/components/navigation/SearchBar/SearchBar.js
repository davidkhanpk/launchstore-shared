import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { searchBarFields } from './searchbar.fields';
import { resolveColor } from '../../../../theme/resolveColor';
const SearchSvg = ({ size }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
const XSvg = ({ size }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const SIZE_MAP = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-5 text-lg',
};
const SIZE_ICON = { sm: 16, md: 20, lg: 24 };
const RADIUS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full',
};
const STYLE = {
    minimal: 'border-0 border-b-2', outlined: 'border', filled: 'border-0',
};
export const SearchBar = {
    label: 'Search Bar',
    fields: searchBarFields,
    defaultProps: {
        placeholder: 'Search products...', style: 'outlined', size: 'md',
        showIcon: true, iconPosition: 'left', fullWidth: false, maxWidth: '400px',
        borderRadius: 'md', backgroundColor: '#ffffff', textColor: '#000000',
        borderColor: '#e5e7eb', focusBorderColor: '#3b82f6',
        showPopularSearches: false, popularSearches: [],
    },
    render: (rawProps) => {
        const { placeholder, style, size, showIcon, iconPosition, fullWidth, maxWidth, borderRadius, backgroundColor, textColor, borderColor, focusBorderColor, showPopularSearches, popularSearches, onSearch, } = rawProps;
        const [query, setQuery] = useState('');
        const [isFocused, setIsFocused] = useState(false);
        const inputRef = useRef(null);
        const handleSubmit = (e) => {
            e.preventDefault();
            if (query.trim()) {
                onSearch?.(query.trim());
                setQuery('');
                setIsFocused(false);
            }
        };
        const handlePopular = (term) => {
            onSearch?.(term);
            setIsFocused(false);
        };
        const ic = SIZE_ICON[size || 'md'];
        const sizeCls = SIZE_MAP[size || 'md'];
        const radiusCls = RADIUS[borderRadius || 'md'];
        const styleCls = STYLE[style || 'outlined'];
        const iconPos = (iconPosition || 'left');
        return (_jsxs("div", { className: "relative", style: { width: fullWidth ? '100%' : 'auto', maxWidth: fullWidth ? undefined : maxWidth }, children: [_jsx("form", { onSubmit: handleSubmit, className: "relative", children: _jsxs("div", { className: "relative flex items-center", children: [showIcon && iconPos === 'left' && (_jsx("span", { className: "absolute left-3 pointer-events-none", style: { color: resolveColor(textColor), opacity: 0.5 }, children: _jsx(SearchSvg, { size: ic }) })), _jsx("input", { ref: inputRef, type: "search", value: query, onChange: (e) => setQuery(e.target.value), onFocus: () => setIsFocused(true), onBlur: () => setTimeout(() => setIsFocused(false), 200), placeholder: placeholder, className: `w-full transition-all duration-200 ${sizeCls} ${radiusCls} ${styleCls} ${showIcon && iconPos === 'left' ? 'pl-10' : ''} ${showIcon && iconPos === 'right' ? 'pr-10' : ''} focus:outline-none`, style: {
                                    backgroundColor: style === 'filled' ? resolveColor(backgroundColor) : 'transparent',
                                    color: resolveColor(textColor),
                                    borderColor: isFocused ? resolveColor(focusBorderColor) : resolveColor(borderColor),
                                } }), showIcon && iconPos === 'right' && (_jsx("button", { type: "submit", className: "absolute right-3", "aria-label": "Search", children: _jsx("span", { style: { color: resolveColor(textColor), opacity: 0.5 }, children: _jsx(SearchSvg, { size: ic }) }) })), query && (_jsx("button", { type: "button", onClick: () => setQuery(''), className: "absolute right-10", "aria-label": "Clear", children: _jsx("span", { style: { color: resolveColor(textColor), opacity: 0.5 }, children: _jsx(XSvg, { size: ic - 4 }) }) }))] }) }), showPopularSearches && isFocused && popularSearches && popularSearches.length > 0 && (_jsxs("div", { className: "absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-50", style: { borderColor: resolveColor(borderColor) }, children: [_jsx("div", { className: "px-4 py-2 text-xs font-semibold text-gray-500 uppercase", children: "Popular Searches" }), popularSearches.map((item, index) => (_jsxs("button", { onClick: () => handlePopular(item.search), className: "w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-2", children: [_jsx("span", { className: "text-gray-400", children: _jsx(SearchSvg, { size: 14 }) }), _jsx("span", { style: { color: resolveColor(textColor) }, children: item.search })] }, index)))] }))] }));
    },
};
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map