import type { Field } from '@puckeditor/core';

export type ProductDescriptionSize = 'sm' | 'base' | 'lg';
export type ProductDescriptionColor = 'default' | 'gray' | 'black';
export type ProductDescriptionLineHeight = 'tight' | 'normal' | 'relaxed';
export type ProductDescriptionMaxWidth = 'full' | 'prose' | 'narrow';

export interface ProductDescriptionProps {
  fontSize: ProductDescriptionSize;
  color: ProductDescriptionColor;
  lineHeight: ProductDescriptionLineHeight;
  maxWidth: ProductDescriptionMaxWidth;
  marginTop: string;
  marginBottom: string;
  paddingX: string;
  paddingY: string;
}
