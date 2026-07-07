import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productBreadcrumbsFields } from './productbreadcrumbs.fields';
import type { ProductBreadcrumbsProps, ProductBreadcrumbsSeparator, ProductBreadcrumbsTransform } from './productbreadcrumbs.types';
import type { ProductData } from '../ProductData';

const HomeSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ChevronSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Separator = ({ kind }: { kind: ProductBreadcrumbsSeparator }) => {
  if (kind === 'arrow') return <ChevronSvg />;
  if (kind === 'slash') return <span className="text-gray-400">/</span>;
  return <span className="text-gray-400">\u2022</span>;
};

const TRANSFORM: Record<ProductBreadcrumbsTransform, string> = {
  none: '', uppercase: 'uppercase', capitalize: 'capitalize',
};

export interface ProductBreadcrumbsWithProduct extends ProductBreadcrumbsProps {
  product?: ProductData | null;
}

export const ProductBreadcrumbs: ComponentConfig<ProductBreadcrumbsWithProduct> = {
  label: 'Product Breadcrumbs',
  fields: productBreadcrumbsFields as ComponentConfig<ProductBreadcrumbsWithProduct>['fields'],
  defaultProps: { showHomeIcon: true, separator: 'arrow', textTransform: 'none' },
  render: (rawProps: any) => {
    const { showHomeIcon, separator, textTransform, product } = rawProps as ProductBreadcrumbsWithProduct;
    if (!product) return <></>;

    const crumbs: { label: string; href: string }[] = [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/store' },
    ];
    if (product.collection) {
      crumbs.push({
        label: product.collection.title,
        href: `/collections/${product.collection.handle}`,
      });
    }
    if (product.categories && product.categories.length > 0) {
      product.categories.forEach((c: any) => {
        crumbs.push({ label: c.name, href: `/categories/${c.handle}` });
      });
    }
    crumbs.push({ label: product.title, href: '#' });

    const sepKind = (separator as ProductBreadcrumbsSeparator) || 'arrow';
    const transformCls = TRANSFORM[(textTransform as ProductBreadcrumbsTransform) || 'none'] || '';

    return (
      <nav className="product-breadcrumbs mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {crumbs.map((crumb, index) => {
            const isFirst = index === 0;
            const isLast = index === crumbs.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                {!isFirst && <span className="flex items-center"><Separator kind={sepKind} /></span>}
                {isLast ? (
                  <span className={`text-gray-900 font-medium ${transformCls}`}>{crumb.label}</span>
                ) : (
                  <a
                    href={crumb.href}
                    className={`text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 ${transformCls}`}
                  >
                    {isFirst && showHomeIcon && <HomeSvg />}
                    {crumb.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
};

export default ProductBreadcrumbs;
