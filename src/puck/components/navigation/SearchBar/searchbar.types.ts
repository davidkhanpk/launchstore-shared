import type { Field } from '@puckeditor/core';

export type SearchBarSize = 'sm' | 'md' | 'lg';
export type SearchBarStyle = 'minimal' | 'outlined' | 'filled';
export type SearchBarRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type SearchBarIconPosition = 'left' | 'right';

export interface SearchBarPopularItem {
  search: string;
}

export interface SearchBarProps {
  placeholder: string;
  style: SearchBarStyle;
  size: SearchBarSize;
  showIcon: boolean;
  iconPosition: SearchBarIconPosition;
  fullWidth: boolean;
  maxWidth?: string;
  borderRadius: SearchBarRadius;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  focusBorderColor: string;
  showPopularSearches: boolean;
  popularSearches?: SearchBarPopularItem[];
  /**
   * Called when the user submits a search query OR clicks a popular
   * search term. Consumer wires this to the next/navigation router
   * push or any other routing library.
   */
  onSearch?: (query: string) => void;
}
