import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedLayoutFields, sharedColorFields, buildLayoutClasses, buildColorClasses, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Layout',
            defaultOpen: true,
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
        {
            label: 'Color',
            fieldKeys: ['backgroundColor', 'borderRadius'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Section = {
    label: 'Section',
    fields: accordionFields,
    defaultProps: {
        ...defaultLayoutProps,
        paddingY: 'md',
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, } = rawProps;
        const className = [
            'w-full',
            buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
            buildColorClasses({ borderRadius }),
        ].filter(Boolean).join(' ');
        const style = {};
        if (backgroundColor && backgroundColor !== 'transparent') {
            style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
        }
        return (_jsx("section", { className: className, style: style, children: _jsx(DropZone, { zone: "content" }) }));
    },
};
export default Section;
//# sourceMappingURL=Section.js.map