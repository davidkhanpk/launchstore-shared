export interface ListItem {
    text: string;
}
export interface ListProps {
    id?: string;
    items: ListItem[];
    type: 'bullet' | 'numbered' | 'check' | 'none';
    spacing: 'tight' | 'normal' | 'relaxed';
    fontSize: 'sm' | 'base' | 'lg';
    color: string;
}
//# sourceMappingURL=list.types.d.ts.map