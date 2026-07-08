import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const paginationFields = {
  style: { type: 'select', label: 'Pagination Style', options: [{ label: 'Simple (Prev/Next)', value: 'simple' }, { label: 'Numbered Pages', value: 'numbered' }, { label: 'Load More Button', value: 'load-more' }] },
  showPageNumbers: { type: 'radio', label: 'Show Page Numbers', options: RADIO_YES_NO },
  showFirstLast: { type: 'radio', label: 'Show First/Last Buttons', options: RADIO_YES_NO },
  maxPageNumbers: { type: 'number', label: 'Max Page Numbers to Show' },
  alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
} as Record<string, Field>;

const ChevronL = ({ size = 16 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>);
const ChevronR = ({ size = 16 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>);

export interface PaginationProps {
  showPageNumbers: boolean;
  showFirstLast: boolean;
  maxPageNumbers: number;
  style: 'simple' | 'numbered' | 'load-more';
  alignment: 'left' | 'center' | 'right';
}

export interface PaginationWithData extends PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  loadMoreText?: string;
}

const alignmentClasses = { left: 'justify-start', center: 'justify-center', right: 'justify-end' } as const;

export const Pagination: ComponentConfig<PaginationWithData> = {
  label: 'Pagination',
  fields: paginationFields as ComponentConfig<PaginationWithData>['fields'],
  defaultProps: { showPageNumbers: true, showFirstLast: true, maxPageNumbers: 7, style: 'numbered', alignment: 'center' },
  render: (raw: any) => {
    const { showPageNumbers, showFirstLast, maxPageNumbers = 7, style = 'numbered', alignment = 'center' } = raw as PaginationWithData;
    const [internalPage, setInternalPage] = useState((raw as any).currentPage ?? 1);
    const totalPages: number = (raw as any).totalPages ?? 4;
    const externalOnPageChange = (raw as any).onPageChange;
    const setPage = (p: number) => { setInternalPage(p); externalOnPageChange?.(p); };
    const loadMoreText: string = (raw as any).loadMoreText ?? 'Load More';

    if (style === 'load-more') {
      return (
        <div className={`flex ${alignmentClasses[alignment]} mt-8`}>
          <button onClick={() => setPage(internalPage + 1)} disabled={internalPage >= totalPages} className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">{loadMoreText}</button>
        </div>
      );
    }

    if (style === 'simple') {
      return (
        <div className={`flex items-center gap-2 mt-8 ${alignmentClasses[alignment]}`}>
          <button onClick={() => setPage(internalPage - 1)} disabled={internalPage <= 1} className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"><ChevronL /> Prev</button>
          <span className="px-4 text-sm text-gray-600">Page {internalPage} of {totalPages}</span>
          <button onClick={() => setPage(internalPage + 1)} disabled={internalPage >= totalPages} className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">Next <ChevronR /></button>
        </div>
      );
    }

    const pages: (number | 'ellipsis')[] = [];
    const half = Math.floor(maxPageNumbers / 2);
    let start = Math.max(1, internalPage - half);
    let end = Math.min(totalPages, start + maxPageNumbers - 1);
    if (end - start + 1 < maxPageNumbers) start = Math.max(1, end - maxPageNumbers + 1);
    if (start > 1) { pages.push(1); if (start > 2) pages.push('ellipsis'); }
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages) { if (end < totalPages - 1) pages.push('ellipsis'); pages.push(totalPages); }

    return (
      <nav className={`flex items-center gap-1 mt-8 ${alignmentClasses[alignment]}`}>
        {showFirstLast && <button onClick={() => setPage(1)} disabled={internalPage === 1} className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">«</button>}
        <button onClick={() => setPage(internalPage - 1)} disabled={internalPage <= 1} className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"><ChevronL /></button>
        {showPageNumbers && pages.map((p, i) => p === 'ellipsis' ? <span key={`e${i}`} className="px-2 text-gray-400">…</span> : (
          <button key={p} onClick={() => setPage(p)} className={`px-3 py-2 border rounded ${p === internalPage ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-gray-50'}`}>{p}</button>
        ))}
        <button onClick={() => setPage(internalPage + 1)} disabled={internalPage >= totalPages} className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"><ChevronR /></button>
        {showFirstLast && <button onClick={() => setPage(totalPages)} disabled={internalPage === totalPages} className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">»</button>}
      </nav>
    );
  },
};

export default Pagination;
