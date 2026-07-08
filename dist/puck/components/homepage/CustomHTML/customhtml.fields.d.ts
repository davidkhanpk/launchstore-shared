/**
 * Puck field config for the CustomHTML component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends these fields with custom widgets
 * (ColorField, MediaPickerField) — see the wrapper file in
 * components/page-builder/components/homepage/CustomHTML.tsx.
 */
import type { Field } from '@puckeditor/core';
import type { CustomHTMLProps } from './customhtml.types';
export declare const customHtmlFields: Record<Exclude<keyof CustomHTMLProps, 'id'>, Field>;
//# sourceMappingURL=customhtml.fields.d.ts.map