import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { linkFields } from './link.fields';
const FONT_SIZE = {
    sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl',
};
const WEIGHT = {
    normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const UNDERLINE = {
    always: 'underline', hover: 'hover:underline no-underline', none: 'no-underline',
};
export const Link = {
    label: 'Link',
    fields: linkFields,
    defaultProps: {
        id: 'link-1',
        text: 'Click here',
        href: '#',
        target: '_self',
        color: 'brand.primary',
        fontSize: 'base',
        fontWeight: 'normal',
        underline: 'hover',
    },
    render: ({ id, text, href, target, color, fontSize, fontWeight, underline }) => (_jsx("a", { id: id, href: href, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, style: { color: resolveColor(color) }, className: `${FONT_SIZE[fontSize]} ${WEIGHT[fontWeight]} ${UNDERLINE[underline]} transition-opacity hover:opacity-80`, children: text })),
};
export default Link;
//# sourceMappingURL=Link.js.map