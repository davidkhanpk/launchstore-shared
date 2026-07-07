'use client';

/**
 * PromotionalBannerGrid Puck component — render + fields + defaultProps.
 *
 * Both consumers import `PromotionalBannerGrid` from here:
 *   - launchstore-frontend (Puck editor) — extends color/image fields with custom widgets
 *   - launchstore-storefront (renderer) — uses the base fields as-is
 *
 * The banner CTA is a plain `<a href>` here. Consumers that want Next.js
 * client-side navigation (e.g. `<Link>` / `<SafeLink>`) can wrap this component
 * in their renderer.
 */
import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { promotionalBannerGridFields } from './promotionalbannergrid.fields';
import type { PromotionalBannerGridProps, PromotionalBannerItem } from './promotionalbannergrid.types';

const SPACING_CLASSES: Record<PromotionalBannerGridProps['spacing'], string> = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const RADIUS_CLASSES: Record<PromotionalBannerGridProps['borderRadius'], string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
};

const POSITION_CLASSES: Record<PromotionalBannerItem['textPosition'], string> = {
  'top-left': 'items-start justify-start text-left',
  'top-center': 'items-start justify-center text-center',
  'top-right': 'items-start justify-end text-right',
  center: 'items-center justify-center text-center',
  'bottom-left': 'items-end justify-start text-left',
  'bottom-center': 'items-end justify-center text-center',
  'bottom-right': 'items-end justify-end text-right',
};

const HOVER_EFFECT_CLASSES = {
  zoom: 'group-hover:scale-110',
  overlay: '',
  lift: 'group-hover:-translate-y-2',
  none: '',
};

function getGridClasses(layout: PromotionalBannerGridProps['layout']) {
  switch (layout) {
    case '3-column':
      return 'grid-cols-1 md:grid-cols-3';
    case '1-2-split':
    case '2-1-split':
      return 'grid-cols-1 md:grid-cols-3';
    case '2-column':
    default:
      return 'grid-cols-1 md:grid-cols-2';
  }
}

export const PromotionalBannerGrid: ComponentConfig<PromotionalBannerGridProps> = {
  label: 'Promotional Banner Grid',
  fields: promotionalBannerGridFields as ComponentConfig<PromotionalBannerGridProps>['fields'],
  defaultProps: {
    title: '',
    subtitle: '',
    layout: '2-column',
    spacing: 'md',
    banners: [
      {
        id: '1',
        title: 'New Collection',
        subtitle: 'Shop the latest styles',
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
        ctaText: 'Shop Now',
        ctaLink: '/store',
        overlayOpacity: 40,
        textColor: '#ffffff',
        textPosition: 'bottom-left',
      },
      {
        id: '2',
        title: 'Best Sellers',
        subtitle: 'Top-rated products',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        ctaText: 'Explore',
        ctaLink: '/store',
        overlayOpacity: 40,
        textColor: '#ffffff',
        textPosition: 'bottom-left',
      },
    ],
    borderRadius: 'md',
    hoverEffect: 'zoom',
    minHeight: '300px',
  },
  render: ({ title, subtitle, layout, spacing, banners, borderRadius, hoverEffect, minHeight }) => (
    <div className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-base text-gray-600">{subtitle}</p>}
          </div>
        )}

        <div className={`grid ${getGridClasses(layout)} ${SPACING_CLASSES[spacing] || 'gap-4'}`}>
          {(banners || []).map((banner, index) => {
            const isLarge =
              (layout === '1-2-split' && index === 0) ||
              (layout === '2-1-split' && index === 2);
            const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1';
            const rowSpan =
              layout === '1-2-split' && index === 0
                ? 'md:row-span-2'
                : layout === '2-1-split' && index === 2
                ? 'md:row-span-2'
                : '';
            const bannerId = banner.id || `banner-${index}`;
            const overlayOpacity =
              typeof banner.overlayOpacity === 'number' ? banner.overlayOpacity : 40;
            const textColor = banner.textColor || '#ffffff';
            const textPosition = banner.textPosition || 'bottom-left';

            return (
              <a
                key={bannerId}
                href={banner.ctaLink || '#'}
                className={`group relative overflow-hidden ${RADIUS_CLASSES[borderRadius] || 'rounded-none'} ${colSpan} ${rowSpan} ${
                  hoverEffect === 'lift' ? 'transition-transform duration-300' : ''
                }`}
                style={{ minHeight }}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                    HOVER_EFFECT_CLASSES[hoverEffect] || ''
                  }`}
                  style={{ backgroundImage: `url(${banner.imageUrl})` }}
                />

                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoverEffect === 'overlay' ? 'group-hover:opacity-60' : ''
                  }`}
                  style={{ opacity: overlayOpacity / 100 }}
                />

                <div
                  className={`relative h-full flex flex-col p-6 md:p-8 ${
                    POSITION_CLASSES[textPosition] || POSITION_CLASSES['bottom-left']
                  }`}
                >
                  <div>
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
                      style={{ color: textColor }}
                    >
                      {banner.title}
                    </h3>
                    <p
                      className="text-base md:text-lg mb-4"
                      style={{ color: textColor }}
                    >
                      {banner.subtitle}
                    </p>
                    <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors inline-block">
                      {banner.ctaText}
                    </button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  ),
};

export default PromotionalBannerGrid;
