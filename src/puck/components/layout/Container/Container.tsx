import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { ContainerProps } from './container.types';
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
 * Container — a section-level block on the ecommerce section control model
 * (SectionShell): background scheme/image+overlay/gradient, density, content
 * width, alignment, min-height.
 */
export const Container: ComponentConfig<ContainerProps> = {
  label: 'Container',
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
    contentWidth: 'wide',
    contentAlign: 'left',
    verticalAlign: 'top',
    minHeight: '',
    borderRadius: 'none',
  } as ContainerProps,
  render: (props: ContainerProps) => (
    <SectionShell {...props}>
      <DropZone zone="content" />
    </SectionShell>
  ),
};

export default Container;
