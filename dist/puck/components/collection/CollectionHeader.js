import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const collectionHeaderFields = {
    showTitle: { type: 'radio', label: 'Show Collection Title', options: RADIO_YES_NO },
    showDescription: { type: 'radio', label: 'Show Description', options: RADIO_YES_NO },
    showBanner: { type: 'radio', label: 'Show Banner Image', options: RADIO_YES_NO },
    showProductCount: { type: 'radio', label: 'Show Product Count', options: RADIO_YES_NO },
    titleSize: { type: 'select', label: 'Title Size', options: [{ label: '2XL', value: '2xl' }, { label: '3XL', value: '3xl' }, { label: '4XL', value: '4xl' }] },
    alignment: { type: 'select', label: 'Text Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    bannerHeight: { type: 'select', label: 'Banner Height', options: [{ label: 'Small (200px)', value: 'sm' }, { label: 'Medium (300px)', value: 'md' }, { label: 'Large (400px)', value: 'lg' }] },
};
const Chevron = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
const titleSizeClasses = { '2xl': 'text-2xl md:text-3xl', '3xl': 'text-3xl md:text-4xl', '4xl': 'text-4xl md:text-5xl' };
const alignmentClasses = { left: 'text-left', center: 'text-center', right: 'text-right' };
const bannerHeightClasses = { sm: 'h-48', md: 'h-64', lg: 'h-80' };
export const CollectionHeader = {
    label: 'Collection Header',
    fields: collectionHeaderFields,
    defaultProps: { showTitle: true, showDescription: true, showBanner: true, showProductCount: true, titleSize: '3xl', alignment: 'center', bannerHeight: 'md' },
    render: (raw) => {
        const { showTitle, showDescription, showBanner, showProductCount, titleSize = '3xl', alignment = 'center', bannerHeight = 'md' } = raw;
        const title = raw.title ?? 'Summer Collection';
        const description = raw.description ?? 'Discover our curated selection of premium products for the season.';
        const bannerUrl = raw.bannerUrl ?? '';
        const productCount = raw.productCount ?? 24;
        const breadcrumbsHref = raw.breadcrumbsHref ?? '/';
        const collectionsHref = raw.collectionsHref ?? '/collections';
        return (_jsxs("div", { className: "mb-8", children: [showBanner && bannerUrl && (_jsxs("div", { className: `relative ${bannerHeightClasses[bannerHeight]} mb-6 rounded-lg overflow-hidden`, children: [_jsx("img", { src: bannerUrl, alt: title, className: "absolute inset-0 w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }), _jsxs("div", { className: `absolute inset-0 flex flex-col justify-end p-8 ${alignmentClasses[alignment]}`, children: [showTitle && _jsx("h1", { className: `${titleSizeClasses[titleSize]} font-bold text-white mb-2`, children: title }), showProductCount && _jsxs("p", { className: "text-white/90", children: [productCount, " products"] })] })] })), !showBanner && (_jsxs("div", { className: alignmentClasses[alignment], children: [showTitle && _jsx("h1", { className: `${titleSizeClasses[titleSize]} font-bold text-gray-900 mb-4`, children: title }), showDescription && description && _jsx("p", { className: "text-gray-600 max-w-3xl mx-auto mb-4", children: description }), showProductCount && _jsxs("p", { className: "text-gray-500 text-sm", children: [productCount, " products available"] })] })), _jsxs("nav", { className: "flex items-center gap-2 text-sm text-gray-600 mt-4", children: [_jsx("a", { href: breadcrumbsHref, className: "hover:text-gray-900", children: "Home" }), _jsx(Chevron, {}), _jsx("a", { href: collectionsHref, className: "hover:text-gray-900", children: "Collections" }), _jsx(Chevron, {}), _jsx("span", { className: "text-gray-900 font-medium", children: title })] })] }));
    },
};
export default CollectionHeader;
//# sourceMappingURL=CollectionHeader.js.map