export declare const avatarMeta: {
    readonly name: "Avatar";
    readonly label: "Avatar";
    readonly description: "Circular or square avatar with image (src) or initials fallback. Initials computed from name field (first letter of each word, max 2). Optional name label inline or below. Background/text colors themable via resolveColor.";
    readonly category: "generic";
    readonly intent: readonly ["avatar", "user-avatar", "profile", "initials", "account"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["name"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "When src is provided, <img> alt=name is the screen reader announcement. Initials-only avatar should ideally have aria-label=name. Decorative avatars inside card layouts can have alt=\"\" + aria-hidden=true.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["avatar", "user", "profile", "initials", "account", "profile-pic"];
    readonly props: {
        readonly src: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly shape: {
            readonly type: "enum";
            readonly options: readonly ["circle", "square"];
            readonly required: true;
        };
        readonly showName: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly namePosition: {
            readonly type: "enum";
            readonly options: readonly ["right", "bottom"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type AvatarMeta = typeof avatarMeta;
//# sourceMappingURL=avatar.meta.d.ts.map