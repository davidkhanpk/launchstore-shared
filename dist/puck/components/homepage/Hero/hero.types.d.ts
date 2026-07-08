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
    height: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    contentAlignment: 'left' | 'center' | 'right';
    verticalAlignment: 'top' | 'center' | 'bottom';
    textColor: string;
    overlayOpacity: number;
    backgroundColor: string;
    backgroundGradient: boolean;
    gradientFrom: string;
    gradientTo: string;
}
//# sourceMappingURL=hero.types.d.ts.map