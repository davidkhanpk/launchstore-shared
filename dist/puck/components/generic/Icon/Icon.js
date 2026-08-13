import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { ICONS } from './icons';
import { createAccordionFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
// Curated icon name list (used by the icon picker + re-exported for consumers)
export const ICON_NAMES = [
    'HeartIcon', 'StarIcon', 'BookmarkIcon', 'CheckIcon', 'XMarkIcon',
    'PlusIcon', 'MinusIcon', 'ChevronDownIcon', 'ChevronUpIcon', 'ChevronLeftIcon', 'ChevronRightIcon',
    'ArrowLeftIcon', 'ArrowRightIcon', 'ArrowUpIcon', 'ArrowDownIcon',
    'MagnifyingGlassIcon', 'ShoppingCartIcon', 'ShoppingBagIcon',
    'UserIcon', 'UsersIcon', 'HomeIcon', 'EnvelopeIcon', 'PhoneIcon',
    'CalendarIcon', 'ClockIcon', 'BellIcon', 'Cog6ToothIcon',
    'InformationCircleIcon', 'ExclamationCircleIcon', 'CheckCircleIcon',
    'XCircleIcon', 'MapPinIcon', 'TagIcon', 'EyeIcon',
    'DocumentIcon', 'GiftIcon', 'QuestionMarkCircleIcon',
];
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    iconName: {
        type: 'select',
        label: 'Icon',
        options: ICON_NAMES.map((name) => ({
            label: name.replace('Icon', '').replace(/([A-Z])/g, ' $1').trim(),
            value: name,
        })),
    },
    size: {
        type: 'select', label: 'Size',
        options: [
            { label: 'Extra Small (16px)', value: 'xs' },
            { label: 'Small (20px)', value: 'sm' },
            { label: 'Medium (24px)', value: 'md' },
            { label: 'Large (32px)', value: 'lg' },
            { label: 'Extra Large (40px)', value: 'xl' },
            { label: '2XL (48px)', value: '2xl' },
        ],
    },
    textColor: { type: 'text', label: 'Color (hex or theme token)' },
    strokeWidth: {
        type: 'radio', label: 'Stroke Width',
        options: [{ label: '1', value: '1' }, { label: '1.5', value: '1.5' }, { label: '2', value: '2' }, { label: '2.5', value: '2.5' }],
    },
    alignment: {
        type: 'radio', label: 'Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['id', 'iconName', 'size', 'textColor', 'strokeWidth', 'alignment'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
const SIZE_PX = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40, '2xl': 48 };
const ALIGN_MARGIN = {
    left: 'mr-auto', center: 'mx-auto', right: 'ml-auto',
};
// ── Component ───────────────────────────────────────────────────────────────
export const Icon = {
    label: 'Icon',
    fields: accordionFields,
    defaultProps: {
        id: 'icon-1',
        iconName: 'HeartIcon',
        size: 'md',
        strokeWidth: '2',
        alignment: 'center',
        ...defaultLayoutProps,
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { id, iconName, size, textColor, strokeWidth, alignment, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const IconComponent = ICONS[iconName];
        if (!IconComponent) {
            return _jsxs("div", { className: "text-red-500 text-sm", children: ["Icon \"", iconName, "\" not found"] });
        }
        const sizePx = SIZE_PX[size || 'md'] || SIZE_PX.md;
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        const iconStyle = {
            strokeWidth: strokeWidth ? parseFloat(strokeWidth) : 2,
            display: 'inline-block',
        };
        if (textColor)
            iconStyle.color = resolveColor(textColor);
        return (_jsx("div", { id: id, className: `block ${layoutClasses}`, children: _jsx("span", { className: ALIGN_MARGIN[alignment || 'center'] || 'mx-auto', style: iconStyle, children: _jsx(IconComponent, { size: sizePx, strokeWidth: parseFloat(strokeWidth || '2') }) }) }));
    },
};
export default Icon;
//# sourceMappingURL=Icon.js.map