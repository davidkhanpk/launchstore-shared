import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import {
  SectionShell,
  sharedBackgroundFields,
  sharedSectionLayoutFields,
} from '../../../design-system';

export interface CollectionHeroProps {
  showImage: boolean;
  showTitle: boolean;
  showDescription: boolean;
  /** 'standard' renders a solid headline; 'luxury' lightens + widens + uppercases it. */
  style: 'standard' | 'luxury';
  backgroundColor: string;
  textColor: string;
  /** Collection context (consumer-provided at render time). */
  title?: string;
  description?: string;
  image?: string;

  // Background (shared section control model: image > gradient > scheme > color)
  backgroundScheme?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  gradientFrom?: string;
  gradientTo?: string;

  // Section layout (shared)
  density?: string;
  contentWidth?: string;
  contentAlign?: string;
  verticalAlign?: string;
  minHeight?: string;
}

// Static lookups so Tailwind can see the classes at build time.
const TEXT_ALIGN: Record<string, string> = {
  left: 'text-left', center: 'text-center', right: 'text-right',
};

export const collectionHeroFields: ComponentConfig<CollectionHeroProps>['fields'] = {
  showImage: { type: 'radio', label: 'Show Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showTitle: { type: 'radio', label: 'Show Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showDescription: { type: 'radio', label: 'Show Description', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  style: {
    type: 'select', label: 'Style',
    options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }],
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  ...sharedBackgroundFields,
  ...sharedSectionLayoutFields,
};

export const CollectionHero: ComponentConfig<CollectionHeroProps> = {
  label: 'Collection Hero',
  fields: collectionHeroFields,
  defaultProps: {
    showImage: true,
    showTitle: true,
    showDescription: true,
    style: 'standard',
    backgroundColor: '#111827',
    textColor: '#ffffff',
    backgroundScheme: '',
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlayColor: '#000000',
    overlayOpacity: '30',
    gradientFrom: '',
    gradientTo: '',
    density: 'spacious',
    contentWidth: 'full',
    contentAlign: 'center',
    verticalAlign: 'middle',
    minHeight: 'lg',
  },
  render: ({
    showImage, showTitle, showDescription, style, backgroundColor, textColor,
    title, description, image,
    backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
    overlayColor, overlayOpacity, gradientFrom, gradientTo,
    density, contentWidth, contentAlign, verticalAlign, minHeight,
  }) => {
    // Legacy collection data supplied the banner image at render time via the
    // context `image` prop — the shared backgroundImage field wins when set.
    const resolvedBackgroundImage = backgroundImage || (showImage ? image : undefined);
    // When a scheme is active its text color flows from SectionShell; the
    // explicit textColor prop only applies on plain/gradient backgrounds.
    const fg = backgroundScheme ? undefined : (resolveColor(textColor) || textColor);
    const uppercase = style === 'luxury';
    return (
      <SectionShell
        backgroundScheme={backgroundScheme}
        backgroundImage={resolvedBackgroundImage}
        backgroundSize={backgroundSize}
        backgroundPosition={backgroundPosition}
        overlayColor={overlayColor}
        overlayOpacity={overlayOpacity}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        backgroundColor={backgroundColor}
        density={density}
        contentWidth={contentWidth}
        contentAlign={contentAlign}
        verticalAlign={verticalAlign}
        minHeight={minHeight}
        className="overflow-hidden"
        contentClassName="px-4"
      >
        <div className={`w-full ${TEXT_ALIGN[contentAlign || 'center']} ${uppercase ? 'uppercase' : ''}`} style={fg ? { color: fg } : undefined}>
          {showTitle && (
            <h1 className={`font-bold ${style === 'luxury' ? 'text-4xl font-light tracking-wide' : 'text-3xl'}`}>
              {title || '{{ collection.title }}'}
            </h1>
          )}
          {showDescription && (
            <p className="mt-2 text-base opacity-90">{description || '{{ collection.description }}'}</p>
          )}
        </div>
      </SectionShell>
    );
  },
};

export default CollectionHero;
