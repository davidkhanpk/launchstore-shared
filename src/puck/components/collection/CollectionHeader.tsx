import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const collectionHeaderFields = {
  showTitle: { type: 'radio', label: 'Show Collection Title', options: RADIO_YES_NO },
  showDescription: { type: 'radio', label: 'Show Description', options: RADIO_YES_NO },
  showBanner: { type: 'radio', label: 'Show Banner Image', options: RADIO_YES_NO },
  showProductCount: { type: 'radio', label: 'Show Product Count', options: RADIO_YES_NO },
  titleSize: { type: 'select', label: 'Title Size', options: [{ label: '2XL', value: '2xl' }, { label: '3XL', value: '3xl' }, { label: '4XL', value: '4xl' }] },
  alignment: { type: 'select', label: 'Text Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  bannerHeight: { type: 'select', label: 'Banner Height', options: [{ label: 'Small (200px)', value: 'sm' }, { label: 'Medium (300px)', value: 'md' }, { label: 'Large (400px)', value: 'lg' }] },
} as Record<string, Field>;

const Chevron = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
);

export interface CollectionHeaderProps {
  showTitle: boolean;
  showDescription: boolean;
  showBanner: boolean;
  showProductCount: boolean;
  titleSize: '2xl' | '3xl' | '4xl';
  alignment: 'left' | 'center' | 'right';
  bannerHeight: 'sm' | 'md' | 'lg';
}

export interface CollectionHeaderWithData extends CollectionHeaderProps {
  title?: string;
  description?: string;
  bannerUrl?: string;
  productCount?: number;
  breadcrumbsHref?: string;
  collectionsHref?: string;
}

const titleSizeClasses = { '2xl': 'text-2xl md:text-3xl', '3xl': 'text-3xl md:text-4xl', '4xl': 'text-4xl md:text-5xl' } as const;
const alignmentClasses = { left: 'text-left', center: 'text-center', right: 'text-right' } as const;
const bannerHeightClasses = { sm: 'h-48', md: 'h-64', lg: 'h-80' } as const;

export const CollectionHeader: ComponentConfig<CollectionHeaderWithData> = {
  label: 'Collection Header',
  fields: collectionHeaderFields as ComponentConfig<CollectionHeaderWithData>['fields'],
  defaultProps: { showTitle: true, showDescription: true, showBanner: true, showProductCount: true, titleSize: '3xl', alignment: 'center', bannerHeight: 'md' },
  render: (raw: any) => {
    const { showTitle, showDescription, showBanner, showProductCount, titleSize = '3xl', alignment = 'center', bannerHeight = 'md' } = raw as CollectionHeaderWithData;
    const title = (raw as any).title ?? 'Summer Collection';
    const description = (raw as any).description ?? 'Discover our curated selection of premium products for the season.';
    const bannerUrl: string = (raw as any).bannerUrl ?? '';
    const productCount: number = (raw as any).productCount ?? 24;
    const breadcrumbsHref: string = (raw as any).breadcrumbsHref ?? '/';
    const collectionsHref: string = (raw as any).collectionsHref ?? '/collections';

    return (
      <div className="mb-8">
        {showBanner && bannerUrl && (
          <div className={`relative ${bannerHeightClasses[bannerHeight]} mb-6 rounded-lg overflow-hidden`}>
            <img src={bannerUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className={`absolute inset-0 flex flex-col justify-end p-8 ${alignmentClasses[alignment]}`}>
              {showTitle && <h1 className={`${titleSizeClasses[titleSize]} font-bold text-white mb-2`}>{title}</h1>}
              {showProductCount && <p className="text-white/90">{productCount} products</p>}
            </div>
          </div>
        )}

        {!showBanner && (
          <div className={alignmentClasses[alignment]}>
            {showTitle && <h1 className={`${titleSizeClasses[titleSize]} font-bold text-gray-900 mb-4`}>{title}</h1>}
            {showDescription && description && <p className="text-gray-600 max-w-3xl mx-auto mb-4">{description}</p>}
            {showProductCount && <p className="text-gray-500 text-sm">{productCount} products available</p>}
          </div>
        )}

        <nav className="flex items-center gap-2 text-sm text-gray-600 mt-4">
          <a href={breadcrumbsHref} className="hover:text-gray-900">Home</a>
          <Chevron />
          <a href={collectionsHref} className="hover:text-gray-900">Collections</a>
          <Chevron />
          <span className="text-gray-900 font-medium">{title}</span>
        </nav>
      </div>
    );
  },
};

export default CollectionHeader;
