/**
 * Resolution helper: cheapest price across variants.
 * Pure function — consumers can override with their region-aware logic.
 */
export const resolveCheapestPrice = (product) => {
    if (!product?.variants?.length)
        return undefined;
    const variant = product.variants[0];
    return {
        calculated_price: '',
        original_price: '',
        price_type: 'default',
        percentage_diff: '',
    };
};
//# sourceMappingURL=SharedProduct.js.map