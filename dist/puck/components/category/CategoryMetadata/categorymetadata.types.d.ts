export interface SharedCategoryNode {
    id: string;
    name: string;
    handle: string;
    description?: string;
    parent_category?: SharedCategoryNode | null;
    product_count?: number;
    updated_at?: string;
}
export interface CategoryMetadataProps {
    category?: SharedCategoryNode | null;
    showHandle: boolean;
    showProductCount: boolean;
    showUpdatedDate: boolean;
    layout: 'horizontal' | 'vertical';
    iconColor: string;
    spacing: string;
    className?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    textColor?: string;
    lineHeight?: string;
    marginTop?: string;
    marginBottom?: string;
    paddingX?: string;
    paddingY?: string;
    backgroundColor?: string;
    borderRadius?: string;
}
//# sourceMappingURL=categorymetadata.types.d.ts.map