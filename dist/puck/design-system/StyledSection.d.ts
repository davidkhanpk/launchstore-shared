import React from 'react';
export interface StyledSectionProps {
    marginTop?: string;
    marginBottom?: string;
    paddingX?: string;
    paddingY?: string;
    backgroundColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    borderColor?: string;
    children: React.ReactNode;
}
/**
 * StyledSection — universal layout wrapper for all Puck components.
 *
 * Uses Tailwind classes (via buildLayoutClasses/buildColorClasses) for
 * spacing, padding, and border radius. Colors use inline style with
 * resolveColor (hex/token → CSS value).
 */
export declare const StyledSection: React.FC<StyledSectionProps>;
export default StyledSection;
//# sourceMappingURL=StyledSection.d.ts.map