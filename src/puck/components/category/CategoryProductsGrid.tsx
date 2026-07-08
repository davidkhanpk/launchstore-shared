import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { Pagination as SharedPagination, ProductSort as SharedProductSort } from '../collection';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const categoryProductsGridFields = {
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  title: { type: 'text', label: 'Grid Title' },
  titleAlignment: { type: 'radio', label: 'Title Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  columns: { type: 'select', label: 'Columns (Desktop)', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' }, { label: '6 Columns', value: '6' }] },
  gap: { type: 'select', label: 'Gap Between Products', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }] },
  gridLocation: { type: 'radio', label: 'Grid Location', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  showSortFilter: { type: 'radio', label: 'Show Sort & Filter', options: RADIO_YES_NO },
  sortPosition: { type: 'select', label: 'Sort Position', options: [{ label: 'Top Left', value: 'top-left' }, { label: 'Top Center', value: 'top-center' }, { label: 'Top Right', value: 'top-right' }] },
  showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
  paginationPosition: { type: 'select', label: 'Pagination Position', options: [{ label: 'Bottom Left', value: 'bottom-left' }, { label: 'Bottom Center', value: 'bottom-center' }, { label: 'Bottom Right', value: 'bottom-right' }] },
  showProductsPerPageDropdown: { type: 'radio', label: 'Show Per-Page Selector', options: RADIO_YES_NO },
  productsPerPageOptions: { type: 'text', label: 'Per-Page Options (comma-separated)' },
  productsPerPage: { type: 'number', label: 'Products Per Page (Default)' },
  className: { type: 'text', label: 'Custom CSS Classes' },
} as Record<string, Field>;

export interface CategoryProductsGridProps {
  showTitle: boolean;
  title: string;
  titleAlignment: 'left' | 'center' | 'right';
  columns: '2' | '3' | '4' | '5' | '6';
  gap: 'sm' | 'md' | 'lg' | 'xl';
  gridLocation: 'left' | 'center' | 'right';
  showSortFilter: boolean;
  sortPosition: 'top-left' | 'top-center' | 'top-right';
  showPagination: boolean;
  paginationPosition: 'bottom-left' | 'bottom-center' | 'bottom-right';
  showProductsPerPageDropdown: boolean;
  productsPerPageOptions: string;
  productsPerPage: number;
  className?: string;
}

export interface CategoryProductsGridWithData extends CategoryProductsGridProps {
  products?: Array<{ id: string; title: string; handle: string; thumbnail: string; price: string }>;
  totalCount?: number;
  sortOptions?: Array<{ label: string; value: string }>;
  onSortChange?: (sort: string) => void;
  onPageChange?: (page: number) => void;
  onProductsPerPageChange?: (n: number) => void;
  renderProduct?: (product: { id: string; title: string; handle: string; thumbnail: string; price: string }) => React.ReactNode;
}

const gapClasses = { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '3rem' } as const;
const colsClasses = { '2': 'md:grid-cols-2', '3': 'md:grid-cols-2 lg:grid-cols-3', '4': 'md:grid-cols-2 lg:grid-cols-4', '5': 'md:grid-cols-2 lg:grid-cols-5', '6': 'md:grid-cols-2 lg:grid-cols-6' } as const;
const alignJustify = { left: 'flex-start', center: 'center', right: 'flex-end' } as const;
const marginStyles = { left: '0', center: '0 auto', right: '0 0 0 auto' } as const;

const DefaultProductCard: React.FC<{ id: string; title: string; handle: string; thumbnail: string; price: string }> = ({ title, handle, thumbnail, price }) => (
  <a href={`/products/${handle}`} className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <img src={thumbnail} alt={title} className="w-full aspect-square object-cover rounded mb-3" />
    <h3 className="font-medium text-sm text-gray-700 mb-1">Product</h3>
    <p className="font-semibold text-base text-gray-900">{title}</p>
    <p className="text-sm text-gray-600 mt-1">{price}</p>
  </a>
);

