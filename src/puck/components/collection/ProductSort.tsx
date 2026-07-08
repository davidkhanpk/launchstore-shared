import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const productSortFields = {
  defaultSort: { type: 'select', label: 'Default Sort', options: [{ label: 'Featured', value: 'featured' }, { label: 'Price: Low to High', value: 'price_asc' }, { label: 'Price: High to Low', value: 'price_desc' }, { label: 'Newest First', value: 'created_desc' }, { label: 'Best Selling', value: 'sales_desc' }, { label: 'Name: A-Z', value: 'title_asc' }, { label: 'Name: Z-A', value: 'title_desc' }] },
  showResultCount: { type: 'radio', label: 'Show Result Count', options: RADIO_YES_NO },
  showViewToggle: { type: 'radio', label: 'Show Grid/List Toggle', options: RADIO_YES_NO },
  position: { type: 'select', label: 'Position', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
} as Record<string, Field>;

const Grid = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>);
const List = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>);

export interface ProductSortProps {
  defaultSort: string;
  showResultCount: boolean;
  showViewToggle: boolean;
  position: 'left' | 'center' | 'right';
}

export interface ProductSortWithData extends ProductSortProps {
  totalCount?: number;
  showingCount?: number;
  sortOptions?: Array<{ label: string; value: string }>;
  onSortChange?: (sort: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
}

const positionClasses = { left: 'justify-start', center: 'justify-center', right: 'justify-end' } as const;
const DEFAULT_OPTIONS = [
  { label: 'Featured', value: 'featured' }, { label: 'Price: Low to High', value: 'price_asc' }, { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Newest First', value: 'created_desc' }, { label: 'Best Selling', value: 'sales_desc' }, { label: 'Name: A-Z', value: 'title_asc' }, { label: 'Name: Z-A', value: 'title_desc' },
];

export const ProductSort: ComponentConfig<ProductSortWithData> = {
  label: 'Product Sort',
  fields: productSortFields as ComponentConfig<ProductSortWithData>['fields'],
  defaultProps: { defaultSort: 'featured', showResultCount: true, showViewToggle: true, position: 'right' },
  render: (raw: any) => {
    const { defaultSort, showResultCount, showViewToggle, position = 'right' } = raw as ProductSortWithData;
    const [currentSort, setCurrentSort] = useState(defaultSort);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const sortOptions = (raw as any).sortOptions ?? DEFAULT_OPTIONS;
    const totalCount: number = (raw as any).totalCount ?? 24;
    const showingCount: number = (raw as any).showingCount ?? 12;
    const onSortChange = (raw as any).onSortChange;
    const onViewChange = (raw as any).onViewChange;

    return (
      <div className={`flex items-center ${positionClasses[position]} gap-4 mb-6 py-4 border-b border-gray-200 flex-wrap`}>
        {showResultCount && <span className="text-sm text-gray-600">Showing <strong>{showingCount}</strong> of <strong>{totalCount}</strong> products</span>}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700 font-medium">Sort by:</label>
          <select value={currentSort} onChange={(e) => { setCurrentSort(e.target.value); onSortChange?.(e.target.value); }} className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
            {sortOptions.map((o: any) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        {showViewToggle && (
          <div className="flex items-center gap-1 border border-gray-300 rounded overflow-hidden">
            <button onClick={() => { setViewMode('grid'); onViewChange?.('grid'); }} className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`} title="Grid View"><Grid /></button>
            <button onClick={() => { setViewMode('list'); onViewChange?.('list'); }} className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`} title="List View"><List /></button>
          </div>
        )}
      </div>
    );
  },
};

export default ProductSort;
