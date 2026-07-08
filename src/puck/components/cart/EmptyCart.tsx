import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const emptyCartFields = {
  title: { type: 'text', label: 'Title' },
  message: { type: 'textarea', label: 'Message' },
  linkText: { type: 'text', label: 'Link Text' },
  linkUrl: { type: 'text', label: 'Link URL' },
  showOnlyWhenEmpty: { type: 'radio', label: 'Show Only When Cart is Empty', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
} as Record<string, Field>;

const ArrowUpRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
);

export interface EmptyCartConfig {
  title: string;
  message: string;
  linkText: string;
  linkUrl: string;
  showOnlyWhenEmpty: boolean;
}

export interface EmptyCartWithData extends EmptyCartConfig {
  isEmpty?: boolean;
}

export const EmptyCart: ComponentConfig<EmptyCartWithData> = {
  label: 'Empty Cart Message',
  fields: emptyCartFields as ComponentConfig<EmptyCartWithData>['fields'],
  defaultProps: {
    title: 'Cart', message: "You don't have anything in your cart. Let's change that, use the link below to start browsing our products.",
    linkText: 'Explore products', linkUrl: '/store', showOnlyWhenEmpty: true,
  },
  render: (raw: any) => {
    const { title, message, linkText, linkUrl, showOnlyWhenEmpty, isEmpty = true } = raw as EmptyCartWithData;
    if (showOnlyWhenEmpty && !isEmpty) return <></>;
    return (
      <div className="py-48 px-2 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-medium mb-4">{title}</h1>
        <p className="text-base text-gray-600 dark:text-gray-400 mt-4 mb-6 max-w-[32rem]">{message}</p>
        <div>
          <a href={linkUrl} className="flex gap-x-1 items-center group text-blue-600 hover:text-blue-700">
            <span>{linkText}</span>
            <ArrowUpRight />
          </a>
        </div>
      </div>
    );
  },
};

export default EmptyCart;
