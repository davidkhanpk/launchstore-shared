export type ProductGridDisplayStyle = 'grid' | 'carousel';
export type ProductGridPadding = 'none' | 'sm' | 'md' | 'lg';
export interface ProductGridProps {
    title: string;
    showTitle: boolean;
    maxProducts: number;
    displayStyle: ProductGridDisplayStyle;
    containerPadding: ProductGridPadding;
}
//# sourceMappingURL=productgrid.types.d.ts.map