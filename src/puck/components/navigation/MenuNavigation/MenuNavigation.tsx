import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { menuNavigationFields } from './menunavigation.fields';
import type {
  MenuNavigationProps,
  MenuNavigationLayout,
  MenuNavigationAlignment,
  MenuNavigationHoverEffect,
  SharedEnrichedMenuItem,
} from './menunavigation.types';
import { resolveColor } from '../../../../theme/resolveColor';
import { CategoryMegaMenu } from '../CategoryMegaMenu/CategoryMegaMenu';
import type { CategoryMegaMenuProps, SharedMegaMenuTheme } from '../CategoryMegaMenu/categorymegamenu.types';

const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Hamburger = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SearchIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const FONT_SIZE: Record<NonNullable<MenuNavigationProps['fontSize']>, string> = {
  sm: '0.875rem', base: '1rem', lg: '1.125rem',
};
const FONT_WEIGHT: Record<NonNullable<MenuNavigationProps['fontWeight']>, number> = {
  normal: 400, medium: 500, semibold: 600, bold: 700,
};
const SHADOW: Record<NonNullable<MenuNavigationProps['dropdownShadow']>, string> = {
  sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.1)', lg: '0 10px 15px rgba(0,0,0,0.1)', xl: '0 20px 25px rgba(0,0,0,0.15)',
};
const RADIUS: Record<NonNullable<MenuNavigationProps['dropdownRadius']>, string> = {
  sm: '4px', md: '8px', lg: '12px', xl: '16px',
};
const LAYOUT: Record<MenuNavigationLayout, string> = {
  horizontal: 'flex-row', vertical: 'flex-col', stacked: 'flex-col',
};
const ALIGN: Record<MenuNavigationAlignment, string> = {
  left: 'justify-start', center: 'justify-center', right: 'justify-end',
};

const hoverClass = (effect: MenuNavigationHoverEffect): string => {
  if (effect === 'underline') return 'hover:underline';
  if (effect === 'background') return 'hover:bg-gray-100 rounded';
  return '';
};

const getLabel = (item: SharedEnrichedMenuItem): string => item.label || 'Untitled';

/**
 * useIsMobile — SSR-safe media-query hook. Returns true below `breakpoint` px.
 * Used to switch between desktop nav bar and mobile hamburger drawer.
 */
function useIsMobile(breakpoint: number): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [breakpoint]);
  return isMobile;
}

/**
 * Map a top-level menu item's megaMenu config + enrichedData into the
 * CategoryMegaMenuProps shape. Returns null if the item has no enriched
 * category (the mega panel can't render without it).
 */
function toMegaMenuProps(
  item: SharedEnrichedMenuItem,
  megaTheme?: SharedMegaMenuTheme,
  onLinkClick?: () => void,
): CategoryMegaMenuProps | null {
  if (!item.enrichedData?.category) return null;
  return {
    item: {
      id: item.id,
      label: getLabel(item),
      url: item.enrichedData.resolvedUrl || item.url,
      openInNewTab: item.openInNewTab,
      enrichedData: item.enrichedData,
    },
    megaMenu: {
      enabled: true,
      columns: item.megaMenu?.columns,
      showImage: item.megaMenu?.showImage,
      imageUrl: item.megaMenu?.imageUrl,
      subcategoryLimit: item.megaMenu?.subcategoryLimit,
      showDescriptions: item.megaMenu?.showDescriptions,
      showSubcategories: item.megaMenu?.showSubcategories,
    },
    theme: megaTheme,
    onLinkClick,
  };
}

/**
 * Recursive dropdown leaf (default dropdown style, nested flyout).
 * Plain link with no further nesting.
 */
const DropdownLeaf: React.FC<{
  item: SharedEnrichedMenuItem;
  resolvedTextColor: string;
  fontSize: string;
  onLinkClick?: () => void;
}> = ({ item, resolvedTextColor, fontSize, onLinkClick }) => (
  <a
    href={item.url || '#'}
    target={item.openInNewTab ? '_blank' : undefined}
    rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
    onClick={onLinkClick}
    style={{ color: resolvedTextColor, fontSize, textDecoration: 'none', display: 'block', padding: '8px 12px' }}
  >
    {getLabel(item)}
  </a>
);

