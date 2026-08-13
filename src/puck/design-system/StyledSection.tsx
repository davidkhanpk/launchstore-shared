import React from 'react';
import { resolveColor } from '../../theme/resolveColor';
import {
  buildLayoutClasses,
  buildColorClasses,
} from './presets';

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
export const StyledSection: React.FC<StyledSectionProps> = ({
  marginTop,
  marginBottom,
  paddingX,
  paddingY,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  children,
}) => {
  const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
  const colorClasses = buildColorClasses({ borderRadius });
  const borderClasses = borderWidth ? `border-${borderWidth}` : '';

  const style: React.CSSProperties = {};
  if (backgroundColor && backgroundColor !== 'transparent') {
    style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
  }
  const bw = borderWidth;
  if (bw && bw !== '0') {
    style.borderWidth = `${bw}px`;
    style.borderStyle = 'solid';
    style.borderColor = resolveColor(borderColor) || borderColor || '#e5e7eb';
  }

  const allClasses = [layoutClasses, colorClasses, borderClasses].filter(Boolean).join(' ');

  return <div className={allClasses} style={style}>{children}</div>;
};

export default StyledSection;
