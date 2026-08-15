import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type {
  ProductCardProps, SharedProductCardProduct, RenderProductCard,
  ProductCardLayout,
} from './productcard.types';
import { resolveColor } from '../../../design-system';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  layout: {
    type: 'select' as const, label: 'Card Layout',
    options: [
      { label: 'Vertical', value: 'vertical' },
      { label: 'Horizontal', value: 'horizontal' },
      { label: 'Compact', value: 'compact' },
      { label: 'Spacious', value: 'spacious' },
    ],
  },
  enableSwiper: {
    type: 'radio' as const, label: 'Image Gallery Type',
    options: [
      { label: 'Single Image', value: false },
      { label: 'Image Carousel (Swiper)', value: true },
    ],
  },
  aspectRatio: {
    type: 'select' as const, label: 'Image Aspect Ratio',
    options: [
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (16:9)', value: 'landscape' },
    ],
  },
  borderRadius: {
    type: 'select' as const, label: 'Image Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Full', value: 'full' },
    ],
  },
  showShadow: { type: 'radio' as const, label: 'Image Shadow', options: RADIO_YES_NO },
  hoverEffect: {
    type: 'select' as const, label: 'Hover Effect',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Zoom Image', value: 'zoom' },
      { label: 'Second Image', value: 'second-image' },
    ],
  },
  imageFit: {
    type: 'select' as const, label: 'Image Fit',
    options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }],
  },

  showTitle: { type: 'radio' as const, label: 'Show Title', options: RADIO_YES_NO },
  titleSize: {
    type: 'select' as const, label: 'Title Size',
    options: [
      { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' },
      { label: 'Large', value: 'lg' }, { label: 'XLarge', value: 'xl' }, { label: '2XLarge', value: '2xl' },
    ],
  },
  titleWeight: {
    type: 'select' as const, label: 'Title Weight',
    options: [
      { label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' },
      { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' },
    ],
  },
  titleAlign: {
    type: 'select' as const, label: 'Title Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
  },

  showPrice: { type: 'radio' as const, label: 'Show Price', options: RADIO_YES_NO },
  priceSize: {
    type: 'select' as const, label: 'Price Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'XLarge', value: 'xl' }],
  },
  priceColor: { type: 'text' as const, label: 'Price Color (hex or theme token)' },
  showCompareAtPrice: { type: 'radio' as const, label: 'Show Compare At Price', options: RADIO_YES_NO },
  showSavingsBadge: { type: 'radio' as const, label: 'Show Savings Badge', options: RADIO_YES_NO },

  showBadges: { type: 'radio' as const, label: 'Enable Badges', options: RADIO_YES_NO },
  showSaleBadge: { type: 'radio' as const, label: 'Show Sale Badge', options: RADIO_YES_NO },
  showNewBadge: { type: 'radio' as const, label: 'Show New Badge', options: RADIO_YES_NO },
  showLowStockBadge: { type: 'radio' as const, label: 'Show Low Stock Badge', options: RADIO_YES_NO },
  badgePosition: {
    type: 'select' as const, label: 'Badge Position',
    options: [
      { label: 'Top Left', value: 'top-left' }, { label: 'Top Right', value: 'top-right' },
      { label: 'Bottom Left', value: 'bottom-left' }, { label: 'Bottom Right', value: 'bottom-right' },
    ],
  },

  showAddToCart: { type: 'radio' as const, label: 'Show Add to Cart', options: RADIO_YES_NO },
  buttonText: { type: 'text' as const, label: 'Button Text' },
  quickAddBehavior: {
    type: 'select' as const, label: 'Quick Add Behavior',
    options: [
      { label: 'Link to Product Page', value: 'link' },
      { label: 'Add to Cart', value: 'add' },
    ],
  },
  showVendor: { type: 'radio' as const, label: 'Show Vendor', options: RADIO_YES_NO },
  customBadgeText: { type: 'text' as const, label: 'Custom Badge Text (optional)' },
  buttonStyle: {
    type: 'select' as const, label: 'Button Style',
    options: [{ label: 'Filled', value: 'filled' }, { label: 'Outline', value: 'outline' }, { label: 'Ghost', value: 'ghost' }],
  },
  buttonSize: {
    type: 'select' as const, label: 'Button Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  showCartIcon: { type: 'radio' as const, label: 'Show Cart Icon', options: RADIO_YES_NO },

  cardRadius: {
    type: 'select' as const, label: 'Card Border Radius',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XLarge', value: 'xl' },
    ],
  },
  cardBorder: {
    type: 'select' as const, label: 'Card Border',
    options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  cardShadow: { type: 'radio' as const, label: 'Card Shadow', options: RADIO_YES_NO },
  cardBackground: { type: 'text' as const, label: 'Card Background (hex or theme token)' },
  accentColor: { type: 'text' as const, label: 'Accent Color (hex or theme token)' },
  fontFamily: { type: 'text' as const, label: 'Font Family' },

  productId: { type: 'text' as const, label: 'Product ID (optional)' },
};

const CartSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);

const ASPECT: Record<string, string> = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[16/9]' };
const IMG_RADIUS: Record<string, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full' };
const CARD_RADIUS: Record<string, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };
const CARD_BORDER: Record<string, string> = { none: 'border-0', sm: 'border', md: 'border-2', lg: 'border-4' };
const TITLE_SIZE: Record<string, string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' };
const PRICE_SIZE: Record<string, string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl' };
const TITLE_WEIGHT: Record<string, string> = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
const TITLE_ALIGN: Record<string, string> = { left: 'text-left', center: 'text-center', right: 'text-right' };
const BTN_SIZE: Record<string, string> = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg' };

/**
 * Default card renderer — used when no `renderProduct` is
 * injected. Simple image+title+price composition that
 * demonstrates the full feature set (badges, add-to-cart)
 * using only Tailwind classes. Targeted at:
 * - editor preview (Puck canvas)
 * - frontend (no Medusa SDK for real product lookup)
 * - any consumer that doesn't ship its own ProductPreview.
 */
const DefaultCard: React.FC<{ product: SharedProductCardProduct; props: ProductCardProps }> = ({ product, props }) => {
  const isSale = (product.variants?.[0] as any)?.calculated_price?.calculated_amount
    && (product.variants?.[0] as any)?.original_price?.original_amount
      && (product.variants?.[0] as any).calculated_price.calculated_amount
        < (product.variants?.[0] as any).original_price.original_amount;
  const isNew = product.created_at && (Date.now() - new Date(product.created_at).getTime() < 1000 * 60 * 60 * 24 * 30);
  const isLowStock = typeof product.inventory_quantity === 'number' && product.inventory_quantity < 10;
  const cap = (product.variants?.[0] as any)?.calculated_price?.calculated_amount;
  const op = (product.variants?.[0] as any)?.original_price?.original_amount;

  const badgePos: Record<string, string> = {
    'top-left': 'top-2 left-2', 'top-right': 'top-2 right-2',
    'bottom-left': 'bottom-2 left-2', 'bottom-right': 'bottom-2 right-2',
  };

  return (
    <div className={`puck-product-card-wrapper overflow-hidden ${CARD_RADIUS[props.cardRadius]} ${CARD_BORDER[props.cardBorder]} ${props.cardShadow ? 'shadow-md' : ''}`} style={{ backgroundColor: props.cardBackground, fontFamily: props.fontFamily, color: props.accentColor }}>
      <div className="relative group/pc">
        {(() => {
          const primary = (product.thumbnail || product.images?.[0]?.url) as string | undefined;
          const secondary = (product.images?.[1]?.url || (!product.thumbnail ? product.images?.[0]?.url : undefined)) as string | undefined;
          const fit = props.imageFit === 'contain' ? 'object-contain' : 'object-cover';
          const hoverEffect = props.hoverEffect || (props.hoverZoom ? 'zoom' : 'none');
          if (!primary) {
            return (
              <div className={`w-full ${ASPECT[props.aspectRatio]} bg-gray-100 ${IMG_RADIUS[props.borderRadius]} flex items-center justify-center text-gray-400 text-sm`}>
                No image
              </div>
            );
          }
          if (hoverEffect === 'second-image' && secondary) {
            return (
              <div className={`relative w-full ${ASPECT[props.aspectRatio]} overflow-hidden ${IMG_RADIUS[props.borderRadius]}`}>
                <img src={primary} alt={product.title} className={`absolute inset-0 h-full w-full ${fit} transition-opacity duration-300 group-hover/pc:opacity-0`} />
                <img src={secondary} alt={product.title} className={`absolute inset-0 h-full w-full ${fit} opacity-0 transition-opacity duration-300 group-hover/pc:opacity-100`} />
              </div>
            );
          }
          return (
            <img
              src={primary}
              alt={product.title}
              className={`w-full ${ASPECT[props.aspectRatio]} ${fit} ${IMG_RADIUS[props.borderRadius]} ${hoverEffect === 'zoom' ? 'transition-transform duration-300 group-hover/pc:scale-105' : ''}`}
            />
          );
        })()}
        {props.showBadges && (props.showSaleBadge && isSale || props.showNewBadge && isNew || props.showLowStockBadge && isLowStock) && (
          <div className={`absolute ${badgePos[props.badgePosition]} flex gap-1`}>
            {props.customBadgeText && <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: resolveColor('badge.new.background'), color: resolveColor('badge.new.text') }}>{props.customBadgeText}</span>}
            {props.showSaleBadge && isSale && <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: resolveColor('badge.sale.background'), color: resolveColor('badge.sale.text') }}>Sale</span>}
            {props.showNewBadge && isNew && <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: resolveColor('badge.new.background'), color: resolveColor('badge.new.text') }}>New</span>}
            {props.showLowStockBadge && isLowStock && <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: resolveColor('badge.lowStock.background'), color: resolveColor('badge.lowStock.text') }}>Low Stock</span>}
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        {props.showTitle && (
          <div>
            {props.showVendor && (product as any).vendor && (
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">{(product as any).vendor}</p>
            )}
            <h3 className={`${TITLE_SIZE[props.titleSize]} ${TITLE_WEIGHT[props.titleWeight]} ${TITLE_ALIGN[props.titleAlign]} text-gray-900`}>
              {product.title}
            </h3>
          </div>
        )}
        {props.showPrice && (
          <div className="flex items-baseline gap-2">
            <span className={`${PRICE_SIZE[props.priceSize]} font-semibold`} style={{ color: props.priceColor }}>
              {typeof cap === 'number' ? `$${(cap / 100).toFixed(2)}` : 'Price N/A'}
            </span>
            {props.showCompareAtPrice && isSale && typeof op === 'number' && (
              <span className={`${PRICE_SIZE[props.priceSize]} text-gray-500 line-through`}>${(op / 100).toFixed(2)}</span>
            )}
            {props.showSavingsBadge && isSale && typeof op === 'number' && typeof cap === 'number' && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">Save {Math.round(((op - cap) / op) * 100)}%</span>
            )}
          </div>
        )}
        {props.showAddToCart && (() => {
          // CTA hierarchy: filled resolves through button.primary tokens
          // (change brand.primary -> every card CTA follows); outline/ghost -> brand.
          const filled = props.buttonStyle === 'filled';
          const ctaStyle: React.CSSProperties = filled
            ? { backgroundColor: resolveColor('button.primary.background') || '#111827', color: resolveColor('button.primary.text') || '#ffffff' }
            : { color: resolveColor('brand.primary') || '#111827' };
          const ctaClasses = `${BTN_SIZE[props.buttonSize]} rounded-lg font-medium transition-colors w-full ${
            filled ? 'hover:opacity-90'
            : props.buttonStyle === 'outline' ? 'border-2 hover:bg-gray-100'
            : 'hover:bg-gray-100'
          }`;
          if (props.buttonStyle === 'outline') {
            (ctaStyle as any).borderColor = ctaStyle.color;
          }
          const inner = (
            <>
              {props.showCartIcon && <span className="inline-flex items-center gap-2"><CartSvg /> {props.buttonText}</span>}
              {!props.showCartIcon && props.buttonText}
            </>
          );
          // 'link' navigates to the product page; 'add' is a plain button the
          // storefront wires to the cart (via its renderProduct injection).
          if (props.quickAddBehavior === 'add') {
            return <button type="button" className={ctaClasses} style={ctaStyle}>{inner}</button>;
          }
          return (
            <a href={`/products/${product.handle || product.id}`} className={`inline-flex justify-center ${ctaClasses}`} style={{ ...ctaStyle, textDecoration: 'none' }}>
              {inner}
            </a>
          );
        })()}
      </div>
    </div>
  );
};

