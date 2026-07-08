import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const collectionBreadcrumbsFields = {
  showHomeIcon: { type: 'radio', label: 'Show Home Icon', options: RADIO_YES_NO },
  separator: { type: 'select', label: 'Separator Style', options: [{ label: 'Arrow →', value: 'arrow' }, { label: 'Slash /', value: 'slash' }, { label: 'Chevron >', value: 'chevron' }] },
  textSize: { type: 'select', label: 'Text Size', options: [{ label: 'Small', value: 'text-sm' }, { label: 'Medium', value: 'text-base' }] },
  textColor: { type: 'select', label: 'Text Color', options: [{ label: 'Gray', value: 'text-gray-500' }, { label: 'Gray Dark', value: 'text-gray-600' }, { label: 'Blue', value: 'text-blue-600' }] },
  marginBottom: { type: 'select', label: 'Bottom Margin', options: [{ label: 'Small', value: 'mb-2' }, { label: 'Medium', value: 'mb-4' }, { label: 'Large', value: 'mb-6' }] },
} as Record<string, Field>;

const Home = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const Chevron = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
);

export interface CollectionBreadcrumbsProps {
  showHomeIcon: boolean;
  separator: 'arrow' | 'slash' | 'chevron';
  textSize: string;
  textColor: string;
  marginBottom: string;
}

export interface CollectionBreadcrumbsWithData extends CollectionBreadcrumbsProps {
  trail?: Array<{ label: string; href?: string }>;
}

export const CollectionBreadcrumbs: ComponentConfig<CollectionBreadcrumbsWithData> = {
  label: 'Collection Breadcrumbs',
  fields: collectionBreadcrumbsFields as ComponentConfig<CollectionBreadcrumbsWithData>['fields'],
  defaultProps: { showHomeIcon: true, separator: 'chevron', textSize: 'text-sm', textColor: 'text-gray-500', marginBottom: 'mb-4' },
  render: (raw: any) => {
    const { showHomeIcon, separator = 'chevron', textSize = 'text-sm', textColor = 'text-gray-500', marginBottom = 'mb-4' } = raw as CollectionBreadcrumbsWithData;
    const trail = (raw as any).trail ?? [{ label: 'Home', href: '/' }, { label: 'Collections', href: '/collections' }, { label: 'Sample Collection' }];
    const getSep = () => separator === 'arrow' ? <span className="mx-2">→</span> : separator === 'slash' ? <span className="mx-2">/</span> : <Chevron />;
    return (
      <nav className={`flex items-center ${textSize} ${textColor} ${marginBottom}`}>
        {trail.map((item: any, i: number) => (
          <React.Fragment key={i}>
            {i === 0 && showHomeIcon && <Home />}
            {item.href ? <a href={item.href} className="hover:underline flex items-center">{item.label}</a> : <span className="text-gray-900">{item.label}</span>}
            {i < trail.length - 1 && <span className="mx-2">{getSep()}</span>}
          </React.Fragment>
        ))}
      </nav>
    );
  },
};

export default CollectionBreadcrumbs;
