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
  fontSize: string;
  textColor: string;
  iconColor: string;
  spacing: string;
  className?: string;
}
