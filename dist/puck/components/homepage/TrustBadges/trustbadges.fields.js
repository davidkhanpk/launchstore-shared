/**
 * TrustBadges icon dictionary (13 icons, picked from storefront's canonical
 * set as the live renderer's choice — covers e-commerce trust signals
 * broadly). Drift decision: storefront had 13, frontend had 10 (missing
 * card, shield, refresh, support). Shared uses 13 = superset.
 */
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
const BADGES_ARRAY_FIELDS = {
    icon: { type: 'select', label: 'Icon', options: ICON_OPTIONS },
    title: { type: 'text', label: 'Title' },
    description: { type: 'text', label: 'Description' },
    iconColor: { type: 'text', label: 'Icon Color' },
};
export const trustBadgesFields = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    layout: {
        type: 'select',
        label: 'Layout',
        options: [
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Grid', value: 'grid' },
            { label: 'Stacked', value: 'stacked' },
        ],
    },
    columns: {
        type: 'select',
        label: 'Columns',
        options: [
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
        ],
    },
    alignment: {
        type: 'select',
        label: 'Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
    badges: {
        type: 'array',
        label: 'Badges',
        arrayFields: BADGES_ARRAY_FIELDS,
    },
    backgroundColor: { type: 'text', label: 'Background Color' },
    textColor: { type: 'text', label: 'Text Color' },
    spacing: {
        type: 'select',
        label: 'Spacing',
        options: [
            { label: 'Compact', value: 'compact' },
            { label: 'Normal', value: 'normal' },
            { label: 'Spacious', value: 'spacious' },
        ],
    },
    showBorder: {
        type: 'radio',
        label: 'Show Border',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    borderRadius: {
        type: 'select',
        label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
        ],
    },
};
//# sourceMappingURL=trustbadges.fields.js.map