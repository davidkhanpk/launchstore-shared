import React from 'react';
import type { SectionShellProps } from './section-shell';
export interface StyledSectionProps extends SectionShellProps {
    borderRadius?: string;
    borderWidth?: string;
    borderColor?: string;
    shadow?: string;
}
/**
 * StyledSection — universal section wrapper for Puck components, now built
 * on SectionShell (the ecommerce section control model): background scheme /
 * image + overlay / gradient, density, content width, alignment, min-height.
 * Surface extras (radius, border, shadow) layer on top of the shell.
 */
export declare const StyledSection: React.FC<StyledSectionProps>;
export default StyledSection;
//# sourceMappingURL=StyledSection.d.ts.map