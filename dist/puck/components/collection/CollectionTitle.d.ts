import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionTitleProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4';
    fontSize: string;
    textAlign: 'left' | 'center' | 'right';
    fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';
    marginBottom: string;
    showProductCount: boolean;
}
export interface CollectionTitleWithData extends CollectionTitleProps {
    title?: string;
    productCount?: number;
}
export declare const CollectionTitle: ComponentConfig<CollectionTitleWithData>;
export default CollectionTitle;
//# sourceMappingURL=CollectionTitle.d.ts.map