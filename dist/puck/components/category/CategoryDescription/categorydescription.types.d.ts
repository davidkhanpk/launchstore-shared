export interface SharedCategoryNode {
    id: string;
    name: string;
    handle: string;
    description?: string;
    parent_category?: SharedCategoryNode | null;
    product_count?: number;
    updated_at?: string;
}
export interface CategoryDescriptionProps {
    category?: SharedCategoryNode | null;
    fontSize: 'sm' | 'base' | 'md' | 'lg' | 'xl';
    color: 'default' | 'black' | 'gray' | 'muted' | 'white';
    alignment: 'left' | 'center' | 'right' | 'justify';
    lineHeight: 'tight' | 'normal' | 'relaxed' | 'loose';
    maxWidth: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    marginBottom?: string;
    className?: string;
}
//# sourceMappingURL=categorydescription.types.d.ts.map