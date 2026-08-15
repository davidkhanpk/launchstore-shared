import React from 'react';
import { SectionShell } from './section-shell';
import type { SectionShellProps } from './section-shell';
import { buildColorClasses, buildBorderClasses, resolveColor } from './presets';

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
export const StyledSection: React.FC<StyledSectionProps> = ({
  borderRadius,
  borderWidth,
  borderColor,
  shadow,
  ...shellProps
}) => {
  const surfaceClasses = [
    buildColorClasses({ borderRadius }),
    buildBorderClasses({ borderWidth }),
    shadow && shadow !== 'none' ? `shadow-${shadow}` : '',
    'overflow-hidden',
  ].filter(Boolean).join(' ');

  const surfaceStyle: React.CSSProperties = {};
  const bw = borderWidth;
  if (bw && bw !== '0') {
    surfaceStyle.borderStyle = 'solid';
    surfaceStyle.borderColor = resolveColor(borderColor) || '#e5e7eb';
  }

  return (
    <SectionShell
      {...shellProps}
      className={surfaceClasses}
      style={surfaceStyle}
    />
  );
};

export default StyledSection;
