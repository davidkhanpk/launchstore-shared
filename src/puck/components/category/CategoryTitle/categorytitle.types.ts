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
  // Shared typography
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  textColor?: string;
  lineHeight?: string;
  // Shared layout
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
  // Shared color
  backgroundColor?: string;
  borderRadius?: string;
}
