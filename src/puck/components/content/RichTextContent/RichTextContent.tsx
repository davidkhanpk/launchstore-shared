import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { richTextContentFields } from './richtext.fields';
import type { RichTextContentProps } from './richtext.types';

export const RichTextContent: ComponentConfig<RichTextContentProps> = {
  label: 'Rich Text Content',
  fields: richTextContentFields as ComponentConfig<RichTextContentProps>['fields'],
  defaultProps: {
    content: '',
    maxWidth: 'max-w-3xl',
    padding: 'py-12',
  },
  render: ({ content, maxWidth, padding }) => (
    <div className={`mx-auto px-4 sm:px-6 ${maxWidth} ${padding}`}>
      <div
        className="prose prose-gray prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  ),
};

export default RichTextContent;
