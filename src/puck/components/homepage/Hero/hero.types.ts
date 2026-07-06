/**
 * Hero section props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface HeroSectionProps {
  /** Unique id used by Puck patch operations */
  id?: string;

  // Content
  title: string;
  subtitle: string;
  description: string;

  // Primary CTA
  showPrimaryButton: boolean;
  primaryButtonText: string;
  primaryButtonLink: string;

  // Secondary CTA
  showSecondaryButton: boolean;
  secondaryButtonText: string;
  secondaryButtonLink: string;

  // Image
  showImage: boolean;
  imageUrl: string;
  imagePosition: 'left' | 'right' | 'background';
  imageAlt: string;

  // Layout
  height: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  contentAlignment: 'left' | 'center' | 'right';
  verticalAlignment: 'top' | 'center' | 'bottom';
  textColor: string;
  overlayOpacity: number;

  // Styling
  backgroundColor: string;
  backgroundGradient: boolean;
  gradientFrom: string;
  gradientTo: string;
}
