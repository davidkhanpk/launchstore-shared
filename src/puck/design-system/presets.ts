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

// ── Shared field definitions ───────────────────────────────────────────────
// Components spread these into their allFields object.
// The render function uses the values directly as Tailwind classes.

export const sharedTypographyFields: Record<string, Field> = {
  fontSize: { type: 'select', label: 'Font Size', options: FONT_SIZE_OPTIONS },
  fontWeight: { type: 'select', label: 'Font Weight', options: FONT_WEIGHT_OPTIONS },
  textAlign: { type: 'select', label: 'Text Align', options: TEXT_ALIGN_OPTIONS },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  lineHeight: { type: 'select', label: 'Line Height', options: LINE_HEIGHT_OPTIONS },
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
  const { fontSize, fontWeight, textAlign, lineHeight } = props || {};
  return [
    fontSize ? `text-${fontSize}` : '',
    fontWeight ? `font-${fontWeight}` : '',
    textAlign ? `text-${textAlign}` : '',
    lineHeight ? `leading-${lineHeight}` : '',
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

// ── resolveColor (kept for color values — not a Tailwind class) ────────────
// Colors use hex/theme tokens applied via inline style (same as before).
// This is the ONLY inline style usage — everything else is Tailwind classes.

export { resolveColor } from '../../theme/resolveColor';
