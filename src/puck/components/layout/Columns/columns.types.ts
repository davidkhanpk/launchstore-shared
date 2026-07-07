export interface ColumnsProps {
  columns: '2' | '3' | '4';
  layout?: 'equal' | '60-40' | '40-60' | '70-30' | '30-70' | '50-50';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  mobileStack?: boolean;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
}
