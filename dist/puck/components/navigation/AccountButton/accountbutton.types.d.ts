export type AccountButtonIconSize = 'sm' | 'md' | 'lg';
export type AccountButtonStyle = 'minimal' | 'outlined' | 'filled';
export interface AccountCustomer {
    first_name?: string;
    last_name?: string;
    email?: string;
}
/**
 * Callback used by AccountButton to query the current auth state.
 * Stores can plug in any data source (MedusaJS `/api/auth/check`,
 * NextAuth session fetcher, custom JWT endpoint) without coupling
 * the shared component to a specific auth library.
 */
export type AccountCheckAuth = () => Promise<{
    authenticated: boolean;
    customer?: AccountCustomer | null;
}>;
export interface AccountButtonProps {
    showLabel: boolean;
    label: string;
    iconSize: AccountButtonIconSize;
    iconColor: string;
    hoverColor: string;
    style: AccountButtonStyle;
    linkTo: string;
    signedInLink: string;
    showWhenSignedOut: boolean;
    showWhenSignedIn: boolean;
    /**
     * Async function returning the current auth state. If omitted,
     * the button renders in signed-OUT state by default.
     */
    checkAuth?: AccountCheckAuth;
}
//# sourceMappingURL=accountbutton.types.d.ts.map