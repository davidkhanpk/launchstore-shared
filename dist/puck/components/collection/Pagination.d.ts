import type { ComponentConfig } from '@puckeditor/core';
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
export declare const Pagination: ComponentConfig<PaginationWithData>;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map