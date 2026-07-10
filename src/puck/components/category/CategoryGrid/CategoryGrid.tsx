import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface CategoryGridProps {
  columns: number;
  gap: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showImages: boolean;
  showCounts: boolean;
  showDescriptions: boolean;
  cardStyle: 'standard' | 'luxury' | 'minimal';
  /** Subcategories (consumer-provided at render time on the storefront). */
  categories?: Array<{ id: string; name: string; image?: string; count?: number; description?: string }>;
}

const GAP: Record<CategoryGridProps['gap'], string> = { sm: 'gap-2', md: 'gap-4', lg: 'gap-6', xl: 'gap-8', '2xl': 'gap-12' };
const COLS: Record<number, string> = { 2: 'grid-cols-2', 3: 'grid-cols-2 md:grid-cols-3', 4: 'grid-cols-2 md:grid-cols-4', 5: 'grid-cols-2 md:grid-cols-5', 6: 'grid-cols-3 md:grid-cols-6' };
const CARD: Record<CategoryGridProps['cardStyle'], string> = {
  standard: 'bg-white shadow-sm rounded-lg overflow-hidden',
  luxury: 'bg-white rounded-none overflow-hidden',
  minimal: 'bg-transparent',
};

const PLACEHOLDER = Array.from({ length: 8 }, (_, i) => ({
  id: `cat-${i + 1}`, name: `Subcategory ${i + 1}`, image: '', count: (i + 1) * 6,
  description: 'Explore this collection',
}));

export const categoryGridFields: ComponentConfig<CategoryGridProps>['fields'] = {
  columns: {
    type: 'select', label: 'Columns',
    options: [{ label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }],
  },
  gap: {
    type: 'select', label: 'Gap',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }, { label: '2XL', value: '2xl' }],
  },
  showImages: { type: 'radio', label: 'Show Images', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showCounts: { type: 'radio', label: 'Show Counts', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showDescriptions: { type: 'radio', label: 'Show Descriptions', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  cardStyle: {
    type: 'select', label: 'Card Style',
    options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }, { label: 'Minimal', value: 'minimal' }],
  },
};

export const CategoryGrid: ComponentConfig<CategoryGridProps> = {
  label: 'Category Grid',
  fields: categoryGridFields,
  defaultProps: {
    columns: 4,
    gap: 'lg',
    showImages: true,
    showCounts: true,
    showDescriptions: false,
    cardStyle: 'standard',
  },
  render: ({ columns, gap, showImages, showCounts, showDescriptions, cardStyle, categories }) => {
    const items = categories && categories.length > 0 ? categories : PLACEHOLDER;
    return (
      <div className={`grid ${COLS[columns] || COLS[4]} ${GAP[gap] || 'gap-6'}`}>
        {items.map((cat) => (
          <a key={cat.id} href="#" className={`no-underline text-inherit ${CARD[cardStyle] || CARD.standard}`}>
            {showImages && (
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                {cat.image ? <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" /> : 'Image'}
              </div>
            )}
            <div className="p-3 text-center">
              <div className="font-medium text-gray-900">{cat.name}</div>
              {showCounts && typeof cat.count === 'number' && <div className="text-xs text-gray-500 mt-1">{cat.count} products</div>}
              {showDescriptions && cat.description && <div className="text-xs text-gray-500 mt-1">{cat.description}</div>}
            </div>
          </a>
        ))}
      </div>
    );
  },
};

export default CategoryGrid;
