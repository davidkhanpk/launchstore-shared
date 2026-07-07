'use client';

import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { trustBadgesFields } from './trustbadges.fields';
import type { TrustBadgesProps, TrustBadgeItem } from './trustbadges.types';

/**
 * TrustBadges emoji icon dictionary (13 icons — see fields.ts for the
 * canonical list). Drift decision: storefront had 13, frontend had 10
 * (missing card, shield, refresh, support). Shared uses 13 = superset.
 */
const ICON_EMOJI: Record<string, string> = {
  truck: '🚚', lock: '🔒', return: '↩️', star: '⭐',
  card: '💳', package: '📦', check: '✓', chat: '💬',
  globe: '🌍', lightning: '⚡', shield: '🛡️', refresh: '🔄',
  support: '🎧',
};

const SPACING_CLASSES: Record<TrustBadgesProps['spacing'], string> = {
  compact: 'py-4 px-4',
  normal: 'py-8 px-6',
  spacious: 'py-12 px-8',
};
const RADIUS_CLASSES: Record<TrustBadgesProps['borderRadius'], string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const ALIGNMENT_CLASSES: Record<TrustBadgesProps['alignment'], string> = {
  left: 'text-left', center: 'text-center', right: 'text-right',
};

export const TrustBadges: ComponentConfig<TrustBadgesProps> = {
  label: 'Trust Badges',
  fields: trustBadgesFields as ComponentConfig<TrustBadgesProps>['fields'],
  defaultProps: {
    title: 'Why Shop With Us',
    subtitle: '',
    layout: 'horizontal',
    columns: '4',
    alignment: 'center',
    badges: [
      { id: '1', icon: 'truck', title: 'Free Shipping', description: 'On orders over $50', iconColor: '#3b82f6' },
      { id: '2', icon: 'shield', title: 'Secure Checkout', description: '100% secure payment', iconColor: '#3b82f6' },
      { id: '3', icon: 'refresh', title: 'Easy Returns', description: '30-day return policy', iconColor: '#3b82f6' },
      { id: '4', icon: 'support', title: '24/7 Support', description: 'Here when you need us', iconColor: '#3b82f6' },
    ],
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    spacing: 'normal',
    showBorder: true,
    borderRadius: 'none',
  },
  render: ({
    title, subtitle, layout, columns, alignment, badges, backgroundColor,
    textColor, spacing, showBorder, borderRadius,
  }) => (
    <div
      style={{ backgroundColor }}
      className={`w-full ${SPACING_CLASSES[spacing] || 'py-8 px-6'} ${
        showBorder ? 'border-t border-b border-gray-200' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className={`mb-8 ${ALIGNMENT_CLASSES[alignment] || 'text-center'}`}>
            {title && <h2 className="text-2xl font-bold mb-2" style={{ color: textColor }}>{title}</h2>}
            {subtitle && <p className="text-base opacity-75" style={{ color: textColor }}>{subtitle}</p>}
          </div>
        )}

        <div
          className={`grid gap-6 ${
            layout === 'horizontal'
              ? `grid-cols-1 md:grid-cols-${columns}`
              : layout === 'grid'
              ? `grid-cols-2 md:grid-cols-${columns}`
              : 'grid-cols-1 max-w-md mx-auto'
          }`}
        >
          {(badges || []).map((badge: TrustBadgeItem) => (
            <div
              key={badge.id}
              className={`flex ${
                layout === 'stacked' ? 'flex-row items-center' : 'flex-col items-center'
              } ${ALIGNMENT_CLASSES[alignment] || 'text-center'} ${RADIUS_CLASSES[borderRadius] || 'rounded-none'} p-4 transition-transform hover:scale-105`}
            >
              <div
                className={`text-4xl ${layout === 'stacked' ? 'mr-4' : 'mb-3'}`}
                style={{ color: badge.iconColor }}
              >
                {ICON_EMOJI[badge.icon] || '✓'}
              </div>
              <div className={layout === 'stacked' ? 'flex-1' : ''}>
                <h3 className="font-semibold text-base mb-1" style={{ color: textColor }}>
                  {badge.title}
                </h3>
                <p className="text-sm opacity-75" style={{ color: textColor }}>
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export default TrustBadges;
