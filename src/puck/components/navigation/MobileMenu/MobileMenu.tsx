import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { mobileMenuFields } from './mobilemenu.fields';
import type { MobileMenuProps, MobileMenuThemeResolved, SharedMobileMenuItem } from './mobilemenu.types';
import { resolveColor } from '../../../../theme/resolveColor';
import { MobileMenuItem } from './MobileMenuItem';

const X_SVG = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const STAGE_OPACITY = 0.5;
const FALLBACK = {
  background: '#ffffff',
  text: '#111827',
  border: '#e5e7eb',
  subText: '#6b7280',
  accordionBackground: '#f9fafb',
  titleFontSize: '16px',
  padding: '16px',
  itemPadding: '12px 16px',
};

const resolveTheme = (t: MobileMenuProps['theme'] | undefined): MobileMenuThemeResolved => ({
  background: resolveColor(t?.background || FALLBACK.background) || FALLBACK.background,
  text: resolveColor(t?.text || FALLBACK.text) || FALLBACK.text,
  border: resolveColor(t?.border || FALLBACK.border) || FALLBACK.border,
  subText: resolveColor(t?.subText || FALLBACK.subText) || FALLBACK.subText,
  accordionBackground: resolveColor(t?.accordionBackground || FALLBACK.accordionBackground) || FALLBACK.accordionBackground,
  titleFontSize: t?.titleFontSize || FALLBACK.titleFontSize,
  padding: t?.padding || FALLBACK.padding,
  itemPadding: t?.itemPadding || FALLBACK.itemPadding,
});

/**
 * Filter top-level items (no parent).
 * NOTE: EnrichedMenuItem has parentId; SharedMobileMenuItem doesn't.
 * We accept both: items with parentId are filtered.
 */
const filterTopLevel = (items: SharedMobileMenuItem[]): SharedMobileMenuItem[] =>
  items.filter((it: any) => !('parentId' in it) || !it.parentId || it.parentId == null);

export const MobileMenu: ComponentConfig<MobileMenuProps> = {
  label: 'Mobile Menu',
  fields: mobileMenuFields as ComponentConfig<MobileMenuProps>['fields'],
  defaultProps: {
    items: [],
    theme: {},
    isOpen: false,
    onClose: () => {},
    drawerMaxWidth: '400px',
    animationDirection: 'left',
  },
  render: (rawProps: any) => {
    const { items, theme, isOpen, onClose, drawerMaxWidth, animationDirection } = rawProps as MobileMenuProps & {
      drawerMaxWidth?: string;
      animationDirection?: 'left' | 'right';
    };
    const tokens = resolveTheme(theme);
    const visibleItems = filterTopLevel(items || []);
    const slideOn = 'translateX(0)';
    const slideOff = animationDirection === 'right' ? 'translateX(100%)' : 'translateX(-100%)';

    if (!isOpen) return <></>;

    return (
      <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div
          className="fixed inset-0"
          style={{ backgroundColor: '#000000', opacity: STAGE_OPACITY, transition: 'opacity 300ms' }}
          onClick={onClose}
          aria-hidden="true"
        />
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-y-0 ${animationDirection === 'right' ? 'right-0' : 'left-0'} flex max-w-full pointer-events-auto`}>
            <div
              style={{
                width: '100vw',
                maxWidth: drawerMaxWidth || '400px',
                height: '100%',
                backgroundColor: tokens.background,
                color: tokens.text,
                padding: tokens.padding,
                display: 'flex',
                flexDirection: 'column',
                transform: isOpen ? slideOn : slideOff,
                transition: 'transform 300ms ease-in-out',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${tokens.border}` }}>
                <div style={{ fontSize: tokens.titleFontSize, fontWeight: 600 }}>Menu</div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: tokens.text }}
                >
                  <X_SVG size={24} />
                </button>
              </div>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {visibleItems.map((item: SharedMobileMenuItem) => (
                  <MobileMenuItem key={item.id} item={item} theme={tokens} onLinkClick={onClose} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export default MobileMenu;