export interface ProductCardWithRender extends ProductCardProps {
  product?: SharedProductCardProduct | null;
  renderProduct?: RenderProductCard;
}

export const ProductCard: ComponentConfig<ProductCardWithRender> = {
  label: 'Product Card',
  fields: allFields as any,
  defaultProps: {
    layout: 'vertical', enableSwiper: true, aspectRatio: 'square',
    borderRadius: 'md', showShadow: true, hoverEffect: 'zoom', imageFit: 'cover',
    showTitle: true, titleSize: 'lg', titleWeight: 'semibold', titleAlign: 'left', showVendor: false,
    showPrice: true, priceSize: 'lg', priceColor: 'card.price',
    showCompareAtPrice: true, showSavingsBadge: true,
    showBadges: true, showSaleBadge: true, showNewBadge: true, showLowStockBadge: true,
    badgePosition: 'top-right', customBadgeText: '',
    showAddToCart: true, buttonText: 'Add to Cart', quickAddBehavior: 'link',
    buttonStyle: 'filled', buttonSize: 'md', showCartIcon: true,
    cardRadius: 'lg', cardBorder: 'sm', cardShadow: true,
    cardBackground: 'card.background', accentColor: 'brand.primary', fontFamily: 'inherit',
    productId: '',
  },
  resolveData: async (data, { changed }) => {
    if (!data.props.productId) return { props: data.props };
    if (data.readOnly?.product) return { props: data.props, readOnly: data.readOnly };
    return { props: data.props };
  },
  render: (rawProps: any) => {
    const { product, renderProduct, ...rest } = rawProps as ProductCardWithRender;

    if (renderProduct && product) {
      return <div className="puck-product-card-wrapper">{renderProduct(product, rest as ProductCardProps)}</div>;
    }

    const fallback: SharedProductCardProduct = product || {
      id: 'mock-product',
      title: 'Sample Product (Select a Product ID to load real data)',
      variants: [{ calculated_price: { calculated_amount: 9999 }, original_price: { original_amount: 12999 } }],
      images: [
        { url: 'https://via.placeholder.com/400x400?text=Product+Image+1' },
        { url: 'https://via.placeholder.com/400x400?text=Product+Image+2' },
      ],
      inventory_quantity: 10,
      created_at: new Date().toISOString(),
    };

    return <DefaultCard product={fallback} props={rest as ProductCardProps} />;
  },
};

export default ProductCard;
