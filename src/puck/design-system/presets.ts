/**
 * Shared Design System Presets — Tailwind-based
 *
 * Single source of truth for spacing, typography, color, and border
 * field definitions. Values ARE Tailwind classes — no resolve helpers,
 * no inline CSS, no math. Components use these classes directly:
 *
 *   className={`text-${fontSize} font-${fontWeight} ${marginClasses}`}
 *
 * This keeps everything in Tailwind — what was already working.
 */

import type { CSSProperties } from 'react';
import { resolveColor } from '../../theme/resolveColor';
import type { Field } from '@puckeditor/core';

// ── Option ladders ─────────────────────────────────────────────────────────
// The `value` for each option IS the Tailwind class suffix.
// Components build classes like: `text-${fontSize}`, `font-${fontWeight}`, etc.

export const FONT_SIZE_OPTIONS = [
  { label: 'XS', value: 'xs' },
  { label: 'Small', value: 'sm' },
  { label: 'Base', value: 'base' },
  { label: 'Large', value: 'lg' },
  { label: 'XL', value: 'xl' },
  { label: '2XL', value: '2xl' },
  { label: '3XL', value: '3xl' },
  { label: '4XL', value: '4xl' },
  { label: '5XL', value: '5xl' },
];

export const FONT_WEIGHT_OPTIONS = [
  { label: 'Light', value: 'light' },
  { label: 'Normal', value: 'normal' },
  { label: 'Medium', value: 'medium' },
  { label: 'Semibold', value: 'semibold' },
  { label: 'Bold', value: 'bold' },
];

export const TEXT_ALIGN_OPTIONS = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
];

export const SPACING_OPTIONS = [
  { label: 'None', value: '0' },
  { label: 'XS', value: '1' },
  { label: 'Small', value: '2' },
  { label: 'Medium', value: '4' },
  { label: 'Large', value: '6' },
  { label: 'XL', value: '8' },
];

export const RADIUS_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'XL', value: 'xl' },
  { label: 'Full', value: 'full' },
];

export const BORDER_WIDTH_OPTIONS = [
  { label: 'None', value: '0' },
  { label: 'Thin', value: '' },
  { label: 'Medium', value: '2' },
  { label: 'Thick', value: '4' },
];

export const LINE_HEIGHT_OPTIONS = [
  { label: 'Tight', value: 'tight' },
  { label: 'Snug', value: 'snug' },
  { label: 'Normal', value: 'normal' },
  { label: 'Relaxed', value: 'relaxed' },
  { label: 'Loose', value: 'loose' },
];

export const SHADOW_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'XL', value: 'xl' },
];

export const LETTER_SPACING_OPTIONS = [
  { label: 'Tight', value: 'tight' },
  { label: 'Normal', value: 'normal' },
  { label: 'Wide', value: 'wide' },
  { label: 'Wider', value: 'wider' },
];

export const TEXT_TRANSFORM_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Uppercase', value: 'uppercase' },
  { label: 'Capitalize', value: 'capitalize' },
  { label: 'Lowercase', value: 'lowercase' },
];

// ── Shared field definitions ───────────────────────────────────────────────
// Components spread these into their allFields object.
// The render function uses the values directly as Tailwind classes.

export const sharedTypographyFields: Record<string, Field> = {
  fontSize: { type: 'select', label: 'Font Size', options: FONT_SIZE_OPTIONS },
  fontWeight: { type: 'select', label: 'Font Weight', options: FONT_WEIGHT_OPTIONS },
  textAlign: { type: 'select', label: 'Text Align', options: TEXT_ALIGN_OPTIONS },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  lineHeight: { type: 'select', label: 'Line Height', options: LINE_HEIGHT_OPTIONS },
  letterSpacing: { type: 'select', label: 'Letter Spacing', options: LETTER_SPACING_OPTIONS },
  textTransform: { type: 'select', label: 'Text Transform', options: TEXT_TRANSFORM_OPTIONS },
};

export const sharedLayoutFields: Record<string, Field> = {
  marginTop: { type: 'select', label: 'Margin Top', options: SPACING_OPTIONS },
  marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
  paddingX: { type: 'select', label: 'Padding X', options: SPACING_OPTIONS },
  paddingY: { type: 'select', label: 'Padding Y', options: SPACING_OPTIONS },
};

export const sharedColorFields: Record<string, Field> = {
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
};

export const sharedBorderFields: Record<string, Field> = {
  borderWidth: { type: 'select', label: 'Border Width', options: BORDER_WIDTH_OPTIONS },
  borderColor: { type: 'text', label: 'Border Color (hex or theme token)' },
};

// ── Section semantics: background ──────────────────────────────────────────
// The ecommerce section control model: sections pick a background SCHEME
// (reusable, defined in the theme), an IMAGE with overlay, or a GRADIENT —
// or a plain color. Image > gradient > scheme > color in precedence.

