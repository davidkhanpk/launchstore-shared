/**
 * Puck field config for the Newsletter component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends these fields with custom widgets
 * (ColorField, MediaPickerField) — see the wrapper file in
 * components/page-builder/components/homepage/Newsletter.tsx.
 */
import type { Field } from '@puckeditor/core';
import type { NewsletterProps } from './newsletter.types';
export declare const newsletterFields: Record<Exclude<keyof NewsletterProps, 'id'>, Field>;
//# sourceMappingURL=newsletter.fields.d.ts.map