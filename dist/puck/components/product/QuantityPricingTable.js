import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const quantityPricingTableFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Tier Cards', value: 'cards' }, { label: 'Table', value: 'table' }] },
    showSavings: { type: 'radio', label: 'Show Savings %', options: RADIO_YES_NO },
    showBasePrice: { type: 'radio', label: 'Show Base Price Card', options: RADIO_YES_NO },
    highlightActiveTier: { type: 'radio', label: 'Highlight Active Tier', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Section Title' },
};
const TagIcon = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }), _jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" })] }));
const CheckIcon = ({ size = 14 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const defaultFormat = (p) => `$${(p / 100).toFixed(2)}`;
const MOCK_TIERS = [
    { minQuantity: 3, maxQuantity: 5, unitPrice: 1800, currency: 'usd' },
    { minQuantity: 6, maxQuantity: null, unitPrice: 1500, currency: 'usd' },
];
const MOCK_BASE = 2000;
export const QuantityPricingTable = {
    label: 'Quantity Pricing',
    fields: quantityPricingTableFields,
    defaultProps: {
        layout: 'cards',
        showSavings: true,
        showBasePrice: true,
        highlightActiveTier: true,
        title: 'Buy More, Save More',
    },
    render: (raw) => {
        const { layout = 'cards', showSavings = true, showBasePrice = true, highlightActiveTier = true, title = 'Buy More, Save More', } = raw;
        const tiers = raw.tiers ?? MOCK_TIERS;
        const basePrice = raw.basePrice ?? MOCK_BASE;
        const currentQuantity = raw.currentQuantity ?? 1;
        const formatPrice = raw.formatPrice ?? defaultFormat;
        if (!tiers || tiers.length === 0)
            return _jsx(_Fragment, {});
        const getTierLabel = (tier, isBase) => {
            if (isBase)
                return '1+';
            if (tier.maxQuantity === null)
                return `${tier.minQuantity}+`;
            return `${tier.minQuantity}–${tier.maxQuantity}`;
        };
        const getSavingsPct = (tier) => {
            if (!basePrice || basePrice <= 0)
                return 0;
            return Math.round(((basePrice - tier.unitPrice) / basePrice) * 100);
        };
        const isActiveTier = (tier, isBase) => {
            if (!highlightActiveTier)
                return false;
            if (isBase)
                return currentQuantity < (tiers[0]?.minQuantity ?? Infinity);
            return currentQuantity >= tier.minQuantity &&
                (tier.maxQuantity === null || currentQuantity <= tier.maxQuantity);
        };
        const allTiers = [];
        if (showBasePrice) {
            allTiers.push({
                label: getTierLabel({ minQuantity: 1, maxQuantity: tiers[0] ? tiers[0].minQuantity - 1 : null, unitPrice: 0, currency: '' }, true),
                price: basePrice,
                savings: 0,
                active: isActiveTier({ minQuantity: 1, maxQuantity: null, unitPrice: 0, currency: '' }, true),
                isBase: true,
            });
        }
        for (const tier of tiers) {
            allTiers.push({
                label: getTierLabel(tier, false),
                price: tier.unitPrice,
                savings: getSavingsPct(tier),
                active: isActiveTier(tier, false),
                isBase: false,
            });
        }
        // ── Cards layout ─────────────────────────────────────────────────────
        if (layout === 'cards') {
            return (_jsxs("div", { className: "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700", children: [_jsx(TagIcon, {}), _jsx("h3", { className: "text-base font-bold text-gray-900 dark:text-white", children: title })] }), _jsx("div", { className: "grid gap-3", style: { gridTemplateColumns: `repeat(${Math.min(allTiers.length, 4)}, minmax(0, 1fr))` }, children: allTiers.map((tier, i) => (_jsxs("div", { className: `relative rounded-lg border p-3 text-center transition-all ${tier.active
                                ? 'border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-700/50 ring-2 ring-gray-900/10 dark:ring-white/10'
                                : tier.isBase
                                    ? 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-750'
                                    : 'border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800'}`, children: [tier.active && (_jsx("span", { className: "absolute -top-2 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide", children: "Active" })), _jsx("p", { className: `text-xs font-semibold uppercase tracking-wide ${tier.isBase ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`, children: tier.label }), _jsx("p", { className: `mt-1 text-lg font-bold ${tier.isBase ? 'text-gray-600 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`, children: formatPrice(tier.price) }), _jsx("p", { className: "text-[10px] text-gray-500 dark:text-gray-400", children: "each" }), showSavings && tier.savings > 0 && (_jsxs("p", { className: "mt-1.5 text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded px-1.5 py-0.5 inline-block", children: ["save ", tier.savings, "%"] }))] }, i))) })] }));
        }
        // ── Table layout ─────────────────────────────────────────────────────
        return (_jsxs("div", { className: "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700", children: [_jsx(TagIcon, {}), _jsx("h3", { className: "text-base font-bold text-gray-900 dark:text-white", children: title })] }), _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-gray-200 dark:border-gray-600", children: [_jsx("th", { className: "pb-2 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide", children: "Quantity" }), _jsx("th", { className: "pb-2 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide", children: "Price Each" }), showSavings && (_jsx("th", { className: "pb-2 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide", children: "You Save" }))] }) }), _jsx("tbody", { children: allTiers.map((tier, i) => (_jsxs("tr", { className: `border-b border-gray-100 dark:border-gray-700 last:border-0 ${tier.active ? 'bg-gray-50 dark:bg-gray-700/30' : ''}`, children: [_jsxs("td", { className: "py-2 text-gray-900 dark:text-white font-medium", children: [tier.label, tier.active && highlightActiveTier && (_jsx(CheckIcon, { size: 12 }))] }), _jsx("td", { className: "py-2 text-right font-bold text-gray-900 dark:text-white", children: formatPrice(tier.price) }), showSavings && (_jsx("td", { className: "py-2 text-right text-gray-900 dark:text-white", children: tier.savings > 0 ? `${tier.savings}%` : '—' }))] }, i))) })] })] }));
    },
};
//# sourceMappingURL=QuantityPricingTable.js.map