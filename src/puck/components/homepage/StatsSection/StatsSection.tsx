'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { statsSectionFields } from './statssection.fields';
import type { StatsSectionProps, StatsItem } from './statssection.types';

/** Emoji icon dictionary for StatsSection icons. */
const ICON_EMOJI: Record<string, string> = {
  people: '👥', star: '⭐', trophy: '🏆', briefcase: '💼',
  globe: '🌍', package: '📦', target: '🎯', diamond: '💎',
  rocket: '🚀', check: '✓',
};

const SPACING_CLASSES: Record<StatsSectionProps['spacing'], string> = {
  compact: 'py-6 px-4',
  normal: 'py-12 px-6',
  spacious: 'py-20 px-8',
};
const RADIUS_CLASSES: Record<StatsSectionProps['borderRadius'], string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const ALIGNMENT_CLASSES: Record<StatsSectionProps['alignment'], string> = {
  left: 'text-left', center: 'text-center', right: 'text-right',
};

export const StatsSection: ComponentConfig<StatsSectionProps> = {
  label: 'Stats Section',
  fields: statsSectionFields as ComponentConfig<StatsSectionProps>['fields'],
  defaultProps: {
    title: 'Our Impact',
    subtitle: 'Trusted by thousands',
    columns: '4',
    alignment: 'center',
    stats: [
      { id: '1', number: '10K+', label: 'Happy Customers', icon: 'people', iconColor: '#3b82f6' },
      { id: '2', number: '500+', label: 'Products', icon: 'package', iconColor: '#3b82f6' },
      { id: '3', number: '50+', label: 'Countries', icon: 'globe', iconColor: '#3b82f6' },
      { id: '4', number: '99%', label: 'Satisfaction', icon: 'star', iconColor: '#3b82f6' },
    ],
    backgroundColor: '#ffffff',
    textColor: '#000000',
    numberColor: '#3b82f6',
    spacing: 'normal',
    showDividers: true,
    borderRadius: 'md',
  },
  render: ({
    title, subtitle, columns, alignment, stats, backgroundColor,
    textColor, numberColor, spacing, showDividers, borderRadius,
  }) => {
    const [_hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !_hasAnimated) setHasAnimated(true);
        },
        { threshold: 0.2 },
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, [_hasAnimated]);

    return (
      <div
        ref={sectionRef}
        className={`stats-section w-full ${SPACING_CLASSES[spacing] || 'py-12 px-6'}`}
        style={{ backgroundColor }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {(title || subtitle) && (
            <div className={`mb-12 ${ALIGNMENT_CLASSES[alignment] || 'text-center'}`}>
              {title && <h2 className="text-4xl font-bold mb-2" style={{ color: textColor }}>{title}</h2>}
              {subtitle && <p className="text-lg opacity-75" style={{ color: textColor }}>{subtitle}</p>}
            </div>
          )}

          <div
            className={`grid gap-6 md:gap-8 ${
              columns === '2' ? 'grid-cols-1 md:grid-cols-2' :
              columns === '3' ? 'grid-cols-1 md:grid-cols-3' :
              'grid-cols-2 md:grid-cols-4'
            }`}
          >
            {(stats || []).map((stat, index) => {
              const isLast = index === (stats || []).length - 1;
              const borderClass = showDividers && !isLast ? 'md:border-r border-gray-200' : '';
              return (
                <div
                  key={stat.id}
                  className={`relative ${borderClass} ${RADIUS_CLASSES[borderRadius] || 'rounded-md'} p-6`}
                >
                  <div className="text-4xl mb-2" style={{ color: stat.iconColor }}>
                    {ICON_EMOJI[stat.icon] || '📊'}
                  </div>
                  <div className="text-5xl font-bold mb-2" style={{ color: numberColor }}>
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold mb-1" style={{ color: textColor }}>
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-sm opacity-75" style={{ color: textColor }}>
                      {stat.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

export default StatsSection;
