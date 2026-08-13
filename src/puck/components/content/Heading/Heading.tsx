import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { HeadingProps } from './heading.types';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  buildTypographyClasses,
  buildLayoutClasses,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

// ── Animation (component-specific — not shared) ────────────────────────────

const ANIMATION_CLASS: Record<string, string> = {
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

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  text: { type: 'text' as const, label: 'Text' },
  level: {
    type: 'select' as const, label: 'Heading Level',
    options: [
      { label: 'H1', value: 'h1' },
      { label: 'H2', value: 'h2' },
      { label: 'H3', value: 'h3' },
      { label: 'H4', value: 'h4' },
      { label: 'H5', value: 'h5' },
      { label: 'H6', value: 'h6' },
    ],
  },
  animation: {
    type: 'select' as const, label: 'Animation',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Fade In', value: 'fadeIn' },
      { label: 'Slide Up', value: 'slideUp' },
      { label: 'Slide Down', value: 'slideDown' },
    ],
  },
  animationDelay: { type: 'number' as const, label: 'Animation Delay (ms)' },
};

// ── All flat fields (for the accordion to reference by key) ─────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['text', 'level', 'animation', 'animationDelay'],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const Heading: ComponentConfig<HeadingProps> = {
  label: 'Heading',
  fields: accordionFields as any,
  defaultProps: {
    text: 'Your Heading Here',
    level: 'h2',
    animation: 'none',
    animationDelay: 0,
    ...defaultTypographyProps,
    fontWeight: 'bold' as const,
    textColor: '#1f2937',
    textAlign: 'left' as const,
    ...defaultLayoutProps,
    marginBottom: 'md',
  } as HeadingProps,
  render: (rawProps: any) => {
    const {
      text, level, animation, animationDelay,
      fontSize, fontWeight, textAlign, textColor, lineHeight,
      marginTop, marginBottom,
    } = rawProps;

    const Tag: any = level || 'h2';
    const animationClass = ANIMATION_CLASS[animation || 'none'] || '';

    const className = [
      buildTypographyClasses(rawProps),
      buildLayoutClasses(rawProps),
      animationClass,
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      color: resolveColor(textColor) || '#1f2937',
      animationDelay: animationDelay ? `${animationDelay}ms` : undefined,
    };

    return (
      <>
        <Tag className={className} style={style}>
          {text || 'Heading'}
        </Tag>
        {animationClass && <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />}
      </>
    );
  },
};

export default Heading;
