import React, { useState, useEffect } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { accountButtonFields } from './accountbutton.fields';
import type { AccountButtonProps, AccountButtonIconSize, AccountButtonStyle, AccountCustomer } from './accountbutton.types';
import { resolveColor } from '../../../../theme/resolveColor';

const UserSvg = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

const SIZE_MAP: Record<AccountButtonIconSize, number> = { sm: 20, md: 24, lg: 28 };
const STYLE_CLASS: Record<AccountButtonStyle, string> = {
  minimal: 'p-2 rounded-full hover:bg-gray-100',
  outlined: 'p-2 border-2 rounded-full hover:bg-gray-100',
  filled: 'p-2 rounded-full',
};

const initialsOf = (customer: AccountCustomer | null | undefined): string | null => {
  if (!customer) return null;
  const composed = `${customer.first_name?.[0] ?? ''}${customer.last_name?.[0] ?? ''}`.toUpperCase();
  if (composed) return composed;
  return (customer.email?.[0] ?? '?').toUpperCase();
};

export const AccountButton: ComponentConfig<AccountButtonProps> = {
  label: 'Account Button',
  fields: accountButtonFields as ComponentConfig<AccountButtonProps>['fields'],
  defaultProps: {
    showLabel: false, label: 'Account', iconSize: 'md',
    iconColor: '#000000', hoverColor: '#3b82f6', style: 'minimal',
    linkTo: '/account', signedInLink: '/account',
    showWhenSignedOut: true, showWhenSignedIn: true,
  },
  render: (rawProps: any) => {
    const {
      showLabel, label, iconSize, iconColor, hoverColor, style,
      linkTo, signedInLink, showWhenSignedOut, showWhenSignedIn, checkAuth,
    } = rawProps as AccountButtonProps;

    const [isHovered, setIsHovered] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [customer, setCustomer] = useState<AccountCustomer | null>(null);

    useEffect(() => {
      let mounted = true;
      const run = async () => {
        if (!checkAuth) return;
        try {
          const result = await checkAuth();
          if (mounted) { setIsSignedIn(!!result.authenticated); setCustomer(result.customer || null); }
        } catch {}
      };
      run();
      return () => { mounted = false; };
    }, [checkAuth]);

    if (!isSignedIn && !showWhenSignedOut) return <></>;
    if (isSignedIn && !showWhenSignedIn) return <></>;

    const sz = SIZE_MAP[(iconSize as AccountButtonIconSize) || 'md'];
    const cls = STYLE_CLASS[(style as AccountButtonStyle) || 'minimal'];
    const href = isSignedIn ? signedInLink : linkTo;
    const initials = initialsOf(customer);
    const resolvedIconColor = resolveColor(iconColor);
    const resolvedHoverColor = resolveColor(hoverColor);

    return (
      <a
        href={href}
        className={`relative flex items-center gap-2 transition-all ${cls}`}
        style={{
          color: isHovered ? resolvedHoverColor : resolvedIconColor,
          backgroundColor: style === 'filled' ? (isHovered ? resolvedHoverColor : resolvedIconColor) : 'transparent',
          borderColor: style === 'outlined' ? resolvedIconColor : 'transparent',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isSignedIn ? `My Account${customer?.first_name ? ` (${customer.first_name})` : ''}` : 'Account'}
      >
        {isSignedIn && initials ? (
          <span
            className="flex items-center justify-center rounded-full text-xs font-semibold text-white"
            style={{
              width: sz, height: sz,
              backgroundColor: resolvedHoverColor,
              fontSize: sz * 0.45,
            }}
          >
            {initials}
          </span>
        ) : (
          <span
            style={{
              color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor),
            }}
          >
            <UserSvg size={sz} />
          </span>
        )}
        {isSignedIn && (
          <span
            className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white"
            style={{ transform: 'translate(10%, 10%)' }}
          />
        )}
        {showLabel && (
          <span className="font-medium" style={{ color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor) }}>
            {isSignedIn && customer?.first_name ? customer.first_name : label}
          </span>
        )}
      </a>
    );
  },
};

export default AccountButton;
