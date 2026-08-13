import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { LogoProps } from './logo.types';
import {
  createAccordionFields,
} from '../../../design-system';

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  imageUrl: { type: 'text' as const, label: 'Logo Image URL' },
  altText: { type: 'text' as const, label: 'Alt Text' },
  linkTo: { type: 'text' as const, label: 'Link To' },
  maxWidth: { type: 'text' as const, label: 'Max Width (e.g., 150px)' },
  maxHeight: { type: 'text' as const, label: 'Max Height (e.g., 60px)' },
  showText: {
    type: 'radio' as const, label: 'Show Store Name',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  text: { type: 'text' as const, label: 'Store Name' },
  textPosition: {
    type: 'select' as const, label: 'Text Position',
    options: [{ label: 'Right of Logo', value: 'right' }, { label: 'Below Logo', value: 'below' }],
  },
  textSize: {
    type: 'select' as const, label: 'Text Size',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Base', value: 'base' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  textColor: { type: 'text' as const, label: 'Text Color (hex or theme token)' },
  textWeight: {
    type: 'select' as const, label: 'Text Weight',
    options: [
      { label: 'Normal', value: 'normal' },
      { label: 'Medium', value: 'medium' },
      { label: 'Semibold', value: 'semibold' },
      { label: 'Bold', value: 'bold' },
    ],
  },
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Image',
      defaultOpen: true,
      fieldKeys: ['imageUrl', 'altText', 'linkTo', 'maxWidth', 'maxHeight'],
    },
    {
      label: 'Store Name',
      defaultOpen: true,
      fieldKeys: ['showText', 'text', 'textPosition', 'textSize', 'textColor', 'textWeight'],
    },
  ],
  allFields,
});

export const Logo: ComponentConfig<LogoProps> = {
  label: 'Logo',
  fields: accordionFields as any,
  defaultProps: {
    imageUrl: '',
    altText: 'Store Logo',
    linkTo: '/',
    maxWidth: '150px',
    maxHeight: '60px',
    showText: true,
    text: 'My Store',
    textPosition: 'right',
    textSize: 'xl',
    textColor: '#000000',
    textWeight: 'bold',
  } as LogoProps,
  render: (rawProps: any) => {
    const {
      imageUrl, altText, linkTo, maxWidth, maxHeight, showText, text,
      textPosition, textSize, textColor, textWeight,
    } = rawProps as LogoProps;
    const hasImage = imageUrl && imageUrl.trim() !== '' && imageUrl !== '/logo.svg';
    return (
      <a
        href={linkTo}
        className={`flex items-center gap-3 ${textPosition === 'below' ? 'flex-col' : 'flex-row'}`}
      >
        {hasImage && (
          <div style={{ maxWidth, maxHeight, flexShrink: 0, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <img
              src={imageUrl}
              alt={altText}
              style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
        )}
        {(showText || !hasImage) && text && (
          <span
            className={[textSize ? `text-${textSize}` : '', textWeight ? `font-${textWeight}` : ''].filter(Boolean).join(' ')}
            style={{ color: resolveColor(textColor) }}
          >
            {text}
          </span>
        )}
      </a>
    );
  },
};

export default Logo;
