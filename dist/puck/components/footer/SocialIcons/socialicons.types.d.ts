export interface SocialIconLink {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'github';
    url: string;
}
export interface SocialIconsProps {
    links: SocialIconLink[];
    size?: 'sm' | 'md' | 'lg';
    style?: 'circle' | 'square' | 'minimal';
    textColor?: string;
    hoverColor?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    gap?: 'sm' | 'md' | 'lg';
    alignment?: 'left' | 'center' | 'right';
    marginTop?: string;
    marginBottom?: string;
    paddingX?: string;
    paddingY?: string;
}
//# sourceMappingURL=socialicons.types.d.ts.map