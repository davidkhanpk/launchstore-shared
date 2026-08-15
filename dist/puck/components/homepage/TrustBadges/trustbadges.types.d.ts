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
    badges: TrustBadgeItem[];
    backgroundColor: string;
    textColor: string;
    showBorder: boolean;
    /** Tailwind radius scale value — see RADIUS_OPTIONS in the design system. */
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    gradientFrom?: string;
    gradientTo?: string;
    density?: string;
    contentWidth?: string;
    contentAlign?: string;
    verticalAlign?: string;
    minHeight?: string;
}
//# sourceMappingURL=trustbadges.types.d.ts.map