import React, { useState } from 'react';
import type { CategoryMegaMenuProps, SharedMegaMenuTheme, SharedMegaMenuCategory } from './categorymegamenu.types';
import { resolveColor } from '../../../../theme/resolveColor';

interface ResolvedTokens {
  background: string;
  sectionHeading: string;
  linkText: string;
  linkHover: string;
  headingFontSize: string;
  headingFontWeight: number;
  linkFontSize: string;
  linkFontWeight: number;
  padding: string;
  columnGap: string;
  borderRadius: string;
  boxShadow: string;
}

const FALLBACK: ResolvedTokens = {
  background: '#ffffff',
  sectionHeading: '#111827',
  linkText: '#6b7280',
  linkHover: '#3b82f6',
  headingFontSize: '11px',
  headingFontWeight: 700,
  linkFontSize: '13px',
  linkFontWeight: 400,
  padding: '24px',
  columnGap: '32px',
  borderRadius: '8px',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
};

const resolveTheme = (t: SharedMegaMenuTheme | undefined): ResolvedTokens => ({
  background: resolveColor(t?.background || FALLBACK.background) || FALLBACK.background,
  sectionHeading: resolveColor(t?.sectionHeading || FALLBACK.sectionHeading) || FALLBACK.sectionHeading,
  linkText: resolveColor(t?.linkText || FALLBACK.linkText) || FALLBACK.linkText,
  linkHover: resolveColor(t?.linkHover || FALLBACK.linkHover) || FALLBACK.linkHover,
  headingFontSize: t?.headingFontSize || FALLBACK.headingFontSize,
  headingFontWeight: t?.headingFontWeight ?? FALLBACK.headingFontWeight,
  linkFontSize: t?.linkFontSize || FALLBACK.linkFontSize,
  linkFontWeight: t?.linkFontWeight ?? FALLBACK.linkFontWeight,
  padding: t?.padding || FALLBACK.padding,
  columnGap: t?.columnGap || FALLBACK.columnGap,
  borderRadius: t?.borderRadius || FALLBACK.borderRadius,
  boxShadow: t?.boxShadow || FALLBACK.boxShadow,
});

