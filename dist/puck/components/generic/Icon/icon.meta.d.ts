export declare const iconMeta: {
    readonly name: "Icon";
    readonly label: "Icon";
    readonly description: "Standalone icon renderer with curated 38-icon set (outline / heroicons-style). No external dep — bundled as inline SVG components. Size presets (xs..2xl in px), color (hex or theme token), stroke width, alignment, top/bottom margin. Unknown icon name shows fallback \"not found\" message.";
    readonly category: "generic";
    readonly intent: readonly ["icon", "glyph", "symbol", "svg", "visual", "inline-icon"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Decorative icons should have aria-hidden=\"true\" set by parent. When icon carries meaning, wrap in a button/link with aria-label or visible label.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["icon", "glyph", "svg", "inline", "heroicon", "visual", "symbol"];
    readonly props: {
        readonly iconName: {
            readonly type: "enum";
            readonly options: readonly ["HeartIcon", "StarIcon", "BookmarkIcon", "CheckIcon", "XMarkIcon", "PlusIcon", "MinusIcon", "ChevronDownIcon", "ChevronUpIcon", "ChevronLeftIcon", "ChevronRightIcon", "ArrowLeftIcon", "ArrowRightIcon", "ArrowUpIcon", "ArrowDownIcon", "MagnifyingGlassIcon", "ShoppingCartIcon", "ShoppingBagIcon", "UserIcon", "UsersIcon", "HomeIcon", "EnvelopeIcon", "PhoneIcon", "CalendarIcon", "ClockIcon", "BellIcon", "Cog6ToothIcon", "InformationCircleIcon", "ExclamationCircleIcon", "CheckCircleIcon", "XCircleIcon", "MapPinIcon", "TagIcon", "EyeIcon", "DocumentIcon", "GiftIcon", "QuestionMarkCircleIcon"];
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
        };
        readonly strokeWidth: {
            readonly type: "enum";
            readonly options: readonly ["1", "1.5", "2", "2.5"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly marginTop: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
        };
    };
};
export type IconMeta = typeof iconMeta;
//# sourceMappingURL=icon.meta.d.ts.map