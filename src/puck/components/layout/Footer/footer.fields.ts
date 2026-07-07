import type { Field } from '@puckeditor/core';
import type { FooterProps } from './footer.types';

export const footerFields = {
  columns: {
    type: 'select', label: 'Number of Columns',
    options: [
      { label: '1 Column', value: '1' },
      { label: '2 Columns', value: '2' },
      { label: '3 Columns', value: '3' },
      { label: '4 Columns', value: '4' },
      { label: '5 Columns', value: '5' },
    ],
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  linkColor: { type: 'text', label: 'Link Color (hex or theme token)' },
  linkHoverColor: { type: 'text', label: 'Link Hover Color (hex or theme token)' },
  menuConfigs: {
    type: 'array',
    arrayFields: {
      handle: { type: 'text', label: 'Menu Handle' },
      title: { type: 'text', label: 'Column Title (optional)' },
      showAllItems: { type: 'radio', label: 'Show All Items', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    },
  } as any,
  newsletter: {
    type: 'object',
    objectFields: {
      enabled: { type: 'radio', label: 'Enabled', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
      title: { type: 'text', label: 'Title' },
      description: { type: 'textarea', label: 'Description' },
      placeholder: { type: 'text', label: 'Input Placeholder' },
      buttonText: { type: 'text', label: 'Button Text' },
    },
  } as any,
  social: {
    type: 'object',
    objectFields: {
      enabled: { type: 'radio', label: 'Enabled', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
      links: {
        type: 'array',
        arrayFields: {
          platform: {
            type: 'select',
            options: [
              { label: 'Facebook', value: 'facebook' },
              { label: 'Instagram', value: 'instagram' },
              { label: 'Twitter', value: 'twitter' },
              { label: 'YouTube', value: 'youtube' },
            ],
          },
          url: { type: 'text', label: 'URL' },
        },
      },
    },
  } as any,
  paymentIcons: {
    type: 'object',
    objectFields: {
      enabled: { type: 'radio', label: 'Enabled', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
      icons: {
        type: 'array',
        arrayFields: {
          icon: {
            type: 'select',
            options: [
              { label: 'Visa', value: 'visa' },
              { label: 'Mastercard', value: 'mastercard' },
              { label: 'American Express', value: 'amex' },
              { label: 'PayPal', value: 'paypal' },
              { label: 'Apple Pay', value: 'apple-pay' },
              { label: 'Google Pay', value: 'google-pay' },
            ],
          },
        },
      },
    },
  } as any,
  bottomBar: {
    type: 'object',
    objectFields: {
      copyright: { type: 'text', label: 'Copyright Text' },
      links: {
        type: 'array',
        arrayFields: {
          label: { type: 'text', label: 'Link Label' },
          url: { type: 'text', label: 'URL' },
        },
      },
    },
  } as any,
  paddingTop: { type: 'text', label: 'Padding Top' },
  paddingBottom: { type: 'text', label: 'Padding Bottom' },
} as Record<string, Field>;