export const BACKGROUND_SCHEME_OPTIONS = [
  { label: 'None', value: '' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'Accent', value: 'accent' },
  { label: 'Subtle', value: 'subtle' },
];

export const BACKGROUND_SIZE_OPTIONS = [
  { label: 'Cover', value: 'cover' },
  { label: 'Contain', value: 'contain' },
  { label: 'Auto', value: 'auto' },
];

export const BACKGROUND_POSITION_OPTIONS = [
  { label: 'Center', value: 'center' },
  { label: 'Top', value: 'top' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Top Left', value: 'top left' },
  { label: 'Top Right', value: 'top right' },
  { label: 'Bottom Left', value: 'bottom left' },
  { label: 'Bottom Right', value: 'bottom right' },
];

export const OVERLAY_OPACITY_OPTIONS = [
  { label: 'None', value: '0' },
  { label: '10%', value: '10' },
  { label: '20%', value: '20' },
  { label: '30%', value: '30' },
  { label: '40%', value: '40' },
  { label: '50%', value: '50' },
  { label: '60%', value: '60' },
  { label: '70%', value: '70' },
  { label: '80%', value: '80' },
  { label: '90%', value: '90' },
  { label: '100%', value: '100' },
];

export const sharedBackgroundFields: Record<string, Field> = {
  backgroundScheme: { type: 'select', label: 'Color Scheme', options: BACKGROUND_SCHEME_OPTIONS },
  backgroundImage: { type: 'text', label: 'Background Image URL (token-free)' },
  backgroundSize: { type: 'select', label: 'Background Size', options: BACKGROUND_SIZE_OPTIONS },
  backgroundPosition: { type: 'select', label: 'Background Position', options: BACKGROUND_POSITION_OPTIONS },
  overlayColor: { type: 'text', label: 'Overlay Color (hex or theme token)' },
  overlayOpacity: { type: 'select', label: 'Overlay Opacity', options: OVERLAY_OPACITY_OPTIONS },
  gradientFrom: { type: 'text', label: 'Gradient From (hex or theme token)' },
  gradientTo: { type: 'text', label: 'Gradient To (hex or theme token)' },
};

// ── Section semantics: layout ──────────────────────────────────────────────

export const DENSITY_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Compact', value: 'compact' },
  { label: 'Comfortable', value: 'comfortable' },
  { label: 'Spacious', value: 'spacious' },
];

export const CONTENT_WIDTH_OPTIONS = [
  { label: 'Narrow (768px)', value: 'narrow' },
  { label: 'Standard (1024px)', value: 'standard' },
  { label: 'Wide (1280px)', value: 'wide' },
  { label: 'Full', value: 'full' },
];

export const CONTENT_ALIGN_OPTIONS = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
];

export const VERTICAL_ALIGN_OPTIONS = [
  { label: 'Top', value: 'top' },
  { label: 'Middle', value: 'middle' },
  { label: 'Bottom', value: 'bottom' },
];

export const MIN_HEIGHT_OPTIONS = [
  { label: 'Auto', value: '' },
  { label: 'Small (256px)', value: 'sm' },
  { label: 'Medium (384px)', value: 'md' },
  { label: 'Large (480px)', value: 'lg' },
  { label: 'XL (576px)', value: 'xl' },
  { label: 'Full Screen', value: 'screen' },
];

export const sharedSectionLayoutFields: Record<string, Field> = {
  density: { type: 'select', label: 'Density', options: DENSITY_OPTIONS },
  contentWidth: { type: 'select', label: 'Content Width', options: CONTENT_WIDTH_OPTIONS },
  contentAlign: { type: 'select', label: 'Content Align', options: CONTENT_ALIGN_OPTIONS },
  verticalAlign: { type: 'select', label: 'Vertical Align', options: VERTICAL_ALIGN_OPTIONS },
  minHeight: { type: 'select', label: 'Min Height', options: MIN_HEIGHT_OPTIONS },
};

// ── Default prop values (spread into defaultProps) ─────────────────────────

export const defaultTypographyProps = {
  fontSize: 'base',
  fontWeight: 'normal',
  textAlign: 'left',
  textColor: '#111827',
  lineHeight: 'normal',
};

export const defaultLayoutProps = {
  marginTop: '0',
  marginBottom: '4',
  paddingX: '0',
  paddingY: '0',
};

export const defaultColorProps = {
  backgroundColor: 'transparent',
  borderRadius: 'none',
};

export const defaultBorderProps = {
  borderWidth: '0',
  borderColor: '#e5e7eb',
};

// ── Helper: build Tailwind classes from prop values ────────────────────────
// One function that components call in render to get a className string.
// No CSS values, no inline styles — pure Tailwind classes.

