import React, { useState, useMemo } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productAccordionFields } from './productaccordion.fields';
import type { ProductAccordionProps, ProductAccordionSection, ProductAccordionBorderStyle } from './productaccordion.types';
import type { ProductData } from '../ProductData';

const ChevronSvg = ({ rotated }: { rotated?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transform: rotated ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const BORDER: Record<ProductAccordionBorderStyle, string> = { none: '', top: 'border-t', full: 'border' };

const getContent = (section: ProductAccordionSection, product: ProductData | null): React.ReactNode => {
  switch (section.contentType) {
    case 'description':
      return product?.description ? (
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      ) : (
        <p className="text-gray-500">No description available</p>
      );
    case 'material': {
      const careInstructions = product?.metadata?.care_instructions;
      const hasCare = typeof careInstructions === 'string';
      const materialValue = product?.material as string | undefined;
      return (
        <div className="space-y-2">
          {materialValue && <p><strong>Material:</strong> {materialValue}</p>}
          {hasCare && (
            <div>
              <strong>Care Instructions:</strong>
              <p className="mt-1">{careInstructions}</p>
            </div>
          )}
          {!materialValue && !hasCare && (
            <p className="text-gray-500">No material information available</p>
          )}
        </div>
      );
    }
    case 'dimensions':
      return (
        <div className="space-y-2">
          {product?.length && <p><strong>Length:</strong> {product.length} cm</p>}
          {product?.width && <p><strong>Width:</strong> {product.width} cm</p>}
          {product?.height && <p><strong>Height:</strong> {product.height} cm</p>}
          {product?.weight && <p><strong>Weight:</strong> {product.weight} g</p>}
          {!product?.length && !product?.width && !product?.height && !product?.weight && (
            <p className="text-gray-500">No dimension information available</p>
          )}
        </div>
      );
    case 'shipping':
      return section.customContent ? (
        <div dangerouslySetInnerHTML={{ __html: section.customContent }} />
      ) : (
        <p className="text-gray-500">No shipping information available</p>
      );
    case 'custom':
      return section.customContent ? (
        <div dangerouslySetInnerHTML={{ __html: section.customContent }} />
      ) : (
        <p className="text-gray-500">No custom content provided</p>
      );
    default:
      return <p className="text-gray-500">Invalid content type</p>;
  }
};

export interface ProductAccordionWithProduct extends ProductAccordionProps {
  product?: ProductData | null;
}

export const ProductAccordion: ComponentConfig<ProductAccordionWithProduct> = {
  label: 'Product Accordion',
  fields: productAccordionFields as ComponentConfig<ProductAccordionWithProduct>['fields'],
  defaultProps: {
    sections: [
      { id: 'description', title: 'Product Details', contentType: 'description', customContent: '' },
      { id: 'material', title: 'Material & Care', contentType: 'material', customContent: '' },
      { id: 'shipping', title: 'Shipping & Returns', contentType: 'shipping', customContent: '<p>Free shipping on orders over $50. Returns accepted within 30 days.</p>' },
    ],
    allowMultiple: false,
    defaultOpen: 'description',
    borderStyle: 'top',
  },
  render: (rawProps: any) => {
    const { sections, allowMultiple, defaultOpen, borderStyle, product } = rawProps as ProductAccordionWithProduct;
    const list: ProductAccordionSection[] = (sections || []) as ProductAccordionSection[];
    if (!list || list.length === 0) {
      return <div className="text-gray-400 italic">No accordion sections configured</div>;
    }
    const initialOpen = useMemo(() => (defaultOpen ? defaultOpen.split(',').map((s) => s.trim()).filter(Boolean) : [list[0]?.id].filter(Boolean) as string[]), [defaultOpen, list]);
    const [openIds, setOpenIds] = useState<string[]>(initialOpen);

    const toggle = (id: string) => {
      setOpenIds((prev) => {
        if (allowMultiple) return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
        return prev.includes(id) ? [] : [id];
      });
    };
    const borderCls = BORDER[(borderStyle as ProductAccordionBorderStyle) || 'top'] || BORDER.top;

    return (
      <div className="w-full">
        {list.map((section) => {
          const isOpen = openIds.includes(section.id);
          return (
            <div key={section.id} className={`${borderCls} border-gray-200 py-4`}>
              <button
                type="button"
                onClick={() => toggle(section.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between text-left hover:text-gray-600 transition-colors"
              >
                <span className="text-base font-medium">{section.title}</span>
                <ChevronSvg rotated={isOpen} />
              </button>
              <div
                style={{
                  maxHeight: isOpen ? '1000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 300ms ease',
                }}
              >
                <div className="pt-4 pb-2 text-sm text-gray-700">{getContent(section, product || null)}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

export default ProductAccordion;
