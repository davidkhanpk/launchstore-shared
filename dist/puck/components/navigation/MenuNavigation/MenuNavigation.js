import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { menuNavigationFields } from './menunavigation.fields';
import { resolveColor } from '../../../../theme/resolveColor';
import { CategoryMegaMenu } from '../CategoryMegaMenu/CategoryMegaMenu';
const ChevronDown = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const Hamburger = ({ size = 24 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), _jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), _jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })] }));
const XIcon = ({ size = 24 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const SearchIcon = ({ size = 18 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
const FONT_SIZE = {
    sm: '0.875rem', base: '1rem', lg: '1.125rem',
};
const FONT_WEIGHT = {
    normal: 400, medium: 500, semibold: 600, bold: 700,
};
const SHADOW = {
    sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.1)', lg: '0 10px 15px rgba(0,0,0,0.1)', xl: '0 20px 25px rgba(0,0,0,0.15)',
};
const RADIUS = {
    sm: '4px', md: '8px', lg: '12px', xl: '16px',
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
 * useIsMobile — SSR-safe media-query hook. Returns true below `breakpoint` px.
 * Used to switch between desktop nav bar and mobile hamburger drawer.
 */
function useIsMobile(breakpoint) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const update = () => setIsMobile(mql.matches);
        update();
        mql.addEventListener('change', update);
        return () => mql.removeEventListener('change', update);
    }, [breakpoint]);
    return isMobile;
}
/**
 * Map a top-level menu item's megaMenu config + enrichedData into the
 * CategoryMegaMenuProps shape. Returns null if the item has no enriched
 * category (the mega panel can't render without it).
 */
function toMegaMenuProps(item, megaTheme, onLinkClick) {
    if (!item.enrichedData?.category)
        return null;
    return {
        item: {
            id: item.id,
            label: getLabel(item),
            url: item.enrichedData.resolvedUrl || item.url,
            openInNewTab: item.openInNewTab,
            enrichedData: item.enrichedData,
        },
        megaMenu: {
            enabled: true,
            columns: item.megaMenu?.columns,
            showImage: item.megaMenu?.showImage,
            imageUrl: item.megaMenu?.imageUrl,
            subcategoryLimit: item.megaMenu?.subcategoryLimit,
            showDescriptions: item.megaMenu?.showDescriptions,
            showSubcategories: item.megaMenu?.showSubcategories,
        },
        theme: megaTheme,
        onLinkClick,
    };
}
/**
 * Recursive dropdown leaf (default dropdown style, nested flyout).
 * Plain link with no further nesting.
 */
const DropdownLeaf = ({ item, resolvedTextColor, fontSize, onLinkClick }) => (_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, style: { color: resolvedTextColor, fontSize, textDecoration: 'none', display: 'block', padding: '8px 12px' }, children: getLabel(item) }));
/**
 * Recursive dropdown item — items with children get a right-side flyout
 * (manual hover-intent, matching TopLevelItem's pattern). Items without
 * get a leaf.
 */
const DropdownItem = ({ item, resolvedTextColor, fontSize, dropdownBg, dropdownBorder, shadow, radius, onLinkClick }) => {
    const [open, setOpen] = useState(false);
    const openTimer = useRef(null);
    const closeTimer = useRef(null);
    useEffect(() => () => {
        if (openTimer.current)
            clearTimeout(openTimer.current);
        if (closeTimer.current)
            clearTimeout(closeTimer.current);
    }, []);
    const visibleChildren = (item.children || []).filter((c) => c.isVisible);
    if (visibleChildren.length === 0) {
        return _jsx(DropdownLeaf, { item: item, resolvedTextColor: resolvedTextColor, fontSize: fontSize, onLinkClick: onLinkClick });
    }
    return (_jsxs("div", { className: "relative", onMouseEnter: () => { if (openTimer.current)
            clearTimeout(openTimer.current); openTimer.current = setTimeout(() => setOpen(true), 300); }, onMouseLeave: () => { if (closeTimer.current)
            clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpen(false), 300); }, children: [_jsxs("div", { className: "flex items-center justify-between", style: { color: resolvedTextColor, fontSize, cursor: 'pointer', padding: '4px 8px' }, children: [_jsx("span", { children: getLabel(item) }), _jsx(ChevronDown, { size: 12 })] }), open && (_jsx("div", { className: "absolute z-50 top-0 left-full", style: { backgroundColor: dropdownBg, border: `1px solid ${dropdownBorder}`, boxShadow: shadow, borderRadius: radius, minWidth: '180px', padding: '4px 0' }, children: visibleChildren.map((child) => (_jsx(DropdownItem, { item: child, resolvedTextColor: resolvedTextColor, fontSize: fontSize, dropdownBg: dropdownBg, dropdownBorder: dropdownBorder, shadow: shadow, radius: radius, onLinkClick: onLinkClick }, child.id))) }))] }));
};
/**
 * Top-level desktop item. Uses Headless UI Popover for hover + keyboard.
 * - dropdownStyle 'mega' + item.megaMenu.enabled + enrichedData.category
 *   → CategoryMegaMenu panel.
 * - otherwise, children → recursive DropdownItem flyout.
 * - no children → plain link.
 *
 * Hover-intent: 300ms open/close delay + forgiving mouse path (the panel
 * sits flush under the trigger with no gap, killing diagonal-flicker).
 * Keyboard: PopoverButton is a real focusable <button> with aria-expanded;
 * Enter/Space/Down opens, Escape closes (all via Headless UI defaults).
 */
