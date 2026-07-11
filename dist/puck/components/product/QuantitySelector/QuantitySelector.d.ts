import type { ComponentConfig } from '@puckeditor/core';
import type { QuantitySelectorProps, SetQuantity } from './quantityselector.types';
export interface QuantitySelectorWithState extends QuantitySelectorProps {
    /** Optional cart-flow quantity + setter. When omitted, internal state. */
    quantity?: number;
    setQuantity?: SetQuantity;
}
export declare const QuantitySelector: ComponentConfig<QuantitySelectorWithState>;
export default QuantitySelector;
//# sourceMappingURL=QuantitySelector.d.ts.map