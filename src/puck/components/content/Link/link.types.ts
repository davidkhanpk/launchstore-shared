export interface LinkProps {
  id?: string;
  text: string;
  href: string;
  target: '_self' | '_blank';
  color: string;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';
  underline: 'always' | 'hover' | 'none';
}
