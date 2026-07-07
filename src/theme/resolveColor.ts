/**
 * Theme Token Resolution Utilities
 *
 * Resolves semantic color token paths (e.g., "brand.primary") to CSS
 * variables (e.g., "var(--theme-brand-primary)"). Hex colors pass
 * through unchanged.
 *
 * Source-of-truth lives here in launchstore-shared so renderers
 * across frontend + storefront + website use the same token contract.
 */

export function resolveColor(colorValue: string | undefined): string | undefined {
  if (!colorValue) return undefined;
  if (colorValue.startsWith('#')) return colorValue;
  if (colorValue.startsWith('rgb')) return colorValue;
  if (colorValue.includes('.')) {
    const cssVarName = colorValue.replace(/\./g, '-');
    return `var(--theme-${cssVarName})`;
  }
  return colorValue;
}

export function resolveColors<T extends Record<string, any>>(obj: T): T {
  const resolved = { ...obj } as any;
  for (const [key, value] of Object.entries(resolved)) {
    if (typeof value === 'string') {
      resolved[key] = resolveColor(value);
    }
  }
  return resolved;
}

export function isTokenPath(value: string | undefined): boolean {
  if (!value) return false;
  return value.includes('.') && !value.startsWith('#') && !value.startsWith('rgb');
}
