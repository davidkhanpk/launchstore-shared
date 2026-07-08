import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const productFiltersFields = {
  layout: { type: 'select', label: 'Filter Layout', options: [{ label: 'Sidebar', value: 'sidebar' }, { label: 'Top Bar', value: 'top' }, { label: 'Drawer (Mobile)', value: 'drawer' }] },
  showPriceFilter: { type: 'radio', label: 'Show Price Filter', options: RADIO_YES_NO },
  showCategoryFilter: { type: 'radio', label: 'Show Category Filter', options: RADIO_YES_NO },
  showBrandFilter: { type: 'radio', label: 'Show Brand Filter', options: RADIO_YES_NO },
  showColorFilter: { type: 'radio', label: 'Show Color Filter', options: RADIO_YES_NO },
  showSizeFilter: { type: 'radio', label: 'Show Size Filter', options: RADIO_YES_NO },
  showRatingFilter: { type: 'radio', label: 'Show Rating Filter', options: RADIO_YES_NO },
  defaultExpanded: { type: 'radio', label: 'Default Expanded', options: RADIO_YES_NO },
} as Record<string, Field>;

const Chevron = ({ size = 16 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>);
const Sliders = ({ size = 16 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>);
const Star = ({ filled = true, size = 14 }: { filled?: boolean; size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);

export interface ProductFiltersProps {
  showPriceFilter: boolean;
  showCategoryFilter: boolean;
  showBrandFilter: boolean;
  showColorFilter: boolean;
  showSizeFilter: boolean;
  showRatingFilter: boolean;
  layout: 'sidebar' | 'top' | 'drawer';
  defaultExpanded: boolean;
}

export interface ProductFiltersWithData extends ProductFiltersProps {
  categories?: Array<{ id: string; label: string; count?: number }>;
  brands?: Array<{ id: string; label: string; count?: number }>;
  colors?: Array<{ id: string; label: string; hex: string }>;
  sizes?: Array<{ id: string; label: string }>;
  priceMin?: number;
  priceMax?: number;
  selected?: Record<string, string[]>;
  onChange?: (group: string, value: string) => void;
}

const Section: React.FC<{ title: string; defaultOpen: boolean; children: React.ReactNode }> = ({ title, defaultOpen, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-3">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-sm font-medium text-gray-900">
        {title} <Chevron />
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
};

export const ProductFilters: ComponentConfig<ProductFiltersWithData> = {
  label: 'Product Filters',
  fields: productFiltersFields as ComponentConfig<ProductFiltersWithData>['fields'],
  defaultProps: { showPriceFilter: true, showCategoryFilter: true, showBrandFilter: true, showColorFilter: true, showSizeFilter: true, showRatingFilter: true, layout: 'sidebar', defaultExpanded: true },
  render: (raw: any) => {
    const { showPriceFilter, showCategoryFilter, showBrandFilter, showColorFilter, showSizeFilter, showRatingFilter, layout = 'sidebar', defaultExpanded } = raw as ProductFiltersWithData;
    const categories = (raw as any).categories ?? [{ id: 'c1', label: 'Tops', count: 12 }, { id: 'c2', label: 'Bottoms', count: 8 }];
    const brands = (raw as any).brands ?? [{ id: 'b1', label: 'Brand A', count: 10 }];
    const colors = (raw as any).colors ?? [{ id: 'red', label: 'Red', hex: '#ef4444' }, { id: 'blue', label: 'Blue', hex: '#3b82f6' }];
    const sizes = (raw as any).sizes ?? [{ id: 's', label: 'S' }, { id: 'm', label: 'M' }, { id: 'l', label: 'L' }];
    const priceMin = (raw as any).priceMin ?? 0;
    const priceMax = (raw as any).priceMax ?? 500;
    const selected: Record<string, string[]> = (raw as any).selected ?? {};
    const onChange = (group: string, value: string) => (raw as any).onChange?.(group, value);

    const isSelected = (group: string, value: string) => selected[group]?.includes(value) ?? false;

    const content = (
      <>
        {showCategoryFilter && (
          <Section title="Category" defaultOpen={defaultExpanded}>
            {categories.map((c: any) => (
              <label key={c.id} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={isSelected('category', c.id)} onChange={() => onChange('category', c.id)} className="h-4 w-4" />
                <span className="flex-1">{c.label}</span>{c.count != null && <span className="text-gray-500">({c.count})</span>}
              </label>
            ))}
          </Section>
        )}
        {showPriceFilter && (
          <Section title="Price" defaultOpen={defaultExpanded}>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">${priceMin}</span>
              <input type="range" min={priceMin} max={priceMax} defaultValue={priceMax} className="flex-1" />
              <span className="text-sm text-gray-600">${priceMax}</span>
            </div>
          </Section>
        )}
        {showBrandFilter && (
          <Section title="Brand" defaultOpen={defaultExpanded}>
            {brands.map((b: any) => (
              <label key={b.id} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={isSelected('brand', b.id)} onChange={() => onChange('brand', b.id)} className="h-4 w-4" />
                <span className="flex-1">{b.label}</span>{b.count != null && <span className="text-gray-500">({b.count})</span>}
              </label>
            ))}
          </Section>
        )}
        {showColorFilter && (
          <Section title="Color" defaultOpen={defaultExpanded}>
            <div className="flex flex-wrap gap-2">
              {colors.map((c: any) => (
                <button key={c.id} onClick={() => onChange('color', c.id)} title={c.label} className={`w-8 h-8 rounded-full border-2 ${isSelected('color', c.id) ? 'border-black' : 'border-gray-200'}`} style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </Section>
        )}
        {showSizeFilter && (
          <Section title="Size" defaultOpen={defaultExpanded}>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s: any) => (
                <button key={s.id} onClick={() => onChange('size', s.id)} className={`px-3 py-1 border rounded text-sm ${isSelected('size', s.id) ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-gray-50'}`}>{s.label}</button>
              ))}
            </div>
          </Section>
        )}
        {showRatingFilter && (
          <Section title="Customer Rating" defaultOpen={defaultExpanded}>
            {[4, 3, 2, 1].map((stars) => (
              <label key={stars} className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="rating" value={stars} className="h-4 w-4" onChange={() => onChange('rating', String(stars))} />
                <span className="flex">{[1, 2, 3, 4, 5].map((s) => <Star key={s} filled={s <= stars} />)}</span>
                <span className="text-gray-500">& up</span>
              </label>
            ))}
          </Section>
        )}
      </>
    );

    if (layout === 'top') {
      return <div className="flex items-center gap-2 mb-6 flex-wrap"><Sliders /> <span className="text-sm font-medium mr-2">Filters:</span> {content}</div>;
    }
    if (layout === 'drawer') {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 mb-4"><Sliders /> Filters</button>
          {open && (
            <div className="fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
              <aside className="relative ml-auto w-80 max-w-full h-full bg-white p-6 overflow-y-auto">{content}</aside>
            </div>
          )}
        </>
      );
    }
    return <aside className="w-64 p-4 bg-white border border-gray-200 rounded-lg">{content}</aside>;
  },
};

export default ProductFilters;
