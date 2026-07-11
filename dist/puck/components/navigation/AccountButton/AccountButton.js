import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { accountButtonFields } from './accountbutton.fields';
import { resolveColor } from '../../../../theme/resolveColor';
const UserSvg = ({ size }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" })] }));
const SIZE_MAP = { sm: 20, md: 24, lg: 28 };
const STYLE_CLASS = {
    minimal: 'p-2 rounded-full hover:bg-gray-100',
    outlined: 'p-2 border-2 rounded-full hover:bg-gray-100',
    filled: 'p-2 rounded-full',
};
const initialsOf = (customer) => {
    if (!customer)
        return null;
    const composed = `${customer.first_name?.[0] ?? ''}${customer.last_name?.[0] ?? ''}`.toUpperCase();
    if (composed)
        return composed;
    return (customer.email?.[0] ?? '?').toUpperCase();
};
export const AccountButton = {
    label: 'Account Button',
    fields: accountButtonFields,
    defaultProps: {
        showLabel: false, label: 'Account', iconSize: 'md',
        iconColor: '#000000', hoverColor: '#3b82f6', style: 'minimal',
        linkTo: '/account', signedInLink: '/account',
        showWhenSignedOut: true, showWhenSignedIn: true,
    },
    render: (rawProps) => {
        const { showLabel, label, iconSize, iconColor, hoverColor, style, linkTo, signedInLink, showWhenSignedOut, showWhenSignedIn, checkAuth, } = rawProps;
        const [isHovered, setIsHovered] = useState(false);
        const [isSignedIn, setIsSignedIn] = useState(false);
        const [customer, setCustomer] = useState(null);
        useEffect(() => {
            let mounted = true;
            const run = async () => {
                if (!checkAuth)
                    return;
                try {
                    const result = await checkAuth();
                    if (mounted) {
                        setIsSignedIn(!!result.authenticated);
                        setCustomer(result.customer || null);
                    }
                }
                catch { }
            };
            run();
            return () => { mounted = false; };
        }, [checkAuth]);
        if (!isSignedIn && !showWhenSignedOut)
            return _jsx(_Fragment, {});
        if (isSignedIn && !showWhenSignedIn)
            return _jsx(_Fragment, {});
        const sz = SIZE_MAP[iconSize || 'md'];
        const cls = STYLE_CLASS[style || 'minimal'];
        const href = isSignedIn ? signedInLink : linkTo;
        const initials = initialsOf(customer);
        const resolvedIconColor = resolveColor(iconColor);
        const resolvedHoverColor = resolveColor(hoverColor);
        return (_jsxs("a", { href: href, className: `relative flex items-center gap-2 transition-all ${cls}`, style: {
                color: isHovered ? resolvedHoverColor : resolvedIconColor,
                backgroundColor: style === 'filled' ? (isHovered ? resolvedHoverColor : resolvedIconColor) : 'transparent',
                borderColor: style === 'outlined' ? resolvedIconColor : 'transparent',
            }, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), "aria-label": isSignedIn ? `My Account${customer?.first_name ? ` (${customer.first_name})` : ''}` : 'Account', children: [isSignedIn && initials ? (_jsx("span", { className: "flex items-center justify-center rounded-full text-xs font-semibold text-white", style: {
                        width: sz, height: sz,
                        backgroundColor: resolvedHoverColor,
                        fontSize: sz * 0.45,
                    }, children: initials })) : (_jsx("span", { style: {
                        color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor),
                    }, children: _jsx(UserSvg, { size: sz }) })), isSignedIn && (_jsx("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white", style: { transform: 'translate(10%, 10%)' } })), showLabel && (_jsx("span", { className: "font-medium", style: { color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor) }, children: isSignedIn && customer?.first_name ? customer.first_name : label }))] }));
    },
};
export default AccountButton;
//# sourceMappingURL=AccountButton.js.map