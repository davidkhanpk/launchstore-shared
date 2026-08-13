import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { LinkProps } from './link.types';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  buildTypographyClasses,
  buildLayoutClasses,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  text: { type: 'text' as const, label: 'Link Text' },
  href: { type: 'text' as const, label: 'URL' },
  target: {
    type: 'radio' as const, label: 'Open In',
    options: [
      { label: 'Same Tab', value: '_self' },
      { label: 'New Tab', value: '_blank' },
    ],
  },
  underline: {
    type: 'radio' as const, label: 'Underline',
    options: [
      { label: 'Always', value: 'always' },
      { label: 'On Hover', value: 'hover' },
      { label: 'None', value: 'none' },
    ],
  },
};

// ── Typography fields (no textAlign — links don't align) ─────────────────────

const typographyFields = {
  fontSize: sharedTypographyFields.fontSize,
  fontWeight: sharedTypographyFields.fontWeight,
  textColor: sharedTypographyFields.textColor,
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...typographyFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['text', 'href', 'target', 'underline'],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textColor'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom'],
    },
  ],
  allFields,
});

// ── Underline resolver ──────────────────────────────────────────────────────

function resolveTextDecoration(underline: string | undefined): React.CSSProperties {
  switch (underline) {
    case 'always':
      return { textDecoration: 'underline' };
    case 'none':
      return { textDecoration: 'none' };
    case 'hover':
    default:
      return { textDecoration: 'none' };
  }
}

// ── Component ───────────────────────────────────────────────────────────────

export const Link: ComponentConfig<LinkProps> = {
  label: 'Link',
  fields: accordionFields as any,
  defaultProps: {
    id: 'link-1',
    text: 'Click here',
    href: '#',
    target: '_self',
    underline: 'hover',
    ...defaultTypographyProps,
    textColor: 'brand.primary',
    ...defaultLayoutProps,
  } as LinkProps,
  render: (rawProps: any) => {
    const {
      id, text, href, target, underline,
      fontSize, fontWeight, textColor,
      marginTop, marginBottom,
    } = rawProps;

    const isHover = underline === 'hover';

    const className = [
      id ? `link-shared-${id}` : 'link-shared',
      buildTypographyClasses(rawProps),
      buildLayoutClasses(rawProps),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      display: 'inline-block',
      color: resolveColor(textColor) || '#111827',
      ...resolveTextDecoration(underline),
      transition: 'opacity 0.2s',
    };

    const hoverCss = isHover
      ? `a.link-shared-${id || 'x'}:hover { text-decoration: underline; }`
      : '';

    return (
      <>
        <a
          id={id}
          className={className}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          style={style}
        >
          {text}
        </a>
        {hoverCss && <style dangerouslySetInnerHTML={{ __html: hoverCss }} />}
      </>
    );
  },
};

export default Link;
