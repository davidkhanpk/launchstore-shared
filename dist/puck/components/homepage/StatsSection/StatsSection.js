'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { SectionShell, sharedBackgroundFields, sharedSectionLayoutFields, RADIUS_OPTIONS, } from '../../../design-system';
/** Emoji icon dictionary for StatsSection icons. */
const ICON_EMOJI = {
    people: '👥', star: '⭐', trophy: '🏆', briefcase: '💼',
    globe: '🌍', package: '📦', target: '🎯', diamond: '💎',
    rocket: '🚀', check: '✓',
};
const ICON_OPTIONS = [
    { label: '👥 People', value: 'people' },
    { label: '⭐ Star', value: 'star' },
    { label: '🏆 Trophy', value: 'trophy' },
    { label: '💼 Briefcase', value: 'briefcase' },
    { label: '🌍 Globe', value: 'globe' },
    { label: '📦 Package', value: 'package' },
    { label: '🎯 Target', value: 'target' },
    { label: '💎 Diamond', value: 'diamond' },
    { label: '🚀 Rocket', value: 'rocket' },
    { label: '✓ Check', value: 'check' },
];
// Static lookups so Tailwind can see the classes at build time.
const RADIUS_CLASSES = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
    xl: 'rounded-xl', full: 'rounded-full',
};
const TEXT_ALIGN_CLASSES = {
    left: 'text-left', center: 'text-center', right: 'text-right',
};
// ── Stats array field (custom render — Puck array field) ────────────────────
const STATS_ARRAY_FIELDS = {
    number: { type: 'text', label: 'Number' },
    label: { type: 'text', label: 'Label' },
    description: { type: 'text', label: 'Description' },
    icon: { type: 'select', label: 'Icon', options: ICON_OPTIONS },
    iconColor: { type: 'text', label: 'Icon Color' },
};
/**
 * Custom array field renderer for `stats`. Minimal list editor that covers
 * add/remove/edit. The frontend editor may override this field with a richer
 * widget.
 */
