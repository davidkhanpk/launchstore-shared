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
export declare function resolveColor(colorValue: string | undefined): string | undefined;
export declare function resolveColors<T extends Record<string, any>>(obj: T): T;
export declare function isTokenPath(value: string | undefined): boolean;
//# sourceMappingURL=resolveColor.d.ts.map