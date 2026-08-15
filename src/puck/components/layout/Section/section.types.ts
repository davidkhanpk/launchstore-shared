export interface SectionProps {
  /** Outer spacing */
  marginTop?: string;
  marginBottom?: string;
  /** Background: scheme | image + overlay | gradient | color */
  backgroundScheme?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;
  /** Section layout semantics */
  density?: string;
  contentWidth?: string;
  contentAlign?: string;
  verticalAlign?: string;
  minHeight?: string;
  /** Surface */
  borderRadius?: string;
}
