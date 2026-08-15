import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, buildLayoutClasses, buildTypographyClasses, TEXT_ALIGN_OPTIONS, FONT_SIZE_OPTIONS, LETTER_SPACING_OPTIONS, TEXT_TRANSFORM_OPTIONS, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
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
    textAlign: { type: 'select', label: 'Text Align', options: TEXT_ALIGN_OPTIONS },
    fontSize: { type: 'select', label: 'Font Size', options: FONT_SIZE_OPTIONS },
    letterSpacing: { type: 'select', label: 'Letter Spacing', options: LETTER_SPACING_OPTIONS },
    textTransform: { type: 'select', label: 'Text Transform', options: TEXT_TRANSFORM_OPTIONS },
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
        ...defaultTypographyProps,
        textAlign: 'center',
        fontSize: 'sm',
        textColor: '#6b7280',
        showDivider: true,
        dividerColor: '#e5e7eb',
        ...defaultLayoutProps,
        paddingY: 'md',
    },
    render: (rawProps) => {
        const { text, showYear, textAlign, textColor, showDivider, dividerColor, paddingY, marginTop, marginBottom, paddingX, } = rawProps;
        const currentYear = new Date().getFullYear();
        const typographyClasses = buildTypographyClasses(rawProps);
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("div", { className: `w-full ${layoutClasses}`, style: {
                borderTop: showDivider ? `1px solid ${resolveColor(dividerColor) || dividerColor}` : 'none',
            }, children: _jsx("div", { className: "container mx-auto", children: _jsxs("p", { className: `${typographyClasses}`, style: { color: resolveColor(textColor) }, children: [showYear && `© ${currentYear} `, text] }) }) }));
    },
};
export default Copyright;
//# sourceMappingURL=Copyright.js.map