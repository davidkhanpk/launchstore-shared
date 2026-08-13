import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
const SIZE_CLASS = {
    sm: 'w-8 h-8 text-xs', md: 'w-12 h-12 text-sm', lg: 'w-16 h-16 text-base', xl: 'w-24 h-24 text-xl',
};
const NAME_SIZE = { sm: 'text-xs', md: 'text-sm', lg: 'text-base', xl: 'text-lg' };
const SHAPE_CLASS = { circle: 'rounded-full', square: 'rounded-md' };
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    src: { type: 'text', label: 'Image URL (leave empty for initials)' },
    name: { type: 'text', label: 'Name' },
    size: { type: 'radio', label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }] },
    shape: { type: 'radio', label: 'Shape', options: [{ label: 'Circle', value: 'circle' }, { label: 'Square', value: 'square' }] },
    showName: { type: 'radio', label: 'Show Name Label', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    namePosition: { type: 'radio', label: 'Name Position', options: [{ label: 'Right', value: 'right' }, { label: 'Below', value: 'bottom' }] },
};
// ── Color fields (component-specific fallbacks) ─────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Fallback Background (hex or theme token)' },
    textColor: { type: 'text', label: 'Fallback Text Color (hex or theme token)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...colorFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['id', 'src', 'name', 'size', 'shape', 'showName', 'namePosition'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'textColor'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Avatar = {
    label: 'Avatar',
    fields: accordionFields,
    defaultProps: {
        id: 'avatar-1',
        src: '',
        name: 'John Doe',
        size: 'md',
        shape: 'circle',
        backgroundColor: '#6366f1',
        textColor: '#ffffff',
        showName: false,
        namePosition: 'right',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, src, name, size, shape, backgroundColor, textColor, showName, namePosition, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const initials = (name || '').split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
        const avatarEl = (_jsx("div", { className: `${SIZE_CLASS[size || 'md'] || 'w-12 h-12 text-sm'} ${SHAPE_CLASS[shape || 'circle'] || 'rounded-full'} flex items-center justify-center overflow-hidden flex-shrink-0`, style: { backgroundColor: src ? 'transparent' : resolveColor(backgroundColor) }, children: src ? (_jsx("img", { src: src, alt: name, className: "w-full h-full object-cover" })) : (_jsx("span", { style: { color: resolveColor(textColor) }, className: "font-semibold leading-none select-none", children: initials })) }));
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        if (!showName)
            return _jsx("div", { id: id, className: layoutClasses, children: avatarEl });
        return (_jsxs("div", { id: id, className: `flex ${namePosition === 'bottom' ? 'flex-col items-center gap-1' : 'flex-row items-center gap-3'} ${layoutClasses}`, children: [avatarEl, _jsx("span", { className: `${NAME_SIZE[size || 'md'] || 'text-sm'} font-medium text-gray-900 dark:text-gray-100`, children: name })] }));
    },
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map