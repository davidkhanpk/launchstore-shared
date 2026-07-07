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
  fontSize: string;
  textColor: string;
  activeColor: string;
  hoverColor: string;
  marginBottom: string;
  className?: string;
}
