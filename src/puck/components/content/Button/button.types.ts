export interface ButtonProps {
  text: string;
  url: string;
  openInNewTab: boolean;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  showIcon: boolean;
  iconPosition: 'left' | 'right';
  borderRadius?: string;
  shadow?: string;
  textAlign?: string;
  marginTop?: string;
  marginBottom?: string;
}
