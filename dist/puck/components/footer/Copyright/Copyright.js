import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    text: { type: 'textarea', label: 'Copyright Text' },
    showYear: { type: 'radio', label: 'Show Current Year', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showDivider: { type: 'radio', label: 'Show Top Divider', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    dividerColor: { type: 'text', label: 'Divider Color (hex or theme token)' },
};
// ── Typography fields (component-specific alignment + shared) ───────────────
const typographyFields = {
    alignment: {
        type: 'select', label: 'Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [
            { label: 'Extra Small', value: 'xs' },
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...typographyFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const Copyright = {
    label: 'Copyright',
    fields: allFields,
    defaultProps: {
        text: 'All rights reserved.',
        showYear: true,
        alignment: 'center',
        ...defaultTypographyProps,
        fontSize: 'sm',
        textColor: '#6b7280',
        showDivider: true,
        dividerColor: '#e5e7eb',
        ...defaultLayoutProps,
        paddingY: 'md',
    },
    render: (rawProps) => {
        const { text, showYear, alignment, fontSize, textColor, showDivider, dividerColor, paddingY, marginTop, marginBottom, paddingX, } = rawProps;
        const currentYear = new Date().getFullYear();
        const fsClass = fontSize === 'xs' ? 'text-xs' : fontSize === 'sm' ? 'text-sm' : 'text-base';
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("div", { className: `w-full ${layoutClasses}`, style: {
                borderTop: showDivider ? `1px solid ${resolveColor(dividerColor) || dividerColor}` : 'none',
            }, children: _jsx("div", { className: "container mx-auto", children: _jsxs("p", { className: `${ALIGN[alignment || 'center'] || 'text-center'} ${fsClass}`, style: { color: resolveColor(textColor) }, children: [showYear && `© ${currentYear} `, text] }) }) }));
    },
};
export default Copyright;
//# sourceMappingURL=Copyright.js.map