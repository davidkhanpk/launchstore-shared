/**
 * Hero section props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface HeroSectionProps {
    /** Unique id used by Puck patch operations */
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    showPrimaryButton: boolean;
    primaryButtonText: string;
    primaryButtonLink: string;
    showSecondaryButton: boolean;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    showImage: boolean;
    imageUrl: string;
    imagePosition: 'left' | 'right' | 'background';
    imageAlt: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    textTransform?: string;
    textColor?: string;
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    gradientFrom?: string;
    gradientTo?: string;
    backgroundColor?: string;
    density?: string;
    contentWidth?: string;
    contentAlign?: string;
    verticalAlign?: string;
    minHeight?: string;
}
//# sourceMappingURL=hero.types.d.ts.map