export function buildTypographyClasses(props: any): string {
  const { fontSize, fontWeight, textAlign, lineHeight, letterSpacing, textTransform } = props || {};
  const transform = textTransform && textTransform !== 'none' ? textTransform : '';
  return [
    fontSize ? `text-${fontSize}` : '',
    fontWeight ? `font-${fontWeight}` : '',
    textAlign ? `text-${textAlign}` : '',
    lineHeight ? `leading-${lineHeight}` : '',
    letterSpacing && letterSpacing !== 'normal' ? `tracking-${letterSpacing}` : '',
    transform,
  ].filter(Boolean).join(' ');
}

export function buildLayoutClasses(props: any): string {
  const { marginTop, marginBottom, paddingX, paddingY } = props || {};
  return [
    marginTop ? `mt-${marginTop}` : '',
    marginBottom ? `mb-${marginBottom}` : '',
    paddingX ? `px-${paddingX}` : '',
    paddingY ? `py-${paddingY}` : '',
  ].filter(Boolean).join(' ');
}

export function buildColorClasses(props: any): string {
  const { borderRadius } = props || {};
  return [
    borderRadius ? `rounded-${borderRadius}` : '',
  ].filter(Boolean).join(' ');
}

export function buildBorderClasses(props: any): string {
  const { borderWidth } = props || {};
  if (!borderWidth) return '';
  return borderWidth === '0' ? 'border-0' : `border-${borderWidth}`;
}

// ── Section semantics: builders ────────────────────────────────────────────

/** Density → vertical padding classes. */
const DENSITY_CLASS: Record<string, string> = {
  none: '',
  compact: 'py-6',
  comfortable: 'py-12',
  spacious: 'py-20',
};

/** Content width → max-width class. */
const CONTENT_WIDTH_CLASS: Record<string, string> = {
  narrow: 'max-w-3xl',
  standard: 'max-w-5xl',
  wide: 'max-w-7xl',
  full: 'max-w-full',
};

/** Content align (flex justify) → class. */
const CONTENT_ALIGN_CLASS: Record<string, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

/** Vertical align (flex items) → class. */
const VERTICAL_ALIGN_CLASS: Record<string, string> = {
  top: 'items-start',
  middle: 'items-center',
  bottom: 'items-end',
};

/** Min height → class. */
const MIN_HEIGHT_CLASS: Record<string, string> = {
  sm: 'min-h-64',
  md: 'min-h-96',
  lg: 'min-h-[480px]',
  xl: 'min-h-[576px]',
  screen: 'min-h-screen',
};

/**
 * Resolve the section's background LAYERS. Precedence: image > gradient >
 * scheme > plain color. Returns the inline style for the background surface
 * plus whether an overlay should render. Colors resolve through theme tokens
 * (schemes chain so brand changes flow).
 */
export function buildBackground(props: {
  backgroundScheme?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;
}): { style: CSSProperties; hasOverlaySource: boolean } {
  const {
    backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
    gradientFrom, gradientTo, backgroundColor,
  } = props || {};

  if (backgroundImage) {
    return {
      style: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundSize || 'cover',
        backgroundPosition: backgroundPosition || 'center',
        backgroundRepeat: 'no-repeat',
      },
      hasOverlaySource: true,
    };
  }

  if (gradientFrom || gradientTo) {
    const from = resolveColor(gradientFrom) || 'transparent';
    const to = resolveColor(gradientTo) || 'transparent';
    return {
      style: { backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` },
      hasOverlaySource: false,
    };
  }

  if (backgroundScheme) {
    return {
      style: { backgroundColor: resolveColor(`scheme.${backgroundScheme}.background`) },
      hasOverlaySource: false,
    };
  }

  if (backgroundColor) {
    return { style: { backgroundColor: resolveColor(backgroundColor) }, hasOverlaySource: false };
  }

  return { style: {}, hasOverlaySource: false };
}

/** Classes for the section's content wrapper (inside the background surface). */
export function buildSectionContentClasses(props: {
  density?: string;
  contentWidth?: string;
  contentAlign?: string;
  verticalAlign?: string;
  minHeight?: string;
}): string {
  const { density, contentWidth, contentAlign, verticalAlign, minHeight } = props || {};
  return [
    'mx-auto w-full flex flex-col',
    DENSITY_CLASS[density || 'compact'] || '',
    (contentWidth && CONTENT_WIDTH_CLASS[contentWidth]) || 'max-w-5xl',
    (contentAlign && CONTENT_ALIGN_CLASS[contentAlign]) || '',
    (verticalAlign && VERTICAL_ALIGN_CLASS[verticalAlign]) || '',
    (minHeight && MIN_HEIGHT_CLASS[minHeight]) || '',
  ].filter(Boolean).join(' ');
}

// ── resolveColor (kept for color values — not a Tailwind class) ────────────
// Colors use hex/theme tokens applied via inline style (same as before).
// This is the ONLY inline style usage — everything else is Tailwind classes.

export { resolveColor } from '../../theme/resolveColor';
