import type { Field } from '@puckeditor/core';
import type { AccountButtonProps } from './accountbutton.types';

export const accountButtonFields = {
  showLabel: {
    type: 'radio', label: 'Show Label',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  label: { type: 'text', label: 'Button Label' },
  iconSize: {
    type: 'select', label: 'Icon Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  iconColor: { type: 'text', label: 'Icon Color' },
  hoverColor: { type: 'text', label: 'Hover Color' },
  style: {
    type: 'select', label: 'Button Style',
    options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Outlined', value: 'outlined' }, { label: 'Filled', value: 'filled' }],
  },
  linkTo: { type: 'text', label: 'Link (Signed Out)' },
  signedInLink: { type: 'text', label: 'Link (Signed In)' },
  showWhenSignedOut: {
    type: 'radio', label: 'Show When Signed Out',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  showWhenSignedIn: {
    type: 'radio', label: 'Show When Signed In',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
} as Record<string, Field>;
