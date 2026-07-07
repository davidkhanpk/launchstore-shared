export interface SocialIconLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'github';
  url: string;
}

export interface SocialIconsProps {
  links: SocialIconLink[];
  size: 'sm' | 'md' | 'lg';
  style: 'circle' | 'square' | 'minimal';
  color: string;
  hoverColor: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  gap: 'sm' | 'md' | 'lg';
  alignment: 'left' | 'center' | 'right';
}
