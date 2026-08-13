'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordionFields } from '../../../design-system';
/**
 * TrustBadges emoji icon dictionary (13 icons — see fields config below for
 * the canonical list). Drift decision: storefront had 13, frontend had 10
 * (missing card, shield, refresh, support). Shared uses 13 = superset.
 */
const ICON_EMOJI = {
    truck: '🚚', lock: '🔒', return: '↩️', star: '⭐',
    card: '💳', package: '📦', check: '✓', chat: '💬',
    globe: '🌍', lightning: '⚡', shield: '🛡️', refresh: '🔄',
    support: '🎧',
};
const ICON_OPTIONS = [
    { label: '🚚 Truck (Free Shipping)', value: 'truck' },
    { label: '🔒 Lock (Secure)', value: 'lock' },
    { label: '↩️ Return (Easy Returns)', value: 'return' },
    { label: '⭐ Star (Quality)', value: 'star' },
    { label: '💳 Card (Payment)', value: 'card' },
    { label: '📦 Package', value: 'package' },
    { label: '✓ Check (Verified)', value: 'check' },
    { label: '💬 Chat (Support)', value: 'chat' },
    { label: '🌍 Globe (Worldwide)', value: 'globe' },
    { label: '⚡ Lightning (Fast)', value: 'lightning' },
    { label: '🛡️ Shield (Protected)', value: 'shield' },
    { label: '🔄 Refresh (Update)', value: 'refresh' },
    { label: '🎧 Support (24/7)', value: 'support' },
];
// Static lookup for responsive column classes so Tailwind can see them
// at build time (dynamic `md:grid-cols-${n}` template literals are purged).
const COLS = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-4',
    '5': 'md:grid-cols-5',
};
const SPACING_CLASSES = {
    compact: 'py-4 px-4',
    normal: 'py-8 px-6',
    spacious: 'py-12 px-8',
};
const RADIUS_CLASSES = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const ALIGNMENT_CLASSES = {
    left: 'text-left', center: 'text-center', right: 'text-right',
};
// ── Badges array field (custom render — Puck array field) ───────────────────
// Sub-field schema mirrors the original BADGES_ARRAY_FIELDS.
const BADGES_ARRAY_FIELDS = {
    icon: { type: 'select', label: 'Icon', options: ICON_OPTIONS },
    title: { type: 'text', label: 'Title' },
    description: { type: 'text', label: 'Description' },
    iconColor: { type: 'text', label: 'Icon Color' },
};
/**
 * Custom array field renderer for `badges`. Puck's ArrayField widget is the
 * ideal UI but its React component isn't exported from `@puckeditor/core` in
 * all builds, so this minimal list editor covers add/remove/edit. The
 * frontend editor may still override this field with a richer widget.
 */
