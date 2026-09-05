import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const giftCardCodesDisplayFields = {
    showCopyButton: { type: 'radio', label: 'Show Copy Button', options: RADIO_YES_NO },
    showEmailNote: { type: 'radio', label: 'Show "Also Emailed" Note', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Section Title' },
};
const GiftIcon = ({ size = 24 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [_jsx("rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }), _jsx("path", { d: "M12 8v13" }), _jsx("path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }), _jsx("path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" })] }));
const CopyIcon = ({ size = 14 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }), _jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })] }));
const CheckIcon = ({ size = 14 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
// Mock for editor preview — the storefront wrapper injects real data
const MOCK_CARDS = [
    { code: 'GC-DEMO-1234-ABCD', value: 5000, currency: 'usd' },
];
export const GiftCardCodesDisplay = {
    label: 'Gift Card Codes',
    fields: giftCardCodesDisplayFields,
    defaultProps: {
        showCopyButton: true,
        showEmailNote: true,
        title: 'Your Gift Card Codes',
    },
    render: (raw) => {
        const { showCopyButton = true, showEmailNote = true, title = 'Your Gift Card Codes', } = raw;
        // Use injected cards or mock (editor preview)
        const giftCards = raw.giftCards ?? MOCK_CARDS;
        const orderId = raw.orderId;
        // If no cards injected and we have an orderId (storefront), fetch them
        const [fetchedCards, setFetchedCards] = useState(raw.giftCards ? giftCards : null);
        const [copiedCode, setCopiedCode] = useState(null);
        useEffect(() => {
            if (fetchedCards || !orderId)
                return;
            let cancelled = false;
            const fetchCards = async (attempt) => {
                try {
                    const res = await fetch(`/api/order/${orderId}/gift-cards`);
                    if (!res.ok)
                        throw new Error();
                    const data = await res.json();
                    if (!cancelled && Array.isArray(data.giftCards) && data.giftCards.length > 0) {
                        setFetchedCards(data.giftCards);
                    }
                    else if (!cancelled && attempt < 3) {
                        // Gift cards may not be ready yet — retry after delay
                        setTimeout(() => fetchCards(attempt + 1), attempt === 0 ? 2000 : 4000);
                    }
                }
                catch {
                    if (!cancelled && attempt < 3) {
                        setTimeout(() => fetchCards(attempt + 1), attempt === 0 ? 2000 : 4000);
                    }
                }
            };
            fetchCards(0);
            return () => { cancelled = true; };
        }, [orderId]);
        const cards = fetchedCards ?? giftCards;
        if (!cards || cards.length === 0)
            return _jsx(_Fragment, {});
        const formatAmount = (value, currency) => {
            try {
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency.toUpperCase() }).format(value / 100);
            }
            catch {
                return `$${(value / 100).toFixed(2)}`;
            }
        };
        const handleCopy = (code) => {
            navigator.clipboard.writeText(code).catch(() => { });
            setCopiedCode(code);
            setTimeout(() => setCopiedCode(null), 2000);
        };
        const total = cards.reduce((sum, gc) => sum + gc.value, 0);
        return (_jsxs("div", { className: "rounded-xl border-2 border-green-200 bg-green-50 p-6", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4 pb-4 border-b border-green-200", children: [_jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white", children: _jsx(GiftIcon, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold text-green-900", children: title }), _jsxs("p", { className: "text-sm text-green-600", children: ["Total value: ", _jsx("strong", { children: formatAmount(total, cards[0]?.currency ?? 'usd') })] })] })] }), _jsx("div", { className: "space-y-3", children: cards.map((gc, i) => (_jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-green-300 bg-white px-4 py-3", children: [_jsxs("div", { className: "min-w-0", children: [_jsxs("p", { className: "text-xs font-semibold text-green-600 uppercase tracking-wide", children: [formatAmount(gc.value, gc.currency), " Gift Card"] }), _jsx("p", { className: "text-lg font-mono font-bold text-gray-900 tracking-wider break-all", children: gc.code })] }), showCopyButton && (_jsx("button", { onClick: () => handleCopy(gc.code), className: "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition-colors", children: copiedCode === gc.code ? (_jsxs(_Fragment, { children: [_jsx(CheckIcon, {}), " Copied!"] })) : (_jsxs(_Fragment, { children: [_jsx(CopyIcon, {}), " Copy"] })) }))] }, i))) }), showEmailNote && (_jsx("p", { className: "mt-4 text-xs text-green-600 text-center", children: "We've also emailed these codes to you. They never expire." }))] }));
    },
};
//# sourceMappingURL=GiftCardCodesDisplay.js.map