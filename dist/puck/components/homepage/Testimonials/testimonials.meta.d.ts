/**
 * Testimonials — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt (powers "what can you build").
 *
 * Shape is validated by the build script — failed validations fail the CI
 * build.
 */
export declare const testimonialsMeta: {
    /** Must match the Puck `label` field (the type used in puck data) */
    readonly name: "Testimonials";
    /** Display name in the AI prompt */
    readonly label: "Testimonials";
    /** Short description — surfaced in Tier 3 catalog */
    readonly description: "A grid or carousel of customer reviews with avatar, name, role, rating, and date. Currently uses hardcoded mock data — wire to a reviews collection when Medusa product reviews land.";
    /** Category for grouping in the AI prompt */
    readonly category: "homepage";
    /** User-intent keywords the AI can match against */
    readonly intent: readonly ["social-proof", "reviews", "testimonials", "quotes", "trust", "ratings"];
    /** Visual role on the page */
    readonly visualRole: "mid-page";
    /** Does the component need data fetched at render time? */
    readonly dataDeps: readonly [];
    /** KNOWN LIMITATION: real testimonial data isn't yet wired — see Testimonials.tsx. */
    readonly dataDepsNote: "Hardcodes 4 mock testimonials and slices to maxTestimonials. Will be replaced with a Medusa reviews collection in a follow-up epic.";
    /** Prop names that contain user-facing copy */
    readonly copyFields: readonly ["sectionTitle", "sectionSubtitle"];
    /** Prop names that accept theme tokens */
    readonly themeable: readonly ["backgroundColor", "textColor", "cardBackground", "accentColor"];
    /** Accessibility risk level for AI-generated variants */
    readonly a11yRisk: "low";
    /** How the component behaves on small viewports */
    readonly mobileBehavior: "responsive";
    /** Tags for the discover_components semantic search (E2 T-006) */
    readonly searchTags: readonly ["testimonials", "reviews", "social-proof", "quotes", "ratings", "carousel", "trust", "mid-page"];
    /** Prop schema — mirrors testimonials.types.ts for build-time validation */
    readonly props: {
        readonly sectionTitle: {
            readonly type: "string";
            readonly description: "Section heading";
        };
        readonly sectionSubtitle: {
            readonly type: "string";
            readonly description: "Section subheading";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly displayMode: {
            readonly type: "enum";
            readonly options: readonly ["grid", "carousel"];
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["card", "quote", "minimal"];
        };
        readonly columns: {
            readonly type: "number";
            readonly min: 1;
            readonly max: 4;
        };
        readonly maxTestimonials: {
            readonly type: "number";
            readonly min: 1;
            readonly max: 20;
        };
        readonly slidesPerView: {
            readonly type: "number";
            readonly min: 1;
            readonly max: 3;
        };
        readonly slidesPerViewTablet: {
            readonly type: "number";
            readonly min: 1;
            readonly max: 2;
        };
        readonly slidesPerViewMobile: {
            readonly type: "number";
            readonly min: 1;
            readonly max: 1;
        };
        readonly spaceBetween: {
            readonly type: "number";
            readonly min: 0;
            readonly max: 100;
        };
        readonly autoplay: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly autoplayDelay: {
            readonly type: "number";
            readonly min: 2000;
            readonly max: 10000;
        };
        readonly loop: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly navigation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly pagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly effect: {
            readonly type: "enum";
            readonly options: readonly ["slide", "fade"];
        };
        readonly showAvatar: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showName: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showRole: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showRating: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDate: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly cardBackground: {
            readonly type: "string";
        };
        readonly accentColor: {
            readonly type: "string";
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
        };
    };
};
export type TestimonialsMeta = typeof testimonialsMeta;
//# sourceMappingURL=testimonials.meta.d.ts.map