export const CategoryProductsGrid: ComponentConfig<CategoryProductsGridWithData> = {
  label: 'Category Products Grid',
  fields: categoryProductsGridFields as ComponentConfig<CategoryProductsGridWithData>['fields'],
  defaultProps: { showTitle: false, title: 'Products', titleAlignment: 'left', columns: '4', gap: 'md', gridLocation: 'center', showSortFilter: true, sortPosition: 'top-right', showPagination: true, paginationPosition: 'bottom-center', showProductsPerPageDropdown: false, productsPerPageOptions: '12,24,36,48', productsPerPage: 12, className: '' },
  render: (raw: any) => {
    const { showTitle, title = 'Products', titleAlignment = 'left', columns = '4', gap = 'md', gridLocation = 'center', showSortFilter, sortPosition = 'top-right', showPagination, paginationPosition = 'bottom-center', showProductsPerPageDropdown, productsPerPageOptions = '12,24,36,48', productsPerPage = 12, className } = raw as CategoryProductsGridWithData;
    const products: any[] = (raw as any).products ?? [];
    const totalCount: number = (raw as any).totalCount ?? products.length;
    const sortOptions: any[] = (raw as any).sortOptions ?? [{ label: 'Latest Arrivals', value: 'created_desc' }, { label: 'Price: Low to High', value: 'price_asc' }, { label: 'Price: High to Low', value: 'price_desc' }];
    const onSortChange = (raw as any).onSortChange;
    const onPageChange = (raw as any).onPageChange;
    const onProductsPerPageChange = (raw as any).onProductsPerPageChange;
    const renderProduct = (raw as any).renderProduct ?? DefaultProductCard;

    const perPageOptions = productsPerPageOptions.split(',').map((n: string) => n.trim()).filter(Boolean);
    const perPage = productsPerPage ?? 12;
    const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
    const [internalPage, setInternalPage] = useState(1);
    const setPage = (p: number) => { setInternalPage(p); onPageChange?.(p); };

    return (
      <div className={className} style={{ width: '100%', margin: marginStyles[gridLocation] }} data-puck-component="category-products-grid" data-category-field="products">
        {showTitle && title && <h2 className="text-2xl font-semibold mb-6" style={{ textAlign: titleAlignment as any, color: '#000' }}>{title}</h2>}

        {showSortFilter && (
          <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg" style={{ justifyContent: alignJustify[sortPosition === 'top-left' ? 'left' : sortPosition === 'top-center' ? 'center' : 'right'] }}>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select onChange={(e) => onSortChange?.(e.target.value)} className="px-3 py-2 border border-gray-300 rounded text-sm">
                {sortOptions.map((o: any) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            {showProductsPerPageDropdown && perPageOptions.length > 0 && (
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Show:</label>
                <select onChange={(e) => onProductsPerPageChange?.(Number(e.target.value))} className="px-3 py-2 border border-gray-300 rounded text-sm">
                  {perPageOptions.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            )}
            <span className="text-sm text-gray-500" data-category-field="product_count">{totalCount} products</span>
          </div>
        )}

        <div className={`grid grid-cols-2 ${colsClasses[columns]}`} style={{ gap: gapClasses[gap] }}>
          {products.slice(0, 8).map((p: any) => (
            <div key={p.id}>{renderProduct(p)}</div>
          ))}
        </div>

        {showPagination && totalPages > 1 && (
          <div className="mt-6 flex items-center gap-2" style={{ justifyContent: alignJustify[paginationPosition === 'bottom-left' ? 'left' : paginationPosition === 'bottom-center' ? 'center' : 'right'] }}>
            <button onClick={() => setPage(Math.max(1, internalPage - 1))} disabled={internalPage === 1} className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50">Previous</button>
            <span className="text-sm text-gray-600">Page {internalPage} of {totalPages}</span>
            <button onClick={() => setPage(Math.min(totalPages, internalPage + 1))} disabled={internalPage === totalPages} className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50">Next</button>
          </div>
        )}
      </div>
    );
  },
};

export default CategoryProductsGrid;
