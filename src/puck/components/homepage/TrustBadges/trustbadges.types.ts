export interface TrustBadgeItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconColor: string;
}

export interface TrustBadgesProps {
  id?: string;
  title?: string;
  subtitle?: string;
  layout: 'horizontal' | 'grid' | 'stacked';
  columns: '2' | '3' | '4' | '5';
  alignment: 'left' | 'center' | 'right';
  badges: TrustBadgeItem[];
  backgroundColor: string;
  textColor: string;
  spacing: 'compact' | 'normal' | 'spacious';
  showBorder: boolean;
  borderRadius: 'none' | 'sm' | 'md' | 'lg';
}
