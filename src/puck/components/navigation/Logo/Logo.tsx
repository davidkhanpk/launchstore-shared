import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { logoFields } from './logo.fields';
import type { LogoProps } from './logo.types';

const TEXT_SIZE: Record<NonNullable<LogoProps['textSize']>, string> = {
  sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl',
};
const TEXT_WEIGHT: Record<NonNullable<LogoProps['textWeight']>, string> = {
  normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};

export const Logo: ComponentConfig<LogoProps> = {
  label: 'Logo',
  fields: logoFields as ComponentConfig<LogoProps>['fields'],
  defaultProps: {
    imageUrl: '',
    altText: 'Store Logo',
    linkTo: '/',
    maxWidth: '150px',
    maxHeight: '60px',
    showText: true,
    text: 'My Store',
    textPosition: 'right',
    textSize: 'xl',
    textColor: '#000000',
    textWeight: 'bold',
  },
  render: (rawProps: any) => {
    const { imageUrl, altText, linkTo, maxWidth, maxHeight, showText, text, textPosition, textSize, textColor, textWeight } = rawProps as LogoProps;
    const hasImage = imageUrl && imageUrl.trim() !== '' && imageUrl !== '/logo.svg';
    return (
      <a href={linkTo} className={`flex items-center gap-3 ${textPosition === 'below' ? 'flex-col' : 'flex-row'}`}>
        {hasImage && (
          <div style={{ maxWidth, maxHeight, flexShrink: 0, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <img src={imageUrl} alt={altText} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }} />
          </div>
        )}
        {(showText || !hasImage) && text && (
          <span className={TEXT_SIZE[textSize] || 'text-xl'} style={{ color: resolveColor(textColor), fontWeight: TEXT_WEIGHT[textWeight] === 'font-bold' ? 700 : TEXT_WEIGHT[textWeight] === 'font-semibold' ? 600 : TEXT_WEIGHT[textWeight] === 'font-medium' ? 500 : 400 }}>
            {text}
          </span>
        )}
      </a>
    );
  },
};

export default Logo;
