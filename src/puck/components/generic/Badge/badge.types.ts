export interface BadgeProps {
  id?: string;
  text?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  customBgColor?: string;
  customTextColor?: string;
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
}
