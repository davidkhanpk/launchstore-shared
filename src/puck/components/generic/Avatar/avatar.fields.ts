import type { Field } from '@puckeditor/core';
import type { AvatarProps } from './avatar.types';

export const avatarFields = {
  id: { type: 'text', label: 'ID' },
  src: { type: 'text', label: 'Image URL (leave empty for initials)' },
  name: { type: 'text', label: 'Name' },
  size: { type: 'radio', label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }] },
  shape: { type: 'radio', label: 'Shape', options: [{ label: 'Circle', value: 'circle' }, { label: 'Square', value: 'square' }] },
  showName: { type: 'radio', label: 'Show Name Label', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  namePosition: { type: 'radio', label: 'Name Position', options: [{ label: 'Right', value: 'right' }, { label: 'Below', value: 'bottom' }] },
  backgroundColor: { type: 'text', label: 'Fallback Background (hex or theme token)' },
  textColor: { type: 'text', label: 'Fallback Text Color (hex or theme token)' },
} as Record<string, Field>;
