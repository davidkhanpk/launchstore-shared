import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedLayoutFields, defaultLayoutProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    height: {
        type: 'radio', label: 'Height',
        options: [
            { label: 'Extra Small (0.5rem)', value: 'xs' },
            { label: 'Small (1rem)', value: 'sm' },
            { label: 'Medium (2rem)', value: 'md' },
            { label: 'Large (3rem)', value: 'lg' },
            { label: 'Extra Large (4rem)', value: 'xl' },
            { label: '2XL (6rem)', value: '2xl' },
            { label: '3XL (8rem)', value: '3xl' },
        ],
    },
    showDivider: { type: 'radio', label: 'Show Divider Line', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    dividerStyle: {
        type: 'radio', label: 'Divider Style',
        options: [{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }],
    },
    dividerColor: { type: 'text', label: 'Divider Color (hex or theme token)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
};
const HEIGHT_PX = {
    xs: 8, sm: 16, md: 32, lg: 48, xl: 64, '2xl': 96, '3xl': 128,
};
// ── Component ───────────────────────────────────────────────────────────────
export const Spacer = {
    label: 'Spacer',
    fields: allFields,
    defaultProps: {
        id: 'spacer-1',
        height: 'md',
        showDivider: false,
        dividerStyle: 'solid',
        dividerColor: '#e5e7eb',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, height, showDivider, dividerStyle, dividerColor } = rawProps;
        const h = HEIGHT_PX[height || 'md'] || HEIGHT_PX.md;
        return (_jsx("div", { id: id, style: { height: `${h}px` }, className: "w-full flex items-center", children: showDivider && (_jsx("hr", { style: { width: '100%', borderColor: resolveColor(dividerColor), borderStyle: dividerStyle || 'solid', borderWidth: '1px' } })) }));
    },
};
export default Spacer;
//# sourceMappingURL=Spacer.js.map