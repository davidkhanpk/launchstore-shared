import type { Field } from '@puckeditor/core';

export type ProductTitleTag = 'h1' | 'h2' | 'h3' | 'h4';
export type ProductTitleSize = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type ProductTitleColor = 'default' | 'black' | 'gray' | 'primary' | 'white';
export type ProductTitleAlignment = 'left' | 'center' | 'right';
export type ProductTitleWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface ProductTitleProps {
  tag: ProductTitleTag;
  fontSize: ProductTitleSize;
  color: ProductTitleColor;
  alignment: ProductTitleAlignment;
  fontWeight: ProductTitleWeight;
  marginTop: string;
  marginBottom: string;
  paddingX: string;
  paddingY: string;
}
