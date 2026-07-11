import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Panel = ({ title, children }) => (_jsxs("div", { className: "border border-gray-200 rounded-lg p-4 bg-white", children: [_jsx("h3", { className: "text-sm font-semibold text-gray-900 m-0 mb-3", children: title }), children] }));
export const accountContentFields = {
    defaultView: {
        type: 'select', label: 'Default View',
        options: [
            { label: 'Dashboard', value: 'dashboard' }, { label: 'Orders', value: 'orders' },
            { label: 'Profile', value: 'profile' }, { label: 'Addresses', value: 'addresses' }, { label: 'Wishlist', value: 'wishlist' },
        ],
    },
    showRecentOrders: { type: 'radio', label: 'Recent Orders', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showWishlist: { type: 'radio', label: 'Wishlist', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showRecommendations: { type: 'radio', label: 'Recommendations', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showLoyaltyPoints: { type: 'radio', label: 'Loyalty Points', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showPersonalStylist: { type: 'radio', label: 'Personal Stylist', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    luxuryStyle: { type: 'radio', label: 'Luxury Style', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
export const AccountContent = {
    label: 'Account Content',
    fields: accountContentFields,
    defaultProps: {
        defaultView: 'dashboard',
        showRecentOrders: true,
        showWishlist: false,
        showRecommendations: false,
        showLoyaltyPoints: false,
        showPersonalStylist: false,
        luxuryStyle: false,
    },
    render: ({ defaultView, showRecentOrders, showWishlist, showRecommendations, showLoyaltyPoints, showPersonalStylist, luxuryStyle }) => {
        return (_jsxs("div", { className: `flex flex-col gap-4 ${luxuryStyle ? 'font-light' : ''}`, children: [_jsx("div", { className: "text-xs uppercase tracking-wide text-gray-400", children: defaultView }), showLoyaltyPoints && (_jsx(Panel, { title: "Loyalty Points", children: _jsx("div", { className: "text-2xl font-semibold text-gray-900", children: "2,450 pts" }) })), showRecentOrders && (_jsx(Panel, { title: "Recent Orders", children: _jsx("div", { className: "divide-y divide-gray-100", children: [1, 2, 3].map((n) => (_jsxs("div", { className: "flex items-center justify-between py-2 text-sm", children: [_jsxs("span", { className: "text-gray-700", children: ["Order #", 1000 + n] }), _jsx("span", { className: "text-gray-500", children: "Delivered" })] }, n))) }) })), showWishlist && (_jsx(Panel, { title: "Wishlist", children: _jsx("div", { className: "grid grid-cols-3 gap-2", children: [1, 2, 3].map((n) => _jsx("div", { className: "aspect-square bg-gray-100 rounded" }, n)) }) })), showRecommendations && (_jsx(Panel, { title: "Recommended for You", children: _jsx("div", { className: "grid grid-cols-4 gap-2", children: [1, 2, 3, 4].map((n) => _jsx("div", { className: "aspect-square bg-gray-100 rounded" }, n)) }) })), showPersonalStylist && (_jsx(Panel, { title: "Your Personal Stylist", children: _jsx("p", { className: "text-sm text-gray-600 m-0", children: "Book a session with your dedicated stylist." }) })), !showRecentOrders && !showWishlist && !showRecommendations && !showLoyaltyPoints && !showPersonalStylist && (_jsx(Panel, { title: "Account", children: _jsx("p", { className: "text-sm text-gray-600 m-0", children: "Your account details will appear here." }) }))] }));
    },
};
export default AccountContent;
//# sourceMappingURL=AccountContent.js.map