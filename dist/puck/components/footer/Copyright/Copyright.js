import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { copyrightFields } from './copyright.fields';
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const FONT = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };
export const Copyright = {
    label: 'Copyright',
    fields: copyrightFields,
    defaultProps: {
        text: 'All rights reserved.',
        showYear: true,
        alignment: 'center',
        fontSize: 'sm',
        textColor: '#6b7280',
        showDivider: true,
        dividerColor: '#e5e7eb',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
    },
    render: ({ text, showYear, alignment, fontSize, textColor, showDivider, dividerColor, paddingTop, paddingBottom }) => {
        const currentYear = new Date().getFullYear();
        return (_jsx("div", { className: "w-full", style: {
                paddingTop,
                paddingBottom,
                borderTop: showDivider ? `1px solid ${resolveColor(dividerColor) || dividerColor}` : 'none',
            }, children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("p", { className: `${ALIGN[alignment] || 'text-center'} ${FONT[fontSize] || 'text-sm'}`, style: { color: resolveColor(textColor) }, children: [showYear && `© ${currentYear} `, text] }) }) }));
    },
};
export default Copyright;
//# sourceMappingURL=Copyright.js.map