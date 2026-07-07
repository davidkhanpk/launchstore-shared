import type { Field } from '@puckeditor/core';

/**
 * CategoryMegaMenu is a sub-renderer used inside MenuNavigationRenderer
 * for items with megaMenu.enabled + enriched category data. It is NOT
 * registered as a Puck component (not draggable from the editor
 * palette), but its types are exported so consumer wrappers can
 * build the data shape from EnrichedMenuItem + Theme.
 *
 * No Puck fields needed (not a Puck component).
 */
export const categoryMegaMenuFields = {} as Record<string, Field>;
