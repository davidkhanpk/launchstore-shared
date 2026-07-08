import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionHeaderProps {
    showTitle: boolean;
    showDescription: boolean;
    showBanner: boolean;
    showProductCount: boolean;
    titleSize: '2xl' | '3xl' | '4xl';
    alignment: 'left' | 'center' | 'right';
    bannerHeight: 'sm' | 'md' | 'lg';
}
export interface CollectionHeaderWithData extends CollectionHeaderProps {
    title?: string;
    description?: string;
    bannerUrl?: string;
    productCount?: number;
    breadcrumbsHref?: string;
    collectionsHref?: string;
}
export declare const CollectionHeader: ComponentConfig<CollectionHeaderWithData>;
export default CollectionHeader;
//# sourceMappingURL=CollectionHeader.d.ts.map