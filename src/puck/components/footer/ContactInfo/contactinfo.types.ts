export interface ContactInfoProps {
  showAddress: boolean;
  address?: string;
  showPhone: boolean;
  phone?: string;
  showEmail: boolean;
  email?: string;
  showHours: boolean;
  hours?: string;
  showIcons: boolean;
  layout: 'stacked' | 'grid';
  textColor?: string;
  iconColor?: string;
  fontSize?: string;
  gap?: string;
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
}
