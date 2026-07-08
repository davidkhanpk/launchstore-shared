'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { promotionalBannerGridFields } from './promotionalbannergrid.fields';
const SPACING_CLASSES = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
};
const RADIUS_CLASSES = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
};
const POSITION_CLASSES = {
    'top-left': 'items-start justify-start text-left',
    'top-center': 'items-start justify-center text-center',
    'top-right': 'items-start justify-end text-right',
    center: 'items-center justify-center text-center',
    'bottom-left': 'items-end justify-start text-left',
    'bottom-center': 'items-end justify-center text-center',
    'bottom-right': 'items-end justify-end text-right',
};
const HOVER_EFFECT_CLASSES = {
    zoom: 'group-hover:scale-110',
    overlay: '',
    lift: 'group-hover:-translate-y-2',
    none: '',
};
function getGridClasses(layout) {
    switch (layout) {
        case '3-column':
            return 'grid-cols-1 md:grid-cols-3';
        case '1-2-split':
        case '2-1-split':
            return 'grid-cols-1 md:grid-cols-3';
        case '2-column':
        default:
            return 'grid-cols-1 md:grid-cols-2';
    }
}
export const PromotionalBannerGrid = {
    label: 'Promotional Banner Grid',
    fields: promotionalBannerGridFields,
    defaultProps: {
        title: '',
        subtitle: '',
        layout: '2-column',
        spacing: 'md',
        banners: [
            {
                id: '1',
                title: 'New Collection',
                subtitle: 'Shop the latest styles',
                imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
                ctaText: 'Shop Now',
                ctaLink: '/store',
                overlayOpacity: 40,
                textColor: '#ffffff',
                textPosition: 'bottom-left',
            },
            {
                id: '2',
                title: 'Best Sellers',
                subtitle: 'Top-rated products',
                imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                ctaText: 'Explore',
                ctaLink: '/store',
                overlayOpacity: 40,
                textColor: '#ffffff',
                textPosition: 'bottom-left',
            },
        ],
        borderRadius: 'md',
        hoverEffect: 'zoom',
        minHeight: '300px',
    },
    render: ({ title, subtitle, layout, spacing, banners, borderRadius, hoverEffect, minHeight }) => (_jsx("div", { className: "w-full py-8 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [(title || subtitle) && (_jsxs("div", { className: "text-center mb-8", children: [title && _jsx("h2", { className: "text-3xl font-bold mb-2", children: title }), subtitle && _jsx("p", { className: "text-base text-gray-600", children: subtitle })] })), _jsx("div", { className: `grid ${getGridClasses(layout)} ${SPACING_CLASSES[spacing] || 'gap-4'}`, children: (banners || []).map((banner, index) => {
                        const isLarge = (layout === '1-2-split' && index === 0) ||
                            (layout === '2-1-split' && index === 2);
                        const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1';
                        const rowSpan = layout === '1-2-split' && index === 0
                            ? 'md:row-span-2'
                            : layout === '2-1-split' && index === 2
                                ? 'md:row-span-2'
                                : '';
                        const bannerId = banner.id || `banner-${index}`;
                        const overlayOpacity = typeof banner.overlayOpacity === 'number' ? banner.overlayOpacity : 40;
                        const textColor = banner.textColor || '#ffffff';
                        const textPosition = banner.textPosition || 'bottom-left';
                        return (_jsxs("a", { href: banner.ctaLink || '#', className: `group relative overflow-hidden ${RADIUS_CLASSES[borderRadius] || 'rounded-none'} ${colSpan} ${rowSpan} ${hoverEffect === 'lift' ? 'transition-transform duration-300' : ''}`, style: { minHeight }, children: [_jsx("div", { className: `absolute inset-0 bg-cover bg-center transition-transform duration-500 ${HOVER_EFFECT_CLASSES[hoverEffect] || ''}`, style: { backgroundImage: `url(${banner.imageUrl})` } }), _jsx("div", { className: `absolute inset-0 bg-black transition-opacity duration-300 ${hoverEffect === 'overlay' ? 'group-hover:opacity-60' : ''}`, style: { opacity: overlayOpacity / 100 } }), _jsx("div", { className: `relative h-full flex flex-col p-6 md:p-8 ${POSITION_CLASSES[textPosition] || POSITION_CLASSES['bottom-left']}`, children: _jsxs("div", { children: [_jsx("h3", { className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-2", style: { color: textColor }, children: banner.title }), _jsx("p", { className: "text-base md:text-lg mb-4", style: { color: textColor }, children: banner.subtitle }), _jsx("button", { className: "px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors inline-block", children: banner.ctaText })] }) })] }, bannerId));
                    }) })] }) })),
};
export default PromotionalBannerGrid;
//# sourceMappingURL=PromotionalBannerGrid.js.map