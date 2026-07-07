import type { Field } from '@puckeditor/core';
import type { CountdownTimerProps } from './countdowntimer.types';

/**
 * Drift decision: dead fields removed.
 *
 * Both source versions declared `showProducts`, `collectionId`,
 * `productLimit`, `productLayout` — but neither render function ever
 * referenced them. They were placeholder fields for a "show products
 * from a Medusa collection" feature that never landed. Shared drops
 * them. Follow-up epic can reintroduce when the feature is built.
 */
export const countdownTimerFields = {
  title: { type: 'text', label: 'Title' },
  subtitle: { type: 'text', label: 'Subtitle' },
  endDate: { type: 'text', label: 'End Date (ISO 8601)' },
  timerStyle: {
    type: 'select',
    label: 'Timer Style',
    options: [
      { label: 'Boxes', value: 'boxes' },
      { label: 'Minimal', value: 'minimal' },
      { label: 'Circle', value: 'circle' },
    ],
  },
  showDays: {
    type: 'radio',
    label: 'Show Days',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showHours: {
    type: 'radio',
    label: 'Show Hours',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showMinutes: {
    type: 'radio',
    label: 'Show Minutes',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showSeconds: {
    type: 'radio',
    label: 'Show Seconds',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showCTA: {
    type: 'radio',
    label: 'Show CTA',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  ctaText: { type: 'text', label: 'CTA Text' },
  ctaLink: { type: 'text', label: 'CTA Link' },
  backgroundColor: { type: 'text', label: 'Background Color (hex)' },
  textColor: { type: 'text', label: 'Text Color (hex)' },
  timerColor: { type: 'text', label: 'Timer Color (hex)' },
  accentColor: { type: 'text', label: 'Accent Color (hex)' },
  spacing: {
    type: 'select',
    label: 'Spacing',
    options: [
      { label: 'Compact', value: 'compact' },
      { label: 'Normal', value: 'normal' },
      { label: 'Spacious', value: 'spacious' },
    ],
  },
  mode: {
    type: 'select',
    label: 'Mode',
    options: [
      { label: 'Live (real countdown)', value: 'live' },
      { label: 'Preview (static, no tick)', value: 'preview' },
    ],
  },
} satisfies Record<Exclude<keyof CountdownTimerProps, 'id'>, Field>;