function renderStatsArray({ value, onChange }) {
    const items = Array.isArray(value) ? value : [];
    const update = (index, key, v) => {
        const next = items.map((it, i) => (i === index ? { ...it, [key]: v } : it));
        onChange(next);
    };
    const remove = (index) => onChange(items.filter((_, i) => i !== index));
    const add = () => onChange([
        ...items,
        { id: String(Date.now()), number: '100+', label: 'New Stat', description: '', icon: 'star', iconColor: '#3b82f6' },
    ]);
    return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: "Stats" }), items.map((item, index) => (_jsxs("div", { style: { border: '1px solid #e5e7eb', borderRadius: '6px', padding: '8px', marginBottom: '8px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }, children: [_jsxs("span", { style: { fontSize: '12px', fontWeight: 600, color: '#6b7280' }, children: ["Stat ", index + 1] }), _jsx("button", { type: "button", onClick: () => remove(index), style: { background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '12px' }, children: "Remove" })] }), _jsx("input", { type: "text", placeholder: "Number", value: item.number || '', onChange: (e) => update(index, 'number', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Label", value: item.label || '', onChange: (e) => update(index, 'label', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Description", value: item.description || '', onChange: (e) => update(index, 'description', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("select", { value: item.icon || '', onChange: (e) => update(index, 'icon', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }, children: ICON_OPTIONS.map((opt) => _jsx("option", { value: opt.value, children: opt.label }, opt.value)) }), _jsx("input", { type: "text", placeholder: "Icon Color", value: item.iconColor || '', onChange: (e) => update(index, 'iconColor', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px' } })] }, item.id || index))), _jsx("button", { type: "button", onClick: add, style: { padding: '6px 12px', border: '1px dashed #9ca3af', borderRadius: '6px', background: '#f9fafb', cursor: 'pointer', fontSize: '13px', width: '100%' }, children: "+ Add Stat" })] }));
}
// ── Content fields ──────────────────────────────────────────────────────────
const contentFields = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    stats: { type: 'custom', label: '', render: renderStatsArray, arrayFields: STATS_ARRAY_FIELDS },
};
// ── Layout fields ───────────────────────────────────────────────────────────
const layoutFields = {
    columns: {
        type: 'select', label: 'Columns',
        options: [
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
        ],
    },
    showDividers: {
        type: 'radio', label: 'Show Dividers',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
};
// ── Color fields ────────────────────────────────────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    numberColor: { type: 'text', label: 'Number Color (hex or theme token)' },
    borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...layoutFields,
    ...colorFields,
    ...sharedBackgroundFields,
    ...sharedSectionLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const StatsSection = {
    label: 'Stats Section',
    fields: allFields,
    defaultProps: {
        title: 'Our Impact',
        subtitle: 'Trusted by thousands',
        columns: '4',
        stats: [
            { id: '1', number: '10K+', label: 'Happy Customers', icon: 'people', iconColor: '#3b82f6' },
            { id: '2', number: '500+', label: 'Products', icon: 'package', iconColor: '#3b82f6' },
            { id: '3', number: '50+', label: 'Countries', icon: 'globe', iconColor: '#3b82f6' },
            { id: '4', number: '99%', label: 'Satisfaction', icon: 'star', iconColor: '#3b82f6' },
        ],
        backgroundColor: '#ffffff',
        textColor: '#000000',
        numberColor: '#3b82f6',
        showDividers: true,
        borderRadius: 'md',
        // Background (shared section control model)
        backgroundScheme: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overlayColor: '',
        overlayOpacity: '0',
        gradientFrom: '',
        gradientTo: '',
        // Section layout (shared)
        density: 'comfortable',
        contentWidth: 'wide',
        contentAlign: 'center',
        verticalAlign: 'top',
        minHeight: '',
    },
    render: ({ title, subtitle, columns, stats, backgroundColor, textColor, numberColor, showDividers, borderRadius, backgroundScheme, backgroundImage, backgroundSize, backgroundPosition, overlayColor, overlayOpacity, gradientFrom, gradientTo, density, contentWidth, contentAlign, verticalAlign, minHeight, }) => {
        const [_hasAnimated, setHasAnimated] = useState(false);
        const sectionRef = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !_hasAnimated)
                    setHasAnimated(true);
            }, { threshold: 0.2 });
            if (sectionRef.current)
                observer.observe(sectionRef.current);
            return () => observer.disconnect();
        }, [_hasAnimated]);
        // When a scheme is active its text color flows from SectionShell; the
        // explicit textColor prop only applies on plain/gradient backgrounds.
        const fg = backgroundScheme ? undefined : (resolveColor(textColor) || textColor);
        const fgStyle = fg ? { color: fg } : undefined;
        return (_jsx("div", { ref: sectionRef, className: "w-full", children: _jsx(SectionShell, { backgroundScheme: backgroundScheme, backgroundImage: backgroundImage, backgroundSize: backgroundSize, backgroundPosition: backgroundPosition, overlayColor: overlayColor, overlayOpacity: overlayOpacity, gradientFrom: gradientFrom, gradientTo: gradientTo, backgroundColor: backgroundColor, density: density, contentWidth: contentWidth, contentAlign: contentAlign, verticalAlign: verticalAlign, minHeight: minHeight, className: "overflow-hidden", contentClassName: "px-4", children: _jsxs("div", { className: "w-full", children: [(title || subtitle) && (_jsxs("div", { className: `mb-12 ${TEXT_ALIGN_CLASSES[contentAlign || 'center'] || 'text-center'}`, children: [title && _jsx("h2", { className: "text-4xl font-bold mb-2", style: fgStyle, children: title }), subtitle && _jsx("p", { className: "text-lg opacity-75", style: fgStyle, children: subtitle })] })), _jsx("div", { className: `grid gap-6 md:gap-8 ${columns === '2' ? 'grid-cols-1 md:grid-cols-2' :
                                columns === '3' ? 'grid-cols-1 md:grid-cols-3' :
                                    'grid-cols-2 md:grid-cols-4'}`, children: (stats || []).map((stat, index) => {
                                const isLast = index === (stats || []).length - 1;
                                const borderClass = showDividers && !isLast ? 'md:border-r border-gray-200' : '';
                                return (_jsxs("div", { className: `relative ${borderClass} ${RADIUS_CLASSES[borderRadius || 'md'] || 'rounded-md'} p-6`, children: [_jsx("div", { className: "text-4xl mb-2", style: { color: stat.iconColor }, children: ICON_EMOJI[stat.icon] || '📊' }), _jsx("div", { className: "text-5xl font-bold mb-2", style: { color: numberColor }, children: stat.number }), _jsx("div", { className: "text-base font-semibold mb-1", style: fgStyle, children: stat.label }), stat.description && (_jsx("div", { className: "text-sm opacity-75", style: fgStyle, children: stat.description }))] }, stat.id));
                            }) })] }) }) }));
    },
};
export default StatsSection;
//# sourceMappingURL=StatsSection.js.map