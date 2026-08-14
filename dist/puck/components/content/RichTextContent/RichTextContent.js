import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, sharedColorFields, buildTypographyClasses, buildLayoutClasses, buildColorClasses, defaultTypographyProps, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
const MAX_WIDTH_MAP = {
    'max-w-2xl': '640px',
    'max-w-3xl': '768px',
    'max-w-5xl': '1024px',
    'max-w-none': 'none',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    content: { type: 'textarea', label: 'Content (HTML allowed)' },
    maxWidth: {
        type: 'select', label: 'Max Width',
        options: [
            { label: 'Narrow (640px)', value: 'max-w-2xl' },
            { label: 'Normal (768px)', value: 'max-w-3xl' },
            { label: 'Wide (1024px)', value: 'max-w-5xl' },
            { label: 'Full Width', value: 'max-w-none' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const RichTextContent = {
    label: 'Rich Text Content',
    fields: allFields,
    defaultProps: {
        content: '',
        maxWidth: 'max-w-3xl',
        ...defaultTypographyProps,
        lineHeight: 'relaxed',
        textColor: '#374151',
        ...defaultLayoutProps,
        paddingY: 'lg',
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { content, maxWidth, fontSize, fontWeight, textAlign, textColor, lineHeight, marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, } = rawProps;
        // Guard against null/undefined/object content — prevents [object Object]
        const html = typeof content === 'string' ? content : '';
        const maxWidthCss = MAX_WIDTH_MAP[maxWidth] ?? '768px';
        const wrapperClassName = [
            'mx-auto px-4 sm:px-6',
            buildLayoutClasses(rawProps),
            buildColorClasses(rawProps),
        ].filter(Boolean).join(' ');
        const wrapperStyle = {
            maxWidth: maxWidthCss,
            margin: '0 auto',
            backgroundColor: backgroundColor && backgroundColor !== 'transparent'
                ? (resolveColor(backgroundColor) || backgroundColor)
                : undefined,
        };
        const proseClassName = [
            'prose prose-gray prose-lg max-w-none',
            buildTypographyClasses(rawProps),
        ].filter(Boolean).join(' ');
        const proseStyle = {
            color: resolveColor(textColor) || '#374151',
        };
        return (_jsx("div", { className: wrapperClassName, style: wrapperStyle, children: _jsx("div", { className: proseClassName, style: proseStyle, dangerouslySetInnerHTML: { __html: html } }) }));
    },
};
export default RichTextContent;
//# sourceMappingURL=RichTextContent.js.map