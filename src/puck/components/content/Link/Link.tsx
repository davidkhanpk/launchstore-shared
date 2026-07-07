import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { linkFields } from './link.fields';
import type { LinkProps } from './link.types';

const FONT_SIZE: Record<LinkProps['fontSize'], string> = {
  sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl',
};
const WEIGHT: Record<LinkProps['fontWeight'], string> = {
  normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const UNDERLINE: Record<LinkProps['underline'], string> = {
  always: 'underline', hover: 'hover:underline no-underline', none: 'no-underline',
};

export const Link: ComponentConfig<LinkProps> = {
  label: 'Link',
  fields: linkFields as ComponentConfig<LinkProps>['fields'],
  defaultProps: {
    id: 'link-1',
    text: 'Click here',
    href: '#',
    target: '_self',
    color: 'brand.primary',
    fontSize: 'base',
    fontWeight: 'normal',
    underline: 'hover',
  },
  render: ({ id, text, href, target, color, fontSize, fontWeight, underline }) => (
    <a
      id={id}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={{ color: resolveColor(color) }}
      className={`${FONT_SIZE[fontSize]} ${WEIGHT[fontWeight]} ${UNDERLINE[underline]} transition-opacity hover:opacity-80`}
    >
      {text}
    </a>
  ),
};

export default Link;
