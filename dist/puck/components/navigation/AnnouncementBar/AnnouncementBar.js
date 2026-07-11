import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
const FONT = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };
const ALIGN = { left: 'justify-start text-left', center: 'justify-center text-center', right: 'justify-end text-right' };
const PADY = { sm: 'py-1', md: 'py-2', lg: 'py-3' };
export const announcementBarFields = {
    text: { type: 'text', label: 'Text' },
    linkText: { type: 'text', label: 'Link Text (optional)' },
    linkUrl: { type: 'text', label: 'Link URL (optional)' },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
    },
    paddingY: {
        type: 'select', label: 'Vertical Padding',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
};
export const AnnouncementBar = {
    label: 'Announcement Bar',
    fields: announcementBarFields,
    defaultProps: {
        text: 'Free shipping on orders over $50',
        linkText: '',
        linkUrl: '',
        backgroundColor: '#000000',
        textColor: '#ffffff',
        alignment: 'center',
        fontSize: 'sm',
        paddingY: 'md',
    },
    render: ({ text, linkText, linkUrl, backgroundColor, textColor, alignment, fontSize, paddingY }) => {
        const bg = resolveColor(backgroundColor) || backgroundColor;
        const fg = resolveColor(textColor) || textColor;
        return (_jsx("div", { className: "w-full", style: { backgroundColor: bg, color: fg }, children: _jsxs("div", { className: `container mx-auto px-4 flex items-center gap-2 ${ALIGN[alignment] || 'justify-center text-center'} ${PADY[paddingY] || 'py-2'} ${FONT[fontSize] || 'text-sm'}`, children: [_jsx("span", { children: text }), linkText && (_jsx("a", { href: linkUrl || '#', className: "underline font-medium", style: { color: fg }, children: linkText }))] }) }));
    },
};
export default AnnouncementBar;
//# sourceMappingURL=AnnouncementBar.js.map