/**
 * Recursive dropdown item — items with children get a right-side flyout
 * (manual hover-intent, matching TopLevelItem's pattern). Items without
 * get a leaf.
 */
const DropdownItem: React.FC<{
  item: SharedEnrichedMenuItem;
  resolvedTextColor: string;
  fontSize: string;
  dropdownBg: string;
  dropdownBorder: string;
  shadow: string;
  radius: string;
  onLinkClick?: () => void;
}> = ({ item, resolvedTextColor, fontSize, dropdownBg, dropdownBorder, shadow, radius, onLinkClick }) => {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);
  const visibleChildren = (item.children || []).filter((c) => c.isVisible);

  if (visibleChildren.length === 0) {
    return <DropdownLeaf item={item} resolvedTextColor={resolvedTextColor} fontSize={fontSize} onLinkClick={onLinkClick} />;
  }
  return (
    <div
      className="relative"
      onMouseEnter={() => { if (openTimer.current) clearTimeout(openTimer.current); openTimer.current = setTimeout(() => setOpen(true), 300); }}
      onMouseLeave={() => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpen(false), 300); }}
    >
      <div className="flex items-center justify-between" style={{ color: resolvedTextColor, fontSize, cursor: 'pointer', padding: '4px 8px' }}>
        <span>{getLabel(item)}</span>
        <ChevronDown size={12} />
      </div>
      {open && (
        <div
          className="absolute z-50 top-0 left-full"
          style={{ backgroundColor: dropdownBg, border: `1px solid ${dropdownBorder}`, boxShadow: shadow, borderRadius: radius, minWidth: '180px', padding: '4px 0' }}
        >
          {visibleChildren.map((child) => (
            <DropdownItem
              key={child.id}
              item={child}
              resolvedTextColor={resolvedTextColor}
              fontSize={fontSize}
              dropdownBg={dropdownBg}
              dropdownBorder={dropdownBorder}
              shadow={shadow}
              radius={radius}
              onLinkClick={onLinkClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Top-level desktop item. Uses Headless UI Popover for hover + keyboard.
 * - dropdownStyle 'mega' + item.megaMenu.enabled + enrichedData.category
 *   → CategoryMegaMenu panel.
 * - otherwise, children → recursive DropdownItem flyout.
 * - no children → plain link.
 *
 * Hover-intent: 300ms open/close delay + forgiving mouse path (the panel
 * sits flush under the trigger with no gap, killing diagonal-flicker).
 * Keyboard: PopoverButton is a real focusable <button> with aria-expanded;
 * Enter/Space/Down opens, Escape closes (all via Headless UI defaults).
 */
const TopLevelItem: React.FC<{
  item: SharedEnrichedMenuItem;
  resolvedTextColor: string;
  resolvedHoverColor: string;
  fontSize: string;
  fontWeight: number;
  hoverEffect: MenuNavigationHoverEffect;
  showArrow: boolean;
  dropdownStyle: MenuNavigationProps['dropdownStyle'];
  dropdownBg: string;
  dropdownBorder: string;
  shadow: string;
  radius: string;
  megaTheme?: SharedMegaMenuTheme;
  onLinkClick?: () => void;
}> = ({ item, resolvedTextColor, resolvedHoverColor, fontSize, fontWeight, hoverEffect, showArrow, dropdownStyle, dropdownBg, dropdownBorder, shadow, radius, megaTheme, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Panel alignment: 'center' | 'left' | 'right'. Starts centered; the layout
  // effect flips it when the centered panel would overflow the viewport edge.
  const [panelAlign, setPanelAlign] = useState<'center' | 'left' | 'right'>('center');

  const cancelTimers = () => {
    if (openTimer.current) { clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  // Hover-intent: 300ms open delay, 300ms close delay (forgiving).
  const scheduleOpen = () => { cancelTimers(); openTimer.current = setTimeout(() => setIsOpen(true), 300); };
  const scheduleClose = () => { cancelTimers(); closeTimer.current = setTimeout(() => setIsOpen(false), 300); };
  useEffect(() => () => cancelTimers(), []);

  const megaProps = (dropdownStyle === 'mega' && item.megaMenu?.enabled)
    ? toMegaMenuProps(item, megaTheme, onLinkClick)
    : null;
  const visibleChildren = (item.children || []).filter((c) => c.isVisible);
  const hasDropdown = !!(megaProps || (visibleChildren.length > 0 && dropdownStyle === 'default'));

  // Viewport-edge detection: when the panel opens, measure whether the
  // centered position would overflow the viewport and flip alignment so the
  // panel stays on-screen (NAV-H5). Runs only on open (isOpen is the trigger).
  useLayoutEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    if (!panel || !trigger) return;
    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const vw = window.innerWidth;
    const margin = 8;
    // Centered panel's left edge if we keep translateX(-50%):
    const centeredLeft = triggerRect.left + triggerRect.width / 2 - panelRect.width / 2;
    const centeredRight = centeredLeft + panelRect.width;
    if (centeredLeft < margin) {
      setPanelAlign('left'); // would overflow left → anchor to trigger's left edge
    } else if (centeredRight > vw - margin) {
      setPanelAlign('right'); // would overflow right → anchor to trigger's right edge
    } else {
      setPanelAlign('center');
    }
  }, [isOpen]);

  const panelPositionStyle: React.CSSProperties = panelAlign === 'left'
    ? { left: 0, transform: 'none' }
    : panelAlign === 'right'
      ? { left: 'auto', right: 0, transform: 'none' }
      : { left: '50%', transform: 'translateX(-50%)' };

  const triggerStyle: React.CSSProperties = {
    color: resolvedTextColor,
    fontSize,
    fontWeight,
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: hoverEffect === 'color' ? 'color 150ms ease' : undefined,
  };

  if (!hasDropdown) {
    return (
      <a
        href={item.url || '#'}
        target={item.openInNewTab ? '_blank' : undefined}
        rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
        onClick={onLinkClick}
        className={hoverClass(hoverEffect)}
        style={{ ...triggerStyle, textDecoration: 'none' }}
        onMouseEnter={(e) => { if (hoverEffect === 'color') e.currentTarget.style.color = resolvedHoverColor; }}
        onMouseLeave={(e) => { if (hoverEffect === 'color') e.currentTarget.style.color = resolvedTextColor; }}
      >
        {getLabel(item)}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        className={hoverClass(hoverEffect)}
        style={triggerStyle}
        aria-expanded={isOpen}
        aria-haspopup={megaProps ? 'dialog' : 'menu'}
        onClick={() => setIsOpen((v) => !v)}
        onMouseEnter={(e) => { if (hoverEffect === 'color') e.currentTarget.style.color = resolvedHoverColor; }}
        onMouseLeave={(e) => { if (hoverEffect === 'color') e.currentTarget.style.color = resolvedTextColor; }}
      >
        {getLabel(item)}
        {showArrow && <ChevronDown />}
      </button>
      {isOpen && (
        <div
          ref={panelRef}
          className="absolute z-50 top-full"
          style={{
            ...panelPositionStyle,
            backgroundColor: dropdownBg,
            border: `1px solid ${dropdownBorder}`,
            boxShadow: shadow,
            borderRadius: radius,
            // Flush under the trigger (no gap) — kills diagonal-flicker.
            marginTop: megaProps ? '0' : '4px',
            padding: megaProps ? 0 : '8px',
            minWidth: megaProps ? 'auto' : '220px',
          }}
        >
          {megaProps ? (
            <CategoryMegaMenu {...megaProps} />
          ) : (
            visibleChildren.map((child) => (
              <DropdownItem
                key={child.id}
                item={child}
                resolvedTextColor={resolvedTextColor}
                fontSize={fontSize}
                dropdownBg={dropdownBg}
                dropdownBorder={dropdownBorder}
                shadow={shadow}
                radius={radius}
                onLinkClick={onLinkClick}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Mobile drawer — Headless UI Dialog (focus trap, Escape, scroll-lock, portal).
 * Real slide-in animation via Transition. Optional in-drawer search input pinned to top.
 */
const MobileMenuDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: SharedEnrichedMenuItem[];
  resolvedTextColor: string;
  dropdownBg: string;
  dropdownBorder: string;
  searchPlaceholder?: string;
  onSearchSubmit?: (q: string) => void;
}> = ({ isOpen, onClose, items, resolvedTextColor, dropdownBg, dropdownBorder, searchPlaceholder, onSearchSubmit }) => {
  const [query, setQuery] = useState('');
  const visibleItems = items.filter((it) => it.isVisible && (!('parentId' in it) || !it.parentId)).sort((a, b) => a.position - b.position);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit && query.trim()) {
      onSearchSubmit(query.trim());
      onClose();
    }
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <TransitionChild
          as={React.Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </TransitionChild>
        {/* Panel */}
        <TransitionChild
          as={React.Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-y-0 left-0 flex max-w-full">
            <DialogPanel
              style={{
                width: '100vw',
                maxWidth: '400px',
                height: '100%',
                backgroundColor: dropdownBg,
                color: resolvedTextColor,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: `1px solid ${dropdownBorder}` }}>
                <DialogTitle style={{ fontSize: '16px', fontWeight: 600 }}>Menu</DialogTitle>
                <button type="button" onClick={onClose} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: resolvedTextColor }}>
                  <XIcon size={24} />
                </button>
              </div>
              {searchPlaceholder && (
                <form onSubmit={handleSubmit} style={{ padding: '12px 16px', borderBottom: `1px solid ${dropdownBorder}` }}>
                  <label className="sr-only" htmlFor="mobile-nav-search">Search</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', border: `1px solid ${dropdownBorder}`, borderRadius: '8px' }}>
                    <SearchIcon size={18} />
                    <input
                      id="mobile-nav-search"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={searchPlaceholder}
                      style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: resolvedTextColor, fontSize: '14px' }}
                    />
                  </div>
                </form>
              )}
              <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }} aria-label="Mobile">
                {visibleItems.map((item) => {
                  const childVisible = (item.children || []).filter((c) => c.isVisible);
                  if (childVisible.length === 0) {
                    return (
                      <a
                        key={item.id}
                        href={item.url || '#'}
                        onClick={onClose}
                        style={{ display: 'block', padding: '12px 16px', color: resolvedTextColor, textDecoration: 'none' }}
                      >
                        {getLabel(item)}
                      </a>
                    );
                  }
                  return <MobileAccordionItem key={item.id} item={item} resolvedTextColor={resolvedTextColor} onLinkClick={onClose} />;
                })}
              </nav>
            </DialogPanel>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

/**
 * Accordion row for nested mobile items (one level — keep mobile simple).
 */
const MobileAccordionItem: React.FC<{
  item: SharedEnrichedMenuItem;
  resolvedTextColor: string;
  onLinkClick?: () => void;
}> = ({ item, resolvedTextColor, onLinkClick }) => {
  const [open, setOpen] = useState(false);
  const childVisible = (item.children || []).filter((c) => c.isVisible);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'none', border: 'none', color: resolvedTextColor, cursor: 'pointer', fontSize: '14px' }}
      >
        <span>{getLabel(item)}</span>
        <ChevronDown size={14} />
      </button>
      {open && (
        <div style={{ marginLeft: '16px' }}>
          {childVisible.map((c) => (
            <a
              key={c.id}
              href={c.url || '#'}
              onClick={onLinkClick}
              style={{ display: 'block', padding: '10px 16px', color: resolvedTextColor, textDecoration: 'none', fontSize: '13px' }}
            >
              {getLabel(c)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const MenuNavigation: ComponentConfig<MenuNavigationProps> = {
  label: 'Menu Navigation',
  fields: menuNavigationFields as ComponentConfig<MenuNavigationProps>['fields'],
  defaultProps: {
    menuHandle: '',
    layout: 'horizontal',
    alignment: 'center',
    hoverEffect: 'underline',
    textColor: '#111827',
    hoverColor: '#3b82f6',
    fontSize: 'base',
    fontWeight: 'medium',
    showDropdownArrows: true,
    dropdownStyle: 'default',
    maxDepth: '3',
    menuData: [],
    dropdownBackground: '#ffffff',
    dropdownBorder: '#e5e7eb',
    dropdownShadow: 'lg',
    dropdownRadius: 'md',
    mobileBreakpoint: 768,
    mobileSearchPlaceholder: 'Search products…',
  },
  render: (rawProps: any) => {
    const {
      menuData, layout, alignment, hoverEffect, textColor, hoverColor,
      fontSize, fontWeight, showDropdownArrows, dropdownStyle,
      dropdownBackground, dropdownBorder, dropdownShadow, dropdownRadius,
      mobileBreakpoint, mobileSearchPlaceholder, theme,
    } = rawProps as MenuNavigationProps;

    const items: SharedEnrichedMenuItem[] = menuData || [];
    const visibleTopLevel = items
      .filter((it) => it.isVisible && (!('parentId' in it) || !it.parentId))
      .sort((a, b) => a.position - b.position);

    const resolvedTextColor = resolveColor(textColor) || '#111827';
    const resolvedHoverColor = resolveColor(hoverColor) || '#3b82f6';
    const resolvedDropdownBg = resolveColor(dropdownBackground || '#ffffff') || '#ffffff';
    const resolvedDropdownBorder = resolveColor(dropdownBorder || '#e5e7eb') || '#e5e7eb';
    const fs = FONT_SIZE[fontSize] || FONT_SIZE.base;
    const fw = FONT_WEIGHT[fontWeight] || FONT_WEIGHT.medium;
    const shadow = SHADOW[dropdownShadow || 'lg'];
    const radius = RADIUS[dropdownRadius || 'md'];
    // Mega-menu theme: project SharedMenuNavTheme.megaMenu → SharedMegaMenuTheme.
    const megaTheme: SharedMegaMenuTheme | undefined = theme?.megaMenu ? {
      background: theme.megaMenu.background,
      linkText: theme.megaMenu.linkText,
      borderRadius: theme.effects?.borderRadius?.megaMenu,
      boxShadow: theme.effects?.shadow?.megaMenu,
    } : undefined;

    const bp = mobileBreakpoint || 768;
    const isMobile = useIsMobile(bp);
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Mobile: hamburger → drawer.
    if (isMobile) {
      return (
        <>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: resolvedTextColor }}
          >
            <Hamburger size={24} />
          </button>
          <MobileMenuDrawer
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            items={items}
            resolvedTextColor={resolvedTextColor}
            dropdownBg={resolvedDropdownBg}
            dropdownBorder={resolvedDropdownBorder}
            searchPlaceholder={mobileSearchPlaceholder}
          />
        </>
      );
    }

    // Desktop: nav bar.
    return (
      <nav aria-label="Main" className={`flex ${LAYOUT[layout || 'horizontal']} ${ALIGN[alignment || 'center']}`}>
        <div className={`flex ${LAYOUT[layout || 'horizontal']} gap-2`}>
          {visibleTopLevel.map((item) => (
            <TopLevelItem
              key={item.id}
              item={item}
              resolvedTextColor={resolvedTextColor}
              resolvedHoverColor={resolvedHoverColor}
              fontSize={fs}
              fontWeight={fw}
              hoverEffect={hoverEffect || 'underline'}
              showArrow={!!showDropdownArrows}
              dropdownStyle={dropdownStyle || 'default'}
              dropdownBg={resolvedDropdownBg}
              dropdownBorder={resolvedDropdownBorder}
              shadow={shadow}
              radius={radius}
              megaTheme={megaTheme}
            />
          ))}
        </div>
      </nav>
    );
  },
};

export default MenuNavigation;
