import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { sectionFields } from './section.fields';
import type { SectionProps } from './section.types';

const PAD: Record<SectionProps['paddingY'], string> = {
  none: 'py-0', sm: 'py-4', md: 'py-8', lg: 'py-12', xl: 'py-16',
};
const BG: Record<SectionProps['backgroundColor'], string> = {
  transparent: 'bg-transparent',
  white: 'bg-white',
  gray: 'bg-gray-50',
  // 'primary' uses brand.primary theme variable — resolved by surrounding page CSS context.
  primary: 'bg-brand-primary',
};

export const Section: ComponentConfig<SectionProps> = {
  label: 'Section',
  fields: sectionFields as ComponentConfig<SectionProps>['fields'],
  defaultProps: { paddingY: 'md', backgroundColor: 'transparent' },
  render: (props: any) => {
    const { paddingY, backgroundColor, children } = props as SectionProps & { children?: React.ReactNode };
    return (
      <section className={`w-full ${PAD[paddingY] || 'py-8'} ${BG[backgroundColor] || 'bg-transparent'}`}>
        {children}
      </section>
    );
  },
};

export default Section;
