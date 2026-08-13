export interface SharedCategoryNode {
    id: string;
    name: string;
    handle: string;
    description?: string;
    parent_category?: SharedCategoryNode | null;
    product_count?: number;
    updated_at?: string;
}
export interface CategoryBreadcrumbsProps {
    category?: SharedCategoryNode | null;
    countryCode?: string;
    separator: string;
    showHome: boolean;
    homeText: string;
    activeColor: string;
    hoverColor: string;
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
//# sourceMappingURL=categorybreadcrumbs.types.d.ts.map