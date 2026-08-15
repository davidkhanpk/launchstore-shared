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
import { resolveColor } from '../../theme/resolveColor';
import { buildBackground, buildSectionContentClasses, sectionMinHeight } from './presets';

export interface SectionShellProps {
  // Background (scheme | image+overlay | gradient | color)
  backgroundScheme?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;
  // Section layout
  density?: string;
  contentWidth?: string;
  contentAlign?: string;
  verticalAlign?: string;
  minHeight?: string;
  // Outer spacing
  marginTop?: string;
  marginBottom?: string;
  // Escape hatches
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  children: React.ReactNode;
}

/** Absolute overlay layer — renders between the background and the content. */
export function BackgroundOverlay({
  overlayColor,
  overlayOpacity,
}: {
  overlayColor?: string;
  overlayOpacity?: string;
}) {
  const opacity = Number(overlayOpacity) || 0;
  if (!overlayColor || opacity <= 0) return null;
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ backgroundColor: resolveColor(overlayColor), opacity: opacity / 100 }}
    />
  );
}

export function SectionShell({
  backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
  overlayColor, overlayOpacity, gradientFrom, gradientTo, backgroundColor,
  density, contentWidth, contentAlign, verticalAlign, minHeight,
  marginTop, marginBottom,
  className, style, contentClassName, children,
}: SectionShellProps) {
  const bg = buildBackground({
    backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
    gradientFrom, gradientTo, backgroundColor,
  });

  const marginClasses = [
    marginTop ? `mt-${marginTop}` : '',
    marginBottom ? `mb-${marginBottom}` : '',
  ].filter(Boolean).join(' ');

  const contentClasses = [
    buildSectionContentClasses({ density, contentWidth, contentAlign, verticalAlign }),
    contentClassName || '',
  ].filter(Boolean).join(' ');

  // Dark/accent schemes flip the default text color for readability.
  const schemeTextColor = backgroundScheme
    ? resolveColor(`scheme.${backgroundScheme}.text`)
    : undefined;

  // Min-height as an inline style — identical in every consumer, regardless
  // of whether their Tailwind generates the equivalent class.
  const minHeightPx = sectionMinHeight(minHeight);

  return (
    <section className={marginClasses}>
      <div className={`relative w-full ${className || ''}`} style={{ ...bg.style, ...style }}>
        {bg.hasOverlaySource && (
          <BackgroundOverlay overlayColor={overlayColor} overlayOpacity={overlayOpacity} />
        )}
        <div
          className={`relative ${contentClasses}`}
          style={{
            ...(minHeightPx ? { minHeight: minHeightPx } : {}),
            ...(schemeTextColor ? { color: schemeTextColor } : {}),
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionShell;
