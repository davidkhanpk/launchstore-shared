/**
 * SectionShell — the shared section skeleton implementing the ecommerce
 * section control model. Every section-level Puck component wraps its
 * content in this shell:
 *
 *   <SectionShell {...sectionProps} marginTop marginBottom>
 *     <DropZone zone="content" />   (or arbitrary children)
 *   </SectionShell>
 *
 * Layers (outermost → innermost):
 *   margins → background surface (scheme | image+overlay | gradient | color)
 *   → content wrapper (density padding, content width, H/V alignment, min-h)
 *
 * When a color scheme is active the content wrapper inherits the scheme's
 * text color, so dark schemes keep text readable without per-element work.
 */
import React from 'react';
export interface SectionShellProps {
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    gradientFrom?: string;
    gradientTo?: string;
    backgroundColor?: string;
    density?: string;
    contentWidth?: string;
    contentAlign?: string;
    verticalAlign?: string;
    minHeight?: string;
    marginTop?: string;
    marginBottom?: string;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    children: React.ReactNode;
}
/** Absolute overlay layer — renders between the background and the content. */
export declare function BackgroundOverlay({ overlayColor, overlayOpacity, }: {
    overlayColor?: string;
    overlayOpacity?: string;
}): React.JSX.Element | null;
export declare function SectionShell({ backgroundScheme, backgroundImage, backgroundSize, backgroundPosition, overlayColor, overlayOpacity, gradientFrom, gradientTo, backgroundColor, density, contentWidth, contentAlign, verticalAlign, minHeight, marginTop, marginBottom, className, style, contentClassName, children, }: SectionShellProps): React.JSX.Element;
export default SectionShell;
//# sourceMappingURL=section-shell.d.ts.map