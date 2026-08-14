import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { buildColorClasses, } from '../../../design-system';
const ArrowIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", style: { width: '20px', height: '20px' }, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" }) }));
const SIZE_MAP = {
    sm: { padding: '8px 16px', fontSize: '0.875rem' },
    md: { padding: '12px 24px', fontSize: '1rem' },
    lg: { padding: '16px 32px', fontSize: '1.125rem' },
    xl: { padding: '20px 40px', fontSize: '1.25rem' },
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    text: { type: 'text', label: 'Button Text' },
    url: { type: 'text', label: 'URL' },
    openInNewTab: { type: 'radio', label: 'Open in New Tab', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    variant: {
        type: 'select', label: 'Variant',
        options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Danger', value: 'danger' },
        ],
    },
    size: {
        type: 'select', label: 'Size',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'XL', value: 'xl' },
        ],
    },
    fullWidth: { type: 'radio', label: 'Full Width', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showIcon: { type: 'radio', label: 'Show Icon', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    iconPosition: {
        type: 'select', label: 'Icon Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
    },
};
// ── Colors fields (component-specific — Button has more color options than shared) ──
const buttonColorFields = {
    backgroundColor: { type: 'text', label: 'Background Color' },
    textColor: { type: 'text', label: 'Text Color' },
    borderColor: { type: 'text', label: 'Border Color' },
    hoverBackgroundColor: { type: 'text', label: 'Hover Background' },
    hoverTextColor: { type: 'text', label: 'Hover Text Color' },
    borderRadius: { type: 'select', label: 'Border Radius', options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
            { label: 'Full', value: 'full' },
        ] },
    shadow: { type: 'select', label: 'Shadow', options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
            { label: 'XL', value: 'xl' },
        ] },
};
const layoutFields = {
    textAlign: { type: 'select', label: 'Alignment', options: [
            { label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' },
        ] },
    marginTop: { type: 'select', label: 'Margin Top', options: [
            { label: 'None', value: 'none' }, { label: 'XS', value: 'xs' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' },
        ] },
    marginBottom: { type: 'select', label: 'Margin Bottom', options: [
            { label: 'None', value: 'none' }, { label: 'XS', value: 'xs' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' },
        ] },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...buttonColorFields,
    ...layoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const Button = {
    label: 'Button',
    fields: allFields,
    defaultProps: {
        text: 'Click Me',
        url: '#',
        openInNewTab: false,
        variant: 'primary',
        size: 'md',
        fullWidth: false,
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        borderColor: '#3b82f6',
        hoverBackgroundColor: '#2563eb',
        hoverTextColor: '#ffffff',
        showIcon: false,
        iconPosition: 'right',
        borderRadius: 'md',
        shadow: 'md',
        textAlign: 'left',
        marginTop: 'none',
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { text, url, openInNewTab, variant, size, fullWidth, backgroundColor, textColor, borderColor, hoverBackgroundColor, hoverTextColor, showIcon, iconPosition, borderRadius, shadow, textAlign, marginTop, marginBottom, } = rawProps;
        const sizeStyle = SIZE_MAP[size] || SIZE_MAP.md;
        const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
        const shadowMap = {
            none: 'none', sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.1)',
            lg: '0 10px 15px rgba(0,0,0,0.1)', xl: '0 20px 25px rgba(0,0,0,0.15)',
        };
        // Button spacing field values are semantic (none/xs/sm/md/lg/xl), not Tailwind
        // scale numbers, so map them to Tailwind classes here without changing the field.
        const SPACING_CLASS = {
            none: '0', xs: '1', sm: '2', md: '4', lg: '6', xl: '8',
        };
        const marginClasses = [
            marginTop ? `mt-${SPACING_CLASS[marginTop] ?? marginTop}` : '',
            marginBottom ? `mb-${SPACING_CLASS[marginBottom] ?? marginBottom}` : '',
        ].filter(Boolean).join(' ');
        const buttonStyle = {
            display: fullWidth ? 'flex' : 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            padding: sizeStyle.padding,
            fontSize: sizeStyle.fontSize,
            boxShadow: shadowMap[shadow || 'none'] || 'none',
            backgroundColor: resolveColor(backgroundColor) || '#3b82f6',
            color: resolveColor(textColor) || '#ffffff',
            borderWidth: variant === 'outline' ? '2px' : '0',
            borderColor: resolveColor(borderColor) || '#3b82f6',
            borderStyle: variant === 'outline' ? 'solid' : undefined,
            textDecoration: 'none',
            cursor: 'pointer',
            justifyContent: fullWidth ? 'center' : undefined,
            width: fullWidth ? '100%' : undefined,
            transition: 'transform 0.2s, background-color 0.2s',
        };
        const buttonClassName = [
            'btn-shared',
            buildColorClasses({ borderRadius }),
        ].filter(Boolean).join(' ');
        const hoverCss = `.btn-shared:hover { background-color: ${resolveColor(hoverBackgroundColor) || '#2563eb'} !important; color: ${resolveColor(hoverTextColor) || '#fff'} !important; }`;
        return (_jsxs("div", { className: marginClasses, style: { display: 'flex', justifyContent: justifyMap[textAlign || 'left'] || 'flex-start' }, children: [_jsxs("a", { href: url || '#', target: openInNewTab ? '_blank' : undefined, rel: openInNewTab ? 'noopener noreferrer' : undefined, className: buttonClassName, style: buttonStyle, onMouseEnter: (e) => { e.currentTarget.style.transform = 'scale(1.05)'; }, onMouseLeave: (e) => { e.currentTarget.style.transform = 'scale(1)'; }, children: [showIcon && iconPosition === 'left' && _jsx(ArrowIcon, {}), text, showIcon && iconPosition === 'right' && _jsx(ArrowIcon, {})] }), _jsx("style", { dangerouslySetInnerHTML: { __html: hoverCss } })] }));
    },
};
export default Button;
//# sourceMappingURL=Button.js.map