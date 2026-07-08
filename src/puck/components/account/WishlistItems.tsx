import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const wishlistItemsFields = {
  title: { type: 'text', label: 'Title' },
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  showEmptyMessage: { type: 'radio', label: 'Show Empty State', options: RADIO_YES_NO },
  emptyTitle: { type: 'text', label: 'Empty State Title' },
  emptyMessage: { type: 'text', label: 'Empty State Message' },
  showAddToCart: { type: 'radio', label: 'Show Add to Cart Button', options: RADIO_YES_NO },
  addToCartLabel: { type: 'text', label: 'Add to Cart Label' },
  removeLabel: { type: 'text', label: 'Remove Label' },
  backgroundColor: { type: 'text', label: 'Background Color' },
  cardBackgroundColor: { type: 'text', label: 'Card Background Color' },
  textColor: { type: 'text', label: 'Text Color' },
  borderRadius: { type: 'text', label: 'Border Radius' },
  padding: { type: 'text', label: 'Padding' },
  shadow: { type: 'radio', label: 'Card Shadow', options: RADIO_YES_NO },
} as Record<string, Field>;

const Heart = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
);
const Trash = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
);
const Cart = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);
const Package = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
);

export interface WishlistItem { id: string; variantId: string; productTitle: string; variantTitle?: string; thumbnail?: string; productHandle?: string; }

export interface WishlistItemsProps {
  title: string;
  showTitle: boolean;
  showEmptyMessage: boolean;
  emptyTitle: string;
  emptyMessage: string;
  showAddToCart: boolean;
  addToCartLabel: string;
  removeLabel: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  textColor: string;
  borderRadius: string;
  padding: string;
  shadow: boolean;
}

export interface WishlistItemsWithData extends WishlistItemsProps {
  items?: WishlistItem[];
  onAddToCart?: (variantId: string) => void;
  onRemove?: (id: string) => void;
}

const MOCK: WishlistItem[] = [
  { id: 'wli_01', variantId: 'var_01', productTitle: 'Classic Cotton T-Shirt', variantTitle: 'Navy / Large', thumbnail: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=T-Shirt', productHandle: 'classic-cotton-t-shirt' },
  { id: 'wli_02', variantId: 'var_02', productTitle: 'Running Sneakers Pro', variantTitle: 'White / 42', thumbnail: 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Shoes', productHandle: 'running-sneakers-pro' },
];

export const WishlistItems: ComponentConfig<WishlistItemsWithData> = {
  label: 'Wishlist Items',
  fields: wishlistItemsFields as ComponentConfig<WishlistItemsWithData>['fields'],
  defaultProps: { title: 'My Wishlist', showTitle: true, showEmptyMessage: true, emptyTitle: 'Your wishlist is empty', emptyMessage: 'Save items you love and come back to them anytime.', showAddToCart: true, addToCartLabel: 'Add to Cart', removeLabel: 'Remove', backgroundColor: '#ffffff', cardBackgroundColor: '#ffffff', textColor: '#111827', borderRadius: '8px', padding: '0px', shadow: false },
  render: (raw: any) => {
    const { title, showTitle, showEmptyMessage, emptyTitle, emptyMessage, showAddToCart, addToCartLabel, removeLabel, backgroundColor, cardBackgroundColor, textColor, borderRadius, padding, shadow } = raw as WishlistItemsWithData;
    const items: WishlistItem[] = (raw as any).items ?? MOCK;
    const onAddToCart = (variantId: string) => (raw as any).onAddToCart ? (raw as any).onAddToCart(variantId) : (() => {});
    const onRemove = (id: string) => (raw as any).onRemove ? (raw as any).onRemove(id) : (() => {});

    return (
      <div style={{ backgroundColor, color: textColor, padding, borderRadius }} className="w-full">
        {showTitle && (
          <h2 className="text-2xl font-semibold mb-6">{title} <span className="ml-2 text-base font-normal opacity-60">({items.length} items)</span></h2>
        )}

        {items.length === 0 && showEmptyMessage ? (
          <div className="py-16 flex flex-col items-center justify-center text-center gap-4">
            <Heart />
            <h3 className="text-xl font-semibold opacity-70">{emptyTitle}</h3>
            <p className="opacity-50 max-w-md">{emptyMessage}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} style={{ backgroundColor: cardBackgroundColor, borderRadius, boxShadow: shadow ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }} className="flex gap-4 p-4 border border-gray-200">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100" style={{ borderRadius }}>
                  {item.thumbnail ? <img src={item.thumbnail} alt={item.productTitle} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><Package /></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium line-clamp-2">{item.productTitle}</p>
                  {item.variantTitle && <p className="text-sm opacity-60 mt-0.5">{item.variantTitle}</p>}
                  <div className="flex items-center gap-2 mt-3">
                    {showAddToCart && (
                      <button type="button" onClick={() => onAddToCart(item.variantId)} className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-gray-900 text-white rounded-md hover:opacity-90">
                        <Cart /> <span>{addToCartLabel}</span>
                      </button>
                    )}
                    <button type="button" onClick={() => onRemove(item.id)} className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50">
                      <Trash /> <span>{removeLabel}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export default WishlistItems;
