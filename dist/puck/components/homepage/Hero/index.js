/**
 * Public re-exports for the Hero component.
 *
 * The editor (launchstore-frontend) imports `HeroSection` and `HeroSectionProps`
 * to wire into its Puck config (extending fields with custom widgets).
 *
 * The renderer (launchstore-storefront) imports `HeroSection` as-is.
 *
 * T-003 will add `hero.meta.ts` here and the registry will pick it up
 * automatically via the build:registry script.
 */
export { HeroSection } from './Hero';
export { heroFields } from './hero.fields';
export { heroMeta } from './hero.meta';
//# sourceMappingURL=index.js.map