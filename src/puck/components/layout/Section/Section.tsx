import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { SectionProps } from './section.types';
import {
  SectionShell,
  sharedBackgroundFields,
  sharedSectionLayoutFields,
  sharedColorFields,
} from '../../../design-system';

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...sharedBackgroundFields,
  ...sharedSectionLayoutFields,
  ...sharedColorFields,
};

// ── Component ───────────────────────────────────────────────────────────────

/**
 * Section — the reference implementation of the ecommerce section control
 * model (SectionShell). Background scheme / image + overlay / gradient,
 * density, content width, content + vertical alignment, min-height —
 * everything a merchant needs to build professional section rhythm.
 */
export const Section: ComponentConfig<SectionProps> = {
  label: 'Section',
  fields: allFields as any,
  defaultProps: {
    backgroundScheme: '',
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlayColor: '',
    overlayOpacity: '0',
    gradientFrom: '',
    gradientTo: '',
    backgroundColor: '',
    density: 'compact',
    contentWidth: 'standard',
    contentAlign: 'left',
    verticalAlign: 'top',
    minHeight: '',
    borderRadius: 'none',
  } as SectionProps,
  render: (props: SectionProps) => (
    <SectionShell {...props}>
      <DropZone zone="content" />
    </SectionShell>
  ),
};

export default Section;
