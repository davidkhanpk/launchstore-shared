import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { productRatingFields } from './productrating.fields';
const StarSvg = ({ filled, size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: filled ? 'currentColor' : 'none', stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }));
const SIZE_MAP = { sm: 14, md: 20, lg: 24 };
export const ProductRating = {
    label: 'Product Rating',
    fields: productRatingFields,
    defaultProps: { showCount: true, size: 'md' },
    render: (rawProps) => {
        const { showCount = true, size = 'md', product, fetchReviews } = rawProps;
        const [rating, setRating] = useState(null);
        const [count, setCount] = useState(0);
        const loader = fetchReviews || (async () => null);
        useEffect(() => {
            if (!product?.id)
                return;
            loader(product.id, { limit: 1 })
                .then((data) => {
                if (data && data.average_rating != null && data.count > 0) {
                    setRating(data.average_rating);
                    setCount(data.count);
                }
            })
                .catch(() => { });
        }, [product?.id, loader]);
        if (!product || rating === null)
            return _jsx(_Fragment, {});
        const starSize = SIZE_MAP[size || 'md'] || 20;
        const rounded = Math.round(rating);
        return (_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((s) => (_jsx("span", { className: s <= rounded ? 'text-yellow-400' : 'text-gray-300', children: _jsx(StarSvg, { filled: s <= rounded, size: starSize }) }, s))) }), _jsx("span", { className: "text-sm text-gray-600 font-medium", children: rating.toFixed(1) }), showCount && _jsxs("span", { className: "text-sm text-gray-500", children: ["(", count, ")"] })] }));
    },
};
export default ProductRating;
//# sourceMappingURL=ProductRating.js.map