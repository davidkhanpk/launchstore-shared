import type { Field } from '@puckeditor/core';

export type ProductAccordionContentType = 'description' | 'material' | 'dimensions' | 'shipping' | 'custom';
export type ProductAccordionBorderStyle = 'none' | 'top' | 'full';

export interface ProductAccordionSection {
  id: string;
  title: string;
  contentType: ProductAccordionContentType;
  customContent?: string;
}

export interface ProductAccordionProps {
  sections: ProductAccordionSection[];
  allowMultiple: boolean;
  /** Comma-separated section IDs to open by default. */
  defaultOpen?: string;
  borderStyle: ProductAccordionBorderStyle;
}
