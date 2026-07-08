import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { menuNavigationFields } from './menunavigation.fields';
import { resolveColor } from '../../../../theme/resolveColor';
const ChevronDown = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const FONT_SIZE = {
    sm: '0.875rem', base: '1rem', lg: '1.125rem',
};
const FONT_WEIGHT = {
    normal: 400, medium: 500, semibold: 600, bold: 700,
};
const SHADOW = {
    sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl',
};
const RADIUS = {
    sm: 'rounded', md: 'rounded-lg', lg: 'rounded-xl', xl: 'rounded-2xl',
};
const LAYOUT = {
    horizontal: 'flex-row', vertical: 'flex-col', stacked: 'flex-col',
};
const ALIGN = {
    left: 'justify-start', center: 'justify-center', right: 'justify-end',
};
const hoverClass = (effect) => {
    if (effect === 'underline')
        return 'hover:underline';
    if (effect === 'background')
        return 'hover:bg-gray-100 rounded';
    return '';
};
const getLabel = (item) => item.label || 'Untitled';
/**
 * Render a leaf dropdown item.
 */
const DropdownLeaf = ({ item, resolvedTextColor, fontSize, onLinkClick }) => (_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, style: { color: resolvedTextColor, fontSize, textDecoration: 'none', display: 'block', padding: '8px 12px' }, children: getLabel(item) }));
/**
 * Recursive dropdown item — items with children get a sub-panel
 * (right-side flyout), items without get a leaf.
 */
const DropdownItem = ({ item, depth, maxDepth, resolvedTextColor, fontSize, dropdownBg, dropdownBorder, shadowClass, radiusClass }) => {
    const [open, setOpen] = useState(false);
    const visibleChildren = (item.children || []).filter((c) => c.isVisible);
    if (depth > maxDepth || visibleChildren.length === 0) {
        return (_jsx("div", { style: { padding: '4px 0' }, children: _jsx(DropdownLeaf, { item: item, resolvedTextColor: resolvedTextColor, fontSize: fontSize }) }, item.id));
    }
    return (_jsxs("div", { className: "relative", onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false), style: { padding: '4px 0' }, children: [_jsxs("div", { className: "flex items-center justify-between", style: { color: resolvedTextColor, fontSize, cursor: 'pointer', padding: '4px 8px' }, children: [_jsx("span", { children: getLabel(item) }), _jsx(ChevronDown, { size: 12 })] }), open && (_jsx("div", { className: `absolute z-50 top-0 left-full ${shadowClass} ${radiusClass}`, style: { backgroundColor: dropdownBg, border: `1px solid ${dropdownBorder}`, minWidth: '180px', padding: '4px 0' }, children: visibleChildren.map((child) => (_jsx(DropdownItem, { item: child, depth: depth + 1, maxDepth: maxDepth, resolvedTextColor: resolvedTextColor, fontSize: fontSize, dropdownBg: dropdownBg, dropdownBorder: dropdownBorder, shadowClass: shadowClass, radiusClass: radiusClass }, child.id))) }))] }, item.id));
};
/**
 * Top-level menu item. If it has children, hover opens a dropdown
 * panel below the trigger. If not, it's a plain link.
 */
