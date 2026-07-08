export interface AccordionItem {
    id: string;
    title: string;
    content: string;
}
export interface AccordionProps {
    id?: string;
    items: AccordionItem[];
    allowMultiple: boolean;
    defaultOpen?: number[];
    bordered: boolean;
    rounded: 'none' | 'sm' | 'md' | 'lg';
}
//# sourceMappingURL=accordion.types.d.ts.map