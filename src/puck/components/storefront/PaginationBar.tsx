import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { PaginationBarProps } from './types';

const ALIGN: Record<string, string> = {
  left: 'justify-start', center: 'justify-center', right: 'justify-end',
};

const paginationBarFields = {
  style: {
    type: 'select', label: 'Style',
    options: [
      { label: 'Numbered pages', value: 'numbered' },
      { label: 'Load more button', value: 'load-more' },
      { label: 'Simple (prev/next)', value: 'simple' },
    ],
  },
  alignment: {
    type: 'select', label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  maxPageNumbers: { type: 'number', label: 'Max visible page numbers' },
} as Record<string, any>;

export const PaginationBar: ComponentConfig<PaginationBarProps> = {
  label: 'Pagination Bar',
  fields: paginationBarFields as ComponentConfig<PaginationBarProps>['fields'],
  defaultProps: {
    currentPage: 1,
    totalPages: 1,
    style: 'numbered',
    alignment: 'center',
    maxPageNumbers: 7,
  },
  render: (rawProps: any) => {
    const {
      currentPage = 1,
      totalPages = 1,
      style = 'numbered',
      alignment = 'center',
      maxPageNumbers = 7,
      onPageChange,
    } = rawProps as PaginationBarProps;

    if (totalPages <= 1) return <></>;

    const alignClass = ALIGN[alignment] || ALIGN.center;
    const goTo = (page: number) => {
      const clamped = Math.max(1, Math.min(totalPages, page));
      onPageChange?.(clamped);
    };

    // "load-more" style
    if (style === 'load-more') {
      if (currentPage >= totalPages) return <></>;
      return (
        <div className={`flex ${alignClass} py-8`}>
          <button
            onClick={() => goTo(currentPage + 1)}
            className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Load More
          </button>
        </div>
      );
    }

    // "simple" style (prev/next only)
    if (style === 'simple') {
      return (
        <div className={`flex items-center gap-3 py-6 ${alignClass}`}>
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50"
          >
            ← Previous
          </button>
          <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50"
          >
            Next →
          </button>
        </div>
      );
    }

    // "numbered" style (default) with ellipsis logic
    const max = Math.min(maxPageNumbers, totalPages);
    let startPage = Math.max(1, currentPage - Math.floor(max / 2));
    let endPage = startPage + max - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - max + 1);
    }
    const pages: (number | '...')[] = [];
    if (startPage > 1) { pages.push(1); if (startPage > 2) pages.push('...'); }
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages) { if (endPage < totalPages - 1) pages.push('...'); pages.push(totalPages); }

    return (
      <div className={`flex items-center gap-1.5 py-6 ${alignClass}`}>
        <button
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50"
        >
          ←
        </button>
        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`ellipsis-${i}`} className="px-2 text-gray-400">…</span>
          ) : (
            <button
              key={p}
              onClick={() => goTo(p)}
              className={`min-w-[36px] px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                p === currentPage
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50"
        >
          →
        </button>
      </div>
    );
  },
};

export default PaginationBar;
