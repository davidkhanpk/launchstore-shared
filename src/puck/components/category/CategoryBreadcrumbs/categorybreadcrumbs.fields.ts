import type { Field } from '@puckeditor/core';
import type { CategoryBreadcrumbsProps } from './categorybreadcrumbs.types';

export const categoryBreadcrumbsFields = {
  separator: { type: 'text', label: 'Separator' },
  showHome: { type: 'radio', label: 'Show Home Link', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  homeText: { type: 'text', label: 'Home Link Text' },
  fontSize: { type: 'text', label: 'Font Size (e.g., 0.875rem, 14px)' },
  textColor: { type: 'text', label: 'Text Color' },
  activeColor: { type: 'text', label: 'Active/Current Color' },
  hoverColor: { type: 'text', label: 'Hover Color' },
  marginBottom: { type: 'text', label: 'Margin Bottom (e.g., 1rem, 16px)' },
  className: { type: 'text', label: 'Custom CSS Classes' },
} as Record<string, Field>;
