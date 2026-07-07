import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { socialIconsFields } from './socialicons.fields';
import type { SocialIconsProps, SocialIconLink } from './socialicons.types';

// Inline-SVG brand logos (no lucide-react dep). Sized by props.size at render.
// Centered or stroke variants use stroke=currentColor for theming.
const SIZE = 24;
const ICONS: Record<SocialIconLink['platform'], React.ReactNode> = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width={SIZE} height={SIZE} fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z" /></svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width={SIZE} height={SIZE} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width={SIZE} height={SIZE} fill="currentColor" viewBox="0 0 24 24"><path d="M22 4.01c-.7.3-1.5.6-2.4.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-7 3.7A11.4 11.4 0 0 1 3.4 3.6a4 4 0 0 0 1.2 5.3c-.7 0-1.3-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 1 17.4 11.4 11.4 0 0 0 7.2 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8 8 0 0 0 22 4z" /></svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" width={SIZE} height={SIZE} fill="currentColor" viewBox="0 0 24 24"><path d="M23 7.4a3 3 0 0 0-2.1-2.1C19.1 5 12 5 12 5s-7.1 0-8.9.3A3 3 0 0 0 1 7.4 31 31 0 0 0 .7 12 31 31 0 0 0 1 16.6a3 3 0 0 0 2.1 2.1c1.8.3 8.9.3 8.9.3s7.1 0 8.9-.3a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.3 12 31 31 0 0 0 23 7.4z" /><polygon fill="white" points="10 15 15 12 10 9 10 15" /></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width={SIZE} height={SIZE} fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width={SIZE} height={SIZE} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
  ),
};

const SIZE_MAP: Record<SocialIconsProps['size'], { icon: number; padding: string }> = {
  sm: { icon: 16, padding: 'p-2' },
  md: { icon: 20, padding: 'p-3' },
  lg: { icon: 24, padding: 'p-4' },
};
const GAP: Record<SocialIconsProps['gap'], string> = { sm: 'gap-2', md: 'gap-3', lg: 'gap-4' };
const ALIGN: Record<SocialIconsProps['alignment'], string> = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };
const STYLE: Record<SocialIconsProps['style'], string> = { circle: 'rounded-full', square: 'rounded-lg', minimal: 'rounded-none' };

export const SocialIcons: ComponentConfig<SocialIconsProps> = {
  label: 'Social Icons',
  fields: socialIconsFields as ComponentConfig<SocialIconsProps>['fields'],
  defaultProps: {
    links: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
    size: 'md',
    style: 'circle',
    color: '#ffffff',
    hoverColor: '#3b82f6',
    backgroundColor: '#374151',
    hoverBackgroundColor: '#1f2937',
    gap: 'md',
    alignment: 'center',
  },
  render: ({ links, size, style, color, hoverColor, backgroundColor, hoverBackgroundColor, gap, alignment }) => {
    const { padding } = SIZE_MAP[size] || SIZE_MAP.md;
    return (
      <div className={`flex ${GAP[gap] || 'gap-3'} ${ALIGN[alignment] || 'justify-center'}`}>
        {(links || []).map((link, i) => {
          const icon = ICONS[link.platform];
          return (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${padding} ${STYLE[style] || 'rounded-full'} transition-all duration-200 ${style !== 'minimal' ? 'hover:scale-110' : ''}`}
              style={{ backgroundColor: style !== 'minimal' ? resolveColor(backgroundColor) : 'transparent', color: resolveColor(color) }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.color = resolveColor(hoverColor) || hoverColor;
                if (style !== 'minimal') e.currentTarget.style.backgroundColor = resolveColor(hoverBackgroundColor) || hoverBackgroundColor;
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.color = resolveColor(color) || color;
                if (style !== 'minimal') e.currentTarget.style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
              }}
              aria-label={link.platform}
            >
              {icon}
            </a>
          );
        })}
      </div>
    );
  },
};

export default SocialIcons;
