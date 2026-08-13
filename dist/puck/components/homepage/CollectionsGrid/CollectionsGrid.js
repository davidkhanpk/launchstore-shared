import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, } from '../../../design-system';
// ── Flat field definitions (referenced by key inside the accordion) ─────────
const collectionsGridFields = {
    sectionTitle: { type: 'text', label: 'Section Title' },
    sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
    showTitle: { type: 'radio', label: 'Show Section Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    columns: { type: 'number', label: 'Columns (Desktop)', min: 2, max: 6 },
    columnsTablet: { type: 'number', label: 'Columns (Tablet)', min: 2, max: 4 },
    columnsMobile: { type: 'number', label: 'Columns (Mobile)', min: 1, max: 2 },
    gap: { type: 'number', label: 'Gap Between Items (px)', min: 0, max: 64 },
    showCollectionImage: { type: 'radio', label: 'Show Collection Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showCollectionTitle: { type: 'radio', label: 'Show Collection Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showProductCount: { type: 'radio', label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showDescription: { type: 'radio', label: 'Show Description', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    imageAspectRatio: {
        type: 'select', label: 'Image Aspect Ratio',
        options: [
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (4:3)', value: 'landscape' },
            { label: 'Wide (16:9)', value: 'wide' },
        ],
    },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    cardStyle: {
        type: 'select', label: 'Card Style',
        options: [
            { label: 'Minimal', value: 'minimal' },
            { label: 'Bordered', value: 'bordered' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Image Overlay', value: 'overlay' },
        ],
    },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
    hoverEffect: {
        type: 'select', label: 'Hover Effect',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Scale Up', value: 'scale' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Lift', value: 'lift' },
        ],
    },
    collectionSource: {
        type: 'select', label: 'Collection Source',
        options: [
            { label: 'All Collections', value: 'all' },
            { label: 'Manual Selection', value: 'manual' },
        ],
    },
    selectedCollectionIds: {
        type: 'array',
        label: 'Manual Collection IDs (when Source = Manual)',
        arrayFields: {
            id: { type: 'text', label: 'Collection ID' },
        },
        defaultItemProps: { id: '' },
    },
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Section',
            defaultOpen: true,
            fieldKeys: ['sectionTitle', 'sectionSubtitle', 'showTitle'],
        },
        {
            label: 'Grid',
            fieldKeys: ['columns', 'columnsTablet', 'columnsMobile', 'gap'],
        },
        {
            label: 'Collection Display',
            fieldKeys: ['showCollectionImage', 'showCollectionTitle', 'showProductCount', 'showDescription', 'imageAspectRatio'],
        },
        {
            label: 'Styling',
            fieldKeys: ['backgroundColor', 'textColor', 'cardStyle', 'borderRadius', 'hoverEffect'],
        },
        {
            label: 'Collection Source',
            fieldKeys: ['collectionSource', 'selectedCollectionIds'],
        },
    ],
    allFields: collectionsGridFields,
});
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
export const CollectionsGrid = {
    label: 'Collections Grid',
    fields: accordionFields,
    defaultProps: {
        sectionTitle: 'Shop by Collection',
        sectionSubtitle: 'Browse our curated collections',
        showTitle: true,
        columns: 4,
        columnsTablet: 3,
        columnsMobile: 2,
        gap: 24,
        showCollectionImage: true,
        showCollectionTitle: true,
        showProductCount: true,
        showDescription: false,
        imageAspectRatio: 'square',
        backgroundColor: '#f9fafb',
        textColor: '#000000',
        cardStyle: 'shadow',
        borderRadius: 'lg',
        hoverEffect: 'scale',
        collectionSource: 'all',
        selectedCollectionIds: [],
        loading: false,
        error: '',
    },
    render: ({ sectionTitle, sectionSubtitle, showTitle, columns, columnsTablet, columnsMobile, gap, showCollectionImage, showCollectionTitle, showProductCount, showDescription, imageAspectRatio, backgroundColor, textColor, cardStyle, borderRadius, hoverEffect, collectionSource, selectedCollectionIds, collections, loading, error, }) => {
        const isLoading = !!loading && (!collections || collections.length === 0);
        const errMsg = error || '';
        const empty = !isLoading && !errMsg && (!collections || collections.length === 0);
        let visible = collections || [];
        if (collectionSource === 'manual') {
            visible = applyManualFilter(visible, selectedCollectionIds.map((x) => typeof x === 'string' ? x : x?.id).filter(Boolean));
        }
        const sectionStyle = { backgroundColor: resolveColor(backgroundColor) || backgroundColor };
        const mobileCols = columnsMobile || 2;
        const tabletCols = columnsTablet || 3;
        const desktopCols = columns || 4;
        const gridId = `collgrid-${desktopCols}-${tabletCols}-${mobileCols}`;
        const gridStyle = {
            display: 'grid',
            gridTemplateColumns: `repeat(${mobileCols}, minmax(0, 1fr))`,
            gap: `${gap}px`,
        };
        const responsiveStyle = (_jsx("style", { children: `
        @media (min-width: 768px) { .${gridId} { grid-template-columns: repeat(${tabletCols}, minmax(0, 1fr)) !important; } }
        @media (min-width: 1024px) { .${gridId} { grid-template-columns: repeat(${desktopCols}, minmax(0, 1fr)) !important; } }
      ` }));
        const Header = showTitle ? (_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: textColor }, children: sectionTitle }), sectionSubtitle && _jsx("p", { className: "text-lg opacity-80", style: { color: textColor }, children: sectionSubtitle })] })) : null;
        if (errMsg) {
            return (_jsx("div", { className: "collections-grid-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center text-red-500", children: _jsxs("p", { children: ["Error: ", errMsg] }) })] }) }));
        }
        if (isLoading) {
            return (_jsx("div", { className: "collections-grid-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "grid", style: gridStyle, children: [...Array(columns * 2)].map((_, i) => (_jsx("div", { className: "bg-gray-200 animate-pulse h-64 rounded-lg" }, i))) })] }) }));
        }
        if (empty) {
            return (_jsx("div", { className: "collections-grid-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center", style: { color: textColor }, children: _jsx("p", { children: "No collections found." }) })] }) }));
        }
        return (_jsxs("div", { className: "collections-grid-section py-16", style: sectionStyle, children: [responsiveStyle, _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: `grid ${gridId}`, style: gridStyle, children: visible.map((collection) => {
                                const placeholder = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f3f4f6"/><text x="50%" y="50%" font-size="48" fill="#d1d5db" text-anchor="middle" dy=".35em" font-family="sans-serif">${(collection.title || '?')[0]}</text></svg>`)}`;
                                const imageSrc = collection.image || placeholder;
                                return (_jsxs("a", { href: `/collections/${collection.handle}`, className: `collection-card ${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} ${HOVER[hoverEffect]} transition-all duration-300 overflow-hidden group cursor-pointer`, children: [showCollectionImage && (_jsxs("div", { className: `${ASPECT[imageAspectRatio]} overflow-hidden`, children: [_jsx("img", { src: imageSrc, alt: collection.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500", onError: (e) => { e.currentTarget.src = placeholder; } }), cardStyle === 'overlay' && _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })] })), _jsxs("div", { className: `p-4 ${cardStyle === 'overlay' ? 'absolute bottom-0 left-0 right-0 text-white' : ''}`, children: [showCollectionTitle && (_jsx("h3", { className: "text-xl font-bold mb-1", style: { color: cardStyle === 'overlay' ? '#ffffff' : textColor }, children: collection.title })), showProductCount && (_jsxs("p", { className: "text-sm opacity-80", style: { color: cardStyle === 'overlay' ? '#ffffff' : textColor }, children: [collection.productCount ?? 0, " products"] })), showDescription && collection.description && (_jsx("p", { className: "text-sm opacity-70 mt-1 line-clamp-2", style: { color: cardStyle === 'overlay' ? '#ffffff' : textColor }, children: collection.description }))] })] }, collection.id));
                            }) })] })] }));
    },
};
export default CollectionsGrid;
//# sourceMappingURL=CollectionsGrid.js.map