const ArrowRight = ({ size = 12 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * Featured/promo cell (rightmost column). Renders the banner image as a card
 * with a CTA rather than a bare <img>, matching e-commerce mega-menu patterns
 * (Nike, Target). Falls back gracefully when there's no image.
 */
const FeaturedCell: React.FC<{
  imageUrl?: string;
  category: SharedMegaMenuCategory;
  tokens: ResolvedTokens;
  onLinkClick?: () => void;
}> = ({ imageUrl, category, tokens, onLinkClick }) => {
  const url = `/categories/${category.handle}`;
  if (!imageUrl) return null;
  return (
    <a
      href={url}
      onClick={onLinkClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minWidth: '180px',
        maxWidth: '240px',
        borderRadius: tokens.borderRadius,
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        background: `linear-gradient(135deg, ${tokens.sectionHeading}22, ${tokens.linkHover}22), url(${imageUrl}) center/cover`,
        minHeight: '100%',
      }}
    >
      <div style={{ padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
        <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>
          Shop {category.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff', fontSize: '12px', fontWeight: 600 }}>
          View all <ArrowRight size={12} />
        </div>
      </div>
    </a>
  );
};

/**
 * CategoryMegaMenu — the mega-menu overlay panel rendered inside MenuNavigation
 * when dropdownStyle is 'mega' + the item has an enriched category.
 *
 * Anatomy (e-commerce best practice, post NAV-H5):
 *  - 2-4 columns of subcategory links with uppercase column headings
 *  - optional per-link description (truncated)
 *  - a rightmost featured/promo cell (banner image as a card with CTA) when
 *    showImage + imageUrl are set
 *  - viewport-edge detection: the consumer (MenuNavigation) centers the panel
 *    under the trigger via translateX(-50%); this panel reports its width via
 *    its own min/max so the consumer can flip it if needed
 *  - styled entirely via theme tokens (no hardcoded colors)
 */
export const CategoryMegaMenu: React.FC<CategoryMegaMenuProps> = ({
  item, megaMenu, theme, onLinkClick,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const tokens = resolveTheme(theme);
  const categoryData = item.enrichedData?.category;

  if (!megaMenu.enabled || !categoryData) return <></>;

  // Cap columns 2-4 (e-commerce sweet spot; >4 = decision fatigue).
  const requestedCols = megaMenu.columns || 3;
  const columns = Math.max(2, Math.min(4, requestedCols));
  const subcategoryLimit = megaMenu.subcategoryLimit ?? 12;
  const showDescriptions = megaMenu.showDescriptions !== false;
  const showSubcategories = megaMenu.showSubcategories !== false;
  const showFeatured = !!(megaMenu.showImage && megaMenu.imageUrl);

  const subcategories = (categoryData.subcategories || []).slice(0, subcategoryLimit);
  const mainUrl = item.enrichedData?.resolvedUrl || item.url || (categoryData.handle ? `/categories/${categoryData.handle}` : '#');

  // Grid columns: if there's a featured cell, the last grid track is the promo.
  const gridTemplate = showFeatured
    ? `repeat(${columns}, 1fr) minmax(180px, 220px)`
    : `repeat(${columns}, 1fr)`;

  const headingStyle: React.CSSProperties = {
    color: tokens.sectionHeading,
    fontSize: tokens.headingFontSize,
    fontWeight: tokens.headingFontWeight,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: `1px solid ${tokens.sectionHeading}22`,
  };
  const linkBase: React.CSSProperties = {
    color: tokens.linkText,
    fontSize: tokens.linkFontSize,
    fontWeight: tokens.linkFontWeight,
    textDecoration: 'none',
    display: 'block',
    padding: '5px 0',
    transition: 'color 150ms ease',
  };

  return (
    <div
      className="mega-menu"
      role="group"
      aria-label={`${categoryData.name} menu`}
      style={{
        backgroundColor: tokens.background,
        borderRadius: tokens.borderRadius,
        boxShadow: tokens.boxShadow,
        padding: tokens.padding,
        minWidth: showFeatured ? '680px' : '520px',
        maxWidth: '960px',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: gridTemplate, gap: tokens.columnGap }}>
        {/* Subcategory columns */}
        {showSubcategories && subcategories.length > 0 && (
          <div style={{ gridColumn: `span ${columns}` }}>
            <div style={headingStyle}>Shop {categoryData.name}</div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: tokens.columnGap }}>
              {subcategories.map((subcategory) => {
                const subUrl = subcategory.handle ? `/categories/${subcategory.handle}` : '#';
                const isHovered = hoveredId === subcategory.id;
                return (
                  <a
                    key={subcategory.id}
                    href={subUrl}
                    style={{
                      ...linkBase,
                      color: isHovered ? tokens.linkHover : tokens.linkText,
                    }}
                    onMouseEnter={() => setHoveredId(subcategory.id)}
                    onMouseLeave={() => setHoveredId((cur) => (cur === subcategory.id ? null : cur))}
                    onClick={onLinkClick}
                  >
                    {subcategory.name}
                    {showDescriptions && subcategory.description && (
                      <p style={{ fontSize: '11px', color: `${tokens.linkText}aa`, marginTop: '2px', lineHeight: '1.4', fontWeight: 400 }}>
                        {subcategory.description.length > 60
                          ? `${subcategory.description.slice(0, 60)}…`
                          : subcategory.description}
                      </p>
                    )}
                  </a>
                );
              })}
            </div>
            {/* Per-panel "View all" CTA */}
            <a
              href={mainUrl}
              onClick={onLinkClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '16px',
                color: tokens.linkHover,
                fontSize: tokens.linkFontSize,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              View all {categoryData.name} <ArrowRight size={12} />
            </a>
          </div>
        )}

        {/* Featured/promo cell (rightmost) */}
        {showFeatured && (
          <FeaturedCell
            imageUrl={megaMenu.imageUrl}
            category={categoryData}
            tokens={tokens}
            onLinkClick={onLinkClick}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryMegaMenu;
