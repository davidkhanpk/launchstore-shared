import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { resolveColor } from '../../../../theme/resolveColor';
import { CategoryMegaMenu } from '../CategoryMegaMenu/CategoryMegaMenu';
import { createAccordionFields, } from '../../../design-system';
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    menuHandle: { type: 'text', label: 'Menu Handle' },
    layout: {
        type: 'select', label: 'Layout',
        options: [
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Stacked', value: 'stacked' },
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
    hoverEffect: {
        type: 'select', label: 'Hover Effect',
        options: [
            { label: 'Underline', value: 'underline' },
            { label: 'Background', value: 'background' },
            { label: 'Color Change', value: 'color' },
            { label: 'None', value: 'none' },
        ],
    },
    textColor: { type: 'text', label: 'Text Color (token or hex)' },
    hoverColor: { type: 'text', label: 'Hover Color (token or hex)' },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
            { label: 'Large', value: 'lg' },
        ],
    },
    fontWeight: {
        type: 'select', label: 'Font Weight',
        options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Medium', value: 'medium' },
            { label: 'Semibold', value: 'semibold' },
            { label: 'Bold', value: 'bold' },
        ],
    },
    showDropdownArrows: {
        type: 'radio', label: 'Show Dropdown Arrows',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    dropdownStyle: {
        type: 'select', label: 'Dropdown Style',
        options: [
            { label: 'Default Dropdown', value: 'default' },
            { label: 'Mega Menu', value: 'mega' },
        ],
    },
    triggerMode: {
        type: 'select', label: 'Open On',
        options: [
            { label: 'Hover', value: 'hover' },
            { label: 'Click', value: 'click' },
        ],
    },
    subMenuPosition: {
        type: 'select', label: 'Sub-menu Position',
        options: [
            { label: 'Right (side flyout)', value: 'right' },
            { label: 'Left (side flyout)', value: 'left' },
            { label: 'Bottom (dropdown)', value: 'bottom' },
        ],
    },
    maxDepth: {
        type: 'select', label: 'Maximum Nesting Depth',
        options: [
            { label: '1 Level', value: '1' },
            { label: '2 Levels', value: '2' },
            { label: '3 Levels', value: '3' },
        ],
    },
    dropdownBackground: { type: 'text', label: 'Dropdown Background (token or color)' },
    dropdownBorder: { type: 'text', label: 'Dropdown Border (token or color)' },
    dropdownShadow: {
        type: 'select', label: 'Dropdown Shadow',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
    dropdownRadius: {
        type: 'select', label: 'Dropdown Border Radius',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
    mobileBreakpoint: { type: 'number', label: 'Mobile Breakpoint (px)' },
    mobileSearchPlaceholder: { type: 'text', label: 'Mobile Search Placeholder (empty hides search)' },
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Menu Source',
            defaultOpen: true,
            fieldKeys: ['menuHandle'],
        },
        {
            label: 'Layout',
            fieldKeys: ['layout', 'alignment', 'maxDepth'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontSize', 'fontWeight', 'textColor', 'hoverColor'],
        },
        {
            label: 'Hover Effect',
            fieldKeys: ['hoverEffect'],
        },
        {
            label: 'Dropdown',
            fieldKeys: ['dropdownStyle', 'showDropdownArrows', 'triggerMode', 'subMenuPosition'],
        },
        {
            label: 'Dropdown Appearance',
            fieldKeys: ['dropdownBackground', 'dropdownBorder', 'dropdownShadow', 'dropdownRadius'],
        },
        {
            label: 'Mobile',
            fieldKeys: ['mobileBreakpoint', 'mobileSearchPlaceholder'],
        },
    ],
    allFields,
});
const ChevronDown = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const ChevronRight = ({ size = 12 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
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
const DropdownItem = ({ item, resolvedTextColor, fontSize, dropdownBg, dropdownBorder, shadow, radius, triggerMode, subMenuPosition, onLinkClick }) => {
    const [open, setOpen] = useState(false);
    const openTimer = useRef(null);
    const closeTimer = useRef(null);
    const wrapperRef = useRef(null);
    const rowRef = useRef(null);
    // Measured row dimensions — used to position the flyout precisely so it
    // never overlaps the parent row, regardless of font size / padding / theme.
    const [rowRect, setRowRect] = useState(null);
    const isClick = triggerMode === 'click';
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
    const cancelTimers = () => {
        if (openTimer.current)
            clearTimeout(openTimer.current);
        if (closeTimer.current)
            clearTimeout(closeTimer.current);
    };
    const scheduleOpen = () => { if (isClick)
        return; cancelTimers(); openTimer.current = setTimeout(() => setOpen(true), 300); };
    const scheduleClose = () => { if (isClick)
        return; cancelTimers(); closeTimer.current = setTimeout(() => setOpen(false), 300); };
    // Click mode: close on outside-click.
    useEffect(() => {
        if (!isClick || !open)
            return;
        const onDown = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target))
                setOpen(false);
        };
        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, [isClick, open]);
    // When the flyout opens, measure the parent ROW element relative to the
    // wrapper. This gives us exact pixel coordinates so we can position the
    // flyout flush against the row's edge — no overlap, no dead space, no magic
    // numbers. Works for any font size, padding, or theme.
    useLayoutEffect(() => {
        if (!open || !rowRef.current || !wrapperRef.current)
            return;
        const row = rowRef.current.getBoundingClientRect();
        const wrapper = wrapperRef.current.getBoundingClientRect();
        setRowRect({
            top: row.top - wrapper.top,
            left: row.left - wrapper.left,
            width: row.width,
            height: row.height,
        });
    }, [open]);
    const toggle = () => setOpen((v) => !v);
    // Build flyout position from measured rowRect. Falls back to CSS-only
    // positioning on first paint before measurement completes.
    let flyoutStyle;
    if (rowRect) {
        if (subMenuPosition === 'left') {
            flyoutStyle = { top: rowRect.top, left: 'auto', right: `calc(100% - ${rowRect.left}px)` };
        }
        else if (subMenuPosition === 'bottom') {
            flyoutStyle = { top: rowRect.top + rowRect.height, left: rowRect.left, right: 'auto' };
        }
        else {
            // right (default): flush to the row's right edge, top-aligned to the row.
            flyoutStyle = { top: rowRect.top, left: rowRect.left + rowRect.width, right: 'auto' };
        }
    }
    else {
        // Pre-measurement fallback (first frame only).
        flyoutStyle =
            subMenuPosition === 'left'
                ? { top: 0, right: '100%', left: 'auto' }
                : subMenuPosition === 'bottom'
                    ? { top: '100%', left: 0, right: 'auto' }
                    : { top: 0, left: '100%', right: 'auto' };
    }
    return (_jsxs("div", { ref: wrapperRef, className: "relative", onMouseEnter: scheduleOpen, onMouseLeave: scheduleClose, children: [_jsxs("div", { ref: rowRef, className: "flex items-center justify-between", style: { backgroundColor: dropdownBg }, children: [_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, style: { flex: 1, color: resolvedTextColor, fontSize, textDecoration: 'none', padding: '4px 8px' }, children: getLabel(item) }), _jsx("button", { type: "button", onClick: isClick ? toggle : undefined, "aria-expanded": open, "aria-label": open ? `Collapse ${getLabel(item)}` : `Expand ${getLabel(item)}`, style: { background: 'none', border: 'none', cursor: isClick ? 'pointer' : 'default', padding: '4px 8px', color: resolvedTextColor, display: 'flex', alignItems: 'center' }, children: _jsx(ChevronRight, { size: 12 }) })] }), open && (_jsx("div", { className: "absolute z-50", onMouseEnter: cancelTimers, onMouseLeave: scheduleClose, style: {
                    ...flyoutStyle,
                    backgroundColor: dropdownBg,
                    border: `1px solid ${dropdownBorder}`,
                    boxShadow: shadow,
                    borderRadius: radius,
                    minWidth: '180px',
                    padding: '4px 0',
                }, children: visibleChildren.map((child) => (_jsx(DropdownItem, { item: child, resolvedTextColor: resolvedTextColor, fontSize: fontSize, dropdownBg: dropdownBg, dropdownBorder: dropdownBorder, shadow: shadow, radius: radius, triggerMode: triggerMode, subMenuPosition: subMenuPosition, onLinkClick: onLinkClick }, child.id))) }))] }));
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
const TopLevelItem = ({ item, resolvedTextColor, resolvedHoverColor, fontSize, fontWeight, hoverEffect, showArrow, dropdownStyle, triggerMode, subMenuPosition, dropdownBg, dropdownBorder, shadow, radius, megaTheme, onLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openTimer = useRef(null);
    const closeTimer = useRef(null);
    const panelRef = useRef(null);
    const triggerRef = useRef(null);
    const wrapperRef = useRef(null);
    // Panel alignment: 'center' | 'left' | 'right'. Starts centered; the layout
    // effect flips it when the centered panel would overflow the viewport edge.
    const [panelAlign, setPanelAlign] = useState('center');
    const isClick = triggerMode === 'click';
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
    // Only used in hover mode; in click mode these are no-ops.
    const scheduleOpen = () => { if (isClick)
        return; cancelTimers(); openTimer.current = setTimeout(() => setIsOpen(true), 300); };
    const scheduleClose = () => { if (isClick)
        return; cancelTimers(); closeTimer.current = setTimeout(() => setIsOpen(false), 300); };
    useEffect(() => () => cancelTimers(), []);
    // Click mode: close on outside-click + Escape.
    useEffect(() => {
        if (!isClick || !isOpen)
            return;
        const onDown = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target))
                setIsOpen(false);
        };
        const onKey = (e) => { if (e.key === 'Escape')
            setIsOpen(false); };
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown', onKey);
        return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
    }, [isClick, isOpen]);
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
    return (_jsxs("div", { ref: wrapperRef, className: "relative", onMouseEnter: scheduleOpen, onMouseLeave: scheduleClose, children: [_jsxs("div", { ref: triggerRef, style: { display: 'flex', alignItems: 'center', gap: '0' }, children: [_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, className: hoverClass(hoverEffect), style: { ...triggerStyle, textDecoration: 'none' }, onMouseEnter: (e) => { cancelTimers(); if (hoverEffect === 'color')
                            e.currentTarget.style.color = resolvedHoverColor; }, onMouseLeave: (e) => { if (hoverEffect === 'color')
                            e.currentTarget.style.color = resolvedTextColor; }, children: getLabel(item) }), showArrow && (_jsx("button", { type: "button", "aria-expanded": isOpen, "aria-haspopup": megaProps ? 'dialog' : 'menu', "aria-label": isOpen ? `Collapse ${getLabel(item)}` : `Expand ${getLabel(item)}`, onClick: () => setIsOpen((v) => !v), style: { ...triggerStyle, padding: '8px 4px', cursor: 'pointer' }, children: _jsx(ChevronDown, { size: 14 }) }))] }), isOpen && (_jsx("div", { ref: panelRef, className: "absolute z-50 top-full", onMouseEnter: cancelTimers, onMouseLeave: scheduleClose, style: {
                    ...panelPositionStyle,
                    // For the default dropdown, this div IS the visible panel
                    // (background/border/shadow + inner padding). For the mega panel,
                    // CategoryMegaMenu renders its own visible panel, so this wrapper
                    // is transparent and just provides positioning.
                    ...(megaProps ? {} : {
                        backgroundColor: dropdownBg,
                        border: `1px solid ${dropdownBorder}`,
                        boxShadow: shadow,
                        borderRadius: radius,
                        padding: '8px',
                    }),
                    // top-full (from className) places the panel flush below the
                    // trigger. No margin/padding hacks needed — the panel's
                    // hoverable area starts exactly at the trigger's bottom edge,
                    // so there's no dead space to cause flicker.
                    minWidth: megaProps ? 'auto' : '220px',
                }, children: megaProps ? (_jsx(CategoryMegaMenu, { ...megaProps })) : (visibleChildren.map((child) => (_jsx(DropdownItem, { item: child, resolvedTextColor: resolvedTextColor, fontSize: fontSize, dropdownBg: dropdownBg, dropdownBorder: dropdownBorder, shadow: shadow, radius: radius, triggerMode: triggerMode, subMenuPosition: subMenuPosition, onLinkClick: onLinkClick }, child.id)))) }))] }));
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
    fields: accordionFields,
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
        triggerMode: 'hover',
        subMenuPosition: 'right',
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
        const { menuData, layout, alignment, hoverEffect, textColor, hoverColor, fontSize, fontWeight, showDropdownArrows, dropdownStyle, triggerMode, subMenuPosition, dropdownBackground, dropdownBorder, dropdownShadow, dropdownRadius, mobileBreakpoint, mobileSearchPlaceholder, theme, } = rawProps;
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
        return (_jsx("nav", { "aria-label": "Main", className: `flex ${LAYOUT[layout || 'horizontal']} ${ALIGN[alignment || 'center']}`, children: _jsx("div", { className: `flex ${LAYOUT[layout || 'horizontal']} gap-2`, children: visibleTopLevel.map((item) => (_jsx(TopLevelItem, { item: item, resolvedTextColor: resolvedTextColor, resolvedHoverColor: resolvedHoverColor, fontSize: fs, fontWeight: fw, hoverEffect: hoverEffect || 'underline', showArrow: !!showDropdownArrows, dropdownStyle: dropdownStyle || 'default', triggerMode: triggerMode || 'hover', subMenuPosition: subMenuPosition || 'right', dropdownBg: resolvedDropdownBg, dropdownBorder: resolvedDropdownBorder, shadow: shadow, radius: radius, megaTheme: megaTheme }, item.id))) }) }));
    },
};
export default MenuNavigation;
//# sourceMappingURL=MenuNavigation.js.map