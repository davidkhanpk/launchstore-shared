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
  maxWidth: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
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
