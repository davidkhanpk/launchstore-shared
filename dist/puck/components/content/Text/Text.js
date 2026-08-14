import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, buildTypographyClasses, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    text: { type: 'textarea', label: 'Text' },
    richText: { type: 'radio', label: 'Rich Text', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    maxWidth: { type: 'text', label: 'Max Width (CSS value, e.g. 600px)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const Text = {
    label: 'Text',
    fields: allFields,
    defaultProps: {
        text: 'Add your text content here. You can write multiple paragraphs, include line breaks, and format your content as needed.',
        richText: false,
        maxWidth: '',
        ...defaultTypographyProps,
        lineHeight: 'relaxed',
        textColor: '#374151',
        ...defaultLayoutProps,
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { text, richText, maxWidth, fontSize, fontWeight, lineHeight, textAlign, textColor, marginTop, marginBottom, paddingX, paddingY, } = rawProps;
        const className = [
            buildTypographyClasses(rawProps),
            buildLayoutClasses(rawProps),
        ].filter(Boolean).join(' ');
        const style = {
            color: resolveColor(textColor) || '#374151',
            maxWidth: maxWidth || undefined,
        };
        const html = typeof text === 'string' ? text.replace(/\n/g, '<br />') : '';
        return (_jsx("div", { className: className, style: style, children: richText ? (_jsx("div", { className: "prose prose-gray max-w-none", dangerouslySetInnerHTML: { __html: html } })) : (_jsx("p", { style: { whiteSpace: 'pre-wrap' }, children: text })) }));
    },
};
export default Text;
//# sourceMappingURL=Text.js.map