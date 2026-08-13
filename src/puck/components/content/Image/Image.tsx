import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ImageProps } from './image.types';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  sharedColorFields,
  buildLayoutClasses,
  buildColorClasses,
  defaultTypographyProps,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

// ── Static option maps ─────────────────────────────────────────────────────

const ASPECT_RATIO_MAP: Record<string, string> = {
  auto: '',
  square: '1 / 1',
  video: '16 / 9',
  portrait: '3 / 4',
  landscape: '4 / 3',
};

const SHADOW_MAP: Record<string, string> = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 25px rgba(0,0,0,0.15)',
  '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
};

const HOVER_FILTER_MAP: Record<string, string> = {
  none: '',
  zoom: '__zoom__',
  brightness: 'brightness(1.1)',
  grayscale: 'grayscale(1)',
  lift: '__lift__',
};

const ALIGN_JUSTIFY_MAP: Record<string, string> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  src: { type: 'text' as const, label: 'Image URL' },
  alt: { type: 'text' as const, label: 'Alt Text (for accessibility)' },
  aspectRatio: {
    type: 'select' as const, label: 'Aspect Ratio',
    options: [
      { label: 'Auto (Original)', value: 'auto' },
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Video (16:9)', value: 'video' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
    ],
  },
  objectFit: {
    type: 'select' as const, label: 'Object Fit',
    options: [
      { label: 'Contain', value: 'contain' },
      { label: 'Cover', value: 'cover' },
      { label: 'Fill', value: 'fill' },
      { label: 'None', value: 'none' },
    ],
  },
  width: {
    type: 'select' as const, label: 'Width',
    options: [
      { label: 'Auto', value: 'auto' },
      { label: 'Full', value: 'full' },
      { label: 'Custom', value: 'custom' },
    ],
  },
  customWidth: { type: 'text' as const, label: 'Custom Width (e.g., 500px, 80%)' },
  showCaption: {
    type: 'radio' as const, label: 'Show Caption',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  caption: { type: 'textarea' as const, label: 'Caption Text' },
  captionPosition: {
    type: 'select' as const, label: 'Caption Position',
    options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }],
  },
  captionAlign: {
    type: 'select' as const, label: 'Caption Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  linkUrl: { type: 'text' as const, label: 'Link URL (optional)' },
  openInNewTab: {
    type: 'radio' as const, label: 'Open in New Tab',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  shadow: {
    type: 'select' as const, label: 'Shadow',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
      { label: '2XL', value: '2xl' },
    ],
  },
  showBorder: {
    type: 'radio' as const, label: 'Show Border',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  borderColor: { type: 'text' as const, label: 'Border Color (hex or theme token)' },
  borderWidth: { type: 'number' as const, label: 'Border Width (px)', min: 1, max: 10 },
  hoverEffect: {
    type: 'select' as const, label: 'Hover Effect',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Zoom', value: 'zoom' },
      { label: 'Brightness', value: 'brightness' },
      { label: 'Grayscale to Color', value: 'grayscale' },
      { label: 'Lift (Shadow)', value: 'lift' },
    ],
  },
  alignment: {
    type: 'select' as const, label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Accordion config ─────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: [
        'src', 'alt', 'aspectRatio', 'objectFit', 'width', 'customWidth',
        'linkUrl', 'openInNewTab',
      ],
    },
    {
      label: 'Caption',
      fieldKeys: ['showCaption', 'caption', 'captionPosition', 'captionAlign'],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
    },
    {
      label: 'Layout',
      fieldKeys: ['alignment', 'marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
    {
      label: 'Colors',
      fieldKeys: ['backgroundColor', 'borderRadius', 'shadow', 'showBorder', 'borderColor', 'borderWidth', 'hoverEffect'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const Image: ComponentConfig<ImageProps> = {
  label: 'Image',
  fields: accordionFields as any,
  defaultProps: {
    src: 'https://via.placeholder.com/800x600',
    alt: 'Image description',
    aspectRatio: 'auto',
    objectFit: 'cover',
    width: 'full',
    customWidth: '600px',
    showCaption: false,
    caption: 'Image caption goes here',
    captionPosition: 'bottom',
    captionAlign: 'center',
    linkUrl: '',
    openInNewTab: false,
    shadow: 'md',
    showBorder: false,
    borderColor: '#e5e5e5',
    borderWidth: 2,
    hoverEffect: 'none',
    alignment: 'center',
    ...defaultTypographyProps,
    ...defaultLayoutProps,
    marginBottom: 'md',
    ...defaultColorProps,
    borderRadius: 'md',
  } as ImageProps,
  render: (rawProps: any) => {
    const {
      src, alt, aspectRatio, objectFit, width, customWidth,
      showCaption, caption, captionPosition, captionAlign,
      linkUrl, openInNewTab,
      borderRadius, shadow, showBorder, borderColor, borderWidth,
      hoverEffect, alignment,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor,
    } = rawProps;

    const aspectCss = ASPECT_RATIO_MAP[aspectRatio] ?? '';
    const widthCss = width === 'custom' ? (customWidth || 'auto') : width === 'full' ? '100%' : 'auto';
    const shadowCss = SHADOW_MAP[shadow] ?? 'none';
    const hoverToken = HOVER_FILTER_MAP[hoverEffect] ?? '';
    const isLiftHover = hoverToken === '__lift__';
    const isZoomHover = hoverToken === '__zoom__';
    const hoverFilter = hoverToken && !isLiftHover && !isZoomHover ? hoverToken : '';
    const justify = ALIGN_JUSTIFY_MAP[alignment] ?? 'center';

    const captionAlignCss: React.CSSProperties['textAlign'] = captionAlign || 'center';

    const wrapperClassName = buildLayoutClasses(rawProps);

    const wrapperStyle: React.CSSProperties = {
      display: 'flex',
      justifyContent: justify,
    };

    const colorClassName = buildColorClasses({ borderRadius });

    const innerStyle: React.CSSProperties = {
      width: widthCss,
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: isLiftHover ? 'none' : shadowCss,
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    const imgStyle: React.CSSProperties = {
      display: 'block',
      width: '100%',
      height: aspectCss ? 'auto' : 'auto',
      aspectRatio: aspectCss || undefined,
      objectFit: (objectFit as React.CSSProperties['objectFit']) || 'cover',
      borderWidth: showBorder ? `${borderWidth}px` : undefined,
      borderStyle: showBorder ? 'solid' : undefined,
      borderColor: showBorder ? (resolveColor(borderColor) || borderColor) : undefined,
      filter: hoverFilter,
      transition: 'transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease',
    };

    const liftShadow = SHADOW_MAP.xl;

    const hoverCss = [
      isZoomHover && '.img-hover-zoom:hover { transform: scale(1.08); }',
      isLiftHover && `.img-hover-lift:hover { transform: translateY(-4px); box-shadow: ${liftShadow}; }`,
      hoverFilter && `.img-hover-filter:hover { filter: none; }`,
    ].filter(Boolean).join('\n');

    const imageElement = (
      <div className={colorClassName} style={innerStyle}>
        <img
          src={src}
          alt={alt}
          className={[
            colorClassName,
            isZoomHover && 'img-hover-zoom',
            isLiftHover && 'img-hover-lift',
            hoverFilter && 'img-hover-filter',
          ].filter(Boolean).join(' ')}
          style={imgStyle}
        />
      </div>
    );

    const captionStyle: React.CSSProperties = {
      fontSize: '0.875rem',
      color: '#6b7280',
      textAlign: captionAlignCss,
      marginTop: captionPosition === 'bottom' ? '8px' : 0,
      marginBottom: captionPosition === 'top' ? '8px' : 0,
    };

    return (
      <>
        <div className={wrapperClassName} style={wrapperStyle}>
          <div style={{ width: widthCss, maxWidth: '100%' }}>
            {showCaption && captionPosition === 'top' && (
              <div style={captionStyle}>{caption}</div>
            )}
            {linkUrl ? (
              <a
                href={linkUrl}
                target={openInNewTab ? '_blank' : undefined}
                rel={openInNewTab ? 'noopener noreferrer' : undefined}
                style={{ display: 'block' }}
              >
                {imageElement}
              </a>
            ) : (
              imageElement
            )}
            {showCaption && captionPosition === 'bottom' && (
              <div style={captionStyle}>{caption}</div>
            )}
          </div>
        </div>
        {hoverCss && <style dangerouslySetInnerHTML={{ __html: hoverCss }} />}
      </>
    );
  },
};

export default Image;
