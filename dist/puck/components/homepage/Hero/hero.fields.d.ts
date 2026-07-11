/**
 * Puck field config for the Hero component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends these fields with custom widgets
 * (MediaPickerField, ColorField) — see `components/page-builder/config.ts`
 * in the editor project.
 */
import type { Field } from '@puckeditor/core';
import type { HeroSectionProps } from './hero.types';
export declare const heroFields: Record<Exclude<keyof HeroSectionProps, 'id'>, Field>;
//# sourceMappingURL=hero.fields.d.ts.map