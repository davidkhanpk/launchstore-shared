import type { Field } from '@puckeditor/core';
import type { SocialIconsProps } from './socialicons.types';

export const socialIconsFields = {
  links: {
    type: 'array',
    label: 'Social Links',
    arrayFields: {
      platform: {
        type: 'select', label: 'Platform',
        options: [
          { label: 'Facebook', value: 'facebook' },
          { label: 'Instagram', value: 'instagram' },
          { label: 'Twitter', value: 'twitter' },
          { label: 'YouTube', value: 'youtube' },
          { label: 'LinkedIn', value: 'linkedin' },
          { label: 'GitHub', value: 'github' },
        ],
      },
      url: { type: 'text', label: 'URL' },
    },
    getItemSummary: (item: any) => `${item.platform}` || 'Social Link',
  } as any,
  size: {
    type: 'select', label: 'Icon Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  style: {
    type: 'select', label: 'Style',
    options: [{ label: 'Circle', value: 'circle' }, { label: 'Square', value: 'square' }, { label: 'Minimal', value: 'minimal' }],
  },
  color: { type: 'text', label: 'Icon Color (hex or theme token)' },
  hoverColor: { type: 'text', label: 'Hover Color (hex or theme token)' },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  hoverBackgroundColor: { type: 'text', label: 'Hover Background Color (hex or theme token)' },
  gap: {
    type: 'select', label: 'Spacing Between Icons',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  alignment: {
    type: 'select', label: 'Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
  },
} as Record<string, Field>;