function renderBadgesArray({ value, onChange }) {
    const items = Array.isArray(value) ? value : [];
    const update = (index, key, v) => {
        const next = items.map((it, i) => (i === index ? { ...it, [key]: v } : it));
        onChange(next);
    };
    const remove = (index) => onChange(items.filter((_, i) => i !== index));
    const add = () => onChange([
        ...items,
        { id: String(Date.now()), icon: 'star', title: 'New Badge', description: '', iconColor: '#3b82f6' },
    ]);
    return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: "Badges" }), items.map((item, index) => (_jsxs("div", { style: { border: '1px solid #e5e7eb', borderRadius: '6px', padding: '8px', marginBottom: '8px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }, children: [_jsxs("span", { style: { fontSize: '12px', fontWeight: 600, color: '#6b7280' }, children: ["Badge ", index + 1] }), _jsx("button", { type: "button", onClick: () => remove(index), style: { background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '12px' }, children: "Remove" })] }), _jsx("select", { value: item.icon || '', onChange: (e) => update(index, 'icon', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }, children: ICON_OPTIONS.map((opt) => _jsx("option", { value: opt.value, children: opt.label }, opt.value)) }), _jsx("input", { type: "text", placeholder: "Title", value: item.title || '', onChange: (e) => update(index, 'title', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Description", value: item.description || '', onChange: (e) => update(index, 'description', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' } }), _jsx("input", { type: "text", placeholder: "Icon Color", value: item.iconColor || '', onChange: (e) => update(index, 'iconColor', e.target.value), style: { width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px' } })] }, item.id || index))), _jsx("button", { type: "button", onClick: add, style: { padding: '6px 12px', border: '1px dashed #9ca3af', borderRadius: '6px', background: '#f9fafb', cursor: 'pointer', fontSize: '13px', width: '100%' }, children: "+ Add Badge" })] }));
}
// ── Content fields ──────────────────────────────────────────────────────────
const contentFields = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    badges: { type: 'custom', label: '', render: renderBadgesArray, arrayFields: BADGES_ARRAY_FIELDS },
};
// ── Layout fields ───────────────────────────────────────────────────────────
const layoutFields = {
    layout: {
        type: 'select', label: 'Layout',
        options: [
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Grid', value: 'grid' },
            { label: 'Stacked', value: 'stacked' },
        ],
    },
    columns: {
        type: 'select', label: 'Columns',
        options: [
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
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
    spacing: {
        type: 'select', label: 'Spacing',
        options: [
            { label: 'Compact', value: 'compact' },
            { label: 'Normal', value: 'normal' },
            { label: 'Spacious', value: 'spacious' },
        ],
    },
    showBorder: {
        type: 'radio', label: 'Show Border',
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
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['title', 'subtitle', 'badges'],
        },
        {
            label: 'Layout',
            fieldKeys: ['layout', 'columns', 'alignment', 'spacing', 'showBorder'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'textColor', 'borderRadius'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const TrustBadges = {
    label: 'Trust Badges',
    fields: accordionFields,
    defaultProps: {
        title: 'Why Shop With Us',
        subtitle: '',
        layout: 'horizontal',
        columns: '4',
        alignment: 'center',
        badges: [
            { id: '1', icon: 'truck', title: 'Free Shipping', description: 'On orders over $50', iconColor: '#3b82f6' },
            { id: '2', icon: 'shield', title: 'Secure Checkout', description: '100% secure payment', iconColor: '#3b82f6' },
            { id: '3', icon: 'refresh', title: 'Easy Returns', description: '30-day return policy', iconColor: '#3b82f6' },
            { id: '4', icon: 'support', title: '24/7 Support', description: 'Here when you need us', iconColor: '#3b82f6' },
        ],
        backgroundColor: '#ffffff',
        textColor: '#1f2937',
        spacing: 'normal',
        showBorder: true,
        borderRadius: 'none',
    },
    render: ({ title, subtitle, layout, columns, alignment, badges, backgroundColor, textColor, spacing, showBorder, borderRadius, }) => (_jsx("div", { style: { backgroundColor }, className: `w-full ${SPACING_CLASSES[spacing] || 'py-8 px-6'} ${showBorder ? 'border-t border-b border-gray-200' : ''}`, children: _jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [(title || subtitle) && (_jsxs("div", { className: `mb-8 ${ALIGNMENT_CLASSES[alignment] || 'text-center'}`, children: [title && _jsx("h2", { className: "text-2xl font-bold mb-2", style: { color: textColor }, children: title }), subtitle && _jsx("p", { className: "text-base opacity-75", style: { color: textColor }, children: subtitle })] })), _jsx("div", { className: `grid gap-6 ${layout === 'horizontal'
                        ? `grid-cols-1 ${COLS[columns] || COLS['4']}`
                        : layout === 'grid'
                            ? `grid-cols-2 ${COLS[columns] || COLS['4']}`
                            : 'grid-cols-1 max-w-md mx-auto'}`, children: (badges || []).map((badge) => (_jsxs("div", { className: `flex ${layout === 'stacked' ? 'flex-row items-center' : 'flex-col items-center'} ${ALIGNMENT_CLASSES[alignment] || 'text-center'} ${RADIUS_CLASSES[borderRadius] || 'rounded-none'} p-4 transition-transform hover:scale-105`, children: [_jsx("div", { className: `text-4xl ${layout === 'stacked' ? 'mr-4' : 'mb-3'}`, style: { color: badge.iconColor }, children: ICON_EMOJI[badge.icon] || '✓' }), _jsxs("div", { className: layout === 'stacked' ? 'flex-1' : '', children: [_jsx("h3", { className: "font-semibold text-base mb-1", style: { color: textColor }, children: badge.title }), _jsx("p", { className: "text-sm opacity-75", style: { color: textColor }, children: badge.description })] })] }, badge.id))) })] }) })),
};
export default TrustBadges;
//# sourceMappingURL=TrustBadges.js.map