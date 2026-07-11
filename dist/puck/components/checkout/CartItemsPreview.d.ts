import type { ComponentConfig } from '@puckeditor/core';
export interface CartItemsPreviewProps {
    showImages: boolean;
    showQuantity: boolean;
    showVariantInfo: boolean;
    imageSize: 'sm' | 'md' | 'lg';
    layout: 'list' | 'compact';
}
export interface CartItemsPreviewWithData extends CartItemsPreviewProps {
    items?: Array<{
        id: string;
        title: string;
        variant: string;
        price: string;
        quantity: number;
        total: string;
        image?: string;
    }>;
}
export declare const CartItemsPreview: ComponentConfig<CartItemsPreviewWithData>;
export default CartItemsPreview;
//# sourceMappingURL=CartItemsPreview.d.ts.map