const TopLevelItem = ({ item, resolvedTextColor, resolvedHoverColor, fontSize, fontWeight, hoverEffect, showArrow, dropdownStyle, dropdownBg, dropdownBorder, shadow, radius, megaTheme, onLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openTimer = useRef(null);
    const closeTimer = useRef(null);
    const panelRef = useRef(null);
    const triggerRef = useRef(null);
    // Panel alignment: 'center' | 'left' | 'right'. Starts centered; the layout
    // effect flips it when the centered panel would overflow the viewport edge.
    const [panelAlign, setPanelAlign] = useState('center');
    const cancelTimers = () => {
        if (openTimer.current) {
            clearTimeout(openTimer.current);
            openTimer.current = null;
        }
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };
    // Hover-intent: 300ms open delay, 300ms close delay (forgiving).
    const scheduleOpen = () => { cancelTimers(); openTimer.current = setTimeout(() => setIsOpen(true), 300); };
    const scheduleClose = () => { cancelTimers(); closeTimer.current = setTimeout(() => setIsOpen(false), 300); };
    useEffect(() => () => cancelTimers(), []);
    const megaProps = (dropdownStyle === 'mega' && item.megaMenu?.enabled)
        ? toMegaMenuProps(item, megaTheme, onLinkClick)
        : null;
    const visibleChildren = (item.children || []).filter((c) => c.isVisible);
    const hasDropdown = !!(megaProps || (visibleChildren.length > 0 && dropdownStyle === 'default'));
    // Viewport-edge detection: when the panel opens, measure whether the
    // centered position would overflow the viewport and flip alignment so the
    // panel stays on-screen (NAV-H5). Runs only on open (isOpen is the trigger).
    useLayoutEffect(() => {
        if (!isOpen)
            return;
        const panel = panelRef.current;
        const trigger = triggerRef.current;
        if (!panel || !trigger)
            return;
        const triggerRect = trigger.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();
        const vw = window.innerWidth;
        const margin = 8;
        // Centered panel's left edge if we keep translateX(-50%):
        const centeredLeft = triggerRect.left + triggerRect.width / 2 - panelRect.width / 2;
        const centeredRight = centeredLeft + panelRect.width;
        if (centeredLeft < margin) {
            setPanelAlign('left'); // would overflow left → anchor to trigger's left edge
        }
        else if (centeredRight > vw - margin) {
            setPanelAlign('right'); // would overflow right → anchor to trigger's right edge
        }
        else {
            setPanelAlign('center');
        }
    }, [isOpen]);
    const panelPositionStyle = panelAlign === 'left'
        ? { left: 0, transform: 'none' }
        : panelAlign === 'right'
            ? { left: 'auto', right: 0, transform: 'none' }
            : { left: '50%', transform: 'translateX(-50%)' };
    const triggerStyle = {
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
        transition: hoverEffect === 'color' ? 'color 150ms ease' : undefined,
    };
    if (!hasDropdown) {
        return (_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, className: hoverClass(hoverEffect), style: { ...triggerStyle, textDecoration: 'none' }, onMouseEnter: (e) => { if (hoverEffect === 'color')
                e.currentTarget.style.color = resolvedHoverColor; }, onMouseLeave: (e) => { if (hoverEffect === 'color')
                e.currentTarget.style.color = resolvedTextColor; }, children: getLabel(item) }));
    }
    return (_jsxs("div", { className: "relative", onMouseEnter: scheduleOpen, onMouseLeave: scheduleClose, children: [_jsxs("button", { ref: triggerRef, type: "button", className: hoverClass(hoverEffect), style: triggerStyle, "aria-expanded": isOpen, "aria-haspopup": megaProps ? 'dialog' : 'menu', onClick: () => setIsOpen((v) => !v), onMouseEnter: (e) => { if (hoverEffect === 'color')
                    e.currentTarget.style.color = resolvedHoverColor; }, onMouseLeave: (e) => { if (hoverEffect === 'color')
                    e.currentTarget.style.color = resolvedTextColor; }, children: [getLabel(item), showArrow && _jsx(ChevronDown, {})] }), isOpen && (_jsx("div", { ref: panelRef, className: "absolute z-50 top-full", style: {
                    ...panelPositionStyle,
                    backgroundColor: dropdownBg,
                    border: `1px solid ${dropdownBorder}`,
                    boxShadow: shadow,
                    borderRadius: radius,
                    // Flush under the trigger (no gap) — kills diagonal-flicker.
                    marginTop: megaProps ? '0' : '4px',
                    padding: megaProps ? 0 : '8px',
                    minWidth: megaProps ? 'auto' : '220px',
                }, children: megaProps ? (_jsx(CategoryMegaMenu, { ...megaProps })) : (visibleChildren.map((child) => (_jsx(DropdownItem, { item: child, resolvedTextColor: resolvedTextColor, fontSize: fontSize, dropdownBg: dropdownBg, dropdownBorder: dropdownBorder, shadow: shadow, radius: radius, onLinkClick: onLinkClick }, child.id)))) }))] }));
};
/**
 * Mobile drawer — Headless UI Dialog (focus trap, Escape, scroll-lock, portal).
 * Real slide-in animation via Transition. Optional in-drawer search input pinned to top.
 */
