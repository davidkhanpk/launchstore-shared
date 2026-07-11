export interface ButtonProps {
    text: string;
    url: string;
    openInNewTab: boolean;
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth: boolean;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    hoverTextColor: string;
    showIcon: boolean;
    iconPosition: 'left' | 'right';
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
    shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    alignment: 'left' | 'center' | 'right';
    marginTop: number;
    marginBottom: number;
}
//# sourceMappingURL=button.types.d.ts.map