import type { CartItem, CartItemLayout, CartItemUpdateFn, CartItemDeleteFn } from './cart.types';

export interface CartItemsViewProps extends CartItem {
  layout: CartItemLayout;
  showImages: boolean;
  showVariantInfo: boolean;
  showQuantitySelector: boolean;
  showDeleteButton: boolean;
  imageSize: 'sm' | 'md' | 'lg';
  maxQuantity: number;
  onQuantityChange: CartItemUpdateFn;
  onDelete: CartItemDeleteFn;
  updating: boolean;
  formatPrice: (price: number) => string;
}

const IMAGE_SIZES = { sm: 'w-16 h-16', md: 'w-24 h-24', lg: 'w-32 h-32' } as const;

const Minus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const Trash = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
);

export const CartItemRow: React.FC<CartItemsViewProps> = ({
  id, title, product_title, product_handle, thumbnail, variant, quantity, unit_price, total, isPreorder,
  layout, showImages, showVariantInfo, showQuantitySelector, showDeleteButton, imageSize, maxQuantity,
  onQuantityChange, onDelete, updating, formatPrice,
}) => {
  const variantLabel = variant.options.map(o => o.value).join(' / ');
  const op = (n: number) => () => onQuantityChange(id, n);
  const rm = () => onDelete(id);

  if (layout === 'card') {
    return (
      <div className={`border border-gray-200 rounded-lg p-4 ${updating ? 'opacity-50' : ''}`}>
        {showImages && thumbnail && (
          <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded mb-4" />
        )}
        <a href={`/products/${product_handle}`} className="font-medium text-gray-900 hover:underline block mb-2">{product_title}</a>
        {showVariantInfo && variantLabel && <p className="text-sm text-gray-600 mb-3">{variantLabel}</p>}
        {isPreorder && <p className="text-xs text-orange-600 mb-2">Pre-order · Ships on expected date</p>}
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700">{formatPrice(unit_price)}</span>
          <span className="font-semibold text-gray-900">{formatPrice(total)}</span>
        </div>
        <div className="flex items-center justify-between">
          {showQuantitySelector && (
            <div className="flex items-center gap-2">
              <button onClick={op(quantity - 1)} disabled={quantity <= 1 || updating} className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"><Minus /></button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={op(quantity + 1)} disabled={quantity >= maxQuantity || updating} className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"><Plus /></button>
            </div>
          )}
          {showDeleteButton && (
            <button onClick={rm} disabled={updating} className="p-2 text-red-600 hover:bg-red-50 rounded disabled:opacity-50"><Trash /></button>
          )}
        </div>
      </div>
    );
  }

  if (layout === 'list') {
    return (
      <div className={`flex items-center gap-4 pb-4 border-b border-gray-200 ${updating ? 'opacity-50' : ''}`}>
        {showImages && thumbnail && (
          <img src={thumbnail} alt={title} className={`${IMAGE_SIZES[imageSize]} object-cover rounded flex-shrink-0`} />
        )}
        <div className="flex-1 min-w-0">
          <a href={`/products/${product_handle}`} className="font-medium text-gray-900 hover:underline truncate block">{product_title}</a>
          {showVariantInfo && variantLabel && <p className="text-sm text-gray-600 mt-1">{variantLabel}</p>}
          {isPreorder && <p className="text-xs text-orange-600 mt-0.5">Pre-order · Ships on expected date</p>}
          <div className="mt-2 flex items-center gap-4">
            {showQuantitySelector && (
              <div className="flex items-center gap-2">
                <button onClick={op(quantity - 1)} disabled={quantity <= 1 || updating} className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"><Minus /></button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={op(quantity + 1)} disabled={quantity >= maxQuantity || updating} className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"><Plus /></button>
              </div>
            )}
            <p className="text-gray-700">{formatPrice(unit_price)} each</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-semibold text-gray-900">{formatPrice(total)}</p>
          {showDeleteButton && (
            <button onClick={rm} disabled={updating} className="mt-2 p-2 text-red-600 hover:bg-red-50 rounded disabled:opacity-50"><Trash /></button>
          )}
        </div>
      </div>
    );
  }

  // table
  return (
    <tr className={`border-b border-gray-100 ${updating ? 'opacity-50' : ''}`}>
      <td className="py-4 px-4">
        <div className="flex items-center gap-4">
          {showImages && thumbnail && (
            <img src={thumbnail} alt={title} className={`${IMAGE_SIZES[imageSize]} object-cover rounded`} />
          )}
          <div>
            <a href={`/products/${product_handle}`} className="font-medium text-gray-900 hover:underline">{product_title}</a>
            {showVariantInfo && variantLabel && <p className="text-sm text-gray-600 mt-1">{variantLabel}</p>}
            {isPreorder && <p className="text-xs text-orange-600 mt-0.5">Pre-order · Ships on expected date</p>}
          </div>
        </div>
      </td>
      {showQuantitySelector && (
        <td className="py-4 px-4">
          <div className="flex items-center justify-center gap-2">
            <button onClick={op(quantity - 1)} disabled={quantity <= 1 || updating} className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"><Minus /></button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button onClick={op(quantity + 1)} disabled={quantity >= maxQuantity || updating} className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"><Plus /></button>
          </div>
        </td>
      )}
      <td className="py-4 px-4 text-right text-gray-700">{formatPrice(unit_price)}</td>
      <td className="py-4 px-4 text-right font-medium text-gray-900">{formatPrice(total)}</td>
      {showDeleteButton && (
        <td className="py-4 px-4 text-right">
          <button onClick={rm} disabled={updating} className="p-2 text-red-600 hover:bg-red-50 rounded disabled:opacity-50"><Trash /></button>
        </td>
      )}
    </tr>
  );
};
