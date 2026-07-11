export declare const cartButtonMeta: {
    readonly name: "CartButton";
    readonly label: "Cart Button";
    readonly description: "Cart button with item-count badge (auto-syncs via the consumer's CartContext). The shared component is cart-library-agnostic: consumer wrapper passes cartCount (number) and onOpenCart (() => void) at render-time. Stores that want this badge to update reactively in the Puck-rendered storefront must implement D-3 (shared CartContext) or inject cartCount from their own provider.";
    readonly category: "navigation";
    readonly intent: readonly ["cart", "basket", "nav-cart"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["cartCount (injected)", "onOpenCart (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["iconColor", "hoverColor", "badgeBackgroundColor", "badgeTextColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "aria-label includes item count. Button is keyboard-focusable (native <button>).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "basket", "nav-cart", "shopping-cart"];
    readonly props: {
        readonly showLabel: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly label: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly badgePosition: {
            readonly type: "enum";
            readonly options: readonly ["top-right", "top-left", "bottom-right"];
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
        readonly badgeBackgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly badgeTextColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "outlined", "filled"];
            readonly required: true;
        };
        readonly cartCount: {
            readonly type: "number";
            readonly required: false;
        };
    };
};
export type CartButtonMeta = typeof cartButtonMeta;
//# sourceMappingURL=cartbutton.meta.d.ts.map