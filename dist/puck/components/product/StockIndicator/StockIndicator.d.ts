import type { ComponentConfig } from '@puckeditor/core';
import type { StockIndicatorProps } from './stockindicator.types';
import type { ProductData } from '../ProductData';
export interface StockIndicatorWithProduct extends StockIndicatorProps {
    product?: ProductData | null;
}
export declare const StockIndicator: ComponentConfig<StockIndicatorWithProduct>;
export default StockIndicator;
//# sourceMappingURL=StockIndicator.d.ts.map