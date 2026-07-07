import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { imageFields } from './image.fields';
import type { ImageProps } from './image.types';

const ASPECT: Record<ImageProps['aspectRatio'], string> = {
  auto: '', square: 'aspect-square', video: 'aspect-video',
  portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]',
};
const FIT: Record<ImageProps['objectFit'], string> = {
  contain: 'object-contain', cover: 'object-cover', fill: 'object-fill', none: 'object-none',
};
const WIDTH: Record<ImageProps['width'], string> = {
  auto: 'w-auto', full: 'w-full', custom: '',
};
const RADIUS: Record<ImageProps['borderRadius'], string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
  xl: 'rounded-xl', '2xl': 'rounded-2xl', full: 'rounded-full',
};
const SHADOW: Record<ImageProps['shadow'], string> = {
  none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg',
  xl: 'shadow-xl', '2xl': 'shadow-2xl',
};
const ALIGN: Record<ImageProps['alignment'], string> = {
  left: 'mr-auto', center: 'mx-auto', right: 'ml-auto',
};
const HOVER: Record<ImageProps['hoverEffect'], string> = {
  none: '', zoom: 'hover:scale-110', brightness: 'hover:brightness-110',
  grayscale: 'grayscale hover:grayscale-0', lift: 'hover:shadow-2xl hover:-translate-y-2',
};
const CAP_ALIGN: Record<ImageProps['captionAlign'], string> = {
  left: 'text-left', center: 'text-center', right: 'text-right',
};

export const Image: ComponentConfig<ImageProps> = {
  label: 'Image',
  fields: imageFields as ComponentConfig<ImageProps>['fields'],
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
    borderRadius: 'md',
    shadow: 'md',
    showBorder: false,
    borderColor: '#e5e5e5',
    borderWidth: 2,
    hoverEffect: 'none',
    alignment: 'center',
    marginTop: 0,
    marginBottom: 16,
  },
  render: ({
    src, alt, aspectRatio, objectFit, width, customWidth,
    showCaption, caption, captionPosition, captionAlign,
    linkUrl, openInNewTab,
    borderRadius, shadow, showBorder, borderColor, borderWidth,
    hoverEffect, alignment, marginTop, marginBottom,
  }) => {
    const imageElement = (
      <div className="image-wrapper relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={`${ASPECT[aspectRatio] || ''} ${FIT[objectFit] || 'object-cover'} ${WIDTH[width] || 'w-full'} ${RADIUS[borderRadius] || 'rounded-md'} ${SHADOW[shadow] || 'shadow-none'} ${HOVER[hoverEffect] || ''} ${showBorder ? 'border' : ''} transition-all duration-300`}
          style={{
            width: width === 'custom' ? customWidth : undefined,
            borderColor: showBorder ? borderColor : undefined,
            borderWidth: showBorder ? `${borderWidth}px` : undefined,
          }}
        />
      </div>
    );

    const figure = (
      <>
        {showCaption && captionPosition === 'top' && (
          <div className={`caption text-sm text-gray-600 mb-2 ${CAP_ALIGN[captionAlign] || 'text-center'}`}>
            {caption}
          </div>
        )}
        {linkUrl ? (
          <a href={linkUrl} target={openInNewTab ? '_blank' : undefined} rel={openInNewTab ? 'noopener noreferrer' : undefined} className="block">
            {imageElement}
          </a>
        ) : (
          imageElement
        )}
        {showCaption && captionPosition === 'bottom' && (
          <div className={`caption text-sm text-gray-600 mt-2 ${CAP_ALIGN[captionAlign] || 'text-center'}`}>
            {caption}
          </div>
        )}
      </>
    );

    return (
      <div className={`image-component ${ALIGN[alignment] || 'mx-auto'}`} style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}>
        <div className="image-inner">{figure}</div>
      </div>
    );
  },
};

export default Image;
