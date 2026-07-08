export declare const productRatingMeta: {
    readonly name: "ProductRating";
    readonly label: "Product Rating";
    readonly description: "Star-rating row with optional review count. Optional count display, three sizes (sm/md/lg). The shared component does NOT fetch reviews; the consumer wrapper provides a `fetchReviews(productId, { limit })` callback returning `{ average_rating, count } | null`. Lucide Star replaced with inline SVG.";
    readonly category: "product";
    readonly intent: readonly ["product", "rating", "stars", "reviews-summary"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)", "fetchReviews (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Stars are decorative. The numeric rating (e.g. \"4.3\") is announced by screen readers. For full a11y the consumer can wrap with role=\"img\" aria-label=\"Average rating 4.3 out of 5 from 12 reviews\".";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "rating", "stars", "reviews", "summary"];
    readonly props: {
        readonly showCount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export type ProductRatingMeta = typeof productRatingMeta;
//# sourceMappingURL=productrating.meta.d.ts.map