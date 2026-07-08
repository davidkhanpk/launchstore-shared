import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { textFields } from './text.fields';
const FONT_SIZE = {
    xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl',
};
const WEIGHT = {
    light: 'font-light', normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const LINE_HEIGHT = {
    tight: 'leading-tight', snug: 'leading-snug', normal: 'leading-normal', relaxed: 'leading-relaxed', loose: 'leading-loose',
};
const ALIGN = {
    left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify',
};
export const Text = {
    label: 'Text',
    fields: textFields,
    defaultProps: {
        text: 'Add your text content here. You can write multiple paragraphs, include line breaks, and format your content as needed.',
        richText: false,
        fontSize: 'base',
        fontWeight: 'normal',
        lineHeight: 'relaxed',
        textAlign: 'left',
        color: '#374151',
        maxWidth: '',
        marginTop: 0,
        marginBottom: 16,
        paddingX: 0,
        paddingY: 0,
    },
    render: ({ text, richText, fontSize, fontWeight, lineHeight, textAlign, color, maxWidth, marginTop, marginBottom, paddingX, paddingY, }) => (_jsx("div", { className: `text-component ${FONT_SIZE[fontSize] || 'text-base'} ${WEIGHT[fontWeight] || 'font-normal'} ${LINE_HEIGHT[lineHeight] || 'leading-relaxed'} ${ALIGN[textAlign] || 'text-left'}`, style: {
            color: resolveColor(color),
            maxWidth: maxWidth || undefined,
            marginTop: marginTop != null ? `${marginTop}px` : '0px',
            marginBottom: marginBottom != null ? `${marginBottom}px` : '16px',
            paddingLeft: paddingX != null ? `${paddingX}px` : '0px',
            paddingRight: paddingX != null ? `${paddingX}px` : '0px',
            paddingTop: paddingY != null ? `${paddingY}px` : '0px',
            paddingBottom: paddingY != null ? `${paddingY}px` : '0px',
        }, children: richText ? (_jsx("div", { className: "prose prose-gray max-w-none", dangerouslySetInnerHTML: { __html: text.replace(/\n/g, '<br />') } })) : (_jsx("p", { className: "whitespace-pre-wrap", children: text })) })),
};
export default Text;
//# sourceMappingURL=Text.js.map