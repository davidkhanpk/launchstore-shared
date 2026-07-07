export interface LogoProps {
  imageUrl: string;
  altText: string;
  linkTo: string;
  maxWidth: string;
  maxHeight: string;
  showText: boolean;
  text: string;
  textPosition: 'right' | 'below';
  textSize: 'sm' | 'base' | 'lg' | 'xl';
  textColor: string;
  textWeight: 'normal' | 'medium' | 'semibold' | 'bold';
}
