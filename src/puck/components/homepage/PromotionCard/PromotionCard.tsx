import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';

export interface PromotionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  alignment: 'left' | 'center';
}

const ALIGN: Record<PromotionCardProps['alignment'], string> = { left: 'text-left items-start', center: 'text-center items-center' };

export const promotionCardFields: ComponentConfig<PromotionCardProps>['fields'] = {
  title: { type: 'text', label: 'Title' },
  description: { type: 'textarea', label: 'Description' },
  buttonText: { type: 'text', label: 'Button Text' },
  buttonHref: { type: 'text', label: 'Button URL' },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  buttonColor: { type: 'text', label: 'Button Color (hex or theme token)' },
  buttonTextColor: { type: 'text', label: 'Button Text Color (hex or theme token)' },
  alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }] },
};

export const PromotionCard: ComponentConfig<PromotionCardProps> = {
  label: 'Promotion Card',
  fields: promotionCardFields,
  defaultProps: {
    title: 'Special Offer',
    description: 'Get 20% off your first order',
    buttonText: 'Shop Now',
    buttonHref: '#',
    backgroundColor: '#111827',
    textColor: '#ffffff',
    buttonColor: '#ffffff',
    buttonTextColor: '#111827',
    alignment: 'center',
  },
  render: ({ title, description, buttonText, buttonHref, backgroundColor, textColor, buttonColor, buttonTextColor, alignment }) => {
    const bg = resolveColor(backgroundColor) || backgroundColor;
    const fg = resolveColor(textColor) || textColor;
    const btnBg = resolveColor(buttonColor) || buttonColor;
    const btnFg = resolveColor(buttonTextColor) || buttonTextColor;
    return (
      <div className={`flex flex-col gap-3 p-5 rounded-lg ${ALIGN[alignment] || 'text-center items-center'}`} style={{ backgroundColor: bg, color: fg }}>
        {title && <h4 className="text-base font-semibold m-0">{title}</h4>}
        {description && <p className="text-sm m-0 opacity-90">{description}</p>}
        {buttonText && (
          <a href={buttonHref || '#'} className="no-underline inline-block px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: btnBg, color: btnFg }}>
            {buttonText}
          </a>
        )}
      </div>
    );
  },
};

export default PromotionCard;
