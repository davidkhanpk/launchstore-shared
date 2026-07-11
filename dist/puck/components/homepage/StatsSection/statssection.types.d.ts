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
    alignment: 'left' | 'center' | 'right';
    stats: StatsItem[];
    backgroundColor: string;
    textColor: string;
    numberColor: string;
    spacing: 'compact' | 'normal' | 'spacious';
    showDividers: boolean;
    borderRadius: 'none' | 'sm' | 'md' | 'lg';
}
//# sourceMappingURL=statssection.types.d.ts.map