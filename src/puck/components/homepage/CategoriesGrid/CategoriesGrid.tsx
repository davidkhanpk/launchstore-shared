import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CategoriesGridProps, SharedCategory } from './categoriesgrid.types';
import {
  createAccordionFields,
} from '../../../design-system';

// ── Flat field definitions (referenced by key inside the accordion) ─────────

const categoriesGridFields = {
  sectionTitle: { type: 'text', label: 'Section Title' },
  sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
  showTitle: { type: 'radio', label: 'Show Section Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  columns: { type: 'number', label: 'Columns (Desktop)', min: 2, max: 6 },
  columnsTablet: { type: 'number', label: 'Columns (Tablet)', min: 2, max: 4 },
  columnsMobile: { type: 'number', label: 'Columns (Mobile)', min: 1, max: 2 },
  gap: { type: 'number', label: 'Gap Between Items (px)', min: 0, max: 64 },
  showCategoryImage: { type: 'radio', label: 'Show Category Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showCategoryName: { type: 'radio', label: 'Show Category Name', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showProductCount: { type: 'radio', label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  imageAspectRatio: {
    type: 'select', label: 'Image Aspect Ratio',
    options: [
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
      { label: 'Wide (16:9)', value: 'wide' },
    ],
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  cardStyle: {
    type: 'select', label: 'Card Style',
    options: [
      { label: 'Minimal', value: 'minimal' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Shadow', value: 'shadow' },
      { label: 'Image Overlay', value: 'overlay' },
    ],
  },
  borderRadius: {
    type: 'select', label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  hoverEffect: {
    type: 'select', label: 'Hover Effect',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Scale Up', value: 'scale' },
      { label: 'Shadow', value: 'shadow' },
      { label: 'Lift', value: 'lift' },
    ],
  },
  categorySource: {
    type: 'select', label: 'Category Source',
    options: [
      { label: 'All Categories', value: 'all' },
      { label: 'Featured Categories', value: 'featured' },
      { label: 'Manual Selection', value: 'manual' },
    ],
  },
  // array-of-strings selector; consumers may wrap with a richer picker if desired
  selectedCategoryIds: {
    type: 'array',
    label: 'Manual Category IDs (when Source = Manual)',
    arrayFields: {
      id: { type: 'text', label: 'Category ID' },
    },
    defaultItemProps: { id: '' },
  } as any,
} as Record<string, any>;

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Section',
      defaultOpen: true,
      fieldKeys: ['sectionTitle', 'sectionSubtitle', 'showTitle'],
    },
    {
      label: 'Grid',
      fieldKeys: ['columns', 'columnsTablet', 'columnsMobile', 'gap'],
    },
    {
      label: 'Category Display',
      fieldKeys: ['showCategoryImage', 'showCategoryName', 'showProductCount', 'imageAspectRatio'],
    },
    {
      label: 'Styling',
      fieldKeys: ['backgroundColor', 'textColor', 'cardStyle', 'borderRadius', 'hoverEffect'],
    },
    {
      label: 'Category Source',
      fieldKeys: ['categorySource', 'selectedCategoryIds'],
    },
  ],
  allFields: categoriesGridFields,
});

const ASPECT: Record<CategoriesGridProps['imageAspectRatio'], string> = {
  square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-[16/9]',
};
const RADIUS: Record<CategoriesGridProps['borderRadius'], string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl',
};
const HOVER: Record<CategoriesGridProps['hoverEffect'], string> = {
  none: '', scale: 'hover:scale-105', shadow: 'hover:shadow-xl', lift: 'hover:-translate-y-2',
};
const CARD_STYLE: Record<CategoriesGridProps['cardStyle'], string> = {
  minimal: 'bg-transparent',
  bordered: 'bg-white border-2 border-gray-200',
  shadow: 'bg-white shadow-lg',
  overlay: 'relative overflow-hidden',
};

function applyManualFilter(all: SharedCategory[], ids: string[]) {
  if (!ids?.length) return all;
  const set = new Set(ids.map(String));
  return all.filter((c) => set.has(c.id));
}

