import React, { useState, useRef } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { searchIconFields } from './searchicon.fields';
import type { SearchIconProps } from './searchicon.types';

const SearchIconSvg = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const XIconSvg = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SIZE_MAP: Record<SearchIconProps['iconSize'], number> = { sm: 20, md: 24, lg: 28 };
const STYLE: Record<SearchIconProps['style'], string> = {
  minimal: 'p-2 rounded-full hover:bg-gray-100',
  outlined: 'p-2 border-2 rounded-full hover:bg-gray-100',
  filled: 'p-2 rounded-full',
};

export const SearchIcon: ComponentConfig<SearchIconProps> = {
  label: 'Search Icon',
  fields: searchIconFields as ComponentConfig<SearchIconProps>['fields'],
  defaultProps: {
    iconSize: 'md', iconColor: '#000000', hoverColor: '#3b82f6',
    style: 'minimal', openSearchOnClick: true,
  },
  render: (rawProps: any) => {
    const { iconSize, iconColor, hoverColor, style, openSearchOnClick, onSearchSubmit, onClose } = rawProps as SearchIconProps;
    const [isHovered, setIsHovered] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const sz = SIZE_MAP[iconSize] || 24;
    const cls = STYLE[style] || STYLE.minimal;

    const handleClick = () => {
      if (openSearchOnClick) { setSearchOpen(true); setQuery(''); }
    };
    const handleClose = () => {
      setSearchOpen(false);
      setQuery('');
      onClose?.();
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        onSearchSubmit?.(query.trim());
        handleClose();
      }
    };

    return (
      <>
        <button
          onClick={handleClick}
          className={`transition-all ${cls}`}
          style={{
            color: isHovered ? resolveColor(hoverColor) : resolveColor(iconColor),
            backgroundColor: style === 'filled' ? (isHovered ? resolveColor(hoverColor) : resolveColor(iconColor)) : 'transparent',
            borderColor: style === 'outlined' ? resolveColor(iconColor) : 'transparent',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Search"
        >
          <SearchIconSvg size={sz} />
        </button>

        {searchOpen && (
          <div
            className="fixed inset-0 z-[100] flex flex-col items-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            onClick={handleClose}
          >
            <div
              className="w-full max-w-2xl mt-16 mx-4 bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSubmit} className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                <span className="text-gray-400"><SearchIconSvg size={20} /></span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 text-base text-gray-900 placeholder-gray-400 bg-transparent outline-none"
                  autoFocus
                />
                <button type="button" onClick={handleClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors shrink-0" aria-label="Close search">
                  <span className="text-gray-400"><XIconSvg size={20} /></span>
                </button>
              </form>
              <div className="px-4 py-3 text-sm text-gray-400">
                {query ? `Press Enter to search for "${query}"` : 'Start typing to search products...'}
              </div>
            </div>
          </div>
        )}
      </>
    );
  },
};

export default SearchIcon;
