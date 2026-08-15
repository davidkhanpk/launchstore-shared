export interface ButtonProps {
    text: string;
    url: string;
    openInNewTab: boolean;
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth: boolean;
    /**
     * Optional explicit colors — when EMPTY the variant resolves through the
     * theme's button.* tokens (e.g. button.primary.background), so changing
     * brand.primary restyles every CTA in the store.
     */
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    showIcon: boolean;
    iconPosition: 'left' | 'right';
    borderRadius?: string;
    shadow?: string;
    textAlign?: string;
    marginTop?: string;
    marginBottom?: string;
}
//# sourceMappingURL=button.types.d.ts.map