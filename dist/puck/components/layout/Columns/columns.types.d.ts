export interface ColumnsProps {
    /** Background: scheme | image + overlay | gradient | color */
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    gradientFrom?: string;
    gradientTo?: string;
    columns?: '2' | '3' | '4';
    layout?: 'equal' | '60-40' | '40-60' | '70-30' | '30-70' | '50-50';
    gap?: string;
    mobileStack?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    /** Layout preset */
    marginTop?: string;
    marginBottom?: string;
    paddingX?: string;
    paddingY?: string;
}
//# sourceMappingURL=columns.types.d.ts.map