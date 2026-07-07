export interface AvatarProps {
  id?: string;
  src: string;
  name: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  shape: 'circle' | 'square';
  backgroundColor: string;
  textColor: string;
  showName: boolean;
  namePosition: 'right' | 'bottom';
}
