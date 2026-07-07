import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { menuNavigationFields } from './menunavigation.fields';
import type {
  MenuNavigationProps,
  MenuNavigationLayout,
  MenuNavigationAlignment,
  MenuNavigationHoverEffect,
  SharedNavMenuItem,
} from './menunavigation.types';
import { resolveColor } from '../../../../theme/resolveColor';

const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FONT_SIZE: Record<NonNullable<MenuNavigationProps['fontSize']>, string> = {
  sm: '0.875rem', base: '1rem', lg: '1.125rem',
};
const FONT_WEIGHT: Record<NonNullable<MenuNavigationProps['fontWeight']>, number> = {
  normal: 400, medium: 500, semibold: 600, bold: 700,
};
const SHADOW: Record<NonNullable<MenuNavigationProps['dropdownShadow']>, string> = {
  sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl',
};
const RADIUS: Record<NonNullable<MenuNavigationProps['dropdownRadius']>, string> = {
  sm: 'rounded', md: 'rounded-lg', lg: 'rounded-xl', xl: 'rounded-2xl',
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

const getLabel = (item: SharedNavMenuItem): string => item.label || 'Untitled';

/**
 * Render a leaf dropdown item.
 */
const DropdownLeaf: React.FC<{
  item: SharedNavMenuItem;
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
 * Recursive dropdown item — items with children get a sub-panel
 * (right-side flyout), items without get a leaf.
 */
const DropdownItem: React.FC<{
  item: SharedNavMenuItem;
  depth: number;
  maxDepth: number;
  resolvedTextColor: string;
  fontSize: string;
  dropdownBg: string;
  dropdownBorder: string;
  shadowClass: string;
  radiusClass: string;
}> = ({ item, depth, maxDepth, resolvedTextColor, fontSize, dropdownBg, dropdownBorder, shadowClass, radiusClass }) => {
  const [open, setOpen] = useState(false);
  const visibleChildren = (item.children || []).filter((c) => c.isVisible);

  if (depth > maxDepth || visibleChildren.length === 0) {
    return (
      <div key={item.id} style={{ padding: '4px 0' }}>
        <DropdownLeaf item={item} resolvedTextColor={resolvedTextColor} fontSize={fontSize} />
      </div>
    );
  }

  return (
    <div
      key={item.id}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ padding: '4px 0' }}
    >
      <div
        className="flex items-center justify-between"
        style={{ color: resolvedTextColor, fontSize, cursor: 'pointer', padding: '4px 8px' }}
      >
        <span>{getLabel(item)}</span>
        <ChevronDown size={12} />
      </div>
      {open && (
        <div
          className={`absolute z-50 top-0 left-full ${shadowClass} ${radiusClass}`}
          style={{ backgroundColor: dropdownBg, border: `1px solid ${dropdownBorder}`, minWidth: '180px', padding: '4px 0' }}
        >
          {visibleChildren.map((child) => (
            <DropdownItem
              key={child.id}
              item={child}
              depth={depth + 1}
              maxDepth={maxDepth}
              resolvedTextColor={resolvedTextColor}
              fontSize={fontSize}
              dropdownBg={dropdownBg}
              dropdownBorder={dropdownBorder}
              shadowClass={shadowClass}
              radiusClass={radiusClass}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Top-level menu item. If it has children, hover opens a dropdown
 * panel below the trigger. If not, it's a plain link.
 */
const TopLevelItem: React.FC<{
  item: SharedNavMenuItem;
  resolvedTextColor: string;
  resolvedHoverColor: string;
  fontSize: string;
  fontWeight: number;
  hoverEffect: MenuNavigationHoverEffect;
  showArrow: boolean;
  dropdownStyle: MenuNavigationProps['dropdownStyle'];
  maxDepth: number;
  dropdownBg: string;
  dropdownBorder: string;
  shadowClass: string;
  radiusClass: string;
  onLinkClick?: () => void;
}> = ({ item, resolvedTextColor, resolvedHoverColor, fontSize, fontWeight, hoverEffect, showArrow, dropdownStyle, maxDepth, dropdownBg, dropdownBorder, shadowClass, radiusClass, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasMegaMenu = !!(item.megaMenu?.enabled && dropdownStyle === 'mega');
  const hasChildren = !!(item.children && item.children.length > 0);
  const hasDropdown = hasChildren && (hasMegaMenu || dropdownStyle === 'default');
  const visibleChildren = hasChildren ? (item.children || []).filter((c) => c.isVisible) : [];

  const trigger: React.CSSProperties = {
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
    transition: hoverEffect === 'color' ? `color 150ms ease` : undefined,
  };

  if (!hasDropdown) {
    return (
      <a
        href={item.url || '#'}
        target={item.openInNewTab ? '_blank' : undefined}
        rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
        onClick={onLinkClick}
        className={hoverClass(hoverEffect)}
        style={{ ...trigger, textDecoration: 'none', color: resolvedTextColor, fontSize, fontWeight }}
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
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={hoverClass(hoverEffect)}
        style={trigger}
        aria-expanded={isOpen}
        onMouseEnter={(e) => { if (hoverEffect === 'color') e.currentTarget.style.color = resolvedHoverColor; }}
        onMouseLeave={(e) => { if (hoverEffect === 'color') e.currentTarget.style.color = resolvedTextColor; }}
      >
        {getLabel(item)}
        {showArrow && <ChevronDown />}
      </button>
      {isOpen && (
        <div
          className={`absolute z-50 top-full left-1/2 ${shadowClass} ${radiusClass}`}
          style={{
            backgroundColor: dropdownBg,
            border: `1px solid ${dropdownBorder}`,
            minWidth: '220px',
            padding: '8px',
            transform: 'translateX(-50%)',
            marginTop: '4px',
          }}
        >
          {visibleChildren.map((child) => (
            <DropdownItem
              key={child.id}
              item={child}
              depth={2}
              maxDepth={maxDepth}
              resolvedTextColor={resolvedTextColor}
              fontSize={fontSize}
              dropdownBg={dropdownBg}
              dropdownBorder={dropdownBorder}
              shadowClass={shadowClass}
              radiusClass={radiusClass}
            />
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
    menuHandle: 'default',
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
  },
  render: (rawProps: any) => {
    const {
      menuData, layout, alignment, hoverEffect, textColor, hoverColor,
      fontSize, fontWeight, showDropdownArrows, dropdownStyle, maxDepth,
      dropdownBackground, dropdownBorder, dropdownShadow, dropdownRadius,
    } = rawProps as MenuNavigationProps;

    const items: SharedNavMenuItem[] = menuData || [];
    const visibleItems = items.filter((it) => it.isVisible).sort((a, b) => a.position - b.position);

    const resolvedTextColor = resolveColor(textColor) || '#111827';
    const resolvedHoverColor = resolveColor(hoverColor) || '#3b82f6';
    const resolvedDropdownBg = resolveColor(dropdownBackground || '#ffffff') || '#ffffff';
    const resolvedDropdownBorder = resolveColor(dropdownBorder || '#e5e7eb') || '#e5e7eb';
    const fs = FONT_SIZE[fontSize] || FONT_SIZE.base;
    const fw = FONT_WEIGHT[fontWeight] || FONT_WEIGHT.medium;
    const shadowClass = SHADOW[dropdownShadow || 'lg'];
    const radiusClass = RADIUS[dropdownRadius || 'md'];
    const maxD = typeof maxDepth === 'string' ? parseInt(maxDepth, 10) : (maxDepth as unknown as number);

    return (
      <nav className={`flex ${LAYOUT[layout || 'horizontal']} ${ALIGN[alignment || 'center']}`}>
        <div className={`flex ${LAYOUT[layout || 'horizontal']} gap-2`}>
          {visibleItems.map((item) => (
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
              maxDepth={isNaN(maxD) ? 3 : maxD}
              dropdownBg={resolvedDropdownBg}
              dropdownBorder={resolvedDropdownBorder}
              shadowClass={shadowClass}
              radiusClass={radiusClass}
            />
          ))}
        </div>
      </nav>
    );
  },
};

export default MenuNavigation;
