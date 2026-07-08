import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { mobileMenuFields } from './mobilemenu.fields';
import { resolveColor } from '../../../../theme/resolveColor';
import { MobileMenuItem } from './MobileMenuItem';
const X_SVG = ({ size = 24 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const STAGE_OPACITY = 0.5;
const FALLBACK = {
    background: '#ffffff',
    text: '#111827',
    border: '#e5e7eb',
    subText: '#6b7280',
    accordionBackground: '#f9fafb',
    titleFontSize: '16px',
    padding: '16px',
    itemPadding: '12px 16px',
};
const resolveTheme = (t) => ({
    background: resolveColor(t?.background || FALLBACK.background) || FALLBACK.background,
    text: resolveColor(t?.text || FALLBACK.text) || FALLBACK.text,
    border: resolveColor(t?.border || FALLBACK.border) || FALLBACK.border,
    subText: resolveColor(t?.subText || FALLBACK.subText) || FALLBACK.subText,
    accordionBackground: resolveColor(t?.accordionBackground || FALLBACK.accordionBackground) || FALLBACK.accordionBackground,
    titleFontSize: t?.titleFontSize || FALLBACK.titleFontSize,
    padding: t?.padding || FALLBACK.padding,
    itemPadding: t?.itemPadding || FALLBACK.itemPadding,
});
/**
 * Filter top-level items (no parent).
 * NOTE: EnrichedMenuItem has parentId; SharedMobileMenuItem doesn't.
 * We accept both: items with parentId are filtered.
 */
const filterTopLevel = (items) => items.filter((it) => !('parentId' in it) || !it.parentId || it.parentId == null);
export const MobileMenu = {
    label: 'Mobile Menu',
    fields: mobileMenuFields,
    defaultProps: {
        items: [],
        theme: {},
        isOpen: false,
        onClose: () => { },
        drawerMaxWidth: '400px',
        animationDirection: 'left',
    },
    render: (rawProps) => {
        const { items, theme, isOpen, onClose, drawerMaxWidth, animationDirection } = rawProps;
        const tokens = resolveTheme(theme);
        const visibleItems = filterTopLevel(items || []);
        const slideOn = 'translateX(0)';
        const slideOff = animationDirection === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        if (!isOpen)
            return _jsx(_Fragment, {});
        return (_jsxs("div", { className: "fixed inset-0 z-50", role: "dialog", "aria-modal": "true", "aria-label": "Mobile menu", children: [_jsx("div", { className: "fixed inset-0", style: { backgroundColor: '#000000', opacity: STAGE_OPACITY, transition: 'opacity 300ms' }, onClick: onClose, "aria-hidden": "true" }), _jsx("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: _jsx("div", { className: `absolute inset-y-0 ${animationDirection === 'right' ? 'right-0' : 'left-0'} flex max-w-full pointer-events-auto`, children: _jsxs("div", { style: {
                                width: '100vw',
                                maxWidth: drawerMaxWidth || '400px',
                                height: '100%',
                                backgroundColor: tokens.background,
                                color: tokens.text,
                                padding: tokens.padding,
                                display: 'flex',
                                flexDirection: 'column',
                                transform: isOpen ? slideOn : slideOff,
                                transition: 'transform 300ms ease-in-out',
                            }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${tokens.border}` }, children: [_jsx("div", { style: { fontSize: tokens.titleFontSize, fontWeight: 600 }, children: "Menu" }), _jsx("button", { type: "button", onClick: onClose, "aria-label": "Close menu", style: { background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: tokens.text }, children: _jsx(X_SVG, { size: 24 }) })] }), _jsx("div", { style: { flex: 1, overflowY: 'auto' }, children: visibleItems.map((item) => (_jsx(MobileMenuItem, { item: item, theme: tokens, onLinkClick: onClose }, item.id))) })] }) }) })] }));
    },
};
export default MobileMenu;
//# sourceMappingURL=MobileMenu.js.map