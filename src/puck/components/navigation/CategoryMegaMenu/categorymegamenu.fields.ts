import type { Field } from '@puckeditor/core';

/**
 * CategoryMegaMenu is the mega-menu panel rendered inside MenuNavigation
 * (when dropdownStyle is "mega") for items with megaMenu.enabled + enriched
 * category data. It is NOT registered as a Puck component (not draggable from
 * the editor palette); its types are exported so consumer wrappers can build
 * the data shape from EnrichedMenuItem + Theme.
 *
 * No Puck fields needed (not a Puck component).
 */
export const categoryMegaMenuFields = {} as Record<string, Field>;
