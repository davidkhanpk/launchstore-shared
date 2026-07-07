export interface ButtonProps {
  text: string;
  url: string;
  openInNewTab: boolean;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth: boolean;
  // 5 color fields accept hex ('#3b82f6') or theme tokens ('brand.primary').
  // Frontend consumer wraps each with ColorField (token picker widget).
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  showIcon: boolean;
  iconPosition: 'left' | 'right';
  // Note: 'iconName' was a dead field (icon was always ArrowRightIcon)
  // — dropped per migration path rules.
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  alignment: 'left' | 'center' | 'right';
  marginTop: number;
  marginBottom: number;
}
