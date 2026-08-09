import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { categoriesGridFields } from './categoriesgrid.fields';
import type { CategoriesGridProps, SharedCategory } from './categoriesgrid.types';

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
  fields: categoriesGridFields as ComponentConfig<CategoriesGridProps>['fields'],
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
    columns, gap,
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

    const sectionStyle: React.CSSProperties = { backgroundColor };

    // Section header JSX (used in 3 of 4 branches)
    const Header = showTitle ? (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2" style={{ color: textColor }}>{sectionTitle}</h2>
        {sectionSubtitle && <p className="text-lg opacity-80" style={{ color: textColor }}>{sectionSubtitle}</p>}
      </div>
    ) : null;

    const gridStyle: React.CSSProperties = {
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: `${gap}px`,
    };

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
            <div className="grid" style={gridStyle}>
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
        <div className="container mx-auto px-4">
          {Header}
          <div className="grid" style={gridStyle}>
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
