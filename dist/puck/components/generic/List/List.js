import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedTypographyFields, sharedLayoutFields, buildTypographyClasses, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
const SPACE_CLASS = { tight: 'space-y-1', normal: 'space-y-2', relaxed: 'space-y-4' };
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    items: {
        type: 'array',
        label: 'Items',
        arrayFields: { text: { type: 'text', label: 'Text' } },
        defaultItemProps: { text: 'List item' },
    },
    type: {
        type: 'radio', label: 'Marker Style',
        options: [
            { label: 'Bullet  •', value: 'bullet' },
            { label: 'Numbered  1.', value: 'numbered' },
            { label: 'Checkmark  ✓', value: 'check' },
            { label: 'None', value: 'none' },
        ],
    },
    spacing: {
        type: 'radio', label: 'Item Spacing',
        options: [{ label: 'Tight', value: 'tight' }, { label: 'Normal', value: 'normal' }, { label: 'Relaxed', value: 'relaxed' }],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
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
            fieldKeys: ['id', 'items', 'type', 'spacing'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const List = {
    label: 'List',
    fields: accordionFields,
    defaultProps: {
        id: 'list-1',
        items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
        type: 'bullet',
        spacing: 'normal',
        ...defaultTypographyProps,
        textColor: '#374151',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, items, type, spacing, textColor, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const marker = (i) => {
            if (type === 'numbered')
                return _jsxs("span", { className: "font-medium mr-2 flex-shrink-0 tabular-nums", children: [i + 1, "."] });
            if (type === 'check')
                return _jsx("span", { className: "mr-2 flex-shrink-0 text-green-600", children: "\u2713" });
            if (type === 'bullet')
                return _jsx("span", { className: "mr-2 flex-shrink-0", children: "\u2022" });
            return null;
        };
        const typographyClasses = buildTypographyClasses(rawProps);
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("ul", { id: id, className: `${SPACE_CLASS[spacing || 'normal'] || 'space-y-2'} ${typographyClasses} ${layoutClasses}`, style: { color: resolveColor(textColor) }, children: (items || []).map((item, i) => (_jsxs("li", { className: "flex items-start", children: [marker(i), _jsx("span", { children: item.text })] }, i))) }));
    },
};
export default List;
//# sourceMappingURL=List.js.map