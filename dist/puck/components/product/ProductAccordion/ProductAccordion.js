import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { productAccordionFields } from './productaccordion.fields';
const ChevronSvg = ({ rotated }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", style: { transform: rotated ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }, children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const BORDER = { none: '', top: 'border-t', full: 'border' };
const getContent = (section, product) => {
    switch (section.contentType) {
        case 'description':
            return product?.description ? (_jsx("div", { dangerouslySetInnerHTML: { __html: product.description } })) : (_jsx("p", { className: "text-gray-500", children: "No description available" }));
        case 'material': {
            const careInstructions = product?.metadata?.care_instructions;
            const hasCare = typeof careInstructions === 'string';
            const materialValue = product?.material;
            return (_jsxs("div", { className: "space-y-2", children: [materialValue && _jsxs("p", { children: [_jsx("strong", { children: "Material:" }), " ", materialValue] }), hasCare && (_jsxs("div", { children: [_jsx("strong", { children: "Care Instructions:" }), _jsx("p", { className: "mt-1", children: careInstructions })] })), !materialValue && !hasCare && (_jsx("p", { className: "text-gray-500", children: "No material information available" }))] }));
        }
        case 'dimensions':
            return (_jsxs("div", { className: "space-y-2", children: [product?.length && _jsxs("p", { children: [_jsx("strong", { children: "Length:" }), " ", product.length, " cm"] }), product?.width && _jsxs("p", { children: [_jsx("strong", { children: "Width:" }), " ", product.width, " cm"] }), product?.height && _jsxs("p", { children: [_jsx("strong", { children: "Height:" }), " ", product.height, " cm"] }), product?.weight && _jsxs("p", { children: [_jsx("strong", { children: "Weight:" }), " ", product.weight, " g"] }), !product?.length && !product?.width && !product?.height && !product?.weight && (_jsx("p", { className: "text-gray-500", children: "No dimension information available" }))] }));
        case 'shipping':
            return section.customContent ? (_jsx("div", { dangerouslySetInnerHTML: { __html: section.customContent } })) : (_jsx("p", { className: "text-gray-500", children: "No shipping information available" }));
        case 'custom':
            return section.customContent ? (_jsx("div", { dangerouslySetInnerHTML: { __html: section.customContent } })) : (_jsx("p", { className: "text-gray-500", children: "No custom content provided" }));
        default:
            return _jsx("p", { className: "text-gray-500", children: "Invalid content type" });
    }
};
export const ProductAccordion = {
    label: 'Product Accordion',
    fields: productAccordionFields,
    defaultProps: {
        sections: [
            { id: 'description', title: 'Product Details', contentType: 'description', customContent: '' },
            { id: 'material', title: 'Material & Care', contentType: 'material', customContent: '' },
            { id: 'shipping', title: 'Shipping & Returns', contentType: 'shipping', customContent: '<p>Free shipping on orders over $50. Returns accepted within 30 days.</p>' },
        ],
        allowMultiple: false,
        defaultOpen: 'description',
        borderStyle: 'top',
    },
    render: (rawProps) => {
        const { sections, allowMultiple, defaultOpen, borderStyle, product } = rawProps;
        const list = (sections || []);
        if (!list || list.length === 0) {
            return _jsx("div", { className: "text-gray-400 italic", children: "No accordion sections configured" });
        }
        const initialOpen = useMemo(() => (defaultOpen ? defaultOpen.split(',').map((s) => s.trim()).filter(Boolean) : [list[0]?.id].filter(Boolean)), [defaultOpen, list]);
        const [openIds, setOpenIds] = useState(initialOpen);
        const toggle = (id) => {
            setOpenIds((prev) => {
                if (allowMultiple)
                    return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
                return prev.includes(id) ? [] : [id];
            });
        };
        const borderCls = BORDER[borderStyle || 'top'] || BORDER.top;
        return (_jsx("div", { className: "w-full", children: list.map((section) => {
                const isOpen = openIds.includes(section.id);
                return (_jsxs("div", { className: `${borderCls} border-gray-200 py-4`, children: [_jsxs("button", { type: "button", onClick: () => toggle(section.id), "aria-expanded": isOpen, className: "flex w-full items-center justify-between text-left hover:text-gray-600 transition-colors", children: [_jsx("span", { className: "text-base font-medium", children: section.title }), _jsx(ChevronSvg, { rotated: isOpen })] }), _jsx("div", { style: {
                                maxHeight: isOpen ? '1000px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 300ms ease',
                            }, children: _jsx("div", { className: "pt-4 pb-2 text-sm text-gray-700", children: getContent(section, product || null) }) })] }, section.id));
            }) }));
    },
};
export default ProductAccordion;
//# sourceMappingURL=ProductAccordion.js.map