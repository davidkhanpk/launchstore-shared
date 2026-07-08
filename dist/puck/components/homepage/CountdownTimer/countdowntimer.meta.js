/**
 * CountdownTimer — AI capability metadata.
 *
 * Dropped fields: showProducts, collectionId, productLimit, productLayout
 * were declared in both source versions but never rendered. Removed in
 * shared — if a "show products from a Medusa collection" feature lands
 * in a follow-up epic, reintroduce them with proper rendering.
 */
export const countdownTimerMeta = {
    name: 'CountdownTimer',
    label: 'Countdown Timer',
    description: 'A live countdown timer (days/hours/minutes/seconds) with an optional CTA button. Three styles: boxes, circles, minimal. Use for sale countdowns, drop launches, or event timers. Has a mode prop (live|preview) — preview skips the interval to avoid editor churn.',
    category: 'homepage',
    intent: ['countdown', 'urgency', 'sale', 'drop', 'launch', 'limited-time'],
    visualRole: 'above-fold',
    dataDeps: [],
    copyFields: ['title', 'subtitle', 'ctaText'],
    themeable: ['backgroundColor', 'textColor', 'timerColor', 'accentColor'],
    a11yRisk: 'medium',
    a11yNotes: 'Live timer ticks silently without exposing remaining time to assistive tech. For WCAG compliance, expose a visually hidden region with a polite aria-live "update" announcement when time crosses minute or hour boundaries. Document this as a follow-up.',
    mobileBehavior: 'responsive',
    searchTags: ['countdown', 'timer', 'urgency', 'sale', 'drop', 'launch', 'limited-time'],
    props: {
        title: { type: 'string' },
        subtitle: { type: 'string' },
        endDate: { type: 'string', description: 'ISO 8601 date string' },
        timerStyle: { type: 'enum', options: ['boxes', 'minimal', 'circle'] },
        showDays: { type: 'boolean', required: true },
        showHours: { type: 'boolean', required: true },
        showMinutes: { type: 'boolean', required: true },
        showSeconds: { type: 'boolean', required: true },
        showCTA: { type: 'boolean', required: true },
        ctaText: { type: 'string' },
        ctaLink: { type: 'string' },
        backgroundColor: { type: 'string' },
        textColor: { type: 'string' },
        timerColor: { type: 'string' },
        accentColor: { type: 'string' },
        spacing: { type: 'enum', options: ['compact', 'normal', 'spacious'] },
        mode: { type: 'enum', options: ['preview', 'live'] },
    },
};
//# sourceMappingURL=countdowntimer.meta.js.map