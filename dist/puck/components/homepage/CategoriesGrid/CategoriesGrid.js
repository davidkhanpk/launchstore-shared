import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { categoriesGridFields } from './categoriesgrid.fields';
const ASPECT = {
    square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-[16/9]',
};
const RADIUS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl',
};
const HOVER = {
    none: '', scale: 'hover:scale-105', shadow: 'hover:shadow-xl', lift: 'hover:-translate-y-2',
};
const CARD_STYLE = {
    minimal: 'bg-transparent',
    bordered: 'bg-white border-2 border-gray-200',
    shadow: 'bg-white shadow-lg',
    overlay: 'relative overflow-hidden',
};
function applyManualFilter(all, ids) {
    if (!ids?.length)
        return all;
    const set = new Set(ids.map(String));
    return all.filter((c) => set.has(c.id));
}
export const CategoriesGrid = {
    label: 'Categories Grid',
    fields: categoriesGridFields,
    defaultProps: {
        sectionTitle: 'Shop by Category',
        sectionSubtitle: 'Browse our popular categories',
        showTitle: true,
        columns: 4,
        columnsTablet: 3,
        columnsMobile: 2,
        gap: 24,
        showCategoryImage: true,
        showCategoryName: true,
        showProductCount: true,
        imageAspectRatio: 'square',
        backgroundColor: '#f9fafb',
        textColor: '#000000',
        cardStyle: 'shadow',
        borderRadius: 'lg',
        hoverEffect: 'scale',
        categorySource: 'all',
        selectedCategoryIds: [],
        loading: false,
        error: '',
    },
    render: ({ sectionTitle, sectionSubtitle, showTitle, columns, columnsTablet, columnsMobile, gap, showCategoryImage, showCategoryName, showProductCount, imageAspectRatio, backgroundColor, textColor, cardStyle, borderRadius, hoverEffect, categorySource, selectedCategoryIds, categories, loading, error, }) => {
        const isLoading = !!loading && (!categories || categories.length === 0);
        const errMsg = error || '';
        const empty = !isLoading && !errMsg && (!categories || categories.length === 0);
        // Apply source filter (manual only — 'all' and 'featured' are consumer concerns)
        let visible = categories || [];
        if (categorySource === 'manual') {
            visible = applyManualFilter(visible, selectedCategoryIds.map((x) => typeof x === 'string' ? x : x?.id).filter(Boolean));
        }
        const sectionStyle = { backgroundColor };
        // Section header JSX (used in 3 of 4 branches)
        const Header = showTitle ? (_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: textColor }, children: sectionTitle }), sectionSubtitle && _jsx("p", { className: "text-lg opacity-80", style: { color: textColor }, children: sectionSubtitle })] })) : null;
        // Responsive grid: uses columnsMobile on phones, columnsTablet on tablets,
        // columns on desktop. Implemented via inline CSS media queries so it
        // works regardless of the consumer's Tailwind breakpoint config.
        const mobileCols = columnsMobile || 2;
        const tabletCols = columnsTablet || 3;
        const desktopCols = columns || 4;
        const gridId = `catgrid-${desktopCols}-${tabletCols}-${mobileCols}`;
        const gridStyle = {
            display: 'grid',
            gridTemplateColumns: `repeat(${mobileCols}, minmax(0, 1fr))`,
            gap: `${gap}px`,
        };
        const responsiveStyle = (_jsx("style", { children: `
        @media (min-width: 768px) { .${gridId} { grid-template-columns: repeat(${tabletCols}, minmax(0, 1fr)) !important; } }
        @media (min-width: 1024px) { .${gridId} { grid-template-columns: repeat(${desktopCols}, minmax(0, 1fr)) !important; } }
      ` }));
        if (errMsg) {
            return (_jsx("div", { className: "categories-grid-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center text-red-500", children: _jsxs("p", { children: ["Error: ", errMsg] }) })] }) }));
        }
        if (isLoading) {
            return (_jsx("div", { className: "categories-grid-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: `grid ${gridId}`, style: gridStyle, children: [...Array(columns * 2)].map((_, i) => (_jsx("div", { className: "bg-gray-200 animate-pulse h-64 rounded-lg" }, i))) })] }) }));
        }
        if (empty) {
            return (_jsx("div", { className: "categories-grid-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center", style: { color: textColor }, children: _jsx("p", { children: "No categories found." }) })] }) }));
        }
        return (_jsxs("div", { className: "categories-grid-section py-16", style: sectionStyle, children: [responsiveStyle, _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: `grid ${gridId}`, style: gridStyle, children: visible.map((category) => {
                                // Inline SVG placeholder — no external dependency, never breaks.
                                // Shows the category initial on a gray background.
                                const placeholder = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f3f4f6"/><text x="50%" y="50%" font-size="48" fill="#d1d5db" text-anchor="middle" dy=".35em" font-family="sans-serif">${(category.name || '?')[0]}</text></svg>`)}`;
                                const imageSrc = category.image || placeholder;
                                return (_jsxs("a", { href: `/categories/${category.handle}`, className: `category-card ${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} ${HOVER[hoverEffect]} transition-all duration-300 overflow-hidden group cursor-pointer`, children: [showCategoryImage && (_jsxs("div", { className: `${ASPECT[imageAspectRatio]} overflow-hidden bg-gray-100`, children: [_jsx("img", { src: imageSrc, alt: category.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500", onError: (e) => { e.currentTarget.src = placeholder; } }), cardStyle === 'overlay' && _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })] })), _jsxs("div", { className: `p-4 ${cardStyle === 'overlay' ? 'absolute bottom-0 left-0 right-0 text-white' : ''}`, children: [showCategoryName && (_jsx("h3", { className: "text-xl font-bold mb-1", style: { color: cardStyle === 'overlay' ? '#ffffff' : textColor }, children: category.name })), showProductCount && (_jsxs("p", { className: "text-sm opacity-80", style: { color: cardStyle === 'overlay' ? '#ffffff' : textColor }, children: [category.productCount ?? 0, " products"] }))] })] }, category.id));
                            }) })] })] }));
    },
};
export default CategoriesGrid;
//# sourceMappingURL=CategoriesGrid.js.map