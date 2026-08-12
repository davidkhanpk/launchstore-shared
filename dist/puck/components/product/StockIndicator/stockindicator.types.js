/**
 * Check if a single variant is in stock using Medusa's canonical rules:
 * 1. manage_inventory === false → always in stock (inventory not tracked)
 * 2. allow_backorder === true → always purchasable (even at qty 0)
 * 3. inventory_quantity > 0 → in stock
 * 4. Everything else → out of stock
 *
 * Uses `=== false` for manage_inventory so null/undefined is treated as
 * "managed" (defensive — falls through to the quantity check).
 */
function isVariantInStock(variant) {
    if (variant.manage_inventory === false)
        return true;
    if (variant.allow_backorder === true)
        return true;
    return (variant.inventory_quantity ?? 0) > 0;
}
/**
 * Evaluate stock status for a product.
 *
 * Evaluates the SELECTED variant if provided, else the first variant
 * (matching the AddToCart wrapper's behavior). No longer sums all variants.
 */
export const evaluateStock = (product, threshold, selectedVariantId) => {
    const variants = product?.variants || [];
    // Find the variant to evaluate: selected > first
    const variant = selectedVariantId
        ? variants.find((v) => v.id === selectedVariantId)
        : variants[0];
    const isPreOrder = !!product?.metadata?.is_pre_order;
    if (isPreOrder) {
        return {
            status: 'pre-order', text: 'Pre-Order',
            iconColor: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200',
            quantity: variant?.inventory_quantity ?? 0, isPreOrder,
        };
    }
    // No variants at all → assume in stock (editor preview / digital products)
    if (!variant) {
        return {
            status: 'in-stock', text: 'In Stock',
            iconColor: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200',
            quantity: 0, isPreOrder,
        };
    }
    const qty = variant.inventory_quantity ?? 0;
    const inStock = isVariantInStock(variant);
    if (!inStock) {
        return {
            status: 'out-of-stock', text: 'Out of Stock',
            iconColor: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200',
            quantity: 0, isPreOrder,
        };
    }
    // In stock — check if low stock (only for managed inventory with quantity)
    if (variant.manage_inventory !== false && !variant.allow_backorder && qty > 0 && qty <= threshold) {
        return {
            status: 'low-stock', text: 'Low Stock',
            iconColor: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200',
            quantity: qty, isPreOrder,
        };
    }
    return {
        status: 'in-stock', text: 'In Stock',
        iconColor: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200',
        quantity: variant.manage_inventory === false ? 0 : qty,
        isPreOrder,
    };
};
//# sourceMappingURL=stockindicator.types.js.map