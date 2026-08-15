import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ButtonProps } from './button.types';
import {
  RADIUS_OPTIONS,
  SHADOW_OPTIONS,
  SPACING_OPTIONS,
  TEXT_ALIGN_OPTIONS,
  buildColorClasses,
} from '../../../design-system';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '20px', height: '20px' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const SIZE_MAP: Record<string, { padding: string; fontSize: string }> = {
  sm: { padding: '8px 16px', fontSize: '0.875rem' },
  md: { padding: '12px 24px', fontSize: '1rem' },
  lg: { padding: '16px 32px', fontSize: '1.125rem' },
  xl: { padding: '20px 40px', fontSize: '1.25rem' },
};

/**
 * Variant → theme token map. Used when the merchant hasn't set an explicit
 * color, so variants are visually real and follow the theme automatically
 * (change brand.primary → every primary CTA follows).
 */
const VARIANT_TOKENS: Record<string, { bg: string; text: string; border?: string }> = {
  primary: { bg: 'button.primary.background', text: 'button.primary.text' },
  secondary: { bg: 'button.secondary.background', text: 'button.secondary.text' },
  outline: { bg: 'transparent', text: 'brand.primary', border: 'brand.primary' },
  ghost: { bg: 'transparent', text: 'brand.primary' },
  danger: { bg: 'button.danger.background', text: 'button.danger.text' },
};

// Legacy semantic margin values (pre-normalization) still resolve.
const LEGACY_SPACING: Record<string, string> = { none: '0', xs: '1', sm: '2', md: '4', lg: '6', xl: '8' };

// ── Fields ───────────────────────────────────────────────────────────────────

