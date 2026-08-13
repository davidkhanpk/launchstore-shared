export interface FlexColumnProps {
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullHeight?: boolean;
  minHeight?: string;
  /** Layout preset */
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
  /** Color preset */
  backgroundColor?: string;
  borderRadius?: string;
}
