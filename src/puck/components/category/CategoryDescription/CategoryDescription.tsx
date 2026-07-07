import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { categoryDescriptionFields } from './categorydescription.fields';
import type { CategoryDescriptionProps } from './categorydescription.types';

const SIZE: Record<CategoryDescriptionProps['fontSize'], string> = {
  sm: 'text-sm', base: 'text-base', md: 'text-md', lg: 'text-lg', xl: 'text-xl',
};
const COLOR: Record<CategoryDescriptionProps['color'], string> = {
  default: 'text-gray-600', black: 'text-black', gray: 'text-gray-600',
  muted: 'text-gray-500', white: 'text-white',
};
const ALIGN: Record<CategoryDescriptionProps['alignment'], string> = {
  left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify',
};
const LH: Record<CategoryDescriptionProps['lineHeight'], string> = {
  tight: 'leading-tight', normal: 'leading-normal', relaxed: 'leading-relaxed', loose: 'leading-loose',
};
const MW: Record<CategoryDescriptionProps['maxWidth'], string> = {
  none: '', sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-xl', '2xl': 'max-w-2xl', full: 'max-w-full',
};

export const CategoryDescription: ComponentConfig<CategoryDescriptionProps> = {
  label: 'Category Description',
  fields: categoryDescriptionFields as ComponentConfig<CategoryDescriptionProps>['fields'],
  defaultProps: {
    fontSize: 'base', color: 'gray', alignment: 'left', lineHeight: 'relaxed', maxWidth: 'full',
    marginBottom: '2rem', className: '',
  },
  render: (rawProps: any) => {
    const { category, fontSize, color, alignment, lineHeight, maxWidth, marginBottom, className } = rawProps as CategoryDescriptionProps;
    if (!category || !category.description) return <></>;
    const fs = fontSize || 'base';
    const c = color || 'gray';
    const a = alignment || 'left';
    const lh = lineHeight || 'relaxed';
    const mw = maxWidth || 'full';
    return (
      <div
        className={`${ALIGN[a]} ${SIZE[fs]} ${COLOR[c]} ${LH[lh]} ${MW[mw]} ${className || ''}`.trim()}
        style={{ marginBottom: marginBottom || '2rem' }}
      >
        <p>{category.description}</p>
      </div>
    );
  },
};

export default CategoryDescription;
