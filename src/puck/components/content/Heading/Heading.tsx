import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { headingFields } from './heading.fields';
import type { HeadingProps } from './heading.types';

const SIZE: Record<NonNullable<HeadingProps['size']>, string> = {
  xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg',
  xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl', '4xl': 'text-4xl', '5xl': 'text-5xl',
};
const WEIGHT = {
  light: 'font-light', normal: 'font-normal', medium: 'font-medium',
  semibold: 'font-semibold', bold: 'font-bold',
};
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const LINE_HEIGHT = {
  tight: 'leading-tight', snug: 'leading-snug', normal: 'leading-normal',
  relaxed: 'leading-relaxed', loose: 'leading-loose',
};
const LETTER_SPACING = {
  tighter: 'tracking-tighter', tight: 'tracking-tight', normal: 'tracking-normal',
  wide: 'tracking-wide', wider: 'tracking-wider', widest: 'tracking-widest',
};
const ANIMATION_CLASS = {
  fadeIn: 'animate-fadeIn', slideUp: 'animate-slideUp',
  slideDown: 'animate-slideDown', none: '',
};

const KEYFRAMES = `
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fadeIn { animation: fadeIn 0.6s ease-out both; }
.animate-slideUp { animation: slideUp 0.6s ease-out both; }
.animate-slideDown { animation: slideDown 0.6s ease-out both; }
`;

export const Heading: ComponentConfig<HeadingProps> = {
  label: 'Heading',
  fields: headingFields as ComponentConfig<HeadingProps>['fields'],
  defaultProps: {
    text: 'Your Heading Here',
    level: 'h2',
    size: undefined,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1f2937',
    fontSize: '',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    marginTop: 0,
    marginBottom: 16,
    animation: 'none',
    animationDelay: 0,
  },
  render: ({
    text, level, size, fontWeight, textAlign, color, fontSize,
    lineHeight, letterSpacing, marginTop, marginBottom, animation, animationDelay,
  }) => {
    const sizeClass = size ? SIZE[size] : '';
    const weightClass = WEIGHT[fontWeight || 'semibold'] || 'font-semibold';
    const alignClass = ALIGN[textAlign || 'left'] || 'text-left';
    const lineHeightClass = LINE_HEIGHT[lineHeight || 'normal'] || 'leading-normal';
    const letterSpacingClass = LETTER_SPACING[letterSpacing || 'normal'] || 'tracking-normal';
    const animationClass = ANIMATION_CLASS[animation || 'none'] || '';

    const style: React.CSSProperties = {
      color: color ? resolveColor(color) : undefined,
      fontSize: !size && fontSize ? fontSize : undefined,
      marginTop: marginTop !== undefined ? `${marginTop}px` : undefined,
      marginBottom: marginBottom !== undefined ? `${marginBottom}px` : undefined,
      animationDelay: animationDelay !== undefined ? `${animationDelay}ms` : undefined,
    };

    const className = `${sizeClass} ${weightClass} ${alignClass} ${lineHeightClass} ${letterSpacingClass} ${animationClass}`.trim();

    const Tag: any = level || 'h2';

    return (
      <>
        <Tag className={className} style={style}>
          {text}
        </Tag>
        <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      </>
    );
  },
};

export default Heading;
