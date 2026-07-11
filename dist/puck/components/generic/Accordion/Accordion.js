import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { accordionFields } from './accordion.fields';
const ROUND = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg' };
const Chevron = ({ open }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: `w-5 h-5 transition-transform ${open ? 'transform rotate-180' : ''}`, children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
export const Accordion = {
    label: 'Accordion',
    fields: accordionFields,
    defaultProps: {
        id: 'accordion-1',
        items: [
            { id: 'item-1', title: 'What is your return policy?', content: 'We offer a 30-day return policy on all items.' },
            { id: 'item-2', title: 'How long does shipping take?', content: 'Standard shipping takes 5-7 business days.' },
            { id: 'item-3', title: 'Do you ship internationally?', content: 'Yes, we ship to over 100 countries worldwide.' },
        ],
        allowMultiple: false,
        bordered: true,
        rounded: 'md',
    },
    render: ({ id, items, allowMultiple, bordered, rounded }) => {
        const [open, setOpen] = useState([]);
        const toggle = (i) => {
            if (allowMultiple)
                setOpen((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
            else
                setOpen((p) => (p.includes(i) ? [] : [i]));
        };
        return (_jsx("div", { id: id, className: "w-full space-y-2", children: (items || []).map((item, i) => {
                const isOpen = open.includes(i);
                return (_jsxs("div", { className: `${bordered ? 'border border-gray-200 dark:border-gray-700' : ''} ${ROUND[rounded] || 'rounded-md'} overflow-hidden`, children: [_jsxs("button", { onClick: () => toggle(i), className: `w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${isOpen && !bordered ? 'bg-gray-50 dark:bg-gray-800' : ''}`, children: [_jsx("span", { children: item.title }), _jsx(Chevron, { open: isOpen })] }), isOpen && (_jsx("div", { className: "p-4 pt-0 text-gray-600 dark:text-gray-400 whitespace-pre-wrap", children: item.content }))] }, item.id));
            }) }));
    },
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map