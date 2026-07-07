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
  textColor: string;
  iconColor: string;
  fontSize: 'sm' | 'base';
  gap: 'sm' | 'md' | 'lg';
}
