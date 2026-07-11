import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { buttonFields } from './button.fields';
const SIZE = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
};
const RADIUS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md',
    lg: 'rounded-lg', full: 'rounded-full',
};
const SHADOW = {
    none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md',
    lg: 'shadow-lg', xl: 'shadow-xl',
};
const ALIGN = {
    left: 'justify-start', center: 'justify-center', right: 'justify-end',
};
// Inline-SVG arrow (no external icon dep). Matches the prior
// ArrowRightIcon visual; consumers can swap if desired.
const ArrowIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "w-5 h-5", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" }) }));
export const Button = {
    label: 'Button',
    fields: buttonFields,
    defaultProps: {
        text: 'Click Me',
        url: '#',
        openInNewTab: false,
        variant: 'primary',
        size: 'md',
        fullWidth: false,
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        borderColor: '#3b82f6',
        hoverBackgroundColor: '#2563eb',
        hoverTextColor: '#ffffff',
        showIcon: false,
        iconPosition: 'right',
        borderRadius: 'md',
        shadow: 'md',
        alignment: 'left',
        marginTop: 0,
        marginBottom: 16,
    },
    render: ({ text, url, openInNewTab, variant, size, fullWidth, backgroundColor, textColor, borderColor, hoverBackgroundColor, hoverTextColor, showIcon, iconPosition, borderRadius, shadow, alignment, marginTop, marginBottom, }) => {
        const hoverCss = `.button-shared:hover { background-color: ${resolveColor(hoverBackgroundColor)} !important; color: ${resolveColor(hoverTextColor)} !important; }`;
        return (_jsxs("div", { className: `button-wrapper flex ${ALIGN[alignment] || 'justify-start'}`, children: [_jsxs("a", { href: url, target: openInNewTab ? '_blank' : undefined, rel: openInNewTab ? 'noopener noreferrer' : undefined, className: `button-shared inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${SIZE[size] || 'px-6 py-3 text-base'} ${RADIUS[borderRadius] || 'rounded-md'} ${SHADOW[shadow] || 'shadow-none'} ${fullWidth ? 'w-full justify-center' : ''}`, style: {
                        backgroundColor: resolveColor(backgroundColor),
                        color: resolveColor(textColor),
                        borderWidth: variant === 'outline' ? '2px' : '0',
                        borderColor: resolveColor(borderColor),
                        borderStyle: variant === 'outline' ? 'solid' : undefined,
                        marginTop: `${marginTop}px`,
                        marginBottom: `${marginBottom}px`,
                    }, children: [showIcon && iconPosition === 'left' && _jsx(ArrowIcon, {}), text, showIcon && iconPosition === 'right' && _jsx(ArrowIcon, {})] }), _jsx("style", { dangerouslySetInnerHTML: { __html: hoverCss } })] }));
    },
};
export default Button;
//# sourceMappingURL=Button.js.map