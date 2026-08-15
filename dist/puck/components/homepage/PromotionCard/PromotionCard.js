import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { SectionShell, sharedBackgroundFields, sharedSectionLayoutFields, RADIUS_OPTIONS, } from '../../../design-system';
// Static lookups so Tailwind can see the classes at build time.
const ALIGN = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
};
const RADIUS_CLASS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md',
    lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full',
};
export const promotionCardFields = {
    title: { type: 'text', label: 'Title' },
    description: { type: 'textarea', label: 'Description' },
    buttonText: { type: 'text', label: 'Button Text' },
    buttonHref: { type: 'text', label: 'Button URL' },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    buttonColor: { type: 'text', label: 'Button Color (hex or theme token)' },
    buttonTextColor: { type: 'text', label: 'Button Text Color (hex or theme token)' },
    borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
    ...sharedBackgroundFields,
    ...sharedSectionLayoutFields,
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
        borderRadius: 'lg',
        backgroundScheme: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overlayColor: '',
        overlayOpacity: '0',
        gradientFrom: '',
        gradientTo: '',
        density: 'compact',
        contentWidth: 'full',
        contentAlign: 'center',
        verticalAlign: 'top',
        minHeight: '',
    },
    render: ({ title, description, buttonText, buttonHref, backgroundColor, textColor, buttonColor, buttonTextColor, borderRadius, backgroundScheme, backgroundImage, backgroundSize, backgroundPosition, overlayColor, overlayOpacity, gradientFrom, gradientTo, density, contentWidth, contentAlign, verticalAlign, minHeight, }) => {
        // When a scheme is active its text color flows from SectionShell; the
        // explicit textColor prop only applies on plain/gradient backgrounds.
        const fg = backgroundScheme ? undefined : (resolveColor(textColor) || textColor);
        const btnBg = resolveColor(buttonColor) || buttonColor;
        const btnFg = resolveColor(buttonTextColor) || buttonTextColor;
        return (_jsx(SectionShell, { backgroundScheme: backgroundScheme, backgroundImage: backgroundImage, backgroundSize: backgroundSize, backgroundPosition: backgroundPosition, overlayColor: overlayColor, overlayOpacity: overlayOpacity, gradientFrom: gradientFrom, gradientTo: gradientTo, backgroundColor: backgroundColor, density: density, contentWidth: contentWidth, contentAlign: contentAlign, verticalAlign: verticalAlign, minHeight: minHeight, className: `overflow-hidden ${RADIUS_CLASS[borderRadius || 'lg'] || 'rounded-lg'}`, contentClassName: "px-5", children: _jsxs("div", { className: `flex flex-col gap-3 ${ALIGN[contentAlign || 'center'] || 'text-center items-center'}`, style: fg ? { color: fg } : undefined, children: [title && _jsx("h4", { className: "text-base font-semibold m-0", children: title }), description && _jsx("p", { className: "text-sm m-0 opacity-90", children: description }), buttonText && (_jsx("a", { href: buttonHref || '#', className: "no-underline inline-block px-4 py-2 rounded-md text-sm font-medium", style: { backgroundColor: btnBg, color: btnFg }, children: buttonText }))] }) }));
    },
};
export default PromotionCard;
//# sourceMappingURL=PromotionCard.js.map