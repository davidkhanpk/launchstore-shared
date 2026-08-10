import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

/**
 * ProductGrid — THE single product grid component for all pages
 * (store, collection, category, search).
 *
 * Pure presentation: receives products[] + optional renderProduct callback
 * from the storefront wrapper. Sort/filter/pagination are separate
 * FilterBar + PaginationBar components.
 */

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const productGridFields = {
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  title: { type: 'text', label: 'Grid Title' },
  titleAlignment: { type: 'radio', label: 'Title Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }] },
  columns: { type: 'select', label: 'Grid Columns', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' }, { label: '6 Columns', value: '6' }] },
  gap: { type: 'select', label: 'Grid Gap', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }] },
  imageAspectRatio: { type: 'select', label: 'Image Aspect Ratio', options: [{ label: 'Square (1:1)', value: 'square' }, { label: 'Portrait (3:4)', value: 'portrait' }, { label: 'Landscape (4:3)', value: 'landscape' }] },
  showBadges: { type: 'radio', label: 'Show Badges (Sale)', options: RADIO_YES_NO },
  showQuickView: { type: 'radio', label: 'Show Quick View Button', options: RADIO_YES_NO },
  showWishlist: { type: 'radio', label: 'Show Wishlist Button', options: RADIO_YES_NO },
} as Record<string, Field>;

const Heart = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
const Eye = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>);

export interface CollectionProductGridProps {
  showTitle: boolean;
  title: string;
  titleAlignment: 'left' | 'center' | 'right';
  layout: 'grid' | 'list';
  columns: '2' | '3' | '4' | '5' | '6';
  gap: 'sm' | 'md' | 'lg' | 'xl';
  imageAspectRatio: 'square' | 'portrait' | 'landscape';
  showBadges: boolean;
  showQuickView: boolean;
  showWishlist: boolean;
}

export interface ProductGridWithData extends CollectionProductGridProps {
  products?: any[];
  /** When provided, used instead of the default card for each product. */
  renderProduct?: (product: any) => React.ReactNode;
  onQuickView?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

const aspectMap = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]' } as const;
const gapMap = { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '3rem' } as const;
const colsMap: Record<string, string> = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-2 lg:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
  '5': 'md:grid-cols-3 lg:grid-cols-5',
  '6': 'md:grid-cols-3 lg:grid-cols-6',
};

export const ProductGrid: ComponentConfig<ProductGridWithData> = {
  label: 'Product Grid',
  fields: productGridFields as ComponentConfig<CollectionProductGridProps>['fields'],
  defaultProps: {
    showTitle: false,
    title: 'Products',
    titleAlignment: 'left',
    layout: 'grid',
    columns: '4',
    gap: 'md',
    imageAspectRatio: 'square',
    showBadges: true,
    showQuickView: false,
    showWishlist: false,
  },
  render: (raw: any) => {
    const {
      showTitle, title = 'Products', titleAlignment = 'left',
      layout = 'grid', columns = '4', gap = 'md',
      imageAspectRatio = 'square', showBadges, showQuickView, showWishlist,
    } = raw as CollectionProductGridProps;
    const products: any[] = raw.products ?? [];
    const renderProduct = raw.renderProduct;
    const onQuickView = (id: string) => raw.onQuickView?.(id);
    const onAddToWishlist = (id: string) => raw.onAddToWishlist?.(id);

    const Header = showTitle && title ? (
      <h2 className="text-2xl font-semibold mb-6" style={{ textAlign: titleAlignment }}>{title}</h2>
    ) : null;

    // Empty state
    if (products.length === 0) {
      return (
        <div>
          {Header}
          <div className="p-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
            <p>No products to display.</p>
          </div>
        </div>
      );
    }

    // When renderProduct is provided (storefront), use it for each product.
    if (renderProduct) {
      return (
        <div>
          {Header}
          <div className={`grid grid-cols-2 ${colsMap[columns] || colsMap['4']}`} style={{ gap: gapMap[gap] || gapMap.md }}>
            {products.map((p: any) => (
              <div key={p.id}>{renderProduct(p)}</div>
            ))}
          </div>
        </div>
      );
    }

    // List layout (horizontal cards)
    if (layout === 'list') {
      return (
        <div>
          {Header}
          <div className="space-y-6">
            {products.map((p: any) => (
              <div key={p.id} className="flex gap-4 border border-gray-200 rounded-lg p-4">
                <a href={`/products/${p.handle}`} className="flex-shrink-0">
                  <img src={p.thumbnail} alt={p.title} className={`${aspectMap[imageAspectRatio]} w-32 object-cover rounded`} />
                </a>
                <div className="flex-1">
                  <a href={`/products/${p.handle}`} className="font-semibold text-lg hover:underline">{p.title}</a>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-medium">{p.price}</span>
                    {p.compareAtPrice && <span className="text-sm text-gray-500 line-through">{p.compareAtPrice}</span>}
                    {showBadges && p.badge && <span className="text-xs font-medium px-2 py-0.5 bg-red-100 text-red-700 rounded">{p.badge}</span>}
                  </div>
                  {(showQuickView || showWishlist) && (
                    <div className="mt-4 flex gap-2">
                      {showQuickView && <button onClick={() => onQuickView(p.id)} className="p-2 border border-gray-300 rounded hover:bg-gray-50" title="Quick view"><Eye /></button>}
                      {showWishlist && <button onClick={() => onAddToWishlist(p.id)} className="p-2 border border-gray-300 rounded hover:bg-gray-50" title="Add to wishlist"><Heart /></button>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Grid layout (default)
    return (
      <div>
        {Header}
        <div className={`grid grid-cols-2 ${colsMap[columns] || colsMap['4']}`} style={{ gap: gapMap[gap] || gapMap.md }}>
          {products.map((p: any) => (
            <div key={p.id} className="group relative">
              <a href={`/products/${p.handle}`} className="block relative">
                <img src={p.thumbnail} alt={p.title} className={`${aspectMap[imageAspectRatio]} w-full object-cover rounded-lg mb-3`} />
                {showBadges && p.badge && <span className="absolute top-2 left-2 text-xs font-medium px-2 py-0.5 bg-red-100 text-red-700 rounded">{p.badge}</span>}
                {(showQuickView || showWishlist) && (
                  <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {showQuickView && <button onClick={(e) => { e.preventDefault(); onQuickView(p.id); }} className="p-2 bg-white border border-gray-200 rounded hover:bg-gray-50" title="Quick view"><Eye /></button>}
                    {showWishlist && <button onClick={(e) => { e.preventDefault(); onAddToWishlist(p.id); }} className="p-2 bg-white border border-gray-200 rounded hover:bg-gray-50" title="Wishlist"><Heart /></button>}
                  </div>
                )}
              </a>
              <a href={`/products/${p.handle}`} className="block font-medium hover:underline">{p.title}</a>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-medium">{p.price}</span>
                {p.compareAtPrice && <span className="text-sm text-gray-500 line-through">{p.compareAtPrice}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export default ProductGrid;
