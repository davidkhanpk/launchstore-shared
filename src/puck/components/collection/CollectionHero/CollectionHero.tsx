import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';

export interface CollectionHeroProps {
  showImage: boolean;
  showTitle: boolean;
  showDescription: boolean;
  height: 'small' | 'medium' | 'large';
  overlayOpacity: number;
  style: 'standard' | 'luxury';
  backgroundColor: string;
  textColor: string;
  /** Collection context (consumer-provided at render time). */
  title?: string;
  description?: string;
  image?: string;
}

const HEIGHT: Record<CollectionHeroProps['height'], string> = { small: 'h-40', medium: 'h-64', large: 'h-96' };

export const collectionHeroFields: ComponentConfig<CollectionHeroProps>['fields'] = {
  showImage: { type: 'radio', label: 'Show Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showTitle: { type: 'radio', label: 'Show Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showDescription: { type: 'radio', label: 'Show Description', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  height: {
    type: 'select', label: 'Height',
    options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }],
  },
  overlayOpacity: { type: 'number', label: 'Overlay Opacity (0-1)', min: 0, max: 1 },
  style: {
    type: 'select', label: 'Style',
    options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }],
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
};

export const CollectionHero: ComponentConfig<CollectionHeroProps> = {
  label: 'Collection Hero',
  fields: collectionHeroFields,
  defaultProps: {
    showImage: true,
    showTitle: true,
    showDescription: true,
    height: 'medium',
    overlayOpacity: 0.3,
    style: 'standard',
    backgroundColor: '#111827',
    textColor: '#ffffff',
  },
  render: ({ showImage, showTitle, showDescription, height, overlayOpacity, style, backgroundColor, textColor, title, description, image }) => {
    const bg = resolveColor(backgroundColor) || backgroundColor;
    const fg = resolveColor(textColor) || textColor;
    const uppercase = style === 'luxury';
    return (
      <div className={`relative w-full ${HEIGHT[height] || 'h-64'} flex items-center justify-center overflow-hidden`} style={{ backgroundColor: bg }}>
        {showImage && image && <img src={image} alt={title || 'Collection'} className="absolute inset-0 w-full h-full object-cover" />}
        {showImage && <div className="absolute inset-0" style={{ backgroundColor: '#000', opacity: overlayOpacity ?? 0.3 }} />}
        <div className="relative text-center px-4" style={{ color: fg }}>
          {showTitle && (
            <h1 className={`font-bold ${style === 'luxury' ? 'text-4xl font-light tracking-wide' : 'text-3xl'} ${uppercase ? 'uppercase' : ''}`}>
              {title || '{{ collection.title }}'}
            </h1>
          )}
          {showDescription && (
            <p className="mt-2 text-base opacity-90">{description || '{{ collection.description }}'}</p>
          )}
        </div>
      </div>
    );
  },
};

export default CollectionHero;
