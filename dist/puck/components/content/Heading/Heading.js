import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedTypographyFields, sharedLayoutFields, buildTypographyClasses, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
// ── Animation (component-specific — not shared) ────────────────────────────
const ANIMATION_CLASS = {
    fadeIn: 'animate-fadeIn', slideUp: 'animate-slideUp',
    slideDown: 'animate-slideDown', none: '',
};
const KEYFRAMES = `
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.6s ease-out both; }
.animate-slideUp { animation: slideUp 0.6s ease-out both; }
.animate-slideDown { animation: slideDown 0.6s ease-out both; }
`;
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    text: { type: 'text', label: 'Text' },
    level: {
        type: 'select', label: 'Heading Level',
        options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' },
        ],
    },
    animation: {
        type: 'select', label: 'Animation',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Slide Up', value: 'slideUp' },
            { label: 'Slide Down', value: 'slideDown' },
        ],
    },
    animationDelay: { type: 'number', label: 'Animation Delay (ms)' },
};
// ── All flat fields (for the accordion to reference by key) ─────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['text', 'level', 'animation', 'animationDelay'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Heading = {
    label: 'Heading',
    fields: accordionFields,
    defaultProps: {
        text: 'Your Heading Here',
        level: 'h2',
        animation: 'none',
        animationDelay: 0,
        ...defaultTypographyProps,
        fontWeight: 'bold',
        textColor: '#1f2937',
        textAlign: 'left',
        ...defaultLayoutProps,
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { text, level, animation, animationDelay, fontSize, fontWeight, textAlign, textColor, lineHeight, marginTop, marginBottom, } = rawProps;
        const Tag = level || 'h2';
        const animationClass = ANIMATION_CLASS[animation || 'none'] || '';
        const className = [
            buildTypographyClasses(rawProps),
            buildLayoutClasses(rawProps),
            animationClass,
        ].filter(Boolean).join(' ');
        const style = {
            color: resolveColor(textColor) || '#1f2937',
            animationDelay: animationDelay ? `${animationDelay}ms` : undefined,
        };
        return (_jsxs(_Fragment, { children: [_jsx(Tag, { className: className, style: style, children: text || 'Heading' }), animationClass && _jsx("style", { dangerouslySetInnerHTML: { __html: KEYFRAMES } })] }));
    },
};
export default Heading;
//# sourceMappingURL=Heading.js.map