const TopLevelItem = ({ item, resolvedTextColor, resolvedHoverColor, fontSize, fontWeight, hoverEffect, showArrow, dropdownStyle, maxDepth, dropdownBg, dropdownBorder, shadowClass, radiusClass, onLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasMegaMenu = !!(item.megaMenu?.enabled && dropdownStyle === 'mega');
    const hasChildren = !!(item.children && item.children.length > 0);
    const hasDropdown = hasChildren && (hasMegaMenu || dropdownStyle === 'default');
    const visibleChildren = hasChildren ? (item.children || []).filter((c) => c.isVisible) : [];
    const trigger = {
        color: resolvedTextColor,
        fontSize,
        fontWeight,
        background: 'none',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '8px 16px',
        cursor: 'pointer',
        transition: hoverEffect === 'color' ? `color 150ms ease` : undefined,
    };
    if (!hasDropdown) {
        return (_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, className: hoverClass(hoverEffect), style: { ...trigger, textDecoration: 'none', color: resolvedTextColor, fontSize, fontWeight }, onMouseEnter: (e) => { if (hoverEffect === 'color')
                e.currentTarget.style.color = resolvedHoverColor; }, onMouseLeave: (e) => { if (hoverEffect === 'color')
                e.currentTarget.style.color = resolvedTextColor; }, children: getLabel(item) }));
    }
    return (_jsxs("div", { className: "relative", onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false), children: [_jsxs("button", { type: "button", className: hoverClass(hoverEffect), style: trigger, "aria-expanded": isOpen, onMouseEnter: (e) => { if (hoverEffect === 'color')
                    e.currentTarget.style.color = resolvedHoverColor; }, onMouseLeave: (e) => { if (hoverEffect === 'color')
                    e.currentTarget.style.color = resolvedTextColor; }, children: [getLabel(item), showArrow && _jsx(ChevronDown, {})] }), isOpen && (_jsx("div", { className: `absolute z-50 top-full left-1/2 ${shadowClass} ${radiusClass}`, style: {
                    backgroundColor: dropdownBg,
                    border: `1px solid ${dropdownBorder}`,
                    minWidth: '220px',
                    padding: '8px',
                    transform: 'translateX(-50%)',
                    marginTop: '4px',
                }, children: visibleChildren.map((child) => (_jsx(DropdownItem, { item: child, depth: 2, maxDepth: maxDepth, resolvedTextColor: resolvedTextColor, fontSize: fontSize, dropdownBg: dropdownBg, dropdownBorder: dropdownBorder, shadowClass: shadowClass, radiusClass: radiusClass }, child.id))) }))] }));
};
export const MenuNavigation = {
    label: 'Menu Navigation',
    fields: menuNavigationFields,
    defaultProps: {
        menuHandle: 'default',
        layout: 'horizontal',
        alignment: 'center',
        hoverEffect: 'underline',
        textColor: '#111827',
        hoverColor: '#3b82f6',
        fontSize: 'base',
        fontWeight: 'medium',
        showDropdownArrows: true,
        dropdownStyle: 'default',
        maxDepth: '3',
        menuData: [],
        dropdownBackground: '#ffffff',
        dropdownBorder: '#e5e7eb',
        dropdownShadow: 'lg',
        dropdownRadius: 'md',
    },
    render: (rawProps) => {
        const { menuData, layout, alignment, hoverEffect, textColor, hoverColor, fontSize, fontWeight, showDropdownArrows, dropdownStyle, maxDepth, dropdownBackground, dropdownBorder, dropdownShadow, dropdownRadius, } = rawProps;
        const items = menuData || [];
        const visibleItems = items.filter((it) => it.isVisible).sort((a, b) => a.position - b.position);
        const resolvedTextColor = resolveColor(textColor) || '#111827';
        const resolvedHoverColor = resolveColor(hoverColor) || '#3b82f6';
        const resolvedDropdownBg = resolveColor(dropdownBackground || '#ffffff') || '#ffffff';
        const resolvedDropdownBorder = resolveColor(dropdownBorder || '#e5e7eb') || '#e5e7eb';
        const fs = FONT_SIZE[fontSize] || FONT_SIZE.base;
        const fw = FONT_WEIGHT[fontWeight] || FONT_WEIGHT.medium;
        const shadowClass = SHADOW[dropdownShadow || 'lg'];
        const radiusClass = RADIUS[dropdownRadius || 'md'];
        const maxD = typeof maxDepth === 'string' ? parseInt(maxDepth, 10) : maxDepth;
        return (_jsx("nav", { className: `flex ${LAYOUT[layout || 'horizontal']} ${ALIGN[alignment || 'center']}`, children: _jsx("div", { className: `flex ${LAYOUT[layout || 'horizontal']} gap-2`, children: visibleItems.map((item) => (_jsx(TopLevelItem, { item: item, resolvedTextColor: resolvedTextColor, resolvedHoverColor: resolvedHoverColor, fontSize: fs, fontWeight: fw, hoverEffect: hoverEffect || 'underline', showArrow: !!showDropdownArrows, dropdownStyle: dropdownStyle || 'default', maxDepth: isNaN(maxD) ? 3 : maxD, dropdownBg: resolvedDropdownBg, dropdownBorder: resolvedDropdownBorder, shadowClass: shadowClass, radiusClass: radiusClass }, item.id))) }) }));
    },
};
export default MenuNavigation;
//# sourceMappingURL=MenuNavigation.js.map