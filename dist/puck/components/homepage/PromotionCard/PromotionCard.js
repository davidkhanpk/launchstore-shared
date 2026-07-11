import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
const ALIGN = { left: 'text-left items-start', center: 'text-center items-center' };
export const promotionCardFields = {
    title: { type: 'text', label: 'Title' },
    description: { type: 'textarea', label: 'Description' },
    buttonText: { type: 'text', label: 'Button Text' },
    buttonHref: { type: 'text', label: 'Button URL' },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    buttonColor: { type: 'text', label: 'Button Color (hex or theme token)' },
    buttonTextColor: { type: 'text', label: 'Button Text Color (hex or theme token)' },
    alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }] },
};
export const PromotionCard = {
    label: 'Promotion Card',
    fields: promotionCardFields,
    defaultProps: {
        title: 'Special Offer',
        description: 'Get 20% off your first order',
        buttonText: 'Shop Now',
        buttonHref: '#',
        backgroundColor: '#111827',
        textColor: '#ffffff',
        buttonColor: '#ffffff',
        buttonTextColor: '#111827',
        alignment: 'center',
    },
    render: ({ title, description, buttonText, buttonHref, backgroundColor, textColor, buttonColor, buttonTextColor, alignment }) => {
        const bg = resolveColor(backgroundColor) || backgroundColor;
        const fg = resolveColor(textColor) || textColor;
        const btnBg = resolveColor(buttonColor) || buttonColor;
        const btnFg = resolveColor(buttonTextColor) || buttonTextColor;
        return (_jsxs("div", { className: `flex flex-col gap-3 p-5 rounded-lg ${ALIGN[alignment] || 'text-center items-center'}`, style: { backgroundColor: bg, color: fg }, children: [title && _jsx("h4", { className: "text-base font-semibold m-0", children: title }), description && _jsx("p", { className: "text-sm m-0 opacity-90", children: description }), buttonText && (_jsx("a", { href: buttonHref || '#', className: "no-underline inline-block px-4 py-2 rounded-md text-sm font-medium", style: { backgroundColor: btnBg, color: btnFg }, children: buttonText }))] }));
    },
};
export default PromotionCard;
//# sourceMappingURL=PromotionCard.js.map