/**
 * Hero Puck component — render function + inline accordion fields + default props.
 *
 * Migrated to the ecommerce section control model: SectionShell provides the
 * background surface (scheme | image + overlay | gradient | color), density,
 * content width, alignment, and min-height. The typography fields drive the
 * headline (size / weight) and the subtitle eyebrow (transform / tracking).
 *
 * Consumed by both:
 *   - launchstore-frontend (editor — extends fields with custom widgets)
 *   - launchstore-storefront (renderer — uses as-is)
 */
import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { HeroSectionProps } from './hero.types';
import {
  SectionShell,
  sharedBackgroundFields,
  sharedSectionLayoutFields,
  sharedTypographyFields,
  buildTypographyClasses,
} from '../../../design-system';

// Text alignment is handled by the section-level `contentAlign` control —
// drop the standalone textAlign field to avoid two competing controls.
const { textAlign: _textAlign, ...heroTypographyFields } = sharedTypographyFields;

const TEXT_ALIGN_CLASSES: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const VERTICAL_JUSTIFY: Record<string, string> = {
  top: 'justify-start',
  middle: 'justify-center',
  bottom: 'justify-end',
};

const HORIZONTAL_ITEMS: Record<string, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};

const BUTTON_JUSTIFY: Record<string, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

// ── Content fields (title, subtitle, description, buttons, image) ───────────

const contentFields = {
  title: { type: 'text' as const, label: 'Title' },
  subtitle: { type: 'text' as const, label: 'Subtitle' },
  description: { type: 'textarea' as const, label: 'Description' },

  showPrimaryButton: {
    type: 'radio' as const, label: 'Show Primary Button',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  primaryButtonText: { type: 'text' as const, label: 'Primary Button Text' },
  primaryButtonLink: { type: 'text' as const, label: 'Primary Button Link' },

  showSecondaryButton: {
    type: 'radio' as const, label: 'Show Secondary Button',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  secondaryButtonText: { type: 'text' as const, label: 'Secondary Button Text' },
  secondaryButtonLink: { type: 'text' as const, label: 'Secondary Button Link' },

  showImage: {
    type: 'radio' as const, label: 'Show Image',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  imageUrl: { type: 'text' as const, label: 'Image URL' },
  imagePosition: {
    type: 'select' as const, label: 'Image Position',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right' },
      { label: 'Background', value: 'background' },
    ],
  },
  imageAlt: { type: 'text' as const, label: 'Image Alt Text' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...heroTypographyFields,
  ...sharedBackgroundFields,
  ...sharedSectionLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const HeroSection: ComponentConfig<HeroSectionProps> = {
  label: 'Hero Section',
  fields: allFields as any,
  defaultProps: {
    title: 'Welcome to Our Store',
    subtitle: 'Discover Amazing Products',
    description: 'Shop the latest trends and exclusive deals on premium products.',
    showPrimaryButton: true,
    primaryButtonText: 'Shop Now',
    primaryButtonLink: '/products',
    showSecondaryButton: true,
    secondaryButtonText: 'Learn More',
    secondaryButtonLink: '/about',
    showImage: true,
    imageUrl: 'https://via.placeholder.com/1200x600?text=Hero+Image',
    imagePosition: 'right',
    imageAlt: 'Hero Image',

    // Typography (fontSize/fontWeight drive the title, textTransform/
    // letterSpacing drive the subtitle eyebrow)
    fontSize: '5xl',
    fontWeight: 'bold',
    lineHeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: 'wide',
    textColor: '#ffffff',

    // Background (shared section control model)
    backgroundScheme: '',
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlayColor: '#000000',
    overlayOpacity: '40',
    gradientFrom: '#667eea',
    gradientTo: '#764ba2',
    backgroundColor: '#000000',

    // Section layout (shared)
    density: 'spacious',
    contentWidth: 'wide',
    contentAlign: 'left',
    verticalAlign: 'middle',
    minHeight: 'lg',
  } as HeroSectionProps,
  render: (props) => {
    const {
      imagePosition = 'right',
      contentAlign = 'left',
      verticalAlign = 'middle',
      textColor,
    } = props;

    const isBackground = imagePosition === 'background';

    // Legacy hero data kept the background image in `imageUrl` when
    // imagePosition === 'background' — fall back to it when the shared
    // backgroundImage field is empty so existing content keeps rendering.
    const backgroundImage = isBackground
      ? (props.backgroundImage || (props.showImage ? props.imageUrl : ''))
      : props.backgroundImage;

    const textAlignClass = TEXT_ALIGN_CLASSES[contentAlign] || 'text-left';

    // Title: size + weight (+ line height). Subtitle: transform + tracking.
    const titleTypography = buildTypographyClasses({
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: props.lineHeight,
    });
    const subtitleTypography = buildTypographyClasses({
      textTransform: props.textTransform,
      letterSpacing: props.letterSpacing,
    });

    return (
      <SectionShell
        {...props}
        backgroundImage={backgroundImage}
        className="overflow-hidden"
        contentClassName="px-4"
      >
        <div
          className={`flex-1 w-full flex ${
            isBackground
              ? 'flex-col'
              : imagePosition === 'left'
              ? 'flex-row-reverse'
              : 'flex-row'
          } gap-8 items-center ${textAlignClass}`}
        >
          <div
            className={`flex flex-col ${VERTICAL_JUSTIFY[verticalAlign] || 'justify-center'} ${
              HORIZONTAL_ITEMS[contentAlign] || 'items-start'
            } ${isBackground ? 'w-full' : 'w-1/2'}`}
          >
            {props.subtitle && (
              <p
                className={`text-sm font-semibold mb-2 ${subtitleTypography}`}
                style={{ color: textColor, opacity: 0.8 }}
              >
                {props.subtitle}
              </p>
            )}

            <h1 className={`${titleTypography || 'text-5xl font-bold'} mb-4`} style={{ color: textColor }}>
              {props.title}
            </h1>

            {props.description && (
              <p
                className={`text-xl mb-8 max-w-2xl ${
                  contentAlign === 'center'
                    ? 'mx-auto'
                    : contentAlign === 'right'
                    ? 'ml-auto'
                    : ''
                }`}
                style={{ color: textColor, opacity: 0.9 }}
              >
                {props.description}
              </p>
            )}

            <div className={`flex gap-4 ${BUTTON_JUSTIFY[contentAlign] || 'justify-start'}`}>
              {props.showPrimaryButton && (
                <a
                  href={props.primaryButtonLink}
                  className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
                >
                  {props.primaryButtonText}
                </a>
              )}

              {props.showSecondaryButton && (
                <a
                  href={props.secondaryButtonLink}
                  className="px-8 py-3 border-2 font-semibold rounded-lg hover:bg-white/10 transition"
                  style={{
                    borderColor: textColor,
                    color: textColor,
                  }}
                >
                  {props.secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          {props.showImage && !isBackground && (
            <div className="w-1/2 flex items-center justify-center">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
      </SectionShell>
    );
  },
};

export default HeroSection;
