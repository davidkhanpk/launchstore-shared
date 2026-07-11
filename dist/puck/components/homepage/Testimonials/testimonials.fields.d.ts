/**
 * Puck field config for the Testimonials component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends these fields with custom widgets
 * (ColorField for the color inputs) — see the wrapper file in
 * components/page-builder/components/homepage/Testimonials.tsx.
 */
import type { Field } from '@puckeditor/core';
import type { TestimonialsProps } from './testimonials.types';
export declare const testimonialsFields: Record<Exclude<keyof TestimonialsProps, 'id'>, Field>;
//# sourceMappingURL=testimonials.fields.d.ts.map