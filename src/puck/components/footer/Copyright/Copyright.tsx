import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { copyrightFields } from './copyright.fields';
import type { CopyrightProps } from './copyright.types';

const ALIGN: Record<CopyrightProps['alignment'], string> = { left: 'text-left', center: 'text-center', right: 'text-right' };
const FONT: Record<CopyrightProps['fontSize'], string> = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };

export const Copyright: ComponentConfig<CopyrightProps> = {
  label: 'Copyright',
  fields: copyrightFields as ComponentConfig<CopyrightProps>['fields'],
  defaultProps: {
    text: 'All rights reserved.',
    showYear: true,
    alignment: 'center',
    fontSize: 'sm',
    textColor: '#6b7280',
    showDivider: true,
    dividerColor: '#e5e7eb',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  render: ({ text, showYear, alignment, fontSize, textColor, showDivider, dividerColor, paddingTop, paddingBottom }) => {
    const currentYear = new Date().getFullYear();
    return (
      <div
        className="w-full"
        style={{
          paddingTop,
          paddingBottom,
          borderTop: showDivider ? `1px solid ${resolveColor(dividerColor) || dividerColor}` : 'none',
        }}
      >
        <div className="container mx-auto px-4">
          <p className={`${ALIGN[alignment] || 'text-center'} ${FONT[fontSize] || 'text-sm'}`} style={{ color: resolveColor(textColor) }}>
            {showYear && `© ${currentYear} `}
            {text}
          </p>
        </div>
      </div>
    );
  },
};

export default Copyright;
