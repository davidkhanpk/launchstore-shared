export interface ListItem {
  text: string;
}

export interface ListProps {
  id?: string;
  items: ListItem[];
  type?: 'bullet' | 'numbered' | 'check' | 'none';
  spacing?: 'tight' | 'normal' | 'relaxed';
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  textColor?: string;
  lineHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
}
