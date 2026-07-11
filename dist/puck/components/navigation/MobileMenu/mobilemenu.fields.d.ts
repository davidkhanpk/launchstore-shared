import type { Field } from '@puckeditor/core';
/**
 * MobileMenu is a RENDERED-FROM-DATA component: in the Puck editor
 * it shows an empty placeholder (no menu data bound), but in the
 * live renderer the consumer wrapper injects `items` + `theme` from
 * the page's navigation/menu config before passing the props down.
 *
 * Therefore the Puck fields are intentionally minimal — only
 * cosmetic overrides (drawer width, animation direction). The
 * `items` and `theme` props are populated at render-time via the
 * consumer wrapper, not via the editor panel.
 */
export declare const mobileMenuFields: Record<string, Field>;
export type { SharedMobileMenuItem, SharedMobileMenuTheme } from './mobilemenu.types';
//# sourceMappingURL=mobilemenu.fields.d.ts.map