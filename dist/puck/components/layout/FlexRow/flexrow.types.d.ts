export interface FlexRowProps {
    /** Background: scheme | image + overlay | gradient | color */
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    gradientFrom?: string;
    gradientTo?: string;
    justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    gap?: string;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    fullWidth?: boolean;
    maxWidth?: string;
    /** Layout preset */
    marginTop?: string;
    marginBottom?: string;
    paddingX?: string;
    paddingY?: string;
    /** Color preset */
    backgroundColor?: string;
    borderRadius?: string;
}
//# sourceMappingURL=flexrow.types.d.ts.map