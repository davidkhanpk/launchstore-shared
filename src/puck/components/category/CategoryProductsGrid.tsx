import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

/**
 * CategoryProductsGrid — SIMPLIFIED (pure presentation).
 *
 * Sort, filter, and pagination are now handled by the separate FilterBar
 * and PaginationBar components. This component only renders the product
 * cards in a grid layout.
 */

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const categoryProductsGridFields = {
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  title: { type: 'text', label: 'Grid Title' },
  titleAlignment: { type: 'radio', label: 'Title Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  columns: { type: 'select', label: 'Columns (Desktop)', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' }, { label: '6 Columns', value: '6' }] },
  gap: { type: 'select', label: 'Gap Between Products', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }] },
  className: { type: 'text', label: 'Custom CSS Classes' },
} as Record<string, Field>;

export interface CategoryProductsGridProps {
  showTitle: boolean;
  title: string;
  titleAlignment: 'left' | 'center' | 'right';
  columns: '2' | '3' | '4' | '5' | '6';
  gap: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface CategoryProductsGridWithData extends CategoryProductsGridProps {
  products?: any[];
  /** When provided, used instead of the default card for each product. */
  renderProduct?: (product: any) => React.ReactNode;
}

const gapClasses = { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '3rem' } as const;
const colsClasses: Record<string, string> = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-2 lg:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
  '5': 'md:grid-cols-2 lg:grid-cols-5',
  '6': 'md:grid-cols-3 lg:grid-cols-6',
};

const DefaultProductCard: React.FC<{ id: string; title: string; handle: string; thumbnail: string; price: string }> = ({ title, handle, thumbnail, price }) => (
  <a href={`/products/${handle}`} className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <img src={thumbnail} alt={title} className="w-full aspect-square object-cover rounded mb-3" />
    <p className="font-semibold text-base text-gray-900">{title}</p>
    <p className="text-sm text-gray-600 mt-1">{price}</p>
  </a>
);

export const CategoryProductsGrid: ComponentConfig<CategoryProductsGridWithData> = {
  label: 'Category Products Grid',
  fields: categoryProductsGridFields as ComponentConfig<CategoryProductsGridWithData>['fields'],
  defaultProps: {
    showTitle: false,
    title: 'Products',
    titleAlignment: 'left',
    columns: '4',
    gap: 'md',
    className: '',
  },
  render: (raw: any) => {
    const {
      showTitle, title = 'Products', titleAlignment = 'left',
      columns = '4', gap = 'md', className = '',
    } = raw as CategoryProductsGridWithData;
    const products: any[] = raw.products ?? [];
    const renderProduct = raw.renderProduct ?? DefaultProductCard;

    return (
      <div className={className} style={{ width: '100%' }}>
        {showTitle && title && (
          <h2 className="text-2xl font-semibold mb-6" style={{ textAlign: titleAlignment as any }}>
            {title}
          </h2>
        )}

        {products.length === 0 ? (
          <div className="p-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
            <p>No products found.</p>
          </div>
        ) : (
          <div className={`grid grid-cols-2 ${colsClasses[columns] || colsClasses['4']}`} style={{ gap: gapClasses[gap] || gapClasses.md }}>
            {products.map((p: any) => (
              <div key={p.id}>{renderProduct(p)}</div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export default CategoryProductsGrid;
