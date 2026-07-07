export interface GridProps {
  id?: string;
  columns: '1' | '2' | '3' | '4' | '5' | '6';
  tabletColumns: '1' | '2' | '3' | '4';
  mobileColumns: '1' | '2';
  gap: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
