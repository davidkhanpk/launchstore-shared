export interface FlexRowProps {
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  fullWidth?: boolean;
  maxWidth?: string;
  /** Layout preset */
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
  /** Color preset */
  backgroundColor?: string;
  borderRadius?: string;
}
