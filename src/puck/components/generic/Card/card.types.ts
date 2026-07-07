export interface CardProps {
  id?: string;
  padding: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  border: boolean;
  rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundColor: string;
  hoverEffect: boolean;
}
