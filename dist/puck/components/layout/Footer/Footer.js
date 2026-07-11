import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { footerFields } from './footer.fields';
const Fb = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z" }) }));
const Ig = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }), _jsx("path", { d: "M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" }), _jsx("line", { x1: "17.5", y1: "6.5", x2: "17.5", y2: "6.5" })] }));
const Tw = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M22 4.01c-.7.3-1.5.6-2.4.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-7 3.7A11.4 11.4 0 0 1 3.4 3.6a4 4 0 0 0 1.2 5.3c-.7 0-1.3-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 1 17.4 11.4 11.4 0 0 0 7.2 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8 8 0 0 0 22 4z" }) }));
const Yt = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M23 7.4a3 3 0 0 0-2.1-2.1C19.1 5 12 5 12 5s-7.1 0-8.9.3A3 3 0 0 0 1 7.4 31 31 0 0 0 .7 12 31 31 0 0 0 1 16.6a3 3 0 0 0 2.1 2.1c1.8.3 8.9.3 8.9.3s7.1 0 8.9-.3a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.3 12 31 31 0 0 0 23 7.4z" }), _jsx("polygon", { fill: "white", points: "10 15 15 12 10 9 10 15" })] }));
const socialIcons = {
    facebook: _jsx(Fb, {}), instagram: _jsx(Ig, {}), twitter: _jsx(Tw, {}), youtube: _jsx(Yt, {}),
};
const gridMap = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '5': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
};
export const Footer = {
    label: 'Footer',
    fields: footerFields,
    defaultProps: {
        columns: '4',
        backgroundColor: '#1f2937',
        textColor: '#ffffff',
        linkHoverColor: '#3b82f6',
        menuConfigs: [],
        paddingTop: '3rem',
        paddingBottom: '2rem',
        menuLoading: false,
        menuError: false,
    },
    render: ({ columns, backgroundColor, textColor, linkColor, linkHoverColor, menus, menuConfigs, newsletter, social, paymentIcons, bottomBar, paddingTop, paddingBottom, menuLoading, menuError, }) => {
        const [email, setEmail] = useState('');
        const gridClass = gridMap[columns] || gridMap['4'];
        const renderMenuColumn = (cfg) => {
            if (menuLoading) {
                return (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "h-5 w-24 bg-gray-200 rounded animate-pulse" }), _jsx("div", { className: "space-y-2", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "h-4 w-32 bg-gray-200 rounded animate-pulse" }, i))) })] }, cfg.handle));
            }
            if (menuError) {
                return (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-semibold text-base", style: { color: resolveColor(textColor) }, children: cfg.title }), _jsx("span", { className: "text-sm text-red-500", children: "Menu unavailable" })] }, cfg.handle));
            }
            const menu = menus?.[cfg.handle];
            if (!menu)
                return null;
            const items = cfg.showAllItems ? menu.items : menu.items.slice(0, 5);
            return (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-semibold text-base", style: { color: resolveColor(textColor) }, children: cfg.title || menu.name }), _jsx("ul", { className: "space-y-2", children: items.filter((it) => it.isVisible !== false).map((it) => (_jsx("li", { children: _jsx("a", { href: it.url || '#', target: it.openInNewTab ? '_blank' : undefined, rel: it.openInNewTab ? 'noopener noreferrer' : undefined, className: "text-sm hover:opacity-75 transition-opacity", style: { color: resolveColor(linkColor) || resolveColor(textColor), opacity: 0.8 }, children: it.label }) }, it.id))) })] }, cfg.handle));
        };
        const renderNewsletter = () => {
            if (!newsletter?.enabled)
                return null;
            const submit = (e) => {
                e.preventDefault();
                setEmail('');
            };
            return (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-semibold text-base", style: { color: resolveColor(textColor) }, children: newsletter.title || 'Subscribe to our newsletter' }), newsletter.description && (_jsx("p", { className: "text-sm", style: { color: resolveColor(textColor), opacity: 0.8 }, children: newsletter.description })), _jsxs("form", { onSubmit: submit, className: "flex gap-2", children: [_jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: newsletter.placeholder || 'Enter your email', className: "flex-1 px-3 py-2 rounded text-sm", style: { backgroundColor: 'rgba(255,255,255,0.1)', color: resolveColor(textColor) }, required: true }), _jsx("button", { type: "submit", className: "px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity", style: { backgroundColor: resolveColor(linkHoverColor), color: '#ffffff' }, children: newsletter.buttonText || 'Subscribe' })] })] }));
        };
        const renderSocial = () => {
            if (!social?.enabled || !social.links?.length)
                return null;
            return (_jsx("div", { className: "flex gap-4", children: social.links.map((link) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "hover:opacity-75 transition-opacity", style: { color: resolveColor(textColor) }, "aria-label": link.platform, children: socialIcons[link.platform] }, link.platform))) }));
        };
        const renderPaymentIcons = () => {
            if (!paymentIcons?.enabled || !paymentIcons.icons?.length)
                return null;
            return (_jsx("div", { className: "flex gap-3 flex-wrap", children: paymentIcons.icons.map((icon) => (_jsx("div", { className: "w-10 h-6 bg-white rounded flex items-center justify-center text-xs", children: "\uD83D\uDCB3" }, icon))) }));
        };
        return (_jsx("footer", { className: "w-full", style: { backgroundColor: resolveColor(backgroundColor), color: resolveColor(textColor), paddingTop, paddingBottom }, children: _jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [_jsxs("div", { className: `grid ${gridClass} gap-8 mb-8`, children: [(menuConfigs || []).map(renderMenuColumn), newsletter?.enabled && renderNewsletter()] }), (social?.enabled || paymentIcons?.enabled) && (_jsxs("div", { className: "py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4", style: { borderColor: `${resolveColor(textColor) || '#000'}20` }, children: [social?.enabled && renderSocial(), paymentIcons?.enabled && renderPaymentIcons()] })), bottomBar && (_jsxs("div", { className: "pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm", style: { borderColor: `${resolveColor(textColor) || '#000'}20`, opacity: 0.8 }, children: [_jsx("p", { children: bottomBar.copyright || `© ${new Date().getFullYear()} All rights reserved` }), bottomBar.links && bottomBar.links.length > 0 && (_jsx("div", { className: "flex gap-4", children: bottomBar.links.map((link) => (_jsx("a", { href: link.url, className: "hover:opacity-75 transition-opacity", style: { color: resolveColor(textColor) }, children: link.label }, link.url))) }))] }))] }) }));
    },
};
export default Footer;
//# sourceMappingURL=Footer.js.map