'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { ComponentConfig, Field } from '@puckeditor/core';
import type { StatsSectionProps, StatsItem } from './statssection.types';
import { createAccordionFields } from '../../../design-system';

/** Emoji icon dictionary for StatsSection icons. */
const ICON_EMOJI: Record<string, string> = {
  people: '👥', star: '⭐', trophy: '🏆', briefcase: '💼',
  globe: '🌍', package: '📦', target: '🎯', diamond: '💎',
  rocket: '🚀', check: '✓',
};

const ICON_OPTIONS = [
  { label: '👥 People', value: 'people' },
  { label: '⭐ Star', value: 'star' },
  { label: '🏆 Trophy', value: 'trophy' },
  { label: '💼 Briefcase', value: 'briefcase' },
  { label: '🌍 Globe', value: 'globe' },
  { label: '📦 Package', value: 'package' },
  { label: '🎯 Target', value: 'target' },
  { label: '💎 Diamond', value: 'diamond' },
  { label: '🚀 Rocket', value: 'rocket' },
  { label: '✓ Check', value: 'check' },
];

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

// ── Stats array field (custom render — Puck array field) ────────────────────

const STATS_ARRAY_FIELDS = {
  number: { type: 'text' as const, label: 'Number' },
  label: { type: 'text' as const, label: 'Label' },
  description: { type: 'text' as const, label: 'Description' },
  icon: { type: 'select' as const, label: 'Icon', options: ICON_OPTIONS },
  iconColor: { type: 'text' as const, label: 'Icon Color' },
} as any;

/**
 * Custom array field renderer for `stats`. Minimal list editor that covers
 * add/remove/edit. The frontend editor may override this field with a richer
 * widget.
 */
function renderStatsArray({ value, onChange }: { value: any; onChange: (v: any) => void }) {
  const items: StatsItem[] = Array.isArray(value) ? value : [];

  const update = (index: number, key: keyof StatsItem, v: any) => {
    const next = items.map((it, i) => (i === index ? { ...it, [key]: v } : it));
    onChange(next);
  };
  const remove = (index: number) => onChange(items.filter((_, i) => i !== index));
  const add = () =>
    onChange([
      ...items,
      { id: String(Date.now()), number: '100+', label: 'New Stat', description: '', icon: 'star', iconColor: '#3b82f6' },
    ]);

  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }}>
        Stats
      </label>
      {items.map((item, index) => (
        <div key={item.id || index} style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '8px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280' }}>Stat {index + 1}</span>
            <button type="button" onClick={() => remove(index)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '12px' }}>Remove</button>
          </div>
          <input type="text" placeholder="Number" value={item.number || ''} onChange={(e) => update(index, 'number', e.target.value)} style={{ width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }} />
          <input type="text" placeholder="Label" value={item.label || ''} onChange={(e) => update(index, 'label', e.target.value)} style={{ width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }} />
          <input type="text" placeholder="Description" value={item.description || ''} onChange={(e) => update(index, 'description', e.target.value)} style={{ width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }} />
          <select value={item.icon || ''} onChange={(e) => update(index, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }}>
            {ICON_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <input type="text" placeholder="Icon Color" value={item.iconColor || ''} onChange={(e) => update(index, 'iconColor', e.target.value)} style={{ width: '100%', padding: '6px 8px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px' }} />
        </div>
      ))}
      <button type="button" onClick={add} style={{ padding: '6px 12px', border: '1px dashed #9ca3af', borderRadius: '6px', background: '#f9fafb', cursor: 'pointer', fontSize: '13px', width: '100%' }}>+ Add Stat</button>
    </div>
  );
}

// ── Content fields ──────────────────────────────────────────────────────────

const contentFields = {
  title: { type: 'text' as const, label: 'Title' },
  subtitle: { type: 'text' as const, label: 'Subtitle' },
  stats: { type: 'custom' as const, label: '', render: renderStatsArray, arrayFields: STATS_ARRAY_FIELDS } as Field,
};

// ── Layout fields ───────────────────────────────────────────────────────────

const layoutFields = {
  columns: {
    type: 'select' as const, label: 'Columns',
    options: [
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
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
  spacing: {
    type: 'select' as const, label: 'Spacing',
    options: [
      { label: 'Compact', value: 'compact' },
      { label: 'Normal', value: 'normal' },
      { label: 'Spacious', value: 'spacious' },
    ],
  },
  showDividers: {
    type: 'radio' as const, label: 'Show Dividers',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
};

// ── Color fields ────────────────────────────────────────────────────────────

const colorFields = {
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text' as const, label: 'Text Color (hex or theme token)' },
  numberColor: { type: 'text' as const, label: 'Number Color (hex or theme token)' },
  borderRadius: {
    type: 'select' as const, label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...layoutFields,
  ...colorFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['title', 'subtitle', 'stats'],
    },
    {
      label: 'Layout',
      fieldKeys: ['columns', 'alignment', 'spacing', 'showDividers'],
    },
    {
      label: 'Colors',
      fieldKeys: ['backgroundColor', 'textColor', 'numberColor', 'borderRadius'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const StatsSection: ComponentConfig<StatsSectionProps> = {
  label: 'Stats Section',
  fields: accordionFields as any,
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
  } as StatsSectionProps,
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
