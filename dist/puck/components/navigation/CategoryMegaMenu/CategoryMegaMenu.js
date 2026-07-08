import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
const FALLBACK = {
    background: '#ffffff',
    sectionHeading: '#111827',
    linkText: '#6b7280',
    linkHover: '#3b82f6',
    headingFontSize: '14px',
    headingFontWeight: 600,
    linkFontSize: '13px',
    linkFontWeight: 400,
    padding: '24px',
    columnGap: '32px',
    borderRadius: '8px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
};
const resolveTheme = (t) => ({
    background: resolveColor(t?.background || FALLBACK.background) || FALLBACK.background,
    sectionHeading: resolveColor(t?.sectionHeading || FALLBACK.sectionHeading) || FALLBACK.sectionHeading,
    linkText: resolveColor(t?.linkText || FALLBACK.linkText) || FALLBACK.linkText,
    linkHover: resolveColor(t?.linkHover || FALLBACK.linkHover) || FALLBACK.linkHover,
    headingFontSize: t?.headingFontSize || FALLBACK.headingFontSize,
    headingFontWeight: t?.headingFontWeight ?? FALLBACK.headingFontWeight,
    linkFontSize: t?.linkFontSize || FALLBACK.linkFontSize,
    linkFontWeight: t?.linkFontWeight ?? FALLBACK.linkFontWeight,
    padding: t?.padding || FALLBACK.padding,
    columnGap: t?.columnGap || FALLBACK.columnGap,
    borderRadius: t?.borderRadius || FALLBACK.borderRadius,
    boxShadow: t?.boxShadow || FALLBACK.boxShadow,
});
/**
 * Display-label fallback (T-072 MenuNavigation uses the same logic):
 * 1. item.label if non-empty
 * 2. item.url fallback
 * 3. 'Untitled'
 */
const getDisplayLabel = (item) => {
    if (item.label && item.label.trim() !== '')
        return item.label;
    return item.label || 'Untitled';
};
/**
 * CategoryMegaMenu renders a category with subcategories in a
 * configurable-column grid. Banner image, "View All" link, and
 * per-subcategory description snippet are all optional.
 *
 * Hover-state uses CSS variables for link color, kept compatible
 * with the original @headlessui/react Popover-based behavior.
 */
export const CategoryMegaMenu = ({ item, megaMenu, theme, onLinkClick, }) => {
    const [hoveredId, setHoveredId] = useState(null);
    const tokens = resolveTheme(theme);
    const categoryData = item.enrichedData?.category;
    if (!megaMenu.enabled || !categoryData)
        return _jsx(_Fragment, {});
    const columns = megaMenu.columns || 3;
    const subcategoryLimit = megaMenu.subcategoryLimit ?? 12;
    const showDescriptions = megaMenu.showDescriptions !== false;
    const showSubcategories = megaMenu.showSubcategories !== false;
    const subcategories = (categoryData.subcategories || []).slice(0, subcategoryLimit);
    const mainUrl = item.enrichedData?.resolvedUrl || item.url || (categoryData.handle ? `/categories/${categoryData.handle}` : '#');
    const containerStyle = {
        backgroundColor: tokens.background,
        borderRadius: tokens.borderRadius,
        boxShadow: tokens.boxShadow,
        padding: tokens.padding,
        minWidth: '600px',
        maxWidth: '900px',
    };
    const headingStyle = {
        color: tokens.sectionHeading,
        fontSize: tokens.headingFontSize,
        fontWeight: tokens.headingFontWeight,
        marginBottom: '12px',
    };
    const linkBase = {
        color: tokens.linkText,
        fontSize: tokens.linkFontSize,
        fontWeight: tokens.linkFontWeight,
        textDecoration: 'none',
        display: 'block',
        padding: '6px 0',
        transition: 'color 150ms ease',
    };
    return (_jsxs("div", { style: containerStyle, className: "mega-menu", children: [megaMenu.showImage && megaMenu.imageUrl && (_jsx("div", { style: { marginBottom: '20px' }, children: _jsx("img", { src: megaMenu.imageUrl, alt: item.label, style: { width: '100%', height: 'auto', borderRadius: tokens.borderRadius } }) })), _jsx("div", { style: { marginBottom: '16px' }, children: _jsxs("a", { href: mainUrl, style: {
                        ...headingStyle,
                        fontSize: '16px',
                        fontWeight: 700,
                        color: tokens.sectionHeading,
                    }, onMouseEnter: (e) => { e.currentTarget.style.color = tokens.linkHover; }, onMouseLeave: (e) => { e.currentTarget.style.color = tokens.sectionHeading; }, onClick: onLinkClick, children: ["View All ", getDisplayLabel(item)] }) }), showSubcategories && subcategories.length > 0 && (_jsxs(_Fragment, { children: [_jsx("h3", { style: headingStyle, children: "Categories" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: tokens.columnGap }, children: subcategories.map((subcategory) => (_jsxs("div", { children: [_jsx("a", { href: `/categories/${subcategory.handle}`, style: {
                                        ...linkBase,
                                        color: hoveredId === subcategory.id ? tokens.linkHover : tokens.linkText,
                                    }, onMouseEnter: () => setHoveredId(subcategory.id), onMouseLeave: () => setHoveredId((cur) => (cur === subcategory.id ? null : cur)), onClick: onLinkClick, children: subcategory.name }), showDescriptions && subcategory.description && (_jsxs("p", { style: { fontSize: '11px', color: '#9ca3af', marginTop: '2px', lineHeight: '1.4' }, children: [subcategory.description.substring(0, 60), subcategory.description.length > 60 ? '...' : ''] }))] }, subcategory.id))) })] }))] }));
};
export default CategoryMegaMenu;
//# sourceMappingURL=CategoryMegaMenu.js.map