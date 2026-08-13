import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, } from '../../../design-system';
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    imageUrl: { type: 'text', label: 'Logo Image URL' },
    altText: { type: 'text', label: 'Alt Text' },
    linkTo: { type: 'text', label: 'Link To' },
    maxWidth: { type: 'text', label: 'Max Width (e.g., 150px)' },
    maxHeight: { type: 'text', label: 'Max Height (e.g., 60px)' },
    showText: {
        type: 'radio', label: 'Show Store Name',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    text: { type: 'text', label: 'Store Name' },
    textPosition: {
        type: 'select', label: 'Text Position',
        options: [{ label: 'Right of Logo', value: 'right' }, { label: 'Below Logo', value: 'below' }],
    },
    textSize: {
        type: 'select', label: 'Text Size',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    textWeight: {
        type: 'select', label: 'Text Weight',
        options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Medium', value: 'medium' },
            { label: 'Semibold', value: 'semibold' },
            { label: 'Bold', value: 'bold' },
        ],
    },
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Image',
            defaultOpen: true,
            fieldKeys: ['imageUrl', 'altText', 'linkTo', 'maxWidth', 'maxHeight'],
        },
        {
            label: 'Store Name',
            defaultOpen: true,
            fieldKeys: ['showText', 'text', 'textPosition', 'textSize', 'textColor', 'textWeight'],
        },
    ],
    allFields,
});
export const Logo = {
    label: 'Logo',
    fields: accordionFields,
    defaultProps: {
        imageUrl: '',
        altText: 'Store Logo',
        linkTo: '/',
        maxWidth: '150px',
        maxHeight: '60px',
        showText: true,
        text: 'My Store',
        textPosition: 'right',
        textSize: 'xl',
        textColor: '#000000',
        textWeight: 'bold',
    },
    render: (rawProps) => {
        const { imageUrl, altText, linkTo, maxWidth, maxHeight, showText, text, textPosition, textSize, textColor, textWeight, } = rawProps;
        const hasImage = imageUrl && imageUrl.trim() !== '' && imageUrl !== '/logo.svg';
        return (_jsxs("a", { href: linkTo, className: `flex items-center gap-3 ${textPosition === 'below' ? 'flex-col' : 'flex-row'}`, children: [hasImage && (_jsx("div", { style: { maxWidth, maxHeight, flexShrink: 0, display: 'flex', alignItems: 'center', overflow: 'hidden' }, children: _jsx("img", { src: imageUrl, alt: altText, style: { maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' } }) })), (showText || !hasImage) && text && (_jsx("span", { className: [textSize ? `text-${textSize}` : '', textWeight ? `font-${textWeight}` : ''].filter(Boolean).join(' '), style: { color: resolveColor(textColor) }, children: text }))] }));
    },
};
export default Logo;
//# sourceMappingURL=Logo.js.map