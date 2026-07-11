import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const emptyCartFields = {
    title: { type: 'text', label: 'Title' },
    message: { type: 'textarea', label: 'Message' },
    linkText: { type: 'text', label: 'Link Text' },
    linkUrl: { type: 'text', label: 'Link URL' },
    showOnlyWhenEmpty: { type: 'radio', label: 'Show Only When Cart is Empty', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
const ArrowUpRight = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "7", y1: "17", x2: "17", y2: "7" }), _jsx("polyline", { points: "7 7 17 7 17 17" })] }));
export const EmptyCart = {
    label: 'Empty Cart Message',
    fields: emptyCartFields,
    defaultProps: {
        title: 'Cart', message: "You don't have anything in your cart. Let's change that, use the link below to start browsing our products.",
        linkText: 'Explore products', linkUrl: '/store', showOnlyWhenEmpty: true,
    },
    render: (raw) => {
        const { title, message, linkText, linkUrl, showOnlyWhenEmpty, isEmpty = true } = raw;
        if (showOnlyWhenEmpty && !isEmpty)
            return _jsx(_Fragment, {});
        return (_jsxs("div", { className: "py-48 px-2 flex flex-col justify-center items-center text-center", children: [_jsx("h1", { className: "text-3xl font-medium mb-4", children: title }), _jsx("p", { className: "text-base text-gray-600 dark:text-gray-400 mt-4 mb-6 max-w-[32rem]", children: message }), _jsx("div", { children: _jsxs("a", { href: linkUrl, className: "flex gap-x-1 items-center group text-blue-600 hover:text-blue-700", children: [_jsx("span", { children: linkText }), _jsx(ArrowUpRight, {})] }) })] }));
    },
};
export default EmptyCart;
//# sourceMappingURL=EmptyCart.js.map