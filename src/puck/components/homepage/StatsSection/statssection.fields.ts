import type { Field } from '@puckeditor/core';
import type { StatsSectionProps } from './statssection.types';

const STATS_ARRAY_FIELDS = {
  number: { type: 'text', label: 'Number' },
  label: { type: 'text', label: 'Label' },
  description: { type: 'text', label: 'Description' },
  icon: {
    type: 'select',
    label: 'Icon',
    options: [
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
    ],
  },
  iconColor: { type: 'text', label: 'Icon Color' },
} as any;

export const statsSectionFields = {
  title: { type: 'text', label: 'Title' },
  subtitle: { type: 'text', label: 'Subtitle' },
  columns: {
    type: 'select',
    label: 'Columns',
    options: [
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
    ],
  },
  alignment: {
    type: 'select',
    label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  stats: {
    type: 'array',
    label: 'Stats',
    arrayFields: STATS_ARRAY_FIELDS,
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex)' },
  textColor: { type: 'text', label: 'Text Color (hex)' },
  numberColor: { type: 'text', label: 'Number Color (hex)' },
  spacing: {
    type: 'select',
    label: 'Spacing',
    options: [
      { label: 'Compact', value: 'compact' },
      { label: 'Normal', value: 'normal' },
      { label: 'Spacious', value: 'spacious' },
    ],
  },
  showDividers: {
    type: 'radio',
    label: 'Show Dividers',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  borderRadius: {
    type: 'select',
    label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
} satisfies Record<Exclude<keyof StatsSectionProps, 'id'>, Field>;
