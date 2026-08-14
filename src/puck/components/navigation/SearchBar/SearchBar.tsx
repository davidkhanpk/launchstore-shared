import React, { useState, useRef } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { SearchBarProps, SearchBarSize, SearchBarStyle, SearchBarRadius, SearchBarIconPosition } from './searchbar.types';
import { resolveColor } from '../../../../theme/resolveColor';
import {
} from '../../../design-system';

const SearchSvg = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
const XSvg = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

const SIZE_MAP: Record<SearchBarSize, string> = {
  sm: 'py-1.5 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-5 text-lg',
};
const SIZE_ICON: Record<SearchBarSize, number> = { sm: 16, md: 20, lg: 24 };
const RADIUS: Record<SearchBarRadius, string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full',
};
const STYLE: Record<SearchBarStyle, string> = {
  minimal: 'border-0 border-b-2', outlined: 'border', filled: 'border-0',
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  placeholder: { type: 'text' as const, label: 'Placeholder Text' },
  style: {
    type: 'select' as const, label: 'Style',
    options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Outlined', value: 'outlined' }, { label: 'Filled', value: 'filled' }],
  },
  size: {
    type: 'select' as const, label: 'Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  showIcon: {
    type: 'radio' as const, label: 'Show Search Icon',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  iconPosition: {
    type: 'select' as const, label: 'Icon Position',
    options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
  },
  fullWidth: {
    type: 'radio' as const, label: 'Full Width',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  maxWidth: { type: 'text' as const, label: 'Max Width (if not full width)' },
  borderRadius: {
    type: 'select' as const, label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Full', value: 'full' },
    ],
  },
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text' as const, label: 'Text Color (hex or theme token)' },
  borderColor: { type: 'text' as const, label: 'Border Color (hex or theme token)' },
  focusBorderColor: { type: 'text' as const, label: 'Focus Border Color (hex or theme token)' },
  showPopularSearches: {
    type: 'radio' as const, label: 'Show Popular Searches',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  popularSearches: {
    type: 'array' as const, label: 'Popular Searches',
    arrayFields: { search: { type: 'text' as const } },
    getItemSummary: ((item: any) => item?.search || 'Search term') as any,
  } as any,
};

export const SearchBar: ComponentConfig<SearchBarProps> = {
  label: 'Search Bar',
  fields: allFields as any,
  defaultProps: {
    placeholder: 'Search products...', style: 'outlined', size: 'md',
    showIcon: true, iconPosition: 'left', fullWidth: false, maxWidth: '400px',
    borderRadius: 'md', backgroundColor: '#ffffff', textColor: '#000000',
    borderColor: '#e5e7eb', focusBorderColor: '#3b82f6',
    showPopularSearches: false, popularSearches: [],
  } as SearchBarProps,
  render: (rawProps: any) => {
    const {
      placeholder, style, size, showIcon, iconPosition, fullWidth, maxWidth,
      borderRadius, backgroundColor, textColor, borderColor, focusBorderColor,
      showPopularSearches, popularSearches, onSearch,
    } = rawProps as SearchBarProps;

    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) { onSearch?.(query.trim()); setQuery(''); setIsFocused(false); }
    };
    const handlePopular = (term: string) => {
      onSearch?.(term);
      setIsFocused(false);
    };

    const ic = SIZE_ICON[(size as SearchBarSize) || 'md'];
    const sizeCls = SIZE_MAP[(size as SearchBarSize) || 'md'];
    const radiusCls = RADIUS[(borderRadius as SearchBarRadius) || 'md'];
    const styleCls = STYLE[(style as SearchBarStyle) || 'outlined'];
    const iconPos = (iconPosition || 'left') as SearchBarIconPosition;

    return (
      <div className="relative" style={{ width: fullWidth ? '100%' : 'auto', maxWidth: fullWidth ? undefined : maxWidth }}>
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-center">
            {showIcon && iconPos === 'left' && (
              <span className="absolute left-3 pointer-events-none" style={{ color: resolveColor(textColor), opacity: 0.5 }}>
                <SearchSvg size={ic} />
              </span>
            )}
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder={placeholder}
              className={`w-full transition-all duration-200 ${sizeCls} ${radiusCls} ${styleCls} ${showIcon && iconPos === 'left' ? 'pl-10' : ''} ${showIcon && iconPos === 'right' ? 'pr-10' : ''} focus:outline-none`}
              style={{
                backgroundColor: style === 'filled' ? resolveColor(backgroundColor) : 'transparent',
                color: resolveColor(textColor),
                borderColor: isFocused ? resolveColor(focusBorderColor) : resolveColor(borderColor),
              }}
            />
            {showIcon && iconPos === 'right' && (
              <button type="submit" className="absolute right-3" aria-label="Search">
                <span style={{ color: resolveColor(textColor), opacity: 0.5 }}>
                  <SearchSvg size={ic} />
                </span>
              </button>
            )}
            {query && (
              <button type="button" onClick={() => setQuery('')} className="absolute right-10" aria-label="Clear">
                <span style={{ color: resolveColor(textColor), opacity: 0.5 }}>
                  <XSvg size={ic - 4} />
                </span>
              </button>
            )}
          </div>
        </form>
        {showPopularSearches && isFocused && popularSearches && popularSearches.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-50" style={{ borderColor: resolveColor(borderColor) }}>
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Popular Searches</div>
            {popularSearches.map((item: any, index: number) => (
              <button
                key={index}
                onClick={() => handlePopular(item.search)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400"><SearchSvg size={14} /></span>
                <span style={{ color: resolveColor(textColor) }}>{item.search}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export default SearchBar;
