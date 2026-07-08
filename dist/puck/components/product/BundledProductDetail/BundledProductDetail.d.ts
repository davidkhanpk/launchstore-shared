import type { ComponentConfig } from '@puckeditor/core';
import type { BundledProductDetailProps, BundleData, FormatBundlePrice, BundleAddItemsArg } from './bundledproductdetail.types';
export interface BundledProductDetailWithData extends BundledProductDetailProps {
    bundle?: BundleData | null;
    isLoading?: boolean;
    error?: string | null;
    onAdd?: (items: BundleAddItemsArg) => Promise<void> | void;
    isAdding?: boolean;
    formatPrice?: FormatBundlePrice;
}
export declare const BundledProductDetail: ComponentConfig<BundledProductDetailWithData>;
export default BundledProductDetail;
//# sourceMappingURL=BundledProductDetail.d.ts.map