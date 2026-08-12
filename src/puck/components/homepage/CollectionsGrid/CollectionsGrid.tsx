import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { collectionsGridFields } from './collectionsgrid.fields';
import type { CollectionsGridProps, SharedCollection } from './collectionsgrid.types';

const ASPECT: Record<string, string> = {
  square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-[16/9]',
};
const RADIUS: Record<string, string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl',
};
const HOVER: Record<string, string> = {
  none: '', scale: 'hover:scale-105', shadow: 'hover:shadow-xl', lift: 'hover:-translate-y-2',
};
const CARD_STYLE: Record<string, string> = {
  minimal: 'bg-transparent',
  bordered: 'bg-white border-2 border-gray-200',
  shadow: 'bg-white shadow-lg',
  overlay: 'relative overflow-hidden',
};

function applyManualFilter(all: SharedCollection[], ids: string[]) {
  if (!ids?.length) return all;
  const set = new Set(ids.map(String));
  return all.filter((c) => set.has(c.id));
}

export const CollectionsGrid: ComponentConfig<CollectionsGridProps> = {
  label: 'Collections Grid',
  fields: collectionsGridFields as ComponentConfig<CollectionsGridProps>['fields'],
  defaultProps: {
    sectionTitle: 'Shop by Collection',
    sectionSubtitle: 'Browse our curated collections',
    showTitle: true,
    columns: 4,
    columnsTablet: 3,
    columnsMobile: 2,
    gap: 24,
    showCollectionImage: true,
    showCollectionTitle: true,
    showProductCount: true,
    showDescription: false,
    imageAspectRatio: 'square',
    backgroundColor: '#f9fafb',
    textColor: '#000000',
    cardStyle: 'shadow',
    borderRadius: 'lg',
    hoverEffect: 'scale',
    collectionSource: 'all',
    selectedCollectionIds: [],
    loading: false,
    error: '',
  },
  render: ({
    sectionTitle, sectionSubtitle, showTitle,
    columns, columnsTablet, columnsMobile, gap,
    showCollectionImage, showCollectionTitle, showProductCount, showDescription, imageAspectRatio,
    backgroundColor, textColor, cardStyle, borderRadius, hoverEffect,
    collectionSource, selectedCollectionIds,
    collections, loading, error,
  }) => {
    const isLoading = !!loading && (!collections || collections.length === 0);
    const errMsg = error || '';
    const empty = !isLoading && !errMsg && (!collections || collections.length === 0);

    let visible: SharedCollection[] = collections || [];
    if (collectionSource === 'manual') {
      visible = applyManualFilter(visible, selectedCollectionIds.map((x: any) => typeof x === 'string' ? x : x?.id).filter(Boolean));
    }

    const sectionStyle: React.CSSProperties = { backgroundColor };

    const mobileCols = columnsMobile || 2;
    const tabletCols = columnsTablet || 3;
    const desktopCols = columns || 4;
    const gridId = `collgrid-${desktopCols}-${tabletCols}-${mobileCols}`;
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

    const Header = showTitle ? (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2" style={{ color: textColor }}>{sectionTitle}</h2>
        {sectionSubtitle && <p className="text-lg opacity-80" style={{ color: textColor }}>{sectionSubtitle}</p>}
      </div>
    ) : null;

    if (errMsg) {
      return (
        <div className="collections-grid-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="text-center text-red-500"><p>Error: {errMsg}</p></div>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="collections-grid-section py-16" style={sectionStyle}>
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
        <div className="collections-grid-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="text-center" style={{ color: textColor }}><p>No collections found.</p></div>
          </div>
        </div>
      );
    }

    return (
      <div className="collections-grid-section py-16" style={sectionStyle}>
        {responsiveStyle}
        <div className="container mx-auto px-4">
          {Header}
          <div className={`grid ${gridId}`} style={gridStyle}>
            {visible.map((collection) => {
              const placeholder = `data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f3f4f6"/><text x="50%" y="50%" font-size="48" fill="#d1d5db" text-anchor="middle" dy=".35em" font-family="sans-serif">${(collection.title || '?')[0]}</text></svg>`
              )}`;
              const imageSrc = collection.image || placeholder;
              return (
                <a
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className={`collection-card ${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} ${HOVER[hoverEffect]} transition-all duration-300 overflow-hidden group cursor-pointer`}
                >
                  {showCollectionImage && (
                    <div className={`${ASPECT[imageAspectRatio]} overflow-hidden`}>
                      <img src={imageSrc} alt={collection.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }} />
                      {cardStyle === 'overlay' && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />}
                    </div>
                  )}
                  <div className={`p-4 ${cardStyle === 'overlay' ? 'absolute bottom-0 left-0 right-0 text-white' : ''}`}>
                    {showCollectionTitle && (
                      <h3 className="text-xl font-bold mb-1" style={{ color: cardStyle === 'overlay' ? '#ffffff' : textColor }}>
                        {collection.title}
                      </h3>
                    )}
                    {showProductCount && (
                      <p className="text-sm opacity-80" style={{ color: cardStyle === 'overlay' ? '#ffffff' : textColor }}>
                        {collection.productCount ?? 0} products
                      </p>
                    )}
                    {showDescription && collection.description && (
                      <p className="text-sm opacity-70 mt-1 line-clamp-2" style={{ color: cardStyle === 'overlay' ? '#ffffff' : textColor }}>
                        {collection.description}
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

export default CollectionsGrid;