export const CategoriesGrid: ComponentConfig<CategoriesGridProps> = {
  label: 'Categories Grid',
  fields: accordionFields as any,
  defaultProps: {
    sectionTitle: 'Shop by Category',
    sectionSubtitle: 'Browse our popular categories',
    showTitle: true,
    columns: 4,
    columnsTablet: 3,
    columnsMobile: 2,
    gap: 24,
    showCategoryImage: true,
    showCategoryName: true,
    showProductCount: true,
    imageAspectRatio: 'square',
    backgroundColor: '#f9fafb',
    textColor: '#000000',
    cardStyle: 'shadow',
    borderRadius: 'lg',
    hoverEffect: 'scale',
    categorySource: 'all',
    selectedCategoryIds: [],
    loading: false,
    error: '',
  },
  render: ({
    sectionTitle, sectionSubtitle, showTitle,
    columns, columnsTablet, columnsMobile, gap,
    showCategoryImage, showCategoryName, showProductCount, imageAspectRatio,
    backgroundColor, textColor, cardStyle, borderRadius, hoverEffect,
    categorySource, selectedCategoryIds,
    categories, loading, error,
  }) => {
    const isLoading = !!loading && (!categories || categories.length === 0);
    const errMsg = error || '';
    const empty = !isLoading && !errMsg && (!categories || categories.length === 0);

    // Apply source filter (manual only — 'all' and 'featured' are consumer concerns)
    let visible: SharedCategory[] = categories || [];
    if (categorySource === 'manual') {
      visible = applyManualFilter(visible, selectedCategoryIds.map((x: any) => typeof x === 'string' ? x : x?.id).filter(Boolean));
    }

    const sectionStyle: React.CSSProperties = { backgroundColor: resolveColor(backgroundColor) || backgroundColor };

    // Section header JSX (used in 3 of 4 branches)
    const Header = showTitle ? (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2" style={{ color: textColor }}>{sectionTitle}</h2>
        {sectionSubtitle && <p className="text-lg opacity-80" style={{ color: textColor }}>{sectionSubtitle}</p>}
      </div>
    ) : null;

    // Responsive grid: uses columnsMobile on phones, columnsTablet on tablets,
    // columns on desktop. Implemented via inline CSS media queries so it
    // works regardless of the consumer's Tailwind breakpoint config.
    const mobileCols = columnsMobile || 2;
    const tabletCols = columnsTablet || 3;
    const desktopCols = columns || 4;
    const gridId = `catgrid-${desktopCols}-${tabletCols}-${mobileCols}`;
    const gridStyle: React.CSSProperties = {
      display: 'grid',
      gridTemplateColumns: `repeat(${mobileCols}, minmax(0, 1fr))`,
      gap: `${gap}px`,
    };
    const responsiveStyle = (
      <style>{`
        @media (min-width: 768px) { .${gridId} { grid-template-columns: repeat(${tabletCols}, minmax(0, 1fr)) !important; } }
        @media (min-width: 1024px) { .${gridId} { grid-template-columns: repeat(${desktopCols}, minmax(0, 1fr)) !important; } }
      `}</style>
    );

    if (errMsg) {
      return (
        <div className="categories-grid-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="text-center text-red-500"><p>Error: {errMsg}</p></div>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="categories-grid-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className={`grid ${gridId}`} style={gridStyle}>
              {[...Array(columns * 2)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (empty) {
      return (
        <div className="categories-grid-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="text-center" style={{ color: textColor }}><p>No categories found.</p></div>
          </div>
        </div>
      );
    }

    return (
      <div className="categories-grid-section py-16" style={sectionStyle}>
        {responsiveStyle}
        <div className="container mx-auto px-4">
          {Header}
          <div className={`grid ${gridId}`} style={gridStyle}>
            {visible.map((category) => {
              // Inline SVG placeholder — no external dependency, never breaks.
              // Shows the category initial on a gray background.
              const placeholder = `data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f3f4f6"/><text x="50%" y="50%" font-size="48" fill="#d1d5db" text-anchor="middle" dy=".35em" font-family="sans-serif">${(category.name || '?')[0]}</text></svg>`
              )}`;
              const imageSrc = category.image || placeholder;
              return (
                <a
                  key={category.id}
                  href={`/categories/${category.handle}`}
                  className={`category-card ${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} ${HOVER[hoverEffect]} transition-all duration-300 overflow-hidden group cursor-pointer`}
                >
                  {showCategoryImage && (
                    <div className={`${ASPECT[imageAspectRatio]} overflow-hidden bg-gray-100`}>
                      <img
                        src={imageSrc}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }}
                      />
                      {cardStyle === 'overlay' && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />}
                    </div>
                  )}
                  <div className={`p-4 ${cardStyle === 'overlay' ? 'absolute bottom-0 left-0 right-0 text-white' : ''}`}>
                    {showCategoryName && (
                      <h3 className="text-xl font-bold mb-1" style={{ color: cardStyle === 'overlay' ? '#ffffff' : textColor }}>
                        {category.name}
                      </h3>
                    )}
                    {showProductCount && (
                      <p className="text-sm opacity-80" style={{ color: cardStyle === 'overlay' ? '#ffffff' : textColor }}>
                        {category.productCount ?? 0} products
                      </p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

export default CategoriesGrid;
