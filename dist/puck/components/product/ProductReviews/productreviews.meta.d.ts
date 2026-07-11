export declare const productReviewsMeta: {
    readonly name: "ProductReviews";
    readonly label: "Product Reviews";
    readonly description: "Full product-reviews widget: list + ratings summary + sort + paginate + inline submit form + helpful/unhelpful votes + optional media uploads + verified-purchase badges. State (form, votes, media) lives in shared. Data actions are callback-injected: fetchReviews, createReview, voteOnReview, uploadReviewMedia, fetchCustomer. signInHref is the localized path consumers pass (default /account). All 7 lucide icons (Star/Check/Pencil/X/Image/ThumbUp/ThumbDown) replaced with inline SVG.";
    readonly category: "product";
    readonly intent: readonly ["product", "reviews", "ratings", "social-proof", "feedback"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["product (injected)", "fetchReviews", "createReview", "voteOnReview", "uploadReviewMedia", "fetchCustomer", "signInHref"];
    readonly copyFields: readonly ["reviewsPerPage"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Form submit triggers a POST. Vote buttons are real <button>s with disabled state during in-flight. Stars use SVG with currentColor so they pick up hover/focus state. Media uploads use an sr-only file input triggered by a labeled visible button (proper a11y). Sign-in link uses a label + href, not a button (preserves middleware behavior).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "reviews", "ratings", "social-proof", "feedback", "ugc"];
    readonly props: {
        readonly showRatingsSummary: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showVerifiedBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly sortBy: {
            readonly type: "enum";
            readonly options: readonly ["recent", "helpful", "rating_high", "rating_low"];
            readonly required: true;
        };
        readonly reviewsPerPage: {
            readonly type: "number";
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductReviewsMeta = typeof productReviewsMeta;
//# sourceMappingURL=productreviews.meta.d.ts.map