const MobileMenuDrawer = ({ isOpen, onClose, items, resolvedTextColor, dropdownBg, dropdownBorder, searchPlaceholder, onSearchSubmit }) => {
    const [query, setQuery] = useState('');
    const visibleItems = items.filter((it) => it.isVisible && (!('parentId' in it) || !it.parentId)).sort((a, b) => a.position - b.position);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearchSubmit && query.trim()) {
            onSearchSubmit(query.trim());
            onClose();
        }
    };
    return (_jsx(Transition, { show: isOpen, as: React.Fragment, children: _jsxs(Dialog, { onClose: onClose, className: "relative z-50", children: [_jsx(TransitionChild, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-black/50", "aria-hidden": "true" }) }), _jsx(TransitionChild, { as: React.Fragment, enter: "transform transition ease-out duration-300", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in duration-200", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full", children: _jsx("div", { className: "fixed inset-y-0 left-0 flex max-w-full", children: _jsxs(DialogPanel, { style: {
                                width: '100vw',
                                maxWidth: '400px',
                                height: '100%',
                                backgroundColor: dropdownBg,
                                color: resolvedTextColor,
                                display: 'flex',
                                flexDirection: 'column',
                            }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: `1px solid ${dropdownBorder}` }, children: [_jsx(DialogTitle, { style: { fontSize: '16px', fontWeight: 600 }, children: "Menu" }), _jsx("button", { type: "button", onClick: onClose, "aria-label": "Close menu", style: { background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: resolvedTextColor }, children: _jsx(XIcon, { size: 24 }) })] }), searchPlaceholder && (_jsxs("form", { onSubmit: handleSubmit, style: { padding: '12px 16px', borderBottom: `1px solid ${dropdownBorder}` }, children: [_jsx("label", { className: "sr-only", htmlFor: "mobile-nav-search", children: "Search" }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', border: `1px solid ${dropdownBorder}`, borderRadius: '8px' }, children: [_jsx(SearchIcon, { size: 18 }), _jsx("input", { id: "mobile-nav-search", type: "search", value: query, onChange: (e) => setQuery(e.target.value), placeholder: searchPlaceholder, style: { flex: 1, border: 'none', outline: 'none', background: 'transparent', color: resolvedTextColor, fontSize: '14px' } })] })] })), _jsx("nav", { style: { flex: 1, overflowY: 'auto', padding: '8px 0' }, "aria-label": "Mobile", children: visibleItems.map((item) => {
                                        const childVisible = (item.children || []).filter((c) => c.isVisible);
                                        if (childVisible.length === 0) {
                                            return (_jsx("a", { href: item.url || '#', onClick: onClose, style: { display: 'block', padding: '12px 16px', color: resolvedTextColor, textDecoration: 'none' }, children: getLabel(item) }, item.id));
                                        }
                                        return _jsx(MobileAccordionItem, { item: item, resolvedTextColor: resolvedTextColor, onLinkClick: onClose }, item.id);
                                    }) })] }) }) })] }) }));
};
/**
 * Accordion row for nested mobile items (one level — keep mobile simple).
 */
