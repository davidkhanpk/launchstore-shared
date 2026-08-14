import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { SectionProps } from './section.types';
import {
  sharedLayoutFields,
  sharedColorFields,
  buildLayoutClasses,
  buildColorClasses,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Section: ComponentConfig<SectionProps> = {
  label: 'Section',
  fields: allFields as any,
  defaultProps: {
    ...defaultLayoutProps,
    paddingY: 'md',
    ...defaultColorProps,
  } as SectionProps,
  render: (rawProps: any) => {
    const {
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps;

    const className = [
      'w-full',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
      buildColorClasses({ borderRadius }),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {};
    if (backgroundColor && backgroundColor !== 'transparent') {
      style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
    }

    return (
      <section className={className} style={style}>
        <DropZone zone="content" />
      </section>
    );
  },
};

export default Section;
