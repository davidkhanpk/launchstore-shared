import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { spacerFields } from './spacer.fields';
const H = {
    xs: 'h-2', sm: 'h-4', md: 'h-8', lg: 'h-12', xl: 'h-16', '2xl': 'h-24', '3xl': 'h-32',
};
export const Spacer = {
    label: 'Spacer',
    fields: spacerFields,
    defaultProps: { id: 'spacer-1', height: 'md', showDivider: false, dividerStyle: 'solid', dividerColor: '#e5e7eb' },
    render: ({ id, height, showDivider, dividerStyle, dividerColor }) => (_jsx("div", { id: id, className: `${H[height] || 'h-8'} w-full flex items-center`, children: showDivider && (_jsx("hr", { style: { width: '100%', borderColor: resolveColor(dividerColor), borderStyle: dividerStyle, borderWidth: '1px' } })) })),
};
export default Spacer;
//# sourceMappingURL=Spacer.js.map