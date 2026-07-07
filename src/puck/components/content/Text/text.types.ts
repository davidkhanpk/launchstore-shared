export interface TextProps {
  text: string;
  richText: boolean;
  fontSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  fontWeight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  lineHeight: 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  textAlign: 'left' | 'center' | 'right' | 'justify';
  color: string;
  maxWidth: string;
  marginTop: number;
  marginBottom: number;
  paddingX: number;
  paddingY: number;
}
