export interface LinkProps {
  id?: string;
  text: string;
  href: string;
  target: '_self' | '_blank';
  underline: 'always' | 'hover' | 'none';
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  marginTop?: string;
  marginBottom?: string;
}
