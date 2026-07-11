/**
 * CountdownTimer — AI capability metadata.
 *
 * Dropped fields: showProducts, collectionId, productLimit, productLayout
 * were declared in both source versions but never rendered. Removed in
 * shared — if a "show products from a Medusa collection" feature lands
 * in a follow-up epic, reintroduce them with proper rendering.
 */
export declare const countdownTimerMeta: {
    readonly name: "CountdownTimer";
    readonly label: "Countdown Timer";
    readonly description: "A live countdown timer (days/hours/minutes/seconds) with an optional CTA button. Three styles: boxes, circles, minimal. Use for sale countdowns, drop launches, or event timers. Has a mode prop (live|preview) — preview skips the interval to avoid editor churn.";
    readonly category: "homepage";
    readonly intent: readonly ["countdown", "urgency", "sale", "drop", "launch", "limited-time"];
    readonly visualRole: "above-fold";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "subtitle", "ctaText"];
    readonly themeable: readonly ["backgroundColor", "textColor", "timerColor", "accentColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Live timer ticks silently without exposing remaining time to assistive tech. For WCAG compliance, expose a visually hidden region with a polite aria-live \"update\" announcement when time crosses minute or hour boundaries. Document this as a follow-up.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["countdown", "timer", "urgency", "sale", "drop", "launch", "limited-time"];
    readonly props: {
        readonly title: {
            readonly type: "string";
        };
        readonly subtitle: {
            readonly type: "string";
        };
        readonly endDate: {
            readonly type: "string";
            readonly description: "ISO 8601 date string";
        };
        readonly timerStyle: {
            readonly type: "enum";
            readonly options: readonly ["boxes", "minimal", "circle"];
        };
        readonly showDays: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showHours: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showMinutes: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSeconds: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCTA: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly ctaText: {
            readonly type: "string";
        };
        readonly ctaLink: {
            readonly type: "string";
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly timerColor: {
            readonly type: "string";
        };
        readonly accentColor: {
            readonly type: "string";
        };
        readonly spacing: {
            readonly type: "enum";
            readonly options: readonly ["compact", "normal", "spacious"];
        };
        readonly mode: {
            readonly type: "enum";
            readonly options: readonly ["preview", "live"];
        };
    };
};
export type CountdownTimerMeta = typeof countdownTimerMeta;
//# sourceMappingURL=countdowntimer.meta.d.ts.map