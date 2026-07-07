import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { categoryTitleFields } from './categorytitle.fields';
import type { CategoryTitleProps } from './categorytitle.types';

const SIZE: Record<NonNullable<CategoryTitleProps['fontSize']>, string> = {
  default: 'text-2xl', sm: 'text-lg', md: 'text-xl', lg: 'text-3xl',
  xl: 'text-4xl', '2xl': 'text-5xl', '3xl': 'text-6xl',
};
const COLOR: Record<NonNullable<CategoryTitleProps['color']>, string> = {
  default: 'text-gray-900', black: 'text-black', gray: 'text-gray-600', primary: 'text-brand-primary', white: 'text-white',
};
const WEIGHT: Record<CategoryTitleProps['fontWeight'], string> = {
  normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const ALIGN: Record<CategoryTitleProps['alignment'], string> = {
  left: 'text-left', center: 'text-center', right: 'text-right',
};

export const CategoryTitle: ComponentConfig<CategoryTitleProps> = {
  label: 'Category Title',
  fields: categoryTitleFields as ComponentConfig<CategoryTitleProps>['fields'],
  defaultProps: {
    tag: 'h1', fontSize: '2xl', color: 'black', alignment: 'left', fontWeight: 'bold', marginBottom: '1rem', className: '',
  },
  render: (rawProps: any) => {
    const { category, tag = 'h1', fontSize, color, alignment, fontWeight, marginBottom, className } = rawProps as CategoryTitleProps;
    const fs = fontSize || '2xl';
    const c = color || 'black';
    const fw = fontWeight || 'bold';
    const a = alignment || 'left';
    if (!category) {
      return <div className="text-gray-400 italic">Category title will appear here</div>;
    }
    const Tag: any = tag;
    return (
      <Tag
        className={`${ALIGN[a]} ${WEIGHT[fw]} ${SIZE[fs]} ${COLOR[c]} ${className || ''}`.trim()}
        style={{ marginBottom: marginBottom || '1rem' }}
      >
        {category.name}
      </Tag>
    );
  },
};

export default CategoryTitle;
