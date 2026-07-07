import React, { useState } from 'react';
import type { MobileMenuItemProps, SharedMobileMenuItem, MobileMenuThemeResolved } from './mobilemenu.types';
import { resolveColor } from '../../../../theme/resolveColor';

const CHEVRON_SVG = ({ size = 20, rotated }: { size?: number; rotated?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    style={{ transform: rotated ? 'rotate(90deg)' : 'none', transition: 'transform 200ms' }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/**
 * MobileMenuItem — single menu row with optional accordion for
 * children OR mega-menu subcategories. Stateless re: open/closed
 * (each row manages its own state).
 */
export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  item, theme, onLinkClick, depth = 0,
}) => {
  const hasMega = !!(item.megaMenu?.enabled && item.megaMenu.subcategories.length > 0);
  const hasChildren = !!(item.children && item.children.length > 0);
  const [open, setOpen] = useState(false);

  const baseItemStyle: React.CSSProperties = {
    padding: theme.itemPadding,
    color: resolveColor(theme.text),
    fontSize: '14px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${resolveColor(theme.border)}`,
    marginLeft: `${depth * 16}px`,
  };

  const subLinkStyle: React.CSSProperties = {
    padding: '8px 16px 8px 32px',
    color: resolveColor(theme.subText),
    fontSize: '13px',
    textDecoration: 'none',
    display: 'block',
    borderBottom: `1px solid ${resolveColor(theme.border)}`,
  };

  const renderLink = () => (
    <a
      href={item.url || '#'}
      target={item.openInNewTab ? '_blank' : undefined}
      rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
      onClick={onLinkClick}
      style={{ ...baseItemStyle, width: '100%' }}
    >
      <span>{item.label}</span>
    </a>
  );

  if (!hasMega && !hasChildren) return renderLink();

  const children = hasMega ? item.megaMenu!.subcategories.slice(0, item.megaMenu!.subcategoryLimit || 12) : [];
  const subcategoryLinks = hasMega
    ? [
        <a
          key={`${item.id}-all`}
          href={item.url || '#'}
          onClick={onLinkClick}
          style={{ ...subLinkStyle, fontWeight: 600, color: resolveColor(theme.text) }}
        >
          {`View All ${item.label}`}
        </a>,
        ...children.map((sub) => (
          <a key={sub.id} href={sub.url} onClick={onLinkClick} style={subLinkStyle}>
            {sub.label}
          </a>
        )),
      ]
    : (item.children || []).map((child) => (
        <div key={child.id}>
          <MobileMenuItem item={child as SharedMobileMenuItem} theme={theme} onLinkClick={onLinkClick} depth={depth + 1} />
        </div>
      ));

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          ...baseItemStyle,
          width: '100%',
          background: 'none',
          border: 'none',
          borderBottom: `1px solid ${resolveColor(theme.border)}`,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span>{item.label}</span>
        <span style={{ color: resolveColor(theme.subText), marginLeft: 8 }}>
          <CHEVRON_SVG rotated={open} />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 300ms ease',
          backgroundColor: hasMega ? resolveColor(theme.accordionBackground) : 'transparent',
        }}
      >
        {subcategoryLinks}
      </div>
    </div>
  );
};

export default MobileMenuItem;
