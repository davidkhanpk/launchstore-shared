import type { Field } from '@puckeditor/core';
import type { ProductBreadcrumbsProps } from './productbreadcrumbs.types';

export const productBreadcrumbsFields = {
  showHomeIcon: {
    type: 'radio', label: 'Show Home Icon',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  separator: {
    type: 'select', label: 'Separator',
    options: [
      { label: 'Arrow', value: 'arrow' },
      { label: 'Slash', value: 'slash' },
      { label: 'Dot', value: 'dot' },
    ],
  },
  textTransform: {
    type: 'select', label: 'Text Transform',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Uppercase', value: 'uppercase' },
      { label: 'Capitalize', value: 'capitalize' },
    ],
  },
} as Record<string, Field>;
