export declare const accountButtonMeta: {
    readonly name: "AccountButton";
    readonly label: "Account Button";
    readonly description: "Account/Sign-in button with signed-in/signed-out states. Optional label, three style variants. The component is auth-library-agnostic: consumer provides a checkAuth() callback returning { authenticated, customer? }. When signed in, an initials avatar replaces the icon and a green online dot is displayed.";
    readonly category: "navigation";
    readonly intent: readonly ["account", "sign-in", "auth", "profile", "user", "nav-account"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["checkAuth (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["iconColor", "hoverColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Anchor has aria-label that includes first_name when signed in. Initials avatar is announced as text content. Green status dot is decorative (no aria).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "sign-in", "auth", "profile", "user", "nav-account"];
    readonly props: {
        readonly showLabel: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly label: {
            readonly type: "string";
            readonly required: true;
        };
        readonly iconSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly iconColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "outlined", "filled"];
            readonly required: true;
        };
        readonly linkTo: {
            readonly type: "string";
            readonly required: true;
        };
        readonly signedInLink: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showWhenSignedOut: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showWhenSignedIn: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type AccountButtonMeta = typeof accountButtonMeta;
//# sourceMappingURL=accountbutton.meta.d.ts.map