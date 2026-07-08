import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CartItemRow } from './CartItemRow';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const cartItemsFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Table', value: 'table' }, { label: 'List', value: 'list' }, { label: 'Card', value: 'card' }] },
    showImages: { type: 'radio', label: 'Show Product Images', options: RADIO_YES_NO },
    showVariantInfo: { type: 'radio', label: 'Show Variant Info', options: RADIO_YES_NO },
    showQuantitySelector: { type: 'radio', label: 'Show Quantity Selector', options: RADIO_YES_NO },
    showDeleteButton: { type: 'radio', label: 'Show Delete Button', options: RADIO_YES_NO },
    imageSize: { type: 'select', label: 'Image Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
    maxQuantity: { type: 'number', label: 'Max Quantity' },
    emptyMessage: { type: 'text', label: 'Empty Cart Message' },
};
const MOCK_ITEMS = [
    { id: '1', title: 'Sample Product', product_title: 'Sample Product', product_handle: 'sample-product', thumbnail: 'https://via.placeholder.com/150', variant: { id: 'v1', title: 'Medium / Black', options: [{ value: 'Medium' }, { value: 'Black' }] }, quantity: 2, unit_price: 2999, total: 5998 },
    { id: '2', title: 'Another Product', product_title: 'Another Product', product_handle: 'another-product', thumbnail: 'https://via.placeholder.com/150', variant: { id: 'v2', title: 'Large / White', options: [{ value: 'Large' }, { value: 'White' }] }, quantity: 1, unit_price: 4999, total: 4999 },
];
const defaultFormat = (price) => `$${(price / 100).toFixed(2)}`;
export const CartItems = {
    label: 'Cart Items',
    fields: cartItemsFields,
    defaultProps: {
        layout: 'table', showImages: true, showVariantInfo: true, showQuantitySelector: true, showDeleteButton: true,
        imageSize: 'md', maxQuantity: 10, emptyMessage: 'Your cart is empty',
    },
    render: (raw) => {
        const { layout = 'table', showImages, showVariantInfo, showQuantitySelector, showDeleteButton, imageSize = 'md', maxQuantity = 10, emptyMessage = 'Your cart is empty' } = raw;
        const items = raw.items ?? MOCK_ITEMS;
        const updating = raw.updatingItems ?? {};
        const onQuantityChange = raw.onQuantityChange ?? (() => { });
        const onDelete = raw.onDelete ?? (() => { });
        const formatPrice = raw.formatPrice ?? defaultFormat;
        if (items.length === 0) {
            return (_jsx("div", { className: "text-center py-12 px-4 border border-dashed border-gray-300 rounded-lg", children: _jsx("p", { className: "text-gray-500 text-lg", children: emptyMessage }) }));
        }
        const rowProps = { layout, showImages, showVariantInfo, showQuantitySelector, showDeleteButton, imageSize, maxQuantity, onQuantityChange, onDelete, formatPrice };
        if (layout === 'card') {
            return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map(item => _jsx(CartItemRow, { ...item, ...rowProps, updating: !!updating[item.id] }, item.id)) }));
        }
        if (layout === 'list') {
            return (_jsx("div", { className: "space-y-4", children: items.map(item => _jsx(CartItemRow, { ...item, ...rowProps, updating: !!updating[item.id] }, item.id)) }));
        }
        return (_jsx("div", { className: "w-full overflow-x-auto", children: _jsxs("table", { className: "w-full border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-gray-200", children: [_jsx("th", { className: "text-left py-4 px-4 font-medium text-gray-700", children: "Item" }), showQuantitySelector && _jsx("th", { className: "text-center py-4 px-4 font-medium text-gray-700", children: "Quantity" }), _jsx("th", { className: "text-right py-4 px-4 font-medium text-gray-700", children: "Price" }), _jsx("th", { className: "text-right py-4 px-4 font-medium text-gray-700", children: "Total" }), showDeleteButton && _jsx("th", { className: "w-12" })] }) }), _jsx("tbody", { children: items.map(item => _jsx(CartItemRow, { ...item, ...rowProps, updating: !!updating[item.id] }, item.id)) })] }) }));
    },
};
export default CartItems;
//# sourceMappingURL=CartItems.js.map