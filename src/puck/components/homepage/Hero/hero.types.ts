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

  // Typography (shared design-system fields — title size/weight, subtitle transform/tracking)
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textColor?: string;

  // Background (shared section control model: image > gradient > scheme > color)
  backgroundScheme?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;

  // Section layout (shared)
  density?: string;
  contentWidth?: string;
  contentAlign?: string;
  verticalAlign?: string;
  minHeight?: string;
}
