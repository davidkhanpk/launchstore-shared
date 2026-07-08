import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const productGridFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }] },
  columns: { type: 'select', label: 'Grid Columns', options: [{ label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' }, { label: '4 Columns', value: '4' }] },
  showQuickView: { type: 'radio', label: 'Show Quick View Button', options: RADIO_YES_NO },
  showWishlist: { type: 'radio', label: 'Show Wishlist Button', options: RADIO_YES_NO },
  showCompare: { type: 'radio', label: 'Show Compare Button', options: RADIO_YES_NO },
  imageAspectRatio: { type: 'select', label: 'Image Aspect Ratio', options: [{ label: 'Square (1:1)', value: 'square' }, { label: 'Portrait (3:4)', value: 'portrait' }, { label: 'Landscape (4:3)', value: 'landscape' }] },
  showBadges: { type: 'radio', label: 'Show Badges (Sale)', options: RADIO_YES_NO },
  gap: { type: 'select', label: 'Grid Gap', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
} as Record<string, Field>;

const Heart = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);
const Eye = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>);

export interface CollectionProductGridProps {
  layout: 'grid' | 'list';
  columns: '2' | '3' | '4';
  showQuickView: boolean;
  showWishlist: boolean;
  showCompare: boolean;
  imageAspectRatio: 'square' | 'portrait' | 'landscape';
  showBadges: boolean;
  gap: 'sm' | 'md' | 'lg';
}

export interface ProductGridWithData extends CollectionProductGridProps {
  products?: Array<{ id: string; title: string; handle: string; thumbnail: string; price: string; compareAtPrice?: string; badge?: string; }>;
  onQuickView?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
  onCompare?: (id: string) => void;
  formatPrice?: (p: string) => string;
}

const aspectMap = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]' } as const;
const gapMap = { sm: 'gap-3', md: 'gap-6', lg: 'gap-8' } as const;
const colsMap = { '2': 'md:grid-cols-2', '3': 'md:grid-cols-2 lg:grid-cols-3', '4': 'md:grid-cols-2 lg:grid-cols-4' } as const;

const MOCK = [
  { id: '1', title: 'Classic T-Shirt', handle: 'classic-t-shirt', thumbnail: 'https://placehold.co/400x400', price: '$29.99', compareAtPrice: '$39.99', badge: 'Sale' },
  { id: '2', title: 'Denim Jeans', handle: 'denim-jeans', thumbnail: 'https://placehold.co/400x400', price: '$79.99' },
  { id: '3', title: 'Leather Belt', handle: 'leather-belt', thumbnail: 'https://placehold.co/400x400', price: '$49.99', badge: 'New' },
  { id: '4', title: 'Sneakers', handle: 'sneakers', thumbnail: 'https://placehold.co/400x400', price: '$99.99' },
];

export const ProductGrid: ComponentConfig<ProductGridWithData> = {
  label: 'Product Grid',
  fields: productGridFields as ComponentConfig<CollectionProductGridProps>['fields'],
  defaultProps: { layout: 'grid', columns: '3', showQuickView: true, showWishlist: true, showCompare: false, imageAspectRatio: 'square', showBadges: true, gap: 'md' },
  render: (raw: any) => {
    const { layout = 'grid', columns = '3', showQuickView, showWishlist, showCompare, imageAspectRatio = 'square', showBadges, gap = 'md'   } = raw as CollectionProductGridProps;
    const products = (raw as any).products ?? MOCK;
    const onQuickView = (id: string) => (raw as any).onQuickView?.(id);
    const onAddToWishlist = (id: string) => (raw as any).onAddToWishlist?.(id);
    const onCompare = (id: string) => (raw as any).onCompare?.(id);

    if (layout === 'list') {
      return (
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
                <div className="mt-4 flex gap-2">
                  {showQuickView && <button onClick={() => onQuickView(p.id)} className="p-2 border border-gray-300 rounded hover:bg-gray-50" title="Quick view"><Eye /></button>}
                  {showWishlist && <button onClick={() => onAddToWishlist(p.id)} className="p-2 border border-gray-300 rounded hover:bg-gray-50" title="Add to wishlist"><Heart /></button>}
                  {showCompare && <button onClick={() => onCompare(p.id)} className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Compare</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={`grid grid-cols-2 ${colsMap[columns as '2' | '3' | '4']} ${gapMap[gap]}`}>
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
    );
  },
};

export default ProductGrid;
