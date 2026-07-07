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
  fontSize: 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color: 'default' | 'black' | 'gray' | 'primary' | 'white';
  alignment: 'left' | 'center' | 'right';
  fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';
  marginBottom?: string;
  className?: string;
}
