export type VariantSelectorStyle = 'dropdown' | 'buttons' | 'color-swatches';
export interface ProductVariantSelectorProps {
    selectorStyle: VariantSelectorStyle;
    showLabels: boolean;
    showStock: boolean;
    marginTop: string;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    paddingX: string;
    paddingY: string;
}
/**
 * Controlled variant state. The shared component receives the
 * current selection + setters from the consumer wrapper (e.g.,
 * useVariantSelection's state). When omitted, falls back to
 * internal state initialized from the first matching variant.
 */
export type SelectedOptions = Record<string, string>;
export type SetSelectedOptions = (opts: SelectedOptions) => void;
export type SetSelectedVariant = (variant: ProductVariantSelectorVariantLike | null) => void;
/**
 * Minimal shape the selector writes back when a full variant
 * is found. Consumers can project this to their own variant type
 * (e.g., HttpTypes.StoreProductVariant in Medusa).
 */
export interface ProductVariantSelectorVariantLike {
    id: string;
    sku?: string;
    inventory_quantity?: number | null;
    options?: {
        option_id?: string;
        value?: string;
    }[];
}
//# sourceMappingURL=productvariantselector.types.d.ts.map