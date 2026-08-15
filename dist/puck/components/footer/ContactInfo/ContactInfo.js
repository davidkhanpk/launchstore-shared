import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { SPACING_OPTIONS, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
// Inline SVG icons (replacing lucide-react) — MapPin / Phone / Mail / Clock
const ICONS = {
    map: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" }), _jsx("circle", { cx: "12", cy: "10", r: "3" })] })),
    phone: (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" }) })),
    mail: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }), _jsx("path", { d: "m22 4-10 8L2 4" })] })),
    clock: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] })),
};
const FONT = { sm: 'text-sm', base: 'text-base' };
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    showAddress: { type: 'radio', label: 'Show Address', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    address: { type: 'textarea', label: 'Address' },
    showPhone: { type: 'radio', label: 'Show Phone', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    phone: { type: 'text', label: 'Phone Number' },
    showEmail: { type: 'radio', label: 'Show Email', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    email: { type: 'text', label: 'Email Address' },
    showHours: { type: 'radio', label: 'Show Business Hours', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    hours: { type: 'textarea', label: 'Business Hours' },
    showIcons: { type: 'radio', label: 'Show Icons', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    layout: {
        type: 'select', label: 'Layout',
        options: [{ label: 'Stacked', value: 'stacked' }, { label: 'Grid', value: 'grid' }],
    },
};
// ── Style fields (component-specific colors/sizing) ─────────────────────────
const styleFields = {
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    iconColor: { type: 'text', label: 'Icon Color (hex or theme token)' },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
    },
    gap: { type: 'select', label: 'Spacing', options: SPACING_OPTIONS },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...styleFields,
    ...sharedLayoutFields,
};
// Legacy semantic gap values still resolve.
const LEGACY_GAP = { sm: '2', md: '4', lg: '6' };
const LAYOUT_CLASS = {
    stacked: 'flex flex-col', grid: 'grid grid-cols-1 md:grid-cols-2',
};
// ── Component ───────────────────────────────────────────────────────────────
export const ContactInfo = {
    label: 'Contact Info',
    fields: allFields,
    defaultProps: {
        showAddress: true,
        address: '123 Main Street\nCity, State 12345\nCountry',
        showPhone: true,
        phone: '+1 (555) 123-4567',
        showEmail: true,
        email: 'contact@example.com',
        showHours: true,
        hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: 10:00 AM - 4:00 PM',
        showIcons: true,
        layout: 'stacked',
        textColor: '#6b7280',
        iconColor: '#9ca3af',
        fontSize: 'sm',
        gap: 'md',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { showAddress, address, showPhone, phone, showEmail, email, showHours, hours, showIcons, layout, textColor, iconColor, fontSize, gap, marginTop, marginBottom, paddingX, paddingY, } = rawProps;
        const items = [];
        if (showAddress && address)
            items.push({ icon: ICONS.map, content: address, href: `https://maps.google.com/?q=${encodeURIComponent(address)}` });
        if (showPhone && phone)
            items.push({ icon: ICONS.phone, content: phone, href: `tel:${phone.replace(/\s/g, '')}` });
        if (showEmail && email)
            items.push({ icon: ICONS.mail, content: email, href: `mailto:${email}` });
        if (showHours && hours)
            items.push({ icon: ICONS.clock, content: hours, href: null });
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("div", { className: `${LAYOUT_CLASS[layout || 'stacked'] || 'flex flex-col'} ${`gap-${LEGACY_GAP[gap] ?? gap ?? '4'}`} ${layoutClasses}`, children: items.map((item, i) => {
                const content = (_jsxs("div", { className: "flex items-start gap-3", children: [showIcons && (_jsx("span", { className: "flex-shrink-0 mt-0.5", style: { color: resolveColor(iconColor) }, children: item.icon })), _jsx("div", { className: `${FONT[fontSize || 'sm'] || 'text-sm'} whitespace-pre-line`, style: { color: resolveColor(textColor) }, children: item.content })] }));
                return item.href ? (_jsx("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", className: "hover:opacity-70 transition-opacity", children: content }, i)) : (_jsx("div", { children: content }, i));
            }) }));
    },
};
export default ContactInfo;
//# sourceMappingURL=ContactInfo.js.map