export interface DividerProps {
  id?: string;
  style: 'solid' | 'dashed' | 'dotted';
  thickness: '1' | '2' | '4';
  color: string;
  width: 'full' | '3/4' | '1/2' | '1/4';
  marginTop: 'none' | 'sm' | 'md' | 'lg';
  marginBottom: 'none' | 'sm' | 'md' | 'lg';
}
