export interface RichTextContentProps {
  content: string;
  maxWidth: string;
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