const MobileAccordionItem = ({ item, resolvedTextColor, onLinkClick }) => {
    const [open, setOpen] = useState(false);
    const childVisible = (item.children || []).filter((c) => c.isVisible);
    return (_jsxs("div", { children: [_jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), "aria-expanded": open, style: { display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'none', border: 'none', color: resolvedTextColor, cursor: 'pointer', fontSize: '14px' }, children: [_jsx("span", { children: getLabel(item) }), _jsx(ChevronDown, { size: 14 })] }), open && (_jsx("div", { style: { marginLeft: '16px' }, children: childVisible.map((c) => (_jsx("a", { href: c.url || '#', onClick: onLinkClick, style: { display: 'block', padding: '10px 16px', color: resolvedTextColor, textDecoration: 'none', fontSize: '13px' }, children: getLabel(c) }, c.id))) }))] }));
};
export const MenuNavigation = {
    label: 'Menu Navigation',
    fields: menuNavigationFields,
    defaultProps: {
        menuHandle: '',
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
        mobileBreakpoint: 768,
        mobileSearchPlaceholder: 'Search products…',
    },
    render: (rawProps) => {
        const { menuData, layout, alignment, hoverEffect, textColor, hoverColor, fontSize, fontWeight, showDropdownArrows, dropdownStyle, dropdownBackground, dropdownBorder, dropdownShadow, dropdownRadius, mobileBreakpoint, mobileSearchPlaceholder, theme, } = rawProps;
        const items = menuData || [];
        const visibleTopLevel = items
            .filter((it) => it.isVisible && (!('parentId' in it) || !it.parentId))
            .sort((a, b) => a.position - b.position);
        const resolvedTextColor = resolveColor(textColor) || '#111827';
        const resolvedHoverColor = resolveColor(hoverColor) || '#3b82f6';
        const resolvedDropdownBg = resolveColor(dropdownBackground || '#ffffff') || '#ffffff';
        const resolvedDropdownBorder = resolveColor(dropdownBorder || '#e5e7eb') || '#e5e7eb';
        const fs = FONT_SIZE[fontSize] || FONT_SIZE.base;
        const fw = FONT_WEIGHT[fontWeight] || FONT_WEIGHT.medium;
        const shadow = SHADOW[dropdownShadow || 'lg'];
        const radius = RADIUS[dropdownRadius || 'md'];
        // Mega-menu theme: project SharedMenuNavTheme.megaMenu → SharedMegaMenuTheme.
        const megaTheme = theme?.megaMenu ? {
            background: theme.megaMenu.background,
            linkText: theme.megaMenu.linkText,
            borderRadius: theme.effects?.borderRadius?.megaMenu,
            boxShadow: theme.effects?.shadow?.megaMenu,
        } : undefined;
        const bp = mobileBreakpoint || 768;
        const isMobile = useIsMobile(bp);
        const [drawerOpen, setDrawerOpen] = useState(false);
        // Mobile: hamburger → drawer.
        if (isMobile) {
            return (_jsxs(_Fragment, { children: [_jsx("button", { type: "button", "aria-label": "Open menu", "aria-expanded": drawerOpen, onClick: () => setDrawerOpen(true), style: { background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: resolvedTextColor }, children: _jsx(Hamburger, { size: 24 }) }), _jsx(MobileMenuDrawer, { isOpen: drawerOpen, onClose: () => setDrawerOpen(false), items: items, resolvedTextColor: resolvedTextColor, dropdownBg: resolvedDropdownBg, dropdownBorder: resolvedDropdownBorder, searchPlaceholder: mobileSearchPlaceholder })] }));
        }
        // Desktop: nav bar.
        return (_jsx("nav", { "aria-label": "Main", className: `flex ${LAYOUT[layout || 'horizontal']} ${ALIGN[alignment || 'center']}`, children: _jsx("div", { className: `flex ${LAYOUT[layout || 'horizontal']} gap-2`, children: visibleTopLevel.map((item) => (_jsx(TopLevelItem, { item: item, resolvedTextColor: resolvedTextColor, resolvedHoverColor: resolvedHoverColor, fontSize: fs, fontWeight: fw, hoverEffect: hoverEffect || 'underline', showArrow: !!showDropdownArrows, dropdownStyle: dropdownStyle || 'default', dropdownBg: resolvedDropdownBg, dropdownBorder: resolvedDropdownBorder, shadow: shadow, radius: radius, megaTheme: megaTheme }, item.id))) }) }));
    },
};
export default MenuNavigation;
//# sourceMappingURL=MenuNavigation.js.map