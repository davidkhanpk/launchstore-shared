import React from 'react';
import type { CategoryMegaMenuProps } from './categorymegamenu.types';
/**
 * CategoryMegaMenu — the mega-menu overlay panel rendered inside MenuNavigation
 * when dropdownStyle is 'mega' + the item has an enriched category.
 *
 * Anatomy (e-commerce best practice, post NAV-H5):
 *  - 2-4 columns of subcategory links with uppercase column headings
 *  - optional per-link description (truncated)
 *  - a rightmost featured/promo cell (banner image as a card with CTA) when
 *    showImage + imageUrl are set
 *  - viewport-edge detection: the consumer (MenuNavigation) centers the panel
 *    under the trigger via translateX(-50%); this panel reports its width via
 *    its own min/max so the consumer can flip it if needed
 *  - styled entirely via theme tokens (no hardcoded colors)
 */
export declare const CategoryMegaMenu: React.FC<CategoryMegaMenuProps>;
export default CategoryMegaMenu;
//# sourceMappingURL=CategoryMegaMenu.d.ts.map