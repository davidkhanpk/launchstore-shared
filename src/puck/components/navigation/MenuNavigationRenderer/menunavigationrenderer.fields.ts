import type { Field } from '@puckeditor/core';

/**
 * MenuNavigationRenderer is a sub-renderer used by HeaderRenderer
 * and storefront layout to render the live navigation menu with
 * Medusa enrichment data injected at server-side. NOT a Puck
 * component (no editor fields), but exported for consumers.
 */
export const menuNavigationRendererFields = {} as Record<string, Field>;
