import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionBreadcrumbsProps {
    showHomeIcon: boolean;
    separator: 'arrow' | 'slash' | 'chevron';
    textSize: string;
    textColor: string;
    marginBottom: string;
}
export interface CollectionBreadcrumbsWithData extends CollectionBreadcrumbsProps {
    trail?: Array<{
        label: string;
        href?: string;
    }>;
}
export declare const CollectionBreadcrumbs: ComponentConfig<CollectionBreadcrumbsWithData>;
export default CollectionBreadcrumbs;
//# sourceMappingURL=CollectionBreadcrumbs.d.ts.map