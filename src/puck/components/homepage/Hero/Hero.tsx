/**
 * Hero Puck component — render function + default props.
 *
 * Consumed by both:
 *   - launchstore-frontend (editor — extends fields with custom widgets)
 *   - launchstore-storefront (renderer — uses as-is)
 */
import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { heroFields } from './hero.fields';
import type { HeroSectionProps } from './hero.types';

const HEIGHT_CLASSES: Record<HeroSectionProps['height'], string> = {
  sm: 'h-[400px]',
  md: 'h-[500px]',
  lg: 'h-[600px]',
  xl: 'h-[700px]',
  full: 'h-screen',
};

const TEXT_ALIGN_CLASSES: Record<HeroSectionProps['contentAlignment'], string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const VERTICAL_JUSTIFY: Record<HeroSectionProps['verticalAlignment'], string> = {
  top: 'justify-start',
  center: 'justify-center',
  bottom: 'justify-end',
};

const HORIZONTAL_ITEMS: Record<HeroSectionProps['contentAlignment'], string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};

const VERTICAL_ITEMS: Record<HeroSectionProps['verticalAlignment'], string> = {
  top: 'items-start',
  center: 'items-center',
  bottom: 'items-end',
};

const BUTTON_JUSTIFY: Record<HeroSectionProps['contentAlignment'], string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

export const HeroSection: ComponentConfig<HeroSectionProps> = {
  label: 'Hero Section',
  fields: heroFields as ComponentConfig<HeroSectionProps>['fields'],
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
    height: 'lg',
    contentAlignment: 'left',
    verticalAlignment: 'center',
    textColor: '#ffffff',
    overlayOpacity: 40,
    backgroundColor: '#000000',
    backgroundGradient: true,
    gradientFrom: '#667eea',
    gradientTo: '#764ba2',
  },
  render: (props) => {
    const {
      height = 'lg',
      contentAlignment = 'left',
      verticalAlignment = 'center',
      imagePosition = 'right',
    } = props;

    const heightClass = HEIGHT_CLASSES[height];
    const textAlignClass = TEXT_ALIGN_CLASSES[contentAlignment];
    const isBackground = imagePosition === 'background';
    const flexAlignment = isBackground
      ? `${VERTICAL_JUSTIFY[verticalAlignment]} ${HORIZONTAL_ITEMS[contentAlignment]}`
      : `${VERTICAL_ITEMS[verticalAlignment]}`;
    const contentJustify = VERTICAL_JUSTIFY[verticalAlignment];

    const backgroundStyle = props.backgroundGradient
      ? { background: `linear-gradient(135deg, ${props.gradientFrom}, ${props.gradientTo})` }
      : { backgroundColor: props.backgroundColor };

    return (
      <div
        className={`hero-section relative ${heightClass} overflow-hidden`}
        style={backgroundStyle}
      >
        {props.showImage && imagePosition === 'background' && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${props.imageUrl})` }}
            />
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: props.overlayOpacity / 100 }}
            />
          </>
        )}

        <div className="container mx-auto h-full px-4 relative z-10">
          <div
            className={`h-full flex ${
              imagePosition === 'left'
                ? 'flex-row-reverse'
                : imagePosition === 'right'
                ? 'flex-row'
                : 'flex-col'
            } gap-8 ${textAlignClass} ${flexAlignment}`}
          >
            <div
              className={`flex flex-col ${contentJustify} ${HORIZONTAL_ITEMS[contentAlignment]} ${
                imagePosition !== 'background' ? 'w-1/2' : 'w-full'
              }`}
            >
              {props.subtitle && (
                <p
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                  style={{ color: props.textColor, opacity: 0.8 }}
                >
                  {props.subtitle}
                </p>
              )}

              <h1 className="text-5xl font-bold mb-4" style={{ color: props.textColor }}>
                {props.title}
              </h1>

              {props.description && (
                <p
                  className={`text-xl mb-8 max-w-2xl ${
                    contentAlignment === 'center'
                      ? 'mx-auto'
                      : contentAlignment === 'right'
                      ? 'ml-auto'
                      : ''
                  }`}
                  style={{ color: props.textColor, opacity: 0.9 }}
                >
                  {props.description}
                </p>
              )}

              <div className={`flex gap-4 ${BUTTON_JUSTIFY[contentAlignment]}`}>
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
                      borderColor: props.textColor,
                      color: props.textColor,
                    }}
                  >
                    {props.secondaryButtonText}
                  </a>
                )}
              </div>
            </div>

            {props.showImage && imagePosition !== 'background' && (
              <div className="w-1/2 flex items-center justify-center">
                <img
                  src={props.imageUrl}
                  alt={props.imageAlt}
                  className="max-w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export default HeroSection;