const contentFields = {
  text: { type: 'text' as const, label: 'Button Text' },
  url: { type: 'text' as const, label: 'URL' },
  openInNewTab: { type: 'radio' as const, label: 'Open in New Tab', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  variant: {
    type: 'select' as const, label: 'Variant',
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Outline', value: 'outline' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Danger', value: 'danger' },
    ],
  },
  size: {
    type: 'select' as const, label: 'Size',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'XL', value: 'xl' },
    ],
  },
  fullWidth: { type: 'radio' as const, label: 'Full Width', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showIcon: { type: 'radio' as const, label: 'Show Icon', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  iconPosition: {
    type: 'select' as const, label: 'Icon Position',
    options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
  },
};

const buttonColorFields = {
  backgroundColor: { type: 'text' as const, label: 'Background Color (empty = theme variant)' },
  textColor: { type: 'text' as const, label: 'Text Color (empty = theme variant)' },
  borderColor: { type: 'text' as const, label: 'Border Color' },
  hoverBackgroundColor: { type: 'text' as const, label: 'Hover Background' },
  hoverTextColor: { type: 'text' as const, label: 'Hover Text Color' },
  borderRadius: { type: 'select' as const, label: 'Border Radius', options: RADIUS_OPTIONS },
  shadow: { type: 'select' as const, label: 'Shadow', options: SHADOW_OPTIONS },
};

const layoutFields = {
  textAlign: { type: 'select' as const, label: 'Alignment', options: TEXT_ALIGN_OPTIONS },
  marginTop: { type: 'select' as const, label: 'Margin Top', options: SPACING_OPTIONS },
  marginBottom: { type: 'select' as const, label: 'Margin Bottom', options: SPACING_OPTIONS },
};

const allFields = {
  ...contentFields,
  ...buttonColorFields,
  ...layoutFields,
};

// ── Component ────────────────────────────────────────────────────────────────

export const Button: ComponentConfig<ButtonProps> = {
  label: 'Button',
  fields: allFields as any,
  defaultProps: {
    text: 'Click Me',
    url: '#',
    openInNewTab: false,
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    // Colors intentionally empty — variants resolve through theme tokens.
    backgroundColor: '',
    textColor: '',
    borderColor: '',
    hoverBackgroundColor: '',
    hoverTextColor: '',
    showIcon: false,
    iconPosition: 'right',
    borderRadius: 'md',
    shadow: 'sm',
    textAlign: 'left',
    marginTop: '0',
    marginBottom: '4',
  } as ButtonProps,
  render: (rawProps: any) => {
    const {
      text, url, openInNewTab, variant, size, fullWidth,
      backgroundColor, textColor, borderColor, hoverBackgroundColor, hoverTextColor,
      showIcon, iconPosition, borderRadius, shadow, textAlign, marginTop, marginBottom,
    } = rawProps;

    const sizeStyle = SIZE_MAP[size] || SIZE_MAP.md;
    const tokens = VARIANT_TOKENS[variant] || VARIANT_TOKENS.primary;
    const justifyMap: Record<string, string> = { left: 'flex-start', center: 'center', right: 'flex-end' };
    const shadowMap: Record<string, string> = {
      none: 'none', sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.1)',
      lg: '0 10px 15px rgba(0,0,0,0.1)', xl: '0 20px 25px rgba(0,0,0,0.15)',
    };

    const spacingValue = (v?: string) => (v == null ? '' : LEGACY_SPACING[v] ?? v);
    const marginClasses = [
      marginTop != null ? `mt-${spacingValue(marginTop)}` : '',
      marginBottom != null ? `mb-${spacingValue(marginBottom)}` : '',
    ].filter(Boolean).join(' ');

    // Explicit prop wins; otherwise resolve through the variant's theme tokens.
    const resolvedBg = backgroundColor ? resolveColor(backgroundColor) : resolveColor(tokens.bg);
    const resolvedText = textColor ? resolveColor(textColor) : resolveColor(tokens.text);
    const isOutline = variant === 'outline';
    const resolvedBorder = borderColor
      ? resolveColor(borderColor)
      : tokens.border ? resolveColor(tokens.border) : resolvedBg;

    const buttonStyle: React.CSSProperties = {
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 600,
      padding: sizeStyle.padding,
      fontSize: sizeStyle.fontSize,
      boxShadow: shadowMap[shadow || 'sm'] || 'none',
      backgroundColor: resolvedBg || '#000000',
      color: resolvedText || '#ffffff',
      borderWidth: isOutline ? '2px' : '0',
      borderColor: resolvedBorder,
      borderStyle: isOutline ? 'solid' : undefined,
      textDecoration: 'none',
      cursor: 'pointer',
      justifyContent: fullWidth ? 'center' : undefined,
      width: fullWidth ? '100%' : undefined,
      transition: 'transform 0.2s, background-color 0.2s, opacity 0.2s',
    };

    const buttonClassName = [
      'btn-shared',
      buildColorClasses({ borderRadius }),
      hoverBackgroundColor || hoverTextColor ? '' : 'hover:opacity-90',
    ].filter(Boolean).join(' ');

    const hoverCss = (hoverBackgroundColor || hoverTextColor)
      ? `.btn-shared:hover { background-color: ${resolveColor(hoverBackgroundColor) || 'transparent'} !important; color: ${resolveColor(hoverTextColor) || resolvedText || '#fff'} !important; }`
      : '';

    return (
      <div className={marginClasses} style={{ display: 'flex', justifyContent: justifyMap[textAlign || 'left'] || 'flex-start' }}>
        <a
          href={url || '#'}
          target={openInNewTab ? '_blank' : undefined}
          rel={openInNewTab ? 'noopener noreferrer' : undefined}
          className={buttonClassName}
          style={buttonStyle}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {showIcon && iconPosition === 'left' && <ArrowIcon />}
          {text}
          {showIcon && iconPosition === 'right' && <ArrowIcon />}
        </a>
        {hoverCss && <style dangerouslySetInnerHTML={{ __html: hoverCss }} />}
      </div>
    );
  },
};

export default Button;
