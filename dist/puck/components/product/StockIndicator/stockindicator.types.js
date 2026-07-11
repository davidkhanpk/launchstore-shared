export const evaluateStock = (product, threshold) => {
    const total = (product?.variants || []).reduce((acc, v) => acc + (v.inventory_quantity || 0), 0);
    const isPreOrder = !!product?.metadata?.is_pre_order;
    if (isPreOrder) {
        return {
            status: 'pre-order', text: 'Pre-Order',
            iconColor: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200',
            quantity: total, isPreOrder,
        };
    }
    if (total === 0) {
        return {
            status: 'out-of-stock', text: 'Out of Stock',
            iconColor: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200',
            quantity: 0, isPreOrder,
        };
    }
    if (total <= threshold) {
        return {
            status: 'low-stock', text: 'Low Stock',
            iconColor: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200',
            quantity: total, isPreOrder,
        };
    }
    return {
        status: 'in-stock', text: 'In Stock',
        iconColor: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200',
        quantity: total, isPreOrder,
    };
};
//# sourceMappingURL=stockindicator.types.js.map