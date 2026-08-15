export interface StatsItem {
    id: string;
    number: string;
    label: string;
    description?: string;
    icon: string;
    iconColor: string;
}
export interface StatsSectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    /**
     * Column count. Puck stores field option values as strings (validated by
     * the build-registry zod schema). Cast to number in the render fn.
     */
    columns: '2' | '3' | '4';
    stats: StatsItem[];
    backgroundColor: string;
    textColor: string;
    numberColor: string;
    showDividers: boolean;
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
//# sourceMappingURL=statssection.types.d.ts.map