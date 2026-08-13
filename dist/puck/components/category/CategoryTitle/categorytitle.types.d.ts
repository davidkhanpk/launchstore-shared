export interface SharedCategoryNode {
    id: string;
    name: string;
    handle: string;
    description?: string;
    parent_category?: SharedCategoryNode | null;
    product_count?: number;
    updated_at?: string;
}
export interface CategoryTitleProps {
    category?: SharedCategoryNode | null;
    tag: 'h1' | 'h2' | 'h3' | 'h4';
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
//# sourceMappingURL=categorytitle.types.d.ts.map