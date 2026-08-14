'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const TEXT_POSITION_OPTIONS = [
    { label: 'Top Left', value: 'top-left' },
    { label: 'Top Center', value: 'top-center' },
    { label: 'Top Right', value: 'top-right' },
    { label: 'Center', value: 'center' },
    { label: 'Bottom Left', value: 'bottom-left' },
    { label: 'Bottom Center', value: 'bottom-center' },
    { label: 'Bottom Right', value: 'bottom-right' },
];
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
// ── Banners array field (custom render — Puck array field) ──────────────────
const BANNER_ARRAY_FIELDS = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    imageUrl: { type: 'text', label: 'Image URL' },
    ctaText: { type: 'text', label: 'CTA Text' },
    ctaLink: { type: 'text', label: 'CTA Link' },
    overlayOpacity: { type: 'number', label: 'Overlay Opacity', min: 0, max: 100 },
    textColor: { type: 'text', label: 'Text Color' },
    textPosition: { type: 'select', label: 'Text Position', options: TEXT_POSITION_OPTIONS },
};
/**
 * Custom array field renderer for `banners`. Minimal list editor that covers
 * add/remove/edit. The frontend editor may override this field with a richer
 * widget.
 */
function renderBannersArray({ value, onChange }) {
    const items = Array.isArray(value) ? value : [];
    const update = (index, key, v) => {
        const next = items.map((it, i) => (i === index ? { ...it, [key]: v } : it));
        onChange(next);
    };
    const remove = (index) => onChange(items.filter((_, i) => i !== index));
    const add = () => onChange([
        ...items,
        {
            id: String(Date.now()),
            title: 'New Banner',
            subtitle: '',
            imageUrl: '',
            ctaText: 'Shop Now',
            ctaLink: '/store',
            overlayOpacity: 40,
            textColor: '#ffffff',
            textPosition: 'bottom-left',
        },
    ]);
    return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: "Banners" }), items.map((item, index) => (_jsxs("div", { style: { border: '1px solid #e5e7eb', borderRadius: '6px', padding: '8px', marginBottom: '8px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }, children: [_jsxs("span", { style: { fontSize: '12px', fontWeight: 600, color: '#6b7280' }, children: ["Banner ", index + 1] }), _jsx("button", { type: "button", onClick: () => remove(index), style: { background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '12px' }, children: "Remove" })] }), _jsx("input", { type: "text", placeholder: "Title", value: item.title || '', onChange: (e) => update(index, 'title', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Subtitle", value: item.subtitle || '', onChange: (e) => update(index, 'subtitle', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Image URL", value: item.imageUrl || '', onChange: (e) => update(index, 'imageUrl', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "CTA Text", value: item.ctaText || '', onChange: (e) => update(index, 'ctaText', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "CTA Link", value: item.ctaLink || '', onChange: (e) => update(index, 'ctaLink', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "number", placeholder: "Overlay Opacity", value: item.overlayOpacity ?? '', min: 0, max: 100, onChange: (e) => update(index, 'overlayOpacity', e.target.value ? Number(e.target.value) : 0), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Text Color", value: item.textColor || '', onChange: (e) => update(index, 'textColor', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("select", { value: item.textPosition || '', onChange: (e) => update(index, 'textPosition', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px' }, children: TEXT_POSITION_OPTIONS.map((opt) => _jsx("option", { value: opt.value, children: opt.label }, opt.value)) })] }, item.id || index))), _jsx("button", { type: "button", onClick: add, style: { padding: '6px 12px', border: '1px dashed #9ca3af', borderRadius: '6px', background: '#f9fafb', cursor: 'pointer', fontSize: '13px', width: '100%' }, children: "+ Add Banner" })] }));
}
// ── Content fields ──────────────────────────────────────────────────────────
const contentFields = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    banners: { type: 'custom', label: '', render: renderBannersArray, arrayFields: BANNER_ARRAY_FIELDS },
};
// ── Layout fields ───────────────────────────────────────────────────────────
const layoutFields = {
    layout: {
        type: 'select', label: 'Layout',
        options: [
            { label: '2 Column', value: '2-column' },
            { label: '3 Column', value: '3-column' },
            { label: '1-2 Split', value: '1-2-split' },
            { label: '2-1 Split', value: '2-1-split' },
        ],
    },
    spacing: {
        type: 'select', label: 'Spacing',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
        ],
    },
    hoverEffect: {
        type: 'select', label: 'Hover Effect',
        options: [
            { label: 'Zoom', value: 'zoom' },
            { label: 'Overlay', value: 'overlay' },
            { label: 'Lift', value: 'lift' },
            { label: 'None', value: 'none' },
        ],
    },
    minHeight: { type: 'text', label: 'Min Height (e.g. 300px)' },
};
// ── Color fields ────────────────────────────────────────────────────────────
const colorFields = {
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...layoutFields,
    ...colorFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const PromotionalBannerGrid = {
    label: 'Promotional Banner Grid',
    fields: allFields,
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