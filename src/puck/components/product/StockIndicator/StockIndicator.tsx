import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { stockIndicatorFields } from './stockindicator.fields';
import type { StockIndicatorProps, StockIndicatorStyle, StockStatus } from './stockindicator.types';
import { evaluateStock } from './stockindicator.types';

const StockIcon = ({ status, size = 20 }: { status: StockStatus; size?: number }) => {
  if (status === 'in-stock') return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
  );
  if (status === 'low-stock') return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
  );
  if (status === 'out-of-stock') return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  );
};
import type { ProductData } from '../ProductData';

export interface StockIndicatorWithProduct extends StockIndicatorProps {
  product?: ProductData | null;
}

export const StockIndicator: ComponentConfig<StockIndicatorWithProduct> = {
  label: 'Stock Indicator',
  fields: stockIndicatorFields as ComponentConfig<StockIndicatorWithProduct>['fields'],
  defaultProps: {
    showIcon: true, showText: true, showQuantity: true,
    lowStockThreshold: 10, style: 'default',
  },
  render: (rawProps: any) => {
    const { showIcon, showText, showQuantity, lowStockThreshold = 10, style = 'default', product } = rawProps as StockIndicatorWithProduct;
    if (!product) return <></>;

    const resolved = evaluateStock(product, lowStockThreshold);
    const sty = (style as StockIndicatorStyle) || 'default';

    if (sty === 'badge') {
      return (
        <span className={`stock-indicator inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${resolved.iconColor} ${resolved.bgColor}`}>
          {showIcon && <span className="flex-shrink-0"><StockIcon status={resolved.status} /></span>}
          {showText && <span>{resolved.text}</span>}
          {showQuantity && resolved.quantity > 0 && !resolved.isPreOrder && (
            <span>• {resolved.quantity}</span>
          )}
        </span>
      );
    }
    if (sty === 'minimal') {
      return (
        <div className={`stock-indicator flex items-center gap-2 text-sm ${resolved.iconColor}`}>
          {showIcon && <span className="flex-shrink-0"><StockIcon status={resolved.status} /></span>}
          {showText && <span className="font-medium">{resolved.text}</span>}
          {showQuantity && resolved.quantity > 0 && !resolved.isPreOrder && (
            <span className="text-xs opacity-75">({resolved.quantity} available)</span>
          )}
        </div>
      );
    }
    // default
    return (
      <div className={`stock-indicator flex items-center gap-2 ${resolved.iconColor} ${resolved.bgColor} ${resolved.borderColor} p-3 rounded-lg border`}>
        {showIcon && <span className="flex-shrink-0"><StockIcon status={resolved.status} /></span>}
        <div className="flex-1">
          {showText && <span className="font-medium text-sm">{resolved.text}</span>}
          {showQuantity && resolved.quantity > 0 && !resolved.isPreOrder && (
            <span className="text-xs ml-2">({resolved.quantity} available)</span>
          )}
        </div>
      </div>
    );
  },
};

export default StockIndicator;
